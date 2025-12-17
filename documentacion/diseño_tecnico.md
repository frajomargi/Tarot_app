
# Requisitos Técnicos

- Usar solo **HTML** y **JavaScript** (sin frameworks ni librerías externas).
- Generar **pruebas automáticas y unitarias** para ello, usas Jasmine. El código de las pruebas, debe de estar documentado.
- Leer las imágenes desde el directorio `/img`.
```Importar la información de las cartas desde `datosCartas.js`. Ejemplo:

```javascript
const tarotCards = [
    {
        arriba: 'img/major_arcana_chariot.png',
        reves: 'img/rider-waite-tarot_bg.jpg',
        descripcion: 'Representa la victoria, la fuerza de voluntad y el control.',
        futuro: 'Te espera un viaje lleno de éxitos y logros personales.'
    },
    {
        arriba: 'img/major_arcana_death.png',
        reves: 'img/rider-waite-tarot_bg.jpg',
        descripcion: 'Simboliza el final de un ciclo y el comienzo de uno nuevo, transformación y cambio.',
        futuro: 'Un cambio significativo está en camino, prepárate para una nueva etapa en tu vida.'
    },
    // ...
];
```
- El código debe ser sencillo y estar documentado.

- Arquitectura del Proyecto:
```
tarot-app/
├─ index.html
├─ css/
│  └─ styles.css
├─ img/
│  ├─ major_arcana_chariot.png
│  └─ etc
├─ js/
│  ├─ Directorio para los javascript
└─ tests/
   └─directorio para las pruebas

```