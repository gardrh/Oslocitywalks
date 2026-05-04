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
      tagline:        'Walking tours · Oslo',
      navHome:        '⌂\u00a0\u00a0Home',
      navAbout:       'i\u00a0\u00a0About',
      navPrivacy:     '⚖\u00a0\u00a0Privacy Policy',
      eyebrow:        'Self-guided walking tours',
      headline:       'Discover Oslo on foot',
      frontIntro:     'Welcome to Los!, your guide to the people and places of Oslo. Los! navigates you through the streets of the city. You will be given riddles and clues in different places, and your job is to find the answer.',
      tipsLabel:      'Tips & Tricks',
      toursLabel:     'Walking Tours',
      tip1:           'The locations where you will find the answers are shown in <strong>bold</strong>. If you are not familiar with the city, enter these places into your preferred online maps service.',
      tip2:           'The duration of the tours is indicated, but may depend on your walking pace and possible stops along the way. We have made some recommendations on cafés and similar stops that might interest you.',
      tip3:           'At the end of the tour, we will show you how much time you spent. If you are part of a group, why not make it a competition!',
      soon:           'Soon',
      startTour:      'Start Tour',
      answer:         'Answer',
      hint:           '💡 Hint',
      answerPlaceholder: 'Type your answer here…',
      wrongAnswer:    'Not quite — try again, or tap Hint for a clue.',
      finishTour:     'Finish Tour →',
      yourTime:       'Your time',
      leaveFeedback:  'Leave feedback →',
      backHome:       'Back to home',
      tourComplete:   'Tour complete!',
      finishBody:     'Congratulations — you have finished the tour! Yet this is where your real adventure in Oslo begins. We have led you to one of the many wonderful places in the city centre; from here you can easily make your way to wherever you wish.<br><br>We hope you enjoyed this tour. If you would like to provide feedback, you may do so via this <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">feedback form</a>. Your feedback helps us improve both the app and the development of future tours.<br><br>Have a lovely stay in Oslo!',
      tour1Title:     'Westside/Seaside Tour',
      tour1Desc:      'The first tour starts by the Nationaltheatret and takes you around the central-western part of the city, and along the seaside. The tour lets you get to know local people and places. The walk is about 4–5 km, depending on your route, and takes about one hour — depending on your skills!',
      tour2Title:     'Oslo and Norway’s Becoming',
      tour2Desc:      'Starting at the bottom of Karl Johan, this tour takes you through the history of how Oslo and Norway became what they are today — through conflict, culture and independence. About 4–5 km, roughly one hour.',
      tour3Title:     'Oslo’s Greatest Hits',
      tour3Desc:      'Starting at the bottom of Karl Johan, this tour takes you through a selection of the key sights in Oslo. About 4–5 km, roughly one hour.',
      tour4Title:     'Oslo City Centre Tour',
      tour4Desc:      'Starting at the bottom of Karl Johan, this tour takes you through known and lesser-known sights throughout the city centre. About 4–5 km, roughly one hour.',
      tip4:           '⚠️ Translations are made from English by machine — certain errors might occur. If they bother you, please let us know!',
      aboutEyebrow:   'The project',
      aboutTitle:     'About Los!',
      aboutP1:        '<em>Los</em> is a Norwegian word for a maritime pilot: a person who helps ships navigate in local waters. In the Oslofjord, you may see los-boats helping large cruise ships find their way to the docks.',
      aboutP2:        'Los! is a <strong>free</strong>, self-guided walking tour app for Oslo. The idea is simple: show up, follow the clues, and discover the city’s history, people, and places at your own pace — no guide needed, no booking required.',
      aboutP3:        'Each tour takes you through <strong>real streets and public spaces</strong>, stopping at statues, buildings, and landmarks that each carry a story. The answers are always somewhere nearby — look around, read the environment, and enjoy the walk.',
      aboutP4:        'Los! is currently in a <strong>pilot stage</strong>. The first tour is live and more are in development. The app is <strong>free to use</strong>, but donations are very welcome.',
      aboutP5:        'Los! is developed by <strong>Gard Ringen Høibjerg</strong>, and the team is motivated by helping visitors discover the more interesting corners of the city. If you have feedback, spot an error, or would like to get in touch, let us know through our <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">feedback form</a>.',
      finishBody:     'Congratulations — you have finished the tour! Yet this is where your real adventure in Oslo begins. We have led you to one of the many wonderful places in the city centre; from here you can easily make your way to wherever you wish.<br><br>We hope you enjoyed this tour. If you would like to provide feedback, you may do so via our <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">feedback form</a>. Your feedback helps us improve both the app and the development of future tours.<br><br>Have a lovely stay in Oslo!',
    },
    no: {
      tagline:        'Byvandringer · Oslo',
      navHome:        '⌂\u00a0\u00a0Hjem',
      navAbout:       'i\u00a0\u00a0Om oss',
      navPrivacy:     '⚖\u00a0\u00a0Personvern',
      eyebrow:        'Selvguidede byvandringer',
      headline:       'Oppdag Oslo til fots',
      frontIntro:     'Velkommen til Los!, din guide til Oslos mennesker og steder. Los! navigerer deg gjennom byens gater. Du vil få gåter og ledetråder på forskjellige steder, og din oppgave er å finne svaret.',
      tipsLabel:      'Tips og triks',
      toursLabel:     'Byvandringer',
      tip1:           'Stedene der du finner svarene er vist i <strong>fet skrift</strong>. Hvis du ikke er kjent i byen, skriv inn stedene i din foretrukne kartjeneste.',
      tip2:           'Varigheten på turene er veiledende, men kan avhenge av gangfart og eventuelle stopp underveis. Vi har noen anbefalinger til kafeer og lignende steder som kanskje interesserer deg.',
      tip3:           'På slutten av turen viser vi deg hvor lang tid du brukte. Er dere en gruppe, kan dere gjøre det til en konkurranse!',
      soon:           'Snart',
      startTour:      'Start tur',
      answer:         'Svar',
      hint:           '💡 Hint',
      answerPlaceholder: 'Skriv svaret ditt her…',
      wrongAnswer:    'Ikke helt riktig — prøv igjen, eller trykk Hint for et tips.',
      finishTour:     'Fullfør tur →',
      yourTime:       'Din tid',
      leaveFeedback:  'Gi tilbakemelding →',
      backHome:       'Tilbake til start',
      tourComplete:   'Tur fullført!',
      finishBody:     'Gratulerer — du har fullført turen! Men dette er egentlig her eventyrene i Oslo begynner. Vi har ledet deg til et av byens mange fine steder i sentrum; herfra kan du enkelt finne veien videre dit du ønsker.<br><br>Vi håper du likte turen. Hvis du ønsker å gi tilbakemelding, kan du gjøre det via dette <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">skjemaet</a>. Tilbakemeldingene dine hjelper oss med å forbedre appen og utvikle fremtidige turer.<br><br>God tur i Oslo!',
      tour1Title:     'Sentrumsturen',
      tour1Desc:      'Den første turen starter ved Nationaltheatret og tar deg rundt i den sentrum-vestlige delen av byen. Turen lar deg bli kjent med lokale mennesker og steder. Ruten er ca. 4–5 km, avhengig av veivalg, og tar omtrent én time — avhengig av ferdighetene dine!',
      tour2Title:     'Oslo og Norges tilblivelse',
      tour2Desc:      'Fra bunnen av Karl Johan tar denne turen deg gjennom historien om hvordan Oslo og Norge ble det de er i dag — gjennom konflikt, kultur og selvstendighet. Ca. 4–5 km, omtrent én time.',
      tour3Title:     'Oslos store høydepunkter',
      tour3Desc:      'Fra bunnen av Karl Johan tar denne turen deg gjennom et utvalg av byens viktigste severdigheter. Ca. 4–5 km, omtrent én time.',
      tour4Title:     'Oslo sentrum-turen',
      tour4Desc:      'Fra bunnen av Karl Johan tar denne turen deg gjennom kjente og mindre kjente steder i sentrum. Ca. 4–5 km, omtrent én time.',
      tip4:           '⚠️ Oversettelser er gjort fra engelsk ved hjelp av maskin — visse feil kan forekomme. Si fra om noe er rart!',
      aboutEyebrow:   'Prosjektet',
      aboutTitle:     'Om Los!',
      aboutP1:        '<em>Los</em> er et norsk ord for en person som hjelper skip med å navigere i lokale farvann. I Oslofjorden kan du se los-båter hjelpe store cruiseskip til kai.',
      aboutP2:        'Los! er en <strong>gratis</strong> selvguidet byvandring for Oslo. Idéen er enkel: møt opp, følg ledetrådene og oppdag byens historie, mennesker og steder i ditt eget tempo — ingen guide nødvendig, ingen bestilling.',
      aboutP3:        'Hver tur tar deg gjennom <strong>ekte gater og offentlige rom</strong>, med stopp ved statuer, bygninger og landemerker som alle bærer en historie. Svarene er alltid i nærheten — se deg rundt og nyt turen.',
      aboutP4:        'Los! er for øyeblikket i en <strong>pilotfase</strong>. Den første turen er live og flere er under utvikling. Appen er <strong>gratis å bruke</strong>, men donasjoner mottas med takk.',
      aboutP5:        'Los! er utviklet av <strong>Gard Ringen Høibjerg</strong>. Har du tilbakemeldinger, finner du feil, eller ønsker å ta kontakt, gi oss gjerne beskjed via vårt <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">tilbakemeldingsskjema</a>.',
      finishBody:     'Gratulerer — du har fullført turen! Men dette er egentlig her eventyrene i Oslo begynner. Vi har ledet deg til et av byens mange flotte steder i sentrum; herfra kan du enkelt finne veien videre dit du ønsker.<br><br>Vi håper du likte turen. Tilbakemeldinger mottas gjerne via vårt <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">skjema</a>. God tur i Oslo!',
    },
    es: {
      tagline:        'Rutas a pie · Oslo',
      navHome:        '⌂\u00a0\u00a0Inicio',
      navAbout:       'i\u00a0\u00a0Acerca de',
      navPrivacy:     '⚖\u00a0\u00a0Privacidad',
      eyebrow:        'Rutas autoguiadas a pie',
      headline:       'Descubre Oslo a pie',
      frontIntro:     'Bienvenido a Los!, tu guía por las personas y los lugares de Oslo. Los! te lleva por las calles de la ciudad. Recibirás acertijos y pistas en diferentes lugares, y tu misión es encontrar la respuesta.',
      tipsLabel:      'Consejos',
      toursLabel:     'Rutas',
      tip1:           'Los lugares donde encontrarás las respuestas se muestran en <strong>negrita</strong>. Si no conoces la ciudad, introduce estos lugares en tu aplicación de mapas preferida.',
      tip2:           'La duración de las rutas es orientativa y puede variar según tu ritmo de marcha y las paradas que realices. Hemos incluido algunas recomendaciones de cafeterías y lugares similares que podrían interesarte.',
      tip3:           '¡Al final del recorrido te mostraremos cuánto tiempo has tardado. Si sois un grupo, ¿por qué no convertirlo en una competición?',
      soon:           'Próximamente',
      startTour:      'Comenzar ruta',
      answer:         'Responder',
      hint:           '💡 Pista',
      answerPlaceholder: 'Escribe tu respuesta aquí…',
      wrongAnswer:    'No es correcto — inténtalo de nuevo o pulsa Pista para obtener una ayuda.',
      finishTour:     'Finalizar ruta →',
      yourTime:       'Tu tiempo',
      leaveFeedback:  'Dejar comentarios →',
      backHome:       'Volver al inicio',
      tourComplete:   '¡Ruta completada!',
      finishBody:     '¡Enhorabuena, has completado la ruta! Pero aquí es donde comienza tu verdadera aventura en Oslo. Te hemos llevado a uno de los muchos lugares maravillosos del centro de la ciudad; desde aquí puedes dirigirte fácilmente a donde desees.<br><br>Esperamos que hayas disfrutado de la ruta. Si deseas dejarnos tus comentarios, puedes hacerlo a través de este <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">formulario</a>. Tus comentarios nos ayudan a mejorar la aplicación y a desarrollar futuras rutas.<br><br>¡Que disfrutes de tu estancia en Oslo!',
      tour1Title:     'Ruta por el centro',
      tour1Desc:      'La primera ruta comienza junto al Nationaltheatret y te lleva por la zona centro-occidental de la ciudad. La ruta te permite conocer a personas y lugares locales. El recorrido es de unos 4–5 km, según el camino que elijas, y dura aproximadamente una hora.',
      tour2Title:     'Oslo y el nacimiento de Noruega',
      tour2Desc:      'Desde el final de Karl Johan, esta ruta te lleva por la historia de cómo Oslo y Noruega llegaron a ser lo que son hoy — a través del conflicto, la cultura y la independencia. Unos 4–5 km, aproximadamente una hora.',
      tour3Title:     'Lo mejor de Oslo',
      tour3Desc:      'Desde el final de Karl Johan, esta ruta te lleva por una selección de los principales puntos de interés de Oslo. Unos 4–5 km, aproximadamente una hora.',
      tour4Title:     'Ruta por el centro de Oslo',
      tour4Desc:      'Desde el final de Karl Johan, esta ruta recorre lugares conocidos y poco conocidos del centro de la ciudad. Unos 4–5 km, aproximadamente una hora.',
      tip4:           '⚠️ Las traducciones se realizan desde el inglés mediante máquina — pueden producirse ciertos errores. ¡Comúnicanos si algo te molesta!',
      aboutEyebrow:   'El proyecto',
      aboutTitle:     'Acerca de Los!',
      aboutP1:        '<em>Los</em> es una palabra noruega que designa al práctico marítimo: la persona que ayuda a los barcos a navegar por aguas locales. En el fiordo de Oslo, puede verse cómo los barcos prácticos guían a los grandes cruceros hasta el muelle.',
      aboutP2:        'Los! es una aplicación <strong>gratuita</strong> de visitas autoguiadas a pie por Oslo. La idea es sencilla: preséntate, sigue las pistas y descubre la historia, las personas y los lugares de la ciudad a tu propio ritmo.',
      aboutP3:        'Cada ruta te lleva por <strong>calles reales y espacios públicos</strong>, deteniéndose en estatuas, edificios y lugares emblemáticos. Las respuestas siempre están cerca — mira a tu alrededor y disfruta del paseo.',
      aboutP4:        'Los! se encuentra actualmente en una <strong>fase piloto</strong>. La primera ruta está activa y se están desarrollando más. La app es <strong>gratuita</strong>, pero las donaciones son muy bienvenidas.',
      aboutP5:        'Los! está desarrollada por <strong>Gard Ringen Høibjerg</strong>. Si tienes comentarios o quieres ponerte en contacto, háznoslo saber a través de nuestro <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">formulario de comentarios</a>.',
      finishBody:     '¡Enhorabuena — has completado la ruta! Pero aquí es donde comienza tu verdadera aventura en Oslo. Te hemos llevado a uno de los muchos lugares maravillosos del centro de la ciudad.<br><br>Esperamos que hayas disfrutado de la ruta. Puedes dejarnos tus comentarios a través de nuestro <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">formulario</a>. ¡Que disfrutes de tu estancia en Oslo!',
    },
    de: {
      tagline:        'Stadtführungen zu Fuß · Oslo',
      navHome:        '⌂\u00a0\u00a0Startseite',
      navAbout:       'i\u00a0\u00a0Über uns',
      navPrivacy:     '⚖\u00a0\u00a0Datenschutz',
      eyebrow:        'Selbstgeführte Stadtrundgänge',
      headline:       'Oslo zu Fuß entdecken',
      frontIntro:     'Willkommen bei Los!, deinem Führer durch die Menschen und Orte Oslos. Los! navigiert dich durch die Straßen der Stadt. Du erhältst Rätsel und Hinweise an verschiedenen Orten, und deine Aufgabe ist es, die Antwort zu finden.',
      tipsLabel:      'Tipps & Hinweise',
      toursLabel:     'Stadtrundgänge',
      tip1:           'Die Orte, an denen du die Antworten findest, sind <strong>fett gedruckt</strong>. Falls du die Stadt nicht kennst, gib diese Orte in deinen bevorzugten Kartendienst ein.',
      tip2:           'Die angegebene Dauer der Touren ist ein Richtwert und kann je nach Gehtempo und möglichen Pausen variieren. Wir haben einige Empfehlungen für Cafés und ähnliche Orte zusammengestellt, die dich interessieren könnten.',
      tip3:           'Am Ende der Tour zeigen wir dir, wie lange du gebraucht hast. Wenn ihr eine Gruppe seid, macht doch einen Wettbewerb daraus!',
      soon:           'Demnächst',
      startTour:      'Tour starten',
      answer:         'Antworten',
      hint:           '💡 Hinweis',
      answerPlaceholder: 'Gib deine Antwort hier ein…',
      wrongAnswer:    'Nicht ganz richtig — versuch es erneut oder tippe auf Hinweis für einen Tipp.',
      finishTour:     'Tour beenden →',
      yourTime:       'Deine Zeit',
      leaveFeedback:  'Feedback hinterlassen →',
      backHome:       'Zurück zur Startseite',
      tourComplete:   'Tour abgeschlossen!',
      finishBody:     'Herzlichen Glückwunsch — du hast die Tour abgeschlossen! Aber hier beginnt dein eigentliches Abenteuer in Oslo. Wir haben dich zu einem der vielen schönen Orte im Stadtzentrum geführt; von hier aus kannst du leicht deinen Weg dorthin finden, wohin du möchtest.<br><br>Wir hoffen, dass dir die Tour gefallen hat. Wenn du uns Feedback hinterlassen möchtest, kannst du das über dieses <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">Formular</a> tun. Dein Feedback hilft uns, die App zu verbessern und zukünftige Touren zu entwickeln.<br><br>Genieß deinen Aufenthalt in Oslo!',
      tour1Title:     'Stadtzentrum-Tour',
      tour1Desc:      'Die erste Tour beginnt am Nationaltheatret und führt dich durch den zentral-westlichen Teil der Stadt. Unterwegs lernst du Menschen und Orte kennen. Der Weg ist etwa 4–5 km lang und dauert ungefähr eine Stunde.',
      tour2Title:     'Oslo und Norwegens Werden',
      tour2Desc:      'Vom unteren Ende des Karl Johan aus führt dich diese Tour durch die Geschichte, wie Oslo und Norwegen wurden, was sie heute sind — durch Konflikt, Kultur und Unabhängigkeit. Ca. 4–5 km, ungefähr eine Stunde.',
      tour3Title:     'Oslos größte Highlights',
      tour3Desc:      'Vom unteren Ende des Karl Johan aus nimmt dich diese Tour mit zu einer Auswahl der wichtigsten Sehenswürdigkeiten Oslos. Ca. 4–5 km, ungefähr eine Stunde.',
      tour4Title:     'Oslo Stadtzentrum-Tour',
      tour4Desc:      'Vom unteren Ende des Karl Johan aus führt dich diese Tour durch bekannte und weniger bekannte Orte im Stadtzentrum. Ca. 4–5 km, ungefähr eine Stunde.',
      tip4:           '⚠️ Übersetzungen werden maschinell aus dem Englischen erstellt — es können Fehler auftreten. Sag uns Bescheid!',
      aboutEyebrow:   'Das Projekt',
      aboutTitle:     'Über Los!',
      aboutP1:        '<em>Los</em> ist ein norwegisches Wort für einen Lotsen: eine Person, die Schiffe durch lokale Gewässer navigiert. Im Oslofjord kann man los-Boote sehen, die großen Kreuzfahrtschiffen den Weg zum Hafen weisen.',
      aboutP2:        'Los! ist eine <strong>kostenlose</strong> App für selbstgeführte Stadtrundgänge in Oslo. Komm vorbei, folge den Hinweisen und entdecke die Geschichte der Stadt in deinem eigenen Tempo.',
      aboutP3:        'Jede Tour führt dich durch <strong>echte Straßen und öffentliche Räume</strong> mit Stopps an Statuen, Gebäuden und Wahrzeichen. Die Antworten sind immer in der Nähe — schau dich um und genieß den Spaziergang.',
      aboutP4:        'Los! befindet sich derzeit in einer <strong>Pilotphase</strong>. Die erste Tour ist live und weitere sind in Entwicklung. Die App ist <strong>kostenlos</strong>, aber Spenden sind sehr willkommen.',
      aboutP5:        'Los! wurde von <strong>Gard Ringen Høibjerg</strong> entwickelt. Feedback oder Fragen gerne über unser <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">Feedback-Formular</a>.',
      finishBody:     'Herzlichen Glückwunsch — du hast die Tour abgeschlossen! Aber hier beginnt dein eigentliches Abenteuer in Oslo. Wir haben dich zu einem der vielen schönen Orte im Stadtzentrum geführt.<br><br>Wir hoffen, dass dir die Tour gefallen hat. Feedback gerne über unser <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">Formular</a>. Genieß deinen Aufenthalt in Oslo!',
    },
    fr: {
      tagline:        'Visites à pied · Oslo',
      navHome:        '⌂\u00a0\u00a0Accueil',
      navAbout:       'i\u00a0\u00a0À propos',
      navPrivacy:     '⚖\u00a0\u00a0Confidentialité',
      eyebrow:        'Visites autoguides à pied',
      headline:       'Découvrez Oslo à pied',
      frontIntro:     'Bienvenue sur Los! ! votre guide des personnes et des lieux d’Oslo. Los! vous guide à travers les rues de la ville. Vous recevrez des énigmes et des indices à différents endroits, et votre mission est de trouver la réponse.',
      tipsLabel:      'Conseils pratiques',
      toursLabel:     'Visites',
      tip1:           'Les lieux où vous trouverez les réponses sont indiqués en <strong>gras</strong>. Si vous ne connaissez pas la ville, saisissez ces lieux dans votre application de cartographie préférée.',
      tip2:           'La durée des visites est indicative et peut varier selon votre rythme de marche et les arrêts éventuels. Nous avons sélectionné quelques cafés et lieux similaires qui pourraient vous intéresser.',
      tip3:           'À la fin de la visite, nous vous indiquerons combien de temps vous avez mis. Si vous êtes en groupe, pourquoi ne pas en faire une compétition\u00a0?',
      soon:           'Bientôt',
      startTour:      'Commencer la visite',
      answer:         'Répondre',
      hint:           '💡 Indice',
      answerPlaceholder: 'Saisissez votre réponse ici…',
      wrongAnswer:    'Pas tout à fait — réessayez ou appuyez sur Indice pour obtenir un conseil.',
      finishTour:     'Terminer la visite →',
      yourTime:       'Votre temps',
      leaveFeedback:  'Laisser un avis →',
      backHome:       'Retour à l\'accueil',
      tourComplete:   'Visite terminée\u00a0!',
      finishBody:     'Félicitations — vous avez terminé la visite\u00a0! Mais c\'est ici que commence votre véritable aventure à Oslo. Nous vous avons conduit vers l\'un des nombreux endroits merveilleux du centre-ville\u00a0; de là, vous pouvez facilement vous rendre où vous le souhaitez.<br><br>Nous espérons que cette visite vous a plu. Si vous souhaitez nous faire part de vos commentaires, vous pouvez le faire via ce <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">formulaire</a>. Vos retours nous aident à améliorer l\'application et à développer de futures visites.<br><br>Profitez bien de votre séjour à Oslo\u00a0!',
      tour1Title:     'Visite du centre-ville',
      tour1Desc:      'La première visite part du Nationaltheatret et vous emmène dans la partie centre-ouest de la ville. Vous ferez connaissance avec des personnages et des lieux locaux. Le parcours fait environ 4–5 km selon votre itinéraire et dure environ une heure.',
      tour2Title:     'Oslo et la naissance de la Norvège',
      tour2Desc:      'Depuis le bas de Karl Johan, cette visite vous guide à travers l’histoire d’Oslo et de la Norvège — conflits, culture et indépendance. Environ 4–5 km, une heure environ.',
      tour3Title:     'Les incontournables d’Oslo',
      tour3Desc:      'Depuis le bas de Karl Johan, cette visite vous emène à travers une sélection des principaux sites d’Oslo. Environ 4–5 km, une heure environ.',
      tour4Title:     'Visite du centre-ville d’Oslo',
      tour4Desc:      'Depuis le bas de Karl Johan, cette visite vous fait découvrir des sites connus et moins connus du centre-ville. Environ 4–5 km, une heure environ.',
      tip4:           '⚠️ Les traductions sont réalisées depuis l’anglais par machine — certaines erreurs peuvent survenir. N’hésitez pas à nous le signaler !',
      aboutEyebrow:   'Le projet',
      aboutTitle:     'À propos de Los!',
      aboutP1:        '<em>Los</em> est un mot norvégien désignant le pilote maritime. Dans le fjord d’Oslo, on peut voir des bateaux-pilotes guider les grands navires de croisière jusqu’aux quais.',
      aboutP2:        'Los! est une application de visites <strong>gratuites</strong> et autoguides à pied à Oslo. Venez, suivez les indices et découvrez la ville à votre rythme.',
      aboutP3:        'Chaque visite vous mène à travers de <strong>vraies rues et espaces publics</strong>, avec des arrêts à des statues, des bâtiments et des monuments. Les réponses sont toujours à proximité — profitez de la balade.',
      aboutP4:        'Los! est actuellement en <strong>phase pilote</strong>. La première visite est en ligne et d’autres sont en développement. L’app est <strong>gratuite</strong>, mais les dons sont les bienvenus.',
      aboutP5:        'Los! est développé par <strong>Gard Ringen Høibjerg</strong>. Pour tout commentaire, contactez-nous via notre <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">formulaire de retour</a>.',
      finishBody:     'Félicitations — vous avez terminé la visite ! Mais c’est ici que commence votre véritable aventure à Oslo. Nous vous avons conduit vers l’un des nombreux endroits merveilleux du centre-ville.<br><br>Vos retours sont les bienvenus via notre <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">formulaire</a>. Profitez bien de votre séjour à Oslo !',
    }
  },

  /* ── SCENE DATA BY LANGUAGE ── */
  scenes: {
    seaside: {
      en: [
        {
          chapter: "Scene 1",
          text: "Make your way to the plaza between <b>Nationaltheateret</b> and <b>Nationaltheateret T-bane station</b>.\n\nThe National Theatre was built in 1899. It was originally built through private financing and first received government support in 1928.\n\nAt the plaza you will find a smiling woman with curly hair. What is her name?",
          answers: ["wenche foss", "wenche"],
          hints: ["She is standing close to the fountain."]
        },
        {
          chapter: "Scene 2",
          text: "Wenche Foss (1917–2011) was one of the most famous actresses in Norway, with a career starting in 1935 and lasting until 2009. She performed in both theatre and film.\n\nWenche Foss is one of several women who have had a significant influence on the city. Make your way up the castle hill to <b>Slottsparken</b> (the castle park). There, you will find a statue of a woman surrounded by flowers, staring into the ground. Who is she?\n\n<i>On your way, you might be able to see the changing of the guards at 13:30!</i>",
          answers: ["camilla collett", "collett"],
          hints: ["Make your way to the rear-left of the castle."]
        },
        {
          chapter: "Scene 3",
          text: "Camilla Collett was a Norwegian writer and an early pioneer of the genre of \u201crealism\u201d, which sought to describe reality as it is. One of her books, <i>Amtmandens D\u00f8tre</i>, deals with the difficulties of being a woman. She lived and worked in Oslo for a large part of her life. The statue was made by Gustav Vigeland, primarily known for the Vigeland Sculpture Park between Majorstua and Frogner.\n\nContinue down the road behind the castle and walk across the street to <b>Parkveien 45</b>. Today, the house is the Government Representation House (Statens representasjonsbolig), where the government welcomes foreign dignitaries. Originally, however, it was owned by a local merchant and known under a different name.\n\nWhat was the building originally known as?",
          answers: ["villa parafina", "parafina"],
          hints: ["Find the blue plaque hanging on the wall."]
        },
        {
          chapter: "Scene 4",
          text: "Before Norway found its own oil, petroleum importers like Frederik Sundt \u2014 who financed Villa Parafina in 1877 \u2014 supplied the country with kerosene (Norwegian: Parafin), which was used for illumination.\n\nFrom Villa Parafina, follow the road stretching along the castle park towards <b>Solli plass</b>. There, you will find a statue of a man with a key, standing in front of what is now one of the hippest hotels in Oslo.\n\nWho made the statue?",
          answers: ["rodin", "auguste rodin"],
          hints: ["The man is dressed in a robe.", "The name of the sculptor is written at the base of the statue."]
        },
        {
          chapter: "Scene 5",
          text: "The Man with the Key, by Auguste Rodin, was unveiled in 1902. Rodin himself was by all accounts never in Oslo, but nevertheless made an impact on the cultural debate in the city. Amongst those opposed to the statue was Gustav Vigeland \u2014 who made the statue of Camilla Collett as well as his famous park. One of the arguments was that art in the public spaces of Oslo should be reserved for Norwegian artists.\n\nNow, follow the tram line going down towards <b>Aker Brygge</b> and <b>R\u00e5dhusplassen</b>. At the big plaza, you will find a man standing next to a cannon. Ask a friendly local to make sure you are following the right tram line!\n\nWhat is his name?",
          answers: ["tordenskiold", "peter tordenskiold", "peter wessel"],
          hints: ["Look for the statue near the waterfront at R\u00e5dhusplassen."]
        },
        {
          chapter: "Scene 6",
          text: "Peter Tordenskiold (1690\u20131720) was a naval officer in the Danish-Norwegian navy who became famous following a series of battles with Sweden. During one battle off the southern coast of Norway in 1714, his ship was running out of ammunition, and a representative was sent to the enemy to request borrowing gunpowder. The answer received: No!\n\nNow, follow the docks to your right along the <b>Akershus Fortress</b> towards a dark period of Norway\u2019s recent history. On your left, you will find a number of empty chairs.\n\nWhat is the name of the artist?",
          answers: ["antony gormley", "gormley"],
          hints: ["You have to walk for a bit.", "The installation is at the end of the fortress walls."]
        },
        {
          chapter: "Scene 7",
          text: "During the Second World War, Norwegians assisted the German occupying forces in deporting 772 Jews from Norway. Most of them were sent to Auschwitz, and only 37 survived.\n\nThe tour is almost over. Continue along the docks past the cruise ship terminal until you reach a place with strange-looking A-framed structures. The buildings are inspired by the racks used to dry cod in Northern Norway.\n\n<i>Did you know Norway\u2019s coffee culture is connected with the exportation of dried fish to Brazil?</i>\n\nWhat is the name of the venue?",
          answers: ["salt"],
          hints: ["The structures are right next to the cruise ship terminal.", "It\u2019s not pepper."]
        }
      ],
      no: [
        {
          chapter: "Scene 1",
          text: "Gå til plassen mellom <b>Nationaltheateret</b> og <b>Nationaltheateret T-banestasjon</b>.\n\nNationaltheatret ble bygget i 1899. Det ble opprinnelig finansiert privat og fikk først statsstøtte i 1928.\n\nPå plassen vil du finne en smilende kvinne med krøllete hår. Hva heter hun?",
          answers: ["wenche foss", "wenche"],
          hints: ["Hun står nær fontenen."]
        },
        {
          chapter: "Scene 2",
          text: "Wenche Foss (1917–2011) var en av Norges mest berømte skuespillere, med en karriere fra 1935 til 2009. Hun opptrådte både på teater og i film.\n\nWenche Foss er en av flere kvinner som har hatt stor innflytelse på byen. Gå opp slottsbakken til <b>Slottsparken</b>. Der vil du finne en statue av en kvinne omgitt av blomster, med blikket mot bakken. Hvem er hun?\n\n<i>På veien kan du kanskje se vaktskiftet klokken 13:30!</i>",
          answers: ["camilla collett", "collett"],
          hints: ["Gå til baksiden til venstre av slottet."]
        },
        {
          chapter: "Scene 3",
          text: "Camilla Collett var en norsk forfatter og en tidlig pioner innen \u00abrealismen\u00bb, som søkte å skildre virkeligheten slik den er. En av hennes bøker, <i>Amtmandens Døtre</i>, handler om vanskelighetene ved å være kvinne. Hun levde og arbeidet i Oslo store deler av livet. Statuen er laget av Gustav Vigeland, kjent for Vigelandsanlegget mellom Majorstua og Frogner.\n\nKontinuer ned veien bak slottet og gå over gaten til <b>Parkveien 45</b>. I dag er huset Statens representasjonsbolig, der regjeringen tar imot utenlandske statsgjester. Opprinnelig var det eid av en lokal kjøpmann og kjent under et annet navn.\n\nHva het bygningen opprinnelig?",
          answers: ["villa parafina", "parafina"],
          hints: ["Finn den blå plaketten på veggen."]
        },
        {
          chapter: "Scene 4",
          text: "Før Norge fant sin egen olje, leverte petroleumsimportører som Frederik Sundt \u2014 som finansierte Villa Parafina i 1877 \u2014 landet med parafin, som ble brukt til belysning.\n\nFra Villa Parafina, følg veien langs slottsparken mot <b>Solli plass</b>. Der vil du finne en statue av en mann med en nøkkel, foran det som nå er et av Oslos hippeste hoteller.\n\nHvem laget statuen?",
          answers: ["rodin", "auguste rodin"],
          hints: ["Mannen er kledd i kappe.", "Skulptørens navn er skrevet på sokkelen."]
        },
        {
          chapter: "Scene 5",
          text: "Mannen med nøkkelen av Auguste Rodin ble avduket i 1902. Rodin besøkte etter alt å dømme aldri Oslo, men satte likevel sitt preg på den kulturelle debatten i byen. Blant dem som motarbeidet statuen var Gustav Vigeland \u2014 som laget statuen av Camilla Collett og hans berømte park. Et av argumentene var at kunst i Oslos offentlige rom burde forbeholdes norske kunstnere.\n\nFølg nå trikkesporet ned mot <b>Aker Brygge</b> og <b>Rådhusplassen</b>. På den store plassen vil du finne en mann ved siden av en kanon. Spør en hyggelig lokal om du er på riktig trikkelinje!\n\nHva heter han?",
          answers: ["tordenskiold", "peter tordenskiold", "peter wessel"],
          hints: ["Se etter statuen ved vannet på Rådhusplassen."]
        },
        {
          chapter: "Scene 6",
          text: "Peter Tordenskiold (1690\u20131720) var en marineoffiser i den dansk-norske marinen som ble berømt etter en rekke slag mot Sverige. Under ett slag utenfor Norges sørlige kyst i 1714 gikk skipet hans tom for ammunisjon, og en representant ble sendt til fienden for å låne krutt. Svaret: Nei!\n\nFølg nå kaien til høyre langs <b>Akershus festning</b> mot en mørk periode i Norges nyere historie. På venstre side vil du finne et antall tomme stoler.\n\nHva heter kunstneren?",
          answers: ["antony gormley", "gormley"],
          hints: ["Du må gå litt.", "Installasjonen er ved enden av festningsveggen."]
        },
        {
          chapter: "Scene 7",
          text: "Under andre verdenskrig hjalp nordmenn de tyske okkupasjonsstyrkene med å deportere 772 jøder fra Norge. De fleste ble sendt til Auschwitz, og bare 37 overlevde.\n\nTuren er snart over. Fortsett langs kaien forbi cruiseskipterminalen til du kommer til et sted med merkelige A-formede strukturer. Bygningene er inspirert av hjellene som brukes til å tørke torsk i Nord-Norge.\n\n<i>Visste du at Norges kaffekulturen er knyttet til eksport av tørrfisk til Brasil?</i>\n\nHva heter stedet?",
          answers: ["salt"],
          hints: ["Strukturene er rett ved cruiseskipterminalen.", "Det er ikke pepper."]
        }
      ],
      es: [
        {
          chapter: "Escena 1",
          text: "Dirígete a la plaza entre <b>Nationaltheateret</b> y la <b>estación de metro Nationaltheateret</b>.\n\nEl Teatro Nacional fue construido en 1899. Originalmente se financió con fondos privados y no recibió apoyo del gobierno hasta 1928.\n\nEn la plaza encontrarás una mujer sonriente con el pelo rizado. ¿Cómo se llama?",
          answers: ["wenche foss", "wenche"],
          hints: ["Está de pie cerca de la fuente."]
        },
        {
          chapter: "Escena 2",
          text: "Wenche Foss (1917–2011) fue una de las actrices más famosas de Noruega, con una carrera que comenzó en 1935 y duró hasta 2009. Actuó tanto en teatro como en cine.\n\nWenche Foss es una de las varias mujeres que han tenido una influencia significativa en la ciudad. Sube la colina del castillo hasta <b>Slottsparken</b> (el parque del castillo). Allí encontrarás una estatua de una mujer rodeada de flores, mirando al suelo. ¿Quién es?\n\n<i>Por el camino, puede que puedas ver el cambio de guardia a las 13:30.</i>",
          answers: ["camilla collett", "collett"],
          hints: ["Dirígete a la parte trasera izquierda del castillo."]
        },
        {
          chapter: "Escena 3",
          text: "Camilla Collett fue una escritora noruega y una de las primeras pioneras del \u00abrealismo\u00bb, que buscaba describir la realidad tal como es. Uno de sus libros, <i>Amtmandens Døtre</i>, trata sobre las dificultades de ser mujer. Vivió y trabajó en Oslo durante gran parte de su vida. La estatua fue creada por Gustav Vigeland, conocido principalmente por el Parque de Esculturas Vigeland entre Majorstua y Frogner.\n\nContinúa por la calle detrás del castillo y cruza la calle hacia <b>Parkveien 45</b>. Hoy en día, la casa es la Residencia de Representación del Gobierno, donde el gobierno recibe a dignatarios extranjeros. Originalmente, sin embargo, era propiedad de un comerciante local y conocida con otro nombre.\n\n¿Cómo se llamaba originalmente el edificio?",
          answers: ["villa parafina", "parafina"],
          hints: ["Busca la placa azul en la pared."]
        },
        {
          chapter: "Escena 4",
          text: "Antes de que Noruega encontrara su propio petróleo, importadores de combustible como Frederik Sundt \u2014 quien financió Villa Parafina en 1877 \u2014 abastecían al país de queroseno (noruego: Parafin), que se utilizaba para la iluminación.\n\nDesde Villa Parafina, sigue la calle a lo largo del parque del castillo hacia <b>Solli plass</b>. Allí encontrarás una estatua de un hombre con una llave, frente a lo que ahora es uno de los hoteles más modernos de Oslo.\n\n¿Quién hizo la estatua?",
          answers: ["rodin", "auguste rodin"],
          hints: ["El hombre lleva una túnica.", "El nombre del escultor está escrito en la base de la estatua."]
        },
        {
          chapter: "Escena 5",
          text: "El Hombre con la Llave, de Auguste Rodin, fue inaugurado en 1902. Rodin nunca estuvo en Oslo, aunque tuvo un gran impacto en el debate cultural de la ciudad. Entre los que se opusieron a la estatua estaba Gustav Vigeland \u2014 quien hizo la estatua de Camilla Collett y su famoso parque. Uno de los argumentos era que el arte en los espacios públicos de Oslo debía reservarse para artistas noruegos.\n\nAhora sigue la línea del tranvía hacia <b>Aker Brygge</b> y <b>Rådhusplassen</b>. En la gran plaza encontrarás a un hombre junto a un cañón. ¡Pide a un lugareño amable que te confirme que sigues la línea correcta!\n\n¿Cómo se llama?",
          answers: ["tordenskiold", "peter tordenskiold", "peter wessel"],
          hints: ["Busca la estatua cerca del paseo marítimo en Rådhusplassen."]
        },
        {
          chapter: "Escena 6",
          text: "Peter Tordenskiold (1690\u20131720) fue un oficial naval de la armada danesa-noruega que se hizo famoso tras una serie de batallas con Suecia. Durante una batalla frente a la costa sur de Noruega en 1714, su barco se quedó sin munición, y se envió a un representante al enemigo para pedir prestada pólvora. La respuesta: ¡No!\n\nAhora sigue los muelles a la derecha a lo largo de la <b>Fortaleza de Akershus</b> hacia un período oscuro de la historia reciente de Noruega. A tu izquierda encontrarás una serie de sillas vacías.\n\n¿Cuál es el nombre del artista?",
          answers: ["antony gormley", "gormley"],
          hints: ["Tienes que caminar un poco.", "La instalación está al final de las murallas de la fortaleza."]
        },
        {
          chapter: "Escena 7",
          text: "Durante la Segunda Guerra Mundial, los noruegos colaboraron con las fuerzas de ocupación alemanas en la deportación de 772 judíos de Noruega. La mayoría fueron enviados a Auschwitz y solo 37 sobrevivieron.\n\nEl recorrido está casi terminado. Continúa por los muelles pasando la terminal de cruceros hasta llegar a un lugar con unas extrañas estructuras en forma de A. Los edificios están inspirados en los bastidores utilizados para secar el bacalao en el norte de Noruega.\n\n<i>¿Sabías que la cultura del café en Noruega está relacionada con la exportación de pescado seco a Brasil?</i>\n\n¿Cómo se llama el lugar?",
          answers: ["salt"],
          hints: ["Las estructuras están justo al lado de la terminal de cruceros.", "No es pimienta."]
        }
      ],
      de: [
        {
          chapter: "Szene 1",
          text: "Begib dich auf den Platz zwischen dem <b>Nationaltheateret</b> und der <b>U-Bahn-Station Nationaltheateret</b>.\n\nDas Nationaltheater wurde 1899 erbaut, zunächst durch private Finanzierung, und erhielt erst 1928 staatliche Unterstützung.\n\nAuf dem Platz findest du eine lächelnde Frau mit lockigem Haar. Wie heißt sie?",
          answers: ["wenche foss", "wenche"],
          hints: ["Sie steht in der Nähe des Brunnens."]
        },
        {
          chapter: "Szene 2",
          text: "Wenche Foss (1917–2011) war eine der berühmtesten Schauspielerinnen Norwegens, mit einer Karriere von 1935 bis 2009. Sie trat sowohl am Theater als auch im Film auf.\n\nWenche Foss ist eine von mehreren Frauen, die großen Einfluss auf die Stadt hatten. Geh den Schlosshügel hinauf zum <b>Slottsparken</b> (dem Schlosspark). Dort findest du eine Statue einer Frau, umgeben von Blumen, die zu Boden blickt. Wer ist sie?\n\n<i>Unterwegs kannst du vielleicht um 13:30 Uhr die Wachablösung beobachten!</i>",
          answers: ["camilla collett", "collett"],
          hints: ["Geh zur hinteren linken Seite des Schlosses."]
        },
        {
          chapter: "Szene 3",
          text: "Camilla Collett war eine norwegische Schriftstellerin und eine frühe Pionierin des \u00bbRealismus\u00ab, der die Wirklichkeit so darstellen wollte, wie sie ist. Eines ihrer Bücher, <i>Amtmandens Døtre</i>, behandelt die Schwierigkeiten des Frauseins. Sie lebte und arbeitete einen Großteil ihres Lebens in Oslo. Die Statue wurde von Gustav Vigeland geschaffen, der vor allem für den Vigeland-Skulpturenpark zwischen Majorstua und Frogner bekannt ist.\n\nGeh die Straße hinter dem Schloss hinunter und überquere die Straße zur <b>Parkveien 45</b>. Heute ist das Haus das Repräsentationshaus der Regierung, wo die Regierung ausländische Würdenträger empfängt. Ursprünglich gehörte es einem lokalen Kaufmann und war unter einem anderen Namen bekannt.\n\nWie war das Gebäude ursprünglich bekannt?",
          answers: ["villa parafina", "parafina"],
          hints: ["Suche die blaue Plakette an der Wand."]
        },
        {
          chapter: "Szene 4",
          text: "Bevor Norwegen sein eigenes Öl fand, versorgten Erdölimporteure wie Frederik Sundt \u2014 der Villa Parafina 1877 finanzierte \u2014 das Land mit Kerosin (norw. Parafin), das zur Beleuchtung verwendet wurde.\n\nVon der Villa Parafina aus folge der Straße entlang des Schlossparks in Richtung <b>Solli plass</b>. Dort findest du eine Statue eines Mannes mit einem Schlüssel, vor einem der angesagtesten Hotels Oslos.\n\nWer hat die Statue gemacht?",
          answers: ["rodin", "auguste rodin"],
          hints: ["Der Mann trägt ein Gewand.", "Der Name des Bildhauers steht auf dem Sockel der Statue."]
        },
        {
          chapter: "Szene 5",
          text: "Der Mann mit dem Schlüssel von Auguste Rodin wurde 1902 enthüllt. Rodin selbst war nach allem, was bekannt ist, nie in Oslo, hatte aber dennoch einen Einfluss auf die kulturelle Debatte in der Stadt. Zu den Gegnern der Statue gehörte Gustav Vigeland \u2014 der die Statue von Camilla Collett sowie seinen berühmten Park schuf. Eines der Argumente war, dass Kunst im öffentlichen Raum Oslos norwegischen Künstlern vorbehalten sein sollte.\n\nFolge nun der Straßenbahnlinie hinunter Richtung <b>Aker Brygge</b> und <b>Rådhusplassen</b>. Auf dem großen Platz findest du einen Mann, der neben einer Kanone steht. Frag einen freundlichen Einheimischen, ob du die richtige Linie nimmst!\n\nWie heißt er?",
          answers: ["tordenskiold", "peter tordenskiold", "peter wessel"],
          hints: ["Suche die Statue am Ufer auf dem Rådhusplassen."]
        },
        {
          chapter: "Szene 6",
          text: "Peter Tordenskiold (1690\u20131720) war ein Marineoffizier der dänisch-norwegischen Marine, der nach einer Reihe von Schlachten gegen Schweden berühmt wurde. Während einer Schlacht vor der Südküste Norwegens 1714 ging seinem Schiff die Munition aus, und ein Vertreter wurde zum Feind geschickt, um Schießpulver zu leihen. Die Antwort: Nein!\n\nFolge nun den Kaianlagen nach rechts entlang der <b>Festung Akershus</b> in Richtung eines dunklen Kapitels der jüngeren Geschichte Norwegens. Auf deiner linken Seite findest du eine Reihe leerer Stühle.\n\nWie heißt der Künstler?",
          answers: ["antony gormley", "gormley"],
          hints: ["Du musst ein Stück laufen.", "Die Installation befindet sich am Ende der Festungsmauern."]
        },
        {
          chapter: "Szene 7",
          text: "Während des Zweiten Weltkriegs halfen Norweger den deutschen Besatzungstruppen dabei, 772 Juden aus Norwegen zu deportieren. Die meisten wurden nach Auschwitz gebracht, und nur 37 überlebten.\n\nDie Tour ist fast vorbei. Geh weiter entlang der Kaianlagen am Kreuzfahrtterminal vorbei, bis du einen Ort mit seltsam aussehenden A-förmigen Strukturen erreichst. Die Gebäude sind von den Gestellen inspiriert, die in Nordnorwegen zum Trocknen von Kabeljau verwendet werden.\n\n<i>Wusstest du, dass Norwegens Kaffeekultur mit dem Export von Trockenfisch nach Brasilien zusammenhängt?</i>\n\nWie heißt die Location?",
          answers: ["salt"],
          hints: ["Die Strukturen befinden sich direkt neben dem Kreuzfahrtterminal.", "Es ist nicht Pfeffer."]
        }
      ],
      fr: [
        {
          chapter: "Scène 1",
          text: "Rendez-vous sur la place entre le <b>Nationaltheateret</b> et la <b>station de métro Nationaltheateret</b>.\n\nLe Théâtre National a été construit en 1899. Il a d'abord été financé par des fonds privés et n'a reçu le soutien de l'État qu'en 1928.\n\nSur la place, vous trouverez une femme souriante aux cheveux bouclés. Quel est son nom\u00a0?",
          answers: ["wenche foss", "wenche"],
          hints: ["Elle se trouve près de la fontaine."]
        },
        {
          chapter: "Scène 2",
          text: "Wenche Foss (1917–2011) était l'une des actrices les plus célèbres de Norvège, avec une carrière allant de 1935 à 2009. Elle a joué aussi bien au théâtre qu'au cinéma.\n\nWenche Foss est l'une des nombreuses femmes qui ont eu une influence significative sur la ville. Montez la colline du château jusqu'au <b>Slottsparken</b> (le parc du château). Là, vous trouverez une statue d'une femme entourée de fleurs, le regard baissé vers le sol. Qui est-elle\u00a0?\n\n<i>En chemin, vous pourrez peut-être assister à la relève de la garde à 13h30\u00a0!</i>",
          answers: ["camilla collett", "collett"],
          hints: ["Dirigez-vous vers l'arrière gauche du château."]
        },
        {
          chapter: "Scène 3",
          text: "Camilla Collett était une écrivaine norvégienne et une pionnière du \u00ab\u00a0réalisme\u00a0\u00bb, qui cherchait à décrire la réalité telle qu'elle est. L'un de ses livres, <i>Amtmandens Døtre</i>, traite des difficultés d'être une femme. Elle a vécu et travaillé à Oslo pendant une grande partie de sa vie. La statue a été réalisée par Gustav Vigeland, principalement connu pour le Parc de sculptures Vigeland entre Majorstua et Frogner.\n\nContinuez sur la route derrière le château et traversez la rue vers le <b>Parkveien 45</b>. Aujourd'hui, la maison est la résidence officielle du gouvernement, où celui-ci accueille des dignitaires étrangers. À l'origine, elle appartenait à un commerçant local et était connue sous un autre nom.\n\nQuel était le nom d'origine du bâtiment\u00a0?",
          answers: ["villa parafina", "parafina"],
          hints: ["Trouvez la plaque bleue sur le mur."]
        },
        {
          chapter: "Scène 4",
          text: "Avant que la Norvège ne trouve son propre pétrole, des importateurs comme Frederik Sundt \u2014 qui a financé Villa Parafina en 1877 \u2014 approvisionnaient le pays en kérosène (norvégien\u00a0: Parafin), utilisé pour l'éclairage.\n\nDepuis Villa Parafina, suivez la route longeant le parc du château en direction de <b>Solli plass</b>. Là, vous trouverez une statue d'un homme tenant une clé, devant ce qui est aujourd'hui l'un des hôtels les plus branchés d'Oslo.\n\nQui a réalisé la statue\u00a0?",
          answers: ["rodin", "auguste rodin"],
          hints: ["L'homme est vêtu d'une robe.", "Le nom du sculpteur est inscrit sur le socle de la statue."]
        },
        {
          chapter: "Scène 5",
          text: "L'Homme à la clé, d'Auguste Rodin, a été inauguré en 1902. Rodin lui-même n'est, semble-t-il, jamais venu à Oslo, mais a néanmoins marqué le débat culturel de la ville. Parmi ceux qui s'opposaient à la statue se trouvait Gustav Vigeland \u2014 qui a réalisé la statue de Camilla Collett ainsi que son célèbre parc. L'un des arguments avancés était que l'art dans les espaces publics d'Oslo devrait être réservé aux artistes norvégiens.\n\nSuivez maintenant la ligne du tramway en descendant vers <b>Aker Brygge</b> et <b>Rådhusplassen</b>. Sur la grande place, vous trouverez un homme debout à côté d'un canon. Demandez à un habitant sympa si vous suivez la bonne ligne de tram\u00a0!\n\nQuel est son nom\u00a0?",
          answers: ["tordenskiold", "peter tordenskiold", "peter wessel"],
          hints: ["Cherchez la statue près du front de mer à Rådhusplassen."]
        },
        {
          chapter: "Scène 6",
          text: "Peter Tordenskiold (1690\u20131720) était un officier de la marine dano-norvégienne devenu célèbre après une série de batailles contre la Suède. Lors d'une bataille au large de la côte sud de la Norvège en 1714, son navire manquait de munitions et un représentant fut envoyé chez l'ennemi pour emprunter de la poudre à canon. La réponse reçue\u00a0: Non\u00a0!\n\nSuivez maintenant les quais sur votre droite le long de la <b>forteresse d'Akershus</b> vers une période sombre de l'histoire récente de la Norvège. Sur votre gauche, vous trouverez plusieurs chaises vides.\n\nQuel est le nom de l'artiste\u00a0?",
          answers: ["antony gormley", "gormley"],
          hints: ["Il faut marcher un peu.", "L'installation se trouve au bout des remparts de la forteresse."]
        },
        {
          chapter: "Scène 7",
          text: "Pendant la Seconde Guerre mondiale, des Norvégiens ont aidé les forces d'occupation allemandes à déporter 772 Juifs de Norvège. La plupart ont été envoyés à Auschwitz et seulement 37 ont survécu.\n\nLa visite est presque terminée. Continuez le long des quais en passant le terminal de croisière jusqu'à un endroit où vous verrez d'étranges structures en forme de A. Les bâtiments sont inspirés des séchoirs utilisés pour faire sécher la morue dans le nord de la Norvège.\n\n<i>Saviez-vous que la culture du café en Norvège est liée à l'exportation de poisson séché vers le Brésil\u00a0?</i>\n\nQuel est le nom de ce lieu\u00a0?",
          answers: ["salt"],
          hints: ["Les structures se trouvent juste à côté du terminal de croisière.", "Ce n'est pas du poivre."]
        }
      ]
    },

    becoming: {
      en: [
        {
          chapter: "Scene 1",
          text: "Get to the square at the bottom of <b>Karl Johans gate</b>, in front of the railway station building called <b>Østbanehallen</b>. There you will find a beast that is not native to the Norwegian fauna, and some might wonder how it got there.\n\nWhich animal is standing at the square?",
          answers: ["tiger"],
          hints: ["It is bigger than a cat."]
        },
        {
          chapter: "Scene 2",
          text: "Tigerstaden — Tiger City — is one of Oslo’s most famous nicknames. The name has been ascribed to a poem by the great Norwegian author Bjørnstjerne Bjørnson, who wrote the lyrics for Norway’s national anthem. The tiger is meant to illustrate the many dangers that lurk in a big city.\n\nIn a dangerous city, many have sought refuge in religion. Make your way to <b>Stortinget</b> (the Norwegian Parliament). The building was opened in 1866, during a period when Norway was in a union controlled by Sweden. Right in front of the parliament, on your left when you face the square, there is a modern statue of a man who played an important role in this union.\n\nWho is the statue of?",
          answers: ["christian fredrik", "kristian fredrik", "christian august"],
          hints: ["He has a body — not just a torso and head."]
        },
        {
          chapter: "Scene 3",
          text: "In early 1814, Napoleon had lost the war and the Treaty of Kiel was signed. As always, the winner — amongst others Sweden — takes the spoils (Norway, then under Denmark). At the time, the man sculptured — Danish Crown Prince Christian VIII — was the governor-general in Norway, and opposed the Swedish claim. Long story short, he supported a process towards Norwegian independence, first by claiming the crown through hereditary right, before agreeing to be elected by the Norwegian Constituent Assembly on the 17th of May. That same day, the Norwegian constitution was signed.\n\nNorway did not become fully independent for another 91 years, entering a union with Sweden in August 1814.\n\nPolitics alone is not enough to build a nation. Keep walking down <b>Karl Johan</b> past Spikersuppa towards <b>Nationaltheatret</b>. Explore the building’s surroundings and find a strange-looking statue — stranger than normal.\n\nWho is the character the statue portrays?",
          answers: ["jean de france"],
          hints: ["The statue is beardless.", "Walk around the theatre — it is in the square on the opposite side."]
        },
        {
          chapter: "Scene 4",
          text: "Jean de France, played by Per Aabel at the National Theatre, was written by the Norwegian-Danish author Ludvig Holberg in 1744. It is about a Danish 20-year-old — Hans Frandsen — who travels to Paris and becomes obsessed with fashion. Upon his return, he is denied by his father and rejected by society. Although set in Denmark, the story resonates with a longstanding Northern European attitude towards “strange” outside influence.\n\nWhile some fear being too much, this was certainly not the case for our next character. Make your way up towards <b>Slottet</b> (the Royal Palace), where you will find a man on a horse.\n\n<i>If the Queen’s Park is open, it is a beautiful spot for a short stroll. Entrance to the left of the castle, open 18 May to 1 October.</i>\n\nWho is he?",
          answers: ["karl johan", "jean baptiste bernadotte", "karl iii johan", "carl johan"],
          hints: ["It is quite large — difficult to miss once you see the castle.", "Look for a small plaque at the base of the statue."]
        },
        {
          chapter: "Scene 5",
          text: "Karl Johan, the man who named the street you have been walking, was originally a French general — Jean Baptiste Bernadotte. In 1810, having recently left Napoleon’s army, he became the Crown Prince of Sweden. In 1814 he found himself to be king of potentially two Northern European countries.\n\nThe Norwegians were more interested in sovereignty with Christian Fredrik than a new union. War ensued, Norway was ill-prepared, and the country entered a union with Sweden from 1814 until finally becoming independent in 1905. Despite a turbulent start, the Norwegians grew fond of him over time.\n\nNow make your way to <b>Rådhusplassen</b> (Oslo City Hall square). In the big square, towards the sea, find the silver-coloured figure staring at the ocean.\n\nWhat is the name of the sculpture?",
          answers: ["dykkar", "dykker", "diver"],
          hints: ["It is very shiny.", "It is not Ola Enstad."]
        },
        {
          chapter: "Scene 6",
          text: "Make your way into <b>Akershus Festning</b> (Akershus Fortress) towards Festningsplassen. Construction of the fortress began around 1300, and it has been central to Norway’s defences ever since. Today it is the administrative headquarters of the Norwegian armed forces.\n\nOnce at Festningsplassen, you will find a statue of a large woman and a smaller man.\n\n<i>There are many cafés and restaurants close to Oslo City Hall — why not stop by Erketunet Gardsbakeri for a coffee?</i>\n\nWhat is the name of the artist?",
          answers: ["gunnar t. janson", "gunnar janson", "janson"],
          hints: ["It is at the centre of a large square, surrounded by trees."]
        },
        {
          chapter: "Scene 7",
          text: "The statue commemorates those who died during the German occupation of Norway from 9 April 1940 until 8 May 1945. Akershus Fortress was used by the occupying forces, and several resistance fighters were executed on its premises. When peace came, Vidkun Quisling — who had made himself head of state as a puppet for the Germans — met a similar fate at the fortress.\n\nNational identity is a result of conflict, turmoil, negotiations, cultural expressions and debate. Exit the fortress by following <b>Kirkegata</b>. Almost immediately, you will find a fashionable building with green doors and a grand entrance.\n\nWhat is the name of this building?",
          answers: ["gamle logen"],
          hints: ["If you reach a park, you have gone too far.", "It is next to the Otto Ruge statue."]
        },
        {
          chapter: "Scene 8",
          text: "Gamle Logen — the Old Lodge — was finished in 1839, originally built as a Freemason lodge, concert venue and ballroom. In 1849, the famous Norwegian violinist Ole Bull invited Myllargutten — the Miller Boy (Torgeir Augundsson) — to play for the urban elite. As he was about to start, his violin box would not open. After finally getting his fiddle out, all his fears disappeared.\n\nAn audience member later described the experience: <i>“The miller boy sat as one gazes loftily at the splendour of a river’s depths, and like bridges that linger over, so our seats shook at his rhythm.”</i>\n\nFor the final stop, take a right and walk down <b>Glacisgata</b> until you reach the waterfront. Follow the promenade until you find a large, architecturally striking building.\n\nWhat is the building?",
          answers: ["opera house", "opera", "operahuset", "den norske opera", "den norske opera og ballett"],
          hints: ["The answer can be the name of the building, or the activity that takes place there.", "Be sure to walk on the roof when you find it!"]
        }
      ],

      no: [
        {
          chapter: "Scene 1",
          text: "Gå til plassen nederst i <b>Karl Johans gate</b>, foran jernbanestasjonen <b>Østbanehallen</b>. Der vil du finne et dyr som ikke er hjemmehørende i norsk fauna — og mange lurer på hvordan det havnet der.\n\nHvilket dyr står på plassen?",
          answers: ["tiger"],
          hints: ["Det er større enn en katt."]
        },
        {
          chapter: "Scene 2",
          text: "Tigerstaden er et av Oslos mest kjente kallenavn. Navnet stammer fra et dikt av Bjørnstjerne Bjørnson, som også skrev teksten til Norges nasjonalsang. Tigeren er ment å illustrere farene som lurer i en stor by.\n\nI en farlig by har mange søkt tilflukt i religion. Gå til <b>Stortinget</b>. Bygningen åpnet i 1866, da Norge var i union med Sverige. Rett foran parlamentet, på venstre side, står en moderne statue av en mann som spilte en viktig rolle i denne unionen.\n\nHvem forestiller statuen?",
          answers: ["christian fredrik", "kristian fredrik", "christian august"],
          hints: ["Han har en kropp — ikke bare overkropp og hode."]
        },
        {
          chapter: "Scene 3",
          text: "Tidlig i 1814 hadde Napoleon tapt krigen og Kieltraktaten ble undertegnet. Som alltid tar vinnerne (bl.a. Sverige) byttet (Norge, da under Danmark). Den avbildede — dansk kronprins Christian VIII — var da stattholder i Norge og motarbeidet de svenske kravene. Han støttet en prosess mot norsk selvstendighet, og ble valgt av Riksforsamlingen den 17. mai. Samme dag ble grunnloven undertegnet.\n\nNorge ble likevel ikke fullt ut selvstendig på 91 år, da landet inngått union med Sverige i august 1814.\n\nGå videre nedover <b>Karl Johan</b> forbi Spikersuppa mot <b>Nationaltheatret</b>. Utforsk omgivelsene og finn en merkelig statue.\n\nHvilken person fremstiller statuen?",
          answers: ["jean de france"],
          hints: ["Statuen er skjeggfri.", "Gå rundt teateret — den er på plassen på den andre siden."]
        },
        {
          chapter: "Scene 4",
          text: "Jean de France, fremført av Per Aabel ved Nationaltheatret, ble skrevet av Ludvig Holberg i 1744. Stükket handler om den danske 20-åringen Hans Frandsen, som reiser til Paris og blir besatt av mote. Ved hjemkomsten avvises han av faren og det danske samfunnet.\n\nGå opp mot <b>Slottet</b>, der du vil finne en mann til hest.\n\n<i>Hvis Dronningens park er åpen, er det et flott sted for en liten spasertur. Inngang til venstre for slottet, åpent 18. mai til 1. oktober.</i>\n\nHvem er han?",
          answers: ["karl johan", "jean baptiste bernadotte", "karl iii johan", "carl johan"],
          hints: ["Ganske stor — vanskelig å gå glipp av når du ser slottet.", "Se etter en liten plakett på sokkelen."]
        },
        {
          chapter: "Scene 5",
          text: "Karl Johan, mannen som har gitt navn til gaten du har gått langs, var opprinnelig den franske generalen Jean Baptiste Bernadotte. I 1810 ble han kronprins av Sverige. I 1814 så han seg som potensiell konge av to nordeuropeiske land.\n\nNordmennene foretrakk selvstendighet med Christian Fredrik fremfor ny union. Krig fulgte, Norge var dårlig forberedt, og landet gikk inn i union med Sverige fra 1814 til selvstendigheten i 1905.\n\nGå til <b>Rådhusplassen</b>. I den store plassen mot sjøen, finn den sølvfargede figuren som stirrer utover havet.\n\nHva er navnet på skulpturen?",
          answers: ["dykkar", "dykker", "diver"],
          hints: ["Den er veldig blank.", "Det er ikke Ola Enstad."]
        },
        {
          chapter: "Scene 6",
          text: "Gå inn i <b>Akershus festning</b> mot Festningsplassen. Byggingen begynte rundt år 1300 og festningen har vært sentral i Norges forsvar siden da. I dag er det administrativt senter for Forsvaret.\n\nPå Festningsplassen finner du en statue av en stor kvinne og en mindre mann.\n\n<i>Det er mange kafeer nær Oslo Rådhus — stopp gjerne innom Erketunet Gardsbakeri.</i>\n\nHva heter kunstneren?",
          answers: ["gunnar t. janson", "gunnar janson", "janson"],
          hints: ["Den står på midten av en stor plass omgitt av trær."]
        },
        {
          chapter: "Scene 7",
          text: "Statuen minnes dem som døde under den tyske okkupasjonen av Norge fra 9. april 1940 til 8. mai 1945. Akershus festning ble brukt av okkupantene, og flere motstandsfolk ble henrettet her. Da freden kom, møtte Vidkun Quisling — som hadde gjort seg til statssjef som tysk marionett — samme skjebne.\n\nNasjonale identiteter formes gjennom konflikt, kamp, kultur og debatt. Gå ut av festningen langs <b>Kirkegata</b>. Nesten umiddelbart vil du finne en stilig bygning med grønne dører.\n\nHva heter bygningen?",
          answers: ["gamle logen"],
          hints: ["Har du nådd en park, har du gått for langt.", "Den ligger ved siden av Otto Ruge-statuen."]
        },
        {
          chapter: "Scene 8",
          text: "Gamle Logen sto ferdig i 1839, opprinnelig bygget som frimurerloge, konsertsal og ballsal. I 1849 inviterte den berømte fiolinisten Ole Bull Myllargutten — Torgeir Augundsson — til å spille for byens elite. Da han endelig fikk fatt i fela si, forsvant alle nervene.\n\nEt publikumsmedlem beskrev opplevelsen: <i>«Gutten satt som en som med ophøiet blik stirrer ind i en elvs dybder, og ligesom broer der hviler over, så skjalv våre seter i hans takt.»</i>\n\nFor den siste stansen, ta til høyre ned <b>Glacisgata</b> til sjøen. Følg promenaden til du finner en stor og arkitektonisk imponerende bygning.\n\nHva er bygningen?",
          answers: ["opera house", "opera", "operahuset", "den norske opera", "den norske opera og ballett"],
          hints: ["Svaret kan være navnet på bygningen eller aktiviteten som skjer der.", "Husk å ta en tur på taket!"]
        }
      ],

      es: [
        {
          chapter: "Escena 1",
          text: "Dirígete a la plaza al final de <b>Karl Johans gate</b>, frente al edificio de la estación de tren <b>Østbanehallen</b>. Allí encontrarás una bestia que no es nativa de la fauna noruega. ¿Cómo llegó hasta aquí?\n\n¿Qué animal hay en la plaza?",
          answers: ["tiger", "tigre"],
          hints: ["Es más grande que un gato."]
        },
        {
          chapter: "Escena 2",
          text: "Tigerstaden — Ciudad del Tigre — es uno de los apodos más famosos de Oslo. El nombre proviene de un poema de Bjørnstjerne Bjørnson, quien también escribió la letra del himno nacional noruego. El tigre representa los muchos peligros que acechan en una gran ciudad.\n\nEn una ciudad peligrosa, muchos han buscado refugio en la religión. Dirígete al <b>Stortinget</b> (el Parlamento noruego). El edificio se inauguró en 1866, cuando Noruega estaba en una unión controlada por Suecia. Justo frente al parlamento, a tu izquierda, hay una estatua moderna de un hombre que jugó un papel importante.\n\n¿Quién representa la estatua?",
          answers: ["christian fredrik", "kristian fredrik", "christian august"],
          hints: ["Tiene cuerpo completo, no solo busto y cabeza."]
        },
        {
          chapter: "Escena 3",
          text: "A principios de 1814, Napoleón había perdido la guerra y se firmó el Tratado de Kiel. El vencedor — entre otros Suecia — se queda con el botín (Noruega, entonces bajo Dinamarca). El hombre representado — el príncipe heredero danés Christian VIII — era entonces gobernador general de Noruega y se opuso a las pretensiones suecas. Apoyó la independencia noruega y fue elegido por la Asamblea Constituyente el 17 de mayo. Ese mismo día se firmó la constitución noruega.\n\nSigue por <b>Karl Johan</b> hacia el <b>Nationaltheatret</b>. Explora los alrededores y encuentra una estatua peculiar.\n\n¿Qué personaje representa la estatua?",
          answers: ["jean de france"],
          hints: ["La estatua no tiene barba.", "Rodea el teatro — está en la plaza del lado opuesto."]
        },
        {
          chapter: "Escena 4",
          text: "Jean de France, interpretado por Per Aabel en el Teatro Nacional, fue escrito por Ludvig Holberg en 1744. Trata de un joven danés de 20 años que viaja a París y se obsesiona con la moda. Al volver, su padre lo rechaza.\n\nDirígete hacia el <b>Slottet</b> (el Palacio Real), donde encontrarás a un hombre a caballo.\n\n<i>Si el Parque de la Reina está abierto, es un lugar precioso. Entrada a la izquierda del palacio, abierto del 18 de mayo al 1 de octubre.</i>\n\n¿Quién es?",
          answers: ["karl johan", "jean baptiste bernadotte", "karl iii johan", "carl johan"],
          hints: ["Es bastante grande — difícil de perderse frente al castillo.", "Busca una pequeña placa en la base de la estatua."]
        },
        {
          chapter: "Escena 5",
          text: "Karl Johan, quien dio nombre a la calle que has recorrido, era originalmente un general francés — Jean Baptiste Bernadotte. En 1810 se convirtió en príncipe heredero de Suecia. En 1814 se encontró como posible rey de dos países nórdicos.\n\nLos noruegos preferían la soberanía con Christian Fredrik. Hubo guerra, Noruega estaba mal preparada, y el país entró en unión con Suecia desde 1814 hasta la independencia en 1905.\n\nDirígete a <b>Rådhusplassen</b>. En la gran plaza, hacia el mar, encuentra la figura plateada que mira al océano.\n\n¿Cuál es el nombre de la escultura?",
          answers: ["dykkar", "dykker", "diver", "buceador"],
          hints: ["Es muy brillante.", "No es Ola Enstad."]
        },
        {
          chapter: "Escena 6",
          text: "Entra en la <b>Fortaleza de Akershus</b> hacia Festningsplassen. La construcción comenzó alrededor del año 1300 y ha sido clave en la defensa de Noruega. Hoy es la sede administrativa de las fuerzas armadas noruegas.\n\nEn Festningsplassen encontrarás una estatua de una mujer grande y un hombre más pequeño.\n\n<i>Hay muchos cafés cerca del Ayuntamiento de Oslo — ¡anímate a parar en Erketunet Gardsbakeri!</i>\n\n¿Cuál es el nombre del artista?",
          answers: ["gunnar t. janson", "gunnar janson", "janson"],
          hints: ["Está en el centro de una gran plaza rodeada de árboles."]
        },
        {
          chapter: "Escena 7",
          text: "La estatua conmemora a quienes murieron durante la ocupación alemana de Noruega del 9 de abril de 1940 al 8 de mayo de 1945. La Fortaleza de Akershus fue utilizada por las fuerzas de ocupación y varios resistentes fueron ejecutados allí. Al llegar la paz, Vidkun Quisling — quien se hizo jefe de estado como títere de los alemanes — corrió la misma suerte.\n\nSal de la fortaleza por <b>Kirkegata</b>. Casi de inmediato encontrarás un elegante edificio con puertas verdes.\n\n¿Cuál es el nombre de este edificio?",
          answers: ["gamle logen"],
          hints: ["Si llegas a un parque, has ido demasiado lejos.", "Está junto a la estatua de Otto Ruge."]
        },
        {
          chapter: "Escena 8",
          text: "Gamle Logen — la Logia Antigua — se terminó en 1839, construida como logia masónica, sala de conciertos y salón de baile. En 1849, el famoso violinista Ole Bull invitó a Myllargutten — Torgeir Augundsson — a tocar para la élite urbana. Cuando finalmente logró sacar su violín, todos sus miedos desaparecieron.\n\nUn espectador describió la experiencia: <i>“El molinero se sentó como quien contempla las profundidades de un río, y como puentes que se mecen, nuestros asientos temblaron a su ritmo.”</i>\n\nPara la última parada, gira a la derecha por <b>Glacisgata</b> hasta el paseo marítimo. Sigue el paseo hasta encontrar un edificio arquitectónicamente impresionante.\n\n¿Cuál es el edificio?",
          answers: ["opera house", "opera", "operahuset", "den norske opera", "ópera"],
          hints: ["La respuesta puede ser el nombre del edificio o la actividad que se realiza allí.", "¡Sube al tejado cuando lo encuentres!"]
        }
      ],

      de: [
        {
          chapter: "Szene 1",
          text: "Geh auf den Platz am unteren Ende der <b>Karl Johans gate</b>, vor dem Bahnhofsgebäude <b>Østbanehallen</b>. Dort findest du ein Tier, das in Norwegen nicht heimisch ist.\n\nWelches Tier steht auf dem Platz?",
          answers: ["tiger"],
          hints: ["Es ist größer als eine Katze."]
        },
        {
          chapter: "Szene 2",
          text: "Tigerstaden — Tigerstadt — ist einer der bekanntesten Spitznamen Oslos. Der Name geht auf ein Gedicht von Bjørnstjerne Bjørnson zurück, der auch den Text der norwegischen Nationalhymne schrieb. Der Tiger soll die Gefahren einer Großstadt symbolisieren.\n\nIn einer gefährlichen Stadt haben viele Zuflucht in der Religion gesucht. Geh zum <b>Stortinget</b> (dem norwegischen Parlament), 1866 eröffnet, als Norwegen in einer von Schweden kontrollierten Union war. Direkt vor dem Parlament, links, steht eine moderne Statue eines Mannes, der eine wichtige Rolle spielte.\n\nWen stellt die Statue dar?",
          answers: ["christian fredrik", "kristian fredrik", "christian august"],
          hints: ["Er hat einen vollständigen Körper — nicht nur Oberkörper und Kopf."]
        },
        {
          chapter: "Szene 3",
          text: "Anfang 1814 hatte Napoleon den Krieg verloren und der Kieler Vertrag wurde unterzeichnet. Der Sieger — u.a. Schweden — nimmt die Beute (Norwegen, damals unter Dänemark). Der Abgebildete — dänischer Kronprinz Christian VIII. — war damals Generalgouverneur in Norwegen und widersetzte sich den schwedischen Ansprüchen. Er unterstützte den Weg zur Unabhängigkeit und wurde am 17. Mai von der Nationalversammlung gewählt. An diesem Tag wurde die norwegische Verfassung unterzeichnet.\n\nGeh weiter die <b>Karl Johan</b> entlang zum <b>Nationaltheatret</b>. Erkunde die Umgebung und finde eine seltsam aussehende Statue.\n\nWelche Figur stellt die Statue dar?",
          answers: ["jean de france"],
          hints: ["Die Statue ist bartlos.", "Geh um das Theater herum — sie steht auf dem Platz auf der gegenüberliegenden Seite."]
        },
        {
          chapter: "Szene 4",
          text: "Jean de France, gespielt von Per Aabel am Nationaltheater, wurde 1744 von Ludvig Holberg geschrieben. Es geht um den 20-jährigen Dänen Hans Frandsen, der nach Paris reist und von der Mode besessen wird. Bei seiner Rückkehr wird er von seinem Vater abgewiesen.\n\nGeh hinauf zum <b>Slottet</b> (dem Königlichen Schloss), wo du einen Mann zu Pferd findest.\n\n<i>Wenn der Königinnenpark geöffnet ist, lohnt sich ein kurzer Spaziergang. Eingang links vom Schloss, geöffnet 18. Mai bis 1. Oktober.</i>\n\nWer ist er?",
          answers: ["karl johan", "jean baptiste bernadotte", "karl iii johan", "carl johan"],
          hints: ["Ziemlich groß — schwer zu übersehen, wenn du das Schloss siehst.", "Suche nach einem kleinen Schild am Sockel der Statue."]
        },
        {
          chapter: "Szene 5",
          text: "Karl Johan, der der Straße seinen Namen gab, war ursprünglich der französische General Jean Baptiste Bernadotte. 1810 wurde er Kronprinz von Schweden. 1814 sah er sich als möglichen König zweier nordeuropäischer Länder.\n\nDie Norweger bevorzugten die Souveränität mit Christian Fredrik. Es kam zum Krieg, Norwegen war schlecht vorbereitet, und das Land trat 1814 einer Union mit Schweden bei — bis zur Unabhängigkeit 1905.\n\nGeh zum <b>Rådhusplassen</b>. Auf dem großen Platz, Richtung Meer, finde die silberfarbene Figur, die auf den Ozean blickt.\n\nWie heißt die Skulptur?",
          answers: ["dykkar", "dykker", "diver", "taucher"],
          hints: ["Sie ist sehr glänzend.", "Es ist nicht Ola Enstad."]
        },
        {
          chapter: "Szene 6",
          text: "Geh in die <b>Festung Akershus</b> zum Festningsplassen. Der Bau begann um das Jahr 1300 und die Festung war seitdem zentral für Norwegens Verteidigung. Heute ist sie der Verwaltungssitz der norwegischen Streitkräfte.\n\nAuf dem Festningsplassen findest du eine Statue einer großen Frau und eines kleineren Mannes.\n\n<i>In der Nähe des Osloer Rathauses gibt es viele Cafés — probiere das Erketunet Gardsbakeri!</i>\n\nWie heißt der Künstler?",
          answers: ["gunnar t. janson", "gunnar janson", "janson"],
          hints: ["Sie steht in der Mitte eines großen Platzes, umgeben von Bäumen."]
        },
        {
          chapter: "Szene 7",
          text: "Die Statue erinnert an jene, die während der deutschen Besatzung Norwegens vom 9. April 1940 bis zum 8. Mai 1945 starben. Die Festung Akershus wurde von den Besatzungstruppen genutzt und mehrere Widerstandskämpfer wurden hier hingerichtet. Als der Frieden kam, traf Vidkun Quisling — der sich als Marionette der Deutschen zum Staatsoberhaupt gemacht hatte — dasselbe Schicksal.\n\nVerlasse die Festung durch die <b>Kirkegata</b>. Fast sofort findest du ein elegantes Gebäude mit grünen Türen.\n\nWie heißt dieses Gebäude?",
          answers: ["gamle logen"],
          hints: ["Wenn du einen Park erreichst, bist du zu weit gegangen.", "Es liegt neben der Otto-Ruge-Statue."]
        },
        {
          chapter: "Szene 8",
          text: "Gamle Logen — die Alte Loge — wurde 1839 fertiggestellt, ursprünglich als Freimaurerloge, Konzerthaus und Ballsaal. 1849 lud der berühmte Geiger Ole Bull Myllargutten — Torgeir Augundsson — ein, für die städtische Elite zu spielen. Als er endlich seine Geige herausholte, verschwanden alle seine Ängste.\n\nEin Zuschauer beschrieb das Erlebnis: <i>”Der Müllerbub saß wie einer, der erhaben in die Tiefen eines Flusses schaut, und wie Brücken, die darüber verweilen, so bebten unsere Sitze in seinem Rhythmus.“</i>\n\nFür den letzten Stopp biege rechts in die <b>Glacisgata</b> ab bis zur Uferpromenade. Folge der Promenade, bis du ein großes, architektonisch beeindruckendes Gebäude findest.\n\nWas ist das Gebäude?",
          answers: ["opera house", "opera", "operahuset", "den norske opera", "oper"],
          hints: ["Die Antwort kann der Name des Gebäudes oder die dort stattfindende Aktivität sein.", "Geh unbedingt auf das Dach, wenn du es gefunden hast!"]
        }
      ],

      fr: [
        {
          chapter: "Scène 1",
          text: "Rendez-vous sur la place au bas de la <b>Karl Johans gate</b>, devant le bâtiment de la gare <b>Østbanehallen</b>. Vous y trouverez un animal qui n'est pas natif de la faune norvégienne.\n\nQuel animal se trouve sur la place ?",
          answers: ["tiger", "tigre"],
          hints: ["Il est plus grand qu'un chat."]
        },
        {
          chapter: "Scène 2",
          text: "Tigerstaden — la Ville du Tigre — est l'un des surnoms les plus célèbres d'Oslo. Le nom provient d'un poème de Bjørnstjerne Bjørnson, qui a également écrit les paroles de l'hymne national norvégien. Le tigre symbolise les nombreux dangers qui rôdent dans une grande ville.\n\nDans une ville dangereuse, beaucoup ont cherché refuge dans la religion. Rendez-vous au <b>Stortinget</b> (le Parlement norvégien). Le bâtiment a ouvert en 1866, lorsque la Norvège était dans une union contrôlée par la Suède. Juste devant le parlement, à votre gauche, se trouve une statue moderne d'un homme qui a joué un rôle important.\n\nQui représente la statue ?",
          answers: ["christian fredrik", "kristian fredrik", "christian august"],
          hints: ["Il a un corps complet, pas seulement un buste et une tête."]
        },
        {
          chapter: "Scène 3",
          text: "Début 1814, Napoléon avait perdu la guerre et le Traité de Kiel fut signé. Le vainqueur — dont la Suède — prend le butin (la Norvège, alors sous domination danoise). L'homme représenté — le prince héritier danois Christian VIII — était alors gouverneur général de Norvège et s'opposait aux prétentions suédoises. Il soutint l'indépendance norvégienne et fut élu par l'Assemblée constituante le 17 mai. Ce même jour, la constitution norvégienne fut signée.\n\nContinuez sur la <b>Karl Johan</b> vers le <b>Nationaltheatret</b>. Explorez les alentours et trouvez une statue étrange.\n\nQuel personnage représente la statue ?",
          answers: ["jean de france"],
          hints: ["La statue est imberbe.", "Faites le tour du théâtre — elle se trouve sur la place de l'autre côté."]
        },
        {
          chapter: "Scène 4",
          text: "Jean de France, joué par Per Aabel au Théâtre National, a été écrit par Ludvig Holberg en 1744. Il s'agit d'un jeune Danois de 20 ans qui voyage à Paris et devient obsédé par la mode. À son retour, son père le rejette.\n\nMontez vers le <b>Slottet</b> (le Palais Royal), où vous trouverez un homme à cheval.\n\n<i>Si le Parc de la Reine est ouvert, c'est un bel endroit pour une petite promenade. Entrée à gauche du château, ouvert du 18 mai au 1er octobre.</i>\n\nQui est-il ?",
          answers: ["karl johan", "jean baptiste bernadotte", "karl iii johan", "carl johan"],
          hints: ["Assez grand — difficile à manquer devant le château.", "Cherchez une petite plaque à la base de la statue."]
        },
        {
          chapter: "Scène 5",
          text: "Karl Johan, qui a donné son nom à la rue que vous avez parcourue, était à l'origine un général français — Jean Baptiste Bernadotte. En 1810, il devint prince héritier de Suède. En 1814, il se retrouva potentiellement roi de deux pays nordiques.\n\nLes Norvégiens préféraient la souveraineté avec Christian Fredrik. La guerre éclata, la Norvège était mal préparée, et le pays entra dans une union avec la Suède de 1814 jusqu'à l'indépendance en 1905.\n\nRendez-vous au <b>Rådhusplassen</b>. Sur la grande place, vers la mer, trouvez la figure argentée qui regarde l'océan.\n\nQuel est le nom de la sculpture ?",
          answers: ["dykkar", "dykker", "diver", "plongeur"],
          hints: ["Elle est très brillante.", "Ce n'est pas Ola Enstad."]
        },
        {
          chapter: "Scène 6",
          text: "Pénétrez dans la <b>Forteresse d'Akershus</b> vers Festningsplassen. La construction débuta vers l'an 1300 et la forteresse est depuis lors au cœur de la défense norvégienne. Aujourd'hui, c'est le siège administratif des forces armées norvégiennes.\n\nSur Festningsplassen, vous trouverez une statue d'une grande femme et d'un homme plus petit.\n\n<i>Il y a de nombreux cafés près de l'hôtel de ville d'Oslo — faites un arrêt à l'Erketunet Gardsbakeri !</i>\n\nQuel est le nom de l'artiste ?",
          answers: ["gunnar t. janson", "gunnar janson", "janson"],
          hints: ["Elle se trouve au centre d'une grande place entourée d'arbres."]
        },
        {
          chapter: "Scène 7",
          text: "La statue commémore ceux qui sont morts pendant l'occupation allemande de la Norvège du 9 avril 1940 au 8 mai 1945. La forteresse d'Akershus fut utilisée par les forces d'occupation et plusieurs résistants y furent exécutés. Quand la paix arriva, Vidkun Quisling — qui s'était fait chef d'État comme marionnette des Allemands — connut le même sort.\n\nQuittez la forteresse par la <b>Kirkegata</b>. Presque immédiatement, vous trouverez un bâtiment élégant avec des portes vertes.\n\nQuel est le nom de ce bâtiment ?",
          answers: ["gamle logen"],
          hints: ["Si vous atteignez un parc, vous êtes allé trop loin.", "Il se trouve à côté de la statue d'Otto Ruge."]
        },
        {
          chapter: "Scène 8",
          text: "Gamle Logen — la Vieille Loge — fut achevée en 1839, construite comme loge maçonnique, salle de concert et de bal. En 1849, le célèbre violoniste Ole Bull invita Myllargutten — Torgeir Augundsson — à jouer pour l'élite urbaine. Lorsqu'il parvint enfin à sortir son violon, toutes ses craintes disparurent.\n\nUn spectateur décrivit l'expérience : <i>“Le garçon du moulin était assis comme quelqu'un qui contemple les profondeurs d'une rivière, et comme des ponts qui s'attardent, nos sièges tremblaient à son rythme.”</i>\n\nPour la dernière étape, tournez à droite dans la <b>Glacisgata</b> jusqu'au bord de l'eau. Suivez la promenade jusqu'à un grand bâtiment architecturalement remarquable.\n\nQuel est ce bâtiment ?",
          answers: ["opera house", "opera", "operahuset", "den norske opera", "opéra"],
          hints: ["La réponse peut être le nom du bâtiment ou l'activité qui s'y déroule.", "N'oubliez pas de monter sur le toit quand vous le trouvez !"]
        }
      ]
    }

  }
};

/* ══════════════════════════════════════════
   LANGUAGE HELPERS
══════════════════════════════════════════ */

function getLang() {
  return localStorage.getItem('los_lang') || 'en';
}

function setLang(code) {
  localStorage.setItem('los_lang', code);
  document.documentElement.lang = LANGUAGES[code]?.lang || code;
  applyTranslations();
  // If on game page, re-render current scene in new language
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

/* ── SAFE SET HELPERS ── */
function _set(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}
function _setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

/* ── APPLY TRANSLATIONS TO CURRENT PAGE ── */
function applyTranslations() {
  const lang = getLang();
  document.documentElement.lang = LANGUAGES[lang]?.lang || lang;

  // ── Menu (all pages) ──
  _set('menuTagline', T('tagline'));
  _set('navHome',     T('navHome'));
  _set('navAbout',    T('navAbout'));
  _set('navPrivacy',  T('navPrivacy'));
  // game.html has a "Continue Tour" link instead of navHome
  const contLink = document.getElementById('menuContinueLink');
  if (contLink) {
    const tourParam = new URLSearchParams(window.location.search).get('tour') || 'citycentre';
    contLink.href = 'game.html?tour=' + tourParam;
  }

  // ── Front page (index.html) ──
  _set('frontEyebrow',  T('eyebrow'));
  _set('frontIntro',    T('frontIntro'));
  _set('frontHeadline', T('headline'));
  _set('tipsLabel',     T('tipsLabel'));
  _set('toursLabel',    T('toursLabel'));
  _set('tip1',          T('tip1'));
  _set('tip2',          T('tip2'));
  _set('tip3',          T('tip3'));
  _set('tour1Title',    T('tour1Title'));
  _set('tour1Desc',     T('tour1Desc'));
  _set('tour2Title',    T('tour2Title'));
  _set('tour2Desc',     T('tour2Desc'));
  _setText('soonBadge', T('soon'));
  _set('tip4',          T('tip4'));
  _set('tour3Title',    T('tour3Title'));
  _set('tour3Desc',     T('tour3Desc'));
  _set('tour4Title',    T('tour4Title'));
  _set('tour4Desc',     T('tour4Desc'));
  document.querySelectorAll('.tour-start-btn').forEach(btn => {
    btn.innerHTML = T('startTour') + ' <span class="arrow">→</span>';
  });

  // ── Game page (game.html) ──
  const ansBtn  = document.getElementById('answerBtn');
  const hintBtn = document.getElementById('hintBtn');
  const input   = document.getElementById('answerInput');
  if (ansBtn)  ansBtn.textContent  = T('answer');
  if (hintBtn) hintBtn.innerHTML   = T('hint');
  if (input)   input.placeholder   = T('answerPlaceholder');

  // ── About page (about.html) ──
  _set('aboutEyebrow',  T('aboutEyebrow'));
  _set('aboutTitle',    T('aboutTitle'));
  _set('aboutP1',       T('aboutP1'));
  _set('aboutP2',       T('aboutP2'));
  _set('aboutP3',       T('aboutP3'));
  _set('aboutP4',       T('aboutP4'));
  _set('aboutP5',       T('aboutP5'));

  // ── Finish page (finish.html) ──
  _setText('finishTourComplete', T('tourComplete'));
  _set('finishBody',        T('finishBody'));
  _setText('finishTimeLbl', T('yourTime'));
  _set('finishFeedbackBtn', T('leaveFeedback'));
  _set('finishBackBtn',     T('backHome'));

  // ── Language switcher active state ──
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
  });
}

/* ── BUILD LANGUAGE SWITCHER ── */
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
   GA only fires after explicit user consent.
   Consent choice stored in localStorage.
══════════════════════════════════════════ */

const GA_ID = 'G-WSDKG42SWP';
const CONSENT_KEY = 'los_cookie_consent'; // 'accepted' | 'declined'

/* Load GA script dynamically — only called after consent */
function loadGA() {
  if (document.getElementById('ga-script')) return; // already loaded
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

/* Called on page load — fires GA if already consented */
function initConsent() {
  const choice = localStorage.getItem(CONSENT_KEY);
  if (choice === 'accepted') {
    loadGA();
    return; // no banner needed
  }
  if (choice === 'declined') {
    return; // no banner, no GA
  }
  // No choice yet — show banner
  showConsentBanner();
}

function showConsentBanner() {
  // Don't show on privacy page
  if (window.location.pathname.includes('privacy')) return;

  const lang = getLang();
  const texts = {
    en: { msg: 'We use cookies to understand how people use Los! This helps us improve the app. See our <a href="privacy.html">Privacy Policy</a>.', accept: 'Accept', decline: 'Decline' },
    no: { msg: 'Vi bruker informasjonskapsler for å forstå hvordan folk bruker Los! Dette hjelper oss å forbedre appen. Se vår <a href="privacy.html">personvernerklæring</a>.', accept: 'Godta', decline: 'Avslå' },
    es: { msg: 'Usamos cookies para entender cómo se usa Los! Esto nos ayuda a mejorar la app. Consulta nuestra <a href="privacy.html">política de privacidad</a>.', accept: 'Aceptar', decline: 'Rechazar' },
    de: { msg: 'Wir verwenden Cookies, um zu verstehen, wie Los! genutzt wird. Das hilft uns, die App zu verbessern. Siehe unsere <a href="privacy.html">Datenschutzerklärung</a>.', accept: 'Akzeptieren', decline: 'Ablehnen' },
    fr: { msg: "Nous utilisons des cookies pour comprendre comment Los! est utilisé, afin d'améliorer l'app. Voir notre <a href='privacy.html'>politique de confidentialité</a>.", accept: 'Accepter', decline: 'Refuser' },
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
