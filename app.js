
const CASE_DATA = {
  "caseId": "TEC-G4-001",
  "patient": "Paciente demo",
  "study": "Resonancia cerebral",
  "doctor": "Dr./Dra. Especialista",
  "probability": 0.873,
  "zone": "Zona alta",
  "zone_label": "Clasificación positiva del modelo",
  "zone_action": "Revisión prioritaria por especialista",
  "clinical_decision": "Solicitar estudios complementarios y valoración clínica",
  "metrics": {
    "accuracy": "95.29%",
    "recall": "95.34%",
    "f1": "97.40%",
    "auc": "0.978368",
    "threshold_alert": "0.212"
  },
  "features": [
    [
      "media",
      "234.485168"
    ],
    [
      "varianza",
      "253.898563"
    ],
    [
      "desviacion.estandar",
      "503.883481"
    ],
    [
      "entropia",
      "0.651174"
    ],
    [
      "asimetria",
      "198.420231"
    ],
    [
      "kurtosis",
      "542.104152"
    ],
    [
      "contraste",
      "181.467713"
    ],
    [
      "energia",
      "0.781557"
    ],
    [
      "asm",
      "0.610831"
    ],
    [
      "homogeneidad",
      "0.847033"
    ],
    [
      "disiminitud",
      "276.541144"
    ],
    [
      "correlacion",
      "0.968576"
    ],
    [
      "psnr",
      "979.746298"
    ],
    [
      "ssim",
      "0.777011"
    ],
    [
      "mse",
      "0.171163"
    ],
    [
      "dc",
      "0.303989"
    ]
  ]
};

let currentStep = 0;
const totalSteps = 6;

function $(id) { return document.getElementById(id); }

function render() {
  document.querySelectorAll('.step-item').forEach((el, idx) => {
    el.classList.toggle('active', idx === currentStep);
    el.classList.toggle('done', idx < currentStep);
  });

  document.querySelectorAll('.step-screen').forEach((el, idx) => {
    el.classList.toggle('active', idx === currentStep);
  });

  $('prevBtn').disabled = currentStep === 0;
  $('nextBtn').disabled = currentStep === totalSteps - 1;
  $('stepCounter').textContent = `Paso ${currentStep + 1} de ${totalSteps}`;
}

function nextStep() {
  if (currentStep < totalSteps - 1) {
    currentStep++;
    render();
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    render();
  }
}

function resetFlow() {
  currentStep = 0;
  $('reviewText').value = 'El especialista revisa la imagen, valida la probabilidad del modelo y la integra con el expediente clínico del paciente.';
  $('doctorDecision').value = CASE_DATA.clinical_decision;
  render();
}

function fillStaticData() {
  $('caseId').textContent = CASE_DATA.caseId;
  $('patient').textContent = CASE_DATA.patient;
  $('study').textContent = CASE_DATA.study;
  $('doctor').textContent = CASE_DATA.doctor;

  $('metricAcc').textContent = CASE_DATA.metrics.accuracy;
  $('metricRecall').textContent = CASE_DATA.metrics.recall;
  $('metricF1').textContent = CASE_DATA.metrics.f1;
  $('metricAuc').textContent = CASE_DATA.metrics.auc;

  $('probability').textContent = (CASE_DATA.probability * 100).toFixed(2) + '%';
  $('zoneName').textContent = CASE_DATA.zone;
  $('zoneLabel').textContent = CASE_DATA.zone_label;
  $('zoneAction').textContent = CASE_DATA.zone_action;
  $('thresholdLabel').textContent = CASE_DATA.metrics.threshold_alert;
  $('gaugeFill').style.width = (CASE_DATA.probability * 100) + '%';

  $('reportCaseId').textContent = CASE_DATA.caseId;
  $('reportPatient').textContent = CASE_DATA.patient;
  $('reportStudy').textContent = CASE_DATA.study;
  $('reportDoctor').textContent = CASE_DATA.doctor;
  $('reportProb').textContent = (CASE_DATA.probability * 100).toFixed(2) + '%';
  $('reportZone').textContent = CASE_DATA.zone;
  $('reportZoneLabel').textContent = CASE_DATA.zone_label;
  $('reportAction').textContent = CASE_DATA.zone_action;
  $('reportDecision').textContent = CASE_DATA.clinical_decision;

  const tbody = $('featuresBody');
  tbody.innerHTML = '';
  CASE_DATA.features.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${item[0]}</td><td>${item[1]}</td>`;
    tbody.appendChild(tr);
  });
}

function updateReportFromReview() {
  $('reportReview').textContent = $('reviewText').value.trim() || 'Sin observaciones registradas.';
  $('reportDecision').textContent = $('doctorDecision').value.trim() || CASE_DATA.clinical_decision;
}

function printReport() {
  updateReportFromReview();
  window.print();
}

document.addEventListener('DOMContentLoaded', () => {
  fillStaticData();
  $('reviewText').value = 'El especialista revisa la imagen, valida la probabilidad del modelo y la integra con el expediente clínico del paciente.';
  $('doctorDecision').value = CASE_DATA.clinical_decision;
  render();

  $('prevBtn').addEventListener('click', prevStep);
  $('nextBtn').addEventListener('click', nextStep);
  $('resetBtn').addEventListener('click', resetFlow);
  $('printBtn').addEventListener('click', printReport);
  $('applyReviewBtn').addEventListener('click', updateReportFromReview);
});
