/* ══════════════════════════════════════════
   Los! – tours/greathits.js
   Oslo's Greatest Hits — 8 scenes, 5 languages
══════════════════════════════════════════ */

const TOUR_GREATHITS = {
  id: 'greathits',

  en: [
    {
      chapter: "Scene 1",
      text: "Make your way to the square in front of the railway station, at the bottom of <b>Karl Johans gate</b>. The building behind you is <b>Østbanehallen</b> — once serving the eastern railway. It was originally paired with a station serving the western railway, located where the Nobel Peace Center stands today.\n\nBefore the final train lines were moved to the eastern station in 1989, travellers had to walk, take a bus, tram or taxi between the two stations.\n\nToday, travellers could choose another option to get from Østbanehallen to the Nobel Peace Center. At the centre of the plaza stands an animal that might be used for transportation — if you have enough courage.\n\nWhat is the animal?",
      answers: ["tiger", "tigre"],
      hints: ["It might eat you before you get to your destination."]
    },
    {
      chapter: "Scene 2",
      text: "Now that you have found a means of transportation, cross the road and enter <b>Karl Johans gate</b> — the city's main street. Every year, on 17 May, this street fills with around 30,000 school children and 100,000 spectators as Norway celebrates its constitution.\n\nWalk up Karl Johan until you find a shop with a small pink angel on your left. Directly to its right, you will find a small blue plaque.\n\nWhat name is written on the sign?",
      answers: ["elise sem"],
      hints: ["It is on the opposite side from Oslo cathedral", "It is directly below a small street number sign, number 10."]
    },
    {
      chapter: "Scene 3",
      text: "Elise Sem was the first female lawyer in Europe, qualifying in 1904. Three years earlier, she and four other female law students had written to the Ministry of Justice demanding that women be permitted to obtain a lawyer's licence. After debate in parliament and the legal system, the right was granted through a law known as <em>Lex Elisiana</em> — Elise's law.\n\nBehind you is <b>Oslo Domkirke</b> (Oslo Cathedral) and <b>Kirkeristen</b>, the old bazaar. The cathedral's foundation stone was laid in 1697. It is where royal funerals take place, following a ceremonial procession from the castle down Karl Johan.\n\nContinue walking up the hill past Egertorget, then down again until you see a building that looks like a parliament. It is, in fact, the parliament.\n\nIn the plaza in front of the parliament, there are several statues. Find the torso of a moustachioed man.\n\nWhat is his name?",
      answers: ["christian michelsen", "chr. michelsen", "michelsen"],
      hints: ["He stands right in front of the parliament, close to the walls beneath the walkway."]
    },
    {
      chapter: "Scene 4",
      text: "Christian Michelsen was the prime minister of Norway when the country gained independence from Sweden in 1905. Independence came through a clever political manoeuvre — a resolution by the Norwegian parliament declaring the end of the union with Sweden. A newspaper account of the meeting describes how: <em>\"When the words regarding the dissolution of the union came, a sigh of relief went through the room.\"</em>\n\nNext to the parliament stands the Grand Hotel — perhaps the most famous hotel in Oslo. Along the building's facade, you will find a little girl in a poncho. Like many young children, she is counting.\n\nTo what number is she counting?",
      answers: ["10", "ten", "ti", "dix", "zehn", "diez"],
      hints: ["Look carefully at what she is doing with her hands."]
    },
    {
      chapter: "Scene 5",
      text: "The Grand Hotel and its adjoining Grand Café have long been an important institution in Oslo. Here, artists, writers and notable figures such as Edvard Munch, Roald Amundsen, Gustav Vigeland and Fridtjof Nansen came to eat, drink and socialise.\n\nHenrik Ibsen, one of Norway's most famous writers, reportedly stopped by every day at noon for his usual lunch: a shot, a glass of German beer, and a pile of foreign newspapers.\n\nIbsen's plays — such as <em>A Doll's House</em> and <em>Peer Gynt</em> — were frequently performed at the next stop on your walk. Make your way towards <b>Nationaltheatret</b> (the National Theatre). On your way, you will pass a man holding a notebook in his left hand and a pencil in his right.\n\nWho is he?",
      answers: ["henrik wergeland", "wergeland"],
      hints: ["If you have crossed the street and are standing in front of the National Theatre, you have gone too far.", "He stands at the end of a large fountain."]
    },
    {
      chapter: "Scene 6",
      text: "Henrik Wergeland (1808–1845) was a Norwegian writer, editor and social commentator. Like Ibsen, he also wrote plays. Today he is remembered above all for fighting against paragraph two of the Norwegian constitution of 1814, which declared that <em>\"Jews are still unwelcome in the kingdom.\"</em> He did not live to see his campaign succeed — the paragraph was finally removed in 1851, six years after his death.\n\nCross the street and take in the architecture of <b>Nationaltheatret</b>. The theatre opened in 1899 and has received government funding since 1927.\n\nAround the theatre you will find several statues. One of them has what you might call a distinctive beard. Who is he?",
      answers: ["henrik ibsen", "ibsen"],
      hints: ["You have already heard about him on this tour.", "He was fond of beer and newspapers.", "He is on the left-hand side of the theatre."]
    },
    {
      chapter: "Scene 7",
      text: "Henrik Ibsen (1828–1906) is arguably Norway's most famous writer, and one of the most celebrated playwrights in the world. His play <em>A Doll's House</em> — about a woman leaving her husband — premiered in 1879 and caused a heated public debate, as one might expect for the time.\n\nFrom the National Theatre, turn right, cross the street and enter the plaza surrounded by three large buildings. The <b>University of Oslo</b> was established in 1811, when Norway was in union with Denmark. The buildings you see were begun in 1841 and today house the Faculty of Law.\n\nIn front of the university stand two large statues of men. Find the one who shares a surname with Norway's most famous painter — known, among other works, for <em>The Scream</em>.\n\nWhat is his name?",
      answers: ["peter andreas munch", "p.a. munch", "pa munch", "peter munch"],
      hints: ["The painter in question has a museum dedicated to him near the opera house.", "His left foot stands in front of his right."]
    },
    {
      chapter: "Scene 8",
      text: "Peter Andreas Munch (1810–1863) was a Norwegian historian, linguist and geographer. Among his many contributions, he worked to establish a written Norwegian language distinct from Danish, which was the dominant written form at the time. This effort was part of building a distinct Norwegian national identity. The language politics of the 1800s led to the unusual situation that Norway today has two official written languages: <em>bokmål</em> (book language) and <em>nynorsk</em> (new Norwegian).\n\nNow make your way to the final stop: <b>Slottet</b> (the Royal Palace), completed in 1848 for a Swedish king and now the official residence of the Norwegian royal family.\n\nIn front of the castle, you will find a man on a horse. He was originally a French general before becoming Crown Prince of Sweden, and later king of the union between Sweden and Norway from 1814 to 1905. Despite opposing Norwegian independence and going to war to claim his right to the country, he is somehow remembered with affection today.\n\n<i>If the Queen's Park to the left of the castle is open, it is well worth a short stroll. Open from 18 May to 1 October.</i>\n\nWho was he?",
      answers: ["karl johan", "carl johan", "karl iii johan", "carl iii johan", "bernadotte", "jean baptiste bernadotte"],
      hints: ["He is very large — difficult to miss.", "His name is written on a plaque at the base of the statue.", "The main street is named after him."]
    }
  ],

  no: [
    {
      chapter: "Scene 1",
      text: "G\u00e5 til plassen foran jernbanestasjonen, nederst i <b>Karl Johans gate</b>. Bygningen bak deg er <b>\u00d8stbanehallen</b> \u2014 som opprinnelig betjente \u00f8stbanen. Den var opprinnelig paret med en stasjon for vestbanen, som l\u00e5 der Nobels Fredssenter st\u00e5r i dag.\n\nF\u00f8r de siste togreisene ble overf\u00f8rt til \u00f8stbanehallen i 1989, m\u00e5tte reisende g\u00e5, ta buss, trikk eller drosje mellom de to stasjonene.\n\nI dag finnes det enda et alternativ for \u00e5 komme fra \u00d8stbanehallen til Nobels Fredssenter. Midt p\u00e5 plassen st\u00e5r et dyr som kunne vises til transport \u2014 hvis du har mot nok.\n\nHva er dyret?",
      answers: ["tiger"],
      hints: ["Det kan spise deg f\u00f8r du n\u00e5r frem."]
    },
    {
      chapter: "Scene 2",
      text: "N\u00e5 som du har funnet et transportmiddel, kryss veien og g\u00e5 inn i <b>Karl Johans gate</b> \u2014 byens hovedgate. Hvert \u00e5r, den 17. mai, fylles gaten med rundt 30 000 skoleelever og 100 000 tilskuere n\u00e5r Norge feirer grunnloven.\n\nG\u00e5 opp Karl Johan til du finner en butikk med en liten rosa engel p\u00e5 venstre side. Rett ved siden av, mot h\u00f8yre, finner du en liten bl\u00e5 plakett.\n\nHva er navnet p\u00e5 skiltet?",
      answers: ["elise sem"],
      hints: ["Det er p\u00e5 motsatt side av Oslo domkirke","Den henger rett under et lite gatenummerskilt, nummer 10."]
    },
    {
      chapter: "Scene 3",
      text: "Elise Sem var den f\u00f8rste kvinnelige sakf\u00f8reren i Europa, og fikk sin tillatelse i 1904. Tre \u00e5r tidligere hadde hun og fire andre kvinner som studerte juss, sendt et brev til Justisdepartementet der de krevde at kvinner snarest mulig m\u00e5tte f\u00e5 adgang til sakf\u00f8reryrket. Etter debatt i Stortinget og rettssystemet ble retten innvilget gjennom en lov kjent som <em>Lex Elisiana</em> \u2014 Elises lov.\n\nBak deg ligger <b>Oslo Domkirke</b> og <b>Kirkeristen</b>. Domkirkens grunnstein ble lagt i 1697. Det er her statsbegravelser for kongefamilien finner sted, etter en seremoniell prosesjon fra slottet ned Karl Johan.\n\nFortsett opp bakken forbi Egertorget, og g\u00e5 ned igjen til du ser en bygning som ser ut som et storting. Det er faktisk Stortinget.\n\nP\u00e5 plassen foran Stortinget st\u00e5r det flere statuer. Finn overkroppen av en mann med bart.\n\nHva heter han?",
      answers: ["christian michelsen", "chr. michelsen", "michelsen"],
      hints: ["Han st\u00e5r rett foran Stortinget, n\u00e6r veggene under gangbroen."]
    },
    {
      chapter: "Scene 4",
      text: "Christian Michelsen var statsminister i Norge da landet fikk sin selvstendighet fra Sverige i 1905. Selvstendigheten kom som resultat av et klokt politisk spill \u2014 en resolusjon fra Stortinget som kunngjorde avslutningen av unionen med Sverige. En avisberetning fra m\u00f8tet beskriver hvordan: <em>\u00abDa ordene om oppgivelse av unionen kom, gikk et lettelsens sukk gjennom salen.\u00bb</em>\n\nVed siden av Stortinget st\u00e5r det kanskje mest kjente hotellet i Oslo: Grand Hotel. Langs fasaden vil du finne en liten jente i poncho. Som mange sm\u00e5 barn er hun opptatt med \u00e5 telle.\n\nHvilket tall teller hun til?",
      answers: ["10", "ti", "ten"],
      hints: ["Se n\u00f8ye p\u00e5 hva hun gj\u00f8r med hendene."]
    },
    {
      chapter: "Scene 5",
      text: "Grand Hotel og den tilst\u00f8tende Grand Caf\u00e9 har lenge v\u00e6rt en viktig institusjon i Oslo. Her kom kunstnere, forfattere og kjente personligheter som Edvard Munch, Roald Amundsen, Gustav Vigeland og Fridtjof Nansen for \u00e5 spise, drikke og sosialisere.\n\nHenrik Ibsen, en av Norges mest kjente forfattere, skal ha stukket innom hver dag klokken tolv for sin faste lunsj: en drink, et glass tysk \u00f8l og en bunke utenlandske aviser.\n\nIbsens skuespill \u2014 som <em>Et dukkehjem</em> og <em>Peer Gynt</em> \u2014 ble hyppig satt opp p\u00e5 neste stopp p\u00e5 turen. G\u00e5 mot <b>Nationaltheatret</b>. P\u00e5 veien vil du passere en mann med en notatbok i venstre h\u00e5nd og en blyant i h\u00f8yre.\n\nHvem er han?",
      answers: ["henrik wergeland", "wergeland"],
      hints: ["Har du krysset gaten og st\u00e5r rett foran Nationaltheatret, har du g\u00e5tt for langt.", "Han st\u00e5r ved enden av et stort fontenebassin."]
    },
    {
      chapter: "Scene 6",
      text: "Henrik Wergeland (1808\u20131845) var norsk forfatter, redakt\u00f8r og samfunnskritiker. Som Ibsen skrev han ogs\u00e5 skuespill. I dag huskes han f\u00f8rst og fremst for sin kamp mot grunnlovens \u00a7 2 fra 1814, som fastslo at <em>\u00abJ\u00f8der ere fremdeles udelukkede fra Adgang til Riget.\u00bb</em> Han fikk ikke oppleve at kampen n\u00e5dde frem \u2014 paragrafen ble f\u00f8rst fjernet i 1851, seks \u00e5r etter Wergelands d\u00f8d.\n\nKryss gaten og beundr arkitekturen til <b>Nationaltheatret</b>. Teateret \u00e5pnet i 1899 og har mottatt statlig st\u00f8tte siden 1927.\n\nRundt teateret st\u00e5r det flere statuer. En av dem har det som kanskje kan kalles en original skjeggstil.\n\nHvem er han?",
      answers: ["henrik ibsen", "ibsen"],
      hints: ["Du har allerede h\u00f8rt om ham p\u00e5 denne turen.", "Han var glad i \u00f8l og aviser.", "Han st\u00e5r p\u00e5 venstre side av teateret."]
    },
    {
      chapter: "Scene 7",
      text: "Henrik Ibsen (1828\u20131906) er uten tvil Norges mest kjente forfatter, og en av de mest kjente dramatikerne i verden. Hans skuespill <em>Et dukkehjem</em> \u2014 om en kvinne som forlater mannen sin \u2014 hadde premiere i 1879 og utl\u00f8ste en intens offentlig debatt, som man kan forvente for den tiden.\n\nFra Nationaltheatret tar du til h\u00f8yre, krysser gaten og ender opp p\u00e5 plassen mellom tre store bygninger. <b>Universitetet i Oslo</b> ble grunnlagt i 1811, da Norge var i union med Danmark. Bygningene du ser ble p\u00e5begynt i 1841 og huser i dag Det juridiske fakultet.\n\nForan universitetet st\u00e5r to store statuer av menn. Finn den som deler etternavn med Norges mest ber\u00f8mte maler \u2014 kjent blant annet for <em>Skrik</em>.\n\nHva heter han?",
      answers: ["peter andreas munch", "p.a. munch", "pa munch", "peter munch"],
      hints: ["Maleren det er snakk om har et museum viet til seg n\u00e6r operaen.", "Venstre fot st\u00e5r foran h\u00f8yre."]
    },
    {
      chapter: "Scene 8",
      text: "Peter Andreas Munch (1810\u20131863) var norsk historiker, spr\u00e5kviter og geograf. Blant hans mange bidrag arbeidet han for \u00e5 etablere et skriftlig norsk spr\u00e5k adskilt fra dansk, som var den dominerende skriftformen p\u00e5 den tiden. Dette var en del av arbeidet med \u00e5 bygge en selvstendig norsk nasjonal identitet. Spr\u00e5kpolitikken p\u00e5 1800-tallet f\u00f8rte til den peculiære situasjonen at Norge i dag har to offisielle skriftlig spr\u00e5k: <em>bokm\u00e5l</em> og <em>nynorsk</em>.\n\nG\u00e5 n\u00e5 til siste stopp: <b>Slottet</b>, ferdigstilt i 1848 for en svensk konge og n\u00e5 offisiell bolig for den norske kongefamilien.\n\nForan slottet vil du finne en mann til hest. Han var opprinnelig en fransk general f\u00f8r han ble svensk kronprins, og senere konge av unionen mellom Sverige og Norge fra 1814 til 1905. Til tross for at han motarbeidet norsk selvstendighet og gikk til krig for \u00e5 hevde sin rett til landet, huskes han p\u00e5 en eller annen m\u00e5te med varme i dag.\n\n<i>Hvis Dronningens park til venstre for slottet er \u00e5pen, er det vel verdt en liten spasertur. \u00c5pent fra 18. mai til 1. oktober.</i>\n\nHvem var han?",
      answers: ["karl johan", "carl johan", "karl iii johan", "carl iii johan", "bernadotte", "jean baptiste bernadotte"],
      hints: ["Han er veldig stor \u2014 vanskelig \u00e5 overse.", "Navnet hans st\u00e5r p\u00e5 en plakett ved sokkelen.", "Hovedgaten er oppkalt etter ham."]
    }
  ],

  es: [
    {
      chapter: "Escena 1",
      text: "Dir\u00edgete a la plaza frente a la estaci\u00f3n de tren, al final de <b>Karl Johans gate</b>. El edificio detr\u00e1s de ti es <b>\u00d8stbanehallen</b>, que en su d\u00eda daba servicio a la l\u00ednea ferroviaria del este. En origen estaba emparejado con una estaci\u00f3n de la l\u00ednea del oeste, ubicada donde hoy se encuentra el Centro Nobel de la Paz.\n\nAntes de que las \u00faltimas l\u00edneas de tren se trasladaran a la estaci\u00f3n del este en 1989, los viajeros ten\u00edan que caminar o tomar un autob\u00fas, tranv\u00eda o taxi entre las dos estaciones.\n\nHoy los viajeros podr\u00edan elegir otra opci\u00f3n para ir desde \u00d8stbanehallen hasta el Centro Nobel de la Paz. En el centro de la plaza hay un animal que podr\u00eda usarse como transporte, si tienes suficiente valor.\n\n\u00bfCu\u00e1l es el animal?",
      answers: ["tiger", "tigre"],
      hints: ["Puede que te coma antes de que llegues a tu destino."]
    },
    {
      chapter: "Escena 2",
      text: "Ahora que has encontrado un medio de transporte, cruza la calle y entra en <b>Karl Johans gate</b>, la calle principal de la ciudad. Cada a\u00f1o, el 17 de mayo, esta calle se llena de unos 30.000 escolares y 100.000 espectadores cuando Noruega celebra su constituci\u00f3n.\n\nCamina por Karl Johan hasta que encuentres una tienda con un peque\u00f1o \u00c1ngel rosa a tu izquierda. Justo a su derecha encontrar\u00e1s una peque\u00f1a placa azul.\n\n\u00bfQu\u00e9 nombre aparece en el letrero?",
      answers: ["elise sem"],
      hints: ["Est\u00e1 en el lado opuesto a la catedral de Oslo", "Est\u00e1 justo debajo de un peque\u00f1o letrero con el n\u00famero de la calle, el n\u00famero 10."]
    },
    {
      chapter: "Escena 3",
      text: "Elise Sem fue la primera abogada de Europa, obteniendo su licencia en 1904. Tres a\u00f1os antes, ella y otras cuatro estudiantes de derecho hab\u00edan escrito al Ministerio de Justicia exigiendo que se permitiera a las mujeres obtener la licencia de abogada. Tras el debate en el parlamento y el sistema jur\u00eddico, el derecho fue concedido mediante una ley conocida como <em>Lex Elisiana</em> \u2014 la ley de Elise.\n\nDetr\u00e1s de ti se encuentra <b>Oslo Domkirke</b> (la Catedral de Oslo) y <b>Kirkeristen</b>, el antiguo bazar. La primera piedra de la catedral fue colocada en 1697. Es donde se celebran los funerales reales, tras una procesi\u00f3n ceremonial desde el castillo bajando por Karl Johan.\n\nContin\u00faa subiendo la colina pasando Egertorget, y luego baja de nuevo hasta que veas un edificio con aspecto de parlamento. De hecho, es el parlamento.\n\nEn la plaza frente al parlamento hay varias estatuas. Encuentra el torso de un hombre con bigos.\n\n\u00bfC\u00f3mo se llama?",
      answers: ["christian michelsen", "chr. michelsen", "michelsen"],
      hints: ["Est\u00e1 justo frente al parlamento, cerca de las paredes bajo la pasarela."]
    },
    {
      chapter: "Escena 4",
      text: "Christian Michelsen fue el primer ministro de Noruega cuando el pa\u00eds obtuvo la independencia de Suecia en 1905. La independencia lleg\u00f3 gracias a una habilidosa maniobra pol\u00edtica: una resoluci\u00f3n del parlamento noruego que declaraba el fin de la uni\u00f3n con Suecia. Una cr\u00f3nica period\u00edstica de la reuni\u00f3n describe c\u00f3mo: <em>\u00abCuando llegaron las palabras sobre la disoluci\u00f3n de la uni\u00f3n, un suspiro de alivio recorri\u00f3 la sala.\u00bb</em>\n\nJunto al parlamento se encuentra el Grand Hotel, quiz\u00e1s el hotel m\u00e1s conocido de Oslo. A lo largo de la fachada del edificio encontrar\u00e1s a una ni\u00f1a peque\u00f1a con poncho. Como muchos ni\u00f1os peque\u00f1os, est\u00e1 contando.\n\n\u00bfHasta qu\u00e9 n\u00famero cuenta?",
      answers: ["10", "ten", "ti", "diez", "dix", "zehn"],
      hints: ["Observa con cuidado lo que hace con las manos."]
    },
    {
      chapter: "Escena 5",
      text: "El Grand Hotel y el Grand Caf\u00e9 adjunto han sido durante mucho tiempo una instituci\u00f3n importante en Oslo. Aqu\u00ed ven\u00edan artistas, escritores y personalidades como Edvard Munch, Roald Amundsen, Gustav Vigeland y Fridtjof Nansen a comer, beber y socializar.\n\nHenrik Ibsen, uno de los escritores m\u00e1s famosos de Noruega, supuestamente pasaba cada d\u00eda a mediod\u00eda para su almuerzo habitual: un chupito, un vaso de cerveza alemana y una pila de peri\u00f3dicos extranjeros.\n\nLas obras de Ibsen \u2014 como <em>Casa de mu\u00f1ecas</em> y <em>Peer Gynt</em> \u2014 se representaron con frecuencia en el siguiente destino del paseo. Dir\u00edgete al <b>Nationaltheatret</b> (el Teatro Nacional). De camino, pasar\u00e1s junto a un hombre que sostiene un cuaderno en la mano izquierda y un l\u00e1piz en la derecha.\n\n\u00bfQui\u00e9n es?",
      answers: ["henrik wergeland", "wergeland"],
      hints: ["Si has cruzado la calle y est\u00e1s frente al Teatro Nacional, te has pasado.", "Est\u00e1 al final de una gran fuente."]
    },
    {
      chapter: "Escena 6",
      text: "Henrik Wergeland (1808\u20131845) fue un escritor, editor y comentarista social noruego. Como Ibsen, tambi\u00e9n escribi\u00f3 obras de teatro. Hoy se le recuerda sobre todo por su lucha contra el segundo p\u00e1rrafo de la constituci\u00f3n noruega de 1814, que declaraba que <em>\u00ablos jud\u00edos siguen sin ser bienvenidos en el reino.\u00bb</em> No vivi\u00f3 para ver el \u00e9xito de su campa\u00f1a: el p\u00e1rrafo fue finalmente eliminado en 1851, seis a\u00f1os despu\u00e9s de su muerte.\n\nCruza la calle y admira la arquitectura del <b>Nationaltheatret</b>. El teatro inaugur\u00f3 en 1899 y ha recibido financiaci\u00f3n estatal desde 1927.\n\nAlrededor del teatro encontrar\u00e1s varias estatuas. Una de ellas luce lo que podr\u00eda llamarse un estilo de barba original.\n\n\u00bfQui\u00e9n es?",
      answers: ["henrik ibsen", "ibsen"],
      hints: ["Ya has o\u00eddo hablar de \u00e9l en este recorrido.", "Era aficionado a la cerveza y los peri\u00f3dicos.", "Est\u00e1 en el lado izquierdo del teatro."]
    },
    {
      chapter: "Escena 7",
      text: "Henrik Ibsen (1828\u20131906) es, sin duda, el escritor m\u00e1s famoso de Noruega y uno de los dram\u00e1turgos m\u00e1s reconocidos del mundo. Su obra <em>Casa de mu\u00f1ecas</em> \u2014 sobre una mujer que abandona a su marido \u2014 se estren\u00f3 en 1879 y provoc\u00f3 un intenso debate p\u00fablico, como cabe esperar para la \u00e9poca.\n\nDesde el Teatro Nacional, gira a la derecha, cruza la calle y entra en la plaza rodeada por tres grandes edificios. La <b>Universidad de Oslo</b> fue fundada en 1811, cuando Noruega estaba en uni\u00f3n con Dinamarca. Los edificios que ves se empezaron a construir en 1841 y hoy albergan la Facultad de Derecho.\n\nFrente a la universidad hay dos grandes estatuas de hombres. Encuentra al que comparte apellido con el pintor m\u00e1s famoso de Noruega, conocido, entre otras obras, por <em>El grito</em>.\n\n\u00bfC\u00f3mo se llama?",
      answers: ["peter andreas munch", "p.a. munch", "pa munch", "peter munch"],
      hints: ["El pintor en cuesti\u00f3n tiene un museo dedicado a \u00e9l cerca de la \u00f3pera.", "Su pie izquierdo est\u00e1 adelantado respecto al derecho."]
    },
    {
      chapter: "Escena 8",
      text: "Peter Andreas Munch (1810\u20131863) fue un historiador, ling\u00fcista y ge\u00f3grafo noruego. Entre sus muchas contribuciones, trabaj\u00f3 para establecer una lengua escrita noruega distinta del dan\u00e9s, que era la forma escrita dominante en esa \u00e9poca. Este esfuerzo formaba parte de la construcci\u00f3n de una identidad nacional noruega propia. La pol\u00edtica ling\u00fc\u00edstica del siglo XIX dio lugar a la peculiar situaci\u00f3n de que Noruega tiene hoy dos lenguas escritas oficiales: el <em>bokm\u00e5l</em> y el <em>nynorsk</em>.\n\nAhora dir\u00edgete a la \u00faltima parada: <b>Slottet</b> (el Palacio Real), terminado en 1848 para un rey sueco y hoy residencia oficial de la familia real noruega.\n\nFrente al palacio encontrar\u00e1s a un hombre a caballo. Era originalmente un general franc\u00e9s antes de convertirse en pr\u00edncipe heredero de Suecia, y m\u00e1s tarde en rey de la uni\u00f3n entre Suecia y Noruega de 1814 a 1905. A pesar de haberse opuesto a la independencia noruega y haber ido a la guerra para reclamar su derecho al pa\u00eds, hoy en d\u00eda es recordado con afecto.\n\n<i>Si el Parque de la Reina a la izquierda del palacio est\u00e1 abierto, merece la pena dar un paseo. Abierto del 18 de mayo al 1 de octubre.</i>\n\n\u00bfQui\u00e9n era?",
      answers: ["karl johan", "carl johan", "karl iii johan", "carl iii johan", "bernadotte", "jean baptiste bernadotte"],
      hints: ["Es muy grande \u2014 dif\u00edcil de no verlo.", "Su nombre est\u00e1 escrito en una placa en la base de la estatua.", "La calle principal lleva su nombre."]
    }
  ],

  de: [
    {
      chapter: "Szene 1",
      text: "Begib dich auf den Platz vor dem Bahnhof am unteren Ende der <b>Karl Johans gate</b>. Das Geb\u00e4ude hinter dir ist die <b>\u00d8stbanehallen</b> \u2014 einst der Bahnhof der \u00f6stlichen Eisenbahnlinie. Urspr\u00fcnglich war sie mit einem Bahnhof f\u00fcr die westliche Linie gepaart, der sich dort befand, wo heute das Friedensnobelzentrum steht.\n\nBevor die letzten Zuglinien 1989 in den \u00f6stlichen Bahnhof verlegt wurden, mussten Reisende zwischen den beiden Bahnhöfen zu Fu\u00df gehen oder Bus, Stra\u00dfenbahn oder Taxi nehmen.\n\nHeute k\u00f6nnten Reisende noch eine weitere M\u00f6glichkeit w\u00e4hlen, um von der \u00d8stbanehallen zum Friedensnobelzentrum zu gelangen. In der Mitte des Platzes steht ein Tier, das als Transportmittel genutzt werden k\u00f6nnte \u2014 wenn man mutig genug ist.\n\nWelches Tier ist es?",
      answers: ["tiger"],
      hints: ["Es k\u00f6nnte dich fressen, bevor du ankommst."]
    },
    {
      chapter: "Szene 2",
      text: "Nun, da du ein Transportmittel gefunden hast, \u00fcberquere die Stra\u00dfe und betrete die <b>Karl Johans gate</b> \u2014 die Hauptstra\u00dfe der Stadt. Jeden Jahr am 17. Mai f\u00fcllt sich diese Stra\u00dfe mit rund 30.000 Schulkindern und 100.000 Zuschauern, wenn Norwegen seinen Verfassungstag feiert.\n\nGeh die Karl Johan entlang, bis du auf der linken Seite ein Gesch\u00e4ft mit einem kleinen rosafarbenen Engel findest. Direkt daneben, rechts davon, findest du eine kleine blaue Plakette.\n\nWelcher Name steht auf dem Schild?",
      answers: ["elise sem"],
      hints: ["Es befindet sich auf der gegen\u00fcberliegenden Seite des Osloer Doms.", "Sie h\u00e4ngt direkt unter einem kleinen Hausnummernschild, Nummer 10."]
    },
    {
      chapter: "Szene 3",
      text: "Elise Sem war die erste weibliche Rechtsanw\u00e4ltin in Europa und erhielt ihre Zulassung im Jahr 1904. Drei Jahre zuvor hatten sie und vier andere Jura-Studentinnen einen Brief an das Justizministerium geschrieben, in dem sie forderten, dass Frauen so bald wie m\u00f6glich die Anwaltszulassung erhalten sollten. Nach einer Debatte im Parlament und im Rechtssystem wurde das Recht durch ein Gesetz gew\u00e4hrt, das als <em>Lex Elisiana</em> bekannt ist \u2014 Elises Gesetz.\n\nHinter dir befindet sich die <b>Oslo Domkirke</b> (Osloer Dom) und <b>Kirkeristen</b>, der alte Basar. Der Grundstein des Doms wurde 1697 gelegt. Hier finden Staatsbegr\u00e4bnisse der K\u00f6nigsfamilie statt, nach einem feierlichen Trauerzug vom Schloss die Karl Johan hinunter.\n\nGeh weiter den H\u00fcgel hinauf an Egertorget vorbei, dann wieder hinunter, bis du ein Geb\u00e4ude siehst, das wie ein Parlament aussieht. Es ist tats\u00e4chlich das Parlament.\n\nAuf dem Platz vor dem Parlament stehen mehrere Statuen. Finde den Oberk\u00f6rper eines Mannes mit Schnurrbart.\n\nWie hei\u00dft er?",
      answers: ["christian michelsen", "chr. michelsen", "michelsen"],
      hints: ["Er steht direkt vor dem Parlament, nahe der Mauern unter der Br\u00fccke."]
    },
    {
      chapter: "Szene 4",
      text: "Christian Michelsen war der Ministerpr\u00e4sident Norwegens, als das Land 1905 die Unabh\u00e4ngigkeit von Schweden erlangte. Die Unabh\u00e4ngigkeit kam durch ein kluges politisches Man\u00f6ver \u2014 eine Resolution des norwegischen Parlaments, die das Ende der Union mit Schweden erkl\u00e4rte. Ein Zeitungsbericht \u00fcber die Sitzung beschreibt, wie: <em>\u201eAls die Worte \u00fcber die Aufl\u00f6sung der Union fielen, ging ein Aufatmen durch den Saal.\u201c</em>\n\nNeben dem Parlament steht das Grand Hotel \u2014 vielleicht das bekannteste Hotel Oslos. An der Fassade des Geb\u00e4udes wirst du ein kleines M\u00e4dchen in einem Poncho finden. Wie viele kleine Kinder z\u00e4hlt sie.\n\nBis zu welcher Zahl z\u00e4hlt sie?",
      answers: ["10", "zehn", "ten", "ti", "dix", "diez"],
      hints: ["Achte genau darauf, was sie mit ihren H\u00e4nden macht."]
    },
    {
      chapter: "Szene 5",
      text: "Das Grand Hotel und das angrenzende Grand Caf\u00e9 waren seit jeher eine wichtige Institution in Oslo. Hier kamen K\u00fcnstler, Schriftsteller und ber\u00fchmte Pers\u00f6nlichkeiten wie Edvard Munch, Roald Amundsen, Gustav Vigeland und Fridtjof Nansen zum Essen, Trinken und Geselligem.\n\nHenrik Ibsen, einer der ber\u00fchmtesten Schriftsteller Norwegens, soll jeden Tag um zw\u00f6lf Uhr f\u00fcr sein \u00fcbliches Mittagessen vorbeigekommen sein: ein Schnaps, ein Glas deutsches Bier und ein Stapel ausl\u00e4ndischer Zeitungen.\n\nIbsens Theaterstücke \u2014 wie <em>Nora (Ein Puppenheim)</em> und <em>Peer Gynt</em> \u2014 wurden h\u00e4ufig an der n\u00e4chsten Station eurer Tour aufgef\u00fchrt. Geh Richtung <b>Nationaltheatret</b>. Auf dem Weg wirst du an einem Mann vorbeikommen, der ein Notizbuch in der linken und einen Bleistift in der rechten Hand h\u00e4lt.\n\nWer ist er?",
      answers: ["henrik wergeland", "wergeland"],
      hints: ["Wenn du die Stra\u00dfe \u00fcberquert hast und direkt vor dem Nationaltheater stehst, bist du zu weit gegangen.", "Er steht am Ende eines gro\u00dfen Brunnenbeckens."]
    },
    {
      chapter: "Szene 6",
      text: "Henrik Wergeland (1808\u20131845) war ein norwegischer Schriftsteller, Herausgeber und Gesellschaftskritiker. Wie Ibsen schrieb auch er Theaterstücke. Heute wird er vor allem f\u00fcr seinen Kampf gegen Paragraph 2 der norwegischen Verfassung von 1814 in Erinnerung gehalten, der erkl\u00e4rte, dass <em>\u201eJuden im K\u00f6nigreich nach wie vor unerwünscht sind.\u201c</em> Er erlebte den Erfolg seines Kampfes nicht mehr \u2014 der Paragraph wurde erst 1851 gestrichen, sechs Jahre nach Wergelands Tod.\n\n\u00dcberquere die Stra\u00dfe und bewundere die Architektur des <b>Nationaltheatret</b>. Das Theater er\u00f6ffnete 1899 und wird seit 1927 staatlich gef\u00f6rdert.\n\nRund um das Theater findest du mehrere Statuen. Eine von ihnen hat, was man einen originellen Bartstil nennen k\u00f6nnte.\n\nWer ist er?",
      answers: ["henrik ibsen", "ibsen"],
      hints: ["Du hast auf dieser Tour schon von ihm geh\u00f6rt.", "Er mochte Bier und Zeitungen.", "Er steht auf der linken Seite des Theaters."]
    },
    {
      chapter: "Szene 7",
      text: "Henrik Ibsen (1828\u20131906) ist wohl Norwegens ber\u00fchmtester Schriftsteller und einer der bekanntesten Dramatiker der Welt. Sein Stück <em>Nora (Ein Puppenheim)</em> \u2014 \u00fcber eine Frau, die ihren Mann verl\u00e4sst \u2014 hatte 1879 Premiere und l\u00f6ste eine heftige \u00f6ffentliche Debatte aus, wie man f\u00fcr die damalige Zeit erwarten w\u00fcrde.\n\nVom Nationaltheater aus biege rechts ab, \u00fcberquere die Stra\u00dfe und gelange auf den Platz zwischen drei gro\u00dfen Geb\u00e4uden. Die <b>Universit\u00e4t Oslo</b> wurde 1811 gegr\u00fcndet, als Norwegen in einer Union mit D\u00e4nemark war. Die Geb\u00e4ude, die du siehst, wurden 1841 begonnen und beherbergen heute die Rechtswissenschaftliche Fakult\u00e4t.\n\nVor der Universit\u00e4t stehen zwei gro\u00dfe Statuen von M\u00e4nnern. Finde denjenigen, der denselben Nachnamen tr\u00e4gt wie Norwegens ber\u00fchmtester Maler \u2014 bekannt u.a. f\u00fcr <em>Der Schrei</em>.\n\nWie hei\u00dft er?",
      answers: ["peter andreas munch", "p.a. munch", "pa munch", "peter munch"],
      hints: ["Der Maler, von dem die Rede ist, hat ein Museum in der N\u00e4he der Oper.", "Sein linker Fu\u00df steht vor dem rechten."]
    },
    {
      chapter: "Szene 8",
      text: "Peter Andreas Munch (1810\u20131863) war ein norwegischer Historiker, Sprachwissenschaftler und Geograph. Unter seinen vielen Beitr\u00e4gen arbeitete er daran, eine norwegische Schriftsprache zu etablieren, die sich vom D\u00e4nischen unterschied, das zu jener Zeit die dominante Schriftform war. Diese Bem\u00fchungen waren Teil des Aufbaus einer eigenst\u00e4ndigen norwegischen Nationalidentit\u00e4t. Die Sprachpolitik des 19. Jahrhunderts f\u00fchrte zu der eigent\u00fcmlichen Situation, dass Norwegen heute zwei offizielle Schriftsprachen hat: <em>Bokm\u00e5l</em> und <em>Nynorsk</em>.\n\nBegib dich nun zur letzten Station: <b>Slottet</b> (das K\u00f6nigliche Schloss), 1848 f\u00fcr einen schwedischen K\u00f6nig fertiggestellt und heute offizieller Wohnsitz der norwegischen K\u00f6nigsfamilie.\n\nVor dem Schloss findest du einen Mann auf einem Pferd. Er war urspr\u00fcnglich ein franz\u00f6sischer General, bevor er schwedischer Kronprinz und sp\u00e4ter K\u00f6nig der Union zwischen Schweden und Norwegen von 1814 bis 1905 wurde. Obwohl er sich der norwegischen Unabh\u00e4ngigkeit widersetzte und Krieg f\u00fchrte, um sein Recht auf das Land zu beanspruchen, wird er heute irgendwie positiv erinnert.\n\n<i>Wenn der K\u00f6niginnenpark links vom Schloss ge\u00f6ffnet ist, lohnt sich ein kurzer Spaziergang. Ge\u00f6ffnet vom 18. Mai bis 1. Oktober.</i>\n\nWer war er?",
      answers: ["karl johan", "carl johan", "karl iii johan", "carl iii johan", "bernadotte", "jean baptiste bernadotte"],
      hints: ["Er ist sehr gro\u00df \u2014 schwer zu \u00fcbersehen.", "Sein Name steht auf einer Plakette am Sockel der Statue.", "Die Hauptstra\u00dfe ist nach ihm benannt."]
    }
  ],

  fr: [
    {
      chapter: "Sc\u00e8ne 1",
      text: "Rendez-vous sur la place devant la gare, au bas de la <b>Karl Johans gate</b>. Le b\u00e2timent derri\u00e8re vous est l\u2019<b>\u00d8stbanehallen</b> \u2014 qui desservait autrefois la ligne ferroviaire de l\u2019est. \u00c0 l\u2019origine, elle \u00e9tait associ\u00e9e \u00e0 une gare de la ligne ouest, situ\u00e9e l\u00e0 o\u00f9 se trouve aujourd\u2019hui le Centre Nobel de la Paix.\n\nAvant que les derni\u00e8res lignes ferroviaires ne soient transf\u00e9r\u00e9es \u00e0 la gare est en 1989, les voyageurs devaient marcher ou prendre le bus, le tramway ou un taxi entre les deux gares.\n\nAujourd\u2019hui, les voyageurs pourraient choisir une autre option pour aller de l\u2019\u00d8stbanehallen au Centre Nobel de la Paix. Au centre de la place se trouve un animal qui pourrait servir de moyen de transport \u2014 si vous avez assez de courage.\n\nQuel est cet animal\u00a0?",
      answers: ["tiger", "tigre"],
      hints: ["Il pourrait vous manger avant que vous n\u2019arriviez \u00e0 destination."]
    },
    {
      chapter: "Sc\u00e8ne 2",
      text: "Maintenant que vous avez trouv\u00e9 un moyen de transport, traversez la rue et entrez dans la <b>Karl Johans gate</b> \u2014 la rue principale de la ville. Chaque ann\u00e9e, le 17 mai, cette rue se remplit d\u2019environ 30\u00a0000 \u00e9coliers et 100\u00a0000 spectateurs lorsque la Norv\u00e8ge c\u00e9l\u00e8bre sa constitution.\n\nRemontez Karl Johan jusqu\u2019\u00e0 trouver une boutique avec un petit ange rose sur votre gauche. Juste \u00e0 sa droite, vous trouverez une petite plaque bleue.\n\nQuel nom est inscrit sur le panneau\u00a0?",
      answers: ["elise sem"],
      hints: ["Elle se trouve du c\u00f4t\u00e9 oppos\u00e9 \u00e0 la cath\u00e9drale d'Oslo.", "Elle se trouve juste en dessous d\u2019un petit panneau de num\u00e9ro de rue, le num\u00e9ro 10."]
    },
    {
      chapter: "Sc\u00e8ne 3",
      text: "Elise Sem fut la premi\u00e8re femme avocate en Europe, obtenant sa licence en 1904. Trois ans plus t\u00f4t, elle et quatre autres \u00e9tudiantes en droit avaient \u00e9crit au minist\u00e8re de la Justice pour exiger que les femmes puissent obtenir leur licence d\u2019avocat dans les plus brefs d\u00e9lais. Apr\u00e8s un d\u00e9bat au parlement et dans le syst\u00e8me juridique, le droit fut accord\u00e9 gr\u00e2ce \u00e0 une loi connue sous le nom de <em>Lex Elisiana</em> \u2014 la loi d\u2019Elise.\n\nDerri\u00e8re vous se trouve l\u2019<b>Oslo Domkirke</b> (la cath\u00e9drale d\u2019Oslo) et <b>Kirkeristen</b>, l\u2019ancien bazar. La premi\u00e8re pierre de la cath\u00e9drale a \u00e9t\u00e9 pos\u00e9e en 1697. C\u2019est l\u00e0 que se d\u00e9roulent les fun\u00e9railles royales, apr\u00e8s une procession c\u00e9r\u00e9monielle depuis le ch\u00e2teau en descendant Karl Johan.\n\nContinuez \u00e0 monter la colline en passant Egertorget, puis redescendez jusqu\u2019\u00e0 ce que vous voyiez un b\u00e2timent qui ressemble \u00e0 un parlement. C\u2019est en fait le parlement.\n\nSur la place devant le parlement se trouvent plusieurs statues. Trouvez le buste d\u2019un homme moustachu.\n\nQuel est son nom\u00a0?",
      answers: ["christian michelsen", "chr. michelsen", "michelsen"],
      hints: ["Il se trouve juste devant le parlement, pr\u00e8s des murs sous la passerelle."]
    },
    {
      chapter: "Sc\u00e8ne 4",
      text: "Christian Michelsen \u00e9tait le premier ministre de Norv\u00e8ge lorsque le pays obtint son ind\u00e9pendance de la Su\u00e8de en 1905. L\u2019ind\u00e9pendance est venue gr\u00e2ce \u00e0 une habile manoeuvre politique \u2014 une r\u00e9solution du parlement norv\u00e9gien d\u00e9clarant la fin de l\u2019union avec la Su\u00e8de. Un compte rendu journalistique de la r\u00e9union d\u00e9crit comment\u00a0: <em>\u00ab Lorsque les mots concernant la dissolution de l\u2019union furent prononc\u00e9s, un soupir de soulagement parcourut la salle. \u00bb</em>\n\nA c\u00f4t\u00e9 du parlement se trouve le Grand H\u00f4tel \u2014 peut-\u00eatre le plus c\u00e9l\u00e8bre h\u00f4tel d\u2019Oslo. Le long de la fa\u00e7ade du b\u00e2timent, vous trouverez une petite fille en poncho. Comme beaucoup de jeunes enfants, elle est en train de compter.\n\nJusqu\u2019\u00e0 quel chiffre compte-t-elle\u00a0?",
      answers: ["10", "dix", "ten", "ti", "zehn", "diez"],
      hints: ["Regardez attentivement ce qu\u2019elle fait avec ses mains."]
    },
    {
      chapter: "Sc\u00e8ne 5",
      text: "Le Grand H\u00f4tel et le Grand Caf\u00e9 attenant ont longtemps \u00e9t\u00e9 une institution importante \u00e0 Oslo. Des artistes, des \u00e9crivains et des personnages c\u00e9l\u00e8bres comme Edvard Munch, Roald Amundsen, Gustav Vigeland et Fridtjof Nansen venaient y manger, boire et se retrouver.\n\nHenrik Ibsen, l\u2019un des \u00e9crivains les plus c\u00e9l\u00e8bres de Norv\u00e8ge, s\u2019y arr\u00eatait pr\u00e9tendument chaque jour \u00e0 midi pour son d\u00e9jeuner habituel\u00a0: un verre, une bi\u00e8re allemande et une pile de journaux \u00e9trangers.\n\nLes pi\u00e8ces d\u2019Ibsen \u2014 comme <em>Maison de poup\u00e9e</em> et <em>Peer Gynt</em> \u2014 \u00e9taient fr\u00e9quemment repr\u00e9sent\u00e9es \u00e0 la prochaine \u00e9tape de votre promenade. Dirigez-vous vers le <b>Nationaltheatret</b> (le Th\u00e9\u00e2tre National). En chemin, vous passerez devant un homme tenant un carnet dans la main gauche et un crayon dans la main droite.\n\nQui est-il\u00a0?",
      answers: ["henrik wergeland", "wergeland"],
      hints: ["Si vous avez travers\u00e9 la rue et vous trouvez devant le Th\u00e9\u00e2tre National, vous \u00eates all\u00e9 trop loin.", "Il se trouve \u00e0 l\u2019extr\u00e9mit\u00e9 d\u2019une grande fontaine."]
    },
    {
      chapter: "Sc\u00e8ne 6",
      text: "Henrik Wergeland (1808\u20131845) \u00e9tait un \u00e9crivain, \u00e9diteur et commentateur social norv\u00e9gien. Comme Ibsen, il \u00e9crivait aussi des pi\u00e8ces de th\u00e9\u00e2tre. Aujourd\u2019hui, il est surtout remembr\u00e9 pour son combat contre le deuxi\u00e8me paragraphe de la constitution norv\u00e9gienne de 1814, qui d\u00e9clarait que <em>\u00ab les Juifs ne sont toujours pas les bienvenus dans le royaume. \u00bb</em> Il ne v\u00e9cut pas pour voir le succ\u00e8s de son combat\u00a0: le paragraphe fut finalement supprim\u00e9 en 1851, six ans apr\u00e8s sa mort.\n\nTraversez la rue et admirez l\u2019architecture du <b>Nationaltheatret</b>. Le th\u00e9\u00e2tre a ouvert en 1899 et re\u00e7oit des financements publics depuis 1927.\n\nAutour du th\u00e9\u00e2tre, vous trouverez plusieurs statues. L\u2019une d\u2019elles arbore ce qu\u2019on pourrait appeler un style de barbe original.\n\nQui est-il\u00a0?",
      answers: ["henrik ibsen", "ibsen"],
      hints: ["Vous avez d\u00e9j\u00e0 entendu parler de lui lors de cette visite.", "Il \u00e9tait amateur de bi\u00e8re et de journaux.", "Il se trouve sur le c\u00f4t\u00e9 gauche du th\u00e9\u00e2tre."]
    },
    {
      chapter: "Sc\u00e8ne 7",
      text: "Henrik Ibsen (1828\u20131906) est sans doute l\u2019\u00e9crivain le plus c\u00e9l\u00e8bre de Norv\u00e8ge et l\u2019un des dramaturges les plus reconnus au monde. Sa pi\u00e8ce <em>Maison de poup\u00e9e</em> \u2014 sur une femme qui quitte son mari \u2014 fut cr\u00e9\u00e9e en 1879 et provoqua un vif d\u00e9bat public, comme on pouvait s\u2019y attendre pour l\u2019\u00e9poque.\n\nDepuis le Th\u00e9\u00e2tre National, tournez \u00e0 droite, traversez la rue et entrez sur la place entour\u00e9e de trois grands b\u00e2timents. L\u2019<b>Universit\u00e9 d\u2019Oslo</b> a \u00e9t\u00e9 fond\u00e9e en 1811, lorsque la Norv\u00e8ge \u00e9tait en union avec le Danemark. Les b\u00e2timents que vous voyez ont \u00e9t\u00e9 commenc\u00e9s en 1841 et abritent aujourd\u2019hui la Facult\u00e9 de droit.\n\nDevant l\u2019universit\u00e9 se trouvent deux grandes statues d\u2019hommes. Trouvez celui qui partage son nom de famille avec le peintre le plus c\u00e9l\u00e8bre de Norv\u00e8ge, connu notamment pour <em>Le Cri</em>.\n\nQuel est son nom\u00a0?",
      answers: ["peter andreas munch", "p.a. munch", "pa munch", "peter munch"],
      hints: ["Le peintre en question a un mus\u00e9e d\u00e9di\u00e9 pr\u00e8s de l\u2019op\u00e9ra.", "Son pied gauche est en avant du droit."]
    },
    {
      chapter: "Sc\u00e8ne 8",
      text: "Peter Andreas Munch (1810\u20131863) \u00e9tait un historien, linguiste et g\u00e9ographe norv\u00e9gien. Parmi ses nombreuses contributions, il travailla \u00e0 \u00e9tablir une langue \u00e9crite norv\u00e9gienne distincte du danois, qui \u00e9tait la forme \u00e9crite dominante \u00e0 l\u2019\u00e9poque. Cet effort faisait partie de la construction d\u2019une identit\u00e9 nationale norv\u00e9gienne propre. La politique linguistique du XIXe si\u00e8cle a conduit \u00e0 la situation singuli\u00e8re que la Norv\u00e8ge poss\u00e8de aujourd\u2019hui deux langues \u00e9crites officielles\u00a0: le <em>bokm\u00e5l</em> et le <em>nynorsk</em>.\n\nDiriez-vous maintenant vers le dernier arr\u00eat\u00a0: le <b>Slottet</b> (le Palais Royal), achev\u00e9 en 1848 pour un roi su\u00e9dois et aujourd\u2019hui r\u00e9sidence officielle de la famille royale norv\u00e9gienne.\n\nDevant le palais, vous trouverez un homme \u00e0 cheval. Il \u00e9tait \u00e0 l\u2019origine un g\u00e9n\u00e9ral fran\u00e7ais avant de devenir prince h\u00e9ritier de Su\u00e8de, puis roi de l\u2019union entre la Su\u00e8de et la Norv\u00e8ge de 1814 \u00e0 1905. Malgr\u00e9 s\u2019\u00eatre oppos\u00e9 \u00e0 l\u2019ind\u00e9pendance norv\u00e9gienne et avoir fait la guerre pour revendiquer son droit sur le pays, il est aujourd\u2019hui curieusement remembr\u00e9 avec affection.\n\n<i>Si le parc de la Reine \u00e0 gauche du palais est ouvert, cela vaut vraiment la peine de s\u2019y promener. Ouvert du 18 mai au 1er octobre.</i>\n\nQui \u00e9tait-il\u00a0?",
      answers: ["karl johan", "carl johan", "karl iii johan", "carl iii johan", "bernadotte", "jean baptiste bernadotte"],
      hints: ["Il est tr\u00e8s grand \u2014 difficile \u00e0 manquer.", "Son nom est inscrit sur une plaque \u00e0 la base de la statue.", "La rue principale porte son nom."]
    }
  ]
};
