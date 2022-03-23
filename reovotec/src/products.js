const products = [
  {
    productType: "packer",
    modelType: "standard",
    modelName: "Farm Packer One Standard",
    modelNameShort: "FP one",
    eggsPerHour: 36000, // eggs per hour
    casesPerHour: 195, // cases per hour
    dimentions: [2.3, 2.91], // l x w in meters
    powerUnit: {
      voltage: 240, // volts
      hertz: [50, 60], //hertz
      phase: 1, // motor phase
      ampere: 5, // ampere
    },
    images: [],
    description: "Farm packer description. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, commodi nesciunt? Harum atque consequuntur laborum temporibus accusantium minima. Officia at amet libero cupiditate reprehenderit dignissimos.",
    details: [
      "SIMPLE DESIGN WITH ALL THE TECHNOLOGY",
      "LOW MAINTENANCE COSTS",
      "EASY CLEANING AND MAINTENANCE",
      "EASY OPERATION",
      "OPTION TO RUN 12, 18 & 30 EGG PACKAGING",
      "SMALL FOOT PRINT",
      "ALL STAINLESS STEEL, MINIMAL USE OF PLASTIC"
    ],
    configurations: [
      {
        modelType: "packer with candler",
        modelName: "Farm Packer One with Ovoscopia",
        modelNameShort: "FP one w/ Candler",
        eggsPerHour: 36000, // eggs per hour
        casesPerHour: 195, // cases per hour
        dimentions: [5.36, 2.91], // l x w in meters
        images: []
      },
      {
        modelType: "two pakers with distribution table",
        modelName: "Farm Packer One with Distribution Table",
        modelNameShort: "FP One system",
        eggsPerHour: 72000, // eggs per hour
        casesPerHour: 390, // cases per hour
        dimentions: [4.97, 3.86], // l x w in meters
        images: []
      },
    ],
  },
  {
    productType: "packer",
    modelType: "re-packer",
    modelName: "Grader Packer One",
    modelNameShort: "GP One",
    eggsPerHour: 0, // eggs per hour
    casesPerHour: 0, // cases per hour
    dimentions: [], // l x w in meters
    powerUnit: {
      voltage: 0, // volts
      hertz: [0], //hertz
      phase: 0, // motor phase
      ampere: 0, // ampere
    },
    images: [],
    description: "",
    details: [],
    configurations: [
      {
        productType: "",
        modelType: "",
        modelName: "",
        modelNameShort: "",
        eggsPerHour: 0, // eggs per hour
        casesPerHour: 0, // cases per hour
        dimentions: [], // l x w in meters
        images: []
      }
    ],
  },
  {
    productType: "grader",
    modelType: "sorter compact electric",
    modelName: "compact electronic scale sorter",
    modelNameShort: "Compacta D101",
    eggsPerHour: 12000, // eggs per hour
    numberOfClassifications: 5,
    dimentions: [2.85, 2.5], // l x w in meters
    powerUnit: {

    },
    images: [],
    description: "",
    details: [
      "Clasificación de hasta 5 categorias",
      "Construcción hecha en acero inoxidable 304 ",
      " Acumulador de huevo con sensor para control del flujo al entrar el huevo. ",
      "Presición de la balanza electronica es de 0.1gr ",
      "Ovoscopio para el huevo fisurado y roto ",
      "Pantalla tactil de 7 de uso facil para controlar la clasificadora ",
      "Guarda información estadistica del peso del huevo ",
      " No requiere de aire presurizado ",
      "Opciones A & B para su facil acomodo en el cuarto de huevo ",
      "Impresora Eggjet opcional disponible ",
      "Consumo electrico; 0.60 Kwh ",
      "Peso neto / bruto: 450 Kgr / 550 Kgr ",
      "Fácil mantenimiento, lubricación y limpieza diaria. ",

    ],
    configurations: [
      {
        modelType: "sorter compact electric",
        modelName: "A",
        dimentions: [2.85, 3.15], // l x w in meters
        images: []
      }
    ],
  },
  {
    productType: "grader",
    modelType: "",
    modelName: "",
    modelNameShort: "Ovoselecta",
    eggsPerHour: 0, // eggs per hour
    casesPerHour: 0, // cases per hour
    dimentions: [], // l x w in meters
    powerUnit: {
      voltage: 0, // volts
      hertz: [0], //hertz
      phase: 0, // motor phase
      ampere: 0, // ampere
    },
    images: [],
    description: "",
    details: [],
    configurations: [
      {
        productType: "",
        modelType: "",
        modelName: "",
        modelNameShort: "",
        eggsPerHour: 0, // eggs per hour
        casesPerHour: 0, // cases per hour
        dimentions: [], // l x w in meters
        images: []
      }
    ],
  },
  {
    productType: "grader",
    modelType: "",
    modelName: "",
    modelNameShort: "ViewMax",
    eggsPerHour: 0, // eggs per hour
    casesPerHour: 0, // cases per hour
    dimentions: [], // l x w in meters
    powerUnit: {
      voltage: 0, // volts
      hertz: [0], //hertz
      phase: 0, // motor phase
      ampere: 0, // ampere
    },
    images: [],
    description: "",
    details: [],
    configurations: [
      {
        productType: "",
        modelType: "",
        modelName: "",
        modelNameShort: "",
        eggsPerHour: 0, // eggs per hour
        casesPerHour: 0, // cases per hour
        dimentions: [], // l x w in meters
        images: []
      }
    ],
  },
];


export default products;


// {
//   productType: "",
//   modelType: "",
//   modelName: "",
//   modelNameShort: "",
//   eggsPerHour: 0, // eggs per hour
//   casesPerHour: 0, // cases per hour
//   dimentions: [], // l x w in meters
//   powerUnit: {
//     voltage: 0, // volts
//     hertz: [0], //hertz
//     phase: 0, // motor phase
//     ampere: 0, // ampere
//   },
//   images: [],
//   description: "",
//   details: [],
//   configurations: [
//     {
//       productType: "",
//       modelType: "",
//       modelName: "",
//       modelNameShort: "",
//       eggsPerHour: 0, // eggs per hour
//       casesPerHour: 0, // cases per hour
//       dimentions: [], // l x w in meters
//       images: []
//     }
//   ],
// }

