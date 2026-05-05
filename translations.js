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
      headline:       'Discover Oslo on foot',
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
      tour1Title:     'Oslo and Norway\u2019s Becoming',
      tour1Desc:      'This tour starts at the bottom of Karl Johan and takes you through the history of how Oslo and Norway became what they are today \u2014 through conflict, culture and independence. About 4\u20135 km, roughly one hour.',
      tour2Title:     'Short Tour of Central-Western Oslo',
      tour2Desc:      'This tour starts at Nationaltheatret and takes you around the central-western part of the city and along the waterfront. Along the way, you will get to know local people and places. About 4\u20135 km, roughly one hour.',
      tour3Title:     'Oslo\u2019s Greatest Hits',
      tour3Desc:      'This tour starts at the bottom of Karl Johan and takes you through a selection of the most important sights in Oslo. About 4\u20135 km, roughly one hour.',
      tour4Title:     'Oslo City Centre Tour',
      tour4Desc:      'This tour starts at the bottom of Karl Johan and takes you through both well-known and lesser-known sights in the city centre, focusing on historical events. About 4\u20135 km, roughly one hour.',
      aboutEyebrow:   'The project',
      aboutTitle:     'About Los!',
      aboutP1:        '<em>Los</em> is a Norwegian word for a maritime pilot \u2014 a person who helps ships navigate safely through local waters. In the Oslofjord, you may see los-boats guiding large cruise ships safely into the docks.',
      aboutP2:        'Los! is a <strong>free</strong>, self-guided walking tour app for Oslo. The idea is simple: show up, follow the clues, and discover the city\u2019s history, people and places at your own pace \u2014 no guide needed, no booking required.',
      aboutP3:        'Each tour takes you through <strong>real streets and public spaces</strong>. Along the way, you will stop at statues, buildings and landmarks that each have a story to tell. The answers are always somewhere nearby \u2014 look around, read your surroundings and enjoy the walk.',
      aboutP4:        'Los! is currently in a <strong>pilot stage</strong>. The first tours are live and more are being developed. The app is <strong>free to use</strong>, but donations are very welcome.',
      aboutP5:        'Los! is developed by <strong>Gard Ringen H\u00f8ibjerg</strong>. The team is motivated by the idea of helping visitors discover the more interesting corners of the city. If you have feedback, spot an error, or would like to get in touch, please use our <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">feedback form</a>.',
      finishBody:     'Congratulations \u2014 you have finished the tour! This is where your real adventure in Oslo begins. We have brought you to one of the many wonderful places in the city centre. From here, you can easily make your way to wherever you wish to go next.<br><br>We hope you enjoyed the tour. Your feedback helps us improve the app and develop future tours. If you enjoyed this tour, you are welcome to support the project through the button below.<br><br>Have a lovely stay in Oslo!',
    },
    no: {
      tagline:        'Byvandringer \u00b7 Oslo',
      navHome:        '\u2302\u00a0\u00a0Hjem',
      navAbout:       'i\u00a0\u00a0Om oss',
      navPrivacy:     '\u2696\u00a0\u00a0Personvern',
      eyebrow:        'Selvguidede byvandringer',
      headline:       'Oppdag Oslo til fots',
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
      tour1Title:     'Oslo og Norges tilblivelse',
      tour1Desc:      'Denne turen starter nederst p\u00e5 Karl Johan og tar deg gjennom historien om hvordan Oslo og Norge ble det de er i dag \u2014 gjennom konflikt, kultur og selvstendighet. Ca. 4\u20135 km, omtrent \u00e9n time.',
      tour2Title:     'Korttur i sentrum-vest',
      tour2Desc:      'Denne turen starter ved Nationaltheatret og tar deg rundt i den sentrum-vestlige delen av byen og langs sj\u00f8en. Du vil bli kjent med lokale mennesker og steder. Ca. 4\u20135 km, omtrent \u00e9n time.',
      tour3Title:     'Oslos store h\u00f8ydepunkter',
      tour3Desc:      'Denne turen starter nederst p\u00e5 Karl Johan og tar deg gjennom et utvalg av Oslos viktigste severdigheter. Ca. 4\u20135 km, omtrent \u00e9n time.',
      tour4Title:     'Oslo sentrum-turen',
      tour4Desc:      'Denne turen starter nederst p\u00e5 Karl Johan og tar deg gjennom kjente og mindre kjente steder i sentrum. Ca. 4\u20135 km, omtrent \u00e9n time.',
      aboutEyebrow:   'Prosjektet',
      aboutTitle:     'Om Los!',
      aboutP1:        '<em>Los</em> er et norsk ord for en los \u2014 en person som hjelper skip \u00e5 navigere trygt gjennom lokale farvann. I Oslofjorden kan du se los-b\u00e5ter som guider store cruiseskip trygt inn til kai.',
      aboutP2:        'Los! er en <strong>gratis</strong> selvguidet byvandring for Oslo. Id\u00e9en er enkel: m\u00f8t opp, f\u00f8lg ledetr\u00e5dene og oppdag byens historie, mennesker og steder i ditt eget tempo \u2014 ingen guide n\u00f8dvendig, ingen bestilling.',
      aboutP3:        'Hver tur tar deg gjennom <strong>ekte gater og offentlige rom</strong>. Underveis stopper du ved statuer, bygninger og landemerker som alle har en historie \u00e5 fortelle. Svarene er alltid i n\u00e6rheten \u2014 se deg rundt og nyt turen.',
      aboutP4:        'Los! er for \u00f8yeblikket i en <strong>pilotfase</strong>. De f\u00f8rste turene er live og flere er under utvikling. Appen er <strong>gratis \u00e5 bruke</strong>, men donasjoner mottas med stor takk.',
      aboutP5:        'Los! er utviklet av <strong>Gard Ringen H\u00f8ibjerg</strong>. Teamet er motivert av tanken p\u00e5 \u00e5 hjelpe bes\u00f8kende med \u00e5 oppdage de mer interessante hj\u00f8rnene av byen. Har du tilbakemeldinger, finner du feil, eller \u00f8nsker \u00e5 ta kontakt, bruk gjerne v\u00e5rt <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">tilbakemeldingsskjema</a>.',
      finishBody:     'Gratulerer \u2014 du har fullf\u00f8rt turen! Her begynner ditt egentlige eventyr i Oslo. Vi har ledet deg til et av byens mange flotte steder i sentrum. Herfra kan du enkelt g\u00e5 dit du \u00f8nsker.<br><br>Vi h\u00e5per du likte turen. Tilbakemeldingene dine hjelper oss med \u00e5 forbedre appen og utvikle fremtidige turer. Hvis du likte turen, er du velkommen til \u00e5 st\u00f8tte prosjektet via knappen nedenfor.<br><br>God tur videre i Oslo!',
    },
    es: {
      tagline:        'Rutas a pie \u00b7 Oslo',
      navHome:        '\u2302\u00a0\u00a0Inicio',
      navAbout:       'i\u00a0\u00a0Acerca de',
      navPrivacy:     '\u2696\u00a0\u00a0Privacidad',
      eyebrow:        'Rutas autoguiadas a pie',
      headline:       'Descubre Oslo a pie',
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
      tour1Title:     'Oslo y el nacimiento de Noruega',
      tour1Desc:      'Esta ruta comienza al final de Karl Johan y te lleva por la historia de c\u00f3mo Oslo y Noruega llegaron a ser lo que son hoy \u2014 a trav\u00e9s del conflicto, la cultura y la independencia. Unos 4\u20135 km, aproximadamente una hora.',
      tour2Title:     'Ruta corta por el centro-oeste de Oslo',
      tour2Desc:      'Esta ruta comienza en Nationaltheatret y te lleva por la zona centro-occidental de la ciudad y a lo largo de la orilla del mar. Unos 4\u20135 km, aproximadamente una hora.',
      tour3Title:     'Lo mejor de Oslo',
      tour3Desc:      'Esta ruta comienza al final de Karl Johan y te lleva por una selecci\u00f3n de los lugares m\u00e1s importantes de Oslo. Unos 4\u20135 km, aproximadamente una hora.',
      tour4Title:     'Ruta por el centro de Oslo',
      tour4Desc:      'Esta ruta comienza al final de Karl Johan y te lleva por lugares conocidos y menos conocidos del centro de la ciudad. Unos 4\u20135 km, aproximadamente una hora.',
      aboutEyebrow:   'El proyecto',
      aboutTitle:     'Acerca de Los!',
      aboutP1:        '<em>Los</em> es una palabra noruega que designa al pr\u00e1ctico mar\u00edtimo \u2014 una persona que ayuda a los barcos a navegar de forma segura por las aguas locales. En el fiordo de Oslo, puede verse c\u00f3mo los barcos pr\u00e1cticos gu\u00edan a los grandes cruceros hasta el muelle.',
      aboutP2:        'Los! es una aplicaci\u00f3n <strong>gratuita</strong> de visitas autoguiadas a pie por Oslo. La idea es sencilla: pres\u00e9ntate, sigue las pistas y descubre la historia, las personas y los lugares de la ciudad a tu propio ritmo \u2014 sin gu\u00eda ni reserva.',
      aboutP3:        'Cada ruta te lleva por <strong>calles reales y espacios p\u00fablicos</strong>. A lo largo del camino, te detendr\u00e1s en estatuas, edificios y lugares emblem\u00e1ticos que tienen una historia que contar. Las respuestas siempre est\u00e1n cerca \u2014 mira a tu alrededor y disfruta del paseo.',
      aboutP4:        'Los! se encuentra actualmente en una <strong>fase piloto</strong>. Las primeras rutas est\u00e1n activas y se est\u00e1n desarrollando m\u00e1s. La aplicaci\u00f3n es <strong>gratuita</strong>, pero las donaciones son muy bienvenidas.',
      aboutP5:        'Los! est\u00e1 desarrollada por <strong>Gard Ringen H\u00f8ibjerg</strong>. El equipo est\u00e1 motivado por la idea de ayudar a los visitantes a descubrir los rincones m\u00e1s interesantes de la ciudad. Si tienes comentarios, encuentras un error o quieres ponerte en contacto, usa nuestro <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">formulario de comentarios</a>.',
      finishBody:     'Enhorabuena \u2014 has completado la ruta! Aqu\u00ed es donde comienza tu verdadera aventura en Oslo. Te hemos llevado a uno de los muchos lugares maravillosos del centro de la ciudad. Desde aqu\u00ed puedes dirigirte f\u00e1cilmente a donde desees.<br><br>Esperamos que hayas disfrutado de la ruta. Tus comentarios nos ayudan a mejorar la aplicaci\u00f3n y a desarrollar futuras rutas. Si te ha gustado la ruta, eres bienvenido a apoyar el proyecto a trav\u00e9s del bot\u00f3n de abajo.<br><br>Que disfrutes de tu estancia en Oslo!',
    },
    de: {
      tagline:        'Stadtf\u00fchrungen zu Fu\u00df \u00b7 Oslo',
      navHome:        '\u2302\u00a0\u00a0Startseite',
      navAbout:       'i\u00a0\u00a0\u00dcber uns',
      navPrivacy:     '\u2696\u00a0\u00a0Datenschutz',
      eyebrow:        'Selbstgef\u00fchrte Stadtrundg\u00e4nge',
      headline:       'Oslo zu Fu\u00df entdecken',
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
      tour1Title:     'Oslo und Norwegens Werden',
      tour1Desc:      'Diese Tour beginnt am unteren Ende des Karl Johan und f\u00fchrt dich durch die Geschichte, wie Oslo und Norwegen wurden, was sie heute sind \u2014 durch Konflikt, Kultur und Unabh\u00e4ngigkeit. Ca. 4\u20135 km, ungef\u00e4hr eine Stunde.',
      tour2Title:     'Kurztour durch Zentrum-West Oslo',
      tour2Desc:      'Diese Tour beginnt am Nationaltheatret und f\u00fchrt dich durch den zentral-westlichen Teil der Stadt und entlang der Uferpromenade. Ca. 4\u20135 km, ungef\u00e4hr eine Stunde.',
      tour3Title:     'Oslos gr\u00f6\u00dfte Highlights',
      tour3Desc:      'Diese Tour beginnt am unteren Ende des Karl Johan und nimmt dich mit zu einer Auswahl der wichtigsten Sehensw\u00fcrdigkeiten Oslos. Ca. 4\u20135 km, ungef\u00e4hr eine Stunde.',
      tour4Title:     'Oslo Stadtzentrum-Tour',
      tour4Desc:      'Diese Tour beginnt am unteren Ende des Karl Johan und f\u00fchrt dich durch bekannte und weniger bekannte Orte im Stadtzentrum. Ca. 4\u20135 km, ungef\u00e4hr eine Stunde.',
      aboutEyebrow:   'Das Projekt',
      aboutTitle:     '\u00dcber Los!',
      aboutP1:        '<em>Los</em> ist ein norwegisches Wort f\u00fcr einen Lotsen \u2014 eine Person, die Schiffe sicher durch lokale Gew\u00e4sser navigiert. Im Oslofjord kann man los-Boote sehen, die gro\u00dfe Kreuzfahrtschiffe sicher in den Hafen lotsen.',
      aboutP2:        'Los! ist eine <strong>kostenlose</strong> App f\u00fcr selbstgef\u00fchrte Stadtrundg\u00e4nge in Oslo. Die Idee ist einfach: Komm vorbei, folge den Hinweisen und entdecke die Geschichte, die Menschen und die Orte der Stadt in deinem eigenen Tempo \u2014 kein Reiseleiter, keine Buchung n\u00f6tig.',
      aboutP3:        'Jede Tour f\u00fchrt dich durch <strong>echte Stra\u00dfen und \u00f6ffentliche R\u00e4ume</strong>. Unterwegs h\u00e4ltst du an Statuen, Geb\u00e4uden und Wahrzeichen, die alle eine Geschichte zu erz\u00e4hlen haben. Die Antworten sind immer in der N\u00e4he \u2014 schau dich um und genie\u00df den Spaziergang.',
      aboutP4:        'Los! befindet sich derzeit in einer <strong>Pilotphase</strong>. Die ersten Touren sind live und weitere sind in Entwicklung. Die App ist <strong>kostenlos</strong>, aber Spenden sind sehr willkommen.',
      aboutP5:        'Los! wurde von <strong>Gard Ringen H\u00f8ibjerg</strong> entwickelt. Das Team ist motiviert, Besuchern die interessanteren Ecken der Stadt zu zeigen. Wenn du Feedback hast, einen Fehler entdeckst oder Kontakt aufnehmen m\u00f6chtest, nutze bitte unser <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">Feedback-Formular</a>.',
      finishBody:     'Herzlichen Gl\u00fcckwunsch \u2014 du hast die Tour abgeschlossen! Hier beginnt dein eigentliches Abenteuer in Oslo. Wir haben dich zu einem der vielen sch\u00f6nen Orte im Stadtzentrum gef\u00fchrt. Von hier kannst du leicht deinen Weg dorthin finden, wohin du m\u00f6chtest.<br><br>Wir hoffen, dass dir die Tour gefallen hat. Dein Feedback hilft uns, die App zu verbessern und zuk\u00fcnftige Touren zu entwickeln. Wenn dir die Tour gefallen hat, kannst du das Projekt gerne \u00fcber den Button unten unterst\u00fctzen.<br><br>Genie\u00df deinen Aufenthalt in Oslo!',
    },
    fr: {
      tagline:        'Visites \u00e0 pied \u00b7 Oslo',
      navHome:        '\u2302\u00a0\u00a0Accueil',
      navAbout:       'i\u00a0\u00a0\u00c0 propos',
      navPrivacy:     '\u2696\u00a0\u00a0Confidentialit\u00e9',
      eyebrow:        'Visites autoguides \u00e0 pied',
      headline:       'D\u00e9couvrez Oslo \u00e0 pied',
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
      tour1Title:     'Oslo et la naissance de la Norv\u00e8ge',
      tour1Desc:      'Cette visite commence au bas de Karl Johan et vous guide \u00e0 travers l\u2019histoire d\u2019Oslo et de la Norv\u00e8ge \u2014 conflits, culture et ind\u00e9pendance. Environ 4\u20135 km, une heure environ.',
      tour2Title:     'Courte visite du centre-ouest d\u2019Oslo',
      tour2Desc:      'Cette visite commence au Nationaltheatret et vous em\u00e8ne dans la partie centre-ouest de la ville et le long du bord de mer. Environ 4\u20135 km, une heure environ.',
      tour3Title:     'Les incontournables d\u2019Oslo',
      tour3Desc:      'Cette visite commence au bas de Karl Johan et vous em\u00e8ne \u00e0 travers une s\u00e9lection des sites les plus importants d\u2019Oslo. Environ 4\u20135 km, une heure environ.',
      tour4Title:     'Visite du centre-ville d\u2019Oslo',
      tour4Desc:      'Cette visite commence au bas de Karl Johan et vous fait d\u00e9couvrir des sites connus et moins connus du centre-ville. Environ 4\u20135 km, une heure environ.',
      aboutEyebrow:   'Le projet',
      aboutTitle:     '\u00c0 propos de Los!',
      aboutP1:        '<em>Los</em> est un mot norv\u00e9gien d\u00e9signant le pilote maritime \u2014 une personne qui aide les navires \u00e0 naviguer en toute s\u00e9curit\u00e9 dans les eaux locales. Dans le fjord d\u2019Oslo, on peut voir des bateaux-pilotes guider de grands navires de croisi\u00e8re jusqu\u2019aux quais.',
      aboutP2:        'Los! est une application de visites <strong>gratuites</strong> et autoguides \u00e0 pied \u00e0 Oslo. L\u2019id\u00e9e est simple\u00a0: venez, suivez les indices et d\u00e9couvrez l\u2019histoire, les gens et les lieux de la ville \u00e0 votre rythme \u2014 sans guide, sans r\u00e9servation.',
      aboutP3:        'Chaque visite vous m\u00e8ne \u00e0 travers de <strong>vraies rues et des espaces publics</strong>. En chemin, vous vous arr\u00eaterez devant des statues, des b\u00e2timents et des monuments qui ont chacun une histoire \u00e0 raconter. Les r\u00e9ponses sont toujours quelque part \u00e0 proximit\u00e9 \u2014 regardez autour de vous et profitez de la balade.',
      aboutP4:        'Los! est actuellement en <strong>phase pilote</strong>. Les premi\u00e8res visites sont en ligne et d\u2019autres sont en cours de d\u00e9veloppement. L\u2019application est <strong>gratuite</strong>, mais les dons sont les bienvenus.',
      aboutP5:        'Los! est d\u00e9velopp\u00e9 par <strong>Gard Ringen H\u00f8ibjerg</strong>. L\u2019\u00e9quipe est motiv\u00e9e par l\u2019id\u00e9e d\u2019aider les visiteurs \u00e0 d\u00e9couvrir les coins les plus int\u00e9ressants de la ville. Si vous avez des commentaires, d\u00e9tectez une erreur ou souhaitez nous contacter, veuillez utiliser notre <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">formulaire de retour</a>.',
      finishBody:     "F\u00e9licitations \u2014 vous avez termin\u00e9 la visite\u00a0! C\u2019est ici que commence votre v\u00e9ritable aventure \u00e0 Oslo. Nous vous avons conduit vers l\u2019un des nombreux endroits merveilleux du centre-ville. De l\u00e0, vous pouvez facilement vous rendre o\u00f9 vous le souhaitez.<br><br>Nous esp\u00e9rons que cette visite vous a plu. Vos retours nous aident \u00e0 am\u00e9liorer l\u2019application et \u00e0 d\u00e9velopper de futures visites. Si vous avez appr\u00e9ci\u00e9 la visite, vous pouvez soutenir le projet via le bouton ci-dessous.<br><br>Profitez bien de votre s\u00e9jour \u00e0 Oslo\u00a0!",
    },
  },
  scenes: {
    seaside: {
      en: [
        {
          chapter: "Scene 1",
          text: "Make your way to the plaza between <b>Nationaltheateret</b> and <b>Nationaltheateret T-bane station</b>.\n\nThe National Theatre was built in 1899. It was first funded by private donors and did not receive government support until 1928.\n\nAt the plaza, you will find a smiling woman with curly hair. What is her name?",
          answers: ["wenche foss", "wenche"],
          hints: ["She is standing close to the fountain."]
        },
        {
          chapter: "Scene 2",
          text: "Wenche Foss (1917\u20132011) was one of the most famous actors in Norway. Her career began in 1935 and lasted until 2009. She worked in both theatre and film.\n\nWenche Foss is one of several women who have had a great influence on the city. Make your way up the hill to <b>Slottsparken</b> (the Castle Park). There you will find a statue of a woman surrounded by flowers, looking down at the ground. Who is she?\n\n<i>On your way, you may be able to see the changing of the guards at 13:30!</i>",
          answers: ["camilla collett", "collett"],
          hints: ["Make your way to the rear-left of the castle."]
        },
        {
          chapter: "Scene 3",
          text: "Camilla Collett (1813\u20131895) was a Norwegian writer. She was one of the first writers in Norway to work in the style of \u201crealism,\u201d which aims to describe life as it really is. One of her books, <i>Amtmandens D\u00f8tre</i>, deals with the difficulties faced by women. She lived and worked in Oslo for much of her life. The statue was made by Gustav Vigeland, who is best known for the Vigeland Sculpture Park between Majorstua and Frogner.\n\nContinue down the road behind the castle and cross the street to <b>Parkveien 45</b>. Today this building is the Government Representation House (Statens representasjonsbolig), where the government receives foreign guests. Originally, however, it was owned by a local merchant and had a different name.\n\nWhat was the building originally called?",
          answers: ["villa parafina", "parafina"],
          hints: ["Find the blue plaque on the wall."]
        },
        {
          chapter: "Scene 4",
          text: "Before Norway found its own oil, importers like Frederik Sundt \u2014 who paid for Villa Parafina in 1877 \u2014 supplied the country with kerosene (in Norwegian: Parafin). Kerosene was used for lighting.\n\nFrom Villa Parafina, follow the road along the edge of the castle park towards <b>Solli plass</b>. There you will find a statue of a man holding a key. The statue stands in front of what is now one of the most fashionable hotels in Oslo.\n\nWho made the statue?",
          answers: ["rodin", "auguste rodin", "fran\u00e7ois auguste ren\u00e9 rodin"],
          hints: ["The man is wearing a robe.", "The name of the sculptor is written at the base of the statue."]
        },
        {
          chapter: "Scene 5",
          text: "The Man with the Key, made by Auguste Rodin, was unveiled in 1902. Rodin himself is believed to have never visited Oslo, but the statue sparked a lively cultural debate in the city. One of those who opposed it was Gustav Vigeland \u2014 the same artist who made the Camilla Collett statue and designed the Vigeland Park. He and others argued that art in Oslo\u2019s public spaces should be made by Norwegian artists.\n\nNow follow the tram line down towards <b>Aker Brygge</b> and <b>R\u00e5dhusplassen</b>. At the large plaza, you will find a man standing next to a cannon. If you are unsure which tram line to follow, ask a friendly local!\n\nWhat is his name?",
          answers: ["tordenskiold", "peter tordenskiold", "peter wessel"],
          hints: ["Look for the statue near the waterfront at R\u00e5dhusplassen."]
        },
        {
          chapter: "Scene 6",
          text: "Peter Tordenskiold (1690\u20131720) was a naval officer in the Danish-Norwegian navy. He became famous for a series of battles against Sweden. During one battle off the southern coast of Norway in 1714, his ship ran out of ammunition. He sent a representative to the enemy to ask if they could borrow some gunpowder to continue fighting.\n\nThe answer: No!\n\nFrom Tordenskiold, follow the docks to your right along <b>Akershus Fortress</b>. You are heading towards a dark chapter of Norway\u2019s recent history. On your left, you will find a number of empty chairs.\n\nWhat is the name of the artist?",
          answers: ["antony gormley", "gormley"],
          hints: ["You need to walk for a while.", "The installation is at the far end of the fortress walls."]
        },
        {
          chapter: "Scene 7",
          text: "During the Second World War, Norwegian collaborators helped the German occupying forces deport 772 Jews from Norway. Most were sent to Auschwitz. Only 37 survived.\n\nThe tour is almost over. Continue along the docks, past the cruise ship terminal, until you reach a place with unusual A-shaped wooden structures. These buildings are inspired by the racks used to dry cod in Northern Norway.\n\n<i>Did you know that Norway\u2019s coffee culture is connected to the export of dried fish to Brazil?</i>\n\nWhat is the name of this venue?",
          answers: ["salt"],
          hints: ["The structures are right next to the cruise ship terminal.", "It is not pepper."]
        }
      ],
      no: [
        {
          chapter: "Scene 1",
          text: "G\u00e5 til plassen mellom <b>Nationaltheateret</b> og <b>Nationaltheateret T-banestasjon</b>.\n\nNationaltheatret ble bygget i 1899. Det ble f\u00f8rst finansiert av private og fikk f\u00f8rst statlig st\u00f8tte i 1928.\n\nP\u00e5 plassen vil du finne en smilende kvinne med kr\u00f8llete h\u00e5r. Hva heter hun?",
          answers: ["wenche foss", "wenche"],
          hints: ["Hun st\u00e5r n\u00e6r fontenen."]
        },
        {
          chapter: "Scene 2",
          text: "Wenche Foss (1917\u20132011) var en av Norges mest ber\u00f8mte skuespillere. Karrieren begynte i 1935 og varte til 2009. Hun arbeidet b\u00e5de i teater og film.\n\nWenche Foss er en av flere kvinner som har hatt stor innflytelse p\u00e5 byen. G\u00e5 opp bakken til <b>Slottsparken</b>. Der vil du finne en statue av en kvinne omgitt av blomster, med blikket mot bakken. Hvem er hun?\n\n<i>P\u00e5 veien kan du kanskje se vaktskiftet klokken 13:30!</i>",
          answers: ["camilla collett", "collett"],
          hints: ["G\u00e5 til baksiden til venstre av slottet."]
        },
        {
          chapter: "Scene 3",
          text: "Camilla Collett (1813\u20131895) var en norsk forfatter. Hun var en av de f\u00f8rste forfatterne i Norge som arbeidet i stilen \u00abrealisme\u00bb, som tar sikte p\u00e5 \u00e5 beskrive livet slik det virkelig er. En av hennes b\u00f8ker, <i>Amtmandens D\u00f8tre</i>, handler om vanskelighetene kvinner m\u00f8ter. Hun levde og arbeidet i Oslo store deler av livet. Statuen er laget av Gustav Vigeland, kjent for Vigelandsanlegget mellom Majorstua og Frogner.\n\nKontinuer ned veien bak slottet og kryss gaten til <b>Parkveien 45</b>. I dag er huset Statens representasjonsbolig, der regjeringen tar imot utenlandske statsgjester. Opprinnelig var det eid av en lokal kj\u00f8pmann og kjent under et annet navn.\n\nHva het bygningen opprinnelig?",
          answers: ["villa parafina", "parafina"],
          hints: ["Finn den bl\u00e5 plaketten p\u00e5 veggen."]
        },
        {
          chapter: "Scene 4",
          text: "F\u00f8r Norge fant sin egen olje, leverte importerer som Frederik Sundt \u2014 som finansierte Villa Parafina i 1877 \u2014 landet med parafin, som ble brukt til belysning.\n\nFra Villa Parafina, f\u00f8lg veien langs slottsparken mot <b>Solli plass</b>. Der vil du finne en statue av en mann med en n\u00f8kkel, foran det som n\u00e5 er et av Oslos mest moteriktige hoteller.\n\nHvem laget statuen?",
          answers: ["rodin", "auguste rodin"],
          hints: ["Mannen er kledd i kappe.", "Skulpt\u00f8rens navn er skrevet p\u00e5 sokkelen."]
        },
        {
          chapter: "Scene 5",
          text: "Mannen med n\u00f8kkelen av Auguste Rodin ble avduket i 1902. Rodin bes\u00f8kte etter alt \u00e5 d\u00f8mme aldri Oslo, men satte likevel sitt preg p\u00e5 den kulturelle debatten i byen. Blant dem som motarbeidet statuen var Gustav Vigeland \u2014 som laget statuen av Camilla Collett og hans ber\u00f8mte park. Et av argumentene var at kunst i Oslos offentlige rom burde forbeholdes norske kunstnere.\n\nF\u00f8lg n\u00e5 trikkesporet ned mot <b>Aker Brygge</b> og <b>R\u00e5dhusplassen</b>. P\u00e5 den store plassen vil du finne en mann som st\u00e5r ved siden av en kanon.\n\nHva heter han?",
          answers: ["tordenskiold", "peter tordenskiold", "peter wessel"],
          hints: ["Se etter statuen ved vannet p\u00e5 R\u00e5dhusplassen."]
        },
        {
          chapter: "Scene 6",
          text: "Peter Tordenskiold (1690\u20131720) var en marineoffiser i den dansk-norske marinen. Han ble ber\u00f8mt for en rekke slag mot Sverige. Under ett slag utenfor Norges s\u00f8rlige kyst i 1714 gikk skipet hans tom for ammunisjon. En representant ble sendt til fienden for \u00e5 l\u00e5ne krutt for \u00e5 fortsette kampen.\n\nSvaret: Nei!\n\nFra Tordenskiold, f\u00f8lg kaiene til h\u00f8yre langs <b>Akershus festning</b>. P\u00e5 venstre side vil du finne et antall tomme stoler.\n\nHva heter kunstneren?",
          answers: ["antony gormley", "gormley"],
          hints: ["Du m\u00e5 g\u00e5 litt.", "Installasjonen er ved enden av festningsveggen."]
        },
        {
          chapter: "Scene 7",
          text: "Under andre verdenskrig hjalp norske kollaborat\u00f8rer de tyske okkupasjonsstyrkene med \u00e5 deportere 772 j\u00f8der fra Norge. De fleste ble sendt til Auschwitz. Bare 37 overlevde.\n\nTuren er snart over. Fortsett langs kaiene forbi cruiseskipterminalen til du kommer til et sted med merkelige A-formede strukturer. Bygningene er inspirert av hjellene som brukes til \u00e5 t\u00f8rke torsk i Nord-Norge.\n\n<i>Visste du at Norges kaffekultur er knyttet til eksport av t\u00f8rrfisk til Brasil?</i>\n\nHva heter stedet?",
          answers: ["salt"],
          hints: ["Strukturene er rett ved cruiseskipterminalen.", "Det er ikke pepper."]
        }
      ],
      es: [
        {
          chapter: "Escena 1",
          text: "Dir\u00edgete a la plaza entre <b>Nationaltheateret</b> y la <b>estaci\u00f3n de metro Nationaltheateret</b>.\n\nEl Teatro Nacional fue construido en 1899. Primero fue financiado por donantes privados y no recibi\u00f3 apoyo del gobierno hasta 1928.\n\nEn la plaza encontrar\u00e1s una mujer sonriente con el pelo rizado. \u00bfC\u00f3mo se llama?",
          answers: ["wenche foss", "wenche"],
          hints: ["Est\u00e1 de pie cerca de la fuente."]
        },
        {
          chapter: "Escena 2",
          text: "Wenche Foss (1917\u20132011) fue una de las actrices m\u00e1s famosas de Noruega, con una carrera que comenz\u00f3 en 1935 y dur\u00f3 hasta 2009. Trabaj\u00f3 tanto en teatro como en cine.\n\nWenche Foss es una de las varias mujeres que han tenido una gran influencia en la ciudad. Sube la colina hasta <b>Slottsparken</b> (el Parque del Castillo). All\u00ed encontrar\u00e1s una estatua de una mujer rodeada de flores, mirando al suelo. \u00bfQui\u00e9n es ella?\n\n<i>De camino, puede que puedas ver el cambio de guardia a las 13:30.</i>",
          answers: ["camilla collett", "collett"],
          hints: ["Dir\u00edgete a la parte trasera izquierda del castillo."]
        },
        {
          chapter: "Escena 3",
          text: "Camilla Collett (1813\u20131895) fue una escritora noruega y una de las primeras en trabajar en el estilo del \u00abrealismo\u00bb, que busca describir la vida tal como es. Uno de sus libros, <i>Amtmandens D\u00f8tre</i>, trata sobre las dificultades a las que se enfrentan las mujeres. Vivi\u00f3 y trabaj\u00f3 en Oslo durante gran parte de su vida. La estatua fue creada por Gustav Vigeland, conocido principalmente por el Parque de Esculturas Vigeland entre Majorstua y Frogner.\n\nContin\u00faa por la calle detr\u00e1s del castillo y cruza la calle hacia <b>Parkveien 45</b>. Hoy en d\u00eda, la casa es la Casa de Representaci\u00f3n del Gobierno, donde el gobierno recibe a hu\u00e9spedes extranjeros. Originalmente, sin embargo, era propiedad de un comerciante local y ten\u00eda un nombre diferente.\n\n\u00bfC\u00f3mo se llamaba originalmente el edificio?",
          answers: ["villa parafina", "parafina"],
          hints: ["Busca la placa azul en la pared."]
        },
        {
          chapter: "Escena 4",
          text: "Antes de que Noruega encontrara su propio petr\u00f3leo, importadores como Frederik Sundt \u2014 que financi\u00f3 Villa Parafina en 1877 \u2014 abastec\u00edan al pa\u00eds de quer\u00f3seno (en noruego: Parafin). El quer\u00f3seno se usaba para iluminaci\u00f3n.\n\nDesde Villa Parafina, sigue la carretera a lo largo del parque del castillo hacia <b>Solli plass</b>. All\u00ed encontrar\u00e1s una estatua de un hombre sosteniendo una llave. La estatua est\u00e1 frente a lo que ahora es uno de los hoteles m\u00e1s elegantes de Oslo.\n\n\u00bfQui\u00e9n hizo la estatua?",
          answers: ["rodin", "auguste rodin"],
          hints: ["El hombre lleva una t\u00fanica.", "El nombre del escultor est\u00e1 escrito en la base de la estatua."]
        },
        {
          chapter: "Escena 5",
          text: "El Hombre con la Llave, hecho por Auguste Rodin, fue inaugurado en 1902. Se cree que Rodin nunca visit\u00f3 Oslo, pero la estatua provoc\u00f3 un animado debate cultural en la ciudad. Entre los que se opusieron estaba Gustav Vigeland \u2014 el mismo artista que cre\u00f3 la estatua de Camilla Collett y dise\u00f1\u00f3 el Parque Vigeland. \u00c9l y otros argumentaron que el arte en los espacios p\u00fablicos de Oslo deb\u00eda ser creado por artistas noruegos.\n\nAhora sigue la l\u00ednea del tranv\u00eda hacia <b>Aker Brygge</b> y <b>R\u00e5dhusplassen</b>. En la gran plaza, encontrar\u00e1s a un hombre de pie junto a un ca\u00f1\u00f3n.\n\n\u00bfC\u00f3mo se llama?",
          answers: ["tordenskiold", "peter tordenskiold", "peter wessel"],
          hints: ["Busca la estatua cerca del paseo mar\u00edtimo en R\u00e5dhusplassen."]
        },
        {
          chapter: "Escena 6",
          text: "Peter Tordenskiold (1690\u20131720) fue un oficial naval de la marina danesa-noruega. Se hizo famoso por una serie de batallas contra Suecia. Durante una batalla frente a la costa sur de Noruega en 1714, su barco se qued\u00f3 sin munici\u00f3n. Envi\u00f3 a un representante al enemigo para preguntar si pod\u00edan prestar algo de p\u00f3lvora para continuar combatiendo.\n\nLa respuesta: \u00a1No!\n\nDesde Tordenskiold, sigue los muelles a tu derecha a lo largo de la <b>Fortaleza de Akershus</b>. A tu izquierda encontrar\u00e1s una serie de sillas vac\u00edas.\n\n\u00bfCu\u00e1l es el nombre del artista?",
          answers: ["antony gormley", "gormley"],
          hints: ["Tienes que caminar un poco.", "La instalaci\u00f3n est\u00e1 al final de las murallas de la fortaleza."]
        },
        {
          chapter: "Escena 7",
          text: "Durante la Segunda Guerra Mundial, colaboradores noruegos ayudaron a las fuerzas de ocupaci\u00f3n alemanas a deportar 772 jud\u00edos de Noruega. La mayor\u00eda fueron enviados a Auschwitz. Solo 37 sobrevivieron.\n\nEl recorrido est\u00e1 casi terminado. Contin\u00faa por los muelles pasando la terminal de cruceros hasta llegar a un lugar con unas extra\u00f1as estructuras en forma de A. Los edificios est\u00e1n inspirados en los bastidores utilizados para secar el bacalao en el norte de Noruega.\n\n<i>\u00bfSab\u00eda que la cultura del caf\u00e9 en Noruega est\u00e1 relacionada con la exportaci\u00f3n de pescado seco a Brasil?</i>\n\n\u00bfC\u00f3mo se llama el lugar?",
          answers: ["salt"],
          hints: ["Las estructuras est\u00e1n justo al lado de la terminal de cruceros.", "No es pimienta."]
        }
      ],
      de: [
        {
          chapter: "Szene 1",
          text: "Begib dich auf den Platz zwischen dem <b>Nationaltheateret</b> und der <b>U-Bahn-Station Nationaltheateret</b>.\n\nDas Nationaltheater wurde 1899 erbaut, zun\u00e4chst durch private Finanzierung, und erhielt erst 1928 staatliche Unterst\u00fctzung.\n\nAuf dem Platz findest du eine l\u00e4chelnde Frau mit lockigem Haar. Wie hei\u00dft sie?",
          answers: ["wenche foss", "wenche"],
          hints: ["Sie steht in der N\u00e4he des Brunnens."]
        },
        {
          chapter: "Szene 2",
          text: "Wenche Foss (1917\u20132011) war eine der ber\u00fchmtesten Schauspielerinnen Norwegens, mit einer Karriere von 1935 bis 2009. Sie arbeitete sowohl am Theater als auch im Film.\n\nWenche Foss ist eine von mehreren Frauen, die gro\u00dfen Einfluss auf die Stadt hatten. Geh den H\u00fcgel hinauf zum <b>Slottsparken</b> (dem Schlosspark). Dort findest du eine Statue einer Frau, umgeben von Blumen, die zu Boden blickt. Wer ist sie?\n\n<i>Unterwegs kannst du vielleicht um 13:30 Uhr die Wachabl\u00f6sung beobachten!</i>",
          answers: ["camilla collett", "collett"],
          hints: ["Geh zur hinteren linken Seite des Schlosses."]
        },
        {
          chapter: "Szene 3",
          text: "Camilla Collett (1813\u20131895) war eine norwegische Schriftstellerin und eine fr\u00fche Pionierin des \u00bbRealismus\u00ab, der die Wirklichkeit so darstellen wollte, wie sie ist. Eines ihrer B\u00fccher, <i>Amtmandens D\u00f8tre</i>, behandelt die Schwierigkeiten des Frauseins. Sie lebte und arbeitete einen Gro\u00dfteil ihres Lebens in Oslo. Die Statue wurde von Gustav Vigeland geschaffen, der vor allem f\u00fcr den Vigeland-Skulpturenpark zwischen Majorstua und Frogner bekannt ist.\n\nGeh die Stra\u00dfe hinter dem Schloss hinunter und \u00fcberquere die Stra\u00dfe zur <b>Parkveien 45</b>. Heute ist das Haus das Repr\u00e4sentationshaus der Regierung. Urspr\u00fcnglich geh\u00f6rte es einem lokalen Kaufmann und war unter einem anderen Namen bekannt.\n\nWie war das Geb\u00e4ude urspr\u00fcnglich bekannt?",
          answers: ["villa parafina", "parafina"],
          hints: ["Suche die blaue Plakette an der Wand."]
        },
        {
          chapter: "Szene 4",
          text: "Bevor Norwegen sein eigenes \u00d6l fand, versorgten Erdolimporteure wie Frederik Sundt \u2014 der Villa Parafina 1877 finanzierte \u2014 das Land mit Kerosin (norw. Parafin), das zur Beleuchtung verwendet wurde.\n\nVon der Villa Parafina aus folge der Stra\u00dfe entlang des Schlossparks in Richtung <b>Solli plass</b>. Dort findest du eine Statue eines Mannes mit einem Schl\u00fcssel, vor einem der angesagtesten Hotels Oslos.\n\nWer hat die Statue gemacht?",
          answers: ["rodin", "auguste rodin"],
          hints: ["Der Mann tr\u00e4gt ein Gewand.", "Der Name des Bildhauers steht auf dem Sockel der Statue."]
        },
        {
          chapter: "Szene 5",
          text: "Der Mann mit dem Schl\u00fcssel von Auguste Rodin wurde 1902 enth\u00fcllt. Rodin selbst war nach allem, was bekannt ist, nie in Oslo, hatte aber dennoch einen Einfluss auf die kulturelle Debatte in der Stadt. Zu den Gegnern der Statue geh\u00f6rte Gustav Vigeland \u2014 der die Statue von Camilla Collett sowie seinen ber\u00fchmten Park schuf. Eines der Argumente war, dass Kunst im \u00f6ffentlichen Raum Oslos norwegischen K\u00fcnstlern vorbehalten sein sollte.\n\nFolge nun der Stra\u00dfenbahnlinie hinunter Richtung <b>Aker Brygge</b> und <b>R\u00e5dhusplassen</b>. Auf dem gro\u00dfen Platz findest du einen Mann, der neben einer Kanone steht.\n\nWie hei\u00dft er?",
          answers: ["tordenskiold", "peter tordenskiold", "peter wessel"],
          hints: ["Suche die Statue am Ufer auf dem R\u00e5dhusplassen."]
        },
        {
          chapter: "Szene 6",
          text: "Peter Tordenskiold (1690\u20131720) war ein Marineoffizier der d\u00e4nisch-norwegischen Marine. Er wurde nach einer Reihe von Schlachten gegen Schweden ber\u00fchmt. W\u00e4hrend einer Schlacht vor der S\u00fcdostk\u00fcste Norwegens im Jahr 1714 ging seinem Schiff die Munition aus. Er schickte einen Vertreter zum Feind, um Schie\u00dfpulver zu leihen.\n\nDie Antwort: Nein!\n\nFolge nun den Kaianlagen nach rechts entlang der <b>Festung Akershus</b>. Auf deiner linken Seite findest du eine Reihe leerer St\u00fchle.\n\nWie hei\u00dft der K\u00fcnstler?",
          answers: ["antony gormley", "gormley"],
          hints: ["Du musst ein St\u00fcck laufen.", "Die Installation befindet sich am Ende der Festungsmauern."]
        },
        {
          chapter: "Szene 7",
          text: "W\u00e4hrend des Zweiten Weltkriegs halfen norwegische Kollaborateure den deutschen Besatzungstruppen dabei, 772 Juden aus Norwegen zu deportieren. Die meisten wurden nach Auschwitz gebracht, und nur 37 \u00fcberlebten.\n\nDie Tour ist fast vorbei. Geh weiter entlang der Kaianlagen am Kreuzfahrtterminal vorbei, bis du einen Ort mit seltsam aussehenden A-f\u00f6rmigen Strukturen erreichst. Die Geb\u00e4ude sind von den Gestellen inspiriert, die in Nordnorwegen zum Trocknen von Kabelj\u00e4u verwendet werden.\n\n<i>Wusstest du, dass Norwegens Kaffeekultur mit dem Export von Trockenfisch nach Brasilien zusammenh\u00e4ngt?</i>\n\nWie hei\u00dft die Location?",
          answers: ["salt"],
          hints: ["Die Strukturen befinden sich direkt neben dem Kreuzfahrtterminal.", "Es ist nicht Pfeffer."]
        }
      ],
      fr: [
        {
          chapter: "Sc\u00e8ne 1",
          text: "Rendez-vous sur la place entre le <b>Nationaltheateret</b> et la <b>station de m\u00e9tro Nationaltheateret</b>.\n\nLe Th\u00e9\u00e2tre National a \u00e9t\u00e9 construit en 1899. Il a d\u2019abord \u00e9t\u00e9 financ\u00e9 par des fonds priv\u00e9s et n\u2019a re\u00e7u le soutien de l\u2019\u00c9tat qu\u2019en 1928.\n\nSur la place, vous trouverez une femme souriante aux cheveux boucl\u00e9s. Quel est son nom\u00a0?",
          answers: ["wenche foss", "wenche"],
          hints: ["Elle se trouve pr\u00e8s de la fontaine."]
        },
        {
          chapter: "Sc\u00e8ne 2",
          text: "Wenche Foss (1917\u20132011) \u00e9tait l\u2019une des actrices les plus c\u00e9l\u00e8bres de Norv\u00e8ge, avec une carri\u00e8re allant de 1935 \u00e0 2009. Elle a jou\u00e9 aussi bien au th\u00e9\u00e2tre qu\u2019au cin\u00e9ma.\n\nWenche Foss est l\u2019une des nombreuses femmes qui ont eu une influence significative sur la ville. Montez la colline jusqu\u2019au <b>Slottsparken</b> (le parc du ch\u00e2teau). L\u00e0, vous trouverez une statue d\u2019une femme entour\u00e9e de fleurs, le regard baiss\u00e9 vers le sol. Qui est-elle\u00a0?\n\n<i>En chemin, vous pourrez peut-\u00eatre assister \u00e0 la rel\u00e8ve de la garde \u00e0 13h30\u00a0!</i>",
          answers: ["camilla collett", "collett"],
          hints: ["Dirigez-vous vers l\u2019arri\u00e8re gauche du ch\u00e2teau."]
        },
        {
          chapter: "Sc\u00e8ne 3",
          text: "Camilla Collett (1813\u20131895) \u00e9tait une \u00e9crivaine norv\u00e9gienne et une pionnière du \u00ab\u00a0r\u00e9alisme\u00a0\u00bb, qui cherchait \u00e0 d\u00e9crire la r\u00e9alit\u00e9 telle qu\u2019elle est. L\u2019un de ses livres, <i>Amtmandens D\u00f8tre</i>, traite des difficult\u00e9s d\u2019\u00eatre une femme. Elle a v\u00e9cu et travaill\u00e9 \u00e0 Oslo pendant une grande partie de sa vie. La statue a \u00e9t\u00e9 r\u00e9alis\u00e9e par Gustav Vigeland, principalement connu pour le Parc de sculptures Vigeland entre Majorstua et Frogner.\n\nContinuez sur la route derri\u00e8re le ch\u00e2teau et traversez la rue vers le <b>Parkveien 45</b>. Aujourd\u2019hui, la maison est la r\u00e9sidence officielle du gouvernement. \u00c0 l\u2019origine, elle appartenait \u00e0 un commer\u00e7ant local et \u00e9tait connue sous un autre nom.\n\nQuel \u00e9tait le nom d\u2019origine du b\u00e2timent\u00a0?",
          answers: ["villa parafina", "parafina"],
          hints: ["Trouvez la plaque bleue sur le mur."]
        },
        {
          chapter: "Sc\u00e8ne 4",
          text: "Avant que la Norv\u00e8ge ne trouve son propre p\u00e9trole, des importateurs comme Frederik Sundt \u2014 qui a financ\u00e9 Villa Parafina en 1877 \u2014 approvisionnaient le pays en k\u00e9ros\u00e8ne (norv\u00e9gien\u00a0: Parafin), utilis\u00e9 pour l\u2019\u00e9clairage.\n\nDepuis Villa Parafina, suivez la route longeant le parc du ch\u00e2teau en direction de <b>Solli plass</b>. L\u00e0, vous trouverez une statue d\u2019un homme tenant une cl\u00e9, devant ce qui est aujourd\u2019hui l\u2019un des h\u00f4tels les plus branch\u00e9s d\u2019Oslo.\n\nQui a r\u00e9alis\u00e9 la statue\u00a0?",
          answers: ["rodin", "auguste rodin"],
          hints: ["L\u2019homme est v\u00eatu d\u2019une robe.", "Le nom du sculpteur est inscrit sur le socle de la statue."]
        },
        {
          chapter: "Sc\u00e8ne 5",
          text: "L\u2019Homme \u00e0 la cl\u00e9, d\u2019Auguste Rodin, a \u00e9t\u00e9 inaugur\u00e9 en 1902. Rodin lui-m\u00eame ne semble jamais \u00eatre venu \u00e0 Oslo, mais a n\u00e9anmoins marqu\u00e9 le d\u00e9bat culturel de la ville. Parmi ceux qui s\u2019opposaient \u00e0 la statue se trouvait Gustav Vigeland \u2014 qui a r\u00e9alis\u00e9 la statue de Camilla Collett ainsi que son c\u00e9l\u00e8bre parc. L\u2019un des arguments avanc\u00e9s \u00e9tait que l\u2019art dans les espaces publics d\u2019Oslo devrait \u00eatre r\u00e9serv\u00e9 aux artistes norv\u00e9giens.\n\nSuivez maintenant la ligne du tramway en descendant vers <b>Aker Brygge</b> et <b>R\u00e5dhusplassen</b>. Sur la grande place, vous trouverez un homme debout \u00e0 c\u00f4t\u00e9 d\u2019un canon.\n\nQuel est son nom\u00a0?",
          answers: ["tordenskiold", "peter tordenskiold", "peter wessel"],
          hints: ["Cherchez la statue pr\u00e8s du front de mer \u00e0 R\u00e5dhusplassen."]
        },
        {
          chapter: "Sc\u00e8ne 6",
          text: "Peter Tordenskiold (1690\u20131720) \u00e9tait un officier de la marine dano-norv\u00e9gienne devenu c\u00e9l\u00e8bre apr\u00e8s une s\u00e9rie de batailles contre la Su\u00e8de. Lors d\u2019une bataille au large de la c\u00f4te sud de la Norv\u00e8ge en 1714, son navire manquait de munitions et un repr\u00e9sentant fut envoy\u00e9 chez l\u2019ennemi pour emprunter de la poudre \u00e0 canon.\n\nLa r\u00e9ponse re\u00e7ue\u00a0: Non\u00a0!\n\nSuivez maintenant les quais sur votre droite le long de la <b>forteresse d\u2019Akershus</b>. Sur votre gauche, vous trouverez plusieurs chaises vides.\n\nQuel est le nom de l\u2019artiste\u00a0?",
          answers: ["antony gormley", "gormley"],
          hints: ["Il faut marcher un peu.", "L\u2019installation se trouve au bout des remparts de la forteresse."]
        },
        {
          chapter: "Sc\u00e8ne 7",
          text: "Pendant la Seconde Guerre mondiale, des Norv\u00e9giens ont aid\u00e9 les forces d\u2019occupation allemandes \u00e0 d\u00e9porter 772 Juifs de Norv\u00e8ge. La plupart ont \u00e9t\u00e9 envoy\u00e9s \u00e0 Auschwitz, et seulement 37 ont survv\u00e9cu.\n\nLa visite est presque termin\u00e9e. Continuez le long des quais en passant le terminal de croisi\u00e8re jusqu\u2019\u00e0 un endroit o\u00f9 vous verrez d\u2019\u00e9tranges structures en forme de A. Les b\u00e2timents sont inspir\u00e9s des s\u00e9choirs utilis\u00e9s pour faire s\u00e9cher la morue dans le nord de la Norv\u00e8ge.\n\n<i>Saviez-vous que la culture du caf\u00e9 en Norv\u00e8ge est li\u00e9e \u00e0 l\u2019exportation de poisson s\u00e9ch\u00e9 vers le Br\u00e9sil\u00a0?</i>\n\nQuel est le nom de ce lieu\u00a0?",
          answers: ["salt"],
          hints: ["Les structures se trouvent juste \u00e0 c\u00f4t\u00e9 du terminal de croisi\u00e8re.", "Ce n\u2019est pas du poivre."]
        }
      ]
    },

    becoming: {
      en: [
        {
          chapter: "Scene 1",
          text: "Make your way to the square at the bottom of <b>Karl Johans gate</b>, in front of the railway station building called <b>\u00d8stbanehallen</b>. There you will find an animal that is not native to Norway. Some people wonder how it ended up here.\n\nWhich animal is standing in the square?",
          answers: ["tiger"],
          hints: ["It is bigger than a cat.", "It is not a seagull."]
        },
        {
          chapter: "Scene 2",
          text: "Tigerstaden \u2014 Tiger City \u2014 is one of Oslo\u2019s most famous nicknames. The name comes from a poem by the great Norwegian author Bj\u00f8rnstjerne Bj\u00f8rnson, who also wrote the words to Norway\u2019s national anthem. The tiger represents the many dangers that can be found in a big city.\n\nMake your way to <b>Stortinget</b>, the Norwegian Parliament. The building opened in 1866, at a time when Norway was in a union controlled by Sweden. Directly in front of the parliament, on your left as you face the square, there is a modern statue of a man who played an important role in this union.\n\nWho is the statue of?",
          answers: ["christian fredrik", "kristian fredrik", "christian frederik", "kristian frederik", "christian august"],
          hints: ["He has a full body \u2014 not just a head and chest.", "He has a religious-sounding name."]
        },
        {
          chapter: "Scene 3",
          text: "In early 1814, Napoleon had lost the war and the Treaty of Kiel was signed. As often happens, the winners \u2014 including Sweden \u2014 took control of the losers\u2019 territory. Norway, which was then under Danish rule, was handed over to Sweden.\n\nAt the time, the man shown in the statue \u2014 Danish Crown Prince Christian VIII (1786\u20131848) \u2014 was the governor-general of Norway. He opposed the Swedish claim on the country. In short, he worked towards Norwegian independence. He first claimed the crown by right of birth, then agreed to be elected by the Norwegian Constituent Assembly on 17 May, taking the name Christian Frederik. That same day, the Norwegian constitution was signed.\n\nNorway did not become fully independent for another 91 years. It entered a union with Sweden in August 1814.\n\nPolitics alone does not build a nation. Continue walking down <b>Karl Johan</b>, past Spikersuppa, towards <b>Nationaltheatret</b> (the National Theatre). Explore the area around the building and look for a statue of a Frenchman among the Norwegians.\n\nWho is the character in the statue?",
          answers: ["jean de france"],
          hints: ["The statue is beardless.", "Walk around the theatre \u2014 it is in the square on the opposite side.", "He is close to a bus stop."]
        },
        {
          chapter: "Scene 4",
          text: "Jean de France was written by the Norwegian-Danish author Ludvig Holberg (1684\u20131754) in 1744, and was famously performed by Per Aabel at the National Theatre. The play is about a young Danish man \u2014 Hans Frandsen, aged 20 \u2014 who travels to Paris and becomes obsessed with fashion. When he returns home, his father rejects him and Danish society turns its back on him. Although the story is set in Denmark, it speaks to a broader Northern European attitude towards outside or \u201cforeign\u201d influence. Many people today still recognise this feeling \u2014 of being rejected for being different or \u201ctoo much.\u201d\n\nWhile some people fear standing out, our next character had no such concern. Make your way up to <b>Slottet</b> (the Royal Palace), where you will find a man on a horse.\n\n<i>If the Queen\u2019s Park is open, it is a lovely place for a short walk. The entrance is to the left of the castle. Open from 18 May to 1 October.</i>\n\nWho is he?",
          answers: ["karl johan", "jean baptiste bernadotte", "karl iii johan", "carl johan"],
          hints: ["The statue is quite large \u2014 it is hard to miss once you see the castle.", "Look for a small plaque at the base of the statue."]
        },
        {
          chapter: "Scene 5",
          text: "Karl Johan (1763\u20131844), the man who gave his name to the street you have been walking along, was originally a French general \u2014 Jean Baptiste Bernadotte. In 1810, he left Napoleon\u2019s army and became the Crown Prince of Sweden, a country that was then at war with France. In Sweden, he took the name Karl Johan. By 1814, he found himself in a position where he could become king of not one but two countries in Northern Europe.\n\nAs we saw earlier, the Norwegians preferred independence under Christian Frederik rather than joining a new union. War broke out, Norway was not well prepared, and the country entered a union with Sweden in 1814. Norway remained in that union until it finally became independent in 1905. Despite a difficult start to the relationship, the Norwegians came to like him.\n\nNow leave <b>Slottsparken</b> by walking down the hill and turning right. Cross the street and enter <b>7. juli plassen</b> (July 7th Square). There you will find a very tall man.\n\nWho is he?",
          answers: ["haakon vii", "haakon 7", "haakon den syvende", "king haakon"],
          hints: ["He is very tall.", "He was king of Norway when it became independent in 1905."]
        },
        {
          chapter: "Scene 6",
          text: "Haakon VII (1872\u20131957), born Prince Carl of Denmark, became King of Norway by election when the country gained independence from Sweden in 1905. A free country at last. As King, he took the name Haakon VII. He is the grandfather of the current King, Harald V.\n\nHaakon VII ruled a free Norway for 35 years. Then, on 9 April 1940, Germany invaded and forced the King and the government to flee the country. From exile, he became an important symbol of Norwegian resistance. His royal symbol \u2014 H7 \u2014 was painted on walls all across Norway. When he returned in 1945, large crowds were waiting to welcome him at R\u00e5dhusplassen.\n\nNow make your way to <b>R\u00e5dhusplassen</b> (the square in front of Oslo City Hall). In the large square, facing the sea, there are several statues. Find the statue of a man who appears ready for battle.\n\nWhat is his name?",
          answers: ["tordenskiold", "peter tordenskiold", "peter wessel"],
          hints: ["The statue is on the far side of the square, close to the fortress.", "The statue stands next to a cannon."]
        },
        {
          chapter: "Scene 7",
          text: "Peter Tordenskiold (1690\u20131720) was a naval officer in the Danish-Norwegian navy. He became famous for a series of battles against Sweden. During one battle off the southern coast of Norway in 1714, his ship ran out of ammunition. He sent a representative to the enemy to ask if they could borrow some gunpowder so they could continue fighting.\n\nThe answer: No!\n\nFrom Tordenskiold, turn right and walk along the waterfront. At the end of the fortress wall, you will find a number of empty chairs.\n\nWho is the artist?",
          answers: ["antony gormley", "gormley"],
          hints: ["If you are walking with walls on both sides, or have crossed the road to the left, you have gone too far."]
        },
        {
          chapter: "Scene 8",
          text: "During the Second World War, Norwegian collaborators helped the German occupying forces deport 772 Jews from Norway. Most were sent to Auschwitz. Only 37 survived. Most were taken from these very docks on German ships.\n\nCross the street and enter <b>Akershus Festning</b> (Akershus Fortress) through the small door in the fortress wall, behind the grass field.\n\nConstruction of the fortress began around the year 1300. It has played an important role in Norway\u2019s defence ever since. Today it serves as the administrative headquarters of the Norwegian armed forces.\n\nOnce inside at <b>Festningsplassen</b>, you will find a statue of a large woman and a smaller man.\n\n<i>There are many caf\u00e9s near Oslo City Hall. Why not stop at Erketunet Gardsbakeri for a coffee and something to eat?</i>\n\nWhat is the name of the artist?",
          answers: ["gunnar t. janson", "gunnar janson", "janson"],
          hints: ["The statue stands in the centre of a large open square, surrounded by trees."]
        },
        {
          chapter: "Scene 9",
          text: "The statue commemorates those who died during the German occupation of Norway, from 9 April 1940 to 8 May 1945. Akershus Fortress was used by the German forces during the war, and several resistance fighters were executed there. When peace came, Vidkun Quisling \u2014 who had declared himself head of state and served as a German puppet after the invasion \u2014 was also executed at the fortress.\n\nNational identity, in Norway and elsewhere, is shaped by conflict, struggle, negotiation, cultural expression and debate.\n\nLeave the fortress by following <b>Kirkegata</b>. Almost immediately, you will find an elegant building with green doors and an impressive entrance.\n\nWhat is the name of this building?",
          answers: ["gamle logen"],
          hints: ["If you reach a park, you have gone too far.", "The building is next to the Otto Ruge statue."]
        },
        {
          chapter: "Scene 10",
          text: "Gamle Logen \u2014 the Old Lodge \u2014 was completed in 1839. It was originally built as a Freemason lodge, concert hall and ballroom. In the mid-1850s, a wave of romantic nationalism swept through Norway. People were searching for what made Norway truly Norwegian, and the answer was often found in rural culture and traditions.\n\nIn 1849, the famous Norwegian violinist Ole Bull invited Myllargutten \u2014 the Miller Boy, whose real name was Torgeir Augundsson (1801\u20131872) \u2014 to perform at Gamle Logen for the urban elite. Myllarguten was known as an exceptional folk musician. Just before he was about to play, his violin case would not open. He became increasingly anxious. When he finally got his instrument out and began to play, all his fears disappeared.\n\nOne audience member later described the experience: <i>\u201cThe miller boy sat as one gazes upon the depths of a river, and like bridges suspended above, our seats shook at his rhythm.\u201d</i> He made quite an impression.\n\nFor the final stop, turn right and walk down <b>Glacisgata</b> until you reach the waterfront. Follow the waterfront until you find a large and architecturally striking building. It opened in 2008, cost 4.3 billion Norwegian kroner \u2014 about 86 million cups of Oslo coffee \u2014 and has since become a city landmark.\n\nWhat is the building?",
          answers: ["opera house", "opera", "operahuset", "den norske opera", "den norske opera og ballett"],
          hints: ["The answer can be the name of the building, or the activity that normally takes place there.", "When you find the building, make sure to walk up onto the roof before you continue."]
        }
      ],
      no: [],
      es: [],
      de: [],
      fr: []
    },

    greathits:  { en: [] },
    citycentre: { en: [] },
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
  _set('tour4Title',    T('tour4Title'));
  _set('tour4Desc',     T('tour4Desc'));
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
