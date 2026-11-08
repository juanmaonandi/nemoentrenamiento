/**
 * NEMO ENTRENAMIENTO - Configuración y Datos Centralizados
 * Edita este archivo para actualizar fácilmente tienda, horarios, equipo, fotos, historia y testimonios
 * sin tocar el código HTML.
 */

const NEMO_DATA = {
  // Información de contacto y redes
  contacto: {
    whatsappNumber: "59898871258", // 098 871 258 en formato internacional
    whatsappDisplay: "098 871 258",
    whatsappNumber2: "59892952444", // 092 952 444 en formato internacional
    whatsappDisplay2: "092 952 444",
    instagram: "nemoentrenamiento",
    instagramUrl: "https://www.instagram.com/nemoentrenamiento/",
    ubicacion: "Punta Ballena · Maldonado · Punta del Este, Uruguay",
    email: "contacto@nemoentrenamiento.com",
    mensajeDefault: "Hola NEMO, quería consultar por los entrenamientos."
  },

  // Portada / Hero
  hero: {
    titulo: "NEMO",
    subtitulo: "TODO TU SER EN MOVIMIENTO",
    lema: "Entrenar. Jugar. Compartir. Divertirse",
    imagenFondo: "assets/images/funcional_futbol.jpg"
  },

  // Tienda Oficial NEMO
  tienda: [
    {
      id: "camperones",
      nombre: "Camperones Oficiales NEMO",
      categoria: "Indumentaria",
      descripcion: "Camperón térmico oficial con capucha,, logo NEMO en pecho y dorso @nemoentrenamiento Funcional Fútbol. Máxima protección y abrigo.",
      imagen: "assets/images/camperon_nemo.jpg",
      precio: "Consultar",
      destacado: true,
      mensajeWpp: "Hola NEMO, me gustaría consultar precio y talles disponibles del Camperón Oficial NEMO."
    },
    {
      id: "remeras",
      nombre: "Remeras Oficiales NEMO",
      categoria: "Indumentaria",
      descripcion: "Remera deportiva oficial en azul marino y celeste, con logo NEMO en pecho y dorso @nemoentrenamiento Funcional Fútbol. Diseño transpirable y cómodo.",
      imagen: "assets/images/remera_nemo.jpg",
      precio: "Consultar",
      destacado: true,
      mensajeWpp: "Hola NEMO, quiero consultar por la Remera Oficial NEMO (talles y disponibilidad)."
    },
    {
      id: "pelotas-panther",
      nombre: "Pelotas Panther",
      categoria: "Equipamiento",
      descripcion: "Pelota oficial de fútbol Panther. Excelente pique, costuras reforzadas y máxima durabilidad para césped natural y sintético.",
      imagen: "assets/images/pelota_panther.jpg",
      precio: "Consultar",
      destacado: true,
      mensajeWpp: "Hola NEMO, me interesa consultar por la Pelota de Fútbol Panther."
    },
    {
      id: "yorugua",
      nombre: "Juego de Mesa Yorugua",
      categoria: "Juegos & Cultura",
      descripcion: "'El juego de mesa más divertido para aprender sobre fútbol'. Trivia, mímica, dibujo, historia de clubes y cultura uruguaya. Ideal para amigos y familia.",
      imagen: "assets/images/yorugua_display.jpg",
      precio: "Consultar",
      destacado: true,
      mensajeWpp: "Hola NEMO, quiero comprar el Juego de Mesa Yorugua."
    },
    {
      id: "fobal",
      nombre: "Fobal & Accesorios",
      categoria: "Juegos & Deporte",
      descripcion: "Artículos deportivos y propuestas lúdicas oficiales de la comunidad NEMO para llevar el movimiento a todos lados.",
      imagen: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop",
      precio: "Consultar",
      destacado: false,
      mensajeWpp: "Hola NEMO, quería consultar por la línea Fobal y accesorios."
    }
  ],

  // Nuestra Historia (Línea de tiempo 2020 - 2026 actualizada con fotos exactas)
  historia: [
    {
      anio: "2020",
      tag: "Inicio",
      titulo: "El Origen del Movimiento",
      descripcion: "Nace la idea en Punta Ballena como una respuesta a la necesidad de reconectar con el deporte enfocado desde un abordaje saludable, priorizando los vínculos humanos en tiempos de distanciamiento. Comenzamos con clases de Funcional y Funcional Fútbol.",
      imagen: "assets/images/funcional_futbol.jpg"
    },
    {
      anio: "2021",
      tag: "Comunidad",
      titulo: "Deporte como Encuentro",
      descripcion: "Consolidación de los primeros grupos de funcional y funcional fútbol. Comenzamos con clases de Multideporte para niños/as de 3 a 13 años con una mirada educativa y pedagógica.",
      imagen: "assets/images/ninos_educacion_deportiva.jpg"
    },
    {
      anio: "2022",
      tag: "Creatividad",
      titulo: "Creación de juegos y charlas",
      descripcion: "Lanzamiento oficial del juego de mesa Yorugua. Charlas en instituciones educativas (Isef) explicando la metodología de la Educación Deportiva.",
      imagen: "assets/images/yorugua_display.jpg"
    },
    {
      anio: "2023",
      tag: "Consolidación",
      titulo: "Metodología Integral",
      descripcion: "Consolidación de todas las propuestas de Nemo entrenamiento en Punta Ballena.",
      imagen: "assets/images/futbol_campo_2023.jpg"
    },
    {
      anio: "2024",
      tag: "Cambiamos la sede pero no la forma",
      titulo: "Nos fuimos a Punta del Este",
      descripcion: "Nos mudamos al Club Punta del Este con los grupos de funcional fútbol de mañana y de tarde. Nuevos comienzos y un gran agradecimiento a toda la comunidad.",
      imagen: "assets/images/juan_e_ine_2024.jpg"
    },
    {
      anio: "2026",
      tag: "Presente & Futuro",
      titulo: "Comunidad NEMO Hoy",
      descripcion: "Un ecosistema social y deportivo de referencia en Punta Ballena, Maldonado y Punta del Este. Ampliamos la propuesta con grupos de funcional femenino porque en Nemo entendemos que el fútbol no es cuestión de género.",
      imagen: "assets/images/femenino_nuevo.jpg"
    }
  ],

  // 4 Pilares de Filosofía ("Entrenamos personas")
  filosofiaPilares: [
    {
      id: "movimiento",
      titulo: "MOVIMIENTO",
      icono: "activity",
      resumen: "Moverse es descubrir todo lo que nuestro cuerpo puede hacer.",
      detalle: "Exploramos diferentes formas de movernos, desarrollando capacidades, habilidades y confianza. Desde la Cultura del movimiento buscamos que las personas puedan disfrutar del deporte y de la vida cotidiana."
    },
    {
      id: "juego",
      titulo: "JUEGO",
      icono: "target",
      resumen: "Aprender, desafiarse y disfrutar jugando.",
      detalle: "El juego nos invita a explorar, tomar decisiones, encontrar soluciones y compartir con otros. Entrenamos mientras nos divertimos, haciendo de cada experiencia una oportunidad para aprender."
    },
    {
      id: "vinculos",
      titulo: "VÍNCULOS",
      icono: "users",
      resumen: "El deporte como espacio genuino de encuentro.",
      detalle: "NEMO es también comunidad. Compartimos, nos conocemos y construimos vínculos que trascienden el entrenamiento. Porque movernos juntos también es una forma de encontrarnos."
    },
    {
      id: "bienestar",
      titulo: "BIENESTAR",
      icono: "heart",
      resumen: "Sentirse bien dentro y fuera del entrenamiento.",
      detalle: "Buscamos que cada experiencia aporte energía, confianza y bienestar. Entendemos la salud de manera integral, acompañando a cada persona para que el movimiento forme parte de una vida activa y disfrutable."
    }
  ],

  // METODOLOGÍA NEMO
  metodologia: {
    titulo: "METODOLOGÍA NEMO",
    subtitulo: "Entrenar a la persona como un todo",
    descripcion: "Nuestra metodología integra tres dimensiones que están presentes y se relacionan en cada experiencia de entrenamiento:",
    centro: "NEMO / LA PERSONA",
    centroLema: "Todo tu ser en movimiento",
    centroDetalle: "No son bloques aislados, sino un sistema integrado donde cada sesión combina el entrenamiento funcional, el fútbol como juego y encuentro y lo lúdico y el sentido humano de pertenencia.",
    dimensiones: [
      {
        id: "socioafectivo",
        nombre: "SOCIOAFECTIVO",
        lema: "Sentirse parte también es parte de entrenar.",
        descripcion: "Buscamos generar un espacio de confianza, respeto e integración, donde cada persona pueda expresarse, compartir y construir vínculos con los demás.\n\nEl grupo, la comunicación, la cooperación y el sentido de pertenencia son parte fundamental de la experiencia NEMO.",
        tags: ["Conectar", "Compartir", "Pertenecer"],
        color: "#0284c7",
        icono: "heart-handshake"
      },
      {
        id: "juego",
        nombre: "JUEGO",
        lema: "Jugamos para movernos, aprender y disfrutar.",
        descripcion: "El juego entendido como eje central y vincular. La globalidad en las sesiones con partidos y chiveos.\n\nEl fútbol ocupa un lugar especial como juego y como punto de encuentro, integrando múltiples propuestas lúdicas.",
        tags: ["Explorar", "Jugar", "Crear", "Disfrutar"],
        color: "#0ea5e9",
        icono: "target"
      },
      {
        id: "funcional",
        nombre: "FUNCIONAL",
        lema: "Entrenamos para movernos mejor.",
        descripcion: "Basado en aportes de Michael Boyle: buscamos el movimiento a través de los patrones de movimiento (dominantes de cadera/rodilla, empujes, tracciones, desplazamientos, rotaciones y estabilidad).",
        tags: ["Patrones de movimiento", "Fuerza funcional"],
        color: "#38bdf8",
        icono: "zap"
      }
    ]
  },

  // Propuestas de Entrenamiento (Textos exactos)
  entrenamientos: [
    {
      id: "funcional-futbol",
      nombre: "Funcional Fútbol",
      categoria: "Adultos",
      destacado: "Movimiento & Pelota",
      descripcion: "Creemos en el deporte como herramienta para encontrarnos, sentirnos mejor y disfrutar junto a otros/as. El fútbol forma parte de nuestra cultura y puede acercar personas, generaciones y realidades diferentes. Creemos en un deporte integrador para todos/as las personas.",
      items: [
        "Partidos",
        "Circuitos técnicos con pelota.",
        "Juegos de posesión, toma de decisiones y finalizaciones.",
        "Apto para todos los niveles"
      ],
      imagen: "assets/images/funcional_futbol.jpg",
      mensajeWpp: "Hola NEMO, quiero consultar para participar en Funcional Fútbol."
    },
    {
      id: "femenino",
      nombre: "Funcional Fútbol Femenino",
      categoria: "Femenino",
      badge: "El fútbol no es cuestión de género",
      destacado: "Espacio Exclusivo e Integrador",
      descripcion: "Un espacio pensado para entrenar, jugar y compartir entre mujeres. Entrenamiento de fútbol para todas. Se realizan juegos técnicos, tenencias, espacios reducidos, siempre divertidos y dinámicos, finalizando con partidos. relacionados con la mejora de condición física mediante trabajos preventivos y el abordaje de las capacidades físicas.",
      items: [
        "Punto de encuentro y compañerismo",
        "Partidos y diversión",
        "Acondicionamiento físico",
        "Desde principiantes a experimentadas"
      ],
      imagen: "assets/images/femenino_nuevo.jpg",
      mensajeWpp: "Hola NEMO, me gustaría información sobre el grupo de Funcional Fútbol Femenino."
    },
    {
      id: "adolescentes",
      nombre: "Adolescentes (12 a 17 años)",
      categoria: "Jóvenes",
      destacado: "Desarrollo & Pertenencia",
      descripcion: "Entrenamiento de fútbol contextualizado, adaptado a esta etapa clave de crecimiento desde un enfoque pedagógico y cuidado. Pensado desde el juego global y aprender la lógica interna del juego.",
      items: [
        "Mejora de la técnica y táctica",
        "Inteligencia de juego",
        "Potenciación desde las capacidades físicas",
        "Ambiente seguro y estimulante"
      ],
      imagen: "assets/images/adolescentes_grupo.jpg",
      mensajeWpp: "Hola NEMO, quiero consultar por los entrenamientos para Adolescentes."
    },
    {
      id: "ninos",
      nombre: "Educación deportiva (3 a 12 años)",
      categoria: "Niños",
      badge: "Aprender jugando",
      destacado: "Mirada educativa & pedagógica",
      descripcion: "Abordaje de Multideporte desde una mirada de Educación deportiva. El enfoque es pedagógico buscando que los/as niños/as se apropien del deporte entendiendo la lógica interna desde una mirada crítica y reflexiva.´",
      items: [
        "Amor por el deporte",
        "Dimensión del practicante (técnica - táctica - Reglamento)",
        "Dimensión crítica del deporte (género - violencia en el deporte - ganar o perder). Se abordan estas cuestiones para generar un deporte más reflexivo, participativo y de integración."
      ],
      imagen: "assets/images/ninos_educacion_deportiva.jpg",
      mensajeWpp: "Hola NEMO, me interesa consultar por Educación deportiva para Niños (3 a 12 años)."
    },
    {
      id: "tecnificacion",
      nombre: "Personalizados - Tecnificación & Fundamentos",
      categoria: "Específico",
      destacado: "Detalle & Perfeccionamiento",
      descripcion: "Entrenamientos personalizados y específicos para perfeccionar fundamentos técnicos individuales del futbolista y la preparación física.",
      items: [
        "Pase y recepción orientada",
        "Control en espacios reducidos",
        "Conducción y cambios de ritmo",
        "Dribbling y resolución 1 vs 1",
        "Remate y finalización",
        "Evaluación personalizada",
        "Inteligencia táctica"
      ],
      imagen: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=900&auto=format&fit=crop",
      mensajeWpp: "Hola NEMO, quiero consultar sobre los entrenamientos Personalizados de Tecnificación."
    }
  ],

  // Nuestro Equipo: 5 Profesionales organizados en 2 filas
  // Arriba: Inés Irigoyen, Juan Manuel Onandi, Camilo
  // Abajo: Enzo Puoy, Lautaro Remuñan
  equipo: [
    {
      nombre: "Inés Irigoyen",
      rol: "Co-creadora del proyecto",
      titulos: [
        "Licenciada en Comunicaciones"
      ],
      bio: "Comunicación estratégica, identidad institucional y desarrollo comunitario. Impulsa la visión de NEMO como espacio de encuentro, pertenencia e integración humana.",
      imagen: "assets/images/ines_irigoyen.jpg",
      fotoPosicion: "object-center"
    },
    {
      nombre: "Juan Manuel Onandi",
      rol: "Co-Fundador y Coordinador del proyecto",
      titulos: [
        "Licenciado en Educación Física",
        "Entrenador de Fútbol – Licencia PRO",
        "Magíster en Políticas Públicas (fase de tesis)"
      ],
      bio: "Apasionado por el desarrollo humano y la pedagogía deportiva. Concibe el fútbol y la educación física como herramientas de transformación social, encuentro y bienestar.",
      imagen: "assets/images/juan_manuel_onandi_nuevo.jpg",
      fotoPosicion: "object-top"
    },
    {
      nombre: "Camilo",
      rol: "Coordinador del proyecto",
      titulos: [
        "Licenciado en Educación Física",
        "Magíster en Alto Rendimiento: Fuerza y acondicionamiento físico"
      ],
      bio: "Planificación deportiva y dinámicas de grupo. Potencia el rendimiento individual y colectivo a través de metodologías contemporáneas y motivación constante.",
      imagen: "assets/images/camilo_remera_negra.jpg",
      fotoPosicion: "object-top"
    },
    {
      nombre: "Enzo Puoy",
      rol: "Fisioterapeuta",
      titulos: [
        "Licenciado en Fisioterapia",
        "Prevención y readaptación deportiva"
      ],
      bio: "Acompaña a la comunidad NEMO asegurando una práctica segura, prevención de sobrecargas y recuperación personalizada para moverse sin dolor.",
      imagen: "assets/images/enzo_medico.jpg",
      fotoPosicion: "object-center"
    },
    {
      nombre: "Lautaro Remuñan",
      rol: "Profesor de Funcional Fútbol",
      titulos: [
        "Licenciado en Educación Física"
      ],
      bio: "Acompaña a la comunidad NEMO asegurando una práctica segura, donde estimula la mejora de la condición física a través del fútbol y el trabajo de las capacidades físicas. Promueve el disfrute del juego y el compañerismo en cada sesión de entrenamiento.",
      imagen: "assets/images/lautaro_remunan.jpg",
      fotoPosicion: "object-top"
    }
  ],

  // Horarios y Cronograma
  horarios: [
    {
      id: 1,
      actividad: "Funcional Fútbol (Turno Mañana)",
      categoria: "Funcional Fútbol",
      dias: "Martes, Jueves y Viernes",
      hora: "07:00 a 08:00 hs",
      lugar: "Club Punta del Este",
      cupos: "Disponibles",
      mensajeWpp: "Hola NEMO, quería consultar por el grupo de Funcional Fútbol de Martes, Jueves y Viernes 07:00 a 08:00 hs en Club Punta del Este."
    },
    {
      id: 2,
      actividad: "Funcional Fútbol (Turno Tarde)",
      categoria: "Funcional Fútbol",
      dias: "Lunes, Miércoles y Viernes",
      hora: "19:30 a 20:30 hs",
      lugar: "Club Punta del Este",
      cupos: "Disponibles",
      mensajeWpp: "Hola NEMO, quería consultar por el grupo de Funcional Fútbol de Lunes, Miércoles y Viernes 19:30 a 20:30 hs en Club Punta del Este."
    },
    {
      id: 3,
      actividad: "Funcional Fútbol (Turno Noche)",
      categoria: "Funcional Fútbol",
      dias: "Martes, Jueves y Viernes",
      hora: "19:30 a 20:30 hs",
      lugar: "Club Punta del Este",
      cupos: "Últimos lugares",
      mensajeWpp: "Hola NEMO, quería consultar por el grupo de Funcional Fútbol de Martes, Jueves y Viernes 19:30 a 20:30 hs en Club Punta del Este."
    },
    {
      id: 4,
      actividad: "Fútbol Femenino",
      categoria: "Fútbol Femenino",
      dias: "Lunes y Miércoles",
      hora: "19:00 hs",
      lugar: "Club Punta del Este",
      cupos: "Disponibles",
      mensajeWpp: "Hola NEMO, quería consultar por el grupo de Fútbol Femenino de Lunes y Miércoles a las 19:00 hs."
    },
    {
      id: 5,
      actividad: "Adolescentes (12 a 17 años)",
      categoria: "Adolescentes",
      dias: "Enero y Febrero",
      hora: "Horario a confirmar",
      lugar: "Club Punta del Este / Maldonado",
      cupos: "Preinscripción abierta",
      mensajeWpp: "Hola NEMO, quería consultar por los entrenamientos de Adolescentes (Enero y Febrero)."
    },
    {
      id: 6,
      actividad: "Multideporte (Niños 3 a 12 años)",
      categoria: "Multideporte (Niños)",
      dias: "Enero y Febrero",
      hora: "Horario a confirmar",
      lugar: "Club Punta del Este / Maldonado",
      cupos: "Preinscripción abierta",
      mensajeWpp: "Hola NEMO, me interesa consultar por Multideporte para Niños (Enero y Febrero)."
    },
    {
      id: 7,
      actividad: "Personalizado - Tecnificación & Fundamentos",
      categoria: "Personalizado",
      dias: "Días coordinables",
      hora: "Horarios a confirmar",
      lugar: "Canchas & Espacios Deportivos",
      cupos: "Cupos personalizados",
      mensajeWpp: "Hola NEMO, quería consultar por los entrenamientos Personalizados de Tecnificación y Fundamentos."
    }
  ],

  // Galería de fotos (Mosaico Dinámico "NEMO en Movimiento")
  galeria: [
    {
      id: 1,
      titulo: "Grupo Femenino NEMO",
      categoria: "comunidad",
      tamano: "large",
      imagen: "assets/images/femenino_nuevo.jpg",
      descripcion: "El fútbol no es cuestión de género. Comunidad, integración y disfrute."
    },
    {
      id: 2,
      titulo: "Adolescentes en NEMO",
      categoria: "comunidad",
      tamano: "tall",
      imagen: "assets/images/adolescentes_grupo.jpg",
      descripcion: "Entrenar, jugar y compartir momentos juntos."
    },
    {
      id: 3,
      titulo: "Funcional Fútbol en Cancha",
      categoria: "futbol",
      tamano: "wide",
      imagen: "assets/images/futbol_campo_2023.jpg",
      descripcion: "Entrenamientos dinámicos con pelota y preparación física."
    },
    {
      id: 4,
      titulo: "Juego de Mesa Yorugua",
      categoria: "comunidad",
      tamano: "normal",
      imagen: "assets/images/yorugua_display.jpg",
      descripcion: "El juego que nos une: cultura, trivia, mímica y fútbol uruguayo."
    },
    {
      id: 5,
      titulo: "Educación Deportiva Infantil",
      categoria: "entrenamientos",
      tamano: "normal",
      imagen: "assets/images/ninos_educacion_deportiva.jpg",
      descripcion: "Aprender jugando con mirada educativa y pedagógica."
    },
    {
      id: 6,
      titulo: "Camperón Oficial NEMO",
      categoria: "comunidad",
      tamano: "normal",
      imagen: "assets/images/camperon_nemo.jpg",
      descripcion: "Identidad y abrigo para toda la comunidad."
    }
  ],

  // Testimonios
  testimonios: [
    {
      nombre: "Fernanda Campos",
      grupo: "Funcional Fútbol",
      comentario: "Cami, Juanma y Enzo son unos genios, terrible paciencia de enseñar, aguantar y fundamental terrible respeto hacia nosotras, impagable eso gracias gracias: Las chicas son unas genias, el compañerismo y cuidado son fundamental. Que no se termine nunca esto por favor.",
      estrellas: 5
    },
    {
      nombre: "Pablo Arbor",
      grupo: "",
      comentario: "Seriedad en la propuesta, continuidad, creatividad en las clases, organización.",
      estrellas: 5
    },
    {
      nombre: "Lucía Fernández",
      grupo: "Funcional Fútbol Femenino",
      comentario: "En NEMO encontré un grupo increíble donde no hay vergüenza ni presiones. Nunca había jugado al fútbol y hoy no me pierdo un entrenamiento. El ambiente es pura buena onda.",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
      estrellas: 5
    },
    {
      nombre: "Martín Rodríguez",
      grupo: "Funcional Fútbol Adultos",
      comentario: "Odiaba los gimnasios tradicionales con máquinas encerradas. NEMO me devolvió las ganas de entrenar: al aire libre, con pelota, con gente de primera y profesores que realmente saben.",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
      estrellas: 5
    },
    {
      nombre: "Mariana & Gonzalo",
      grupo: "Padres del Grupo Niños",
      comentario: "Nuestros hijos esperan toda la semana para ir a NEMO. Los profes tienen una vocación y una calidez que transmiten valores más allá del deporte. Es hermoso ver cómo aprenden disfrutando.",
      foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
      estrellas: 5
    },
    {
      nombre: "Federico Silva",
      grupo: "Tecnificación & Funcional",
      comentario: "La visión de Juanma, Camilo y Enzo es impecable. El nivel de detalle en cada ejercicio y el sentido humano es algo único en Maldonado y Punta del Este.",
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
      estrellas: 5
    }
  ]
};
