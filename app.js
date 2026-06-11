
const pausePoints = [2.5, 5.3, 8.5, 11.3, 14.1, 16.9, 19.9, 22.1];
const steps = [
  {
    "title": "Inicio del caso",
    "subtitle": "Presentación del flujo clínico cerebral",
    "note": "Se introduce el caso y el objetivo del sistema: apoyar la revisión médica mediante un flujo trazable."
  },
  {
    "title": "1. Imagen médica",
    "subtitle": "Recepción de resonancia cerebral",
    "note": "El sistema recibe el estudio y registra el caso antes de procesarlo."
  },
  {
    "title": "2. Extracción de características",
    "subtitle": "Obtención de variables numéricas",
    "note": "Se muestran las 16 variables que alimentan el modelo del proyecto."
  },
  {
    "title": "3. Modelo de clasificación",
    "subtitle": "Cálculo de probabilidad",
    "note": "La Regresión Logística calcula una probabilidad estimada usando los resultados del trabajo en Python."
  },
  {
    "title": "4. Clasificación",
    "subtitle": "Zona negativa, zona de duda o zona alta",
    "note": "El caso se ubica en zona alta, por lo que se recomienda revisión prioritaria."
  },
  {
    "title": "5. Revisión médica",
    "subtitle": "Interpretación del especialista",
    "note": "El médico integra imagen, expediente y resultado del modelo antes de decidir."
  },
  {
    "title": "6. Diagnóstico / reporte",
    "subtitle": "Decisión clínica documentada",
    "note": "El sistema genera un reporte trazable, manteniendo al médico como responsable final."
  },
  {
    "title": "Cierre ejecutivo",
    "subtitle": "Valor del prototipo",
    "note": "El flujo demuestra cómo el modelo puede integrarse a un entorno hospitalario académico."
  }
];

let currentPauseIndex = 0;
let waitingForClick = false;

const video = document.getElementById('mainVideo');
const overlay = document.getElementById('pauseOverlay');
const nextBtn = document.getElementById('nextBtn');
const replayBtn = document.getElementById('replayBtn');
const stepTitle = document.getElementById('stepTitle');
const stepSubtitle = document.getElementById('stepSubtitle');
const stepNote = document.getElementById('stepNote');
const stepCounter = document.getElementById('stepCounter');
const timeline = document.getElementById('timeline');
const startBtn = document.getElementById('startBtn');

function buildTimeline() {
  timeline.innerHTML = '';
  steps.forEach((step, idx) => {
    const item = document.createElement('button');
    item.className = 'dot';
    item.innerHTML = `<span>${idx + 1}</span><small>${step.title.replace(/^\d\.\s*/, '')}</small>`;
    item.addEventListener('click', () => jumpToStep(idx));
    timeline.appendChild(item);
  });
}

function updateTimeline(idx) {
  document.querySelectorAll('.dot').forEach((el, i) => {
    el.classList.toggle('active', i === idx);
    el.classList.toggle('done', i < idx);
  });
}

function showOverlay(idx) {
  const step = steps[Math.min(idx, steps.length - 1)];
  stepTitle.textContent = step.title;
  stepSubtitle.textContent = step.subtitle;
  stepNote.textContent = step.note;
  stepCounter.textContent = `Pausa ${Math.min(idx + 1, steps.length)} de ${steps.length}`;
  updateTimeline(idx);
  overlay.classList.add('show');
  waitingForClick = true;
}

function hideOverlay() {
  overlay.classList.remove('show');
  waitingForClick = false;
}

function startExperience() {
  startBtn.style.display = 'none';
  currentPauseIndex = 0;
  video.currentTime = 0;
  hideOverlay();
  video.play();
}

function continueVideo() {
  hideOverlay();
  if (currentPauseIndex >= pausePoints.length) {
    video.pause();
    video.currentTime = 0;
    currentPauseIndex = 0;
    startBtn.style.display = 'inline-flex';
    return;
  }
  video.play();
}

function jumpToStep(idx) {
  currentPauseIndex = idx;
  const t = idx === 0 ? 0 : pausePoints[idx - 1] + 0.05;
  video.currentTime = Math.max(0, t);
  showOverlay(idx);
  video.pause();
}

video.addEventListener('timeupdate', () => {
  if (waitingForClick) return;

  if (currentPauseIndex < pausePoints.length && video.currentTime >= pausePoints[currentPauseIndex]) {
    video.pause();
    showOverlay(currentPauseIndex);
    currentPauseIndex++;
  }
});

video.addEventListener('ended', () => {
  showOverlay(steps.length - 1);
  nextBtn.textContent = 'Reiniciar';
});

nextBtn.addEventListener('click', () => {
  nextBtn.textContent = 'Continuar al siguiente paso';
  continueVideo();
});

replayBtn.addEventListener('click', () => {
  currentPauseIndex = 0;
  video.currentTime = 0;
  hideOverlay();
  video.play();
});

startBtn.addEventListener('click', startExperience);

buildTimeline();
updateTimeline(0);
showOverlay(0);
video.pause();
