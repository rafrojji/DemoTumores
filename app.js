
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
    "imagenes_procesadas": 1273,
    "variables_predictoras": 16,
    "tumor": 1176,
    "no_tumor": 97,
    "pct_tumor": 92.4,
    "pct_no_tumor": 7.6,
    "ratio": 12.1,
    "train_rows": 1018,
    "test_rows": 255,
    "iteraciones": 31,
    "accuracy": 0.9529411764705882,
    "precision": 0.995575221238938,
    "recall": 0.9533898305084746,
    "f1": 0.974025974025974,
    "auc": 0.9783675289919714,
    "umbral_optimo": 0.212275876059717,
    "umbral_alto": 0.7,
    "recall_estimado_umbral": 0.9745762711864406,
    "fpr_estimado_umbral": 0.05263157894736842,
    "cm_050": {
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
    },
    "zonas": {
      "Zona alta del modelo": 216,
      "Zona de duda": 15,
      "Zona negativa": 24
    },
    "limpieza": {
      "multipunto": 8639,
      "multipunto_pct": 42.3,
      "texto_basura": 29,
      "correlacion_imposible": 2,
      "celdas_vacias": 66,
      "filas_diagnostico_vacio_eliminadas": 2,
      "nan_final": 0
    }
  },
  "importance": [
    {
      "feature": "dc",
      "coef": 7.780964283881684,
      "abs": 7.780964283881684
    },
    {
      "feature": "asm",
      "coef": 2.77161486072695,
      "abs": 2.77161486072695
    },
    {
      "feature": "mse",
      "coef": 2.6129921081634486,
      "abs": 2.6129921081634486
    },
    {
      "feature": "energia",
      "coef": 2.2459361748623756,
      "abs": 2.2459361748623756
    },
    {
      "feature": "ssim",
      "coef": -1.8369294361352837,
      "abs": 1.8369294361352837
    },
    {
      "feature": "correlacion",
      "coef": -0.46145052660049557,
      "abs": 0.46145052660049557
    },
    {
      "feature": "homogeneidad",
      "coef": -0.45677031137755597,
      "abs": 0.45677031137755597
    },
    {
      "feature": "asimetria",
      "coef": 0.3672749957195039,
      "abs": 0.3672749957195039
    },
    {
      "feature": "media",
      "coef": -0.1947845202635357,
      "abs": 0.1947845202635357
    },
    {
      "feature": "desviacion.estandar",
      "coef": 0.17822256799154207,
      "abs": 0.17822256799154207
    },
    {
      "feature": "psnr",
      "coef": -0.09484730687551188,
      "abs": 0.09484730687551188
    },
    {
      "feature": "entropia",
      "coef": -0.05166584777874989,
      "abs": 0.05166584777874989
    },
    {
      "feature": "disiminitud",
      "coef": 0.03889828782362975,
      "abs": 0.03889828782362975
    },
    {
      "feature": "varianza",
      "coef": -0.022803625386648846,
      "abs": 0.022803625386648846
    },
    {
      "feature": "contraste",
      "coef": -0.007925480091656072,
      "abs": 0.007925480091656072
    },
    {
      "feature": "kurtosis",
      "coef": -0.0027247952524777695,
      "abs": 0.0027247952524777695
    }
  ]
};

const GROUPS = {
  "Primer orden": ["media", "varianza", "desviacion.estandar", "entropia", "asimetria", "kurtosis"],
  "Textura": ["contraste", "energia", "asm", "homogeneidad", "disiminitud", "correlacion"],
  "Calidad / similitud": ["psnr", "ssim", "mse", "dc"]
};

function sigmoid(z) {
  return 1 / (1 + Math.exp(-z));
}

function pct(v, d=1) {
  return (v * 100).toFixed(d) + "%";
}

function num(v, d=3) {
  return Number(v).toLocaleString("es-CR", { maximumFractionDigits: d });
}

function compute() {
  let z = MODEL.intercept;
  const contributions = [];

  MODEL.features.forEach(name => {
    const input = document.getElementById("f_" + cssSafe(name));
    let raw = parseFloat(input.value);
    if (Number.isNaN(raw)) {
      raw = MODEL.medians[name];
      input.value = raw;
    }

    const scaled = (raw - MODEL.means[name]) / MODEL.scales[name];
    const contribution = MODEL.coef[name] * scaled;
    z += contribution;

    contributions.push({
      name,
      raw,
      scaled,
      contribution,
      direction: contribution >= 0 ? "aumenta probabilidad" : "reduce probabilidad"
    });
  });

  contributions.sort((a,b) => Math.abs(b.contribution) - Math.abs(a.contribution));
  return { probability: sigmoid(z), z, contributions };
}

function classify(prob) {
  const low = MODEL.metrics.umbral_optimo;
  const high = MODEL.metrics.umbral_alto;

  if (prob >= high) {
    return {
      zone: "Zona alta del modelo",
      label: "Clasificación positiva del modelo",
      className: "danger",
      icon: "!",
      explanation: "La probabilidad supera el umbral alto de 0.70 utilizado en el notebook. Se recomienda revisar el caso con criterio profesional."
    };
  }

  if (prob >= low) {
    return {
      zone: "Zona de duda",
      label: "Clasificación en zona de incertidumbre",
      className: "warn",
      icon: "?",
      explanation: "La probabilidad supera el umbral de alerta 0.212, pero no alcanza 0.70. El notebook propone esta zona para repetir o revisar el análisis."
    };
  }

  return {
    zone: "Zona negativa",
    label: "Clasificación negativa del modelo",
    className: "safe",
    icon: "✓",
    explanation: "La probabilidad queda por debajo del umbral de alerta 0.212 utilizado en el notebook."
  };
}

function cssSafe(name) {
  return name.replaceAll(".", "_").replaceAll(" ", "_");
}

function renderInputs() {
  const box = document.getElementById("featureGrid");
  box.innerHTML = "";

  Object.entries(GROUPS).forEach(([groupName, vars]) => {
    const group = document.createElement("section");
    group.className = "featureGroup";
    group.innerHTML = `<h3>${groupName}</h3><div class="featureInputs"></div>`;

    const inner = group.querySelector(".featureInputs");
    vars.forEach(name => {
      const id = "f_" + cssSafe(name);
      const med = MODEL.medians[name];

      const field = document.createElement("div");
      field.className = "field";
      field.innerHTML = `
        <label for="${id}">${name}</label>
        <input id="${id}" type="number" step="any" value="${med}">
        <small>Mediana usada como valor base: ${num(med, 6)}</small>
      `;
      inner.appendChild(field);
    });

    box.appendChild(group);
  });

  MODEL.features.forEach(name => {
    document.getElementById("f_" + cssSafe(name)).addEventListener("input", predict);
  });
}

function predict() {
  const result = compute();
  const prob = result.probability;
  const cls = classify(prob);

  const card = document.getElementById("resultCard");
  card.className = "resultCard " + cls.className;

  document.getElementById("resultIcon").textContent = cls.icon;
  document.getElementById("probability").textContent = pct(prob, 2);
  document.getElementById("resultLabel").textContent = cls.label;
  document.getElementById("resultZone").textContent = cls.zone;
  document.getElementById("resultExplanation").textContent = cls.explanation;
  document.getElementById("brainStatus").textContent = cls.zone;
  document.getElementById("brainProb").textContent = pct(prob, 1);
  document.getElementById("gaugeFill").style.width = Math.max(0, Math.min(100, prob * 100)) + "%";

  const brain = document.querySelector(".brain3d");
  brain.classList.toggle("alert", cls.className === "danger");
  brain.classList.toggle("doubt", cls.className === "warn");

  renderContributions(result.contributions.slice(0, 6));
}

function renderContributions(items) {
  const box = document.getElementById("contributions");
  box.innerHTML = "";

  items.forEach(item => {
    const row = document.createElement("div");
    row.className = "contribution";
    const w = Math.min(100, Math.abs(item.contribution) * 18);
    row.innerHTML = `
      <div class="contributionTop">
        <strong>${item.name}</strong>
        <span>${item.direction}</span>
      </div>
      <div class="bar"><i style="width:${w}%"></i></div>
      <small>Aporte estandarizado: ${item.contribution.toFixed(4)}</small>
    `;
    box.appendChild(row);
  });
}

function setExample(type) {
  const examples = {
    median: MODEL.medians,
    high: {
      media: 234.485168, varianza: 253.898563, "desviacion.estandar": 503.883481,
      entropia: 0.651174, asimetria: 198.420231, kurtosis: 542.104152,
      contraste: 181.467713, energia: 0.781557, asm: 0.610831,
      homogeneidad: 0.847033, disiminitud: 276.541144, correlacion: 0.968576,
      psnr: 979.746298, ssim: 0.777011, mse: 0.171163, dc: 0.303989
    },
    doubt: {
      media: 145, varianza: 170, "desviacion.estandar": 290,
      entropia: 0.74, asimetria: 150, kurtosis: 260, contraste: 140,
      energia: 0.88, asm: 0.77, homogeneidad: 0.91, disiminitud: 38,
      correlacion: 0.94, psnr: 820, ssim: 0.91, mse: 0.08, dc: 0.51
    },
    low: {
      media: 85, varianza: 105, "desviacion.estandar": 185,
      entropia: 0.88, asimetria: 130, kurtosis: 155, contraste: 115,
      energia: 0.98, asm: 0.96, homogeneidad: 0.99, disiminitud: 0.35,
      correlacion: 0.91, psnr: 720, ssim: 0.98, mse: 0.02, dc: 0.72
    }
  };

  Object.entries(examples[type]).forEach(([name, value]) => {
    const el = document.getElementById("f_" + cssSafe(name));
    if (el) el.value = value;
  });

  predict();
}

function paintMetrics() {
  const m = MODEL.metrics;

  document.getElementById("kpiRows").textContent = m.imagenes_procesadas;
  document.getElementById("kpiVars").textContent = m.variables_predictoras;
  document.getElementById("kpiAuc").textContent = m.auc.toFixed(6);
  document.getElementById("kpiRecall").textContent = pct(m.recall, 1);
  document.getElementById("kpiAcc").textContent = pct(m.accuracy, 1);
  document.getElementById("kpiF1").textContent = pct(m.f1, 1);

  document.getElementById("distText").textContent =
    `Tumor=${m.tumor} (${m.pct_tumor}%) · No-Tumor=${m.no_tumor} (${m.pct_no_tumor}%) · Ratio ${m.ratio}:1`;

  document.getElementById("cm050").innerHTML = matrixHTML(m.cm_050);
  document.getElementById("cmOpt").innerHTML = matrixHTML(m.cm_opt);

  document.getElementById("thresholdText").textContent = m.umbral_optimo.toFixed(3);
  document.getElementById("thresholdHighText").textContent = m.umbral_alto.toFixed(2);
  document.getElementById("zoneHigh").textContent = m.zonas["Zona alta del modelo"];
  document.getElementById("zoneDoubt").textContent = m.zonas["Zona de duda"];
  document.getElementById("zoneNegative").textContent = m.zonas["Zona negativa"];

  document.getElementById("cleanMulti").textContent = `${m.limpieza.multipunto.toLocaleString("es-CR")} (${m.limpieza.multipunto_pct}%)`;
  document.getElementById("cleanGarbage").textContent = m.limpieza.texto_basura;
  document.getElementById("cleanCorr").textContent = m.limpieza.correlacion_imposible;
  document.getElementById("cleanEmpty").textContent = m.limpieza.celdas_vacias;
  document.getElementById("cleanRows").textContent = m.limpieza.filas_diagnostico_vacio_eliminadas;
  document.getElementById("cleanNan").textContent = m.limpieza.nan_final;

  renderImportance();
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

function renderImportance() {
  const box = document.getElementById("importanceList");
  box.innerHTML = "";

  const max = MODEL.importance[0].abs;
  MODEL.importance.slice(0, 10).forEach((item, idx) => {
    const row = document.createElement("div");
    row.className = "importance";
    row.innerHTML = `
      <span class="rank">${idx + 1}</span>
      <div class="importanceBody">
        <div class="importanceTop"><strong>${item.feature}</strong><span>${item.coef.toFixed(4)}</span></div>
        <div class="bar"><i style="width:${(item.abs / max) * 100}%"></i></div>
      </div>
    `;
    box.appendChild(row);
  });
}

function switchTab(tab) {
  document.querySelectorAll(".tab").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".view").forEach(el => el.classList.remove("active"));
  document.getElementById("tab_" + tab).classList.add("active");
  document.getElementById("view_" + tab).classList.add("active");
}

function togglePresentation() {
  document.body.classList.toggle("presentation");
}

document.addEventListener("DOMContentLoaded", () => {
  renderInputs();
  paintMetrics();
  predict();

  document.getElementById("btnMedian").addEventListener("click", () => setExample("median"));
  document.getElementById("btnHigh").addEventListener("click", () => setExample("high"));
  document.getElementById("btnDoubt").addEventListener("click", () => setExample("doubt"));
  document.getElementById("btnLow").addEventListener("click", () => setExample("low"));
  document.getElementById("presentationBtn").addEventListener("click", togglePresentation);
});
