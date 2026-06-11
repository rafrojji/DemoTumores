
const MODEL = {
  "features": [
    "media",
    "varianza",
    "desviacion.estandar",
    "entropia",
    "asimetria",
    "kurtosis",
    "contraste",
    "energia",
    "asm",
    "homogeneidad",
    "disiminitud",
    "correlacion",
    "psnr",
    "ssim",
    "mse",
    "dc"
  ],
  "medians": {
    "media": 122.732467651367,
    "varianza": 295.290681912206,
    "desviacion.estandar": 262.6917732077735,
    "entropia": 0.9745096427686895,
    "asimetria": 317.95667085730054,
    "kurtosis": 316.63896378762547,
    "contraste": 298.071914225941,
    "energia": 0.985138675691991,
    "asm": 0.9706172760060755,
    "homogeneidad": 0.989183350561329,
    "disiminitud": 0.424232914923292,
    "correlacion": 0.902538854894466,
    "psnr": 629.7271434057579,
    "ssim": 0.9600561270519106,
    "mse": 0.02462673611111115,
    "dc": 0.351029173327093
  },
  "means": {
    "media": 181.83014409453085,
    "varianza": 369.6838921337545,
    "desviacion.estandar": 312.45864893563873,
    "entropia": 0.9320487385157178,
    "asimetria": 385.24699099279314,
    "kurtosis": 370.55899758774103,
    "contraste": 374.29792616617755,
    "energia": 0.9587573367011671,
    "asm": 0.9227945025527762,
    "homogeneidad": 0.9730945073931726,
    "disiminitud": 41.65587154373302,
    "correlacion": 0.8649094117160113,
    "psnr": 537.9910378981328,
    "ssim": 0.9371800895603837,
    "mse": 0.044388626255184443,
    "dc": 0.38151665330332724
  },
  "scales": {
    "media": 221.68156283026758,
    "varianza": 268.2522013730053,
    "desviacion.estandar": 216.16206123190543,
    "entropia": 0.10491331051574977,
    "asimetria": 266.51938255323756,
    "kurtosis": 248.09573783065736,
    "contraste": 273.7979986926982,
    "energia": 0.06603511797157785,
    "asm": 0.11757113009237415,
    "homogeneidad": 0.04097132625774005,
    "disiminitud": 90.70212097222566,
    "correlacion": 0.11319406035334224,
    "psnr": 234.8122376050921,
    "ssim": 0.06842191237760718,
    "mse": 0.05720081540046925,
    "dc": 0.3043378103976813
  },
  "coef": {
    "media": -0.1954931520096709,
    "varianza": -0.022567574819440796,
    "desviacion.estandar": 0.1780215084955631,
    "entropia": -0.05152645788749798,
    "asimetria": 0.367726343759633,
    "kurtosis": -0.0028216517563082444,
    "contraste": -0.007753137078680885,
    "energia": 2.2429082883949287,
    "asm": 2.7713269356299177,
    "homogeneidad": -0.4546429202386982,
    "disiminitud": 0.038866525703710166,
    "correlacion": -0.4607946040398493,
    "psnr": -0.09488409809471669,
    "ssim": -1.8364739485894948,
    "mse": 2.612309784144185,
    "dc": 7.780070111884833
  },
  "intercept": 7.605684408747052,
  "metrics": {
    "records": 1273,
    "features": 16,
    "class_1": 1176,
    "class_0": 97,
    "accuracy": 0.9529,
    "auc": 0.978368,
    "precision": 0.9956,
    "recall": 0.9534,
    "f1": 0.974,
    "cm_050": {
      "tn": 18,
      "fp": 1,
      "fn": 11,
      "tp": 225
    },
    "cm_adj": {
      "tn": 16,
      "fp": 3,
      "fn": 6,
      "tp": 230
    },
    "threshold_default": 0.5,
    "threshold_adjusted": 0.17
  }
};

function sigmoid(z) {
  return 1 / (1 + Math.exp(-z));
}

function formatNumber(value, decimals = 4) {
  return Number(value).toLocaleString("es-CR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}

function classify(prob, threshold) {
  return prob >= threshold ? "Tumor" : "No tumor";
}

function riskLabel(prob) {
  if (prob >= 0.80) return "Probabilidad alta";
  if (prob >= 0.50) return "Probabilidad media";
  return "Probabilidad baja";
}

function createInputs() {
  const grid = document.getElementById("featureGrid");
  MODEL.features.forEach((name) => {
    const median = MODEL.medians[name];
    const div = document.createElement("div");
    div.className = "field";
    div.innerHTML = `
      <label for="${name}">${name}</label>
      <input id="${name}" type="number" step="any" value="${median}">
      <small>Valor sugerido: mediana del dataset</small>
    `;
    grid.appendChild(div);
  });
}

function predict() {
  let z = MODEL.intercept;
  const values = {};

  MODEL.features.forEach((name) => {
    const input = document.getElementById(name);
    let rawValue = parseFloat(input.value);
    if (Number.isNaN(rawValue)) {
      rawValue = MODEL.medians[name];
      input.value = rawValue;
    }

    values[name] = rawValue;
    const standardized = (rawValue - MODEL.means[name]) / MODEL.scales[name];
    z += MODEL.coef[name] * standardized;
  });

  const prob = sigmoid(z);
  const threshold = parseFloat(document.getElementById("threshold").value);
  const label = classify(prob, threshold);

  document.getElementById("probability").textContent = (prob * 100).toFixed(2) + "%";
  document.getElementById("prediction").textContent = label;
  document.getElementById("risk").textContent = riskLabel(prob);
  document.getElementById("thresholdValue").textContent = threshold.toFixed(2);
  document.getElementById("resultCard").className = "result-card " + (label === "Tumor" ? "tumor" : "notumor");
}

function resetMedians() {
  MODEL.features.forEach((name) => {
    document.getElementById(name).value = MODEL.medians[name];
  });
  predict();
}

function fillExample(kind) {
  // Ejemplos aproximados tomados del comportamiento general del dataset.
  // No representan pacientes reales ni diagnóstico médico.
  const examples = {
    tumor: {
      media: 234.485168,
      varianza: 253.898563,
      "desviacion.estandar": 503.883481,
      entropia: 0.651174,
      asimetria: 198.420231,
      kurtosis: 542.104152,
      contraste: 181.467713,
      energia: 0.781557,
      asm: 0.610831,
      homogeneidad: 0.847033,
      disiminitud: 276.541144,
      correlacion: 0.968576,
      psnr: 979.746298,
      ssim: 0.777011,
      mse: 0.171163,
      dc: 0.303989
    },
    notumor: {
      media: 85,
      varianza: 105,
      "desviacion.estandar": 185,
      entropia: 0.88,
      asimetria: 130,
      kurtosis: 155,
      contraste: 115,
      energia: 0.98,
      asm: 0.96,
      homogeneidad: 0.99,
      disiminitud: 0.35,
      correlacion: 0.91,
      psnr: 720,
      ssim: 0.98,
      mse: 0.02,
      dc: 0.72
    }
  };

  Object.entries(examples[kind]).forEach(([name, value]) => {
    const el = document.getElementById(name);
    if (el) el.value = value;
  });
  predict();
}

function paintMetrics() {
  const m = MODEL.metrics;

  document.getElementById("records").textContent = m.records;
  document.getElementById("featuresCount").textContent = m.features;
  document.getElementById("classDist").textContent = `${m.class_1} tumor / ${m.class_0} no tumor`;
  document.getElementById("accuracy").textContent = (m.accuracy * 100).toFixed(2) + "%";
  document.getElementById("auc").textContent = m.auc.toFixed(6);
  document.getElementById("recall").textContent = (m.recall * 100).toFixed(2) + "%";
  document.getElementById("f1").textContent = (m.f1 * 100).toFixed(2) + "%";

  document.getElementById("tn050").textContent = m.cm_050.tn;
  document.getElementById("fp050").textContent = m.cm_050.fp;
  document.getElementById("fn050").textContent = m.cm_050.fn;
  document.getElementById("tp050").textContent = m.cm_050.tp;

  document.getElementById("tnAdj").textContent = m.cm_adj.tn;
  document.getElementById("fpAdj").textContent = m.cm_adj.fp;
  document.getElementById("fnAdj").textContent = m.cm_adj.fn;
  document.getElementById("tpAdj").textContent = m.cm_adj.tp;

  document.getElementById("adjThresholdText").textContent = m.threshold_adjusted.toFixed(2);
}

document.addEventListener("DOMContentLoaded", () => {
  createInputs();
  paintMetrics();

  document.getElementById("predictBtn").addEventListener("click", predict);
  document.getElementById("resetBtn").addEventListener("click", resetMedians);
  document.getElementById("tumorExample").addEventListener("click", () => fillExample("tumor"));
  document.getElementById("notumorExample").addEventListener("click", () => fillExample("notumor"));
  document.getElementById("threshold").addEventListener("input", predict);

  resetMedians();
});
