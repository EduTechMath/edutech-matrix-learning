const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

function setTheme(theme) {
  root.dataset.theme = theme;
  const isDark = theme === 'dark';
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.textContent = isDark ? 'Mode terang' : 'Mode gelap';
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#172422' : '#f3f4ec');

  try {
    localStorage.setItem('edulearn-design-preview-theme', theme);
  } catch {
  }
}

let savedTheme = 'light';
try {
  savedTheme = localStorage.getItem('edulearn-design-preview-theme') || 'light';
} catch {
  savedTheme = 'light';
}
setTheme(savedTheme === 'dark' ? 'dark' : 'light');

themeToggle.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

const predictionChoices = document.getElementById('predictionChoices');
const predictionFeedback = document.getElementById('predictionFeedback');
const revealAnswer = document.getElementById('revealAnswer');

revealAnswer.addEventListener('click', () => {
  const selected = predictionChoices.querySelector('input:checked');
  if (!selected) {
    predictionFeedback.textContent = 'Pilih salah satu perkiraan dulu, baru kita cek bersama.';
    predictionFeedback.className = 'feedback-line';
    predictionChoices.querySelector('input')?.focus();
    return;
  }

  const isCorrect = Number(selected.value) === 30000;
  predictionFeedback.textContent = isCorrect
    ? 'Tepat. 15% dari Rp200.000 adalah Rp30.000. Caramu sampai ke sana bagaimana?'
    : 'Belum tepat. Coba pecah 15% menjadi 10% + 5%, lalu jumlahkan hasilnya.';
  predictionFeedback.className = `feedback-line ${isCorrect ? 'is-correct' : 'is-incorrect'}`;
  revealAnswer.disabled = true;
  predictionChoices.querySelectorAll('input').forEach((input) => { input.disabled = true; });
});

const checkpointFeedback = document.getElementById('checkpointFeedback');
document.querySelectorAll('[data-checkpoint-choice]').forEach((button) => {
  button.addEventListener('click', () => {
    const isCorrect = button.dataset.checkpointChoice === '5%';
    document.querySelectorAll('[data-checkpoint-choice]').forEach((option) => {
      option.setAttribute('aria-pressed', String(option === button));
    });
    checkpointFeedback.textContent = isCorrect
      ? 'Betul. Karena 10% + 5% = 15%, kamu bisa hitung keduanya lalu menjumlahkan.'
      : 'Coba cek lagi: bagian yang dicari harus melengkapi 10% agar totalnya 15%.';
    checkpointFeedback.className = `feedback-line ${isCorrect ? 'is-correct' : 'is-incorrect'}`;
  });
});

const priceInput = document.getElementById('priceInput');
const discountRange = document.getElementById('discountRange');
const discountOutput = document.getElementById('discountOutput');
const discountAmount = document.getElementById('discountAmount');
const finalPrice = document.getElementById('finalPrice');
const rupiah = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 });

function updateExploreResult() {
  const price = Math.max(0, Number(priceInput.value) || 0);
  const discount = Number(discountRange.value);
  const savedAmount = Math.round(price * discount / 100);

  discountOutput.value = `${discount}%`;
  discountOutput.textContent = `${discount}%`;
  discountAmount.textContent = rupiah.format(savedAmount);
  finalPrice.textContent = rupiah.format(price - savedAmount);
}

priceInput.addEventListener('input', updateExploreResult);
discountRange.addEventListener('input', updateExploreResult);
updateExploreResult();