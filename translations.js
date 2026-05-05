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
      frontIntro:     'Bienvenue sur Los !, votre guide des personnes et des lieux d’Oslo. Los! vous guide à travers les rues de la ville. À différents endroits, vous recevrez des énigmes et des indices. Votre mission est de trouver la réponse.',
      tipsLabel:      'Tips & Tricks',
      toursLabel:     'Walking Tours',
      tip1:           'Les lieux où vous trouverez les réponses sont indiqués en <strong>gras</strong>. Si vous ne connaissez pas la ville, saisissez ces lieux dans votre application de cartographie préférée.',
      tip2:           'La durée de chaque visite est indicative et peut varier selon votre rythme de marche et les arrêts éventuels. Nous avons inclus quelques recommandations de cafés et d’autres endroits qui pourraient vous intéresser.',
      tip3:           'À la fin de la visite, nous vous indiquerons combien de temps vous avez mis. Si vous êtes en groupe, pourquoi ne pas en faire une compétition ?',
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
      finishBody:     "Félicitations — vous avez terminé la visite ! C’est ici que commence votre véritable aventure à Oslo. Nous vous avons conduit vers l’un des nombreux endroits merveilleux du centre-ville. De là, vous pouvez facilement vous rendre où vous le souhaitez.<br><br>Nous espérons que cette visite vous a plu. Vos retours nous aident à améliorer l’application et à développer de futures visites. Si vous avez apprécié la visite, vous pouvez soutenir le projet via le bouton ci-dessous.<br><br>Profitez bien de votre séjour à Oslo !",
      tour1Title:     'Oslo et la naissance de la Norvège',
      tour1Desc:      'Cette visite commence au bas de Karl Johan et vous guide à travers l’histoire d’Oslo et de la Norvège — conflits, culture et indépendance. Environ 4–5 km, une heure environ.',
      tour2Title:     'Courte visite du centre-ouest d’Oslo',
      tour2Desc:      'Cette visite commence au Nationaltheatret et vous emène dans la partie centre-ouest de la ville et le long du bord de mer. Vous ferez connaissance avec des personnages et des lieux locaux. Environ 4–5 km, une heure environ.',
      tour3Title:     'Les incontournables d’Oslo',
      tour3Desc:      'Cette visite commence au bas de Karl Johan et vous emène à travers une sélection des sites les plus importants d’Oslo. Parfaite si vous souhaitez voir les points forts de la ville. Environ 4–5 km, une heure environ.',
      tour4Title:     'Visite du centre-ville d’Oslo',
      tour4Desc:      'Cette visite commence au bas de Karl Johan et vous fait découvrir des sites connus et moins connus du centre-ville, en mettant l’accent sur des événements historiques. Environ 4–5 km, une heure environ.',
      tip4:           '⚠️ Les traductions sont réalisées depuis l’anglais par une machine. Des erreurs peuvent survenir. N’hésitez pas à nous le signaler si quelque chose semble incorrect !',
      aboutEyebrow:   'The project',
      aboutTitle:     'About Los!',
      aboutP1:        '<em>Los</em> est un mot norvégien désignant le pilote maritime — une personne qui aide les navires à naviguer en toute sécurité dans les eaux locales. Dans le fjord d’Oslo, on peut voir des bateaux-pilotes guider de grands navires de croisière jusqu’aux quais.',
      aboutP2:        'Los! est une application de visites <strong>gratuites</strong> et autoguides à pied à Oslo. L’idée est simple : venez, suivez les indices et découvrez l’histoire, les gens et les lieux de la ville à votre rythme — sans guide, sans réservation.',
      aboutP3:        'Chaque visite vous mène à travers de <strong>vraies rues et des espaces publics</strong>. En chemin, vous vous arrêterez devant des statues, des bâtiments et des monuments qui ont chacun une histoire à raconter. Les réponses sont toujours quelque part à proximité — regardez autour de vous et profitez de la balade.',
      aboutP4:        'Los! est actuellement en <strong>phase pilote</strong>. Les premières visites sont en ligne et d’autres sont en cours de développement. L’application est <strong>gratuite</strong>, mais les dons sont les bienvenus.',
      aboutP5:        'Los! est développé par <strong>Gard Ringen Høibjerg</strong>. L’équipe est motivée par l’idée d’aider les visiteurs à découvrir les coins les plus intéressants de la ville. Si vous avez des commentaires, détectez une erreur ou souhaitez nous contacter, veuillez utiliser notre <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">formulaire de retour</a>.',
      finishBody:     "Félicitations — vous avez terminé la visite ! C’est ici que commence votre véritable aventure à Oslo. Nous vous avons conduit vers l’un des nombreux endroits merveilleux du centre-ville. De là, vous pouvez facilement vous rendre où vous le souhaitez.<br><br>Nous espérons que cette visite vous a plu. Vos retours nous aident à améliorer l’application et à développer de futures visites. Si vous avez apprécié la visite, vous pouvez soutenir le projet via le bouton ci-dessous.<br><br>Profitez bien de votre séjour à Oslo !",
    },
    no: {
      tagline:        'Byvandringer · Oslo',
      navHome:        '⌂\u00a0\u00a0Hjem',
      navAbout:       'i\u00a0\u00a0Om oss',
      navPrivacy:     '⚖\u00a0\u00a0Personvern',
      eyebrow:        'Selvguidede byvandringer',
      headline:       'Oppdag Oslo til fots',
      frontIntro:     'Bienvenue sur Los !, votre guide des personnes et des lieux d’Oslo. Los! vous guide à travers les rues de la ville. À différents endroits, vous recevrez des énigmes et des indices. Votre mission est de trouver la réponse.',
      tipsLabel:      'Tips og triks',
      toursLabel:     'Byvandringer',
      tip1:           'Les lieux où vous trouverez les réponses sont indiqués en <strong>gras</strong>. Si vous ne connaissez pas la ville, saisissez ces lieux dans votre application de cartographie préférée.',
      tip2:           'La durée de chaque visite est indicative et peut varier selon votre rythme de marche et les arrêts éventuels. Nous avons inclus quelques recommandations de cafés et d’autres endroits qui pourraient vous intéresser.',
      tip3:           'À la fin de la visite, nous vous indiquerons combien de temps vous avez mis. Si vous êtes en groupe, pourquoi ne pas en faire une compétition ?',
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
      finishBody:     "Félicitations — vous avez terminé la visite ! C’est ici que commence votre véritable aventure à Oslo. Nous vous avons conduit vers l’un des nombreux endroits merveilleux du centre-ville. De là, vous pouvez facilement vous rendre où vous le souhaitez.<br><br>Nous espérons que cette visite vous a plu. Vos retours nous aident à améliorer l’application et à développer de futures visites. Si vous avez apprécié la visite, vous pouvez soutenir le projet via le bouton ci-dessous.<br><br>Profitez bien de votre séjour à Oslo !",
      tour1Title:     'Oslo et la naissance de la Norvège',
      tour1Desc:      'Cette visite commence au bas de Karl Johan et vous guide à travers l’histoire d’Oslo et de la Norvège — conflits, culture et indépendance. Environ 4–5 km, une heure environ.',
      tour2Title:     'Courte visite du centre-ouest d’Oslo',
      tour2Desc:      'Cette visite commence au Nationaltheatret et vous emène dans la partie centre-ouest de la ville et le long du bord de mer. Vous ferez connaissance avec des personnages et des lieux locaux. Environ 4–5 km, une heure environ.',
      tour3Title:     'Les incontournables d’Oslo',
      tour3Desc:      'Cette visite commence au bas de Karl Johan et vous emène à travers une sélection des sites les plus importants d’Oslo. Parfaite si vous souhaitez voir les points forts de la ville. Environ 4–5 km, une heure environ.',
      tour4Title:     'Visite du centre-ville d’Oslo',
      tour4Desc:      'Cette visite commence au bas de Karl Johan et vous fait découvrir des sites connus et moins connus du centre-ville, en mettant l’accent sur des événements historiques. Environ 4–5 km, une heure environ.',
      tip4:           '⚠️ Les traductions sont réalisées depuis l’anglais par une machine. Des erreurs peuvent survenir. N’hésitez pas à nous le signaler si quelque chose semble incorrect !',
      aboutEyebrow:   'Prosjektet',
      aboutTitle:     'Om Los!',
      aboutP1:        '<em>Los</em> est un mot norvégien désignant le pilote maritime — une personne qui aide les navires à naviguer en toute sécurité dans les eaux locales. Dans le fjord d’Oslo, on peut voir des bateaux-pilotes guider de grands navires de croisière jusqu’aux quais.',
      aboutP2:        'Los! est une application de visites <strong>gratuites</strong> et autoguides à pied à Oslo. L’idée est simple : venez, suivez les indices et découvrez l’histoire, les gens et les lieux de la ville à votre rythme — sans guide, sans réservation.',
      aboutP3:        'Chaque visite vous mène à travers de <strong>vraies rues et des espaces publics</strong>. En chemin, vous vous arrêterez devant des statues, des bâtiments et des monuments qui ont chacun une histoire à raconter. Les réponses sont toujours quelque part à proximité — regardez autour de vous et profitez de la balade.',
      aboutP4:        'Los! est actuellement en <strong>phase pilote</strong>. Les premières visites sont en ligne et d’autres sont en cours de développement. L’application est <strong>gratuite</strong>, mais les dons sont les bienvenus.',
      aboutP5:        'Los! est développé par <strong>Gard Ringen Høibjerg</strong>. L’équipe est motivée par l’idée d’aider les visiteurs à découvrir les coins les plus intéressants de la ville. Si vous avez des commentaires, détectez une erreur ou souhaitez nous contacter, veuillez utiliser notre <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">formulaire de retour</a>.',
      finishBody:     "Félicitations — vous avez terminé la visite ! C’est ici que commence votre véritable aventure à Oslo. Nous vous avons conduit vers l’un des nombreux endroits merveilleux du centre-ville. De là, vous pouvez facilement vous rendre où vous le souhaitez.<br><br>Nous espérons que cette visite vous a plu. Vos retours nous aident à améliorer l’application et à développer de futures visites. Si vous avez apprécié la visite, vous pouvez soutenir le projet via le bouton ci-dessous.<br><br>Profitez bien de votre séjour à Oslo !",
    },
    es: {
      tagline:        'Rutas a pie · Oslo',
      navHome:        '⌂\u00a0\u00a0Inicio',
      navAbout:       'i\u00a0\u00a0Acerca de',
      navPrivacy:     '⚖\u00a0\u00a0Privacidad',
      eyebrow:        'Rutas autoguiadas a pie',
      headline:       'Descubre Oslo a pie',
      frontIntro:     'Bienvenue sur Los !, votre guide des personnes et des lieux d’Oslo. Los! vous guide à travers les rues de la ville. À différents endroits, vous recevrez des énigmes et des indices. Votre mission est de trouver la réponse.',
      tipsLabel:      'Consejos',
      toursLabel:     'Rutas',
      tip1:           'Les lieux où vous trouverez les réponses sont indiqués en <strong>gras</strong>. Si vous ne connaissez pas la ville, saisissez ces lieux dans votre application de cartographie préférée.',
      tip2:           'La durée de chaque visite est indicative et peut varier selon votre rythme de marche et les arrêts éventuels. Nous avons inclus quelques recommandations de cafés et d’autres endroits qui pourraient vous intéresser.',
      tip3:           'À la fin de la visite, nous vous indiquerons combien de temps vous avez mis. Si vous êtes en groupe, pourquoi ne pas en faire une compétition ?',
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
      finishBody:     "Félicitations — vous avez terminé la visite ! C’est ici que commence votre véritable aventure à Oslo. Nous vous avons conduit vers l’un des nombreux endroits merveilleux du centre-ville. De là, vous pouvez facilement vous rendre où vous le souhaitez.<br><br>Nous espérons que cette visite vous a plu. Vos retours nous aident à améliorer l’application et à développer de futures visites. Si vous avez apprécié la visite, vous pouvez soutenir le projet via le bouton ci-dessous.<br><br>Profitez bien de votre séjour à Oslo !",
      tour1Title:     'Oslo et la naissance de la Norvège',
      tour1Desc:      'Cette visite commence au bas de Karl Johan et vous guide à travers l’histoire d’Oslo et de la Norvège — conflits, culture et indépendance. Environ 4–5 km, une heure environ.',
      tour2Title:     'Courte visite du centre-ouest d’Oslo',
      tour2Desc:      'Cette visite commence au Nationaltheatret et vous emène dans la partie centre-ouest de la ville et le long du bord de mer. Vous ferez connaissance avec des personnages et des lieux locaux. Environ 4–5 km, une heure environ.',
      tour3Title:     'Les incontournables d’Oslo',
      tour3Desc:      'Cette visite commence au bas de Karl Johan et vous emène à travers une sélection des sites les plus importants d’Oslo. Parfaite si vous souhaitez voir les points forts de la ville. Environ 4–5 km, une heure environ.',
      tour4Title:     'Visite du centre-ville d’Oslo',
      tour4Desc:      'Cette visite commence au bas de Karl Johan et vous fait découvrir des sites connus et moins connus du centre-ville, en mettant l’accent sur des événements historiques. Environ 4–5 km, une heure environ.',
      tip4:           '⚠️ Les traductions sont réalisées depuis l’anglais par une machine. Des erreurs peuvent survenir. N’hésitez pas à nous le signaler si quelque chose semble incorrect !',
      aboutEyebrow:   'El proyecto',
      aboutTitle:     'Acerca de Los!',
      aboutP1:        '<em>Los</em> est un mot norvégien désignant le pilote maritime — une personne qui aide les navires à naviguer en toute sécurité dans les eaux locales. Dans le fjord d’Oslo, on peut voir des bateaux-pilotes guider de grands navires de croisière jusqu’aux quais.',
      aboutP2:        'Los! est une application de visites <strong>gratuites</strong> et autoguides à pied à Oslo. L’idée est simple : venez, suivez les indices et découvrez l’histoire, les gens et les lieux de la ville à votre rythme — sans guide, sans réservation.',
      aboutP3:        'Chaque visite vous mène à travers de <strong>vraies rues et des espaces publics</strong>. En chemin, vous vous arrêterez devant des statues, des bâtiments et des monuments qui ont chacun une histoire à raconter. Les réponses sont toujours quelque part à proximité — regardez autour de vous et profitez de la balade.',
      aboutP4:        'Los! est actuellement en <strong>phase pilote</strong>. Les premières visites sont en ligne et d’autres sont en cours de développement. L’application est <strong>gratuite</strong>, mais les dons sont les bienvenus.',
      aboutP5:        'Los! est développé par <strong>Gard Ringen Høibjerg</strong>. L’équipe est motivée par l’idée d’aider les visiteurs à découvrir les coins les plus intéressants de la ville. Si vous avez des commentaires, détectez une erreur ou souhaitez nous contacter, veuillez utiliser notre <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">formulaire de retour</a>.',
      finishBody:     "Félicitations — vous avez terminé la visite ! C’est ici que commence votre véritable aventure à Oslo. Nous vous avons conduit vers l’un des nombreux endroits merveilleux du centre-ville. De là, vous pouvez facilement vous rendre où vous le souhaitez.<br><br>Nous espérons que cette visite vous a plu. Vos retours nous aident à améliorer l’application et à développer de futures visites. Si vous avez apprécié la visite, vous pouvez soutenir le projet via le bouton ci-dessous.<br><br>Profitez bien de votre séjour à Oslo !",
    },
    de: {
      tagline:        'Stadtführungen zu Fuß · Oslo',
      navHome:        '⌂\u00a0\u00a0Startseite',
      navAbout:       'i\u00a0\u00a0Über uns',
      navPrivacy:     '⚖\u00a0\u00a0Datenschutz',
      eyebrow:        'Selbstgeführte Stadtrundgänge',
      headline:       'Oslo zu Fuß entdecken',
      frontIntro:     'Bienvenue sur Los !, votre guide des personnes et des lieux d’Oslo. Los! vous guide à travers les rues de la ville. À différents endroits, vous recevrez des énigmes et des indices. Votre mission est de trouver la réponse.',
      tipsLabel:      'Tipps & Hinweise',
      toursLabel:     'Stadtrundgänge',
      tip1:           'Les lieux où vous trouverez les réponses sont indiqués en <strong>gras</strong>. Si vous ne connaissez pas la ville, saisissez ces lieux dans votre application de cartographie préférée.',
      tip2:           'La durée de chaque visite est indicative et peut varier selon votre rythme de marche et les arrêts éventuels. Nous avons inclus quelques recommandations de cafés et d’autres endroits qui pourraient vous intéresser.',
      tip3:           'À la fin de la visite, nous vous indiquerons combien de temps vous avez mis. Si vous êtes en groupe, pourquoi ne pas en faire une compétition ?',
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
      finishBody:     "Félicitations — vous avez terminé la visite ! C’est ici que commence votre véritable aventure à Oslo. Nous vous avons conduit vers l’un des nombreux endroits merveilleux du centre-ville. De là, vous pouvez facilement vous rendre où vous le souhaitez.<br><br>Nous espérons que cette visite vous a plu. Vos retours nous aident à améliorer l’application et à développer de futures visites. Si vous avez apprécié la visite, vous pouvez soutenir le projet via le bouton ci-dessous.<br><br>Profitez bien de votre séjour à Oslo !",
      tour1Title:     'Oslo et la naissance de la Norvège',
      tour1Desc:      'Cette visite commence au bas de Karl Johan et vous guide à travers l’histoire d’Oslo et de la Norvège — conflits, culture et indépendance. Environ 4–5 km, une heure environ.',
      tour2Title:     'Courte visite du centre-ouest d’Oslo',
      tour2Desc:      'Cette visite commence au Nationaltheatret et vous emène dans la partie centre-ouest de la ville et le long du bord de mer. Vous ferez connaissance avec des personnages et des lieux locaux. Environ 4–5 km, une heure environ.',
      tour3Title:     'Les incontournables d’Oslo',
      tour3Desc:      'Cette visite commence au bas de Karl Johan et vous emène à travers une sélection des sites les plus importants d’Oslo. Parfaite si vous souhaitez voir les points forts de la ville. Environ 4–5 km, une heure environ.',
      tour4Title:     'Visite du centre-ville d’Oslo',
      tour4Desc:      'Cette visite commence au bas de Karl Johan et vous fait découvrir des sites connus et moins connus du centre-ville, en mettant l’accent sur des événements historiques. Environ 4–5 km, une heure environ.',
      tip4:           '⚠️ Les traductions sont réalisées depuis l’anglais par une machine. Des erreurs peuvent survenir. N’hésitez pas à nous le signaler si quelque chose semble incorrect !',
      aboutEyebrow:   'Das Projekt',
      aboutTitle:     'Über Los!',
      aboutP1:        '<em>Los</em> est un mot norvégien désignant le pilote maritime — une personne qui aide les navires à naviguer en toute sécurité dans les eaux locales. Dans le fjord d’Oslo, on peut voir des bateaux-pilotes guider de grands navires de croisière jusqu’aux quais.',
      aboutP2:        'Los! est une application de visites <strong>gratuites</strong> et autoguides à pied à Oslo. L’idée est simple : venez, suivez les indices et découvrez l’histoire, les gens et les lieux de la ville à votre rythme — sans guide, sans réservation.',
      aboutP3:        'Chaque visite vous mène à travers de <strong>vraies rues et des espaces publics</strong>. En chemin, vous vous arrêterez devant des statues, des bâtiments et des monuments qui ont chacun une histoire à raconter. Les réponses sont toujours quelque part à proximité — regardez autour de vous et profitez de la balade.',
      aboutP4:        'Los! est actuellement en <strong>phase pilote</strong>. Les premières visites sont en ligne et d’autres sont en cours de développement. L’application est <strong>gratuite</strong>, mais les dons sont les bienvenus.',
      aboutP5:        'Los! est développé par <strong>Gard Ringen Høibjerg</strong>. L’équipe est motivée par l’idée d’aider les visiteurs à découvrir les coins les plus intéressants de la ville. Si vous avez des commentaires, détectez une erreur ou souhaitez nous contacter, veuillez utiliser notre <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">formulaire de retour</a>.',
      finishBody:     "Félicitations — vous avez terminé la visite ! C’est ici que commence votre véritable aventure à Oslo. Nous vous avons conduit vers l’un des nombreux endroits merveilleux du centre-ville. De là, vous pouvez facilement vous rendre où vous le souhaitez.<br><br>Nous espérons que cette visite vous a plu. Vos retours nous aident à améliorer l’application et à développer de futures visites. Si vous avez apprécié la visite, vous pouvez soutenir le projet via le bouton ci-dessous.<br><br>Profitez bien de votre séjour à Oslo !",
    },
    fr: {
      tagline:        'Visites à pied · Oslo',
      navHome:        '⌂\u00a0\u00a0Accueil',
      navAbout:       'i\u00a0\u00a0À propos',
      navPrivacy:     '⚖\u00a0\u00a0Confidentialité',
      eyebrow:        'Visites autoguides à pied',
      headline:       'Découvrez Oslo à pied',
      frontIntro:     'Bienvenue sur Los !, votre guide des personnes et des lieux d’Oslo. Los! vous guide à travers les rues de la ville. À différents endroits, vous recevrez des énigmes et des indices. Votre mission est de trouver la réponse.',
      tipsLabel:      'Conseils pratiques',
      toursLabel:     'Visites',
      tip1:           'Les lieux où vous trouverez les réponses sont indiqués en <strong>gras</strong>. Si vous ne connaissez pas la ville, saisissez ces lieux dans votre application de cartographie préférée.',
      tip2:           'La durée de chaque visite est indicative et peut varier selon votre rythme de marche et les arrêts éventuels. Nous avons inclus quelques recommandations de cafés et d’autres endroits qui pourraient vous intéresser.',
      tip3:           'À la fin de la visite, nous vous indiquerons combien de temps vous avez mis. Si vous êtes en groupe, pourquoi ne pas en faire une compétition ?',
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
      finishBody:     "Félicitations — vous avez terminé la visite ! C’est ici que commence votre véritable aventure à Oslo. Nous vous avons conduit vers l’un des nombreux endroits merveilleux du centre-ville. De là, vous pouvez facilement vous rendre où vous le souhaitez.<br><br>Nous espérons que cette visite vous a plu. Vos retours nous aident à améliorer l’application et à développer de futures visites. Si vous avez apprécié la visite, vous pouvez soutenir le projet via le bouton ci-dessous.<br><br>Profitez bien de votre séjour à Oslo !",
      tour1Title:     'Oslo et la naissance de la Norvège',
      tour1Desc:      'Cette visite commence au bas de Karl Johan et vous guide à travers l’histoire d’Oslo et de la Norvège — conflits, culture et indépendance. Environ 4–5 km, une heure environ.',
      tour2Title:     'Courte visite du centre-ouest d’Oslo',
      tour2Desc:      'Cette visite commence au Nationaltheatret et vous emène dans la partie centre-ouest de la ville et le long du bord de mer. Vous ferez connaissance avec des personnages et des lieux locaux. Environ 4–5 km, une heure environ.',
      tour3Title:     'Les incontournables d’Oslo',
      tour3Desc:      'Cette visite commence au bas de Karl Johan et vous emène à travers une sélection des sites les plus importants d’Oslo. Parfaite si vous souhaitez voir les points forts de la ville. Environ 4–5 km, une heure environ.',
      tour4Title:     'Visite du centre-ville d’Oslo',
      tour4Desc:      'Cette visite commence au bas de Karl Johan et vous fait découvrir des sites connus et moins connus du centre-ville, en mettant l’accent sur des événements historiques. Environ 4–5 km, une heure environ.',
      tip4:           '⚠️ Les traductions sont réalisées depuis l’anglais par une machine. Des erreurs peuvent survenir. N’hésitez pas à nous le signaler si quelque chose semble incorrect !',
      aboutEyebrow:   'Le projet',
      aboutTitle:     'À propos de Los!',
      aboutP1:        '<em>Los</em> est un mot norvégien désignant le pilote maritime — une personne qui aide les navires à naviguer en toute sécurité dans les eaux locales. Dans le fjord d’Oslo, on peut voir des bateaux-pilotes guider de grands navires de croisière jusqu’aux quais.',
      aboutP2:        'Los! est une application de visites <strong>gratuites</strong> et autoguides à pied à Oslo. L’idée est simple : venez, suivez les indices et découvrez l’histoire, les gens et les lieux de la ville à votre rythme — sans guide, sans réservation.',
      aboutP3:        'Chaque visite vous mène à travers de <strong>vraies rues et des espaces publics</strong>. En chemin, vous vous arrêterez devant des statues, des bâtiments et des monuments qui ont chacun une histoire à raconter. Les réponses sont toujours quelque part à proximité — regardez autour de vous et profitez de la balade.',
      aboutP4:        'Los! est actuellement en <strong>phase pilote</strong>. Les premières visites sont en ligne et d’autres sont en cours de développement. L’application est <strong>gratuite</strong>, mais les dons sont les bienvenus.',
      aboutP5:        'Los! est développé par <strong>Gard Ringen Høibjerg</strong>. L’équipe est motivée par l’idée d’aider les visiteurs à découvrir les coins les plus intéressants de la ville. Si vous avez des commentaires, détectez une erreur ou souhaitez nous contacter, veuillez utiliser notre <a href="https://forms.gle/ZnFbVnRitNRhxWGB6" target="_blank" rel="noopener" class="about-link">formulaire de retour</a>.',
      finishBody:     "Félicitations — vous avez terminé la visite ! C’est ici que commence votre véritable aventure à Oslo. Nous vous avons conduit vers l’un des nombreux endroits merveilleux du centre-ville. De là, vous pouvez facilement vous rendre où vous le souhaitez.<br><br>Nous espérons que cette visite vous a plu. Vos retours nous aident à améliorer l’application et à développer de futures visites. Si vous avez apprécié la visite, vous pouvez soutenir le projet via le bouton ci-dessous.<br><br>Profitez bien de votre séjour à Oslo !",
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
          hints: ["You need to walk for a while.", "The installation is at the far end of the fortress walls."]
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
          text: "Make your way to the square at the bottom of <b>Karl Johans gate</b>, in front of the railway station building called <b>Østbanehallen</b>. There you will find an animal that is not native to Norway. Some people wonder how it ended up here.\n\nWhich animal is standing in the square?",
          answers: ["tiger"],
          hints: ["It is bigger than a cat.", "It is not a seagull."]
        },
        {
          chapter: "Scene 2",
          text: "Tigerstaden — Tiger City — is one of Oslo’s most famous nicknames. The name comes from a poem by the great Norwegian author Bjørnstjerne Bjørnson, who also wrote the words to Norway’s national anthem. The tiger represents the many dangers that can be found in a big city.\n\nMake your way to <b>Stortinget</b>, the Norwegian Parliament. The building opened in 1866, at a time when Norway was in a union controlled by Sweden. Directly in front of the parliament, on your left as you face the square, there is a modern statue of a man who played an important role in this union.\n\nWho is the statue of?",
          answers: ["christian fredrik", "kristian fredrik", "christian frederik", "kristian frederik", "christian august"],
          hints: ["He has a full body — not just a head and chest.", "He has a religious-sounding name."]
        },
        {
          chapter: "Scene 3",
          text: "In early 1814, Napoleon had lost the war and the Treaty of Kiel was signed. As often happens, the winners — including Sweden — took control of the losers’ territory. Norway, which was then under Danish rule, was handed over to Sweden.\n\nAt the time, the man shown in the statue — Danish Crown Prince Christian VIII (1786–1848) — was the governor-general of Norway. He opposed the Swedish claim on the country. In short, he worked towards Norwegian independence. He first claimed the crown by right of birth, then agreed to be elected by the Norwegian Constituent Assembly on 17 May, taking the name Christian Frederik. That same day, the Norwegian constitution was signed.\n\nNorway did not become fully independent for another 91 years. It entered a union with Sweden in August 1814.\n\nPolitics alone does not build a nation. Continue walking down <b>Karl Johan</b>, past Spikersuppa, towards <b>Nationaltheatret</b> (the National Theatre). Explore the area around the building and look for a statue of a Frenchman among the Norwegians.\n\nWho is the character in the statue?",
          answers: ["jean de france"],
          hints: ["The statue is beardless.", "Walk around the theatre — it is in the square on the opposite side.", "He is close to a bus stop."]
        },
        {
          chapter: "Scene 4",
          text: "Jean de France was written by the Norwegian-Danish author Ludvig Holberg (1684–1754) in 1744, and was famously performed by Per Aabel at the National Theatre. The play is about a young Danish man — Hans Frandsen, aged 20 — who travels to Paris and becomes obsessed with fashion. When he returns home, his father rejects him and Danish society turns its back on him. Although the story is set in Denmark, it speaks to a broader Northern European attitude towards outside or “foreign” influence. Many people today still recognise this feeling — of being rejected for being different or “too much.”\n\nWhile some people fear standing out, our next character had no such concern. Make your way up to <b>Slottet</b> (the Royal Palace), where you will find a man on a horse.\n\n<i>If the Queen’s Park is open, it is a lovely place for a short walk. The entrance is to the left of the castle. Open from 18 May to 1 October.</i>\n\nWho is he?",
          answers: ["karl johan", "jean baptiste bernadotte", "karl iii johan", "carl johan"],
          hints: ["The statue is quite large — it is hard to miss once you see the castle.", "Look for a small plaque at the base of the statue."]
        },
        {
          chapter: "Scene 5",
          text: "Karl Johan (1763–1844), the man who gave his name to the street you have been walking along, was originally a French general — Jean Baptiste Bernadotte. In 1810, he left Napoleon’s army and became the Crown Prince of Sweden, a country that was then at war with France. In Sweden, he took the name Karl Johan. By 1814, he found himself in a position where he could become king of not one but two countries in Northern Europe.\n\nAs we saw earlier, the Norwegians preferred independence under Christian Frederik rather than joining a new union. War broke out, Norway was not well prepared, and the country entered a union with Sweden in 1814. Norway remained in that union until it finally became independent in 1905. Despite a difficult start to the relationship, the Norwegians came to like him.\n\nNow leave <b>Slottsparken</b> by walking down the hill and turning right. Cross the street and enter <b>7. juli plassen</b> (July 7th Square). There you will find a very tall man.\n\nWho is he?",
          answers: ["haakon vii", "haakon 7", "haakon den syvende", "king haakon"],
          hints: ["He is very tall.", "He was king of Norway when it became independent in 1905."]
        },
        {
          chapter: "Scene 6",
          text: "Haakon VII (1872–1957), born Prince Carl of Denmark, became King of Norway by election when the country gained independence from Sweden in 1905. A free country at last. As King, he took the name Haakon VII. He is the grandfather of the current King, Harald V.\n\nHaakon VII ruled a free Norway for 35 years. Then, on 9 April 1940, Germany invaded and forced the King and the government to flee the country. From exile, he became an important symbol of Norwegian resistance. His royal symbol — H7 — was painted on walls all across Norway. When he returned in 1945, large crowds were waiting to welcome him at Rådhusplassen.\n\nNow make your way to <b>Rådhusplassen</b> (the square in front of Oslo City Hall). In the large square, facing the sea, there are several statues. Find the statue of a man who appears ready for battle.\n\nWhat is his name?",
          answers: ["tordenskiold", "peter tordenskiold", "peter wessel"],
          hints: ["The statue is on the far side of the square, close to the fortress.", "The statue stands next to a cannon."]
        },
        {
          chapter: "Scene 7",
          text: "Peter Tordenskiold (1690–1720) was a naval officer in the Danish-Norwegian navy. He became famous for a series of battles against Sweden. During one battle off the southern coast of Norway in 1714, his ship ran out of ammunition. He sent a representative to the enemy to ask if they could borrow some gunpowder so they could continue fighting.\n\nThe answer: No!\n\nFrom Tordenskiold, turn right and walk along the waterfront. At the end of the fortress wall, you will find a number of empty chairs.\n\nWho is the artist?",
          answers: ["antony gormley", "gormley"],
          hints: ["If you are walking with walls on both sides, or have crossed the road to the left, you have gone too far."]
        },
        {
          chapter: "Scene 8",
          text: "During the Second World War, Norwegian collaborators helped the German occupying forces deport 772 Jews from Norway. Most were sent to Auschwitz. Only 37 survived. Most were taken from these very docks on German ships.\n\nCross the street and enter <b>Akershus Festning</b> (Akershus Fortress) through the small door in the fortress wall, behind the grass field.\n\nConstruction of the fortress began around the year 1300. It has played an important role in Norway’s defence ever since. Today it serves as the administrative headquarters of the Norwegian armed forces.\n\nOnce inside at <b>Festningsplassen</b>, you will find a statue of a large woman and a smaller man.\n\n<i>There are many cafés near Oslo City Hall. Why not stop at Erketunet Gardsbakeri for a coffee and something to eat?</i>\n\nWhat is the name of the artist?",
          answers: ["gunnar t. janson", "gunnar janson", "janson"],
          hints: ["The statue stands in the centre of a large open square, surrounded by trees."]
        },
        {
          chapter: "Scene 9",
          text: "The statue commemorates those who died during the German occupation of Norway, from 9 April 1940 to 8 May 1945. Akershus Fortress was used by the German forces during the war, and several resistance fighters were executed there. When peace came, Vidkun Quisling — who had declared himself head of state and served as a German puppet after the invasion — was also executed at the fortress.\n\nNational identity, in Norway and elsewhere, is shaped by conflict, struggle, negotiation, cultural expression and debate.\n\nLeave the fortress by following <b>Kirkegata</b>. Almost immediately, you will find an elegant building with green doors and an impressive entrance.\n\nWhat is the name of this building?",
          answers: ["gamle logen"],
          hints: ["If you reach a park, you have gone too far.", "The building is next to the Otto Ruge statue."]
        },
        {
          chapter: "Scene 10",
          text: "Gamle Logen — the Old Lodge — was completed in 1839. It was originally built as a Freemason lodge, concert hall and ballroom. In the mid-1850s, a wave of romantic nationalism swept through Norway. People were searching for what made Norway truly Norwegian, and the answer was often found in rural culture and traditions.\n\nIn 1849, the famous Norwegian violinist Ole Bull invited Myllargutten — the Miller Boy, whose real name was Torgeir Augundsson (1801–1872) — to perform at Gamle Logen for the urban elite. Myllarguten was known as an exceptional folk musician. Just before he was about to play, his violin case would not open. He became increasingly anxious. When he finally got his instrument out and began to play, all his fears disappeared.\n\nOne audience member later described the experience: <i>“The miller boy sat as one gazes upon the depths of a river, and like bridges suspended above, our seats shook at his rhythm.”</i> He made quite an impression.\n\nFor the final stop, turn right and walk down <b>Glacisgata</b> until you reach the waterfront. Follow the waterfront until you find a large and architecturally striking building. It opened in 2008, cost 4.3 billion Norwegian kroner — about 86 million cups of Oslo coffee — and has since become a city landmark.\n\nWhat is the building?",
          answers: ["opera house", "opera", "operahuset", "den norske opera", "den norske opera og ballett"],
          hints: ["The answer can be the name of the building, or the activity that normally takes place there.", "When you find the building, make sure to walk up onto the roof before you continue."]
        }
      ],

      no: [
        {
          chapter: "Scene 1",
          text: "Gå til plassen nederst i <b>Karl Johans gate</b>, foran jernbanestasjonsbygget <b>Østbanehallen</b>. Der vil du finne et dyr som ikke er hjemmehørende i norsk natur. Noen lurer på hvordan det havnet der.\n\nHvilket dyr står på plassen?",
          answers: ["tiger"],
          hints: ["Det er større enn en katt.", "Det er ikke en måke."]
        },
        {
          chapter: "Scene 2",
          text: "Tigerstaden — Tiger City — er et av Oslos mest kjente kallenavn. Navnet stammer fra et dikt av den store norske forfatteren Bjørnstjerne Bjørnson, som også skrev teksten til Norges nasjonalsang. Tigeren er ment å illustrere de mange farene som lurer i en stor by.\n\nGå til <b>Stortinget</b>, det norske parlamentet. Bygningen åpnet i 1866, i en periode da Norge var i union under svensk kontroll. Rett foran parlamentet, på din venstre side når du står på plassen, står en moderne statue av en mann som spilte en viktig rolle i denne unionen.\n\nHvem forestiller statuen?",
          answers: ["christian fredrik", "kristian fredrik", "christian frederik", "kristian frederik", "christian august"],
          hints: ["Han har en hel kropp — ikke bare hode og overkropp.", "Han har et religisøt klingende navn."]
        },
        {
          chapter: "Scene 3",
          text: "Tidlig i 1814 hadde Napoleon tapt krigen og Kieltraktaten ble undertegnet. Som often skjer, tok vinnerne — blant annet Sverige — kontroll over de tapende partenes territorier. Norge, som da var under dansk styre, ble overlevert til Sverige.\n\nPada den tiden var mannen avbildet i statuen — dansk kronprins Christian VIII (1786–1848) — stattholder i Norge. Han motarbeidet de svenske kravene på landet. Kort sagt arbeidet han for norsk selvstendighet. Han krevde først kronen gjennom arveretten, og gikk deretter med på å bli valgt av Riksforsamlingen den 17. mai, under navnet Christian Frederik. Samme dag ble den norske grunnloven undertegnet.\n\nNorge ble likevel ikke fullt ut selvstendig på 91 år til. Det gikk inn i union med Sverige i august 1814.\n\nPolitikk alene er ikke nok til å bygge en nasjon. Fortsett nedover <b>Karl Johan</b>, forbi Spikersuppa, mot <b>Nationaltheatret</b>. Utforsk området rundt bygningen og se etter en statue av en franskmann blant nordmennene.\n\nHvilken person fremstiller statuen?",
          answers: ["jean de france"],
          hints: ["Statuen er skjeggfri.", "Gå rundt teateret — statuen står på plassen på motsatt side.", "Han står nær en bussholdeplass."]
        },
        {
          chapter: "Scene 4",
          text: "Jean de France ble skrevet av den norsk-danske forfatteren Ludvig Holberg (1684–1754) i 1744, og ble berømt fremført av Per Aabel ved Nationaltheatret. Stükket handler om en ung dansk mann — Hans Frandsen, 20 år gammel — som reiser til Paris og blir besatt av mote. Når han vender hjem, avviser faren ham og det danske samfunnet snur ryggen til ham. Selv om historien utspiller seg i Danmark, gjenspeiler den en bredere nordeuropåisk holdning til fremmed påvirkning. Mange i dag kjenner seg igjen i denne følelsen — av å bli avvist for å være annerledes eller “for mye.”\n\nNoen frykter å skille seg ut, men vår neste karakter hadde absolutt ingen slik bekymring. Gå opp mot <b>Slottet</b>, der du vil finne en mann til hest.\n\n<i>Hvis Dronningens park er åpen, er det et vakkert sted for en liten tur. Inngangen er til venstre for slottet. Åpent 18. mai til 1. oktober.</i>\n\nHvem er han?",
          answers: ["karl johan", "jean baptiste bernadotte", "karl iii johan", "carl johan"],
          hints: ["Statuen er ganske stor — vanskelig å overse når du ser slottet.", "Se etter en liten plakett ved sokkelen."]
        },
        {
          chapter: "Scene 5",
          text: "Karl Johan (1763–1844), mannen som ga navn til gaten du har gått langs, var opprinnelig en fransk general — Jean Baptiste Bernadotte. I 1810 forlot han Napoleons hær og ble kronprins av Sverige, et land som da var i krig med Frankrike. I Sverige tok han navnet Karl Johan. Innen 1814 befant han seg i en posisjon der han kunne bli konge av ikke ett, men to land i Nord-Europa.\n\nSom vi så tidligere foretrakk nordmennene selvstendighet under Christian Frederik fremfor å slutte seg til en ny union. Krig brrøt ut, Norge var dårlig forberedt, og landet gikk inn i union med Sverige i 1814. Norge ble værende i den unionen til det endelig ble selvstendig i 1905. Til tross for en vanskelig start, kom nordmennene til å like ham.\n\nGå nå ut av <b>Slottsparken</b> ved å gå ned bakken og ta til høyre. Kryss gaten og gå inn på <b>7. juli plassen</b>. Der vil du finne en veldig tall mann.\n\nHvem er han?",
          answers: ["haakon vii", "haakon 7", "haakon den syvende", "kong haakon"],
          hints: ["Han er veldig høy.", "Han var Norges konge da landet ble selvstendig i 1905."]
        },
        {
          chapter: "Scene 6",
          text: "Håkon VII (1872–1957), født prins Carl av Danmark, ble Norges konge gjennom valg da landet vant sin selvstendighet fra Sverige i 1905. Et fritt land endelig! Som konge tok han navnet Håkon VII. Han er bestefaren til nåværende kong Harald V.\n\nHåkon VII styrte et fritt Norge i 35 år. Så, den 9. april 1940, invaderte Tyskland og tvang kongen og regjeringen til å flykte. Fra eksil ble han et viktig symbol på norsk motstand. Hans kongelige symbol — H7 — ble malt på vegger over hele Norge. Da han kom tilbake i 1945, ventet store folkemengder på å ønske ham velkommen på Rådhusplassen.\n\nGå nå til <b>Rådhusplassen</b>. I den store plassen foran Rådhuset, mot havet, står det flere statuer. Finn statuen av en mann som ser ut som om han er klar for kamp.\n\nHva heter han?",
          answers: ["tordenskiold", "peter tordenskiold", "peter wessel"],
          hints: ["Statuen er på den andre siden av plassen, nær festningen.", "Statuen står ved siden av en kanon."]
        },
        {
          chapter: "Scene 7",
          text: "Peter Tordenskiold (1690–1720) var en marineofficer i den dansk-norske marinen. Han ble berømt for en rekke slag mot Sverige. Under ett slag utenfor Norges sørlige kyst i 1714 gikk skipet hans tom for ammunisjon. Han sendte en representant til fienden for å spørre om de kunne låne noe krutt for å fortsette kampen.\n\nSvaret: Nei!\n\nFra Tordenskiold-statuen, ta til høyre og gå langs bryggepromenaden. På slutten av festningsveggene vil du finne et antall tomme stoler.\n\nHvem er kunstneren?",
          answers: ["antony gormley", "gormley"],
          hints: ["Hvis du går med vegger på begge sider, eller har krysset veien til venstre, har du gått for langt."]
        },
        {
          chapter: "Scene 8",
          text: "Under andre verdenskrig hjalp norske kollaboratører de tyske okkupasjonsstyrkene med å deportere 772 jøder fra Norge. De fleste ble sendt til Auschwitz. Bare 37 overlevde. De fleste ble ført fra disse kaiene på tyske skip.\n\nKryss gaten og gå inn i <b>Akershus festning</b> gjennom den lille døren i festningsveggen, bak grassløkket.\n\nByggingen av festningen startet rundt år 1300. Den har spilt en viktig rolle i Norges forsvar siden da. I dag er den det administrative hovedkvarteret for Forsvaret.\n\nNår du er inne på <b>Festningsplassen</b>, vil du finne en statue av en stor kvinne og en mindre mann.\n\n<i>Det er mange kafeer nær Oslo Rådhus. Hvorfor ikke stikke innom Erketunet Gardsbakeri for en kaffe og noe å spise?</i>\n\nHva heter kunstneren?",
          answers: ["gunnar t. janson", "gunnar janson", "janson"],
          hints: ["Statuen står i midten av en stor åpen plass, omgitt av trær."]
        },
        {
          chapter: "Scene 9",
          text: "Statuen minnes dem som døde under den tyske okkupasjonen av Norge, fra 9. april 1940 til 8. mai 1945. Akershus festning ble brukt av de tyske styrkene under krigen, og flere motstandsfolk ble henrettet der. Da freden kom, ble også Vidkun Quisling — som hadde erklært seg som statssjef og fungert som tysk marionett etter invasjonen — henrettet på festningen.\n\nNasjonal identitet, i Norge og andre steder, formes av konflikt, kamp, forhandlinger, kulturelle uttrykk og debatt.\n\nForlat festningen ved å følge <b>Kirkegata</b>. Nesten umiddelbart vil du finne en elegant bygning med grønne dører og en imponerende inngang.\n\nHva heter denne bygningen?",
          answers: ["gamle logen"],
          hints: ["Hvis du når en park, har du gått for langt.", "Bygningen er ved siden av Otto Ruge-statuen."]
        },
        {
          chapter: "Scene 10",
          text: "Gamle Logen ble ferdigstilt i 1839. Den ble opprinnelig bygget som frimurerloge, konsertsal og ballsal. På midten av 1850-tallet slo romantisk nasjonalisme gjennom i Norge. Folk søkte etter det som gjorde Norge genuint norsk, og svaret ble ofte funnet i bygdekulturen og tradisjonene.\n\nI 1849 inviterte den berømte norske fiolinisten Ole Bull Myllargutten — Gøguttens virkelige navn var Torgeir Augundsson (1801–1872) — til å opptre på Gamle Logen for byens elite. Myllarguten var kjent som en eksepsjonell folkemusiker. Like før han skulle begynne å spille, ville ikke fiolinkassen åpne seg. Han ble stadig mer nervs. Da han endelig fikk frem instrumentet og begynte å spille, forsvant all frykten.\n\nEt publikumsmedlem beskrev opplevelsen slik: <i>“Gøgutten satt som en som med ophsiet blikk stirrer inn i en elves dybder, og likesom broene som hviler over, så skjalv våre seter i hans takt.”</i> Det trenger ikke si seg selv at han gjorde et inntrykk.\n\nFor den siste stansen, ta til høyre og gå ned <b>Glacisgata</b> til du når sjøen. Følg bryggepromenaden til du finner en stor og arkitektonisk imponerende bygning. Den åpnet i 2008, kostet 4,3 milliarder norske kroner — omtrent 86 millioner kopper Oslo-kaffe — og har siden blitt et bylandemerke.\n\nHva er bygningen?",
          answers: ["opera house", "opera", "operahuset", "den norske opera", "den norske opera og ballett"],
          hints: ["Svaret kan være navnet på bygningen eller aktiviteten som normalt foregstår der.", "Når du finner bygningen, pass på å gå opp på taket før du fortsetter."]
        }
      ],

      es: [
        {
          chapter: "Escena 1",
          text: "Dirígete a la plaza al final de <b>Karl Johans gate</b>, frente al edificio de la estación de tren llamado <b>Østbanehallen</b>. Allí encontrarás un animal que no es nativo de Noruega. Algunas personas se preguntan cómo llegó hasta aquí.\n\n¿Qué animal está en la plaza?",
          answers: ["tiger", "tigre"],
          hints: ["Es más grande que un gato.", "No es una gaviota."]
        },
        {
          chapter: "Escena 2",
          text: "Tigerstaden — la Ciudad del Tigre — es uno de los apodos más famosos de Oslo. El nombre proviene de un poema del gran autor noruego Bjørnstjerne Bjørnson, quien también escribió la letra del himno nacional noruego. El tigre representa los muchos peligros que pueden encontrarse en una gran ciudad.\n\nDirígete al <b>Stortinget</b>, el Parlamento noruego. El edificio fue inaugurado en 1866, en una época en que Noruega se encontraba en una unión controlada por Suecia. Directamente frente al parlamento, a tu izquierda cuando miras la plaza, hay una estatua moderna de un hombre que desempeñó un papel importante en esta unión.\n\n¿A quién representa la estatua?",
          answers: ["christian fredrik", "kristian fredrik", "christian frederik", "kristian frederik", "christian august"],
          hints: ["Tiene cuerpo completo — no solo cabeza y pecho.", "Tiene un nombre de sonido religioso."]
        },
        {
          chapter: "Escena 3",
          text: "A principios de 1814, Napoleón había perdido la guerra y se firmó el Tratado de Kiel. Como suele ocurrir, los ganadores — entre ellos Suecia — tomaron el control del territorio de los perdedores. Noruega, que entonces estaba bajo gobierno danés, fue entregada a Suecia.\n\nEn aquel momento, el hombre representado en la estatua — el príncipe heredero danés Christian VIII (1786–1848) — era el gobernador general de Noruega. Se opuso a las pretensiones suecas sobre el país. En pocas palabras, trabajó para conseguir la independencia noruega. Primero reclamó la corona por derecho de nacimiento, luego aceptó ser elegido por la Asamblea Constituyente el 17 de mayo, tomando el nombre de Christian Frederik. Ese mismo día se firmó la constitución noruega.\n\nSin embargo, Noruega no se convirtió en completamente independiente hasta 91 años más tarde. Entró en una unión con Suecia en agosto de 1814.\n\nLa política sola no construye una nación. Continúa caminando por <b>Karl Johan</b>, pasando Spikersuppa, hacia el <b>Nationaltheatret</b> (el Teatro Nacional). Explora el área alrededor del edificio y busca una estatua de un francés entre los noruegos.\n\n¿Qué personaje representa la estatua?",
          answers: ["jean de france"],
          hints: ["La estatua no tiene barba.", "Rodea el teatro — está en la plaza del lado opuesto.", "Está cerca de una parada de autobús."]
        },
        {
          chapter: "Escena 4",
          text: "Jean de France fue escrita por el autor noruego-danés Ludvig Holberg (1684–1754) en 1744, y fue famosamente interpretada por Per Aabel en el Teatro Nacional. La obra trata de un joven danés — Hans Frandsen, de 20 años — que viaja a París y se obsesiona con la moda. Cuando vuelve a casa, su padre lo rechaza y la sociedad danesa le da la espalda. Aunque la historia está ambientada en Dinamarca, habla de una actitud más amplia del norte de Europa hacia la influencia exterior o “extranjera”. Mucha gente hoy en día todavía reconoce este sentimiento — de ser rechazada por ser diferente o “demasiado.”\n\nMientras que algunas personas temen destacar, nuestro próximo personaje no tenía tal preocupación. Dirígete a <b>Slottet</b> (el Palacio Real), donde encontrarás a un hombre a caballo.\n\n<i>Si el Parque de la Reina está abierto, es un lugar encantador para un corto paseo. La entrada está a la izquierda del castillo. Abierto del 18 de mayo al 1 de octubre.</i>\n\n¿Quién es?",
          answers: ["karl johan", "jean baptiste bernadotte", "karl iii johan", "carl johan"],
          hints: ["La estatua es bastante grande — difícil de no ver una vez que ves el castillo.", "Busca una pequeña placa en la base de la estatua."]
        },
        {
          chapter: "Escena 5",
          text: "Karl Johan (1763–1844), el hombre que dio su nombre a la calle por la que has estado caminando, era originalmente un general francés — Jean Baptiste Bernadotte. En 1810, abandonó el ejército de Napoleón y se convirtió en el Príncipe Heredero de Suecia, un país que entonces estaba en guerra con Francia. En Suecia, tomó el nombre de Karl Johan. Para 1814, se encontró en posición de convertirse en rey no de uno sino de dos países del norte de Europa.\n\nComo vimos antes, los noruegos preferían la independencia bajo Christian Frederik antes que unirse a una nueva unión. Estalló la guerra, Noruega no estaba bien preparada, y el país entró en una unión con Suecia en 1814. Noruega permaneció en esa unión hasta que finalmente se independizó en 1905. A pesar de un comienzo difícil, los noruegos llegaron a apreciarle.\n\nAhora sal de <b>Slottsparken</b> caminando cúesta abajo y girando a la derecha. Cruza la calle y entra en <b>7. juli plassen</b> (Plaza del 7 de julio). Allí encontrarás un hombre muy alto.\n\n¿Quién es?",
          answers: ["haakon vii", "haakon 7", "rey haakon", "king haakon"],
          hints: ["Es muy alto.", "Fue rey de Noruega cuando el país se independizó en 1905."]
        },
        {
          chapter: "Escena 6",
          text: "Haakon VII (1872–1957), nacido como príncipe Carl de Dinamarca, se convirtió en Rey de Noruega mediante elección cuando el país obtuvo la independencia de Suecia en 1905. ¡Un país libre por fin! Como rey, tomó el nombre de Haakon VII. Es el abuelo del actual Rey, Harald V.\n\nHaakon VII gobernó una Noruega libre durante 35 años. Luego, el 9 de abril de 1940, Alemania invadió y obligó al Rey y al gobierno a huir del país. Desde el exilio, se convirtió en un importante símbolo de la resistencia noruega. Su símbolo real — H7 — fue pintado en paredes por toda Noruega. Cuando regresó en 1945, grandes multitudes esperaban para darle la bienvenida en Rådhusplassen.\n\nAhora dirígete a <b>Rådhusplassen</b> (la plaza frente al Ayuntamiento de Oslo). En la gran plaza, de cara al mar, hay varias estatuas. Encuentra la estatua del hombre que parece listo para la batalla.\n\n¿Cuál es su nombre?",
          answers: ["tordenskiold", "peter tordenskiold", "peter wessel"],
          hints: ["La estatua está en el lado opuesto de la plaza, cerca de la fortaleza.", "La estatua está junto a un cañón."]
        },
        {
          chapter: "Escena 7",
          text: "Peter Tordenskiold (1690–1720) fue un oficial naval de la marina danesa-noruega. Se hizo famoso por una serie de batallas contra Suecia. Durante una batalla frente a la costa sur de Noruega en 1714, su barco se quedó sin munición. Envió a un representante al enemigo para preguntar si podían pedir prestado algo de pólvora para continuar combatiendo.\n\nLa respuesta: ¡No!\n\nDesde Tordenskiold, gira a la derecha y camina a lo largo del paseo marítimo. Al final del muro de la fortaleza, encontrarás un número de sillas vacías.\n\n¿Quién es el artista?",
          answers: ["antony gormley", "gormley"],
          hints: ["Si estás caminando con paredes en ambos lados, o has cruzado la calle hacia la izquierda, te has pasado."]
        },
        {
          chapter: "Escena 8",
          text: "Durante la Segunda Guerra Mundial, colaboradores noruegos ayudaron a las fuerzas de ocupación alemanas a deportar 772 judíos de Noruega. La mayoría fueron enviados a Auschwitz. Solo 37 sobrevivieron. La mayoría fueron llevados desde estos mismos muelles en barcos alemanes.\n\nCruza la calle y entra en <b>Akershus Festning</b> (la Fortaleza de Akershus) por la pequeña puerta en el muro de la fortaleza, detrás del campo de hierba.\n\nLa construcción de la fortaleza comenzó alrededor del año 1300. Ha jugado un papel importante en la defensa de Noruega desde entonces. Hoy sirve como sede administrativa de las fuerzas armadas noruegas.\n\nUna vez dentro en <b>Festningsplassen</b>, encontrarás una estatua de una mujer grande y un hombre más pequeño.\n\n<i>Hay muchos cafés cerca del Ayuntamiento de Oslo. ¿Por qué no parar en Erketunet Gardsbakeri para un café y algo de comer?</i>\n\n¿Cuál es el nombre del artista?",
          answers: ["gunnar t. janson", "gunnar janson", "janson"],
          hints: ["La estatua está en el centro de una gran plaza abierta, rodeada de árboles."]
        },
        {
          chapter: "Escena 9",
          text: "La estatua conmemora a quienes murieron durante la ocupación alemana de Noruega, del 9 de abril de 1940 al 8 de mayo de 1945. La Fortaleza de Akershus fue utilizada por las fuerzas alemanas durante la guerra, y varios combatientes de la resistencia fueron ejecutados allí. Cuando llegó la paz, Vidkun Quisling — quien se había declarado jefe de estado y servido como marioneta alemana tras la invasión — también fue ejecutado en la fortaleza.\n\nLa identidad nacional, en Noruega y en otras partes, está formada por el conflicto, la lucha, la negociación, la expresión cultural y el debate.\n\nSal de la fortaleza siguiendo <b>Kirkegata</b>. Casi de inmediato, encontrarás un elegante edificio con puertas verdes y una entrada impresionante.\n\n¿Cuál es el nombre de este edificio?",
          answers: ["gamle logen"],
          hints: ["Si llegas a un parque, te has pasado.", "El edificio está junto a la estatua de Otto Ruge."]
        },
        {
          chapter: "Escena 10",
          text: "Gamle Logen — la Antigua Logia — fue terminada en 1839. Fue construida originalmente como logia masónica, sala de conciertos y salón de baile. A mediados de la década de 1850, una ola de nacionalismo romántico recorrió Noruega. La gente buscaba lo que hacía a Noruega verdaderamente noruega, y la respuesta se encontraba a menudo en la cultura rural y las tradiciones.\n\nEn 1849, el famoso violinista noruego Ole Bull invitó a Myllargutten — el Chico del Molino, cuyo nombre real era Torgeir Augundsson (1801–1872) — a actuar en Gamle Logen ante la élite urbana. Myllarguten era conocido como un excepcional músico folclórico. Justo antes de que fuera a tocar, su estuche de violín no se abría. Se fue poniendo cada vez más ansioso. Cuando finalmente sacó su instrumento y comenzó a tocar, todos sus miedos desaparecieron.\n\nUn miembro del público describió la experiencia más tarde: <i>“El chico del molino estaba sentado como alguien que mira las profundidades de un río, y como puentes suspendidos sobre él, nuestros asientos temblaban a su ritmo.”</i> Hizo bastante impresión.\n\nPara la última parada, gira a la derecha y camina por <b>Glacisgata</b> hasta llegar al paseo marítimo. Sigue el paseo hasta que encuentres un edificio grande y arquitectónicamente llamativo. Abrió en 2008, costó 4,3 mil millones de coronas noruegas — unos 86 millones de tazas de café de Oslo — y desde entonces se ha convertido en un punto de referencia de la ciudad.\n\n¿Cuál es el edificio?",
          answers: ["opera house", "opera", "operahuset", "den norske opera", "den norske opera og ballett", "ópera"],
          hints: ["La respuesta puede ser el nombre del edificio o la actividad que normalmente tiene lugar allí.", "Cuando encuentres el edificio, asegúrate de subir al tejado antes de continuar."]
        }
      ],

      de: [
        {
          chapter: "Szene 1",
          text: "Begib dich auf den Platz am unteren Ende der <b>Karl Johans gate</b>, vor dem Bahnhofsgebäude <b>Østbanehallen</b>. Dort wirst du ein Tier finden, das in Norwegen nicht heimisch ist. Manche fragen sich, wie es dorthin gelangt ist.\n\nWelches Tier steht auf dem Platz?",
          answers: ["tiger"],
          hints: ["Es ist größer als eine Katze.", "Es ist keine Möwe."]
        },
        {
          chapter: "Szene 2",
          text: "Tigerstaden — Tigerstadt — ist einer der bekanntesten Spitznamen Oslos. Der Name geht auf ein Gedicht des großen norwegischen Autors Bjørnstjerne Bjørnson zurück, der auch den Text der norwegischen Nationalhymne verfasste. Der Tiger soll die vielen Gefahren symbolisieren, die man in einer großen Stadt antreffen kann.\n\nBegib dich zum <b>Stortinget</b>, dem norwegischen Parlament. Das Gebäude wurde 1866 eröffnet, zu einer Zeit, als Norwegen in einer von Schweden kontrollierten Union war. Direkt vor dem Parlament, auf deiner linken Seite, wenn du auf den Platz schaust, befindet sich eine moderne Statue eines Mannes, der eine wichtige Rolle in dieser Union spielte.\n\nWen stellt die Statue dar?",
          answers: ["christian fredrik", "kristian fredrik", "christian frederik", "kristian frederik", "christian august"],
          hints: ["Er hat einen vollständigen Körper — nicht nur Kopf und Oberkörper.", "Er hat einen religiös klingenden Namen."]
        },
        {
          chapter: "Szene 3",
          text: "Anfang 1814 hatte Napoleon den Krieg verloren und der Kieler Vertrag wurde unterzeichnet. Wie so oft nahmen die Sieger — darunter Schweden — die Kontrolle über das Territorium der Verlierer. Norwegen, das damals unter dänischer Herrschaft stand, wurde an Schweden übergeben.\n\nZu dieser Zeit war der in der Statue abgebildete Mann — der dänische Kronprinz Christian VIII. (1786–1848) — Generalgouverneur von Norwegen. Er widersetzte sich den schwedischen Ansprüchen auf das Land. Kurz gesagt: Er arbeitete auf die norwegische Unabhängigkeit hin. Er beanspruchte zunächst die Krone durch sein Geburtsrecht, stimmte dann aber zu, am 17. Mai von der Nationalversammlung gewählt zu werden, und nahm den Namen Christian Frederik an. Noch am selben Tag wurde die norwegische Verfassung unterzeichnet.\n\nNorwegen wurde jedoch erst 91 Jahre später vollständig unabhängig. Im August 1814 trat es einer Union mit Schweden bei.\n\nPolitik allein baut keine Nation auf. Gehe weiter die <b>Karl Johan</b> hinunter, an Spikersuppa vorbei, Richtung <b>Nationaltheatret</b>. Erkunde die Umgebung des Gebäudes und suche nach einer Statue eines Franzosen unter den Norwegern.\n\nWelche Figur stellt die Statue dar?",
          answers: ["jean de france"],
          hints: ["Die Statue ist bartlos.", "Geh um das Theater herum — sie steht auf dem Platz auf der gegenüberliegenden Seite.", "Sie befindet sich in der Nähe einer Bushaltestelle."]
        },
        {
          chapter: "Szene 4",
          text: "Jean de France wurde 1744 von dem norwegisch-dänischen Autor Ludvig Holberg (1684–1754) geschrieben und wurde berühmt durch die Aufführung von Per Aabel am Nationaltheater. Das Stück handelt von einem jungen Dänen — Hans Frandsen, 20 Jahre alt — der nach Paris reist und von Mode besessen wird. Als er nach Hause zurückkehrt, weist ihn sein Vater ab und die dänische Gesellschaft kehrt ihm den Rücken. Obwohl die Geschichte in Dänemark spielt, spricht sie eine breitere nordeuropäische Haltung gegenüber äußerem oder „fremdem“ Einfluss an. Viele Menschen erkennen dieses Gefühl auch heute noch — abgelehnt zu werden, weil man anders ist oder „zu viel“ ist.\n\nWährend manche Menschen Angst haben aufzufallen, hatte unser nächster Charakter keinerlei solche Bedenken. Begib dich zum <b>Slottet</b> (dem Königlichen Schloss), wo du einen Mann auf einem Pferd findest.\n\n<i>Wenn der Königinnenpark geöffnet ist, ist es ein wunderschöner Ort für einen kurzen Spaziergang. Der Eingang befindet sich links vom Schloss. Geöffnet vom 18. Mai bis zum 1. Oktober.</i>\n\nWer ist er?",
          answers: ["karl johan", "jean baptiste bernadotte", "karl iii johan", "carl johan"],
          hints: ["Die Statue ist ziemlich groß — schwer zu übersehen, wenn man das Schloss sieht.", "Suche nach einem kleinen Schild am Sockel der Statue."]
        },
        {
          chapter: "Szene 5",
          text: "Karl Johan (1763–1844), der Mann, der der Straße, entlang der du gegangen bist, seinen Namen gab, war ursprünglich ein französischer General — Jean Baptiste Bernadotte. 1810 verließ er Napoleons Armee und wurde Kronprinz von Schweden, einem Land, das damals mit Frankreich im Krieg war. In Schweden nahm er den Namen Karl Johan an. Bis 1814 befand er sich in einer Position, in der er König nicht eines, sondern zweier Länder in Nordeuropa werden konnte.\n\nWie wir früher gesehen haben, bevorzugten die Norweger die Unabhängigkeit unter Christian Frederik anstatt sich einer neuen Union anzuschließen. Es kam zum Krieg, Norwegen war nicht gut vorbereitet, und das Land trat 1814 einer Union mit Schweden bei. Norwegen blieb in dieser Union, bis es schließlich 1905 unabhängig wurde. Trotz eines schwierigen Beginns kamen die Norweger dazu, ihn zu mögen.\n\nVerlasse nun den <b>Slottsparken</b>, indem du den Hügel hinuntergehst und rechts abbiegst. Überquere die Straße und betrete den <b>7. juli plassen</b> (7.-Juli-Platz). Dort findest du einen sehr großen Mann.\n\nWer ist er?",
          answers: ["haakon vii", "haakon 7", "könig haakon", "king haakon"],
          hints: ["Er ist sehr groß.", "Er war König von Norwegen, als das Land 1905 unabhängig wurde."]
        },
        {
          chapter: "Szene 6",
          text: "Haakon VII. (1872–1957), als Prinz Carl von Dänemark geboren, wurde durch eine Wahl zum König von Norwegen, als das Land 1905 die Unabhängigkeit von Schweden erlangte. Endlich ein freies Land! Als König nahm er den Namen Haakon VII. an. Er ist der Großvater des aktuellen Königs Harald V.\n\nHaakon VII. regierte ein freies Norwegen 35 Jahre lang. Dann, am 9. April 1940, marschierte Deutschland ein und zwang den König und die Regierung zur Flucht. Aus dem Exil wurde er zu einem wichtigen Symbol des norwegischen Widerstands. Sein königliches Symbol — H7 — wurde an Wänden in ganz Norwegen gemalt. Als er 1945 zurückkehrte, warteten große Menschenmengen, um ihn auf dem Rådhusplassen willkommen zu heißen.\n\nBegib dich nun zum <b>Rådhusplassen</b> (dem Platz vor dem Osloer Rathaus). Auf dem großen Platz, mit Blick auf das Meer, stehen mehrere Statuen. Finde die Statue des Mannes, der bereit für den Kampf zu sein scheint.\n\nWie heißt er?",
          answers: ["tordenskiold", "peter tordenskiold", "peter wessel"],
          hints: ["Die Statue befindet sich auf der anderen Seite des Platzes, nahe der Festung.", "Die Statue steht neben einer Kanone."]
        },
        {
          chapter: "Szene 7",
          text: "Peter Tordenskiold (1690–1720) war ein Marineoffizier der dänisch-norwegischen Marine. Er wurde durch eine Reihe von Schlachten gegen Schweden berühmt. Während einer Schlacht vor der Südostküste Norwegens im Jahr 1714 ging seinem Schiff die Munition aus. Er schickte einen Vertreter zum Feind, um zu fragen, ob sie Schießpulver leihen könnten, um weiter zu kämpfen.\n\nDie Antwort: Nein!\n\nVon Tordenskiold aus biege rechts ab und gehe am Ufer entlang. Am Ende der Festungsmauer findest du eine Reihe leerer Stühle.\n\nWer ist der Künstler?",
          answers: ["antony gormley", "gormley"],
          hints: ["Wenn du mit Wänden auf beiden Seiten gehst oder die Straße nach links überquert hast, bist du zu weit gegangen."]
        },
        {
          chapter: "Szene 8",
          text: "Während des Zweiten Weltkriegs halfen norwegische Kollaborateure den deutschen Besatzungstruppen, 772 Juden aus Norwegen zu deportieren. Die meisten wurden nach Auschwitz geschickt. Nur 37 überlebten. Die meisten wurden von diesen Kais aus auf deutschen Schiffen deportiert.\n\nÜberquere die Straße und betrete die <b>Akershus Festning</b> (Festung Akershus) durch die kleine Tür in der Festungsmauer, hinter dem Rasenfeld.\n\nDer Bau der Festung begann um das Jahr 1300. Sie hat seitdem eine wichtige Rolle in Norwegens Verteidigung gespielt. Heute dient sie als Verwaltungshauptsitz der norwegischen Streitkräfte.\n\nSobald du drin bist auf dem <b>Festningsplassen</b>, findest du eine Statue einer großen Frau und eines kleineren Mannes.\n\n<i>Es gibt viele Cafés in der Nähe des Osloer Rathauses. Warum nicht im Erketunet Gardsbakeri für einen Kaffee und etwas zu essen Halt machen?</i>\n\nWie heißt der Künstler?",
          answers: ["gunnar t. janson", "gunnar janson", "janson"],
          hints: ["Die Statue steht in der Mitte eines großen offenen Platzes, umgeben von Bäumen."]
        },
        {
          chapter: "Szene 9",
          text: "Die Statue erinnert an jene, die während der deutschen Besatzung Norwegens, vom 9. April 1940 bis zum 8. Mai 1945, starben. Die Festung Akershus wurde von den deutschen Streitkräften während des Krieges genutzt, und mehrere Widerstandskämpfer wurden dort hingerichtet. Als der Frieden kam, wurde auch Vidkun Quisling — der sich selbst zum Staatschef erklärt hatte und nach der Invasion als deutsche Marionette gedient hatte — in der Festung hingerichtet.\n\nNationale Identität wird in Norwegen und anderswo durch Konflikte, Kämpfe, Verhandlungen, kulturellen Ausdruck und Debatten geprägt.\n\nVerlasse die Festung über die <b>Kirkegata</b>. Fast sofort findest du ein elegantes Gebäude mit grünen Türen und einem beeindruckenden Eingang.\n\nWie heißt dieses Gebäude?",
          answers: ["gamle logen"],
          hints: ["Wenn du einen Park erreichst, bist du zu weit gegangen.", "Das Gebäude befindet sich neben der Statue von Otto Ruge."]
        },
        {
          chapter: "Szene 10",
          text: "Gamle Logen — die Alte Loge — wurde 1839 fertiggestellt. Sie wurde ursprünglich als Freimaurerloge, Konzertsaal und Ballsaal erbaut. Mitte der 1850er Jahre erfasste eine Welle romantischen Nationalismus Norwegen. Die Menschen suchten nach dem, was Norwegen wirklich norwegisch machte, und die Antwort fand sich oft in der ländlichen Kultur und den Traditionen.\n\n1849 lud der berühmte norwegische Geiger Ole Bull Myllargutten — den Mühlenjungen, dessen wirklicher Name Torgeir Augundsson (1801–1872) war — ein, in der Gamle Logen vor der städtischen Elite aufzutreten. Myllarguten war als außergewgewöhnlicher Volksmusiker bekannt. Kurz bevor er spielen wollte, öffnete sich sein Geigenkoffer nicht. Er wurde zunehmend ängstlich. Als er schließlich sein Instrument herausnehmen und spielen konnte, verschwanden all seine Ängste.\n\nEin Zuschauer beschrieb die Erfahrung später: <i>„Der Mühlenjunge saß da wie jemand, der in die Tiefen eines Flusses schaut, und wie Brücken, die darüber schweben, so zitterten unsere Sitze in seinem Rhythmus.“</i> Er machte ganz schön Eindruck.\n\nFür den letzten Halt biege rechts ab und gehe die <b>Glacisgata</b> hinunter, bis du zum Ufer gelangst. Folge der Promenade, bis du ein großes und architektonisch beeindruckendes Gebäude findest. Es öffnete im Jahr 2008, kostete 4,3 Milliarden norwegische Kronen — etwa 86 Millionen Tassen Osloer Kaffee — und ist seitdem zu einem Wahrzeichen der Stadt geworden.\n\nWas ist das Gebäude?",
          answers: ["opera house", "opera", "operahuset", "den norske opera", "den norske opera og ballett", "oper"],
          hints: ["Die Antwort kann der Name des Gebäudes oder die Aktivität sein, die dort normalerweise stattfindet.", "Wenn du das Gebäude gefunden hast, achte darauf, das Dach zu betreten, bevor du weitermachst."]
        }
      ],

      fr: [
        {
          chapter: "Scène 1",
          text: "Rendez-vous sur la place au bas de la <b>Karl Johans gate</b>, devant le bâtiment de la gare appelé <b>Østbanehallen</b>. Vous y trouverez un animal qui n’est pas natif de Norvège. Certaines personnes se demandent comment il s’est retrouvé là.\n\nQuel animal se trouve sur la place ?",
          answers: ["tiger", "tigre"],
          hints: ["Il est plus grand qu’un chat.", "Ce n’est pas une mouette."]
        },
        {
          chapter: "Scène 2",
          text: "Tigerstaden — la Ville du Tigre — est l’un des surnoms les plus célèbres d’Oslo. Le nom vient d’un poème du grand auteur norvégien Bjørnstjerne Bjørnson, qui a également écrit les paroles de l’hymne national norvégien. Le tigre représente les nombreux dangers que l’on peut rencontrer dans une grande ville.\n\nRendez-vous au <b>Stortinget</b>, le Parlement norvégien. Le bâtiment a été inauguré en 1866, à une époque où la Norvège était dans une union contrôlée par la Suède. Directement devant le parlement, sur votre gauche lorsque vous regardez la place, se trouve une statue moderne d’un homme qui a joué un rôle important dans cette union.\n\nQui représente la statue ?",
          answers: ["christian fredrik", "kristian fredrik", "christian frederik", "kristian frederik", "christian august"],
          hints: ["Il a un corps entier — pas seulement une tête et un buste.", "Il a un nom à consonance religieuse."]
        },
        {
          chapter: "Scène 3",
          text: "Début 1814, Napoléon avait perdu la guerre et le Traité de Kiel fut signé. Comme cela arrive souvent, les vainqueurs — dont la Suède — prirent le contrôle du territoire des perdants. La Norvège, qui était alors sous domination danoise, fut remise à la Suède.\n\nÀ l’époque, l’homme représenté dans la statue — le prince héritier danois Christian VIII (1786–1848) — était le gouverneur général de Norvège. Il s’opposa aux revendications suédoises sur le pays. En bref, il œuvra pour l’indépendance norvégienne. Il revendiqua d’abord la couronne par droit de naissance, puis accepta d’être élu par l’Assemblée constituante le 17 mai, prenant le nom de Christian Frederik. Ce même jour, la constitution norvégienne fut signée.\n\nCependant, la Norvège ne devint pas entièrement indépendante avant 91 ans. Elle entra dans une union avec la Suède en août 1814.\n\nLa politique seule ne construit pas une nation. Continuez à marcher sur la <b>Karl Johan</b>, en passant par Spikersuppa, vers le <b>Nationaltheatret</b>. Explorez les alentours du bâtiment et cherchez une statue d’un Français parmi les Norvégiens.\n\nQuel personnage représente la statue ?",
          answers: ["jean de france"],
          hints: ["La statue est imberbe.", "Faites le tour du théâtre — elle se trouve sur la place du côté opposé.", "Elle est près d’un arrêt de bus."]
        },
        {
          chapter: "Scène 4",
          text: "Jean de France a été écrit en 1744 par l’auteur norvégien-danois Ludvig Holberg (1684–1754), et fut fameusement interprété par Per Aabel au Théâtre National. La pièce raconte l’histoire d’un jeune Danois — Hans Frandsen, 20 ans — qui voyage à Paris et devient obssédé par la mode. Quand il rentre chez lui, son père le rejette et la société danoise lui tourne le dos. Bien que l’histoire se passe au Danemark, elle reflète une attitude nord-européenne plus large envers l’influence extérieure ou « étrangère ». Beaucoup de gens reconnaissent encore aujourd’hui ce sentiment — d’être rejeté pour être différent ou « trop ».\n\nAlors que certaines personnes craignent de se démarquer, notre prochain personnage n’avait pas de tels soucis. Montez vers le <b>Slottet</b> (le Palais Royal), où vous trouverez un homme à cheval.\n\n<i>Si le Parc de la Reine est ouvert, c’est un endroit charmant pour une courte promenade. L’entrée est à gauche du château. Ouvert du 18 mai au 1er octobre.</i>\n\nQui est-il ?",
          answers: ["karl johan", "jean baptiste bernadotte", "karl iii johan", "carl johan"],
          hints: ["La statue est assez grande — difficile à manquer une fois que vous voyez le château.", "Cherchez une petite plaque à la base de la statue."]
        },
        {
          chapter: "Scène 5",
          text: "Karl Johan (1763–1844), l’homme qui a donné son nom à la rue que vous avez parcourue, était à l’origine un général français — Jean Baptiste Bernadotte. En 1810, il quitta l’armée de Napoléon et devint Prince Héritier de Suède, un pays alors en guerre avec la France. En Suède, il prit le nom de Karl Johan. En 1814, il se retrouva en position de pouvoir devenir roi non pas d’un, mais de deux pays d’Europe du Nord.\n\nComme nous l’avons vu plus tôt, les Norvégiens préféraient l’indépendance sous Christian Frederik plutôt que de rejoindre une nouvelle union. La guerre éclata, la Norvège n’était pas bien préparée, et le pays entra dans une union avec la Suède en 1814. La Norvège resta dans cette union jusqu’à ce qu’elle devienne finalement indépendante en 1905. Malgré un début difficile, les Norvégiens finirent par l’apprécier.\n\nQuittez maintenant le <b>Slottsparken</b> en descendant la colline et en tournant à droite. Traversez la rue et entrez dans le <b>7. juli plassen</b> (la Place du 7 juillet). Vous y trouverez un homme très grand.\n\nQui est-il ?",
          answers: ["haakon vii", "haakon 7", "roi haakon", "king haakon"],
          hints: ["Il est très grand.", "Il était roi de Norvège quand le pays est devenu indépendant en 1905."]
        },
        {
          chapter: "Scène 6",
          text: "Haakon VII (1872–1957), né prince Carl de Danemark, devint Roi de Norvège par élection lorsque le pays obtint son indépendance de la Suède en 1905. Un pays libre enfin ! En tant que Roi, il prit le nom de Haakon VII. Il est le grand-père du Roi actuel, Harald V.\n\nHaakon VII gouverna une Norvège libre pendant 35 ans. Puis, le 9 avril 1940, l’Allemagne envahit le pays et força le Roi et le gouvernement à fuir. Depuis l’exil, il devint un important symbole de la résistance norvégienne. Son symbole royal — H7 — fut peint sur des murs partout en Norvège. Quand il revint en 1945, de grandes foules attendaient pour l’accueillir à Rådhusplassen.\n\nRendez-vous maintenant au <b>Rådhusplassen</b> (la place devant l’Hôtel de Ville d’Oslo). Sur la grande place, face à la mer, il y a plusieurs statues. Trouvez la statue de l’homme qui semble prêt pour la bataille.\n\nQuel est son nom ?",
          answers: ["tordenskiold", "peter tordenskiold", "peter wessel"],
          hints: ["La statue est du côté opposé de la place, près de la forteresse.", "La statue est à côté d’un canon."]
        },
        {
          chapter: "Scène 7",
          text: "Peter Tordenskiold (1690–1720) était un officier naval de la marine dano-norvégienne. Il est devenu célèbre grâce à une série de batailles contre la Suède. Lors d’une bataille au large de la côte sud de la Norvège en 1714, son navire manqua de munitions. Il envoya un représentant à l’ennemi pour demander s’ils pouvaient emprunter de la poudre à canon pour continuer à se battre.\n\nLa réponse : Non !\n\nDepuis Tordenskiold, tournez à droite et marchez le long du front de mer. Au bout du mur de la forteresse, vous trouverez un certain nombre de chaises vides.\n\nQui est l’artiste ?",
          answers: ["antony gormley", "gormley"],
          hints: ["Si vous marchez avec des murs des deux côtés, ou avez traversé la route vers la gauche, vous êtes allé trop loin."]
        },
        {
          chapter: "Scène 8",
          text: "Pendant la Seconde Guerre mondiale, des collaborateurs norvégiens aidèrent les forces d’occupation allemandes à déporter 772 Juifs de Norvège. La plupart furent envoyés à Auschwitz. Seulement 37 survivèrent. La plupart furent emmenés depuis ces quais mêmes sur des navires allemands.\n\nTraversez la rue et entrez dans la <b>Akershus Festning</b> (la Forteresse d’Akershus) par la petite porte dans le mur de la forteresse, derrière le champ d’herbe.\n\nLa construction de la forteresse a commencé vers l’an 1300. Elle a joué un rôle important dans la défense de la Norvège depuis lors. Aujourd’hui, elle sert de siège administratif des forces armées norvégiennes.\n\nUne fois à l’intérieur sur le <b>Festningsplassen</b>, vous trouverez une statue d’une grande femme et d’un homme plus petit.\n\n<i>Il y a de nombreux cafés près de l’Hôtel de Ville d’Oslo. Pourquoi ne pas s’arrêter à l’Erketunet Gardsbakeri pour un café et quelque chose à manger ?</i>\n\nQuel est le nom de l’artiste ?",
          answers: ["gunnar t. janson", "gunnar janson", "janson"],
          hints: ["La statue se trouve au centre d’une grande place ouverte, entourée d’arbres."]
        },
        {
          chapter: "Scène 9",
          text: "La statue commémore ceux qui sont morts pendant l’occupation allemande de la Norvège, du 9 avril 1940 au 8 mai 1945. La Forteresse d’Akershus a été utilisée par les forces allemandes pendant la guerre, et plusieurs combattants de la résistance y ont été exécutés. Quand la paix arriva, Vidkun Quisling — qui s’était déclaré chef d’État et avait servi de marionnette allemande après l’invasion — fut également exécuté à la forteresse.\n\nL’identité nationale, en Norvège et ailleurs, est façonnée par les conflits, les luttes, les négociations, l’expression culturelle et le débat.\n\nQuittez la forteresse en suivant la <b>Kirkegata</b>. Presque immédiatement, vous trouverez un élégant bâtiment avec des portes vertes et une entrée impressionnante.\n\nQuel est le nom de ce bâtiment ?",
          answers: ["gamle logen"],
          hints: ["Si vous atteignez un parc, vous êtes allé trop loin.", "Le bâtiment est à côté de la statue d’Otto Ruge."]
        },
        {
          chapter: "Scène 10",
          text: "Gamle Logen — la Vieille Loge — fut achevée en 1839. Elle fut construite à l’origine comme une loge maçonnique, salle de concerts et salle de bal. Au milieu des années 1850, une vague de nationalisme romantique déferla sur la Norvège. Les gens cherchaient ce qui rendait la Norvège vraiment norvégienne, et la réponse se trouvait souvent dans la culture rurale et les traditions.\n\nEn 1849, le célèbre violoniste norvégien Ole Bull invita Myllargutten — le Garçon du Moulin, dont le vrai nom était Torgeir Augundsson (1801–1872) — à se produire à Gamle Logen devant l’élite urbaine. Myllarguten était connu comme un musicien folklorique exceptionnel. Juste avant qu’il commence à jouer, son étui à violon ne voulait pas s’ouvrir. Il devint de plus en plus anxieux. Quand il réussit enfin à sortir son instrument et à jouer, toutes ses craintes disparurent.\n\nUn membre du public décrivit l’expérience plus tard : <i>« Le garçon du moulin était assis comme quelqu’un qui contemple les profondeurs d’une rivière, et comme des ponts suspendus au-dessus, nos sièges tremblaient à son rythme. »</i> Il fit tout à fait une impression.\n\nPour le dernier arrêt, tournez à droite et marchez le long de la <b>Glacisgata</b> jusqu’à ce que vous atteigniez le front de mer. Suivez le front de mer jusqu’à trouver un grand bâtiment architecturalement remarquable. Il a ouvert en 2008, a coûté 4,3 milliards de couronnes norvégiennes — environ 86 millions de tasses de café d’Oslo — et est depuis devenu un monument de la ville.\n\nQuel est ce bâtiment ?",
          answers: ["opera house", "opera", "operahuset", "den norske opera", "den norske opera og ballett", "opéra"],
          hints: ["La réponse peut être le nom du bâtiment ou l’activité qui s’y déroule normalement.", "Quand vous trouvez le bâtiment, assurez-vous de monter sur le toit avant de continuer."]
        }
      ]
    }

  }
};

/* ══════════════════════════════════════════
   LANGUAGE HELPERS
══════════════════════════════════════════ */

function getLang() {
  const stored = localStorage.getItem('los_lang');
  // Validate stored value is a known language, reset if not
  if (stored && LANGUAGES[stored]) return stored;
  if (stored) localStorage.removeItem('los_lang'); // clear corrupt value
  // Detect browser language
  const browser = (navigator.language || 'en').substring(0, 2).toLowerCase();
  const supported = ['en', 'no', 'es', 'de', 'fr'];
  return supported.includes(browser) ? browser : 'en';
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

  // ── Front page (index.html) ──
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
    btn.innerHTML = T('startTour') + ' <span class="arrow">→</span>';
  });

  // ── About page (about.html) ──
  _set('aboutEyebrow',  T('aboutEyebrow'));
  _set('aboutTitle',    T('aboutTitle'));
  _set('aboutP1',       T('aboutP1'));
  _set('aboutP2',       T('aboutP2'));
  _set('aboutP3',       T('aboutP3'));
  _set('aboutP4',       T('aboutP4'));
  _set('aboutP5',       T('aboutP5'));

  // ── Game page (game.html) ──
  const ansBtn  = document.getElementById('answerBtn');
  const hintBtn = document.getElementById('hintBtn');
  const input   = document.getElementById('answerInput');
  if (ansBtn)  ansBtn.textContent  = T('answer');
  if (hintBtn) hintBtn.innerHTML   = T('hint');
  if (input)   input.placeholder   = T('answerPlaceholder');

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

/* ════════════════════════════════════════════
   GOOGLE ANALYTICS + COOKIE CONSENT
   GA only fires after explicit user consent.
   Consent choice stored in localStorage.
════════════════════════════════════════════ */

const GA_ID = 'G-WSDKG42SWP';
const CONSENT_KEY = 'los_cookie_consent'; // 'accepted' | 'declined'

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
    en: { msg: 'We use cookies to understand how people use Los! This helps us improve the app. See our <a href="privacy.html">Privacy Policy</a>.', accept: 'Accept', decline: 'Decline' },
    no: { msg: 'Vi bruker informasjonskapsler for å forstå hvordan folk bruker Los! Se vår <a href="privacy.html">personvern</a>.', accept: 'Godta', decline: 'Avslå' },
    es: { msg: 'Usamos cookies para entender cómo se usa Los! Consulta nuestra <a href="privacy.html">política de privacidad</a>.', accept: 'Aceptar', decline: 'Rechazar' },
    de: { msg: 'Wir verwenden Cookies, um zu verstehen, wie Los! genutzt wird. Siehe unsere <a href="privacy.html">Datenschutzerklärung</a>.', accept: 'Akzeptieren', decline: 'Ablehnen' },
    fr: { msg: "Nous utilisons des cookies pour comprendre comment Los! est utilisé. Voir notre <a href='privacy.html'>politique de confidentialité</a>.", accept: 'Accepter', decline: 'Refuser' },
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
