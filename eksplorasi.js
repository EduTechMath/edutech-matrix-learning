const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

function setTheme(theme) {
  root.dataset.theme = theme;
  const isDark = theme === 'dark';
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.textContent = isDark ? 'Mode terang' : 'Mode gelap';
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#172422' : '#f3f4ec');
}

let savedTheme = 'light';
try {
  savedTheme = localStorage.getItem('edulearn-exploration-theme') || 'light';
} catch {
  savedTheme = 'light';
}
setTheme(savedTheme === 'dark' ? 'dark' : 'light');

themeToggle.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
  try {
    localStorage.setItem('edulearn-exploration-theme', nextTheme);
  } catch {
    return;
  }
});

const mRange = document.getElementById('mRange');
const nRange = document.getElementById('nRange');
const graphSvg = document.getElementById('graphSvg');
const numberLineSvg = document.getElementById('numberLineSvg');
const numberFormatter = new Intl.NumberFormat('id-ID', { maximumFractionDigits: 2 });

function signed(value) {
  if (value < 0) return `−${numberFormatter.format(Math.abs(value))}`;
  return numberFormatter.format(value);
}

function factorText(value) {
  if (value < 0) return `(x − ${Math.abs(value)})`;
  return `(x + ${value})`;
}

function formatPolynomial(m, n) {
  const linear = m + n;
  const constant = m * n;
  let result = 'x²';

  if (linear !== 0) {
    const magnitude = Math.abs(linear) === 1 ? 'x' : `${Math.abs(linear)}x`;
    result += linear < 0 ? ` − ${magnitude}` : ` + ${magnitude}`;
  }
  if (constant !== 0) {
    result += constant < 0 ? ` − ${Math.abs(constant)}` : ` + ${constant}`;
  }

  return `${result} = 0`;
}

function renderGraph(m, n) {
  const left = 48;
  const right = 528;
  const top = 24;
  const bottom = 282;
  const xMin = -6;
  const xMax = 6;
  const samples = Array.from({ length: 121 }, (_, index) => {
    const x = xMin + ((xMax - xMin) * index) / 120;
    return { x, y: (x + m) * (x + n) };
  });
  const values = samples.map((point) => point.y);
  const yMinRaw = Math.min(...values, 0);
  const yMaxRaw = Math.max(...values, 0);
  const yPadding = Math.max(2, (yMaxRaw - yMinRaw) * 0.12);
  const yMin = yMinRaw - yPadding;
  const yMax = yMaxRaw + yPadding;
  const mapX = (x) => left + ((x - xMin) / (xMax - xMin)) * (right - left);
  const mapY = (y) => bottom - ((y - yMin) / (yMax - yMin)) * (bottom - top);
  const curve = samples.map((point, index) => `${index ? 'L' : 'M'}${mapX(point.x).toFixed(2)},${mapY(point.y).toFixed(2)}`).join(' ');
  const zeroY = mapY(0);
  const zeroX = mapX(0);
  const xGrid = Array.from({ length: 7 }, (_, index) => {
    const value = -6 + index * 2;
    return `<line class="graph-grid-line" x1="${mapX(value)}" y1="${top}" x2="${mapX(value)}" y2="${bottom}" /><text class="graph-tick" x="${mapX(value)}" y="${bottom + 20}" text-anchor="middle">${value}</text>`;
  }).join('');
  const yGrid = Array.from({ length: 5 }, (_, index) => {
    const y = top + ((bottom - top) * index) / 4;
    return `<line class="graph-grid-line" x1="${left}" y1="${y}" x2="${right}" y2="${y}" />`;
  }).join('');
  const rootOne = -m;
  const rootTwo = -n;
  const vertexX = -(m + n) / 2;
  const vertexY = (vertexX + m) * (vertexX + n);
  const description = `Parabola memotong sumbu x pada ${signed(rootOne)} dan ${signed(rootTwo)}.`;

  graphSvg.innerHTML = `
    <title id="graphTitle">Grafik fungsi kuadrat</title>
    <desc id="graphDescription">${description}</desc>
    ${xGrid}${yGrid}
    <line class="graph-axis" x1="${left}" y1="${zeroY}" x2="${right}" y2="${zeroY}" />
    <line class="graph-axis" x1="${zeroX}" y1="${top}" x2="${zeroX}" y2="${bottom}" />
    <path class="graph-curve" d="${curve}" />
    <circle class="graph-root" cx="${mapX(rootOne)}" cy="${zeroY}" r="7" />
    <circle class="graph-root" cx="${mapX(rootTwo)}" cy="${zeroY}" r="7" />
    <circle class="graph-vertex" cx="${mapX(vertexX)}" cy="${mapY(vertexY)}" r="5" />
    <text class="graph-root-label" x="${mapX(rootOne)}" y="${zeroY - 12}" text-anchor="middle">${signed(rootOne)}</text>
    <text class="graph-root-label" x="${mapX(rootTwo)}" y="${zeroY - 12}" text-anchor="middle">${signed(rootTwo)}</text>
    <text class="graph-label" x="${right - 2}" y="${Math.max(top + 12, zeroY - 8)}" text-anchor="end">x</text>
    <text class="graph-label" x="${zeroX + 8}" y="${top + 12}">y</text>
  `;
  document.getElementById('graphLegend').textContent = `Akar: x = ${signed(rootOne)} dan x = ${signed(rootTwo)}`;
}

function renderNumberLine(m, n) {
  const left = 40;
  const right = 520;
  const y = 98;
  const mapX = (value) => left + ((value + 6) / 12) * (right - left);
  const ticks = Array.from({ length: 13 }, (_, index) => {
    const value = index - 6;
    return `<line class="number-line-tick" x1="${mapX(value)}" y1="${y - 8}" x2="${mapX(value)}" y2="${y + 8}" /><text class="number-line-label" x="${mapX(value)}" y="${y + 31}">${value}</text>`;
  }).join('');
  const rootOne = -m;
  const rootTwo = -n;
  const firstY = rootOne === rootTwo ? 69 : 68;
  const secondY = 83;
  const rootsText = rootOne === rootTwo
    ? `Akar kembar: x = ${signed(rootOne)}.`
    : `Akar persamaan: x = ${signed(rootOne)} dan x = ${signed(rootTwo)}.`;

  numberLineSvg.innerHTML = `
    <title id="numberLineTitle">Akar persamaan pada garis bilangan</title>
    <desc id="numberLineDescription">${rootsText}</desc>
    <line class="number-line-axis" x1="${left}" y1="${y}" x2="${right}" y2="${y}" />
    ${ticks}
    <circle class="number-root" cx="${mapX(rootOne)}" cy="${firstY}" r="7" />
    <text class="number-root-label" x="${mapX(rootOne)}" y="${firstY - 13}">${signed(rootOne)}</text>
    <circle class="number-root-alt" cx="${mapX(rootTwo)}" cy="${secondY}" r="7" />
    <text class="number-root-label" x="${mapX(rootTwo)}" y="${secondY + 24}">${signed(rootTwo)}</text>
    <text class="number-line-label" x="${right - 4}" y="${y - 15}">x</text>
  `;
  document.getElementById('numberLineNote').textContent = rootsText;
}

function renderDiagram(m, n) {
  document.getElementById('columnN').textContent = n < 0 ? `−${Math.abs(n)}` : n;
  document.getElementById('rowM').textContent = m < 0 ? `−${Math.abs(m)}` : m;
  document.getElementById('cellXN').textContent = n === 0 ? '0' : `${signed(n)}x`;
  document.getElementById('cellMX').textContent = m === 0 ? '0' : `${signed(m)}x`;
  document.getElementById('cellMN').textContent = signed(m * n);
  document.getElementById('diagramNote').textContent = `Jumlahkan isi kotak: ${formatPolynomial(m, n)}.`;
}

function updateExploration() {
  const m = Number(mRange.value);
  const n = Number(nRange.value);
  document.getElementById('mOutput').textContent = signed(m);
  document.getElementById('nOutput').textContent = signed(n);
  document.getElementById('factorM').textContent = factorText(m);
  document.getElementById('factorN').textContent = factorText(n);
  document.getElementById('expandedEquation').textContent = formatPolynomial(m, n);
  document.getElementById('rootSum').textContent = signed(-(m + n));
  document.getElementById('rootProduct').textContent = signed(m * n);
  renderGraph(m, n);
  renderDiagram(m, n);
  renderNumberLine(m, n);
}

mRange.addEventListener('input', updateExploration);
nRange.addEventListener('input', updateExploration);
document.getElementById('resetParameters').addEventListener('click', () => {
  mRange.value = '2';
  nRange.value = '-3';
  updateExploration();
});

const viewTabs = [...document.querySelectorAll('[role="tab"][data-view]')];
const viewPanels = {
  graph: document.getElementById('panelGraph'),
  diagram: document.getElementById('panelDiagram'),
  numberLine: document.getElementById('panelNumberLine')
};

function selectView(view, moveFocus = false) {
  viewTabs.forEach((tab) => {
    const isSelected = tab.dataset.view === view;
    tab.setAttribute('aria-selected', String(isSelected));
    tab.tabIndex = isSelected ? 0 : -1;
    if (isSelected && moveFocus) tab.focus();
  });
  Object.entries(viewPanels).forEach(([key, panel]) => {
    panel.hidden = key !== view;
  });
}

viewTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectView(tab.dataset.view));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === 'ArrowLeft') nextIndex = (index + viewTabs.length - 1) % viewTabs.length;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % viewTabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = viewTabs.length - 1;
    selectView(viewTabs[nextIndex].dataset.view, true);
  });
});

updateExploration();