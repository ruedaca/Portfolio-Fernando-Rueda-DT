/* ══════════════════════════════════════════════════════════════
   i18n · Bilingual ES / EN language switcher
   ══════════════════════════════════════════════════════════════ */

const translations = {
  es: {
    // Nav
    'nav.about':        'Perfil',
    'nav.career':       'Trayectoria',
    'nav.philosophy':   'Filosofía',
    'nav.achievements': 'Logros',
    'nav.gallery':      'Galería',
    'nav.media':        'Prensa',
    'nav.contact':      'Contacto',

    // Hero
    'hero.eyebrow':     'Director Técnico · Licencia UEFA Pro',
    'hero.firstName':   'Fernando',
    'hero.lastName':    'Rueda García',
    'hero.tagline':     '"El fútbol se gana con orden, talento e identidad"',
    'hero.cta1':        'Trabajar Juntos',
    'hero.cta2':        'Ver Trayectoria',

    // About
    'about.eyebrow':    'Perfil',
    'about.h2':         'Una carrera construida\nsobre convicciones',
    'about.bio1':       'Fernando Rueda es un director técnico con más de diez años de experiencia en el fútbol profesional, habiendo dirigido clubes en distintas categorías del fútbol español e internacional. Su modelo de juego combina presión alta, dominio del balón y una identidad colectiva fuerte.',
    'about.bio2':       'Formado con Licencia UEFA Pro, Rueda ha desarrollado una metodología propia que integra el análisis de datos, la psicología del rendimiento y la gestión del vestuario como pilares de su trabajo diario. Cada proyecto es una oportunidad para dejar huella táctica y humana.',
    'about.bio3':       'Su filosofía parte de una premisa clara: el colectivo supera al individuo, y la identidad del equipo es el activo más valioso que un entrenador puede construir.',
    'about.value1':     'Visión Táctica',
    'about.value2':     'Liderazgo',
    'about.value3':     'Identidad de Juego',

    // Career
    'career.eyebrow':   'Trayectoria',
    'career.h2':        'Una carrera\nen el más alto nivel',
    'career.role1':     'Entrenador Principal',
    'career.role2':     'Director Técnico',
    'career.role3':     'Director Técnico',
    'career.role4':     'Director Técnico',
    'career.div2':      '2ª División',
    'career.div1':      '1ª División',
    'career.liga':      'Liga Profesional',
    'career.present':   'Presente',
    'career.ach1':      '★ Ascenso histórico a Segunda División · Temporada 2019–20',
    'career.ach2':      '★ Temporada histórica · Clasificación top 6 · Copa: Cuartos de Final',
    'career.ach3':      '★ Semifinalista Copa Nacional · 3º en Liga Profesional 2022–23',
    'career.ach4':      '★ Proyecto actual en marcha · Liderazgo de temporada',
    'stats.wins':       'Victorias',
    'stats.matches':    'Partidos',
    'stats.titles':     'Títulos',
    'stats.position':   'Posición Final',

    // Philosophy
    'philosophy.eyebrow': 'Filosofía',
    'philosophy.h2':      'Cómo entiendo\nel fútbol',
    'philosophy.s1title': 'Estilo de Juego',
    'philosophy.s1text':  'Fútbol vertical de alta presión. Construcción desde atrás con transiciones rápidas al ataque. El equipo presiona como unidad, defiende compacto y ataca con libertad posicional. La identidad no es negociable: se trabaja desde el primer día hasta el último.',
    'philosophy.s2title': 'Gestión del Vestuario',
    'philosophy.s3title': 'Metodología de Entrenamiento',
    'philo.t1':           'Alta Presión',
    'philo.t2':           'Juego Directo',
    'philo.t3':           'Construcción Desde Atrás',
    'philo.t4':           'Transiciones Rápidas',
    'philo.t5':           'Identidad Colectiva',
    'philo.p1':           'Honestidad antes que comodidad',
    'philo.p2':           'El colectivo siempre por encima del individuo',
    'philo.p3':           'La confianza se gana, no se hereda',
    'philo.p4':           'Disciplina táctica con libertad creativa',
    'philo.p5':           'Análisis permanente, mejora constante',
    'method.m1title':     'Análisis de Datos',
    'method.m1text':      'Uso de estadísticas avanzadas y métricas de rendimiento para la toma de decisiones táctica y gestión del equipo.',
    'method.m2title':     'Vídeo Táctica',
    'method.m2text':      'Sesiones de vídeo individuales y colectivas para análisis propio y del rival. Herramienta central del proceso de mejora.',
    'method.m3title':     'Trabajo en Bloque',
    'method.m3text':      'Entrenamientos diseñados en torno al concepto colectivo. La repetición de automatismos es la base de la consistencia.',
    'method.m4title':     'Desarrollo Individual',
    'method.m4text':      'Planes personalizados de mejora para cada jugador. El crecimiento individual está siempre al servicio del colectivo.',

    // Achievements
    'ach.eyebrow':   'Logros',
    'ach.h2':        'Resultados que\nhablan por sí solos',
    'ach.a1title':   'Títulos como Director Técnico',
    'ach.a1text':    'Incluyendo liga regional, copa provincial y supercopa. Logrados con diferentes clubes entre 2019 y 2024.',
    'ach.a2title':   'Ascenso de Categoría',
    'ach.a2text':    'Ascenso histórico a Segunda División con Club A en la temporada 2019–20, en un proyecto construido desde cero.',
    'ach.a3title':   'Semifinalista Copa Nacional',
    'ach.a3text':    'Con Equipo C en 2023, eliminando a equipos de categoría superior y alcanzando las semifinales de la Copa Nacional.',
    'ach.a4title':   'Licencia UEFA Pro',
    'ach.a4text':    'Máxima titulación europea para entrenadores. Formación continua en táctica avanzada, liderazgo y gestión deportiva.',
    'ach.a5title':   'Porcentaje de Victorias',
    'ach.a5text':    'Estadística acumulada a lo largo de toda su carrera como entrenador principal y director técnico profesional.',
    'ach.a6title':   '+42 Jugadores Formados',
    'ach.a6text':    'Futbolistas que han dado el salto a categorías superiores o a selecciones nacionales bajo su dirección técnica.',
    'ach.uefa':      'UEFA Pro',
    'ach.career':    'Carrera Total',
    'ach.development': 'Desarrollo',
    'ticker.wins':     'VICTORIAS',
    'ticker.titles':   'TÍTULOS',
    'ticker.players':  'JUGADORES FORMADOS',
    'ticker.clubs':    'CLUBES DIRIGIDOS',
    'ticker.matches':  'PARTIDOS',
    'ticker.promotion':'ASCENSO',

    // Staff
    'staff.eyebrow': 'Cuerpo Técnico',
    'staff.h2':      'El equipo\ndetrás del equipo',
    'staff.intro':   'Un cuerpo técnico de primer nivel es tan importante como los jugadores. Cada miembro aporta una especialización que refuerza el proyecto colectivo.',
    'staff.r1':      'Asistente Técnico',
    'staff.r2':      'Preparador Físico',
    'staff.r3':      'Analista de Vídeo',
    'staff.r4':      'Prep. de Porteros',
    'staff.r5':      'Fisioterapeuta',
    'staff.r6':      'Psicólogo Deportivo',
    'staff.s1':      'Táctica',
    'staff.s2':      'Rendimiento',
    'staff.s3':      'Análisis',
    'staff.s4':      'Portería',
    'staff.s5':      'Medicina',
    'staff.s6':      'Psicología',

    // Media
    'media.eyebrow':   'Prensa & Media',
    'media.h2':        'En los medios',
    'media.tabVideos': 'Vídeos',
    'media.tabPress':  'Prensa',
    'media.v1title':   'La filosofía de juego de Fernando Rueda',
    'media.v2title':   'Análisis táctico: presión alta y transiciones',
    'media.v3title':   'Gestión del vestuario en el fútbol moderno',
    'media.a1date':    'Mar 2024',
    'media.a1title':   'El técnico que transforma clubes desde adentro',
    'media.a1text':    'Un perfil en profundidad sobre la metodología única de Fernando Rueda y cómo ha cambiado la cultura de tres clubes.',
    'media.a2date':    'Ene 2024',
    'media.a2title':   'Perfil táctico: el modelo de juego de Fernando Rueda',
    'media.a2text':    'Análisis detallado de los sistemas tácticos preferidos por el técnico y la evolución de su propuesta de juego.',
    'media.a3date':    'Oct 2023',
    'media.a3title':   'Semifinalistas: cómo Rueda llevó al Equipo C al límite',
    'media.a3text':    'Crónica de la excepcional temporada 2022-23 que llevó al Equipo C hasta las semifinales de la Copa Nacional.',
    'media.readMore':  'Leer artículo →',

    // Contact
    'contact.eyebrow':   'Contacto',
    'contact.h2':        '¿Hablamos?',
    'contact.intro':     'Disponible para proyectos como Director Técnico, consultoría futbolística y colaboraciones con clubes, selecciones o medios especializados.',
    'contact.location':  'Disponible para proyectos nacionales e internacionales',
    'contact.available': 'Disponible para nuevos proyectos',
    'form.name':         'Nombre completo',
    'form.org':          'Organización / Club',
    'form.purpose':      'Motivo de contacto',
    'form.select':       'Selecciona una opción',
    'form.opt1':         'Oferta de Club',
    'form.opt2':         'Prensa / Medios',
    'form.opt3':         'Patrocinio',
    'form.opt4':         'Consultoría',
    'form.opt5':         'Otro',
    'form.email':        'Email',
    'form.message':      'Mensaje',
    'form.submit':       'Enviar Mensaje',
    'footer.rights':     'Todos los derechos reservados.',
  },

  en: {
    // Nav
    'nav.about':        'Profile',
    'nav.career':       'Career',
    'nav.philosophy':   'Philosophy',
    'nav.achievements': 'Achievements',
    'nav.gallery':      'Gallery',
    'nav.media':        'Media',
    'nav.contact':      'Contact',

    // Hero
    'hero.eyebrow':     'Technical Director · UEFA Pro Licence',
    'hero.firstName':   'Fernando',
    'hero.lastName':    'Rueda García',
    'hero.tagline':     '"Football is won with structure, talent and identity"',
    'hero.cta1':        'Work Together',
    'hero.cta2':        'View Career',

    // About
    'about.eyebrow':    'Profile',
    'about.h2':         'A career built\non convictions',
    'about.bio1':       'Fernando Rueda is a technical director with over ten years of experience in professional football, having managed clubs across various divisions in Spain and internationally. His playing model combines high pressing, ball possession and a strong collective identity.',
    'about.bio2':       'Qualified with a UEFA Pro Licence, Rueda has developed a unique methodology that integrates data analysis, performance psychology and dressing room management as the pillars of his daily work. Every project is an opportunity to leave a tactical and human mark.',
    'about.bio3':       'His philosophy starts from a clear premise: the collective surpasses the individual, and team identity is the most valuable asset a manager can build.',
    'about.value1':     'Tactical Vision',
    'about.value2':     'Leadership',
    'about.value3':     'Playing Identity',

    // Career
    'career.eyebrow':   'Career',
    'career.h2':        'A career\nat the highest level',
    'career.role1':     'Head Coach',
    'career.role2':     'Technical Director',
    'career.role3':     'Technical Director',
    'career.role4':     'Technical Director',
    'career.div2':      '2nd Division',
    'career.div1':      '1st Division',
    'career.liga':      'Professional League',
    'career.present':   'Present',
    'career.ach1':      '★ Historic promotion to Second Division · Season 2019–20',
    'career.ach2':      '★ Historic season · Top 6 finish · Cup: Quarter-Finals',
    'career.ach3':      '★ National Cup Semi-Finals · 3rd in Professional League 2022–23',
    'career.ach4':      '★ Current project ongoing · Leading the table',
    'stats.wins':       'Wins',
    'stats.matches':    'Matches',
    'stats.titles':     'Titles',
    'stats.position':   'Final Position',

    // Philosophy
    'philosophy.eyebrow': 'Philosophy',
    'philosophy.h2':      'How I understand\nfootball',
    'philosophy.s1title': 'Playing Style',
    'philosophy.s1text':  'Vertical, high-intensity pressing football. Building from the back with fast transitions into attack. The team presses as a unit, defends compactly and attacks with positional freedom. Identity is non-negotiable: it is built from day one.',
    'philosophy.s2title': 'Dressing Room Management',
    'philosophy.s3title': 'Training Methodology',
    'philo.t1':           'High Press',
    'philo.t2':           'Direct Play',
    'philo.t3':           'Build From Back',
    'philo.t4':           'Fast Transitions',
    'philo.t5':           'Collective Identity',
    'philo.p1':           'Honesty before comfort',
    'philo.p2':           'The collective always above the individual',
    'philo.p3':           'Trust is earned, not inherited',
    'philo.p4':           'Tactical discipline with creative freedom',
    'philo.p5':           'Continuous analysis, constant improvement',
    'method.m1title':     'Data Analysis',
    'method.m1text':      'Using advanced statistics and performance metrics to inform tactical decisions and team management.',
    'method.m2title':     'Video Analysis',
    'method.m2text':      'Individual and collective video sessions for self-analysis and opponent scouting. A central tool in the improvement process.',
    'method.m3title':     'Collective Training',
    'method.m3text':      'Sessions designed around collective concepts. Repeating automated patterns is the foundation of consistency.',
    'method.m4title':     'Individual Development',
    'method.m4text':      'Personalised improvement plans for each player. Individual growth is always in service of the collective.',

    // Achievements
    'ach.eyebrow':   'Achievements',
    'ach.h2':        'Results that\nspeak for themselves',
    'ach.a1title':   'Titles as Technical Director',
    'ach.a1text':    'Including regional league, provincial cup and supercup. Achieved with different clubs between 2019 and 2024.',
    'ach.a2title':   'Promotion',
    'ach.a2text':    'Historic promotion to Second Division with Club A in the 2019–20 season, in a project built from scratch.',
    'ach.a3title':   'National Cup Semi-Finalist',
    'ach.a3text':    'With Team C in 2023, eliminating higher-division sides and reaching the National Cup semi-finals.',
    'ach.a4title':   'UEFA Pro Licence',
    'ach.a4text':    'The highest European coaching qualification. Ongoing training in advanced tactics, leadership and sports management.',
    'ach.a5title':   'Win Percentage',
    'ach.a5text':    'Cumulative statistic across his entire career as head coach and technical director at professional level.',
    'ach.a6title':   '+42 Players Developed',
    'ach.a6text':    'Footballers who progressed to higher divisions or national teams under his technical direction.',
    'ach.uefa':      'UEFA Pro',
    'ach.career':    'Full Career',
    'ach.development': 'Development',
    'ticker.wins':     'WIN RATE',
    'ticker.titles':   'TITLES',
    'ticker.players':  'PLAYERS DEVELOPED',
    'ticker.clubs':    'CLUBS MANAGED',
    'ticker.matches':  'MATCHES',
    'ticker.promotion':'PROMOTION',

    // Staff
    'staff.eyebrow': 'Technical Staff',
    'staff.h2':      'The team\nbehind the team',
    'staff.intro':   'A top-level coaching staff is as important as the players. Every member brings a specialisation that strengthens the collective project.',
    'staff.r1':      'Assistant Coach',
    'staff.r2':      'Fitness Coach',
    'staff.r3':      'Video Analyst',
    'staff.r4':      'Goalkeeping Coach',
    'staff.r5':      'Physiotherapist',
    'staff.r6':      'Sports Psychologist',
    'staff.s1':      'Tactics',
    'staff.s2':      'Performance',
    'staff.s3':      'Analysis',
    'staff.s4':      'Goalkeeping',
    'staff.s5':      'Medicine',
    'staff.s6':      'Psychology',

    // Media
    'media.eyebrow':   'Press & Media',
    'media.h2':        'In the media',
    'media.tabVideos': 'Videos',
    'media.tabPress':  'Press',
    'media.v1title':   'Fernando Rueda\'s football philosophy',
    'media.v2title':   'Tactical analysis: high press and transitions',
    'media.v3title':   'Dressing room management in modern football',
    'media.a1date':    'Mar 2024',
    'media.a1title':   'The coach who transforms clubs from within',
    'media.a1text':    'An in-depth profile on Fernando Rueda\'s unique methodology and how he has changed the culture of three clubs.',
    'media.a2date':    'Jan 2024',
    'media.a2title':   'Tactical profile: Fernando Rueda\'s playing model',
    'media.a2text':    'Detailed analysis of the coach\'s preferred tactical systems and the evolution of his playing philosophy.',
    'media.a3date':    'Oct 2023',
    'media.a3title':   'Semi-finalists: how Rueda took Team C to the brink',
    'media.a3text':    'A chronicle of the exceptional 2022-23 season that took Team C to the National Cup semi-finals.',
    'media.readMore':  'Read article →',

    // Contact
    'contact.eyebrow':   'Contact',
    'contact.h2':        'Let\'s talk?',
    'contact.intro':     'Available for projects as Technical Director, football consultancy and collaborations with clubs, national teams or specialist media.',
    'contact.location':  'Available for national and international projects',
    'contact.available': 'Available for new projects',
    'form.name':         'Full name',
    'form.org':          'Organisation / Club',
    'form.purpose':      'Reason for contact',
    'form.select':       'Select an option',
    'form.opt1':         'Club Offer',
    'form.opt2':         'Press / Media',
    'form.opt3':         'Sponsorship',
    'form.opt4':         'Consulting',
    'form.opt5':         'Other',
    'form.email':        'Email',
    'form.message':      'Message',
    'form.submit':       'Send Message',
    'footer.rights':     'All rights reserved.',
  }
};

let currentLang = localStorage.getItem('lang') || 'es';

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      // If element contains child elements (like spans), update only text nodes
      if (el.children.length === 0) {
        el.textContent = t[key];
      }
      // Special case: handle h2 with <br> — rebuild from text with \n
      if (el.tagName === 'H2' && t[key].includes('\n')) {
        const parts = t[key].split('\n');
        el.innerHTML = parts.join('<br>');
      }
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;

  // Update lang button display
  const btn = document.getElementById('lang-btn');
  if (btn) {
    btn.querySelector('.lang-btn__current').textContent = lang.toUpperCase();
    btn.querySelector('.lang-btn__other').textContent = lang === 'es' ? 'EN' : 'ES';
    btn.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a Español');
  }

  // Persist
  localStorage.setItem('lang', lang);
  currentLang = lang;
}

export function initI18n() {
  // Apply saved language on load
  applyTranslations(currentLang);

  // Toggle on button click
  const btn = document.getElementById('lang-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      const next = currentLang === 'es' ? 'en' : 'es';
      applyTranslations(next);
    });
  }
}
