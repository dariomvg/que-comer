import type { Food } from "../types/types";

export const foods: Food[] = [
    {
      id: 1,
      name: "Asado",
      detail: "Carne asada a la parrilla, tradicional en las reuniones familiares argentinas.",
      prepare: [
        "1. Preparar la parrilla con brasas de carbón o leña.",
        "2. Colocar la carne (costillas, vacío, chorizo, morcilla, etc.) sobre la parrilla.",
        "3. Cocinar lentamente a fuego medio durante aproximadamente 1-2 horas, volteando ocasionalmente.",
        "4. Salpimentar al gusto y servir con chimichurri y ensalada."
      ]
    },
    {
      id: 2,
      name: "Empanadas",
      detail: "Masa rellena con carne, pollo, jamón y queso, u otros ingredientes.",
      prepare: [
        "1. Preparar el relleno: sofreír cebolla, pimiento y carne picada, agregar condimentos (sal, comino, pimentón).",
        "2. Estirar la masa y cortar en discos.",
        "3. Colocar una cucharada de relleno en el centro de cada disco, cerrar y sellar los bordes.",
        "4. Hornear a 200°C por 20 minutos o freír en aceite caliente."
      ]
    },
    {
      id: 3,
      name: "Milanesa",
      detail: "Carne empanada y frita, comúnmente servida con papas fritas o puré.",
      prepare: [
        "1. Golpear la carne (nalga o cuadrada) hasta que quede fina.",
        "2. Pasar la carne por huevo batido con sal y ajo.",
        "3. Rebozar en pan rallado.",
        "4. Freír en abundante aceite caliente hasta que esté dorada o cocinar al horno a 180°C por 25 minutos."
      ]
    },
    {
      id: 4,
      name: "Choripán",
      detail: "Chorizo a la parrilla servido en pan, acompañado de chimichurri.",
      prepare: [
        "1. Asar chorizos a la parrilla hasta que estén cocidos (unos 20-30 minutos).",
        "2. Colocar el chorizo dentro de un pan estilo baguette.",
        "3. Servir con chimichurri o salsa criolla al gusto."
      ]
    },
    {
      id: 5,
      name: "Locro",
      detail: "Guiso espeso a base de maíz, porotos, carne y chorizo.",
      prepare: [
        "1. Remojar maíz y porotos en agua durante 12 horas.",
        "2. Cocinar en una olla con carne de cerdo, panceta, chorizo, y especias (pimentón, comino, laurel) durante 3-4 horas.",
        "3. Agregar zapallo y seguir cocinando hasta que todo esté tierno.",
        "4. Servir con una salsa picante de cebolla, pimentón y ají molido."
      ]
    },
    {
      id: 6,
      name: "Provoleta",
      detail: "Queso provolone asado a la parrilla con especias.",
      prepare: [
        "1. Cortar rodajas de queso provolone gruesas.",
        "2. Espolvorear con orégano, pimentón y un poco de aceite de oliva.",
        "3. Asar el queso en la parrilla o en una plancha hasta que se derrita y esté dorado.",
        "4. Servir inmediatamente con pan tostado."
      ]
    },
    {
      id: 7,
      name: "Humita en Chala",
      detail: "Masa de choclo envuelta en hojas de maíz, cocida al vapor.",
      prepare: [
        "1. Rallar los choclos (maíz) y mezclar con cebolla sofrita, queso, leche y condimentos.",
        "2. Colocar una porción de la mezcla en una hoja de maíz.",
        "3. Envolver y atar con tiras de hoja.",
        "4. Cocinar al vapor durante 40-50 minutos."
      ]
    },
    {
      id: 8,
      name: "Matambre a la Pizza",
      detail: "Carne de matambre cocida a la parrilla o al horno, cubierta con salsa de tomate y queso.",
      prepare: [
        "1. Cocinar el matambre (corte de carne delgado) a la parrilla o al horno con sal y pimienta.",
        "2. Una vez cocido, cubrir con salsa de tomate, rodajas de tomate y queso mozzarella.",
        "3. Cocinar hasta que el queso se derrita y servir caliente."
      ]
    },
    {
      id: 9,
      name: "Carbonada",
      detail: "Guiso a base de carne, papas, zapallo, choclo y frutas, típico del invierno.",
      prepare: [
        "1. Sofreír cebolla, ajo y carne en una olla grande.",
        "2. Agregar papas, zanahorias, zapallo, choclo y caldo.",
        "3. Cocinar a fuego lento durante 1-2 horas.",
        "4. Antes de servir, agregar duraznos o peras para darle un toque dulce."
      ]
    },
    {
      id: 10,
      name: "Alfajor",
      detail: "Dulce compuesto por dos galletas rellenas de dulce de leche, cubiertas de chocolate o azúcar.",
      prepare: [
        "1. Preparar la masa con harina, maicena, azúcar y manteca.",
        "2. Hornear las tapas a 180°C durante 10-12 minutos.",
        "3. Rellenar con dulce de leche y unir dos tapas.",
        "4. Cubrir con chocolate derretido o espolvorear con azúcar glas."
      ]
    },
    {
        id: 11,
        name: "Paella",
        detail: "Plato tradicional español a base de arroz, mariscos y azafrán.",
        prepare: [
          "1. Calentar aceite de oliva en una paellera y sofreír cebolla, ajo y pimiento.",
          "2. Agregar tomates triturados y cocinar por unos minutos.",
          "3. Añadir el arroz y mezclar bien.",
          "4. Verter caldo de pescado junto con azafrán y llevar a ebullición.",
          "5. Incorporar mariscos (calamares, mejillones, gambas) y guisantes.",
          "6. Cocinar a fuego lento sin remover hasta que el arroz esté hecho.",
          "7. Dejar reposar unos minutos antes de servir."
        ]
      },
      {
        id: 12,
        name: "Sushi",
        detail: "Comida japonesa a base de arroz avinagrado, pescado crudo y algas.",
        prepare: [
          "1. Lavar el arroz varias veces y cocinarlo en agua.",
          "2. Mezclar el arroz cocido con vinagre de arroz, azúcar y sal.",
          "3. Colocar una lámina de alga nori sobre una esterilla.",
          "4. Extender una capa de arroz sobre el alga, dejando un borde libre.",
          "5. Añadir pescado crudo y verduras en el centro.",
          "6. Enrollar el alga con la esterilla, presionando firmemente.",
          "7. Cortar en porciones y servir con salsa de soja y wasabi."
        ]
      },
      {
        id: 13,
        name: "Pizza Napolitana",
        detail: "Pizza italiana con base de masa fina, salsa de tomate y mozzarella.",
        prepare: [
          "1. Preparar la masa mezclando harina, levadura, agua y sal, y dejar reposar.",
          "2. Extender la masa en una superficie enharinada.",
          "3. Cubrir la masa con salsa de tomate, orégano y queso mozzarella.",
          "4. Añadir rodajas de tomate fresco y albahaca.",
          "5. Hornear a 250°C durante 10-12 minutos hasta que esté dorada.",
          "6. Retirar del horno y servir inmediatamente."
        ]
      },
      {
        id: 14,
        name: "Tacos",
        detail: "Comida mexicana con tortillas de maíz rellenas de carne, verduras y salsas.",
        prepare: [
          "1. Calentar tortillas de maíz en una sartén o plancha.",
          "2. Cocinar carne (res, pollo o cerdo) con especias como comino, chile en polvo y ajo.",
          "3. Preparar guarniciones como cebolla, cilantro, y salsa de tomate.",
          "4. Colocar la carne cocida en el centro de la tortilla.",
          "5. Añadir las guarniciones y exprimir un poco de limón encima.",
          "6. Servir con salsa picante al gusto."
        ]
      },
      {
        id: 15,
        name: "Pad Thai",
        detail: "Plato tailandés de fideos de arroz salteados con camarones, tofu y maní.",
        prepare: [
          "1. Remojar los fideos de arroz en agua caliente hasta que estén blandos.",
          "2. Saltear camarones y tofu en aceite con ajo y cebolla.",
          "3. Añadir huevo batido a la sartén y revolver.",
          "4. Incorporar los fideos de arroz y mezclar bien.",
          "5. Agregar salsa de pescado, azúcar, salsa de tamarindo y chile en polvo.",
          "6. Servir con maní picado, brotes de soja y limón."
        ]
      },
      {
        id: 16,
        name: "Curry de Pollo",
        detail: "Plato indio con pollo cocinado en una mezcla de especias y salsa de yogur.",
        prepare: [
          "1. Sofreír cebolla, ajo y jengibre en aceite hasta que estén dorados.",
          "2. Añadir especias (curry, cúrcuma, comino, cilantro) y mezclar bien.",
          "3. Incorporar trozos de pollo y cocinar hasta que estén dorados.",
          "4. Agregar tomate triturado y yogur natural.",
          "5. Cocinar a fuego lento durante 20-30 minutos.",
          "6. Servir con arroz basmati y pan naan."
        ]
      },
      {
        id: 17,
        name: "Moussaka",
        detail: "Plato griego hecho de capas de berenjena, carne y bechamel.",
        prepare: [
          "1. Cortar las berenjenas en rodajas y asarlas al horno.",
          "2. Cocinar carne de cordero con cebolla, ajo y tomate.",
          "3. Preparar una salsa bechamel con mantequilla, harina y leche.",
          "4. En una fuente, alternar capas de berenjena, carne y bechamel.",
          "5. Hornear a 180°C durante 30-40 minutos.",
          "6. Dejar reposar antes de servir."
        ]
      },
      {
        id: 18,
        name: "Falafel",
        detail: "Croquetas de garbanzos fritas, típicas de la cocina árabe.",
        prepare: [
          "1. Remojar los garbanzos en agua durante 12 horas.",
          "2. Triturar garbanzos con cebolla, ajo, perejil, cilantro y especias.",
          "3. Formar bolitas con la mezcla y refrigerarlas durante 30 minutos.",
          "4. Freír las bolitas en aceite caliente hasta que estén doradas.",
          "5. Servir en pan pita con ensalada y salsa de yogur."
        ]
      },
      {
        id: 19,
        name: "Biryani",
        detail: "Plato de arroz especiado con carne o verduras, típico de la India.",
        prepare: [
          "1. Marinar el pollo o cordero con yogur y especias (curry, cúrcuma, comino).",
          "2. Cocinar arroz basmati con clavo, canela y cardamomo.",
          "3. Sofreír cebolla, ajo y jengibre, y añadir el pollo marinado.",
          "4. Colocar el arroz cocido sobre el pollo y tapar la olla.",
          "5. Cocinar a fuego lento durante 20 minutos.",
          "6. Servir con cilantro fresco y yogurt."
        ]
      },
      {
        id: 20,
        name: "Ratatouille",
        detail: "Plato francés de verduras guisadas en salsa de tomate.",
        prepare: [
          "1. Cortar berenjena, calabacín, pimientos y tomates en rodajas.",
          "2. Sofreír cebolla y ajo en aceite de oliva.",
          "3. Añadir las verduras en capas sobre la cebolla y el ajo.",
          "4. Cubrir con salsa de tomate y hierbas provenzales.",
          "5. Cocinar a fuego lento durante 30-40 minutos.",
          "6. Servir caliente o a temperatura ambiente."
        ]
      }, {
        id: 21,
        name: "Kimchi",
        detail: "Plato coreano de col fermentada con especias.",
        prepare: [
          "1. Cortar la col en trozos y remojarla en agua con sal durante 2 horas.",
          "2. Enjuagar la col con agua fría y escurrir bien.",
          "3. Preparar la pasta de especias con ajo, jengibre, pimiento en polvo coreano, y salsa de pescado.",
          "4. Mezclar la col con la pasta de especias.",
          "5. Colocar la mezcla en un frasco y dejar fermentar a temperatura ambiente durante 1-5 días.",
          "6. Servir frío como acompañamiento."
        ]
      },
      {
        id: 22,
        name: "Hummus",
        detail: "Puré de garbanzos con tahini, típico del Medio Oriente.",
        prepare: [
          "1. Cocinar los garbanzos hasta que estén suaves.",
          "2. Colocar los garbanzos en una licuadora con tahini, ajo, jugo de limón, y sal.",
          "3. Licuar hasta obtener una mezcla suave.",
          "4. Añadir aceite de oliva y mezclar bien.",
          "5. Servir con un chorrito de aceite de oliva por encima.",
          "6. Acompañar con pan pita o verduras."
        ]
      },
      {
        id: 23,
        name: "Pho",
        detail: "Sopa vietnamita de fideos con caldo de carne y hierbas.",
        prepare: [
          "1. Hervir huesos de ternera con cebolla, jengibre y especias (canela, anís estrellado) durante varias horas.",
          "2. Colar el caldo y volver a calentar.",
          "3. Cocinar los fideos de arroz según las instrucciones del paquete.",
          "4. Colocar los fideos en un tazón y añadir carne de ternera cruda en rodajas finas.",
          "5. Verter el caldo caliente sobre la carne para que se cocine.",
          "6. Servir con hierbas frescas, brotes de soja, y rodajas de limón."
        ]
      },
      {
        id: 24,
        name: "Shakshuka",
        detail: "Plato del Medio Oriente de huevos escalfados en salsa de tomate especiada.",
        prepare: [
          "1. Sofreír cebolla, pimientos y ajo en una sartén grande.",
          "2. Añadir tomates triturados, comino, pimentón, y una pizca de chile.",
          "3. Cocinar a fuego lento hasta que la salsa espese.",
          "4. Hacer huecos en la salsa y romper los huevos en ellos.",
          "5. Tapar y cocinar hasta que los huevos estén escalfados.",
          "6. Servir con pan pita o crujiente."
        ]
      },
      {
        id: 25,
        name: "Dim Sum",
        detail: "Variedad de bocadillos chinos cocidos al vapor, fritos o a la plancha.",
        prepare: [
          "1. Preparar el relleno para los dumplings con carne, verduras y especias.",
          "2. Colocar una cucharada de relleno en el centro de cada envoltura de dumpling.",
          "3. Cerrar los dumplings formando pequeños paquetes.",
          "4. Cocer al vapor los dumplings durante 10-15 minutos.",
          "5. Servir con salsa de soja o de chile."
        ]
      },
      {
        id: 26,
        name: "Goulash",
        detail: "Estofado húngaro de carne de res con pimentón.",
        prepare: [
          "1. Sofreír cebolla y ajo en una olla grande.",
          "2. Añadir carne de res en cubos y dorar.",
          "3. Incorporar pimentón, comino, y tomate.",
          "4. Añadir caldo de res y papas en cubos.",
          "5. Cocinar a fuego lento durante 2-3 horas.",
          "6. Servir caliente con pan o arroz."
        ]
      },
      {
        id: 27,
        name: "Tagine",
        detail: "Plato marroquí de carne y verduras cocinadas lentamente en una cazuela de barro.",
        prepare: [
          "1. Marinar la carne (cordero o pollo) con especias marroquíes como comino, canela y cúrcuma.",
          "2. Sofreír cebolla y ajo en una cazuela.",
          "3. Añadir la carne y dorar.",
          "4. Incorporar verduras (zanahorias, papas) y ciruelas secas.",
          "5. Añadir caldo y cocinar a fuego lento durante 1-2 horas.",
          "6. Servir con cuscús."
        ]
      },
      {
        id: 28,
        name: "Peking Duck",
        detail: "Plato chino de pato laqueado servido con tortillas finas y salsa de ciruela.",
        prepare: [
          "1. Limpiar el pato y secarlo bien.",
          "2. Untar la piel del pato con una mezcla de miel, salsa de soja y vinagre.",
          "3. Colgar el pato en un lugar fresco durante varias horas para que la piel se seque.",
          "4. Asar el pato en el horno hasta que la piel esté crujiente.",
          "5. Cortar la carne en rodajas finas.",
          "6. Servir con tortillas finas, cebollín y salsa de ciruela."
        ]
      },
      {
        id: 29,
        name: "Borscht",
        detail: "Sopa tradicional ucraniana a base de remolacha.",
        prepare: [
          "1. Hervir remolachas en agua hasta que estén tiernas y luego rallarlas.",
          "2. Sofreír cebolla, zanahorias y ajo en una olla.",
          "3. Añadir las remolachas ralladas, papas y repollo.",
          "4. Verter caldo de carne o verduras.",
          "5. Cocinar a fuego lento hasta que las verduras estén tiernas.",
          "6. Servir con crema agria y eneldo fresco."
        ]
      },
      {
        id: 30,
        name: "Ensalada Criolla",
        detail: "Ensalada fresca hecha de tomate, cebolla y pimientos, condimentada con vinagre y aceite.",
        prepare: [
          "1. Cortar en cubos tomates maduros, cebolla y pimientos.",
          "2. Colocar los ingredientes en un bol y añadir sal y pimienta.",
          "3. Aliñar con aceite de oliva y vinagre.",
          "4. Mezclar bien y servir como acompañamiento para carnes asadas o platos principales."
        ]
      },  {
        id: 31,
        name: "Pollo al Disco",
        detail: "Plato tradicional cocinado en un disco de arado con pollo y verduras.",
        prepare: [
          "1. Calentar un disco de arado con aceite.",
          "2. Dorar trozos de pollo con cebolla, ajo y pimientos.",
          "3. Agregar zanahorias, papas y batatas en rodajas.",
          "4. Verter vino blanco y caldo de pollo, y cocinar a fuego lento.",
          "5. Cocinar durante 45-60 minutos hasta que el pollo esté tierno."
        ]
      },  {
        id: 32,
        name: "Matambre a la Pizza",
        detail: "Carne de matambre (corte fino de res) cubierta con salsa de tomate y queso derretido, cocinada a la parrilla.",
        prepare: [
          "1. Asar el matambre a la parrilla por unos 20 minutos, hasta que esté dorado.",
          "2. Cubrir el matambre con salsa de tomate casera.",
          "3. Añadir rodajas de mozzarella y orégano.",
          "4. Cocinar a la parrilla hasta que el queso esté completamente derretido.",
          "5. Servir caliente con un toque de aceite de oliva."
        ]
      },  {
        id: 33,
        name: "Chimichurri",
        detail: "Salsa argentina hecha a base de perejil, ajo y aceite, utilizada como acompañamiento para carnes asadas.",
        prepare: [
          "1. Picar finamente perejil, ajo y ají molido.",
          "2. Mezclar con vinagre, aceite de oliva, sal y pimienta.",
          "3. Dejar reposar la mezcla durante al menos una hora antes de servir.",
          "4. Utilizar para acompañar carnes asadas o como aderezo para ensaladas."
        ]
      },  {
        id: 34,
        name: "Provoleta",
        detail: "Queso provolone asado a la parrilla, típico acompañamiento de los asados argentinos.",
        prepare: [
          "1. Cortar una rodaja gruesa de queso provolone.",
          "2. Espolvorear con orégano y un toque de aceite de oliva.",
          "3. Asar el queso en la parrilla o plancha hasta que esté dorado por fuera y derretido por dentro.",
          "4. Servir inmediatamente con pan o como acompañamiento del asado."
        ]
      },
  ];
  