const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');

function applyTheme(theme) {
  root.dataset.theme = theme;
  if (!themeToggle) return;
  const isDark = theme === 'dark';
  themeToggle.textContent = isDark ? 'Mode terang' : 'Mode gelap';
  themeToggle.setAttribute('aria-pressed', String(isDark));
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#172422' : '#f3f4ec');
}

let initialTheme = 'light';
try {
  initialTheme = localStorage.getItem('edulearn-auth-theme') || 'light';
} catch {
  initialTheme = 'light';
}
applyTheme(initialTheme === 'dark' ? 'dark' : 'light');

themeToggle?.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  try {
    localStorage.setItem('edulearn-auth-theme', nextTheme);
  } catch {
    return;
  }
});

document.querySelectorAll('[data-password-toggle]').forEach((button) => {
  button.addEventListener('click', () => {
    const input = document.getElementById(button.dataset.passwordToggle);
    if (!input) return;

    const shouldShow = input.type === 'password';
    input.type = shouldShow ? 'text' : 'password';
    button.textContent = shouldShow ? 'Sembunyikan' : 'Lihat';
    button.setAttribute('aria-label', shouldShow ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi');
  });
});

document.querySelectorAll('[data-demo-auth]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const status = form.querySelector('[data-auth-status]');
    if (status) status.textContent = 'Ini masih pratinjau. Data tidak dikirim dan akun belum dibuat.';
  });
});

const onboardingFlow = document.getElementById('onboardingFlow');
if (onboardingFlow) {
  const answers = { score: '', topic: '', schedule: '' };
  const panels = [...onboardingFlow.querySelectorAll('[data-step-panel]')];
  const stepCount = document.getElementById('stepCount');
  const stepProgress = document.getElementById('stepProgress');
  const previousButton = document.getElementById('previousStep');
  const nextButton = document.getElementById('nextStep');
  const stepsContainer = document.getElementById('onboardingSteps');
  const actions = document.getElementById('onboardingActions');
  const summary = document.getElementById('planSummary');
  const status = document.getElementById('onboardingStatus');
  let currentStep = 1;

  function updateStep() {
    panels.forEach((panel) => {
      panel.hidden = Number(panel.dataset.stepPanel) !== currentStep;
    });
    stepCount.textContent = `Langkah ${currentStep} dari 3`;
    stepProgress.style.width = `${(currentStep / 3) * 100}%`;
    previousButton.disabled = currentStep === 1;
    nextButton.disabled = !answers[['score', 'topic', 'schedule'][currentStep - 1]];
    nextButton.textContent = currentStep === 3 ? 'Lihat rencana' : 'Lanjut';
    status.textContent = '';
  }

  document.querySelectorAll('[data-answer-group]').forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.dataset.answerGroup;
      answers[group] = button.dataset.answer;
      document.querySelectorAll(`[data-answer-group="${group}"]`).forEach((option) => {
        option.setAttribute('aria-pressed', String(option === button));
      });
      nextButton.disabled = false;
      status.textContent = 'Oke, sudah dicatat untuk rencana ini.';
    });
  });

  previousButton.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep -= 1;
      updateStep();
    }
  });

  nextButton.addEventListener('click', () => {
    if (nextButton.disabled) return;
    if (currentStep < 3) {
      currentStep += 1;
      updateStep();
      panels[currentStep - 1].querySelector('h1, h2')?.focus();
      return;
    }

    document.getElementById('summaryScore').textContent = answers.score;
    document.getElementById('summaryTopic').textContent = answers.topic;
    document.getElementById('summarySchedule').textContent = answers.schedule;
    stepsContainer.hidden = true;
    actions.hidden = true;
    summary.hidden = false;
    stepCount.textContent = 'Rencana awal selesai';
    stepProgress.style.width = '100%';
    status.textContent = '';
    summary.querySelector('h2')?.focus();
  });

  document.getElementById('editPlan').addEventListener('click', () => {
    summary.hidden = true;
    stepsContainer.hidden = false;
    actions.hidden = false;
    currentStep = 1;
    updateStep();
  });

  updateStep();
}