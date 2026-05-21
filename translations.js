/* ══════════════════════════════════════════
   Los! – translations.js
   All UI strings and scene text in EN, NO, ES, DE, FR
══════════════════════════════════════════ */

const LANGUAGES = {
  en: { label: 'EN', lang: 'en' },
  no: { label: 'NO', lang: 'no' },
  es: { label: 'ES', lang: 'es' },
  de: { label: 'DE', lang: 'de' },
  fr: { label: 'FR', lang: 'fr' }
};

const t = {

  /* ── UI STRINGS ── */
  ui: {
    en: {
      tagline:        'Walking tours \u00b7 Oslo',
      navHome:        '\u2302\u00a0\u00a0Home',
      navAbout:       'i\u00a0\u00a0About',
      navPrivacy:     '\u2696\u00a0\u00a0Privacy Policy',
      eyebrow:        'Self-guided walking tours',
      headline:       'Free Self-Guided Walking Tours in Oslo',
      frontIntro:     'Welcome to Los!, your guide to the people and places of Oslo. Los! takes you through the streets of the city. At different locations, you will be given riddles and clues. Your job is to find the answer.',
      tipsLabel:      'Tips & Tricks',
      toursLabel:     'Walking Tours',
      tip1:           'The locations where you will find the answers are shown in <strong>bold</strong>. If you are not familiar with the city, type these places into your preferred maps app.',
      tip2:           'The length of each tour is shown, but the time may vary depending on how fast you walk and whether you stop along the way. We have included some recommendations for caf\u00e9s and other places you might enjoy.',
      tip3:           'At the end of the tour, we will tell you how long it took. If you are in a group, why not make it a competition?',
      tip4:           '\u26a0\ufe0f Translations are made from English by a machine. Some errors may occur. If something seems wrong, please let us know!',
      soon:           'Soon',
      startTour:      'Start Tour',
      answer:         'Answer',
      hint:           '\ud83d\udca1 Hint',
      answerPlaceholder: 'Type your answer here\u2026',
      wrongAnswer:    'Not quite \u2014 try again, or tap Hint for a clue.',
      finishTour:     'Finish Tour \u2192',
      yourTime:       'Your time',
      leaveFeedback:  'Leave feedback \u2192',
      backHome:       'Back to home',
      tourComplete:   'Tour complete!',
      tour1Title:     'Oslo’s Greatest Hits',
      tour1Desc:      'Walk Karl Johans gate from the railway station to the Royal Palace, solving tasks and getting to know the people and places along the city’s most famous street. About 2–3 km, roughly one hour.',
      tour2Title:     'Oslo and Norway’s Becoming',
      tour2Desc:      'This tour starts at the bottom of Karl Johan and takes you through the history of how Oslo and Norway became what they are today — through conflict, culture and independence. About 4–5 km, roughly one hour.',
      tour3Title:     'Akerselva & Oslo’s Industrial Past',
      tour3Desc:      'The tour starts in Nydalen — take the T-bane and find the nearest river: Akerselva! Walk towards the city centre, solving tasks and discovering Oslo’s industrial history. About 5 km, roughly 1.5 hours.',
      tour4Title:     '',
      tour4Desc:      '',
      aboutEyebrow:   'The project',
      aboutTitle:     'About Los!',
      aboutP1:        '<em>Los</em> is a Norwegian word for a maritime pilot \u2014 a person who helps ships navigate safely through local waters. In the Oslofjord, you may see los-boats guiding large cruise ships safely into the docks.',
      aboutP2:        'Los! is a <strong>free</strong>, self-guided walking tour app for Oslo. The idea is simple: show up, follow the clues, and discover the city\u2019s history, people and places at your own pace \u2014 no guide needed, no booking required.',
      aboutP3:        'Each tour takes you through <strong>real streets and public spaces</strong>. Along the way, you will stop at statues, buildings and landmarks that each have a story to tell \u2014 places like Nationaltheatret, the Royal Palace, Akershus Fortress, Gamle Logen and the Oslo Opera House. The answers are always somewhere nearby \u2014 look around, read your surroundings and enjoy the walk.',
      aboutP4:        'Los! is currently in a <strong>pilot stage</strong>. The first tours are live and more are being developed. The app is <strong>free to use</strong>, but donations are very welcome.',
      aboutP5:        'Los! is developed by <strong>Gard Ringen H\u00f8ibjerg</strong>. The team is motivated by the idea of helping visitors discover the more interesting corners of the city. If you have feedback, spot an error, or would like to get in touch, please use our <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">feedback form</a>.',
      finishBody:       'Congratulations — you have finished the tour! This is where your real adventure in Oslo begins. From here, you can easily make your way to wherever you wish.\n\nWe hope you enjoyed the tour. If you have any feedback, we would love to hear from you — it helps us improve and create new tours.',
      finishCoffeeBtn:  '☕ Buy me a coffee',
      finishDonateText: 'If you enjoyed the tour, you are welcome to support Los! with a small donation — it helps keep the tours free and fund new ones.',
    },
    no: {
      navHome:        '\u2302\u00a0\u00a0Hjem',
      navAbout:       'i\u00a0\u00a0Om oss',
      navPrivacy:     '\u2696\u00a0\u00a0Personvern',
      eyebrow:        'Selvguidede byvandringer',
      headline:       'Gratis selvguidede byvandringer i Oslo',
      frontIntro:     'Velkommen til Los!, din guide til Oslos mennesker og steder. Los! tar deg gjennom byens gater. P\u00e5 forskjellige steder vil du f\u00e5 g\u00e5ter og ledetr\u00e5der. Din oppgave er \u00e5 finne svaret.',
      tipsLabel:      'Tips og triks',
      toursLabel:     'Byvandringer',
      tip1:           'Stedene der du finner svarene er vist med <strong>fet skrift</strong>. Hvis du ikke kjenner byen, skriv inn stedene i din foretrukne kart-app.',
      tip2:           'Varigheten p\u00e5 turene er veiledende og kan variere avhengig av gangfart og eventuelle stopp. Vi har inkludert noen anbefalinger for kafeer og andre steder du kanskje liker.',
      tip3:           'P\u00e5 slutten av turen viser vi deg hvor lang tid du brukte. Er dere en gruppe, kan dere gj\u00f8re det til en konkurranse!',
      tip4:           '\u26a0\ufe0f Oversettelser er laget fra engelsk ved hjelp av maskin. Det kan forekomme feil. Si fra hvis noe virker rart!',
      soon:           'Snart',
      startTour:      'Start tur',
      answer:         'Svar',
      hint:           '\ud83d\udca1 Hint',
      answerPlaceholder: 'Skriv svaret ditt her\u2026',
      wrongAnswer:    'Ikke helt riktig \u2014 pr\u00f8v igjen, eller trykk Hint for et tips.',
      finishTour:     'Fullf\u00f8r tur \u2192',
      yourTime:       'Din tid',
      leaveFeedback:  'Gi tilbakemelding \u2192',
      backHome:       'Tilbake til start',
      tourComplete:   'Tur fullf\u00f8rt!',
      tour1Title:     'Oslos store høydepunkter',
      tour1Desc:      'Gå Karl Johans gate fra jernbanestasjonen til Slottet, løs oppgaver og bli kjent med menneskene og stedene langs byens mest berømte gate. Ca. 2–3 km, omtrent én time.',
      tour2Title:     'Oslo og Norges tilblivelse',
      tour2Desc:      'Denne turen starter nederst på Karl Johan og tar deg gjennom historien om hvordan Oslo og Norge ble det de er i dag. Ca. 4–5 km, omtrent én time.',
      tour3Title:     'Akerselva og Oslos industrifortid',
      tour3Desc:      'Turen starter i Nydalen — ta T-banen og finn nærmeste elv: Akerselva! Gå mot sentrum og løs oppgaver mens du oppdager Oslos industrihistorie. Ca. 5 km, omtrent 1,5 timer.',
      tour4Title:     '',
      tour4Desc:      '',
      aboutEyebrow:   'Prosjektet',
      aboutTitle:     'Om Los!',
      aboutP1:        '<em>Los</em> er et norsk ord for en los \u2014 en person som hjelper skip \u00e5 navigere trygt gjennom lokale farvann. I Oslofjorden kan du se los-b\u00e5ter som guider store cruiseskip trygt inn til kai.',
      aboutP2:        'Los! er en <strong>gratis</strong> selvguidet byvandring for Oslo. Id\u00e9en er enkel: m\u00f8t opp, f\u00f8lg ledetr\u00e5dene og oppdag byens historie, mennesker og steder i ditt eget tempo \u2014 ingen guide n\u00f8dvendig, ingen bestilling.',
      aboutP3:        'Hver tur tar deg gjennom <strong>ekte gater og offentlige rom</strong>. Underveis stopper du ved statuer, bygninger og landemerker som alle har en historie \u00e5 fortelle \u2014 steder som Nationaltheatret, Slottet, Akershus festning, Gamle Logen og Operahuset. Svarene er alltid i n\u00e6rheten \u2014 se deg rundt og nyt turen.',
      aboutP4:        'Los! er for \u00f8yeblikket i en <strong>pilotfase</strong>. De f\u00f8rste turene er live og flere er under utvikling. Appen er <strong>gratis \u00e5 bruke</strong>, men donasjoner mottas med stor takk.',
      aboutP5:        'Los! er utviklet av <strong>Gard Ringen H\u00f8ibjerg</strong>. Teamet er motivert av tanken p\u00e5 \u00e5 hjelpe bes\u00f8kende med \u00e5 oppdage de mer interessante hj\u00f8rnene av byen. Har du tilbakemeldinger, finner du feil, eller \u00f8nsker \u00e5 ta kontakt, bruk gjerne v\u00e5rt <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">tilbakemeldingsskjema</a>.',
      finishBody:       'Gratulerer — du har fullført turen! Her begynner ditt virkelige eventyr i Oslo. Herfra kan du enkelt gå dit du vil.\n\nVi håper du likte turen. Har du tilbakemeldinger, hører vi gjerne fra deg — det hjelper oss med å forbedre og lage nye turer.',
      finishCoffeeBtn:  '☕ Kjøp meg en kaffe',
      finishDonateText: 'Likte du turen? Du er hjertelig velkommen til å støtte Los! med en liten donasjon — det hjelper oss å holde turene gratis og utvikle nye.',
    },
    es: {
      headline:       'Visitas turísticas autoguiadas gratuitas en Oslo',
      navHome:        '\u2302\u00a0\u00a0Inicio',
      navAbout:       'i\u00a0\u00a0Acerca de',
      navPrivacy:     '\u2696\u00a0\u00a0Privacidad',
      eyebrow:        'Rutas autoguiadas a pie',
      frontIntro:     'Bienvenido a Los!, tu gu\u00eda por las personas y los lugares de Oslo. Los! te lleva por las calles de la ciudad. En diferentes lugares, recibir\u00e1s acertijos y pistas. Tu misi\u00f3n es encontrar la respuesta.',
      tipsLabel:      'Consejos',
      toursLabel:     'Rutas',
      tip1:           'Los lugares donde encontrar\u00e1s las respuestas est\u00e1n en <strong>negrita</strong>. Si no conoces la ciudad, escribe estos lugares en tu aplicaci\u00f3n de mapas preferida.',
      tip2:           'La duraci\u00f3n de cada ruta es orientativa y puede variar seg\u00fan tu ritmo de marcha y las paradas que realices. Hemos incluido algunas recomendaciones de caf\u00e9s y otros lugares que podr\u00edan interesarte.',
      tip3:           'Al final de la ruta, te diremos cu\u00e1nto tiempo tardaste. Si est\u00e1is en grupo, por qu\u00e9 no convertirlo en una competici\u00f3n?',
      tip4:           '\u26a0\ufe0f Las traducciones se realizan desde el ingl\u00e9s mediante una m\u00e1quina. Pueden producirse algunos errores. Comunic\u00e1noslo si algo parece incorrecto!',
      soon:           'Pr\u00f3ximamente',
      startTour:      'Comenzar ruta',
      answer:         'Responder',
      hint:           '\ud83d\udca1 Pista',
      answerPlaceholder: 'Escribe tu respuesta aqu\u00ed\u2026',
      wrongAnswer:    'No es correcto \u2014 int\u00e9ntalo de nuevo o pulsa Pista para obtener una ayuda.',
      finishTour:     'Finalizar ruta \u2192',
      yourTime:       'Tu tiempo',
      leaveFeedback:  'Dejar comentarios \u2192',
      backHome:       'Volver al inicio',
      tourComplete:   'Ruta completada!',
      tour1Title:     'Lo mejor de Oslo',
      tour1Desc:      'Recorre Karl Johans gate desde la estación de tren hasta el Palacio Real, resolviendo tareas y conociendo los lugares más importantes de la calle principal de la ciudad. Unos 2–3 km, aproximadamente una hora.',
      tour2Title:     'Oslo y el nacimiento de Noruega',
      tour2Desc:      'Esta ruta comienza al final de Karl Johan y te lleva por la historia de cómo Oslo y Noruega llegaron a ser lo que son hoy. Unos 4–5 km, aproximadamente una hora.',
      tour3Title:     'Akerselva y el pasado industrial de Oslo',
      tour3Desc:      'La ruta comienza en Nydalen — toma el T-bane y encuentra el río más cercano: Akerselva! Camina hacia el centro resolviendo tareas y descubriendo la historia industrial de Oslo. Unos 5 km, aproximadamente 1,5 horas.',
      tour4Title:     '',
      tour4Desc:      '',
      aboutEyebrow:   'El proyecto',
      aboutTitle:     'Acerca de Los!',
      aboutP1:        '<em>Los</em> es una palabra noruega que designa al pr\u00e1ctico mar\u00edtimo \u2014 una persona que ayuda a los barcos a navegar de forma segura por las aguas locales. En el fiordo de Oslo, puede verse c\u00f3mo los barcos pr\u00e1cticos gu\u00edan a los grandes cruceros hasta el muelle.',
      aboutP2:        'Los! es una aplicaci\u00f3n <strong>gratuita</strong> de visitas autoguiadas a pie por Oslo. La idea es sencilla: pres\u00e9ntate, sigue las pistas y descubre la historia, las personas y los lugares de la ciudad a tu propio ritmo \u2014 sin gu\u00eda ni reserva.',
      aboutP3:        'Cada ruta te lleva por <strong>calles reales y espacios p\u00fablicos</strong>. A lo largo del camino, te detendr\u00e1s en estatuas, edificios y lugares emblem\u00e1ticos que tienen una historia que contar \u2014 lugares como el Nationaltheatret, el Palacio Real, la Fortaleza de Akershus, Gamle Logen y la \u00d3pera de Oslo. Las respuestas siempre est\u00e1n cerca \u2014 mira a tu alrededor y disfruta del paseo.',
      aboutP4:        'Los! se encuentra actualmente en una <strong>fase piloto</strong>. Las primeras rutas est\u00e1n activas y se est\u00e1n desarrollando m\u00e1s. La aplicaci\u00f3n es <strong>gratuita</strong>, pero las donaciones son muy bienvenidas.',
      aboutP5:        'Los! est\u00e1 desarrollada por <strong>Gard Ringen H\u00f8ibjerg</strong>. El equipo est\u00e1 motivado por la idea de ayudar a los visitantes a descubrir los rincones m\u00e1s interesantes de la ciudad. Si tienes comentarios, encuentras un error o quieres ponerte en contacto, usa nuestro <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">formulario de comentarios</a>.',
      finishBody:       '¡Enhorabuena — has completado la ruta! Aquí es donde comienza tu verdadera aventura en Oslo. Desde aquí puedes dirigirte fácilmente a donde quieras.\n\nEsperamos que hayas disfrutado la ruta. Si tienes alguna opinión, nos encanta escucharla — nos ayuda a mejorar y crear nuevas rutas.',
      finishCoffeeBtn:  '☕ Invítame a un café',
      finishDonateText: 'Si disfrutaste la ruta, puedes apoyar a Los! con una pequeña donación — nos ayuda a mantener las rutas gratuitas y a crear nuevas.',
    },
    de: {
      headline:       'Kostenlose Stadtführungen zu Fuß in Oslo',
      navHome:        '\u2302\u00a0\u00a0Startseite',
      navAbout:       'i\u00a0\u00a0\u00dcber uns',
      navPrivacy:     '\u2696\u00a0\u00a0Datenschutz',
      eyebrow:        'Selbstgef\u00fchrte Stadtrundg\u00e4nge',
      frontIntro:     'Willkommen bei Los!, deinem F\u00fchrer zu den Menschen und Orten Oslos. Los! nimmt dich mit durch die Stra\u00dfen der Stadt. An verschiedenen Orten erh\u00e4ltst du R\u00e4tsel und Hinweise. Deine Aufgabe ist es, die Antwort zu finden.',
      tipsLabel:      'Tipps & Hinweise',
      toursLabel:     'Stadtrundg\u00e4nge',
      tip1:           'Die Orte, an denen du die Antworten findest, sind in <strong>Fettschrift</strong> angegeben. Falls du die Stadt nicht kennst, gib diese Orte in deine bevorzugte Karten-App ein.',
      tip2:           'Die angegebene Dauer jeder Tour ist ein Richtwert und kann je nach Gehtempo und m\u00f6glichen Pausen variieren. Wir haben einige Empfehlungen f\u00fcr Caf\u00e9s und andere Orte zusammengestellt, die dich interessieren k\u00f6nnten.',
      tip3:           'Am Ende der Tour sagen wir dir, wie lange du gebraucht hast. Wenn ihr eine Gruppe seid, macht doch einen Wettbewerb daraus!',
      tip4:           '\u26a0\ufe0f \u00dcbersetzungen werden maschinell aus dem Englischen erstellt. Es k\u00f6nnen Fehler auftreten. Sag uns Bescheid, wenn etwas falsch wirkt!',
      soon:           'Demn\u00e4chst',
      startTour:      'Tour starten',
      answer:         'Antworten',
      hint:           '\ud83d\udca1 Hinweis',
      answerPlaceholder: 'Gib deine Antwort hier ein\u2026',
      wrongAnswer:    'Nicht ganz richtig \u2014 versuch es erneut oder tippe auf Hinweis f\u00fcr einen Tipp.',
      finishTour:     'Tour beenden \u2192',
      yourTime:       'Deine Zeit',
      leaveFeedback:  'Feedback hinterlassen \u2192',
      backHome:       'Zur\u00fcck zur Startseite',
      tourComplete:   'Tour abgeschlossen!',
      tour1Title:     'Oslos größte Highlights',
      tour1Desc:      'Geh die Karl Johans gate vom Bahnhof zum Königlichen Schloss, löse Aufgaben und lerne die Menschen und Orte entlang der berühmtesten Straße der Stadt kennen. Ca. 2–3 km, ungefähr eine Stunde.',
      tour2Title:     'Oslo und Norwegens Werden',
      tour2Desc:      'Diese Tour beginnt am unteren Ende des Karl Johan und führt dich durch die Geschichte, wie Oslo und Norwegen wurden, was sie heute sind. Ca. 4–5 km, ungefähr eine Stunde.',
      tour3Title:     'Akerselva und Oslos Industrievergangenheit',
      tour3Desc:      'Die Tour beginnt in Nydalen — nimm die T-bane und finde den nächsten Fluss: Akerselva! Geh Richtung Innenstadt und löse Aufgaben, während du Oslos Industriegeschichte entdeckst. Ca. 5 km, ungefähr 1,5 Stunden.',
      tour4Title:     '',
      tour4Desc:      '',
      aboutEyebrow:   'Das Projekt',
      aboutTitle:     '\u00dcber Los!',
      aboutP1:        '<em>Los</em> ist ein norwegisches Wort f\u00fcr einen Lotsen \u2014 eine Person, die Schiffe sicher durch lokale Gew\u00e4sser navigiert. Im Oslofjord kann man los-Boote sehen, die gro\u00dfe Kreuzfahrtschiffe sicher in den Hafen lotsen.',
      aboutP2:        'Los! ist eine <strong>kostenlose</strong> App f\u00fcr selbstgef\u00fchrte Stadtrundg\u00e4nge in Oslo. Die Idee ist einfach: Komm vorbei, folge den Hinweisen und entdecke die Geschichte, die Menschen und die Orte der Stadt in deinem eigenen Tempo \u2014 kein Reiseleiter, keine Buchung n\u00f6tig.',
      aboutP3:        'Jede Tour f\u00fchrt dich durch <strong>echte Stra\u00dfen und \u00f6ffentliche R\u00e4ume</strong>. Unterwegs h\u00e4ltst du an Statuen, Geb\u00e4uden und Wahrzeichen, die alle eine Geschichte zu erz\u00e4hlen haben \u2014 Orte wie das Nationaltheatret, das K\u00f6nigliche Schloss, die Festung Akershus, Gamle Logen und das Osloer Opernhaus. Die Antworten sind immer in der N\u00e4he \u2014 schau dich um und genie\u00df den Spaziergang.',
      aboutP4:        'Los! befindet sich derzeit in einer <strong>Pilotphase</strong>. Die ersten Touren sind live und weitere sind in Entwicklung. Die App ist <strong>kostenlos</strong>, aber Spenden sind sehr willkommen.',
      aboutP5:        'Los! wurde von <strong>Gard Ringen H\u00f8ibjerg</strong> entwickelt. Das Team ist motiviert, Besuchern die interessanteren Ecken der Stadt zu zeigen. Wenn du Feedback hast, einen Fehler entdeckst oder Kontakt aufnehmen m\u00f6chtest, nutze bitte unser <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">Feedback-Formular</a>.',
      finishBody:       'Herzlichen Glückwunsch — du hast die Tour abgeschlossen! Hier beginnt dein echtes Abenteuer in Oslo. Von hier aus kannst du leicht dorthin gehen, wo du möchtest.\n\nWir hoffen, dir hat die Tour gefallen. Wenn du Feedback hast, freuen wir uns davon zu hören — es hilft uns, neue Touren zu verbessern und zu entwickeln.',
      finishCoffeeBtn:  '☕ Kauf mir einen Kaffee',
      finishDonateText: 'Wenn dir die Tour gefallen hat, kannst du Los! gerne mit einer kleinen Spende unterstützen — das hilft uns, die Touren kostenlos zu halten und neue zu entwickeln.',
    },
    fr: {
      navHome:        '\u2302\u00a0\u00a0Accueil',
      navAbout:       'i\u00a0\u00a0\u00c0 propos',
      navPrivacy:     '\u2696\u00a0\u00a0Confidentialit\u00e9',
      eyebrow:        'Visites autoguides à pied',
      headline:       'Visites guidées gratuites à pied à Oslo',
      frontIntro:     'Bienvenue sur Los\u00a0! Votre guide des personnes et des lieux d\u2019Oslo. Los! vous guide \u00e0 travers les rues de la ville. \u00c0 diff\u00e9rents endroits, vous recevrez des \u00e9nigmes et des indices. Votre mission est de trouver la r\u00e9ponse.',
      tipsLabel:      'Conseils pratiques',
      toursLabel:     'Visites',
      tip1:           'Les lieux o\u00f9 vous trouverez les r\u00e9ponses sont indiqu\u00e9s en <strong>gras</strong>. Si vous ne connaissez pas la ville, saisissez ces lieux dans votre application de cartographie pr\u00e9f\u00e9r\u00e9e.',
      tip2:           'La dur\u00e9e de chaque visite est indicative et peut varier selon votre rythme de marche et les arr\u00eats \u00e9ventuels. Nous avons inclus quelques recommandations de caf\u00e9s et d\u2019autres endroits qui pourraient vous int\u00e9resser.',
      tip3:           '\u00c0 la fin de la visite, nous vous indiquerons combien de temps vous avez mis. Si vous \u00eates en groupe, pourquoi ne pas en faire une comp\u00e9tition\u00a0?',
      tip4:           '\u26a0\ufe0f Les traductions sont r\u00e9alis\u00e9es depuis l\u2019anglais par une machine. Des erreurs peuvent survenir. N\u2019h\u00e9sitez pas \u00e0 nous le signaler si quelque chose semble incorrect\u00a0!',
      soon:           'Bient\u00f4t',
      startTour:      'Commencer la visite',
      answer:         'R\u00e9pondre',
      hint:           '\ud83d\udca1 Indice',
      answerPlaceholder: 'Saisissez votre r\u00e9ponse ici\u2026',
      wrongAnswer:    'Pas tout \u00e0 fait \u2014 r\u00e9essayez ou appuyez sur Indice pour obtenir un conseil.',
      finishTour:     'Terminer la visite \u2192',
      yourTime:       'Votre temps',
      leaveFeedback:  'Laisser un avis \u2192',
      backHome:       'Retour \u00e0 l\u2019accueil',
      tourComplete:   'Visite termin\u00e9e\u00a0!',
      tour1Title:     'Les incontournables d’Oslo',
      tour1Desc:      'Parcourez la Karl Johans gate de la gare au Palais Royal, en résolvant des énigmes et en découvrant les personnes et lieux importants de la rue principale de la ville. Environ 2–3 km, une heure environ.',
      tour2Title:     'Oslo et la naissance de la Norvège',
      tour2Desc:      'Cette visite commence au bas de Karl Johan et vous guide à travers l’histoire d’Oslo et de la Norvège. Environ 4–5 km, une heure environ.',
      tour3Title:     'L’Akerselva et le passé industriel d’Oslo',
      tour3Desc:      'La visite commence à Nydalen — prenez le T-bane et trouvez la rivière la plus proche : l’Akerselva ! Marchez vers le centre-ville en résolvant des énigmes et en découvrant le passé industriel d’Oslo. Environ 5 km, 1h30 environ.',
      tour4Title:     '',
      tour4Desc:      '',
      aboutEyebrow:   'Le projet',
      aboutTitle:     '\u00c0 propos de Los!',
      aboutP1:        '<em>Los</em> est un mot norv\u00e9gien d\u00e9signant le pilote maritime \u2014 une personne qui aide les navires \u00e0 naviguer en toute s\u00e9curit\u00e9 dans les eaux locales. Dans le fjord d\u2019Oslo, on peut voir des bateaux-pilotes guider de grands navires de croisi\u00e8re jusqu\u2019aux quais.',
      aboutP2:        'Los! est une application de visites <strong>gratuites</strong> et autoguides \u00e0 pied \u00e0 Oslo. L\u2019id\u00e9e est simple\u00a0: venez, suivez les indices et d\u00e9couvrez l\u2019histoire, les gens et les lieux de la ville \u00e0 votre rythme \u2014 sans guide, sans r\u00e9servation.',
      aboutP3:        'Chaque visite vous m\u00e8ne \u00e0 travers de <strong>vraies rues et des espaces publics</strong>. En chemin, vous vous arr\u00eaterez devant des statues, des b\u00e2timents et des monuments qui ont chacun une histoire \u00e0 raconter \u2014 des lieux comme le Nationaltheatret, le Palais Royal, la forteresse d\u2019Akershus, Gamle Logen et l\u2019Op\u00e9ra d\u2019Oslo. Les r\u00e9ponses sont toujours quelque part \u00e0 proximit\u00e9 \u2014 regardez autour de vous et profitez de la balade.',
      aboutP4:        'Los! est actuellement en <strong>phase pilote</strong>. Les premi\u00e8res visites sont en ligne et d\u2019autres sont en cours de d\u00e9veloppement. L\u2019application est <strong>gratuite</strong>, mais les dons sont les bienvenus.',
      aboutP5:        'Los! est d\u00e9velopp\u00e9 par <strong>Gard Ringen H\u00f8ibjerg</strong>. L\u2019\u00e9quipe est motiv\u00e9e par l\u2019id\u00e9e d\u2019aider les visiteurs \u00e0 d\u00e9couvrir les coins les plus int\u00e9ressants de la ville. Si vous avez des commentaires, d\u00e9tectez une erreur ou souhaitez nous contacter, veuillez utiliser notre <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">formulaire de retour</a>.',
      finishBody:       'Félicitations — vous avez terminé la visite ! C’est ici que votre vraie aventure à Oslo commence. De là, vous pouvez facilement vous rendre où vous le souhaitez.\n\nNous espérons que vous avez apprécié la visite. Si vous avez des commentaires, nous serions ravis de les lire — cela nous aide à améliorer et à créer de nouvelles visites.',
      finishCoffeeBtn:  '☕ Offrez-moi un café',
      finishDonateText: 'Si vous avez apprécié la visite, vous pouvez soutenir Los! avec un petit don — cela nous aide à garder les visites gratuites et à en créer de nouvelles.',
    },
  },
  scenes: {
    akerselva:  { en: [] }
  }
};

/* ══════════════════════════════════════════
   LANGUAGE HELPERS
══════════════════════════════════════════ */

function getLang() {
  const stored = localStorage.getItem('los_lang');
  if (stored && LANGUAGES[stored]) return stored;
  const browser = (navigator.language || 'en').substring(0, 2).toLowerCase();
  return LANGUAGES[browser] ? browser : 'en';
}

function setLang(code) {
  localStorage.setItem('los_lang', code);
  document.documentElement.lang = LANGUAGES[code].lang;
  applyTranslations();
  if (typeof tourId !== 'undefined' && tourId) {
    tourScenes = getScenes(tourId);
    renderScene();
  }
}

function T(key) {
  const lang = getLang();
  return (t.ui[lang] && t.ui[lang][key] !== undefined)
    ? t.ui[lang][key]
    : (t.ui.en[key] || key);
}

function getScenes(tourId) {
  const lang = getLang();

  // External tour files (tours/*.js)
  const external = {
    greathits: typeof TOUR_GREATHITS !== 'undefined' ? TOUR_GREATHITS : null,
    becoming:  typeof TOUR_BECOMING  !== 'undefined' ? TOUR_BECOMING  : null,
  };
  if (external[tourId]) {
    const src = external[tourId];
    return (src[lang] && src[lang].length) ? src[lang] : (src.en || []);
  }

  // Built-in scenes (seaside, becoming)
  const langScenes = t.scenes[tourId] && t.scenes[tourId][lang];
  const enScenes   = t.scenes[tourId] && t.scenes[tourId].en;
  return (langScenes && langScenes.length) ? langScenes : (enScenes || []);
}

function _set(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}
function _setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function applyTranslations() {
  const lang = getLang();
  document.documentElement.lang = LANGUAGES[lang] ? LANGUAGES[lang].lang : lang;

  _set('menuTagline', T('tagline'));
  _set('navHome',     T('navHome'));
  _set('navAbout',    T('navAbout'));
  _set('navPrivacy',  T('navPrivacy'));

  _set('frontEyebrow',  T('eyebrow'));
  _set('frontHeadline', T('headline'));
  _set('frontIntro',    T('frontIntro'));
  _set('tipsLabel',     T('tipsLabel'));
  _set('toursLabel',    T('toursLabel'));
  _set('tip1',          T('tip1'));
  _set('tip2',          T('tip2'));
  _set('tip3',          T('tip3'));
  _set('tip4',          T('tip4'));
  _set('tour1Title',    T('tour1Title'));
  _set('tour1Desc',     T('tour1Desc'));
  _set('tour2Title',    T('tour2Title'));
  _set('tour2Desc',     T('tour2Desc'));
  _set('tour3Title',    T('tour3Title'));
  _set('tour3Desc',     T('tour3Desc'));
  _setText('soonBadge', T('soon'));
  document.querySelectorAll('.tour-start-btn').forEach(btn => {
    btn.innerHTML = T('startTour') + ' <span class="arrow">\u2192</span>';
  });

  _set('aboutEyebrow',  T('aboutEyebrow'));
  _set('aboutTitle',    T('aboutTitle'));
  _set('aboutP1',       T('aboutP1'));
  _set('aboutP2',       T('aboutP2'));
  _set('aboutP3',       T('aboutP3'));
  _set('aboutP4',       T('aboutP4'));
  _set('aboutP5',       T('aboutP5'));

  const ansBtn  = document.getElementById('answerBtn');
  const hintBtn = document.getElementById('hintBtn');
  const input   = document.getElementById('answerInput');
  if (ansBtn)  ansBtn.textContent  = T('answer');
  if (hintBtn) hintBtn.innerHTML   = T('hint');
  if (input)   input.placeholder   = T('answerPlaceholder');

  _setText('finishTourComplete', T('tourComplete'));
  _set('finishBody',        T('finishBody'));
  _setText('finishTimeLbl', T('yourTime'));
  _set('finishFeedbackBtn', T('leaveFeedback'));
  _set('finishBackBtn',     T('backHome'));
  _set('finishDonateText',  T('finishDonateText'));
  _set('finishCoffeeBtn',   T('finishCoffeeBtn'));

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
  });
}

function buildLangSwitcher() {
  const container = document.getElementById('langSwitcher');
  if (!container) return;
  container.innerHTML = '';
  Object.entries(LANGUAGES).forEach(([code, info]) => {
    const btn = document.createElement('button');
    btn.className = 'lang-btn';
    btn.dataset.lang = code;
    btn.textContent = info.label;
    btn.setAttribute('aria-label', 'Switch language to ' + info.label);
    btn.addEventListener('click', () => setLang(code));
    container.appendChild(btn);
  });
}

/* ══════════════════════════════════════════
   GOOGLE ANALYTICS + COOKIE CONSENT
══════════════════════════════════════════ */

const GA_ID = 'G-WSDKG42SWP';
const CONSENT_KEY = 'los_cookie_consent';

function loadGA() {
  if (document.getElementById('ga-script')) return;
  const s = document.createElement('script');
  s.id    = 'ga-script';
  s.async = true;
  s.src   = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true });
}

function initConsent() {
  const choice = localStorage.getItem(CONSENT_KEY);
  if (choice === 'accepted') { loadGA(); return; }
  if (choice === 'declined') { return; }
  showConsentBanner();
}

function showConsentBanner() {
  if (window.location.pathname.includes('privacy')) return;
  const lang = getLang();
  const texts = {
    en: { msg: 'We use cookies to understand how people use Los! See our <a href="privacy.html">Privacy Policy</a>.', accept: 'Accept', decline: 'Decline' },
    no: { msg: 'Vi bruker informasjonskapsler for \u00e5 forst\u00e5 hvordan folk bruker Los! Se v\u00e5r <a href="privacy.html">personvernerklæring</a>.', accept: 'Godta', decline: 'Avsl\u00e5' },
    es: { msg: 'Usamos cookies para entender c\u00f3mo se usa Los! Consulta nuestra <a href="privacy.html">pol\u00edtica de privacidad</a>.', accept: 'Aceptar', decline: 'Rechazar' },
    de: { msg: 'Wir verwenden Cookies, um zu verstehen, wie Los! genutzt wird. Siehe unsere <a href="privacy.html">Datenschutzerkl\u00e4rung</a>.', accept: 'Akzeptieren', decline: 'Ablehnen' },
    fr: { msg: "Nous utilisons des cookies pour comprendre comment Los! est utilis\u00e9. Voir notre <a href='privacy.html'>politique de confidentialit\u00e9</a>.", accept: 'Accepter', decline: 'Refuser' },
  };
  const tx = texts[lang] || texts.en;
  const banner = document.createElement('div');
  banner.className = 'consent-banner';
  banner.id = 'consentBanner';
  banner.innerHTML = '<p class="consent-text">' + tx.msg + '</p>' +
    '<div class="consent-btns">' +
    '<button class="consent-btn consent-btn--accept" id="consentAccept">' + tx.accept + '</button>' +
    '<button class="consent-btn consent-btn--decline" id="consentDecline">' + tx.decline + '</button>' +
    '</div>';
  document.body.appendChild(banner);
  document.getElementById('consentAccept').addEventListener('click', () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    banner.classList.add('hidden');
    loadGA();
  });
  document.getElementById('consentDecline').addEventListener('click', () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    banner.classList.add('hidden');
  });
}
