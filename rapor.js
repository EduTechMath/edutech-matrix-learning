const PROGRESS_KEY = 'edulearn-progress-v1';
const progressChart = document.getElementById('progressChart');
const chartEmpty = document.getElementById('chartEmpty');
const weaknessList = document.getElementById('weaknessList');
const weaknessEmpty = document.getElementById('weaknessEmpty');
const rhythmSummary = document.getElementById('rhythmSummary');
const activityCalendar = document.getElementById('activityCalendar');
const rhythmEmpty = document.getElementById('rhythmEmpty');
const badgeList = document.getElementById('badgeList');
const shareStoryButton = document.getElementById('shareStory');
const shareStatus = document.getElementById('shareStatus');
const leaderboardOptIn = document.getElementById('leaderboardOptIn');
const leaderboardStatus = document.getElementById('leaderboardStatus');
const numberFormat = new Intl.NumberFormat('id-ID');
const percentFormat = new Intl.NumberFormat('id-ID', { maximumFractionDigits: 0 });
const LEADERBOARD_PREFERENCE_KEY = 'edulearn-leaderboard-opt-in-v1';

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
    return {
      byTopic: saved.byTopic && typeof saved.byTopic === 'object' ? saved.byTopic : {},
      examHistory: Array.isArray(saved.examHistory) ? saved.examHistory : []
    };
  } catch {
    return { byTopic: {}, examHistory: [] };
  }
}

const progress = loadProgress();
const topicNames = {
  'quadratic-function': 'Fungsi kuadrat',
  'linear-programming': 'Program linear',
  functions: 'Fungsi',
  'social-arithmetic': 'Aritmetika sosial',
  statistics: 'Statistika',
  probability: 'Peluang',
  'plane-figures': 'Bangun datar'
};

function topicLabel(topicId) {
  return topicNames[topicId] || topicId.replaceAll('-', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function validExamHistory() {
  return progress.examHistory
    .filter((exam) => Number.isFinite(Date.parse(exam.date)) && Number.isFinite(Number(exam.accuracy)))
    .map((exam) => ({ ...exam, accuracy: Math.max(0, Math.min(100, Number(exam.accuracy))) }))
    .sort((first, second) => Date.parse(first.date) - Date.parse(second.date));
}

const allExams = validExamHistory();
const examDates = allExams.map((exam) => new Date(exam.date));
const topicProgress = Object.entries(progress.byTopic)
  .map(([topicId, stats]) => {
    const correct = Number(stats.correct) || 0;
    const wrong = Number(stats.wrong) || 0;
    const attempts = Number(stats.attempts) || 0;
    const answered = correct + wrong;
    return { topicId, name: topicLabel(topicId), correct, wrong, attempts, accuracy: answered ? Math.round((correct / answered) * 100) : null };
  })
  .filter((topic) => topic.attempts > 0 || topic.correct + topic.wrong > 0)
  .sort((first, second) => (first.accuracy ?? 101) - (second.accuracy ?? 101));

document.getElementById('examCount').textContent = numberFormat.format(allExams.length);
document.getElementById('topicCount').textContent = numberFormat.format(topicProgress.length);

function uniqueDayTimestamps(dates) {
  return [...new Set(dates.map((date) => new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()))].sort((first, second) => first - second);
}

function currentStreakDays(dates) {
  const uniqueDates = uniqueDayTimestamps(dates);
  if (!uniqueDates.length) return 0;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const lastDate = uniqueDates[uniqueDates.length - 1];
  if (today.getTime() - lastDate > 86400000) return 0;

  let streak = 1;
  for (let index = uniqueDates.length - 1; index > 0; index -= 1) {
    if (uniqueDates[index] - uniqueDates[index - 1] !== 86400000) break;
    streak += 1;
  }
  return streak;
}

const activeStreak = currentStreakDays(examDates);
document.getElementById('currentStreak').textContent = `${activeStreak} ${activeStreak === 1 ? 'hari' : 'hari'}`;
document.getElementById('streakStatus').textContent = activeStreak
  ? 'Try out lengkap berturut-turut'
  : 'Mulai lagi saat siap';

function renderBadges() {
  const badges = [
    { title: 'Mulai dulu', detail: 'Selesaikan satu try out.', earned: allExams.length >= 1, symbol: '01' },
    { title: 'Jaga ritme', detail: 'Latihan tiga hari berturut-turut.', earned: longestStreakDays(examDates) >= 3, symbol: '03' },
    { title: 'Tekun mencoba', detail: 'Selesaikan lima try out.', earned: allExams.length >= 5, symbol: '05' }
  ];

  badgeList.innerHTML = badges.map((badge) => `
    <article class="badge-item ${badge.earned ? 'is-earned' : 'is-locked'}">
      <span class="badge-symbol" aria-hidden="true">${badge.earned ? '✓' : badge.symbol}</span>
      <div><strong>${badge.title}</strong><span>${badge.detail}</span></div>
      <span class="badge-state">${badge.earned ? 'Didapat' : 'Belum'}</span>
    </article>
  `).join('');
}

function renderStoryPreview() {
  const latestExam = allExams[allExams.length - 1];
  const storyAccuracy = document.getElementById('storyAccuracy');
  const storyDate = document.getElementById('storyDate');
  const storyStreak = document.getElementById('storyStreak');

  if (!latestExam) {
    storyAccuracy.textContent = '—%';
    storyDate.textContent = 'Selesaikan try out untuk membuat kartu hasil.';
    storyStreak.textContent = `Streak ${activeStreak} hari`;
    shareStoryButton.disabled = true;
    shareStatus.textContent = 'Setelah try out lengkap tercatat, kartu hasil siap dibagikan.';
    return;
  }

  storyAccuracy.textContent = `${percentFormat.format(latestExam.accuracy)}%`;
  storyDate.textContent = formatDate(new Date(latestExam.date), { dateStyle: 'long' });
  storyStreak.textContent = `Streak ${activeStreak} ${activeStreak === 1 ? 'hari' : 'hari'}`;
  shareStoryButton.disabled = false;
  shareStatus.textContent = 'Bagikan lewat menu berbagi perangkat, atau unduh gambar jika browser tidak mendukung.';
}

function roundedRect(context, x, y, width, height, radius) {
  context.beginPath();
  context.roundRect(x, y, width, height, radius);
}

function createStoryBlob() {
  const latestExam = allExams[allExams.length - 1];
  if (!latestExam) return Promise.resolve(null);

  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1920;
  const context = canvas.getContext('2d');
  if (!context) return Promise.resolve(null);

  context.fillStyle = '#1d302f';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = 'rgba(243,244,236,0.08)';
  context.lineWidth = 2;
  for (let x = 0; x < canvas.width; x += 48) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, canvas.height);
    context.stroke();
  }
  for (let y = 0; y < canvas.height; y += 48) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(canvas.width, y);
    context.stroke();
  }

  roundedRect(context, 76, 100, 928, 1720, 26);
  context.fillStyle = '#f3f4ec';
  context.fill();
  context.fillStyle = '#176d64';
  context.fillRect(76, 100, 12, 1720);

  context.fillStyle = '#176d64';
  context.font = '700 32px Trebuchet MS, sans-serif';
  context.fillText('EDULEARN', 140, 185);
  context.fillStyle = '#5e706c';
  context.font = '500 24px Trebuchet MS, sans-serif';
  context.fillText('CATATAN BELAJAR', 140, 225);

  context.fillStyle = '#a54330';
  context.font = '700 25px Trebuchet MS, sans-serif';
  context.fillText('SATU LANGKAH LAGI', 140, 405);
  context.fillStyle = '#1d302f';
  context.font = '600 250px Cambria, Georgia, serif';
  context.fillText(`${percentFormat.format(latestExam.accuracy)}%`, 125, 760);
  context.fillStyle = '#5e706c';
  context.font = '500 32px Trebuchet MS, sans-serif';
  context.fillText('akurasi sesi terakhir', 145, 825);

  context.strokeStyle = '#d3d9cd';
  context.lineWidth = 3;
  context.beginPath();
  context.moveTo(140, 930);
  context.lineTo(930, 930);
  context.stroke();

  context.fillStyle = '#5e706c';
  context.font = '500 25px Trebuchet MS, sans-serif';
  context.fillText('TRY OUT LENGKAP', 145, 1015);
  context.fillStyle = '#1d302f';
  context.font = '600 40px Cambria, Georgia, serif';
  context.fillText(formatDate(new Date(latestExam.date), { dateStyle: 'long' }), 145, 1080);

  roundedRect(context, 140, 1190, 800, 185, 20);
  context.fillStyle = '#d4e58a';
  context.fill();
  context.fillStyle = '#25341d';
  context.font = '700 36px Trebuchet MS, sans-serif';
  context.fillText(`STREAK ${activeStreak} ${activeStreak === 1 ? 'HARI' : 'HARI'}`, 185, 1300);
  context.fillStyle = '#5e706c';
  context.font = '500 23px Trebuchet MS, sans-serif';
  context.fillText('Konsistensi tumbuh dari langkah kecil.', 145, 1535);
  context.fillStyle = '#176d64';
  context.font = '700 25px Trebuchet MS, sans-serif';
  context.fillText('Proses belajar, satu sesi setiap kali.', 145, 1700);

  return new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
}

async function shareStory() {
  shareStoryButton.disabled = true;
  shareStatus.textContent = 'Menyiapkan gambar Story…';
  try {
    const blob = await createStoryBlob();
    if (!blob) throw new Error('Canvas unavailable');
    const file = typeof File === 'undefined' ? null : new File([blob], 'edulearn-story.png', { type: 'image/png' });

    if (file && navigator.share && navigator.canShare?.({ files: [file] })) {
      await navigator.share({ files: [file], title: 'Catatan belajar EduLearn' });
      shareStatus.textContent = 'Menu berbagi ditutup.';
    } else {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'edulearn-story.png';
      link.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      shareStatus.textContent = 'Gambar diunduh. Buka Instagram lalu pilih gambar di Story.';
    }
  } catch (error) {
    shareStatus.textContent = error.name === 'AbortError'
      ? 'Berbagi dibatalkan.'
      : 'Gambar belum bisa dibuat di browser ini. Coba browser lain.';
  } finally {
    shareStoryButton.disabled = false;
  }
}

function setupLeaderboardOptIn() {
  try {
    leaderboardOptIn.checked = localStorage.getItem(LEADERBOARD_PREFERENCE_KEY) === 'true';
  } catch {
    leaderboardOptIn.checked = false;
  }

  function updateLeaderboardStatus() {
    leaderboardStatus.textContent = leaderboardOptIn.checked
      ? 'Preferensimu disimpan lokal. Leaderboard bersama belum tersambung, jadi tidak ada data yang dibagikan.'
      : 'Nonaktif. Skor dan progresmu tetap privat di perangkat ini.';
    try {
      localStorage.setItem(LEADERBOARD_PREFERENCE_KEY, String(leaderboardOptIn.checked));
    } catch {
      leaderboardStatus.textContent = 'Pilihan berlaku selama halaman ini terbuka; penyimpanan lokal tidak tersedia.';
    }
  }

  leaderboardOptIn.addEventListener('change', updateLeaderboardStatus);
  updateLeaderboardStatus();
}

function formatDate(date, options = { day: 'numeric', month: 'short' }) {
  return new Intl.DateTimeFormat('id-ID', options).format(date);
}

function renderProgressChart(period = 'all') {
  const filteredExams = period === 'all'
    ? allExams
    : allExams.filter((exam) => Date.now() - Date.parse(exam.date) <= Number(period) * 24 * 60 * 60 * 1000);

  chartEmpty.hidden = filteredExams.length > 0;
  progressChart.toggleAttribute('hidden', filteredExams.length === 0);
  if (!filteredExams.length) return;

  const width = 760;
  const left = 50;
  const right = 730;
  const top = 25;
  const bottom = 248;
  const mapY = (value) => bottom - (value / 100) * (bottom - top);
  const mapX = (index) => filteredExams.length === 1
    ? (left + right) / 2
    : left + (index / (filteredExams.length - 1)) * (right - left);
  const gridLines = [0, 25, 50, 75, 100].map((value) => `
    <line class="chart-grid-line" x1="${left}" y1="${mapY(value)}" x2="${right}" y2="${mapY(value)}" />
    <text class="chart-axis-label" x="${left - 12}" y="${mapY(value) + 4}" text-anchor="end">${value}%</text>
  `).join('');
  const line = filteredExams.map((exam, index) => `${index ? 'L' : 'M'}${mapX(index)},${mapY(exam.accuracy)}`).join(' ');
  const points = filteredExams.map((exam, index) => {
    const date = new Date(exam.date);
    return `
      <circle class="chart-point" cx="${mapX(index)}" cy="${mapY(exam.accuracy)}" r="6">
        <title>${formatDate(date, { dateStyle: 'long' })}: ${percentFormat.format(exam.accuracy)}%</title>
      </circle>
      <text class="chart-point-label" x="${mapX(index)}" y="${mapY(exam.accuracy) - 12}" text-anchor="middle">${percentFormat.format(exam.accuracy)}%</text>
    `;
  }).join('');
  const dateLabels = [0, Math.floor((filteredExams.length - 1) / 2), filteredExams.length - 1]
    .filter((index, position, values) => values.indexOf(index) === position)
    .map((index) => `<text class="chart-date-label" x="${mapX(index)}" y="${bottom + 28}" text-anchor="middle">${formatDate(new Date(filteredExams[index].date))}</text>`)
    .join('');

  progressChart.innerHTML = `
    <title id="chartTitle">Akurasi dari ${filteredExams.length} try out</title>
    <desc id="chartDescription">Grafik menunjukkan persentase akurasi pada setiap try out lengkap dari waktu ke waktu.</desc>
    ${gridLines}
    <path class="chart-line" d="${line}" />
    ${points}
    ${dateLabels}
  `;
}

function renderWeaknesses() {
  weaknessEmpty.hidden = topicProgress.length > 0;
  if (!topicProgress.length) return;

  weaknessList.innerHTML = topicProgress.map((topic) => {
    const accuracyText = topic.accuracy === null ? 'Belum ada jawaban' : `${topic.accuracy}% akurasi`;
    const width = topic.accuracy === null ? 0 : topic.accuracy;
    return `
      <article class="weakness-row ${topic.accuracy !== null && topic.accuracy < 60 ? 'is-low' : ''}">
        <div><span class="weakness-topic">${topic.name}</span><span class="weakness-meta">${numberFormat.format(topic.attempts)} sesi · ${numberFormat.format(topic.correct)} benar · ${numberFormat.format(topic.wrong)} salah</span></div>
        <div class="weakness-meter" role="meter" aria-label="Akurasi ${topic.name}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${width}"><span style="width:${width}%"></span></div>
        <strong class="weakness-accuracy">${accuracyText}</strong>
      </article>
    `;
  }).join('');
}

function longestGapDays(dates) {
  const uniqueDates = [...new Set(dates.map((date) => new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()))].sort((a, b) => a - b);
  if (uniqueDates.length < 2) return null;
  let longestGap = 0;
  for (let index = 1; index < uniqueDates.length; index += 1) {
    longestGap = Math.max(longestGap, Math.round((uniqueDates[index] - uniqueDates[index - 1]) / 86400000));
  }
  return longestGap;
}

function longestStreakDays(dates) {
  const uniqueDates = [...new Set(dates.map((date) => new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()))].sort((a, b) => a - b);
  let best = 0;
  let current = 0;
  let previous = null;
  uniqueDates.forEach((date) => {
    current = previous !== null && date - previous === 86400000 ? current + 1 : 1;
    best = Math.max(best, current);
    previous = date;
  });
  return best;
}

function renderActivity() {
  const dates = allExams.map((exam) => new Date(exam.date));
  rhythmEmpty.hidden = dates.length > 0;
  if (!dates.length) {
    activityCalendar.innerHTML = '';
    return;
  }

  const counts = new Map();
  dates.forEach((date) => {
    const key = new Date(date.getFullYear(), date.getMonth(), date.getDate()).toDateString();
    counts.set(key, (counts.get(key) || 0) + 1);
  });
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const firstDay = new Date(today);
  firstDay.setDate(today.getDate() - 55);
  const activeDays = [...counts.values()].filter((count) => count > 0).length;
  const mostActiveCount = Math.max(...counts.values());
  const mostActiveDay = [...counts.entries()].sort((first, second) => second[1] - first[1])[0];
  const gap = longestGapDays(dates);
  const streak = longestStreakDays(dates);

  rhythmSummary.innerHTML = `
    <div class="rhythm-stat"><strong>${activeDays}</strong><span>hari aktif tercatat</span></div>
    <div class="rhythm-stat"><strong>${formatDate(new Date(mostActiveDay[0]), { weekday: 'short' })}</strong><span>hari dengan sesi terbanyak (${mostActiveCount})</span></div>
    <div class="rhythm-stat"><strong>${gap === null ? '—' : `${gap} hari`}</strong><span>jeda terpanjang antarsesi</span></div>
    <div class="rhythm-stat"><strong>${streak} hari</strong><span>rentetan hari latihan terpanjang</span></div>
  `;

  activityCalendar.innerHTML = Array.from({ length: 56 }, (_, index) => {
    const date = new Date(firstDay);
    date.setDate(firstDay.getDate() + index);
    const count = counts.get(date.toDateString()) || 0;
    const level = count === 0 ? 0 : count === 1 ? 1 : count === 2 ? 2 : 3;
    return `<span class="activity-cell level-${level}" role="img" aria-label="${formatDate(date, { dateStyle: 'long' })}: ${count} try out"></span>`;
  }).join('');
}

function renderReport(period = 'all') {
  renderProgressChart(period);
  renderWeaknesses();
  renderActivity();
}

document.querySelectorAll('[data-period]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-period]').forEach((periodButton) => {
      periodButton.setAttribute('aria-pressed', String(periodButton === button));
    });
    renderProgressChart(button.dataset.period);
  });
});

shareStoryButton.addEventListener('click', shareStory);
setupLeaderboardOptIn();
renderBadges();
renderStoryPreview();
renderReport();