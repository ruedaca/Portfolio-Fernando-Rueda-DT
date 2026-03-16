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
    'hero.tagline':     'Construyo equipos que entienden el juego, dominan el partido y compiten con una identidad clara.',
    'hero.cta1':        'Trabajar Juntos',
    'hero.cta2':        'Ver Trayectoria',

    // About
    'about.eyebrow':    'Perfil',
    'about.h2':         'Una carrera construida\nsobre convicciones',
    'about.bio1':       'Soy un entrenador con <span class="hl">más de una década de experiencia</span> en el fútbol, habiendo trabajado en distintos contextos competitivos del fútbol profesional <span class="hl">argentino y español</span>. Mi trayectoria se ha construido sobre una visión clara del juego: equipos organizados, competitivos y con una <span class="hl">identidad reconocible</span>.',
    'about.bio2':       'Formado con <span class="hl">Licencia UEFA A y Conmebol A</span>, he desarrollado un modelo de trabajo basado en el <span class="hl">juego de posición</span>, la presión tras pérdida y el dominio del balón, con el objetivo de que mis equipos sean protagonistas, capaces de <span class="hl">controlar el ritmo del partido</span> y competir en cualquier escenario.',
    'about.bio3':       'Mi metodología integra herramientas de alto rendimiento como el <span class="hl">análisis de datos</span>, el desarrollo técnico-táctico individual, la <span class="hl">psicología aplicada</span> al rendimiento y la gestión del vestuario. Concibo cada proyecto como una oportunidad para construir algo más que resultados: equipos con <span class="hl">mentalidad competitiva</span> y una estructura sólida y sostenible en el tiempo.',
    'about.bio4':       '<span class="hl">Mi filosofía se resume en una convicción fundamental:</span> el fútbol es un juego colectivo donde la <span class="hl">inteligencia</span>, la <span class="hl">organización</span> y la <span class="hl">identidad</span> del equipo potencian el talento individual.',
    'about.value1':     'Visión Táctica',
    'about.value2':     'Liderazgo',
    'about.value3':     'Identidad de Juego',

    // Career
    'career.eyebrow':   'Trayectoria',
    'career.h2':        'Mi proceso como entrenador\nen constante evolución',
    'career.role1':     'Entrenador',
    'career.role2':     'Analista de Rendimiento',
    'career.role3':     'Analista Externo',
    'career.role4':     'Entrenador',
    'career.role5':     'Entrenador',
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
    'philosophy.s1title': 'Principios fundamentales',
    'philosophy.s2title': 'Idea de juego',
    'philosophy.s2p1':    'Cuando disponemos del balón buscamos <strong class="hl">una construcción clara y organizada desde la base</strong>, progresando de manera estructurada para ocupar bien los espacios, avanzar hacia campo rival y <strong class="hl">acelerar el juego en los momentos adecuados</strong>.',
    'philosophy.s2p2':    'Nuestro objetivo es controlar el partido a través de la <strong class="hl">posesión del balón</strong>, <strong class="hl">la interpretación del juego y la correcta ocupación de los espacios</strong>, generando ventajas que nos permitan atacar con profundidad y verticalidad.',
    'philosophy.s2p3':    'Tras la pérdida del balón, el equipo reacciona <strong class="hl">de forma inmediata y coordinada</strong>, presionando de manera agresiva para recuperar la posesión lo antes posible y mantener al rival lejos de nuestra portería.',
    'philosophy.s3title': 'Metodología de Entrenamiento',
    'philo.p1':           'Pasión y compromiso',
    'philo.p2':           'Mentalidad ganadora',
    'philo.p3':           'Excelencia táctica',
    'philo.p4':           'Optimización del desarrollo individual',
    'philo.p5':           'Análisis y mejora continua',
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
    'hero.eyebrow':     'Football Coach',
    'hero.firstName':   'Fernando',
    'hero.lastName':    'Rueda García',
    'hero.tagline':     'I build teams that understand the game, dominate the match and compete with a clear identity.',
    'hero.cta1':        'Work Together',
    'hero.cta2':        'View Career',

    // About
    'about.eyebrow':    'Profile',
    'about.h2':         'A career built\non convictions',
    'about.bio1':       'I am a coach with <span class="hl">over a decade of experience</span> in football, having worked in different competitive contexts within professional football in <span class="hl">Argentina and Spain</span>. My career has been built on a clear vision of the game: organised, competitive teams with a <span class="hl">recognisable identity</span>.',
    'about.bio2':       'Qualified with a <span class="hl">UEFA A Licence and Conmebol A</span>, I have developed a working model based on <span class="hl">positional play</span>, pressing after loss and ball dominance, with the aim of making my teams protagonists — capable of <span class="hl">controlling the rhythm of the match</span> and competing in any scenario.',
    'about.bio3':       'My methodology integrates high-performance tools such as <span class="hl">data analysis</span>, individual technical-tactical development, <span class="hl">applied psychology</span> and dressing room management. I see each project as an opportunity to build something more than results: teams with <span class="hl">competitive mentality</span> and a solid, sustainable structure over time.',
    'about.bio4':       '<span class="hl">My philosophy can be summed up in one fundamental conviction:</span> football is a collective game where <span class="hl">intelligence</span>, <span class="hl">organisation</span> and <span class="hl">identity</span> amplify individual talent.',
    'about.value1':     'Tactical Vision',
    'about.value2':     'Leadership',
    'about.value3':     'Playing Identity',

    // Career
    'career.eyebrow':   'Career',
    'career.h2':        'My journey as a coach\nin constant evolution',
    'career.role1':     'Assistant Coach',
    'career.role2':     'Performance Analyst',
    'career.role3':     'External Analyst',
    'career.role4':     'Coach',
    'career.role5':     'Coach',
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
    'philosophy.s1title': 'Core Principles',
    'philosophy.s2title': 'Game Idea',
    'philosophy.s2p1':    'When we have the ball, we seek <strong class="hl">a clear and organised build-up from the back</strong>, progressing in a structured way to occupy spaces well, advance into the opposition half and <strong class="hl">accelerate play at the right moments</strong>.',
    'philosophy.s2p2':    'Our goal is to control the match through <strong class="hl">ball possession</strong>, <strong class="hl">reading of the game and correct occupation of space</strong>, creating advantages that allow us to attack with depth and verticality.',
    'philosophy.s2p3':    'After losing the ball, the team reacts <strong class="hl">immediately and in a coordinated manner</strong>, pressing aggressively to recover possession as quickly as possible and keep the opponent away from our goal.',
    'philosophy.s3title': 'Training Methodology',
    'philo.p1':           'Passion and commitment',
    'philo.p2':           'Winning mentality',
    'philo.p3':           'Tactical excellence',
    'philo.p4':           'Optimisation of individual development',
    'philo.p5':           'Analysis and continuous improvement',
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
      if (el.dataset.i18nHtml !== undefined) {
        el.innerHTML = t[key];
      } else if (el.children.length === 0) {
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
