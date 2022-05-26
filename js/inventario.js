const dollar = 205;

const productos = [
  {
    id: 1,
    ean: 5216986224,
    imagen: "imagenes/productos/gmrc.jpg",
    categoria: "MOUSE",
    descripcion: "MOUSE GENIUS ROJO USB",
    link: "https://us.geniusnet.com/product/dx-110/",
    detalle: "Mouse optico conexión USB con resolución de 1000 DPI de 3 botones",
    stock: "DISPONIBLE",
    precio: (3.70 * dollar).toFixed()
  },
  {
    id: 2,
    ean: 7855963250012,
    imagen: "imagenes/productos/gtnc.jpg",
    categoria: "TECLADOS",
    descripcion: "Teclado Mecanico Genius Smart Usb Kb-102 Español Para Pc",
    detalle: "Un teclado muy bueno ",
    link: "https://us.geniusnet.com/product/smart-kb-101/",

    precio: (4.05 * dollar).toFixed()
  },
  {
    id: 3,
    ean: 7852143259012,
    imagen: "imagenes/productos/WEBCAM1000x.jpg",
    categoria: "WEBCAM",
    link: "NO APLICA",
    descripcion: "Webcam Camara Genius Facecam 1000x Hd 720p Con Microfono Pc",
    stock: "NO DISPONIBLE",
    precio: (18.51 * dollar).toFixed()
  },
  {
    id: 4,
    ean: 7852143784215,
    imagen: "imagenes/productos/FTATX850.jpg",
    categoria: "FUENTES",
    descripcion: "FUENTE ATX 850W SENTEY MODULAR 80 PLUS",
    precio: (41.5 * dollar).toFixed()
  },
  {
    id: 5,
    ean: 7857851484215,
    categoria: "HP",
    imagen: "imagenes/productos/tvparlantes.jpg",
    descripcion: "THONET VANDER SPIEL MADERA",
    precio: (80 * dollar).toFixed()
  },
  {
    id: 6,
    ean: 7852188966542,
    imagen: "imagenes/productos/cartucho-negro-epson-135-original.jpg",
    categoria: "EPSON",
    descripcion: "CARTUCHO EPSON 135 NEGRO",
    precio: (9 * dollar).toFixed()
  },
  {
    id: 7,
    ean: 7541236784215,
    imagen: "imagenes/productos/toners/evertec12a.jpg",
    categoria: "TONERS",
    descripcion: "TONER ALTERNATIVO 12A",
    detalle: "Rendimiento : 2000 Copias al 5% de cobertura de la hoja. Compatibilidad : LaserJet 1010/1012/1015/1018/1020/1022/3015/3020/3030/3050/3052/3055 M1005/1319",
    precio: (5.75 * dollar).toFixed()
  },
  {
    id: 8,
    ean: 7852143111254,
    imagen: "imagenes/productos/discoexterno.jpg",
    categoria: "ALMACENAMIENTO",
    descripcion: "DISCO EXTERNO 1TB SEAGATE",
    precio: (55 * dollar).toFixed()
  },
  {
    id: 9,
    ean: 7852819464123,
    imagen: "imagenes/productos/MKheX.jpg",
    categoria: "ROUTER",
    descripcion: "MIKROTIK HEX 941N2D",
    precio: (65 * dollar).toFixed()
  },
  {
    id: 10,
    ean: 7852744177254,
    imagen: "imagenes/productos/ssd240gb.jpg",
    categoria: "ALMACENAMIENTO",
    descripcion: "DISCO SSD 240GB GIGABYTE",
    descripcion: "Disco estado solido 2.5 SATA III",
    precio: (45 * dollar).toFixed()
  },
  {
    id: 11,
    ean: 2638798643429,
    imagen: "imagenes/productos/bma365.jpg",
    categoria: "MOTHER",
    descripcion: "MOTHER AURUS",
    precio: (21.70 * dollar).toFixed()
  },
  {
    id: 12,
    ean: 3209945431597,
    imagen: "imagenes/productos/EcoTank-L3250-690x460-4.jpg",
    categoria: "IMPRESORAS",
    descripcion: "EPSON L3250 EcoTank",
    precio: (275.70 * dollar).toFixed()
  },
  {
    id: 13,
    ean: 1915173566801,
    imagen: `imagenes/productos/gah410m.jpg`,
    categoria: "MOTHER",
    descripcion: "Mother Gigabyte H410",
    precio: (35 * dollar).toFixed()
  },
  {
    id: 14,
    ean: 7374288521415,
    imagen: `imagenes/productos/gf210.jpg`,
    categoria: "VIDEO",
    descripcion: "PLACA VIDEO GF210 1GB",
    precio: (105 * dollar).toFixed()
  },
  {
    id: 15,
    ean: 7854532154215,
    imagen: `imagenes/productos/gmtb.jpg`,
    categoria: "MOUSE",
    descripcion: "GENIUS BLANCO MINI CABLE RETRACTIL",
    precio: (11 * dollar).toFixed()
  },
  {
    id: 16,
    ean: 7932653966542,
    imagen: `imagenes/productos/gpu115.jpg`,
    categoria: "PARLANTES",
    descripcion: "PARLANTES USB CHICOS",
    precio: (9 * dollar).toFixed()
  },
  {
    id: 17,
    ean: 7500365241235,
    imagen: `imagenes/productos/oft75.jpg`,
    categoria: "RESMA",
    descripcion: "RESMA 75Gr A4 500h.",
    precio: (3.1 * dollar).toFixed()
  },
  {
    id: 18,
    ean: 7171813245540,
    imagen: `imagenes/productos/tr900s.jpg`,
    categoria: "MOUSE",
    descripcion: "MOUSE INALAMBRICO CON PILAS",
    precio: (15 * dollar).toFixed()
  },
  {
    id: 19,
    ean: 2638736533429,
    imagen: "imagenes/productos/routerCISCO.jpg",
    categoria: "ROUTER",
    descripcion: "ROUTER CISCO GIGALAN",
    precio: (32.70 * dollar).toFixed()
  },
  {
    id: 20,
    ean: 7855598643429,
    imagen: "imagenes/productos/NBLenovo.jpg",
    categoria: "NOTEBOOK",
    descripcion: "NOTEBOOK LENOVO",
    precio: (71.70 * dollar).toFixed()
  },
  {
    id: 21,
    ean: 521698633224,
    imagen: "imagenes/productos/toners/TONER111S.jpg",
    categoria: "TONERS",
    descripcion: "TONER ALTERNATIVO SAMSUNG 111S",
    detalle: "COMPATIBLE CON SAMSUNG M2020, M2021, M2022, M2070, M2071, M2071FH, -RENDIMIENTO: 1000 PÁGINAS (cada página está contemplada al 5% de impresión, que equivale a una hoja de texto completa).",
    stock: "NO DISPONIBLE",
    precio: (8.28 * dollar).toFixed()
  },
]