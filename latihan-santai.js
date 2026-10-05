const questionSet = [
  {
    topic: 'Persamaan kuadrat',
    prompt: 'Akar-akar dari x² − 7x + 12 = 0 adalah ...',
    context: 'Coba cari dua angka yang hasil kalinya 12 dan jumlahnya 7.',
    choices: ['x = 3 dan x = 4', 'x = −3 dan x = −4', 'x = 2 dan x = 6'],
    answer: 0,
    explanation: 'Persamaan bisa difaktorkan menjadi (x − 3)(x − 4) = 0. Jadi akarnya 3 dan 4.',
    nudge: 'Perhatikan hubungan jumlah dan hasil kali akar dengan koefisien persamaan.'
  },
  {
    topic: 'Fungsi',
    recall: 'Ingat lagi · Fungsi',
    prompt: 'Kalau f(x) = 2x + 3, berapa nilai f(4)?',
    context: 'Masukkan 4 ke setiap x pada aturan fungsi.',
    choices: ['9', '11', '14'],
    answer: 1,
    explanation: 'f(4) = 2 × 4 + 3 = 8 + 3 = 11.',
    nudge: 'Coba ganti x dengan angka yang ada di dalam tanda kurung.'
  },
  {
    topic: 'Bentuk kuadrat',
    prompt: 'Bentuk faktor dari x² + 4x + 3 adalah ...',
    context: 'Cari dua angka yang jumlahnya 4 dan hasil kalinya 3.',
    choices: ['(x + 1)(x + 3)', '(x − 1)(x − 3)', '(x + 2)(x + 2)'],
    answer: 0,
    explanation: '(x + 1)(x + 3) menghasilkan x² + 4x + 3 saat dikalikan.',
    nudge: 'Kalikan kembali pilihanmu untuk memeriksa koefisien x dan angka tetap.'
  },
  {
    topic: 'Program linear',
    recall: 'Ingat lagi · Program linear',
    prompt: 'Daerah memenuhi x + y ≤ 8, x ≥ 0, dan y ≥ 0. Apa titik sudutnya?',
    context: 'Pikirkan titik potong garis dengan sumbu x dan sumbu y, juga titik asal.',
    choices: ['(0,0), (8,0), dan (0,8)', '(0,0), (4,4), dan (8,8)', '(8,0) dan (0,8) saja'],
    answer: 0,
    explanation: 'Daerahnya di kuadran pertama dan di bawah x + y = 8. Titik sudutnya (0,0), (8,0), dan (0,8).',
    nudge: 'Titik sudut ada pada pertemuan batas daerah, termasuk batas sumbu.'
  },
  {
    topic: 'Hubungan akar dan koefisien',
    prompt: 'Untuk x² − 5x + 6 = 0, berapa jumlah dan hasil kali akarnya?',
    context: 'Gunakan bentuk umum x² + bx + c = 0.',
    choices: ['Jumlah 5, hasil kali 6', 'Jumlah −5, hasil kali 6', 'Jumlah 5, hasil kali −6'],
    answer: 0,
    explanation: 'Jumlah akar = −b = 5, sedangkan hasil kalinya = c = 6.',
    nudge: 'Tanda di depan koefisien x berubah saat menghitung jumlah akar.'
  }
];

const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const questionCounter = document.getElementById('questionCounter');
const questionProgress = document.getElementById('questionProgress');
const topicBadge = document.getElementById('topicBadge');
const recallBadge = document.getElementById('recallBadge');
const questionPrompt = document.getElementById('questionPrompt');
const questionContext = document.getElementById('questionContext');
const answerOptions = document.getElementById('answerOptions');
const lockGuess = document.getElementById('lockGuess');
const guessHint = document.getElementById('guessHint');
const feedbackBox = document.getElementById('feedbackBox');
const feedbackStatus = document.getElementById('feedbackStatus');
const correctAnswer = document.getElementById('correctAnswer');
const feedbackExplanation = document.getElementById('feedbackExplanation');
const feedbackNudge = document.getElementById('feedbackNudge');
const changeGuess = document.getElementById('changeGuess');
const nextQuestion = document.getElementById('nextQuestion');
const questionCard = document.querySelector('.question-card');
const completionPanel = document.getElementById('completionPanel');
let currentIndex = 0;
let selectedChoice = null;
let guessLocked = false;

function applyTheme(theme) {
  root.dataset.theme = theme;
  const isDark = theme === 'dark';
  themeToggle.textContent = isDark ? 'Mode terang' : 'Mode gelap';
  themeToggle.setAttribute('aria-pressed', String(isDark));
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#172422' : '#f3f4ec');
}

let savedTheme = 'light';
try {
  savedTheme = localStorage.getItem('edulearn-relaxed-practice-theme') || 'light';
} catch {
  savedTheme = 'light';
}
applyTheme(savedTheme === 'dark' ? 'dark' : 'light');

themeToggle.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  try {
    localStorage.setItem('edulearn-relaxed-practice-theme', nextTheme);
  } catch {
    return;
  }
});

function renderQuestion() {
  const question = questionSet[currentIndex];
  selectedChoice = null;
  guessLocked = false;
  questionCounter.textContent = `Soal ${currentIndex + 1} dari ${questionSet.length}`;
  questionProgress.value = currentIndex + 1;
  topicBadge.textContent = question.topic;
  recallBadge.hidden = !question.recall;
  if (question.recall) recallBadge.textContent = question.recall;
  questionPrompt.textContent = question.prompt;
  questionContext.textContent = question.context;
  answerOptions.setAttribute('aria-label', `Pilihan tebakan untuk soal ${currentIndex + 1}`);
  answerOptions.innerHTML = question.choices.map((choice, index) => `
    <button class="answer-option" type="button" data-choice="${index}" aria-pressed="false">
      <span class="option-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span>
      <span>${choice}</span>
    </button>
  `).join('');
  feedbackBox.hidden = true;
  changeGuess.hidden = true;
  nextQuestion.hidden = true;
  lockGuess.disabled = true;
  lockGuess.hidden = false;
  guessHint.textContent = 'Belum yakin? Pilih dulu yang paling mendekati.';
  questionCard.hidden = false;
  completionPanel.hidden = true;
  questionPrompt.focus();
}

answerOptions.addEventListener('click', (event) => {
  const button = event.target.closest('[data-choice]');
  if (!button || guessLocked) return;

  selectedChoice = Number(button.dataset.choice);
  answerOptions.querySelectorAll('[data-choice]').forEach((option) => {
    option.setAttribute('aria-pressed', String(option === button));
  });
  lockGuess.disabled = false;
  guessHint.textContent = 'Tebakanmu sudah dipilih. Masih bisa diubah sebelum dikunci.';
});

lockGuess.addEventListener('click', () => {
  if (selectedChoice === null || guessLocked) return;

  const question = questionSet[currentIndex];
  const isCorrect = selectedChoice === question.answer;
  guessLocked = true;

  answerOptions.querySelectorAll('[data-choice]').forEach((option) => {
    const choiceIndex = Number(option.dataset.choice);
    option.disabled = true;
    if (choiceIndex === question.answer) option.classList.add('correct');
    if (choiceIndex === selectedChoice && !isCorrect) option.classList.add('incorrect');
  });

  feedbackStatus.textContent = isCorrect
    ? 'Tepat, tebakanmu cocok.'
    : 'Belum tepat, tidak apa-apa. Kita cek caranya.';
  feedbackStatus.classList.toggle('is-incorrect', !isCorrect);
  correctAnswer.textContent = question.choices[question.answer];
  feedbackExplanation.textContent = question.explanation;
  feedbackNudge.textContent = question.nudge;
  feedbackBox.hidden = false;
  lockGuess.hidden = true;
  changeGuess.hidden = false;
  nextQuestion.hidden = false;
  nextQuestion.textContent = currentIndex === questionSet.length - 1 ? 'Selesai' : 'Lanjut soal';
  guessHint.textContent = 'Tebakan sudah dikunci. Sekarang lihat langkahnya.';
});

changeGuess.addEventListener('click', () => {
  guessLocked = false;
  feedbackBox.hidden = true;
  changeGuess.hidden = true;
  nextQuestion.hidden = true;
  lockGuess.hidden = false;
  lockGuess.disabled = false;
  answerOptions.querySelectorAll('[data-choice]').forEach((option) => {
    option.disabled = false;
    option.classList.remove('correct', 'incorrect');
  });
  guessHint.textContent = 'Silakan ubah tebakanmu. Pembahasan akan menunggu.';
  answerOptions.querySelector(`[data-choice="${selectedChoice}"]`)?.focus();
});

nextQuestion.addEventListener('click', () => {
  if (currentIndex < questionSet.length - 1) {
    currentIndex += 1;
    renderQuestion();
    return;
  }

  questionCard.hidden = true;
  completionPanel.hidden = false;
  questionCounter.textContent = 'Satu putaran selesai';
  questionProgress.value = questionSet.length;
  completionPanel.querySelector('h2')?.focus();
});

document.getElementById('restartPractice').addEventListener('click', () => {
  currentIndex = 0;
  renderQuestion();
});

renderQuestion();