import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './styles/style.css'
import './styles/navbar.css'
import './styles/footer_style.css'
import Home from './pages/Home'
import CGBGL from './images/CzuczorLogo.png'
import Latvanyossagok from './pages/Latvanoyssagok';
import PrCikk from './pages/Prcikk';
import img18 from './images/latvanoyssagok/image18.jpg'
import img19 from './images/latvanoyssagok/image19.jpg'

function App() {
  const [toggle,setToggle]=useState(false);
  const toggler = ()=>{toggle?setToggle(false):setToggle(true);}
  const [sz1, setSz1]=useState("Ezért érdemes Győrbe látogatni 2121-ben!")
  const [sz2, setSz2]=useState("Ezeket mindenképpen nézd meg a jövőbeli Győrben!")
  const [tt1, setTt1]=useState("PR Cikk")
  const [tt2, setTt2]=useState("Látványosságok")

  const [fgyt1, setFgyt1]=useState("Magyar árú")
  const [fgyt2, setFgyt2]=useState("Kimérős boltok")
  const [fgyt3, setFgyt3]=useState("Zöld belváros")
  const [fgyt4, setFgyt4]=useState("Közlekedés")
  const [fgys1, setFgys1]=useState("Győr városa külön szerződésben áll a város határain belül üzemelő multinacionális üzletekkel, melyben kikötötték, hogy a lehetőségekhez mérten  törekedjenek a magyar árucikkek forgalmazására,mint például zöldségek, gyümölcsök, kifejezetten a magyar narancs, ruhacikkek és egyéb termékek. Az áruházak polcaira így nem a még zölden leszedett, kamionban érlelt zöldségek, gyümölcsök, a világ túlfelén előállított tömegcikkek kerülnek, hanem helyettük a magyar munkások által előállított készítmények, melyekkel az ország iparát erősítjük.")
  const [fgys2, setFgys2]=useState("A városban az ömlesztett áruk már csak olyan boltokban kaphatók, ahol a magunk vitte edényekbe tudjuk tölteni a kívánt cikket és annak az árát a mennyiségre kivetítve megkapjuk, így csak a termékért kell fizetni, a csomagolásért nem, így az egységekre vetített ár olcsóbb lehet. A város lakói továbbá nem terhelik a környezetüket a plusz csomagolóanyagokkal.")
  const [fgys3, setFgys3]=useState("Az elmúlt időszakban a fejlesztések lehetővé tették, hogy a belváros egyre zöldüljön, teret kapjon a fák, parkos területek mellett egy fejlett, egységes kerékpárút hálózat.")
  const [fgys4, setFgys4]=useState("A városi forgalmat a technikai innovációknak köszönhetően a föld alá vezethettük 2x2 sávon, egy külön mentősávval arra az esetre, ha netán gond adódna a város alatt. A városban csak a Volánbusz járatai és a közfeladatot ellátó szervek járművei közlekedhetnek, valamint az alternatív közlekedési eszközökkel, mint kerékpár, roller, Segway, bárki igénybe veheti a város kerékpárút hálózatát. Ezt ösztönzik a város határain felépített több ezer férőhelyes parkolóházak hálózata, amikhez vásárolható bérlet tartalmazza a városi közlekedési bérletet is.")

  const [prtitle, setPrtitle]=useState("Ezért érdemes meglátogatni Győrt 2121-ben")
  const [prtext, setPrtext]=useState("Mert szép, modern és tiszta.")

  const [foottext, setFoottext]=useState("Czuczor Gergely Bencés Gimnázium és Kollégium")

  const [stitle1, setstitle1]=useState("Rába Quelle Gyógy-, Termál és élményfürdő")
  const [stext1, setstext1]=useState("Győr városában található a közkedvelt Rába Quelle Gyógy-, Termál-és Élményfürdő, mely a Mosoni-Duna és a Rába találkozásánál húzódó félszigeten épült fel, ahonnan páratlan kilátás nyílik a történelmi belvárosra.")
  const [stitle2, setstitle2]=useState("Gyógyvíz")
  const [stext2, setstext2]=useState("A fürdőben található víz 2000 méter mélyről tör fel, hőfoka pedig 67°C. A komplexum kiváló minőségű gyógyvízzel rendelkezik, melynek köszönhetően több betegség kezelésére is alkalmas.")
  const [stext2_2, setstext2_2]=useState("2023-ban befejeződött felújítása óta folyamatosan várja a vendégeket.")
  const [stitle3, setstitle3]=useState("Xantus János állatkert")
  const [stext3, setstext3]=useState("Az első állatkert jellegű intézmény Győrben, 1962-ben a Püspökerdőben, az Erdészet fatelepe mellett létesült. A vadaspark a Mosoni-Duna árterén jött létre abból a célból, hogy a hazai nagyvad-fajokat és ragadozókat bemutassa.")
  const [stext3_2, setstext3_2]=useState("Az állatkert átfogó felújítására 2080-ban került sor, mikor is a városban növekvő zöld területeknek köszönhetően az állatok életterét is növelni tudtuk, új fajokat tudtunk befogadni.")
  const [stext3_3, setstext3_3]=useState("A látogatók árnyas fák alatt, gondozott, szép környezetben szemlélhetik az állatkert mindennapjait, ami tartalmas programot kínál gyermeknek és felnőttnek egyaránt.")
  const [stitle4, setstitle4]=useState("Városháza")
  const [stext4, setstext4]=useState("A győri városháza neobarokk stílusú 1900-ban épült, U alakú, kétemeletes, középütt óratoronnyal, s a főhomlokzaton kiugró két kisebb toronnyal rendelkező műemlék épület.")
  const [stext4_2, setstext4_2]=useState("Az alagsorban helyezkednek el a konyha, az étterem, házi nyomda és egyéb gazdasági, ellátó egységek. A földszinten különféle irodák, a központi iktató, valamint főporta van, ahol a díszes aula fogadja az ide belépőt. Az aulában láthatók V. István király valamint Bisinger József szobrai.")
  const [stext4_3, setstext4_3]=useState("Az első emelet a legdíszesebb, a lépcsőházi díszítésekkel és az irodai kialakításokkal, a polgármesteri irodával valamint díszteremmel.")
  const [stext4_4, setstext4_4]=useState("A második emeleten szintén irodák vannak. Ez az emelet kevésbé díszes, de stílusában, hangulatában az alatta levő szintekkel egységet alkot. A következő szint már a torony, mely a város számos pontjáról látható, és ahonnan csodálatos panoráma nyílik a városra.")
  const [stitle5, setstitle5]=useState("Szent László Látogatóközpont")
  const [stext5, setstext5]=useState("A Szent László Látogatóközpont foglalja magába Püspökvár-Toronykilátó és a Boldog Apor Vilmos Emlékkiállítást, a LEGENDA AUREA - Ereklyék vonzásában c. állandó kiállítást és az Egyházmegyei Könyvtárat és Kiállítótermet is.")
  const [stitle6, setstitle6]=useState("Püspökvár-Toronykilátó")
  const [stext6, setstext6]=useState("Az államalapítás korában épült vár ma is a győri püspökség székhelye. A főpapi rezidencia mai arculata gróf Zichy Ferenc püspök (1743-1783) nevéhez kötődik. A csonka tornyban a püspökvár építésének történetét, a győri püspökök portréit és címereit láthatjuk. A legfelső szinten Győr városképe tárul elénk a 19. század végén és az 1960-as években készült felvételeken. A kilátóba feljutva megcsodálhatjuk a város egyedülálló panorámáját.")
  const [stitle7, setstitle7]=useState("Nagyboldogasszony-székesegyház")
  const [stext7, setstext7]=useState("A győri Nagyboldogasszony-székesegyház a Győri egyházmegye főtemploma. A város legősibb részén, a Rába és a Mosoni-Duna összefolyásánál fekvő Káptalandombon áll, a Püspökvárral szemben. A Püspökvár mellett a város legrégibb és legjelentősebb műemléke. A katedrálisnak 1997-ben II. János Pál pápa kisbazilika rangot adományozott.")
  const [stitle8, setstitle8]=useState("Könnyező Szűzanya")
  const [stext8, setstext8]=useState("A Győri Székesegyház kegyképén látható Szűzanya 1697. március 17-én reggel véres könnyeket hullatott. Az évfordulóhoz kapcsolódva minden évben sokan elzarándokolnak a Könnyező Szűzanyához.")
  const [stext8_2, setstext8_2]=useState("A kegykép az Altató Mária vagy Örvendetes Mária képtípusba tartozik. Valószínűleg írországi festőtől származik. A vászonra festett, koronákkal ékes olajkép ősképe Abraham van Merlen 1640 körüli rézmetszete. A gyermek Jézus fölé hajoló, imádkozó Szűzanyát ábrázoló kép az előkelő ír családból származó Walter Lynch későbbi clonferti püspöké volt, ő hozta Magyarországra, miután a Cromwell-féle üldözés idején menekülni kényszerült hazájából. Bécsben találkozott Püsky János akkori győri püspökkel, aki meghívta őt Győrbe, és kinevezte kanonokká és püspöki helynökké. A kép a püspök halála (1663) után a székesegyház oldalfalára került.")
  const [stitle9, setstitle9]=useState("Radó sziget")
  const [stext9, setstext9]=useState("A Radó-sziget Győr történelmi magjában található, a Rába két ága fogja közre. A sziget közvetlenül a Rába torkolata előtt, Belváros, Újváros és Sziget városrészek közt helyezkedik el. A szigeten található Győr legszebb parkja, szórakozó, pihenő és történelmi emlékhelyek is találhatók itt. Korábban a szigetet Sétatéri-szigetnek nevezték, mai nevét Szentmártoni Radó Kálmánról, a Rábaszabályozó Társulat egykori igazgatójáról kapta.")
  const [stitle10, setstitle10]=useState("Széchenyi-tér")
  const [stext10, setstext10]=useState("A Széchenyi tér Győr barokk főtere. Jórészt 17–18. századi épületek keretezik, különösen az északi oldal barokk palotái és a déli oldalon a bencések épületegyüttese figyelemreméltó. Évszázadokon keresztül ez a tér volt a nyilvános élet központja, napjainkban is számos rendezvényt tartanak itt.")
  const [stitle11, setstitle11]=useState("Czuczor Gergely Bencés Gimnázium és Kollégium")
  const [stext11, setstext11]=useState("A mai eklektikus épület 1888-ban épült az egykori jezsuita gimnázium helyére, amit 1627-ben alapítottak. A gimnázium 1802 óta a bencéseké. A gimnázium tanítványa volt Kisfaludy Károly és Sándor, Batthyány Lajos, Xántus János és Kautz Gyula.")
  const [stitle12, setstitle12]=useState("Loyolai Szent Ignác Bencés templom")
  const [stext12, setstext12]=useState("A gimnázium és a rendház közt áll a kéttornyos homlokzatú templom, az olaszos kora barokk egyik legszebb magyarországi alkotása. A templom egyhajós, két oldalán kápolnafülkékkel. A kápolnák 18. századi stukkós dísze és a főhajót borító freskó országos jelentőségűek. A barokk berendezésből kiemelkedik a Ludwig Gode által tervezett szószék és a főoltár Josef Rosler szobraival. Nagyon szépek a templom faragott padjai.")
  const [stitle13, setstitle13]=useState("Apátúr sörház")
  const [stext13, setstext13]=useState("A bencés közösség tulajdonában lévő Lloyd épület pincéjében a 21. Század eleje óta készít söröket egy egykori bencés diák, eleinte pils fajtával kezdett, de mára már bárki megtalálja a maga kedvenc sörfajtáját. A manufaktúra egyre sikeresebb, aki hozzá szeretne jutni egy üveg bencés sörhöz, annak nagyon résen kell lennie, hiszen nagyon hamar elfogynak a polcokról.")
  const [stext13_2, setstext13_2]=useState("A sörházban a szerzetesi hagyományból ismert ételek és italok kaphatók 2021 decembere óta.")
  const [stitle14, setstitle14]=useState("Kimba elefántpark")
  const [stext14, setstext14]=useState("Töltéstaván üzemelteti az állatparkot a méltán híres Casselly család, akik több generáció óta foglalkoznak cirkuszi állatokkal, az ő szerepeltetésükkel. Mostmár felhagytak a turnékkal és igyekeznek minél több állatot megmenteni és befogadni.")
  const [stext14_2, setstext14_2]=useState("Örömmel várják a látogatókat, kicsiket, nagyokat, hiszen mindenki megtalálja a neki való programot és lehetőséget.")
  const [stitle15, setstitle15]=useState("Bécsi kapu tér")
  const [stext15, setstext15]=useState("A Bécsi kapu tér Győr legrégibb tereinek egyike. A szabálytalan alakú tér a 19. század közepe óta nyugatról, a Rába felől nyitott. Egykor itt állt a reneszánsz stílusú Bécsi-kapu, melyen át a nyugat felől érkező utasok érkeztek a Belvárosba.")
  const [stitle16, setstitle16]=useState("Kármelhegyi Boldogasszony templom")
  const [stext16, setstext16]=useState("A templom tervező építésze a kármelita Athanasius testvér volt. Ő vezette az építkezést és a berendezés tervei is tőle származnak. Oltárait a szobrokkal együtt Domonkos kármelita testvér készítette. A főoltárképe Szent István királyt és Szent Imre herceget ábrázolja, amint hódolnak a Szent Szűz előtt. A templom alapkövét 1721-ben helyezték el és 1725-ben szentelték fel. Templomunk kriptájában temették elideiglenesen Boldog Apor Vilmos vértanú püspököt 1945-ben, s földi maradványai itt nyugodtak 1986-ig.")
  const [stitle17, setstitle17]=useState("Kisfaludy-szobor")
  const [stext17, setstext17]=useState("A Győr környékéről származó Kisfaludy Károly szobrát 1892-ben a Radó-szigeten állították fel, az akkor még álló kőszínház közelében. Valójában 1888-ra tervezték az avatást, Kisfaludy halálának 50. évfordulójára, azonban nem gyűlt rá össze a szükséges pénz. Az avatáson a városatyák mellett Jókai Mór is beszédet mondott.")
  const [stext17_2, setstext17_2]=useState("A gyakori árvízi károk miatt – 1920-ban napokig víz alatt állt – 1921-ben került át mai helyére.")
  const [stext17_3, setstext17_3]=useState("A szoborhoz több helyi legenda is kötődik. Ha nem vigyázunk és tilosban parkolunk, könnyen felkerülhetünk a kezében tartott jegyzetekre, mint ahogy azon diákok is, akik elkésnek az iskolából. Ez azért mosolyogtató, mert a bencés gimnázium diákjaként Kisfaludy a tanárok réme volt.")
  const [stitle18, setstitle18]=useState("Mobilis")
  const [stext18, setstext18]=useState("Közvetlen az egyetem szomszédságában található kiállítás betekintést ad a modern technológia világába, különböző modellekkel, szimulációkkal mutatják be a vendégeknek a technológia működését, mint az elektromos repülők, vagy a víz hajtású járművek. Régebbi technológiák is olykor megtekinthetők, mint például a belső égésű motorok, vagy a lítium ion akkumulátor. A kiállításokon kívül aktív szerepet vállal a mobilis csapata az oktatásban. Az ifjakat programozáara, fizikai és kémiai ismeretekre tanítják, az idősebb korosztály számára pedig felzárkóztató foglalkozásokat tartanak az infokommunikációs eszközök használatából.")
  const [stitle19, setstitle19]=useState("Dunakapu tér")
  const [stext19, setstext19]=useState("A Dunakapu tér Győr ikonikus terei közül az egyik. A Mosoni-Duna határolja északi irányból, nevét is a régi vár Duna-kapujáról kapta, amit sok helyen Vízi-kapunak is emlegetnek a források. A legenda szerint erre a kapura állították a törökök a vaskakast 1594-ben, mikor bevették a várost, kijelentvén, hogy addig maradnak, amíg meg nem szólal – ami négy évvel később be is következett.")
  const [stext19_2, setstext19_2]=useState("Napjainkban fontos szerepet játszik a koncertek, fesztiválok, vásárok lebonyolításában, akárcsak az elmúlt évszázadban.")
  const [stitle20, setstitle20]=useState("Baross út")
  const [stext20, setstext20]=useState("A Baross út Győr egyik legforgalmasabb útvonala, a Káptalandomb peremétől átszeli a Belvárost, majd a vasút felett átívelő Baross hídon keresztülhaladva Nádorvárosban folytatódik, ahol egészen a Szigethy Attila útig tart. Az út belvárosi szakasza a város legjelentősebb sétálóutcája számos üzlettel, étteremmel. A sétálóutca arculata az elmúlt száz évben jelentősen változott, miután a barokk épületeket felújították, a szocialista időkben felhúzott blokkokat átépítették, modernizálták, ahová csak lehetett fákat telepítettek.")
  const [stitle21, setstitle21]=useState("Várfal sétány")
  const [stext21, setstext21]=useState("A három méter széles sétány a Kossuth hidat és a Rábatext Horgászegyesület telkét köti össze. Az utóbbi években az időjárás és az árvíz okozta károk miatt többször is felújított sétány minden évszakban rengeteg kikapcsolódni, gyönyörködni vágyó ember lepi el. Itt nyugodt környezetben csodálhatják a Duna, a 2023-ban átépített, majd 2086-ban teljesen felújított fürdő és a Radó sziget látképét.")
  const [stitle22, setstitle22]=useState("Zsinagóga")
  const [stext22, setstext22]=useState("Az egykori győri zsinagóga a 19. században épült, historikus és szecessziós stílusban. Ma múzeumépületként szolgál, illetve kulturális rendezvényeknek és a Zeneművészeti Főiskolán ad otthont.")
  const [stitle23, setstitle23]=useState("Széchenyi István Egyetem")
  const [stext23, setstext23]=useState("Az egyetem mindig is fontos szerepet töltött be a város életében, hiszen rendkívül sok hallgatója a világ minden pontjáról vonzotta a diákokat. A várossal együttműködve segédkeztek az új közlekedési infrastruktúra megállításában, a város arculatának alakításában, hogy minden Győrbe érkező és itt élő egy rendezett, modern és élhető városnak tapasztalja a folyók városát.")
  const [stext23_2, setstext23_2]=useState("Az egykori egyetemi sportcsarnok átépítése után megkezdődött az új sportközpont felépítése, melynél elsődleges szempont volt a zöldítés;, mely akadályt sikeresen vettek a tervezésben résztvevő hallgatók.")
  const [stext23_3, setstext23_3]=useState("Az új sportközpont nem csak a hallgatóknak nyúlt kikapcsolódási, sportolási lehetőséget, hanem a látogatási időben mindenki előtt nyitva áll.")
  const [stitle24, setstitle24]=useState("Győr múlt százada kiállítás")
  const [stext24, setstext24]=useState("Ezt a kiállítást a városvezetés Győr várossá válásának 850 éves évfordulójára szervezte, melyben lehetőséget kapunk visszatekinteni a város 100 évvel ezelőtti valójára, az azóta történt változásokra. Az interaktív kiállítás kitekintést ad a támogatóknak köszönhetően a világ és a technológia változására is, mely jól mutatja, hogy ebben az évszázadban talán nem túlzás azt mondani, hogy végbe ment a 3. Ipari forradalom. Ennek a vívmányait, előnyeit tekinthetik meg az Audi arénába látogatók.")

  function changeLang(n){
    if (n===1){
      setSz1("Ez van a pr cikkben, nagyon szép és okos");
      setSz2("Ez egy másik szöveg");
      setTt1("PR Cikk");
      setTt2("Egy másik feladat");
      setPrtitle("Ezért érdemes meglátogatni Győrt 2121-ben");
      setPrtext("Mert szép, modern és tiszta.");
      setFoottext("Czuczor Gergely Bencés Gimnázium és Kollégium");
      setstitle1("Rába Quelle Gyógy-, Termál és élményfürdő");
      setstext1("Győr városában található a közkedvelt Rába Quelle Gyógy-, Termál-és Élményfürdő, mely a Mosoni-Duna és a Rába találkozásánál húzódó félszigeten épült fel, ahonnan páratlan kilátás nyílik a történelmi belvárosra.");
      setstitle2("Gyógyvíz");
      setstext2("A fürdőben található víz 2000 méter mélyről tör fel, hőfoka pedig 67°C. A komplexum kiváló minőségű gyógyvízzel rendelkezik, melynek köszönhetően több betegség kezelésére is alkalmas.");
      setstext2_2("2023-ban befejeződött felújítása óta folyamatosan várja a vendégeket.");
      setstitle3("Xantus János állatkert");
      setstext3("Az első állatkert jellegű intézmény Győrben, 1962-ben a Püspökerdőben, az Erdészet fatelepe mellett létesült. A vadaspark a Mosoni-Duna árterén jött létre abból a célból, hogy a hazai nagyvad-fajokat és ragadozókat bemutassa.");
      setstext3_2("Az állatkert átfogó felújítására 2080-ban került sor, mikor is a városban növekvő zöld területeknek köszönhetően az állatok életterét is növelni tudtuk, új fajokat tudtunk befogadni.");
      setstext3_3("A látogatók árnyas fák alatt, gondozott, szép környezetben szemlélhetik az állatkert mindennapjait, ami tartalmas programot kínál gyermeknek és felnőttnek egyaránt.");
      setstitle4("Városháza");
      setstext4("A győri városháza neobarokk stílusú 1900-ban épült, U alakú, kétemeletes, középütt óratoronnyal, s a főhomlokzaton kiugró két kisebb toronnyal rendelkező műemlék épület.");
      setstext4_2("Az alagsorban helyezkednek el a konyha, az étterem, házi nyomda és egyéb gazdasági, ellátó egységek. A földszinten különféle irodák, a központi iktató, valamint főporta van, ahol a díszes aula fogadja az ide belépőt. Az aulában láthatók V. István király valamint Bisinger József szobrai.");
      setstext4_3("Az első emelet a legdíszesebb, a lépcsőházi díszítésekkel és az irodai kialakításokkal, a polgármesteri irodával valamint díszteremmel.");
      setstext4_4("A második emeleten szintén irodák vannak. Ez az emelet kevésbé díszes, de stílusában, hangulatában az alatta levő szintekkel egységet alkot. A következő szint már a torony, mely a város számos pontjáról látható, és ahonnan csodálatos panoráma nyílik a városra.");
      setstitle5("Szent László Látogatóközpont");
      setstext5("A Szent László Látogatóközpont foglalja magába Püspökvár-Toronykilátó és a Boldog Apor Vilmos Emlékkiállítást, a LEGENDA AUREA - Ereklyék vonzásában c. állandó kiállítást és az Egyházmegyei Könyvtárat és Kiállítótermet is.");
      setstitle6("Püspökvár-Toronykilátó");
      setstext6("Az államalapítás korában épült vár ma is a győri püspökség székhelye. A főpapi rezidencia mai arculata gróf Zichy Ferenc püspök (1743-1783) nevéhez kötődik. A csonka tornyban a püspökvár építésének történetét, a győri püspökök portréit és címereit láthatjuk. A legfelső szinten Győr városképe tárul elénk a 19. század végén és az 1960-as években készült felvételeken. A kilátóba feljutva megcsodálhatjuk a város egyedülálló panorámáját.");
      setstitle7("Nagyboldogasszony-székesegyház");
      setstext7("A győri Nagyboldogasszony-székesegyház a Győri egyházmegye főtemploma. A város legősibb részén, a Rába és a Mosoni-Duna összefolyásánál fekvő Káptalandombon áll, a Püspökvárral szemben. A Püspökvár mellett a város legrégibb és legjelentősebb műemléke. A katedrálisnak 1997-ben II. János Pál pápa kisbazilika rangot adományozott.");
      setstitle8("Könnyező Szűzanya");
      setstext8("A Győri Székesegyház kegyképén látható Szűzanya 1697. március 17-én reggel véres könnyeket hullatott. Az évfordulóhoz kapcsolódva minden évben sokan elzarándokolnak a Könnyező Szűzanyához.");
      setstext8_2("A kegykép az Altató Mária vagy Örvendetes Mária képtípusba tartozik. Valószínűleg írországi festőtől származik. A vászonra festett, koronákkal ékes olajkép ősképe Abraham van Merlen 1640 körüli rézmetszete. A gyermek Jézus fölé hajoló, imádkozó Szűzanyát ábrázoló kép az előkelő ír családból származó Walter Lynch későbbi clonferti püspöké volt, ő hozta Magyarországra, miután a Cromwell-féle üldözés idején menekülni kényszerült hazájából. Bécsben találkozott Püsky János akkori győri püspökkel, aki meghívta őt Győrbe, és kinevezte kanonokká és püspöki helynökké. A kép a püspök halála (1663) után a székesegyház oldalfalára került.");
      setstitle9("Radó sziget");
      setstext9("A Radó-sziget Győr történelmi magjában található, a Rába két ága fogja közre. A sziget közvetlenül a Rába torkolata előtt, Belváros, Újváros és Sziget városrészek közt helyezkedik el. A szigeten található Győr legszebb parkja, szórakozó, pihenő és történelmi emlékhelyek is találhatók itt. Korábban a szigetet Sétatéri-szigetnek nevezték, mai nevét Szentmártoni Radó Kálmánról, a Rábaszabályozó Társulat egykori igazgatójáról kapta.");
      setstitle10("Széchenyi-tér");
      setstext10("A Széchenyi tér Győr barokk főtere. Jórészt 17–18. századi épületek keretezik, különösen az északi oldal barokk palotái és a déli oldalon a bencések épületegyüttese figyelemreméltó. Évszázadokon keresztül ez a tér volt a nyilvános élet központja, napjainkban is számos rendezvényt tartanak itt.");
      setstitle11("Czuczor Gergely Bencés Gimnázium és Kollégium");
      setstext11("A mai eklektikus épület 1888-ban épült az egykori jezsuita gimnázium helyére, amit 1627-ben alapítottak. A gimnázium 1802 óta a bencéseké. A gimnázium tanítványa volt Kisfaludy Károly és Sándor, Batthyány Lajos, Xántus János és Kautz Gyula.");
      setstitle12("Loyolai Szent Ignác Bencés templom");
      setstext12("A gimnázium és a rendház közt áll a kéttornyos homlokzatú templom, az olaszos kora barokk egyik legszebb magyarországi alkotása. A templom egyhajós, két oldalán kápolnafülkékkel. A kápolnák 18. századi stukkós dísze és a főhajót borító freskó országos jelentőségűek. A barokk berendezésből kiemelkedik a Ludwig Gode által tervezett szószék és a főoltár Josef Rosler szobraival. Nagyon szépek a templom faragott padjai.");
      setstitle13("Apátúr sörház");
      setstext13("A bencés közösség tulajdonában lévő Lloyd épület pincéjében a 21. Század eleje óta készít söröket egy egykori bencés diák, eleinte pils fajtával kezdett, de mára már bárki megtalálja a maga kedvenc sörfajtáját. A manufaktúra egyre sikeresebb, aki hozzá szeretne jutni egy üveg bencés sörhöz, annak nagyon résen kell lennie, hiszen nagyon hamar elfogynak a polcokról.");
      setstext13_2("A sörházban a szerzetesi hagyományból ismert ételek és italok kaphatók 2021 decembere óta.");
      setstitle14("Kimba elefántpark");
      setstext14("Töltéstaván üzemelteti az állatparkot a méltán híres Casselly család, akik több generáció óta foglalkoznak cirkuszi állatokkal, az ő szerepeltetésükkel. Mostmár felhagytak a turnékkal és igyekeznek minél több állatot megmenteni és befogadni.");
      setstext14_2("Örömmel várják a látogatókat, kicsiket, nagyokat, hiszen mindenki megtalálja a neki való programot és lehetőséget.");
      setstitle15("Bécsi kapu tér");
      setstext15("A Bécsi kapu tér Győr legrégibb tereinek egyike. A szabálytalan alakú tér a 19. század közepe óta nyugatról, a Rába felől nyitott. Egykor itt állt a reneszánsz stílusú Bécsi-kapu, melyen át a nyugat felől érkező utasok érkeztek a Belvárosba.");
      setstitle16("Kármelhegyi Boldogasszony templom");
      setstext16("A templom tervező építésze a kármelita Athanasius testvér volt. Ő vezette az építkezést és a berendezés tervei is tőle származnak. Oltárait a szobrokkal együtt Domonkos kármelita testvér készítette. A főoltárképe Szent István királyt és Szent Imre herceget ábrázolja, amint hódolnak a Szent Szűz előtt. A templom alapkövét 1721-ben helyezték el és 1725-ben szentelték fel. Templomunk kriptájában temették elideiglenesen Boldog Apor Vilmos vértanú püspököt 1945-ben, s földi maradványai itt nyugodtak 1986-ig.");
      setstitle17("Kisfaludy-szobor");
      setstext17("A Győr környékéről származó Kisfaludy Károly szobrát 1892-ben a Radó-szigeten állították fel, az akkor még álló kőszínház közelében. Valójában 1888-ra tervezték az avatást, Kisfaludy halálának 50. évfordulójára, azonban nem gyűlt rá össze a szükséges pénz. Az avatáson a városatyák mellett Jókai Mór is beszédet mondott.");
      setstext17_2("A gyakori árvízi károk miatt – 1920-ban napokig víz alatt állt – 1921-ben került át mai helyére.");
      setstext17_3("A szoborhoz több helyi legenda is kötődik. Ha nem vigyázunk és tilosban parkolunk, könnyen felkerülhetünk a kezében tartott jegyzetekre, mint ahogy azon diákok is, akik elkésnek az iskolából. Ez azért mosolyogtató, mert a bencés gimnázium diákjaként Kisfaludy a tanárok réme volt.");
      setstitle18("Mobilis");
      setstext18("Közvetlen az egyetem szomszédságában található kiállítás betekintést ad a modern technológia világába, különböző modellekkel, szimulációkkal mutatják be a vendégeknek a technológia működését, mint az elektromos repülők, vagy a víz hajtású járművek. Régebbi technológiák is olykor megtekinthetők, mint például a belső égésű motorok, vagy a lítium ion akkumulátor. A kiállításokon kívül aktív szerepet vállal a mobilis csapata az oktatásban. Az ifjakat programozáara, fizikai és kémiai ismeretekre tanítják, az idősebb korosztály számára pedig felzárkóztató foglalkozásokat tartanak az infokommunikációs eszközök használatából.");
      setstitle19("Dunakapu tér");
      setstext19("A Dunakapu tér Győr ikonikus terei közül az egyik. A Mosoni-Duna határolja északi irányból, nevét is a régi vár Duna-kapujáról kapta, amit sok helyen Vízi-kapunak is emlegetnek a források. A legenda szerint erre a kapura állították a törökök a vaskakast 1594-ben, mikor bevették a várost, kijelentvén, hogy addig maradnak, amíg meg nem szólal – ami négy évvel később be is következett.");
      setstext19_2("Napjainkban fontos szerepet játszik a koncertek, fesztiválok, vásárok lebonyolításában, akárcsak az elmúlt évszázadban.");
      setstitle20("Baross út");
      setstext20("A Baross út Győr egyik legforgalmasabb útvonala, a Káptalandomb peremétől átszeli a Belvárost, majd a vasút felett átívelő Baross hídon keresztülhaladva Nádorvárosban folytatódik, ahol egészen a Szigethy Attila útig tart. Az út belvárosi szakasza a város legjelentősebb sétálóutcája számos üzlettel, étteremmel. A sétálóutca arculata az elmúlt száz évben jelentősen változott, miután a barokk épületeket felújították, a szocialista időkben felhúzott blokkokat átépítették, modernizálták, ahová csak lehetett fákat telepítettek.");
      setstitle21("Várfal sétány");
      setstext21("A három méter széles sétány a Kossuth hidat és a Rábatext Horgászegyesület telkét köti össze. Az utóbbi években az időjárás és az árvíz okozta károk miatt többször is felújított sétány minden évszakban rengeteg kikapcsolódni, gyönyörködni vágyó ember lepi el. Itt nyugodt környezetben csodálhatják a Duna, a 2023-ban átépített, majd 2086-ban teljesen felújított fürdő és a Radó sziget látképét.");
      setstitle22("Zsinagóga");
      setstext22("Az egykori győri zsinagóga a 19. században épült, historikus és szecessziós stílusban. Ma múzeumépületként szolgál, illetve kulturális rendezvényeknek és a Zeneművészeti Főiskolán ad otthont.");
      setstitle23("Széchenyi István Egyetem");
      setstext23("Az egyetem mindig is fontos szerepet töltött be a város életében, hiszen rendkívül sok hallgatója a világ minden pontjáról vonzotta a diákokat. A várossal együttműködve segédkeztek az új közlekedési infrastruktúra megállításában, a város arculatának alakításában, hogy minden Győrbe érkező és itt élő egy rendezett, modern és élhető városnak tapasztalja a folyók városát.");
      setstext23_2("Az egykori egyetemi sportcsarnok átépítése után megkezdődött az új sportközpont felépítése, melynél elsődleges szempont volt a zöldítés, mely akadályt sikeresen vettek a tervezésben résztvevő hallgatók.");
      setstext23_3("Az új sportközpont nem csak a hallgatóknak nyúlt kikapcsolódási, sportolási lehetőséget, hanem a látogatási időben mindenki előtt nyitva áll.");
      setstitle24("Győr múlt százada kiállítás");
      setstext24("Ezt a kiállítást a városvezetés Győr várossá válásának 850 éves évfordulójára szervezte, melyben lehetőséget kapunk visszatekinteni a város 100 évvel ezelőtti valójára, az azóta történt változásokra. Az interaktív kiállítás kitekintést ad a támogatóknak köszönhetően a világ és a technológia változására is, mely jól mutatja, hogy ebben az évszázadban talán nem túlzás azt mondani, hogy végbe ment a 3. Ipari forradalom. Ennek a vívmányait, előnyeit tekinthetik meg az Audi arénába látogatók.");
    }
    else if(n===2) {
      setSz1('That is why it is worth visiting Győr in 2121!');
      setSz2('Be sure to check them out in the future Győr!');
      setTt1('Article PR');
      setTt2('Attractions');
      setFgyt1('Hungarian goods');
      setFgyt2('Unpackaged Shops');
      setFgyt3('Green downtown');
      setFgyt4('Transport');
      setFgys1('The city of Győr has a separate agreement with the multinational stores operating within the city limits, in which it is stipulated that they should strive to distribute Hungarian goods, such as vegetables, fruits, especially Hungarian oranges, clothing and other products. Thus, the shelves of the stores will not be the vegetables and fruits picked in the green, picked in the truck, and the mass products produced in other parts of the world, but the preparations made by Hungarian workers, which will strengthen the country\'s industry.');
      setFgys2('In the city, bulk goods are only available in stores where we can fill the desired item into our own containers and get the price projected on the quantity, so you only have to pay for the product, not the packaging, so the price per unit can be cheaper. In addition, city residents do not burden their environment with extra packaging.');
      setFgys3('In the recent period, the developments have made it possible for the city center to become more and more green, with a well-developed, unified cycle path network in addition to the trees and park areas.');
      setFgys4('Thanks to technical innovations, we were able to drive city traffic underground in a 2x2 lane, with a separate rescue lane in case there was a problem under the city. In the city, only the services of the Volánbusz and the vehicles of public bodies can travel, and with the alternative means of transport, such as bicycles, scooters, Segways, anyone can use the city\'s cycle path network. This is encouraged by the network of thousands of parking garages built on the outskirts of the city, for which a city pass can be purchased.');
      setPrtitle("That is why it is worth visiting Győr in 2121");
      setPrtext("Because it is beautiful, modern and clean.");
      setFoottext("Czuczor Gergely Benedictine Grammar School and College");
      setstitle1("Rába Quelle Gyógy-, Termál és élményfürdő");
      setstext1("Győr városában található a közkedvelt Rába Quelle Gyógy-, Termál-és Élményfürdő, mely a Mosoni-Duna és a Rába találkozásánál húzódó félszigeten épült fel, ahonnan páratlan kilátás nyílik a történelmi belvárosra.");
      setstitle2("Gyógyvíz");
      setstext2("A fürdőben található víz 2000 méter mélyről tör fel, hőfoka pedig 67°C. A komplexum kiváló minőségű gyógyvízzel rendelkezik, melynek köszönhetően több betegség kezelésére is alkalmas.");
      setstext2_2("2023-ban befejeződött felújítása óta folyamatosan várja a vendégeket.");
      setstitle3("Xantus János állatkert");
      setstext3("Az első állatkert jellegű intézmény Győrben, 1962-ben a Püspökerdőben, az Erdészet fatelepe mellett létesült. A vadaspark a Mosoni-Duna árterén jött létre abból a célból, hogy a hazai nagyvad-fajokat és ragadozókat bemutassa.");
      setstext3_2("Az állatkert átfogó felújítására 2080-ban került sor, mikor is a városban növekvő zöld területeknek köszönhetően az állatok életterét is növelni tudtuk, új fajokat tudtunk befogadni.");
      setstext3_3("A látogatók árnyas fák alatt, gondozott, szép környezetben szemlélhetik az állatkert mindennapjait, ami tartalmas programot kínál gyermeknek és felnőttnek egyaránt.");
      setstitle4("Városháza");
      setstext4("A győri városháza neobarokk stílusú 1900-ban épült, U alakú, kétemeletes, középütt óratoronnyal, s a főhomlokzaton kiugró két kisebb toronnyal rendelkező műemlék épület.");
      setstext4_2("Az alagsorban helyezkednek el a konyha, az étterem, házi nyomda és egyéb gazdasági, ellátó egységek. A földszinten különféle irodák, a központi iktató, valamint főporta van, ahol a díszes aula fogadja az ide belépőt. Az aulában láthatók V. István király valamint Bisinger József szobrai.");
      setstext4_3("Az első emelet a legdíszesebb, a lépcsőházi díszítésekkel és az irodai kialakításokkal, a polgármesteri irodával valamint díszteremmel.");
      setstext4_4("A második emeleten szintén irodák vannak. Ez az emelet kevésbé díszes, de stílusában, hangulatában az alatta levő szintekkel egységet alkot. A következő szint már a torony, mely a város számos pontjáról látható, és ahonnan csodálatos panoráma nyílik a városra.");
      setstitle5("Szent László Látogatóközpont");
      setstext5("A Szent László Látogatóközpont foglalja magába Püspökvár-Toronykilátó és a Boldog Apor Vilmos Emlékkiállítást, a LEGENDA AUREA - Ereklyék vonzásában c. állandó kiállítást és az Egyházmegyei Könyvtárat és Kiállítótermet is.");
      setstitle6("Püspökvár-Toronykilátó");
      setstext6("Az államalapítás korában épült vár ma is a győri püspökség székhelye. A főpapi rezidencia mai arculata gróf Zichy Ferenc püspök (1743-1783) nevéhez kötődik. A csonka tornyban a püspökvár építésének történetét, a győri püspökök portréit és címereit láthatjuk. A legfelső szinten Győr városképe tárul elénk a 19. század végén és az 1960-as években készült felvételeken. A kilátóba feljutva megcsodálhatjuk a város egyedülálló panorámáját.");
      setstitle7("Nagyboldogasszony-székesegyház");
      setstext7("A győri Nagyboldogasszony-székesegyház a Győri egyházmegye főtemploma. A város legősibb részén, a Rába és a Mosoni-Duna összefolyásánál fekvő Káptalandombon áll, a Püspökvárral szemben. A Püspökvár mellett a város legrégibb és legjelentősebb műemléke. A katedrálisnak 1997-ben II. János Pál pápa kisbazilika rangot adományozott.");
      setstitle8("Könnyező Szűzanya");
      setstext8("A Győri Székesegyház kegyképén látható Szűzanya 1697. március 17-én reggel véres könnyeket hullatott. Az évfordulóhoz kapcsolódva minden évben sokan elzarándokolnak a Könnyező Szűzanyához.");
      setstext8_2("A kegykép az Altató Mária vagy Örvendetes Mária képtípusba tartozik. Valószínűleg írországi festőtől származik. A vászonra festett, koronákkal ékes olajkép ősképe Abraham van Merlen 1640 körüli rézmetszete. A gyermek Jézus fölé hajoló, imádkozó Szűzanyát ábrázoló kép az előkelő ír családból származó Walter Lynch későbbi clonferti püspöké volt, ő hozta Magyarországra, miután a Cromwell-féle üldözés idején menekülni kényszerült hazájából. Bécsben találkozott Püsky János akkori győri püspökkel, aki meghívta őt Győrbe, és kinevezte kanonokká és püspöki helynökké. A kép a püspök halála (1663) után a székesegyház oldalfalára került.");
      setstitle9("Radó sziget");
      setstext9("A Radó-sziget Győr történelmi magjában található, a Rába két ága fogja közre. A sziget közvetlenül a Rába torkolata előtt, Belváros, Újváros és Sziget városrészek közt helyezkedik el. A szigeten található Győr legszebb parkja, szórakozó, pihenő és történelmi emlékhelyek is találhatók itt. Korábban a szigetet Sétatéri-szigetnek nevezték, mai nevét Szentmártoni Radó Kálmánról, a Rábaszabályozó Társulat egykori igazgatójáról kapta.");
      setstitle10("Széchenyi-tér");
      setstext10("A Széchenyi tér Győr barokk főtere. Jórészt 17–18. századi épületek keretezik, különösen az északi oldal barokk palotái és a déli oldalon a bencések épületegyüttese figyelemreméltó. Évszázadokon keresztül ez a tér volt a nyilvános élet központja, napjainkban is számos rendezvényt tartanak itt.");
      setstitle11("Czuczor Gergely Bencés Gimnázium és Kollégium");
      setstext11("A mai eklektikus épület 1888-ban épült az egykori jezsuita gimnázium helyére, amit 1627-ben alapítottak. A gimnázium 1802 óta a bencéseké. A gimnázium tanítványa volt Kisfaludy Károly és Sándor, Batthyány Lajos, Xántus János és Kautz Gyula.");
      setstitle12("Loyolai Szent Ignác Bencés templom");
      setstext12("A gimnázium és a rendház közt áll a kéttornyos homlokzatú templom, az olaszos kora barokk egyik legszebb magyarországi alkotása. A templom egyhajós, két oldalán kápolnafülkékkel. A kápolnák 18. századi stukkós dísze és a főhajót borító freskó országos jelentőségűek. A barokk berendezésből kiemelkedik a Ludwig Gode által tervezett szószék és a főoltár Josef Rosler szobraival. Nagyon szépek a templom faragott padjai.");
      setstitle13("Apátúr sörház");
      setstext13("A bencés közösség tulajdonában lévő Lloyd épület pincéjében a 21. Század eleje óta készít söröket egy egykori bencés diák, eleinte pils fajtával kezdett, de mára már bárki megtalálja a maga kedvenc sörfajtáját. A manufaktúra egyre sikeresebb, aki hozzá szeretne jutni egy üveg bencés sörhöz, annak nagyon résen kell lennie, hiszen nagyon hamar elfogynak a polcokról.");
      setstext13_2("A sörházban a szerzetesi hagyományból ismert ételek és italok kaphatók 2021 decembere óta.");
      setstitle14("Kimba elefántpark");
      setstext14("Töltéstaván üzemelteti az állatparkot a méltán híres Casselly család, akik több generáció óta foglalkoznak cirkuszi állatokkal, az ő szerepeltetésükkel. Mostmár felhagytak a turnékkal és igyekeznek minél több állatot megmenteni és befogadni.");
      setstext14_2("Örömmel várják a látogatókat, kicsiket, nagyokat, hiszen mindenki megtalálja a neki való programot és lehetőséget.");
      setstitle15("Bécsi kapu tér");
      setstext15("A Bécsi kapu tér Győr legrégibb tereinek egyike. A szabálytalan alakú tér a 19. század közepe óta nyugatról, a Rába felől nyitott. Egykor itt állt a reneszánsz stílusú Bécsi-kapu, melyen át a nyugat felől érkező utasok érkeztek a Belvárosba.");
      setstitle16("Kármelhegyi Boldogasszony templom");
      setstext16("A templom tervező építésze a kármelita Athanasius testvér volt. Ő vezette az építkezést és a berendezés tervei is tőle származnak. Oltárait a szobrokkal együtt Domonkos kármelita testvér készítette. A főoltárképe Szent István királyt és Szent Imre herceget ábrázolja, amint hódolnak a Szent Szűz előtt. A templom alapkövét 1721-ben helyezték el és 1725-ben szentelték fel. Templomunk kriptájában temették elideiglenesen Boldog Apor Vilmos vértanú püspököt 1945-ben, s földi maradványai itt nyugodtak 1986-ig.");
      setstitle17("Kisfaludy-szobor");
      setstext17("A Győr környékéről származó Kisfaludy Károly szobrát 1892-ben a Radó-szigeten állították fel, az akkor még álló kőszínház közelében. Valójában 1888-ra tervezték az avatást, Kisfaludy halálának 50. évfordulójára, azonban nem gyűlt rá össze a szükséges pénz. Az avatáson a városatyák mellett Jókai Mór is beszédet mondott.");
      setstext17_2("A gyakori árvízi károk miatt – 1920-ban napokig víz alatt állt – 1921-ben került át mai helyére.");
      setstext17_3("A szoborhoz több helyi legenda is kötődik. Ha nem vigyázunk és tilosban parkolunk, könnyen felkerülhetünk a kezében tartott jegyzetekre, mint ahogy azon diákok is, akik elkésnek az iskolából. Ez azért mosolyogtató, mert a bencés gimnázium diákjaként Kisfaludy a tanárok réme volt.");
      setstitle18("Mobilis");
      setstext18("Közvetlen az egyetem szomszédságában található kiállítás betekintést ad a modern technológia világába, különböző modellekkel, szimulációkkal mutatják be a vendégeknek a technológia működését, mint az elektromos repülők, vagy a víz hajtású járművek. Régebbi technológiák is olykor megtekinthetők, mint például a belső égésű motorok, vagy a lítium ion akkumulátor. A kiállításokon kívül aktív szerepet vállal a mobilis csapata az oktatásban. Az ifjakat programozáara, fizikai és kémiai ismeretekre tanítják, az idősebb korosztály számára pedig felzárkóztató foglalkozásokat tartanak az infokommunikációs eszközök használatából.");
      setstitle19("Dunakapu tér");
      setstext19("A Dunakapu tér Győr ikonikus terei közül az egyik. A Mosoni-Duna határolja északi irányból, nevét is a régi vár Duna-kapujáról kapta, amit sok helyen Vízi-kapunak is emlegetnek a források. A legenda szerint erre a kapura állították a törökök a vaskakast 1594-ben, mikor bevették a várost, kijelentvén, hogy addig maradnak, amíg meg nem szólal – ami négy évvel később be is következett.");
      setstext19_2("Napjainkban fontos szerepet játszik a koncertek, fesztiválok, vásárok lebonyolításában, akárcsak az elmúlt évszázadban.");
      setstitle20("Baross út");
      setstext20("A Baross út Győr egyik legforgalmasabb útvonala, a Káptalandomb peremétől átszeli a Belvárost, majd a vasút felett átívelő Baross hídon keresztülhaladva Nádorvárosban folytatódik, ahol egészen a Szigethy Attila útig tart. Az út belvárosi szakasza a város legjelentősebb sétálóutcája számos üzlettel, étteremmel. A sétálóutca arculata az elmúlt száz évben jelentősen változott, miután a barokk épületeket felújították, a szocialista időkben felhúzott blokkokat átépítették, modernizálták, ahová csak lehetett fákat telepítettek.");
      setstitle21("Várfal sétány");
      setstext21("A három méter széles sétány a Kossuth hidat és a Rábatext Horgászegyesület telkét köti össze. Az utóbbi években az időjárás és az árvíz okozta károk miatt többször is felújított sétány minden évszakban rengeteg kikapcsolódni, gyönyörködni vágyó ember lepi el. Itt nyugodt környezetben csodálhatják a Duna, a 2023-ban átépített, majd 2086-ban teljesen felújított fürdő és a Radó sziget látképét.");
      setstitle22("Zsinagóga");
      setstext22("Az egykori győri zsinagóga a 19. században épült, historikus és szecessziós stílusban. Ma múzeumépületként szolgál, illetve kulturális rendezvényeknek és a Zeneművészeti Főiskolán ad otthont.");
      setstitle23("Széchenyi István Egyetem");
      setstext23("Az egyetem mindig is fontos szerepet töltött be a város életében, hiszen rendkívül sok hallgatója a világ minden pontjáról vonzotta a diákokat. A várossal együttműködve segédkeztek az új közlekedési infrastruktúra megállításában, a város arculatának alakításában, hogy minden Győrbe érkező és itt élő egy rendezett, modern és élhető városnak tapasztalja a folyók városát.");
      setstext23_2("Az egykori egyetemi sportcsarnok átépítése után megkezdődött az új sportközpont felépítése, melynél elsődleges szempont volt a zöldítés, mely akadályt sikeresen vettek a tervezésben résztvevő hallgatók.");
      setstext23_3("Az új sportközpont nem csak a hallgatóknak nyúlt kikapcsolódási, sportolási lehetőséget, hanem a látogatási időben mindenki előtt nyitva áll.");
      setstitle24("Győr múlt százada kiállítás");
      setstext24("Ezt a kiállítást a városvezetés Győr várossá válásának 850 éves évfordulójára szervezte, melyben lehetőséget kapunk visszatekinteni a város 100 évvel ezelőtti valójára, az azóta történt változásokra. Az interaktív kiállítás kitekintést ad a támogatóknak köszönhetően a világ és a technológia változására is, mely jól mutatja, hogy ebben az évszázadban talán nem túlzás azt mondani, hogy végbe ment a 3. Ipari forradalom. Ennek a vívmányait, előnyeit tekinthetik meg az Audi arénába látogatók.");
    }
    else if(n===3) {
      setSz1('Deshalb lohnt es sich, Győr im Jahr 2121 zu besuchen!');
      setSz2('Schauen Sie sie sich in Zukunft unbedingt an Győr!');
      setTt1('Artikel PR');
      setTt2('Sehenswürdigkeiten');
      setFgyt1('Ungarischer Ware');
      setFgyt2('Unverpackte Geschäfte');
      setFgyt3('Grüne Innenstadt');
      setFgyt4('Transport');
      setFgys1('Die Stadt Győr hat einen separaten Vertrag mit multinationalen Geschäften, die innerhalb der Stadtgrenzen tätig sind, in denen festgelegt ist, dass sie sich bemühen sollen, ungarische Waren wie Gemüse, Obst, insbesondere ungarische Orangen, Kleidung und andere Produkte zu vertreiben. So werden die Regale der Läden nicht das im Grünen gepflückte Gemüse und Obst sein, das im Lastwagen gepflückt wird, und die Massenprodukte, die in anderen Teilen der Welt hergestellt werden, sondern die Vorbereitungen der ungarischen Arbeiter, die die Industrie des Landes stärken werden .');
      setFgys2('In der Stadt gibt es Schüttgut nur in Geschäften, in denen wir den gewünschten Artikel in unsere eigenen Behälter abfüllen können und den Preis auf die Menge hochgerechnet bekommen, also zahlen Sie nur das Produkt, nicht die Verpackung, also den Stückpreis kann billiger sein. Zudem belasten Stadtbewohner ihre Umwelt nicht mit zusätzlichem Verpackungsmaterial.');
      setFgys3('Die Entwicklungen haben es in der jüngeren Vergangenheit ermöglicht, dass die Innenstadt immer grüner wird, mit einem gut ausgebauten, einheitlichen Radwegenetz neben den Bäumen und Parkflächen.');
      setFgys4('Dank technischer Innovationen konnten wir den Stadtverkehr 2x2-spurig unterirdisch fahren, mit separatem Rettungsstreifen für den Fall, dass es unter der Stadt zu Problemen kam. In der Stadt können nur die Dienste des Volánbusz und die Fahrzeuge öffentlicher Einrichtungen fahren, und mit den alternativen Verkehrsmitteln wie Fahrrädern, Rollern, Segways kann jeder das Radwegenetz der Stadt nutzen. Dies wird durch das am Stadtrand errichtete Netz von Tausenden von Parkhäusern gefördert, für die ein City Pass erworben werden kann.');
      setPrtitle("Deshalb lohnt es sich, Győr in 2121 zu besuchen");
      setPrtext("Weil es schön, modern und sauber ist.");
      setFoottext("Czuczor Gergely Benediktinergymnasium und -kolleg");
      setstitle1("Rába Quelle Gyógy-, Termál és élményfürdő");
      setstext1("Győr városában található a közkedvelt Rába Quelle Gyógy-, Termál-és Élményfürdő, mely a Mosoni-Duna és a Rába találkozásánál húzódó félszigeten épült fel, ahonnan páratlan kilátás nyílik a történelmi belvárosra.");
      setstitle2("Gyógyvíz");
      setstext2("A fürdőben található víz 2000 méter mélyről tör fel, hőfoka pedig 67°C. A komplexum kiváló minőségű gyógyvízzel rendelkezik, melynek köszönhetően több betegség kezelésére is alkalmas.");
      setstext2_2("2023-ban befejeződött felújítása óta folyamatosan várja a vendégeket.");
      setstitle3("Xantus János állatkert");
      setstext3("Az első állatkert jellegű intézmény Győrben, 1962-ben a Püspökerdőben, az Erdészet fatelepe mellett létesült. A vadaspark a Mosoni-Duna árterén jött létre abból a célból, hogy a hazai nagyvad-fajokat és ragadozókat bemutassa.");
      setstext3_2("Az állatkert átfogó felújítására 2080-ban került sor, mikor is a városban növekvő zöld területeknek köszönhetően az állatok életterét is növelni tudtuk, új fajokat tudtunk befogadni.");
      setstext3_3("A látogatók árnyas fák alatt, gondozott, szép környezetben szemlélhetik az állatkert mindennapjait, ami tartalmas programot kínál gyermeknek és felnőttnek egyaránt.");
      setstitle4("Városháza");
      setstext4("A győri városháza neobarokk stílusú 1900-ban épült, U alakú, kétemeletes, középütt óratoronnyal, s a főhomlokzaton kiugró két kisebb toronnyal rendelkező műemlék épület.");
      setstext4_2("Az alagsorban helyezkednek el a konyha, az étterem, házi nyomda és egyéb gazdasági, ellátó egységek. A földszinten különféle irodák, a központi iktató, valamint főporta van, ahol a díszes aula fogadja az ide belépőt. Az aulában láthatók V. István király valamint Bisinger József szobrai.");
      setstext4_3("Az első emelet a legdíszesebb, a lépcsőházi díszítésekkel és az irodai kialakításokkal, a polgármesteri irodával valamint díszteremmel.");
      setstext4_4("A második emeleten szintén irodák vannak. Ez az emelet kevésbé díszes, de stílusában, hangulatában az alatta levő szintekkel egységet alkot. A következő szint már a torony, mely a város számos pontjáról látható, és ahonnan csodálatos panoráma nyílik a városra.");
      setstitle5("Szent László Látogatóközpont");
      setstext5("A Szent László Látogatóközpont foglalja magába Püspökvár-Toronykilátó és a Boldog Apor Vilmos Emlékkiállítást, a LEGENDA AUREA - Ereklyék vonzásában c. állandó kiállítást és az Egyházmegyei Könyvtárat és Kiállítótermet is.");
      setstitle6("Püspökvár-Toronykilátó");
      setstext6("Az államalapítás korában épült vár ma is a győri püspökség székhelye. A főpapi rezidencia mai arculata gróf Zichy Ferenc püspök (1743-1783) nevéhez kötődik. A csonka tornyban a püspökvár építésének történetét, a győri püspökök portréit és címereit láthatjuk. A legfelső szinten Győr városképe tárul elénk a 19. század végén és az 1960-as években készült felvételeken. A kilátóba feljutva megcsodálhatjuk a város egyedülálló panorámáját.");
      setstitle7("Nagyboldogasszony-székesegyház");
      setstext7("A győri Nagyboldogasszony-székesegyház a Győri egyházmegye főtemploma. A város legősibb részén, a Rába és a Mosoni-Duna összefolyásánál fekvő Káptalandombon áll, a Püspökvárral szemben. A Püspökvár mellett a város legrégibb és legjelentősebb műemléke. A katedrálisnak 1997-ben II. János Pál pápa kisbazilika rangot adományozott.");
      setstitle8("Könnyező Szűzanya");
      setstext8("A Győri Székesegyház kegyképén látható Szűzanya 1697. március 17-én reggel véres könnyeket hullatott. Az évfordulóhoz kapcsolódva minden évben sokan elzarándokolnak a Könnyező Szűzanyához.");
      setstext8_2("A kegykép az Altató Mária vagy Örvendetes Mária képtípusba tartozik. Valószínűleg írországi festőtől származik. A vászonra festett, koronákkal ékes olajkép ősképe Abraham van Merlen 1640 körüli rézmetszete. A gyermek Jézus fölé hajoló, imádkozó Szűzanyát ábrázoló kép az előkelő ír családból származó Walter Lynch későbbi clonferti püspöké volt, ő hozta Magyarországra, miután a Cromwell-féle üldözés idején menekülni kényszerült hazájából. Bécsben találkozott Püsky János akkori győri püspökkel, aki meghívta őt Győrbe, és kinevezte kanonokká és püspöki helynökké. A kép a püspök halála (1663) után a székesegyház oldalfalára került.");
      setstitle9("Radó sziget");
      setstext9("A Radó-sziget Győr történelmi magjában található, a Rába két ága fogja közre. A sziget közvetlenül a Rába torkolata előtt, Belváros, Újváros és Sziget városrészek közt helyezkedik el. A szigeten található Győr legszebb parkja, szórakozó, pihenő és történelmi emlékhelyek is találhatók itt. Korábban a szigetet Sétatéri-szigetnek nevezték, mai nevét Szentmártoni Radó Kálmánról, a Rábaszabályozó Társulat egykori igazgatójáról kapta.");
      setstitle10("Széchenyi-tér");
      setstext10("A Széchenyi tér Győr barokk főtere. Jórészt 17–18. századi épületek keretezik, különösen az északi oldal barokk palotái és a déli oldalon a bencések épületegyüttese figyelemreméltó. Évszázadokon keresztül ez a tér volt a nyilvános élet központja, napjainkban is számos rendezvényt tartanak itt.");
      setstitle11("Czuczor Gergely Bencés Gimnázium és Kollégium");
      setstext11("A mai eklektikus épület 1888-ban épült az egykori jezsuita gimnázium helyére, amit 1627-ben alapítottak. A gimnázium 1802 óta a bencéseké. A gimnázium tanítványa volt Kisfaludy Károly és Sándor, Batthyány Lajos, Xántus János és Kautz Gyula.");
      setstitle12("Loyolai Szent Ignác Bencés templom");
      setstext12("A gimnázium és a rendház közt áll a kéttornyos homlokzatú templom, az olaszos kora barokk egyik legszebb magyarországi alkotása. A templom egyhajós, két oldalán kápolnafülkékkel. A kápolnák 18. századi stukkós dísze és a főhajót borító freskó országos jelentőségűek. A barokk berendezésből kiemelkedik a Ludwig Gode által tervezett szószék és a főoltár Josef Rosler szobraival. Nagyon szépek a templom faragott padjai.");
      setstitle13("Apátúr sörház");
      setstext13("A bencés közösség tulajdonában lévő Lloyd épület pincéjében a 21. Század eleje óta készít söröket egy egykori bencés diák, eleinte pils fajtával kezdett, de mára már bárki megtalálja a maga kedvenc sörfajtáját. A manufaktúra egyre sikeresebb, aki hozzá szeretne jutni egy üveg bencés sörhöz, annak nagyon résen kell lennie, hiszen nagyon hamar elfogynak a polcokról.");
      setstext13_2("A sörházban a szerzetesi hagyományból ismert ételek és italok kaphatók 2021 decembere óta.");
      setstitle14("Kimba elefántpark");
      setstext14("Töltéstaván üzemelteti az állatparkot a méltán híres Casselly család, akik több generáció óta foglalkoznak cirkuszi állatokkal, az ő szerepeltetésükkel. Mostmár felhagytak a turnékkal és igyekeznek minél több állatot megmenteni és befogadni.");
      setstext14_2("Örömmel várják a látogatókat, kicsiket, nagyokat, hiszen mindenki megtalálja a neki való programot és lehetőséget.");
      setstitle15("Bécsi kapu tér");
      setstext15("A Bécsi kapu tér Győr legrégibb tereinek egyike. A szabálytalan alakú tér a 19. század közepe óta nyugatról, a Rába felől nyitott. Egykor itt állt a reneszánsz stílusú Bécsi-kapu, melyen át a nyugat felől érkező utasok érkeztek a Belvárosba.");
      setstitle16("Kármelhegyi Boldogasszony templom");
      setstext16("A templom tervező építésze a kármelita Athanasius testvér volt. Ő vezette az építkezést és a berendezés tervei is tőle származnak. Oltárait a szobrokkal együtt Domonkos kármelita testvér készítette. A főoltárképe Szent István királyt és Szent Imre herceget ábrázolja, amint hódolnak a Szent Szűz előtt. A templom alapkövét 1721-ben helyezték el és 1725-ben szentelték fel. Templomunk kriptájában temették elideiglenesen Boldog Apor Vilmos vértanú püspököt 1945-ben, s földi maradványai itt nyugodtak 1986-ig.");
      setstitle17("Kisfaludy-szobor");
      setstext17("A Győr környékéről származó Kisfaludy Károly szobrát 1892-ben a Radó-szigeten állították fel, az akkor még álló kőszínház közelében. Valójában 1888-ra tervezték az avatást, Kisfaludy halálának 50. évfordulójára, azonban nem gyűlt rá össze a szükséges pénz. Az avatáson a városatyák mellett Jókai Mór is beszédet mondott.");
      setstext17_2("A gyakori árvízi károk miatt – 1920-ban napokig víz alatt állt – 1921-ben került át mai helyére.");
      setstext17_3("A szoborhoz több helyi legenda is kötődik. Ha nem vigyázunk és tilosban parkolunk, könnyen felkerülhetünk a kezében tartott jegyzetekre, mint ahogy azon diákok is, akik elkésnek az iskolából. Ez azért mosolyogtató, mert a bencés gimnázium diákjaként Kisfaludy a tanárok réme volt.");
      setstitle18("Mobilis");
      setstext18("Közvetlen az egyetem szomszédságában található kiállítás betekintést ad a modern technológia világába, különböző modellekkel, szimulációkkal mutatják be a vendégeknek a technológia működését, mint az elektromos repülők, vagy a víz hajtású járművek. Régebbi technológiák is olykor megtekinthetők, mint például a belső égésű motorok, vagy a lítium ion akkumulátor. A kiállításokon kívül aktív szerepet vállal a mobilis csapata az oktatásban. Az ifjakat programozáara, fizikai és kémiai ismeretekre tanítják, az idősebb korosztály számára pedig felzárkóztató foglalkozásokat tartanak az infokommunikációs eszközök használatából.");
      setstitle19("Dunakapu tér");
      setstext19("A Dunakapu tér Győr ikonikus terei közül az egyik. A Mosoni-Duna határolja északi irányból, nevét is a régi vár Duna-kapujáról kapta, amit sok helyen Vízi-kapunak is emlegetnek a források. A legenda szerint erre a kapura állították a törökök a vaskakast 1594-ben, mikor bevették a várost, kijelentvén, hogy addig maradnak, amíg meg nem szólal – ami négy évvel később be is következett.");
      setstext19_2("Napjainkban fontos szerepet játszik a koncertek, fesztiválok, vásárok lebonyolításában, akárcsak az elmúlt évszázadban.");
      setstitle20("Baross út");
      setstext20("A Baross út Győr egyik legforgalmasabb útvonala, a Káptalandomb peremétől átszeli a Belvárost, majd a vasút felett átívelő Baross hídon keresztülhaladva Nádorvárosban folytatódik, ahol egészen a Szigethy Attila útig tart. Az út belvárosi szakasza a város legjelentősebb sétálóutcája számos üzlettel, étteremmel. A sétálóutca arculata az elmúlt száz évben jelentősen változott, miután a barokk épületeket felújították, a szocialista időkben felhúzott blokkokat átépítették, modernizálták, ahová csak lehetett fákat telepítettek.");
      setstitle21("Várfal sétány");
      setstext21("A három méter széles sétány a Kossuth hidat és a Rábatext Horgászegyesület telkét köti össze. Az utóbbi években az időjárás és az árvíz okozta károk miatt többször is felújított sétány minden évszakban rengeteg kikapcsolódni, gyönyörködni vágyó ember lepi el. Itt nyugodt környezetben csodálhatják a Duna, a 2023-ban átépített, majd 2086-ban teljesen felújított fürdő és a Radó sziget látképét.");
      setstitle22("Zsinagóga");
      setstext22("Az egykori győri zsinagóga a 19. században épült, historikus és szecessziós stílusban. Ma múzeumépületként szolgál, illetve kulturális rendezvényeknek és a Zeneművészeti Főiskolán ad otthont.");
      setstitle23("Széchenyi István Egyetem");
      setstext23("Az egyetem mindig is fontos szerepet töltött be a város életében, hiszen rendkívül sok hallgatója a világ minden pontjáról vonzotta a diákokat. A várossal együttműködve segédkeztek az új közlekedési infrastruktúra megállításában, a város arculatának alakításában, hogy minden Győrbe érkező és itt élő egy rendezett, modern és élhető városnak tapasztalja a folyók városát.");
      setstext23_2("Az egykori egyetemi sportcsarnok átépítése után megkezdődött az új sportközpont felépítése, melynél elsődleges szempont volt a zöldítés, mely akadályt sikeresen vettek a tervezésben résztvevő hallgatók.");
      setstext23_3("Az új sportközpont nem csak a hallgatóknak nyúlt kikapcsolódási, sportolási lehetőséget, hanem a látogatási időben mindenki előtt nyitva áll.");
      setstitle24("Győr múlt százada kiállítás");
      setstext24("Ezt a kiállítást a városvezetés Győr várossá válásának 850 éves évfordulójára szervezte, melyben lehetőséget kapunk visszatekinteni a város 100 évvel ezelőtti valójára, az azóta történt változásokra. Az interaktív kiállítás kitekintést ad a támogatóknak köszönhetően a világ és a technológia változására is, mely jól mutatja, hogy ebben az évszázadban talán nem túlzás azt mondani, hogy végbe ment a 3. Ipari forradalom. Ennek a vívmányait, előnyeit tekinthetik meg az Audi arénába látogatók.");
    }
    else if(n===4) {
      setSz1('C\'est pourquoi il vaut la peine de visiter Győr en 2121 !');
      setSz2('N\'oubliez pas de les consulter dans le futur Győr !');
      setTt1('Article PR');
      setTt2('Attractions');
      setFgyt1('Produit hongrois');
      setFgyt2('Sehenswürdigkeiten');
      setFgyt3('Centre-ville vert');
      setFgyt4('Transport');
      setFgys1('La ville de Győr a un contrat séparé avec des magasins multinationaux opérant dans les limites de la ville, dans lequel elle stipule qu\'ils doivent s\'efforcer de distribuer des produits hongrois, tels que des légumes, des fruits, en particulier des oranges, des vêtements et d\'autres produits hongrois. Ainsi, les rayons des magasins ne seront pas les légumes et fruits cueillis en vert, cueillis dans le camion, et les produits de masse fabriqués dans d\'autres parties du monde, mais les préparations faites par les ouvriers hongrois, qui renforceront l\'industrie du pays .');
      setFgys2('En ville, les marchandises en vrac ne sont disponibles que dans les magasins où nous pouvons remplir l\'article souhaité dans nos propres conteneurs et obtenir le prix projeté sur la quantité, vous n\'avez donc à payer que le produit, pas l\'emballage, donc le prix unitaire peut être moins cher. De plus, les habitants de la ville ne surchargent pas leur environnement avec des matériaux d\'emballage supplémentaires.');
      setFgys3('Dans la période récente, les aménagements ont permis au centre-ville de devenir de plus en plus vert, avec un réseau de pistes cyclables bien développé et unifié en plus des arbres et des espaces verts.');
      setFgys4('Grâce aux innovations techniques, nous avons pu conduire le trafic urbain sous terre sur une voie 2x2, avec une voie de secours séparée en cas de problème sous la ville. Dans la ville, seuls les services du Volánbusz et les véhicules des organismes publics peuvent circuler, et avec les moyens de transport alternatifs, tels que les vélos, les scooters, les Segway, tout le monde peut utiliser le réseau de pistes cyclables de la ville. Ceci est encouragé par le réseau de milliers de parkings construits à la périphérie de la ville, pour lesquels un city pass peut être acheté.');
      setPrtitle("C'est pourquoi il vaut la peine de visiter Győr en 2121");
      setPrtext("Parce que c'est beau, moderne et propre.");
      setFoottext("Czuczor Gergely Lycée et Collège bénédictin");
      setstitle1("Rába Quelle Gyógy-, Termál és élményfürdő");
      setstext1("Győr városában található a közkedvelt Rába Quelle Gyógy-, Termál-és Élményfürdő, mely a Mosoni-Duna és a Rába találkozásánál húzódó félszigeten épült fel, ahonnan páratlan kilátás nyílik a történelmi belvárosra.");
      setstitle2("Gyógyvíz");
      setstext2("A fürdőben található víz 2000 méter mélyről tör fel, hőfoka pedig 67°C. A komplexum kiváló minőségű gyógyvízzel rendelkezik, melynek köszönhetően több betegség kezelésére is alkalmas.");
      setstext2_2("2023-ban befejeződött felújítása óta folyamatosan várja a vendégeket.");
      setstitle3("Xantus János állatkert");
      setstext3("Az első állatkert jellegű intézmény Győrben, 1962-ben a Püspökerdőben, az Erdészet fatelepe mellett létesült. A vadaspark a Mosoni-Duna árterén jött létre abból a célból, hogy a hazai nagyvad-fajokat és ragadozókat bemutassa.");
      setstext3_2("Az állatkert átfogó felújítására 2080-ban került sor, mikor is a városban növekvő zöld területeknek köszönhetően az állatok életterét is növelni tudtuk, új fajokat tudtunk befogadni.");
      setstext3_3("A látogatók árnyas fák alatt, gondozott, szép környezetben szemlélhetik az állatkert mindennapjait, ami tartalmas programot kínál gyermeknek és felnőttnek egyaránt.");
      setstitle4("Városháza");
      setstext4("A győri városháza neobarokk stílusú 1900-ban épült, U alakú, kétemeletes, középütt óratoronnyal, s a főhomlokzaton kiugró két kisebb toronnyal rendelkező műemlék épület.");
      setstext4_2("Az alagsorban helyezkednek el a konyha, az étterem, házi nyomda és egyéb gazdasági, ellátó egységek. A földszinten különféle irodák, a központi iktató, valamint főporta van, ahol a díszes aula fogadja az ide belépőt. Az aulában láthatók V. István király valamint Bisinger József szobrai.");
      setstext4_3("Az első emelet a legdíszesebb, a lépcsőházi díszítésekkel és az irodai kialakításokkal, a polgármesteri irodával valamint díszteremmel.");
      setstext4_4("A második emeleten szintén irodák vannak. Ez az emelet kevésbé díszes, de stílusában, hangulatában az alatta levő szintekkel egységet alkot. A következő szint már a torony, mely a város számos pontjáról látható, és ahonnan csodálatos panoráma nyílik a városra.");
      setstitle5("Szent László Látogatóközpont");
      setstext5("A Szent László Látogatóközpont foglalja magába Püspökvár-Toronykilátó és a Boldog Apor Vilmos Emlékkiállítást, a LEGENDA AUREA - Ereklyék vonzásában c. állandó kiállítást és az Egyházmegyei Könyvtárat és Kiállítótermet is.");
      setstitle6("Püspökvár-Toronykilátó");
      setstext6("Az államalapítás korában épült vár ma is a győri püspökség székhelye. A főpapi rezidencia mai arculata gróf Zichy Ferenc püspök (1743-1783) nevéhez kötődik. A csonka tornyban a püspökvár építésének történetét, a győri püspökök portréit és címereit láthatjuk. A legfelső szinten Győr városképe tárul elénk a 19. század végén és az 1960-as években készült felvételeken. A kilátóba feljutva megcsodálhatjuk a város egyedülálló panorámáját.");
      setstitle7("Nagyboldogasszony-székesegyház");
      setstext7("A győri Nagyboldogasszony-székesegyház a Győri egyházmegye főtemploma. A város legősibb részén, a Rába és a Mosoni-Duna összefolyásánál fekvő Káptalandombon áll, a Püspökvárral szemben. A Püspökvár mellett a város legrégibb és legjelentősebb műemléke. A katedrálisnak 1997-ben II. János Pál pápa kisbazilika rangot adományozott.");
      setstitle8("Könnyező Szűzanya");
      setstext8("A Győri Székesegyház kegyképén látható Szűzanya 1697. március 17-én reggel véres könnyeket hullatott. Az évfordulóhoz kapcsolódva minden évben sokan elzarándokolnak a Könnyező Szűzanyához.");
      setstext8_2("A kegykép az Altató Mária vagy Örvendetes Mária képtípusba tartozik. Valószínűleg írországi festőtől származik. A vászonra festett, koronákkal ékes olajkép ősképe Abraham van Merlen 1640 körüli rézmetszete. A gyermek Jézus fölé hajoló, imádkozó Szűzanyát ábrázoló kép az előkelő ír családból származó Walter Lynch későbbi clonferti püspöké volt, ő hozta Magyarországra, miután a Cromwell-féle üldözés idején menekülni kényszerült hazájából. Bécsben találkozott Püsky János akkori győri püspökkel, aki meghívta őt Győrbe, és kinevezte kanonokká és püspöki helynökké. A kép a püspök halála (1663) után a székesegyház oldalfalára került.");
      setstitle9("Radó sziget");
      setstext9("A Radó-sziget Győr történelmi magjában található, a Rába két ága fogja közre. A sziget közvetlenül a Rába torkolata előtt, Belváros, Újváros és Sziget városrészek közt helyezkedik el. A szigeten található Győr legszebb parkja, szórakozó, pihenő és történelmi emlékhelyek is találhatók itt. Korábban a szigetet Sétatéri-szigetnek nevezték, mai nevét Szentmártoni Radó Kálmánról, a Rábaszabályozó Társulat egykori igazgatójáról kapta.");
      setstitle10("Széchenyi-tér");
      setstext10("A Széchenyi tér Győr barokk főtere. Jórészt 17–18. századi épületek keretezik, különösen az északi oldal barokk palotái és a déli oldalon a bencések épületegyüttese figyelemreméltó. Évszázadokon keresztül ez a tér volt a nyilvános élet központja, napjainkban is számos rendezvényt tartanak itt.");
      setstitle11("Czuczor Gergely Bencés Gimnázium és Kollégium");
      setstext11("A mai eklektikus épület 1888-ban épült az egykori jezsuita gimnázium helyére, amit 1627-ben alapítottak. A gimnázium 1802 óta a bencéseké. A gimnázium tanítványa volt Kisfaludy Károly és Sándor, Batthyány Lajos, Xántus János és Kautz Gyula.");
      setstitle12("Loyolai Szent Ignác Bencés templom");
      setstext12("A gimnázium és a rendház közt áll a kéttornyos homlokzatú templom, az olaszos kora barokk egyik legszebb magyarországi alkotása. A templom egyhajós, két oldalán kápolnafülkékkel. A kápolnák 18. századi stukkós dísze és a főhajót borító freskó országos jelentőségűek. A barokk berendezésből kiemelkedik a Ludwig Gode által tervezett szószék és a főoltár Josef Rosler szobraival. Nagyon szépek a templom faragott padjai.");
      setstitle13("Apátúr sörház");
      setstext13("A bencés közösség tulajdonában lévő Lloyd épület pincéjében a 21. Század eleje óta készít söröket egy egykori bencés diák, eleinte pils fajtával kezdett, de mára már bárki megtalálja a maga kedvenc sörfajtáját. A manufaktúra egyre sikeresebb, aki hozzá szeretne jutni egy üveg bencés sörhöz, annak nagyon résen kell lennie, hiszen nagyon hamar elfogynak a polcokról.");
      setstext13_2("A sörházban a szerzetesi hagyományból ismert ételek és italok kaphatók 2021 decembere óta.");
      setstitle14("Kimba elefántpark");
      setstext14("Töltéstaván üzemelteti az állatparkot a méltán híres Casselly család, akik több generáció óta foglalkoznak cirkuszi állatokkal, az ő szerepeltetésükkel. Mostmár felhagytak a turnékkal és igyekeznek minél több állatot megmenteni és befogadni.");
      setstext14_2("Örömmel várják a látogatókat, kicsiket, nagyokat, hiszen mindenki megtalálja a neki való programot és lehetőséget.");
      setstitle15("Bécsi kapu tér");
      setstext15("A Bécsi kapu tér Győr legrégibb tereinek egyike. A szabálytalan alakú tér a 19. század közepe óta nyugatról, a Rába felől nyitott. Egykor itt állt a reneszánsz stílusú Bécsi-kapu, melyen át a nyugat felől érkező utasok érkeztek a Belvárosba.");
      setstitle16("Kármelhegyi Boldogasszony templom");
      setstext16("A templom tervező építésze a kármelita Athanasius testvér volt. Ő vezette az építkezést és a berendezés tervei is tőle származnak. Oltárait a szobrokkal együtt Domonkos kármelita testvér készítette. A főoltárképe Szent István királyt és Szent Imre herceget ábrázolja, amint hódolnak a Szent Szűz előtt. A templom alapkövét 1721-ben helyezték el és 1725-ben szentelték fel. Templomunk kriptájában temették elideiglenesen Boldog Apor Vilmos vértanú püspököt 1945-ben, s földi maradványai itt nyugodtak 1986-ig.");
      setstitle17("Kisfaludy-szobor");
      setstext17("A Győr környékéről származó Kisfaludy Károly szobrát 1892-ben a Radó-szigeten állították fel, az akkor még álló kőszínház közelében. Valójában 1888-ra tervezték az avatást, Kisfaludy halálának 50. évfordulójára, azonban nem gyűlt rá össze a szükséges pénz. Az avatáson a városatyák mellett Jókai Mór is beszédet mondott.");
      setstext17_2("A gyakori árvízi károk miatt – 1920-ban napokig víz alatt állt – 1921-ben került át mai helyére.");
      setstext17_3("A szoborhoz több helyi legenda is kötődik. Ha nem vigyázunk és tilosban parkolunk, könnyen felkerülhetünk a kezében tartott jegyzetekre, mint ahogy azon diákok is, akik elkésnek az iskolából. Ez azért mosolyogtató, mert a bencés gimnázium diákjaként Kisfaludy a tanárok réme volt.");
      setstitle18("Mobilis");
      setstext18("Közvetlen az egyetem szomszédságában található kiállítás betekintést ad a modern technológia világába, különböző modellekkel, szimulációkkal mutatják be a vendégeknek a technológia működését, mint az elektromos repülők, vagy a víz hajtású járművek. Régebbi technológiák is olykor megtekinthetők, mint például a belső égésű motorok, vagy a lítium ion akkumulátor. A kiállításokon kívül aktív szerepet vállal a mobilis csapata az oktatásban. Az ifjakat programozáara, fizikai és kémiai ismeretekre tanítják, az idősebb korosztály számára pedig felzárkóztató foglalkozásokat tartanak az infokommunikációs eszközök használatából.");
      setstitle19("Dunakapu tér");
      setstext19("A Dunakapu tér Győr ikonikus terei közül az egyik. A Mosoni-Duna határolja északi irányból, nevét is a régi vár Duna-kapujáról kapta, amit sok helyen Vízi-kapunak is emlegetnek a források. A legenda szerint erre a kapura állították a törökök a vaskakast 1594-ben, mikor bevették a várost, kijelentvén, hogy addig maradnak, amíg meg nem szólal – ami négy évvel később be is következett.");
      setstext19_2("Napjainkban fontos szerepet játszik a koncertek, fesztiválok, vásárok lebonyolításában, akárcsak az elmúlt évszázadban.");
      setstitle20("Baross út");
      setstext20("A Baross út Győr egyik legforgalmasabb útvonala, a Káptalandomb peremétől átszeli a Belvárost, majd a vasút felett átívelő Baross hídon keresztülhaladva Nádorvárosban folytatódik, ahol egészen a Szigethy Attila útig tart. Az út belvárosi szakasza a város legjelentősebb sétálóutcája számos üzlettel, étteremmel. A sétálóutca arculata az elmúlt száz évben jelentősen változott, miután a barokk épületeket felújították, a szocialista időkben felhúzott blokkokat átépítették, modernizálták, ahová csak lehetett fákat telepítettek.");
      setstitle21("Várfal sétány");
      setstext21("A három méter széles sétány a Kossuth hidat és a Rábatext Horgászegyesület telkét köti össze. Az utóbbi években az időjárás és az árvíz okozta károk miatt többször is felújított sétány minden évszakban rengeteg kikapcsolódni, gyönyörködni vágyó ember lepi el. Itt nyugodt környezetben csodálhatják a Duna, a 2023-ban átépített, majd 2086-ban teljesen felújított fürdő és a Radó sziget látképét.");
      setstitle22("Zsinagóga");
      setstext22("Az egykori győri zsinagóga a 19. században épült, historikus és szecessziós stílusban. Ma múzeumépületként szolgál, illetve kulturális rendezvényeknek és a Zeneművészeti Főiskolán ad otthont.");
      setstitle23("Széchenyi István Egyetem");
      setstext23("Az egyetem mindig is fontos szerepet töltött be a város életében, hiszen rendkívül sok hallgatója a világ minden pontjáról vonzotta a diákokat. A várossal együttműködve segédkeztek az új közlekedési infrastruktúra megállításában, a város arculatának alakításában, hogy minden Győrbe érkező és itt élő egy rendezett, modern és élhető városnak tapasztalja a folyók városát.");
      setstext23_2("Az egykori egyetemi sportcsarnok átépítése után megkezdődött az új sportközpont felépítése, melynél elsődleges szempont volt a zöldítés, mely akadályt sikeresen vettek a tervezésben résztvevő hallgatók.");
      setstext23_3("Az új sportközpont nem csak a hallgatóknak nyúlt kikapcsolódási, sportolási lehetőséget, hanem a látogatási időben mindenki előtt nyitva áll.");
      setstitle24("Győr múlt százada kiállítás");
      setstext24("Ezt a kiállítást a városvezetés Győr várossá válásának 850 éves évfordulójára szervezte, melyben lehetőséget kapunk visszatekinteni a város 100 évvel ezelőtti valójára, az azóta történt változásokra. Az interaktív kiállítás kitekintést ad a támogatóknak köszönhetően a világ és a technológia változására is, mely jól mutatja, hogy ebben az évszázadban talán nem túlzás azt mondani, hogy végbe ment a 3. Ipari forradalom. Ennek a vívmányait, előnyeit tekinthetik meg az Audi arénába látogatók.");
    }
    else if(n===5) {
      setSz1('Quam ob rem valet visitare Győr anno 2121!');
      setSz2('Vide eos in futuro Győr coercere!');
      setTt1('Articulus PR');
      setTt2('Attractiones');
      setFgyt1('Hungarica commodum');
      setFgyt2('Macellum stores');
      setFgyt3('Green media urbe');
      setFgyt4('Transporto');
      setFgys1('Urbs Győr separatum pactum habet cum multinationali thesauris intra fines urbis operantibus, in quo cavet ut bona Hungarica distribuere studeant, sicut vegetabilia, fructus, praesertim aurantia hungarica, vestes et alia producta. Ita cotes acervi leguminum et fructus in viridi lecta in plaustro lecta non erunt, et massa producta in aliis mundi partibus producta, sed praeparationes ab operariis Hungaricis factae, quae confirmant. patriae industriam.');
      setFgys2('In urbe, bona mole in promptu tantum sunt, ubi desideratum item in vasculis nostris implere possumus et pretium quantitatis proiectum, sic solum fructus pro mercede, non packaging, pretium per unitatem. vilius esse potest. Praeterea incolae civitatis ambitum suum cum extra sarcinas materiae non gravant.');
      setFgys3('Recentiore tempore, progressiones effecit ut centrum urbis magis magisque viridis fieret, cum retis bene evolutis, coniungendis cycli cycli praeter arbores et areas parcas.');
      setFgys4('Gratias technicis innovationibus, urbem mercaturam sub terra in 2x2 lane depellere potuimus, cum venellam separatam liberandum si quaestio sub urbe erat. In urbe tantum officia Volánbusz et vehicula corporum publicorum iter facere possunt, et cum altero petendorum, ut bicycli, scooters, Segways, quis potest iter retis cycli urbis uti. Hoc confirmatur retis milia garagiorum in extrema parte urbis aedificata, pro quibus civitas transiri potest emi.');
      setPrtitle("Quam ob rem valet visitare Győr in 2121");
      setPrtext("Quia pulchra, moderna et munda est.");
      setFoottext("Czuczor Gergely Scholae Grammaticae Benedictinae et Collegii");
      setstitle1("Rába Quelle Gyógy-, Termál és élményfürdő");
      setstext1("Győr városában található a közkedvelt Rába Quelle Gyógy-, Termál-és Élményfürdő, mely a Mosoni-Duna és a Rába találkozásánál húzódó félszigeten épült fel, ahonnan páratlan kilátás nyílik a történelmi belvárosra.");
      setstitle2("Gyógyvíz");
      setstext2("A fürdőben található víz 2000 méter mélyről tör fel, hőfoka pedig 67°C. A komplexum kiváló minőségű gyógyvízzel rendelkezik, melynek köszönhetően több betegség kezelésére is alkalmas.");
      setstext2_2("2023-ban befejeződött felújítása óta folyamatosan várja a vendégeket.");
      setstitle3("Xantus János állatkert");
      setstext3("Az első állatkert jellegű intézmény Győrben, 1962-ben a Püspökerdőben, az Erdészet fatelepe mellett létesült. A vadaspark a Mosoni-Duna árterén jött létre abból a célból, hogy a hazai nagyvad-fajokat és ragadozókat bemutassa.");
      setstext3_2("Az állatkert átfogó felújítására 2080-ban került sor, mikor is a városban növekvő zöld területeknek köszönhetően az állatok életterét is növelni tudtuk, új fajokat tudtunk befogadni.");
      setstext3_3("A látogatók árnyas fák alatt, gondozott, szép környezetben szemlélhetik az állatkert mindennapjait, ami tartalmas programot kínál gyermeknek és felnőttnek egyaránt.");
      setstitle4("Városháza");
      setstext4("A győri városháza neobarokk stílusú 1900-ban épült, U alakú, kétemeletes, középütt óratoronnyal, s a főhomlokzaton kiugró két kisebb toronnyal rendelkező műemlék épület.");
      setstext4_2("Az alagsorban helyezkednek el a konyha, az étterem, házi nyomda és egyéb gazdasági, ellátó egységek. A földszinten különféle irodák, a központi iktató, valamint főporta van, ahol a díszes aula fogadja az ide belépőt. Az aulában láthatók V. István király valamint Bisinger József szobrai.");
      setstext4_3("Az első emelet a legdíszesebb, a lépcsőházi díszítésekkel és az irodai kialakításokkal, a polgármesteri irodával valamint díszteremmel.");
      setstext4_4("A második emeleten szintén irodák vannak. Ez az emelet kevésbé díszes, de stílusában, hangulatában az alatta levő szintekkel egységet alkot. A következő szint már a torony, mely a város számos pontjáról látható, és ahonnan csodálatos panoráma nyílik a városra.");
      setstitle5("Szent László Látogatóközpont");
      setstext5("A Szent László Látogatóközpont foglalja magába Püspökvár-Toronykilátó és a Boldog Apor Vilmos Emlékkiállítást, a LEGENDA AUREA - Ereklyék vonzásában c. állandó kiállítást és az Egyházmegyei Könyvtárat és Kiállítótermet is.");
      setstitle6("Püspökvár-Toronykilátó");
      setstext6("Az államalapítás korában épült vár ma is a győri püspökség székhelye. A főpapi rezidencia mai arculata gróf Zichy Ferenc püspök (1743-1783) nevéhez kötődik. A csonka tornyban a püspökvár építésének történetét, a győri püspökök portréit és címereit láthatjuk. A legfelső szinten Győr városképe tárul elénk a 19. század végén és az 1960-as években készült felvételeken. A kilátóba feljutva megcsodálhatjuk a város egyedülálló panorámáját.");
      setstitle7("Nagyboldogasszony-székesegyház");
      setstext7("A győri Nagyboldogasszony-székesegyház a Győri egyházmegye főtemploma. A város legősibb részén, a Rába és a Mosoni-Duna összefolyásánál fekvő Káptalandombon áll, a Püspökvárral szemben. A Püspökvár mellett a város legrégibb és legjelentősebb műemléke. A katedrálisnak 1997-ben II. János Pál pápa kisbazilika rangot adományozott.");
      setstitle8("Könnyező Szűzanya");
      setstext8("A Győri Székesegyház kegyképén látható Szűzanya 1697. március 17-én reggel véres könnyeket hullatott. Az évfordulóhoz kapcsolódva minden évben sokan elzarándokolnak a Könnyező Szűzanyához.");
      setstext8_2("A kegykép az Altató Mária vagy Örvendetes Mária képtípusba tartozik. Valószínűleg írországi festőtől származik. A vászonra festett, koronákkal ékes olajkép ősképe Abraham van Merlen 1640 körüli rézmetszete. A gyermek Jézus fölé hajoló, imádkozó Szűzanyát ábrázoló kép az előkelő ír családból származó Walter Lynch későbbi clonferti püspöké volt, ő hozta Magyarországra, miután a Cromwell-féle üldözés idején menekülni kényszerült hazájából. Bécsben találkozott Püsky János akkori győri püspökkel, aki meghívta őt Győrbe, és kinevezte kanonokká és püspöki helynökké. A kép a püspök halála (1663) után a székesegyház oldalfalára került.");
      setstitle9("Radó sziget");
      setstext9("A Radó-sziget Győr történelmi magjában található, a Rába két ága fogja közre. A sziget közvetlenül a Rába torkolata előtt, Belváros, Újváros és Sziget városrészek közt helyezkedik el. A szigeten található Győr legszebb parkja, szórakozó, pihenő és történelmi emlékhelyek is találhatók itt. Korábban a szigetet Sétatéri-szigetnek nevezték, mai nevét Szentmártoni Radó Kálmánról, a Rábaszabályozó Társulat egykori igazgatójáról kapta.");
      setstitle10("Széchenyi-tér");
      setstext10("A Széchenyi tér Győr barokk főtere. Jórészt 17–18. századi épületek keretezik, különösen az északi oldal barokk palotái és a déli oldalon a bencések épületegyüttese figyelemreméltó. Évszázadokon keresztül ez a tér volt a nyilvános élet központja, napjainkban is számos rendezvényt tartanak itt.");
      setstitle11("Czuczor Gergely Bencés Gimnázium és Kollégium");
      setstext11("A mai eklektikus épület 1888-ban épült az egykori jezsuita gimnázium helyére, amit 1627-ben alapítottak. A gimnázium 1802 óta a bencéseké. A gimnázium tanítványa volt Kisfaludy Károly és Sándor, Batthyány Lajos, Xántus János és Kautz Gyula.");
      setstitle12("Loyolai Szent Ignác Bencés templom");
      setstext12("A gimnázium és a rendház közt áll a kéttornyos homlokzatú templom, az olaszos kora barokk egyik legszebb magyarországi alkotása. A templom egyhajós, két oldalán kápolnafülkékkel. A kápolnák 18. századi stukkós dísze és a főhajót borító freskó országos jelentőségűek. A barokk berendezésből kiemelkedik a Ludwig Gode által tervezett szószék és a főoltár Josef Rosler szobraival. Nagyon szépek a templom faragott padjai.");
      setstitle13("Apátúr sörház");
      setstext13("A bencés közösség tulajdonában lévő Lloyd épület pincéjében a 21. Század eleje óta készít söröket egy egykori bencés diák, eleinte pils fajtával kezdett, de mára már bárki megtalálja a maga kedvenc sörfajtáját. A manufaktúra egyre sikeresebb, aki hozzá szeretne jutni egy üveg bencés sörhöz, annak nagyon résen kell lennie, hiszen nagyon hamar elfogynak a polcokról.");
      setstext13_2("A sörházban a szerzetesi hagyományból ismert ételek és italok kaphatók 2021 decembere óta.");
      setstitle14("Kimba elefántpark");
      setstext14("Töltéstaván üzemelteti az állatparkot a méltán híres Casselly család, akik több generáció óta foglalkoznak cirkuszi állatokkal, az ő szerepeltetésükkel. Mostmár felhagytak a turnékkal és igyekeznek minél több állatot megmenteni és befogadni.");
      setstext14_2("Örömmel várják a látogatókat, kicsiket, nagyokat, hiszen mindenki megtalálja a neki való programot és lehetőséget.");
      setstitle15("Bécsi kapu tér");
      setstext15("A Bécsi kapu tér Győr legrégibb tereinek egyike. A szabálytalan alakú tér a 19. század közepe óta nyugatról, a Rába felől nyitott. Egykor itt állt a reneszánsz stílusú Bécsi-kapu, melyen át a nyugat felől érkező utasok érkeztek a Belvárosba.");
      setstitle16("Kármelhegyi Boldogasszony templom");
      setstext16("A templom tervező építésze a kármelita Athanasius testvér volt. Ő vezette az építkezést és a berendezés tervei is tőle származnak. Oltárait a szobrokkal együtt Domonkos kármelita testvér készítette. A főoltárképe Szent István királyt és Szent Imre herceget ábrázolja, amint hódolnak a Szent Szűz előtt. A templom alapkövét 1721-ben helyezték el és 1725-ben szentelték fel. Templomunk kriptájában temették elideiglenesen Boldog Apor Vilmos vértanú püspököt 1945-ben, s földi maradványai itt nyugodtak 1986-ig.");
      setstitle17("Kisfaludy-szobor");
      setstext17("A Győr környékéről származó Kisfaludy Károly szobrát 1892-ben a Radó-szigeten állították fel, az akkor még álló kőszínház közelében. Valójában 1888-ra tervezték az avatást, Kisfaludy halálának 50. évfordulójára, azonban nem gyűlt rá össze a szükséges pénz. Az avatáson a városatyák mellett Jókai Mór is beszédet mondott.");
      setstext17_2("A gyakori árvízi károk miatt – 1920-ban napokig víz alatt állt – 1921-ben került át mai helyére.");
      setstext17_3("A szoborhoz több helyi legenda is kötődik. Ha nem vigyázunk és tilosban parkolunk, könnyen felkerülhetünk a kezében tartott jegyzetekre, mint ahogy azon diákok is, akik elkésnek az iskolából. Ez azért mosolyogtató, mert a bencés gimnázium diákjaként Kisfaludy a tanárok réme volt.");
      setstitle18("Mobilis");
      setstext18("Közvetlen az egyetem szomszédságában található kiállítás betekintést ad a modern technológia világába, különböző modellekkel, szimulációkkal mutatják be a vendégeknek a technológia működését, mint az elektromos repülők, vagy a víz hajtású járművek. Régebbi technológiák is olykor megtekinthetők, mint például a belső égésű motorok, vagy a lítium ion akkumulátor. A kiállításokon kívül aktív szerepet vállal a mobilis csapata az oktatásban. Az ifjakat programozáara, fizikai és kémiai ismeretekre tanítják, az idősebb korosztály számára pedig felzárkóztató foglalkozásokat tartanak az infokommunikációs eszközök használatából.");
      setstitle19("Dunakapu tér");
      setstext19("A Dunakapu tér Győr ikonikus terei közül az egyik. A Mosoni-Duna határolja északi irányból, nevét is a régi vár Duna-kapujáról kapta, amit sok helyen Vízi-kapunak is emlegetnek a források. A legenda szerint erre a kapura állították a törökök a vaskakast 1594-ben, mikor bevették a várost, kijelentvén, hogy addig maradnak, amíg meg nem szólal – ami négy évvel később be is következett.");
      setstext19_2("Napjainkban fontos szerepet játszik a koncertek, fesztiválok, vásárok lebonyolításában, akárcsak az elmúlt évszázadban.");
      setstitle20("Baross út");
      setstext20("A Baross út Győr egyik legforgalmasabb útvonala, a Káptalandomb peremétől átszeli a Belvárost, majd a vasút felett átívelő Baross hídon keresztülhaladva Nádorvárosban folytatódik, ahol egészen a Szigethy Attila útig tart. Az út belvárosi szakasza a város legjelentősebb sétálóutcája számos üzlettel, étteremmel. A sétálóutca arculata az elmúlt száz évben jelentősen változott, miután a barokk épületeket felújították, a szocialista időkben felhúzott blokkokat átépítették, modernizálták, ahová csak lehetett fákat telepítettek.");
      setstitle21("Várfal sétány");
      setstext21("A három méter széles sétány a Kossuth hidat és a Rábatext Horgászegyesület telkét köti össze. Az utóbbi években az időjárás és az árvíz okozta károk miatt többször is felújított sétány minden évszakban rengeteg kikapcsolódni, gyönyörködni vágyó ember lepi el. Itt nyugodt környezetben csodálhatják a Duna, a 2023-ban átépített, majd 2086-ban teljesen felújított fürdő és a Radó sziget látképét.");
      setstitle22("Zsinagóga");
      setstext22("Az egykori győri zsinagóga a 19. században épült, historikus és szecessziós stílusban. Ma múzeumépületként szolgál, illetve kulturális rendezvényeknek és a Zeneművészeti Főiskolán ad otthont.");
      setstitle23("Széchenyi István Egyetem");
      setstext23("Az egyetem mindig is fontos szerepet töltött be a város életében, hiszen rendkívül sok hallgatója a világ minden pontjáról vonzotta a diákokat. A várossal együttműködve segédkeztek az új közlekedési infrastruktúra megállításában, a város arculatának alakításában, hogy minden Győrbe érkező és itt élő egy rendezett, modern és élhető városnak tapasztalja a folyók városát.");
      setstext23_2("Az egykori egyetemi sportcsarnok átépítése után megkezdődött az új sportközpont felépítése, melynél elsődleges szempont volt a zöldítés, mely akadályt sikeresen vettek a tervezésben résztvevő hallgatók.");
      setstext23_3("Az új sportközpont nem csak a hallgatóknak nyúlt kikapcsolódási, sportolási lehetőséget, hanem a látogatási időben mindenki előtt nyitva áll.");
      setstitle24("Győr múlt százada kiállítás");
      setstext24("Ezt a kiállítást a városvezetés Győr várossá válásának 850 éves évfordulójára szervezte, melyben lehetőséget kapunk visszatekinteni a város 100 évvel ezelőtti valójára, az azóta történt változásokra. Az interaktív kiállítás kitekintést ad a támogatóknak köszönhetően a világ és a technológia változására is, mely jól mutatja, hogy ebben az évszázadban talán nem túlzás azt mondani, hogy végbe ment a 3. Ipari forradalom. Ennek a vívmányait, előnyeit tekinthetik meg az Audi arénába látogatók.");
    }
  }
  const post = [{title:tt1, szoveg:sz1, kep:img19, link:"/pr_cikk"},{title:tt2, szoveg:sz2, kep:img18, link:"/latvanyossagok"},];
  const FGY = [{title:fgyt1, szoveg:fgys1}, {title:fgyt2, szoveg:fgys2}, {title:fgyt3, szoveg:fgys3}, {title:fgyt4, szoveg:fgys4}]
  const prcikk =[{title:prtitle, text:prtext}]
  const sights =[{title:stitle1, text:stext1},{title:stitle2, text:stext2, text2:stext2_2},{title:stitle3, text:stext3, text2:stext3_2, text3:stext3_3},{title:stitle4, text:stext4, text2:stext4_2, text3:stext4_3, text4:stext4_4},{title:stitle5, text:stext5},{title:stitle6, text:stext6},{title:stitle7, text:stext7},{title:stitle8, text:stext8, text2:stext8_2},{title:stitle9, text:stext9},{title:stitle10, text:stext10},{title:stitle11, text:stext11},{title:stitle12, text:stext12},{title:stitle13, text:stext13, text2:stext13_2},{title:stitle14, text:stext14, text2:stext14_2},{title:stitle15, text:stext15},{title:stitle16, text:stext16},{title:stitle17, text:stext17, text2:stext17_2, text3:stext17_3},{title:stitle18, text:stext18},{title:stitle19, text:stext19, text2:stext19_2},{title:stitle20, text:stext20},{title:stitle21, text:stext21},{title:stitle22, text:stext22},{title:stitle23, text:stext23, text2:stext23_2, text3:stext23_3},{title:stitle24, text:stext24}]
  return (
    <Router>
      {/*navbar*/}
      <div className="navbar-cont">
        <div className="navbar-item n-i-s fdr">
            <a className="nav-link" href="/"><img src={CGBGL} alt="CGBG Logo" style={{width:"50px"}}/></a>
        </div>
        <div className="navbar-item n-i-e fdr">
          <div className="nav-link">
            <div onClick={toggler} className="navbar-item n-i-e fdr" style={{cursor:"pointer"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{padding:"5px"}} viewBox="0 0 24 24"><path d="M13.144 8.171c-.035-.066.342-.102.409-.102.074.009-.196.452-.409.102zm-2.152-3.072l.108-.031c.064.055-.072.095-.051.136.086.155.021.248.008.332-.014.085-.104.048-.149.093-.053.066.258.075.262.085.011.033-.375.089-.304.171.096.136.824-.195.708-.176.225-.113.029-.125-.097-.19-.043-.215-.079-.547-.213-.68l.088-.102c-.206-.299-.36.362-.36.362zm13.008 6.901c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12zm-8.31-5.371c-.006-.146-.19-.284-.382-.031-.135.174-.111.439-.184.557-.104.175.567.339.567.174.025-.277.732-.063.87-.025.248.069.643-.226.211-.381-.355-.13-.542-.269-.574-.523 0 0 .188-.176.106-.166-.218.027-.614.786-.614.395zm6.296 5.371c0-1.035-.177-2.08-.357-2.632-.058-.174-.189-.312-.359-.378-.256-.1-1.337.597-1.5.254-.107-.229-.324.146-.572.008-.12-.066-.454-.515-.605-.46-.309.111.474.964.688 1.076.201-.152.852-.465.992-.038.268.804-.737 1.685-1.251 2.149-.768.694-.624-.449-1.147-.852-.275-.211-.272-.66-.55-.815-.124-.07-.693-.725-.688-.813l-.017.166c-.094.071-.294-.268-.315-.321 0 .295.48.765.639 1.001.271.405.416.995.748 1.326.178.178.858.914 1.035.898.193-.017.803-.458.911-.433.644.152-1.516 3.205-1.721 3.583-.169.317.138 1.101.113 1.476-.029.433-.37.573-.693.809-.346.253-.265.745-.556.925-.517.318-.889 1.353-1.623 1.348-.216-.001-1.14.36-1.261.007-.094-.256-.22-.45-.353-.703-.13-.248-.015-.505-.173-.724-.109-.152-.475-.497-.508-.677-.002-.155.117-.626.28-.708.229-.117.044-.458.016-.656-.048-.354-.267-.646-.53-.851-.389-.299-.188-.537-.097-.964 0-.204-.124-.472-.398-.392-.564.164-.393-.44-.804-.413-.296.021-.538.209-.813.292-.346.104-.7-.082-1.042-.125-1.407-.178-1.866-1.786-1.499-2.946.037-.19-.114-.542-.048-.689.158-.352.48-.747.762-1.014.158-.15.361-.112.547-.229.287-.181.291-.553.572-.781.4-.325.946-.318 1.468-.388.278-.037 1.336-.266 1.503-.06 0 .038.191.604-.019.572.433.023 1.05.749 1.461.579.211-.088.134-.736.567-.423.262.188 1.436.272 1.68.069.15-.124.234-.93.052-1.021.116.115-.611.124-.679.098-.12-.044-.232.114-.425.025.116.055-.646-.354-.218-.667-.179.131-.346-.037-.539.107-.133.108.062.18-.128.274-.302.153-.53-.525-.644-.602-.116-.076-1.014-.706-.77-.295l.789.785c-.039.025-.207-.286-.207-.059.053-.135.02.579-.104.347-.055-.089.09-.139.006-.268 0-.085-.228-.168-.272-.226-.125-.155-.457-.497-.637-.579-.05-.023-.764.087-.824.11-.07.098-.13.201-.179.311-.148.055-.287.126-.419.214l-.157.353c-.068.061-.765.291-.769.3.029-.075-.487-.171-.453-.321.038-.165.213-.68.168-.868-.048-.197 1.074.284 1.146-.235.029-.225.046-.487-.313-.525.068.008.695-.246.799-.36.146-.168.481-.442.724-.442.284 0 .223-.413.354-.615.131.053-.07.376.087.507-.01-.103.445.057.489.033.104-.054.684-.022.594-.294-.1-.277.051-.195.181-.253-.022.009.34-.619.402-.413-.043-.212-.421.074-.553.063-.305-.024-.176-.52-.061-.665.089-.115-.243-.256-.247-.036-.006.329-.312.627-.241 1.064.108.659-.735-.159-.809-.114-.28.17-.509-.214-.364-.444.148-.235.505-.224.652-.476.104-.178.225-.385.385-.52.535-.449.683-.09 1.216-.041.521.048.176.124.104.324-.069.19.286.258.409.099.07-.092.229-.323.298-.494.089-.222.901-.197.334-.536-.374-.223-2.004-.672-3.096-.672-.236 0-.401.263-.581.412-.356.295-1.268.874-1.775.698-.519-.179-1.63.66-1.808.666-.065.004.004-.634.358-.681-.153.023 1.247-.707 1.209-.859-.046-.18-2.799.822-2.676 1.023.059.092.299.092-.016.294-.18.109-.372.801-.541.801-.505.221-.537-.435-1.099.409l-.894.36c-1.328 1.411-2.247 3.198-2.58 5.183-.013.079.334.226.379.28.112.134.112.712.167.901.138.478.479.744.74 1.179.154.259.41.914.329 1.186.108-.178 1.07.815 1.246 1.022.414.487.733 1.077.061 1.559-.217.156.33 1.129.048 1.368l-.361.093c-.356.219-.195.756.021.982 1.818 1.901 4.38 3.087 7.22 3.087 5.517 0 9.989-4.472 9.989-9.989zm-11.507-6.357c.125-.055.293-.053.311-.22.015-.148.044-.046.08-.1.035-.053-.067-.138-.11-.146-.064-.014-.108.069-.149.104l-.072.019-.068.087.008.048-.087.106c-.085.084.002.139.087.102z"/></svg>
              <div className="line-container">
                  <div className={toggle ? "line line-1-off" : "line line-1-on"}></div>
                  <div className={toggle ? "line line-2-off" : "line line-2-on"}></div>
                  <div className={toggle ? "line line-3-off" : "line line-3-on"}></div>
              </div>
          </div>
        </div>
        </div>
      </div>
      <div className="navbar-cont-mobile">
        <div className="navbar-item n-i-s fdr">
            <a className="nav-link" href="/"><img src={CGBGL} alt="CGBG Logo" style={{width:"50px"}}/></a>
        </div>
        <div onClick={toggler} className="navbar-item n-i-e fdr">
            <div className="line-container">
                <div className={toggle ? "line line-1-off" : "line line-1-on"}></div>
                <div className={toggle ? "line line-2-off" : "line line-2-on"}></div>
                <div className={toggle ? "line line-3-off" : "line line-3-on"}></div>
            </div>
        </div>
      </div>
      <div className={toggle ? "navbar-cont-mobile-list nav-off fdc" : "navbar-cont-mobile-list nav-on fdc"}>
        <div className="navbar-item" >
            <div className="nav-link"onClick={()=>changeLang(1)}>Magyar</div>
        </div>
        <div className="navbar-item" >
            <div className="nav-link" onClick={()=>changeLang(2)}>English</div>
        </div>
        <div className="navbar-item" >
            <div className="nav-link" onClick={()=>changeLang(3)}>Deutsch</div>
        </div>
        <div className="navbar-item" >
            <div className="nav-link" onClick={()=>changeLang(4)}>Français</div>
        </div>
        <div className="navbar-item" >
            <div className="nav-link" onClick={()=>changeLang(5)}>Latinus</div>
        </div>
      </div>
      {/*content*/}
      <Routes>
        <Route exact path="/" element={<Home toggle={toggle} post={post} FGY={FGY}/>}></Route>
        <Route path="/pr_cikk" element={<PrCikk prcikk={prcikk}/>}></Route>
        <Route path="/latvanyossagok" element={<Latvanyossagok sights={sights}/>}></Route>
      </Routes>
      {/*footer*/}
      <div className="footer-cont">
        <div className="footer-item">
            <div className="foot-item-text cursorD" style={{fontSize:"50px"}}><img src={CGBGL} alt="CGBG Logo" style={{width:"100px"}}/></div>
        </div>
        <div className="footer-item copyszoveg"><div className="foot-item-tit" style={{fontSize:"20px"}}>{foottext}</div></div>
      </div>
    </Router>
  );
}

export default App;
