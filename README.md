# NeuroFlow Hospital IA - Demo funcional

Demo multi-página para GitHub Pages que simula un flujo hospitalario completo:

1. Cargar imagen médica.
2. Extraer características desde la imagen en el navegador.
3. Ejecutar modelo de Regresión Logística.
4. Clasificar en zona negativa, zona de duda o zona alta.
5. Permitir revisión del médico.
6. Emitir reporte/diagnóstico final del flujo.

## Resultados reales incluidos del notebook Python

- Registros limpios: 1273
- Variables predictoras: 16
- Accuracy: 0.9529
- Precision: 0.9956
- Recall: 0.9534
- F1-score: 0.9740
- AUC-ROC: 0.978368
- Umbral de alerta: 0.212

## Archivos

- index.html
- extraccion.html
- modelo.html
- clasificacion.html
- revision.html
- diagnostico.html
- metricas.html
- styles.css
- app.js
- .nojekyll

## Publicación en GitHub Pages

Subir todos los archivos a la raíz del repositorio y activar GitHub Pages en Settings > Pages.
