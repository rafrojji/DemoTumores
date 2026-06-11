
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
    "media": 124.856567382812,
    "varianza": 297.756286809771,
    "desviacion.estandar": 257.079160056553,
    "entropia": 0.9755936922438679,
    "asimetria": 315.4388537308855,
    "kurtosis": 314.097281303514,
    "contraste": 298.2364888423985,
    "energia": 0.9858440892443495,
    "asm": 0.971785925260509,
    "homogeneidad": 0.989558124224223,
    "disiminitud": 0.4145397489539745,
    "correlacion": 0.900147562195749,
    "psnr": 631.702563804945,
    "ssim": 0.961181715740051,
    "mse": 0.0235416666666667,
    "dc": 0.357751277683135
  },
  "means": {
    "media": 181.83014409453085,
    "varianza": 369.6863141424948,
    "desviacion.estandar": 312.44762219074437,
    "entropia": 0.9320551278053554,
    "asimetria": 385.1975250374608,
    "kurtosis": 370.54901062316696,
    "contraste": 374.2985728247884,
    "energia": 0.9587767390385601,
    "asm": 0.9227945025527762,
    "homogeneidad": 0.9730974525693054,
    "disiminitud": 41.65586202195898,
    "correlacion": 0.8649023646844827,
    "psnr": 537.9910378981328,
    "ssim": 0.9371800895603837,
    "mse": 0.044388626255184443,
    "dc": 0.38152985979518583
  },
  "scales": {
    "media": 221.68156283026758,
    "varianza": 268.25154080695063,
    "desviacion.estandar": 216.16474276943504,
    "entropia": 0.10491592919518122,
    "asimetria": 266.5321003853907,
    "kurtosis": 248.0979592996011,
    "contraste": 273.7978188549321,
    "energia": 0.06604296961086174,
    "asm": 0.11757113009237415,
    "homogeneidad": 0.040972496133044774,
    "disiminitud": 90.70212530117007,
    "correlacion": 0.11319179188167977,
    "psnr": 234.8122376050921,
    "ssim": 0.06842191237760718,
    "mse": 0.05720081540046925,
    "dc": 0.3043366329795804
  },
  "coef": {
    "media": -0.1947845202635357,
    "varianza": -0.022803625386648846,
    "desviacion.estandar": 0.17822256799154207,
    "entropia": -0.05166584777874989,
    "asimetria": 0.3672749957195039,
    "kurtosis": -0.0027247952524777695,
    "contraste": -0.007925480091656072,
    "energia": 2.2459361748623756,
    "asm": 2.77161486072695,
    "homogeneidad": -0.45677031137755597,
    "disiminitud": 0.03889828782362975,
    "correlacion": -0.46145052660049557,
    "psnr": -0.09484730687551188,
    "ssim": -1.8369294361352837,
    "mse": 2.6129921081634486,
    "dc": 7.780964283881684
  },
  "intercept": 7.606985020098608,
  "metrics": {
    "records": 1273,
    "features_count": 16,
    "tumor": 1176,
    "no_tumor": 97,
    "accuracy": 0.9529411764705882,
    "precision": 0.995575221238938,
    "recall": 0.9533898305084746,
    "f1": 0.974025974025974,
    "auc": 0.9783675289919714,
    "threshold_alert": 0.212275876059717,
    "threshold_high": 0.7,
    "cm_std": {
      "tn": 18,
      "fp": 1,
      "fn": 11,
      "tp": 225
    },
    "cm_opt": {
      "tn": 18,
      "fp": 1,
      "fn": 6,
      "tp": 230
    }
  }
};

const FEATURE_GROUPS = {
  "Primer orden": ["media","varianza","desviacion.estandar","entropia","asimetria","kurtosis"],
  "Textura": ["contraste","energia","asm","homogeneidad","disiminitud","correlacion"],
  "Calidad / similitud": ["psnr","ssim","mse","dc"]
};

const CASES = {
  negativo: {
    media: 85, varianza: 105, "desviacion.estandar": 185, entropia: 0.88, asimetria: 130,
    kurtosis: 155, contraste: 115, energia: 0.98, asm: 0.96, homogeneidad: 0.99,
    disiminitud: 0.35, correlacion: 0.91, psnr: 720, ssim: 0.98, mse: 0.02, dc: 0.72
  },
  duda: {
    media: 145, varianza: 170, "desviacion.estandar": 290, entropia: 0.74, asimetria: 150,
    kurtosis: 260, contraste: 140, energia: 0.88, asm: 0.77, homogeneidad: 0.91,
    disiminitud: 38, correlacion: 0.94, psnr: 820, ssim: 0.91, mse: 0.08, dc: 0.51
  },
  alta: {
    media: 234.485168, varianza: 253.898563, "desviacion.estandar": 503.883481, entropia: 0.651174,
    asimetria: 198.420231, kurtosis: 542.104152, contraste: 181.467713, energia: 0.781557,
    asm: 0.610831, homogeneidad: 0.847033, disiminitud: 276.541144, correlacion: 0.968576,
    psnr: 979.746298, ssim: 0.777011, mse: 0.171163, dc: 0.303989
  }
};

function cssSafe(name) {
  return name.replaceAll(".", "_");
}

function sigmoid(z) {
  return 1 / (1 + Math.exp(-z));
}

function pct(v, d=1) {
  return (v * 100).toFixed(d) + "%";
}

function fmt(v, d=4) {
  return Number(v).toLocaleString("es-CR", { maximumFractionDigits: d });
}

function createInputs() {
  const box = document.getElementById("featuresContainer");
  box.innerHTML = "";
  Object.entries(FEATURE_GROUPS).forEach(([group, vars]) => {
    const section = document.createElement("section");
    section.className = "featureGroup";
    section.innerHTML = `<h3>${group}</h3><div class="fields"></div>`;
    const fields = section.querySelector(".fields");

    vars.forEach(name => {
      const id = "f_" + cssSafe(name);
      const med = MODEL.medians[name];
      const field = document.createElement("div");
      field.className = "field";
      field.innerHTML = `
        <label for="${id}">${name}</label>
        <input id="${id}" type="number" step="any" value="${med}">
        <small>Base sugerida: mediana del dataset = ${fmt(med, 6)}</small>
      `;
      fields.appendChild(field);
    });

    box.appendChild(section);
  });
}

function useCase(type) {
  const data = CASES[type];
  Object.entries(data).forEach(([name, value]) => {
    const el = document.getElementById("f_" + cssSafe(name));
    if (el) el.value = value;
  });
  refreshCase();
}

function collectValues() {
  const values = {};
  MODEL.features.forEach(name => {
    const el = document.getElementById("f_" + cssSafe(name));
    let v = parseFloat(el.value);
    if (Number.isNaN(v)) {
      v = MODEL.medians[name];
      el.value = v;
    }
    values[name] = v;
  });
  return values;
}

function computePrediction(values) {
  let z = MODEL.intercept;
  const contributions = [];

  MODEL.features.forEach(name => {
    const scaled = (values[name] - MODEL.means[name]) / MODEL.scales[name];
    const contribution = MODEL.coef[name] * scaled;
    z += contribution;
    contributions.push({
      name,
      contribution,
      direction: contribution >= 0 ? "Aumenta probabilidad" : "Reduce probabilidad"
    });
  });

  contributions.sort((a,b) => Math.abs(b.contribution) - Math.abs(a.contribution));
  const probability = sigmoid(z);
  return { probability, contributions };
}

function classify(prob) {
  const low = MODEL.metrics.threshold_alert;
  const high = MODEL.metrics.threshold_high;
  if (prob >= high) {
    return {
      zone: "Zona alta",
      className: "high",
      label: "Clasificación positiva del modelo",
      doctorAction: "Priorizar revisión por especialista y valorar estudios adicionales.",
      decision: "Solicitar evaluación clínica prioritaria y estudios complementarios.",
      reviewText: "El médico compara la imagen, el expediente y el resultado del modelo para confirmar si el hallazgo es consistente."
    };
  }
  if (prob >= low) {
    return {
      zone: "Zona de duda",
      className: "doubt",
      label: "Clasificación en zona de incertidumbre",
      doctorAction: "Enviar a segunda revisión o repetir análisis según criterio clínico.",
      decision: "Confirmar o descartar con apoyo de especialista y contexto clínico.",
      reviewText: "El médico interpreta el caso como indeterminado y usa la imagen junto con antecedentes para decidir."
    };
  }
  return {
    zone: "Zona negativa",
    className: "negative",
    label: "Clasificación negativa del modelo",
    doctorAction: "Mantener flujo de revisión normal y seguimiento según protocolo.",
    decision: "Confirmar ausencia de señales relevantes o mantener observación.",
    reviewText: "El médico verifica que la baja probabilidad del modelo sea consistente con la imagen y el historial."
  };
}

function renderStep(step) {
  document.querySelectorAll(".step").forEach((el, idx) => {
    el.classList.toggle("active", idx <= step);
  });
  document.querySelectorAll(".screen").forEach((el, idx) => {
    el.classList.toggle("active", idx === step);
  });
}

function nextStep() {
  const current = getCurrentStep();
  if (current < 5) renderStep(current + 1);
}

function prevStep() {
  const current = getCurrentStep();
  if (current > 0) renderStep(current - 1);
}

function getCurrentStep() {
  return [...document.querySelectorAll(".screen")].findIndex(el => el.classList.contains("active"));
}

function refreshCase() {
  const values = collectValues();
  const result = computePrediction(values);
  const cls = classify(result.probability);

  // Paso 2: extracción
  document.getElementById("featureCount").textContent = MODEL.metrics.features_count;
  document.getElementById("extractionSummary").textContent =
    "Se generaron 16 variables numéricas a partir de la imagen: primer orden, textura y calidad.";

  // Paso 3: modelo IA
  document.getElementById("modelProb").textContent = pct(result.probability, 2);
  document.getElementById("modelName").textContent = "Regresión Logística";
  document.getElementById("modelAuc").textContent = MODEL.metrics.auc.toFixed(6);

  // Paso 4: clasificación
  const zoneCard = document.getElementById("zoneCard");
  zoneCard.className = "zoneCard " + cls.className;
  document.getElementById("zoneName").textContent = cls.zone;
  document.getElementById("zoneLabel").textContent = cls.label;
  document.getElementById("zoneThresholds").textContent =
    `Umbral alerta: ${MODEL.metrics.threshold_alert.toFixed(3)} · Umbral alto: ${MODEL.metrics.threshold_high.toFixed(2)}`;
  document.getElementById("gaugeFill").style.width = Math.max(0, Math.min(100, result.probability * 100)) + "%";

  // Paso 5: médico revisa
  document.getElementById("doctorReview").textContent = cls.reviewText;
  document.getElementById("doctorAction").textContent = cls.doctorAction;
  renderContribs(result.contributions.slice(0, 5));

  // Paso 6: decisión clínica
  document.getElementById("clinicalDecision").textContent = cls.decision;
  document.getElementById("finalProb").textContent = pct(result.probability, 2);
  document.getElementById("finalZone").textContent = cls.zone;
  document.getElementById("finalMessage").textContent =
    "El sistema apoya la decisión, pero el diagnóstico final siempre queda en manos del médico.";

  // Header HUD
  document.getElementById("heroProb").textContent = pct(result.probability, 1);
  document.getElementById("heroZone").textContent = cls.zone;
}

function renderContribs(items) {
  const box = document.getElementById("contribs");
  box.innerHTML = "";
  items.forEach(item => {
    const w = Math.min(100, Math.abs(item.contribution) * 18);
    const div = document.createElement("div");
    div.className = "contrib";
    div.innerHTML = `
      <div class="contribTop">
        <strong>${item.name}</strong>
        <span>${item.direction}</span>
      </div>
      <div class="bar"><i style="width:${w}%"></i></div>
      <small>Aporte estandarizado: ${item.contribution.toFixed(4)}</small>
    `;
    box.appendChild(div);
  });
}

function fillMetrics() {
  const m = MODEL.metrics;
  document.getElementById("mAccuracy").textContent = pct(m.accuracy, 2);
  document.getElementById("mPrecision").textContent = pct(m.precision, 2);
  document.getElementById("mRecall").textContent = pct(m.recall, 2);
  document.getElementById("mF1").textContent = pct(m.f1, 2);
  document.getElementById("mAuc").textContent = m.auc.toFixed(6);
  document.getElementById("mRows").textContent = m.records;
  document.getElementById("mClasses").textContent = `${m.tumor} tumor / ${m.no_tumor} no tumor`;
  document.getElementById("mConf50").innerHTML = matrixHTML(m.cm_std);
  document.getElementById("mConfOpt").innerHTML = matrixHTML(m.cm_opt);
}

function matrixHTML(cm) {
  return `
    <table class="matrix">
      <tr><th></th><th>Pred. No-Tumor</th><th>Pred. Tumor</th></tr>
      <tr><th>Real No-Tumor</th><td class="good">${cm.tn}</td><td class="warn">${cm.fp}</td></tr>
      <tr><th>Real Tumor</th><td class="bad">${cm.fn}</td><td class="good">${cm.tp}</td></tr>
    </table>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  createInputs();
  fillMetrics();
  renderStep(0);
  useCase("duda");

  document.getElementById("btnNeg").addEventListener("click", () => useCase("negativo"));
  document.getElementById("btnDoubt").addEventListener("click", () => useCase("duda"));
  document.getElementById("btnHigh").addEventListener("click", () => useCase("alta"));
  document.getElementById("btnRefresh").addEventListener("click", refreshCase);
  document.getElementById("btnNext").addEventListener("click", nextStep);
  document.getElementById("btnPrev").addEventListener("click", prevStep);
});
