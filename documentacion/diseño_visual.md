
# Requisitos Visuales


## Estilos globales
- **Fondo**: color blanco (`#FFFFFF`).
- **Tipografía**: fuente sans-serif (ej. `Arial`, `Roboto`).
- **Color de texto**: negro (`#000000`).
- **Márgenes generales**: 20px alrededor del contenido.

- **Título**:
  - Texto: `UnfoldFate`
  - Ubicación: parte superior, centrado.
  - Estilo: fuente grande, **negrita**, color oscuro.
  - Semántica: usar `<h1>`.

- **Botón principal**:
  - Texto: `New Reading`
  - Ubicación: debajo del título.
  - Alineación: alineado a la izquierda.
  - Estilo:
    - Color de fondo: azul oscuro (`#003366`).
    - Texto: blanco (`#FFFFFF`).
    - Padding: 10px 20px.
    - Bordes: redondeados (opcional).
    - Hover: tono más claro (`#004080`).
  - Semántica: usar `<button>` con `aria-label="Nueva lectura"`.

- **Cuadrícula de cartas**:
  - Disposición: filas de **6 cartas como mucho** (en pantallas grandes).
  - Cada carta:
    - Tamaño uniforme (ej. `150px x 250px`). 
  - Diseño responsive:
    - En pantallas pequeñas: reducir a 3 cartas por fila.
    - Usar CSS Grid: `grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));`.

- **Panel de información**:
  - Ubicación: debajo de la cuadrícula.
  - Contenido:
    - **Nombre de la carta**: en negrita, tamaño mayor.
    - **Descripción**: texto normal, legible.
    - **Futuro**: texto normal, legible.
  - Estilo:
    - Márgenes: 20px arriba y abajo.
    - Alineación: alineado a la izquierda.
