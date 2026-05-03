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
      tour1Title:     'City Centre Tour',
      tour1Desc:      'The first tour starts by the Nationaltheatret and takes you around the central-western part of the city. The tour lets you get to know local people and places. The walk is about 4–5 km, depending on your route, and takes about one hour — depending on your skills!',
      tour2Title:     'Akerselva & Oslo\'s Industrial Past',
      tour2Desc:      'The tour starts at Nydalen, so take the T-bane and find the closest river — Akerselva! From there, you will walk and solve tasks on your way down towards the city, whilst discovering Oslo\'s industrial past.',
    },
    no: {
      tagline:        'Byvandringer · Oslo',
      navHome:        '⌂\u00a0\u00a0Hjem',
      navAbout:       'i\u00a0\u00a0Om oss',
      navPrivacy:     '⚖\u00a0\u00a0Personvern',
      eyebrow:        'Selvguidede byvandringer',
      headline:       'Oppdag Oslo til fots',
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
      tour2Title:     'Akerselva og Oslos industrifortid',
      tour2Desc:      'Turen starter på Nydalen, så ta T-banen og finn nærmeste elv — Akerselva! Derfra går du og løser oppgaver på vei ned mot byen mens du oppdager Oslos industrihistorie.',
    },
    es: {
      tagline:        'Rutas a pie · Oslo',
      navHome:        '⌂\u00a0\u00a0Inicio',
      navAbout:       'i\u00a0\u00a0Acerca de',
      navPrivacy:     '⚖\u00a0\u00a0Privacidad',
      eyebrow:        'Rutas autoguiadas a pie',
      headline:       'Descubre Oslo a pie',
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
      tour2Title:     'Akerselva y el pasado industrial de Oslo',
      tour2Desc:      'La ruta comienza en Nydalen, así que toma el T-bane y busca el río más cercano: ¡el Akerselva! Desde allí caminarás resolviendo tareas en dirección al centro de la ciudad, descubriendo el pasado industrial de Oslo.',
    },
    de: {
      tagline:        'Stadtführungen zu Fuß · Oslo',
      navHome:        '⌂\u00a0\u00a0Startseite',
      navAbout:       'i\u00a0\u00a0Über uns',
      navPrivacy:     '⚖\u00a0\u00a0Datenschutz',
      eyebrow:        'Selbstgeführte Stadtrundgänge',
      headline:       'Oslo zu Fuß entdecken',
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
      tour2Title:     'Akerselva und Oslos Industrievergangenheit',
      tour2Desc:      'Die Tour beginnt in Nydalen — nimm die T-bane und finde den nächsten Fluss: den Akerselva! Von dort gehst du auf dem Weg in die Innenstadt und löst Aufgaben, während du Oslos Industriegeschichte entdeckst.',
    },
    fr: {
      tagline:        'Visites à pied · Oslo',
      navHome:        '⌂\u00a0\u00a0Accueil',
      navAbout:       'i\u00a0\u00a0À propos',
      navPrivacy:     '⚖\u00a0\u00a0Confidentialité',
      eyebrow:        'Visites autoguides à pied',
      headline:       'Découvrez Oslo à pied',
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
      tour2Title:     'L\'Akerselva et le passé industriel d\'Oslo',
      tour2Desc:      'La visite commence à Nydalen — prenez le T-bane et trouvez la rivière la plus proche\u00a0: l\'Akerselva\u00a0! De là, vous marcherez en résolvant des énigmes en direction du centre-ville, tout en découvrant le passé industriel d\'Oslo.',
    }
  },

  /* ── SCENE DATA BY LANGUAGE ── */
  scenes: {
    citycentre: {
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
    }
  }
};

/* ── LANGUAGE HELPERS ── */

function getLang() {
  return localStorage.getItem('loslo_lang') || 'en';
}

function setLang(code) {
  localStorage.setItem('loslo_lang', code);
  document.documentElement.lang = code;
  applyTranslations();
}

function T(key) {
  const lang = getLang();
  return (t.ui[lang] && t.ui[lang][key]) || t.ui.en[key] || key;
}

function getScenes(tourId) {
  const lang = getLang();
  const langScenes = t.scenes[tourId]?.[lang];
  const enScenes   = t.scenes[tourId]?.en;
  return (langScenes && langScenes.length) ? langScenes : (enScenes || []);
}

/* ── APPLY TRANSLATIONS TO PAGE ── */
function applyTranslations() {
  const lang = getLang();
  document.documentElement.lang = lang;

  // Helper: set text/HTML of element if it exists
  const set = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };
  const setAll = (cls, html) => {
    document.querySelectorAll('.' + cls).forEach(el => el.innerHTML = html);
  };

  // Menu tagline
  set('menuTagline', T('tagline'));
  set('menuTagline2', T('tagline'));

  // Menu nav links
  set('navHome',    T('navHome'));
  set('navAbout',   T('navAbout'));
  set('navPrivacy', T('navPrivacy'));
  set('navHome2',    T('navHome'));
  set('navAbout2',   T('navAbout'));
  set('navPrivacy2', T('navPrivacy'));

  // Front page
  set('frontEyebrow',   T('eyebrow'));
  set('frontHeadline',  T('headline'));
  set('tipsLabel',      T('tipsLabel'));
  set('toursLabel',     T('toursLabel'));
  set('tip1',           T('tip1'));
  set('tip2',           T('tip2'));
  set('tip3',           T('tip3'));
  set('tour1Title',     T('tour1Title'));
  set('tour1Desc',      T('tour1Desc'));
  set('tour2Title',     T('tour2Title'));
  set('tour2Desc',      T('tour2Desc'));
  set('soonBadge',      T('soon'));
  const startBtns = document.querySelectorAll('.tour-start-btn');
  startBtns.forEach(btn => {
    btn.innerHTML = T('startTour') + ' <span class="arrow">→</span>';
  });

  // Game page
  set('answerBtnLabel',  T('answer'));
  set('hintBtnLabel',    T('hint'));
  const input = document.getElementById('answerInput');
  if (input) input.placeholder = T('answerPlaceholder');
  const ansBtn = document.getElementById('answerBtn');
  if (ansBtn && ansBtn.textContent.trim() !== (T('finishTour').replace(' →',''))) {
    ansBtn.textContent = T('answer');
  }
  const hintBtn = document.getElementById('hintBtn');
  if (hintBtn) hintBtn.innerHTML = T('hint');

  // Finish page
  set('finishTourComplete', T('tourComplete'));
  set('finishBody',         T('finishBody'));
  set('finishTimeLbl',      T('yourTime'));
  set('finishFeedbackBtn',  T('leaveFeedback'));
  set('finishBackBtn',      T('backHome'));

  // Language switcher active state
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
    btn.setAttribute('aria-label', `Switch language to ${info.label}`);
    btn.addEventListener('click', () => setLang(code));
    container.appendChild(btn);
  });
}
