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
      setstitle1("Rába Quelle Spa, Thermal and Adventure Bath");
      setstext1("The popular Rába Quelle Spa, Thermal and Adventure Bath is located in the city of Győr, on the peninsula at the confluence of the Mosoni-Danube and the Rába, with an unparalleled view of the historic city center.");
      setstitle2("Medicinal water");
      setstext2("The water in the bath rises from a depth of 2,000 meters and has a temperature of 67 ° C. The complex has high-quality medicinal water, which makes it suitable for the treatment of several diseases.");
      setstext2_2("It has been continuously waiting for guests since its renovation in 2023.");
      setstitle3("Xantus János Zoo");
      setstext3("The first zoo-type institution was established in Győr in 1962 in the Bishop's Forest, next to the forestry site of the Forestry. The game park was established in the Mosoni-Danube floodplain to introduce domestic big game species and predators.");
      setstext3_2("The comprehensive renovation of the zoo took place in 2080, when, thanks to the growing green areas in the city, we were able to increase the habitat of the animals and accommodate new species.");
      setstext3_3("Visitors can view the daily life of the zoo under shady trees in a well-kept, beautiful environment, which offers a rich program for both children and adults.");
      setstitle4("City Hall");
      setstext4("The town hall of Győr is a neo-baroque style building built in 1900, with a two-storey building with a clock tower in the middle and two smaller towers protruding from the main facade.");
      setstext4_2("In the basement are the kitchen, the restaurant, the home printing house and other economic and catering units. On the ground floor there are various offices, a central registry and a main reception area where the ornate hall welcomes visitors. The statues of King Stephen V and Joseph Bisinger can be seen in the hall.");
      setstext4_3("The first floor is the most ornate, with staircase decorations and office layouts, a mayor’s office and a ceremonial hall.");
      setstext4_4("There are also offices on the second floor. This floor is less ornate, but in its style and atmosphere it forms an unity with the levels below. The next level is the tower, which can be seen from many parts of the city and offers a wonderful view of the city.");
      setstitle5("Szent László Visitor Center");
      setstext5("The Szent László Visitor Center includes the Püspökvár-Toronykilátó and the Boldog Apor Vilmos Memorial Exhibition, entitled LEGEND AUREA - Relics. also a permanent exhibition and the Diocesan Library and Exhibition Hall.");
      setstitle6("Bishop's Castle Tower Lookout");
      setstext6("The castle, built during the founding of the state, is still the seat of the diocese of Győr. The present image of the high priestly residence is connected to the name of Count Bishop Ferenc Zichy (1743-1783). In the truncated tower we can see the history of the construction of the bishop's castle, the portraits and coats of arms of the bishops of Győr. On the top level, the cityscape of Győr reveals itself to the recordings made in the late 19th century and the 1960s. Going up to the lookout, we can admire the unique panorama of the city.");
      setstitle7("Cathedral of the Assumption");
      setstext7("The Cathedral of the Assumption in Győr is the main church of the Diocese of Győr. It is located in the oldest part of the city, on the Káptalandomb, at the confluence of the Rába and the Mosoni-Danube, opposite the Bishop's Castle. Next to the Bishop's Castle, it is the oldest and most significant monument in the city. The cathedral was built in 1997 II. Pope John Paul granted the rank of a small basilica.");
      setstitle8("Our Lady of Light");
      setstext8("Our Lady shed bloody tears on the morning of March 17, 1697, as seen in the image of the Cathedral of Győr. In connection with the anniversary, many make a pilgrimage to Our Lady of Light every year.");
      setstext8_2("The image of the devotion belongs to the image type of the Sleeping Mary or the Blessed Mary. Probably from an Irish painter. An ancient painting of Abraham van Merlen, circa 1640, is the prehistoric oil painting on canvas. The child's image of a praying Virgin, leaning over Jesus, belonged to the later Bishop of Clonfert, Walter Lynch of an upscale Irish family, who was brought to Hungary after being forced to flee his homeland during the Cromwell persecution. In Vienna he met the then bishop of Győr, János Püsky, who invited him to Győr and appointed him canon and deputy bishop. The picture was placed on the side wall of the cathedral after the bishop's death (1663).");
      setstitle9("Rado Island");
      setstext9("Radó Island is located in the historical core of Győr, surrounded by two branches of the Rába. The island is located right in front of the Rába estuary, between Downtown, New Town and Sziget. The most beautiful park of Győr on the island, entertainment, rest and historical monuments can also be found here. The island was formerly called Promenade Island, and its current name is derived from Kálmán Radó Szentmártoni, the former director of the Rábaszabegulozó Társulat.");
      setstitle10("Szechenyi Square");
      setstext10("Széchenyi Square is the baroque main square of Győr. For the most part 17-18. century buildings, especially the baroque palaces on the north side and the Benedictine complex on the south side are remarkable. For centuries, this square has been the center of public life, and many events are still held here today.");
      setstitle11("Czuczor Gergely Benedictine Grammar School and College");
      setstext11("Today’s eclectic building was built in 1888 on the site of the former Jesuit grammar school, which was founded in 1627. The grammar school has belonged to the Benedictines since 1802. The students of the grammar school were Károly Kisfaludy and Sándor, Lajos Batthyány, János Xántus and Gyula Kautz.");
      setstitle12("Benedictine Church of St. Ignatius of Loyola");
      setstext12("Between the grammar school and the convent is the church with a two-tower facade, one of the most beautiful works of the early Italian Baroque in Hungary. The church has a single nave with chapel cabins on both sides. The 18th-century stucco ornamentation of the chapels and the fresco covering the main nave are of national importance. Standing out from the Baroque furnishings is the pulpit designed by Ludwig Gode and the main altar with statues of Josef Rosler. The carved benches of the church are very beautiful.");
      setstitle13("Apátúr brewery");
      setstext13("In the cellar of the Lloyd’s building, owned by the Benedictine community, a former Benedictine student has been making beers since the beginning of the 21st century, starting with a pils variety, but now anyone can find their favorite beer. The manufactory is becoming more and more successful who wants to get a bottle of Benedictine beer, it has to be very gapy as they run out of shelves very soon.");
      setstext13_2("Food and drink known from the monastic tradition has been available in the brewery since December 2021.");
      setstitle14("Kimba elephant park");
      setstext14("The zoo is operated by the deservedly famous Casselly family, who have been working with circus animals for several generations to include them. They have now stopped touring and are trying to save and accommodate as many animals as possible.");
      setstext14_2("Visitors, young and old, are welcome as everyone finds the program and opportunity for them.");
      setstitle15("Vienna Gate Square");
      setstext15("The Vienna Gate Square is one of the oldest squares in Győr. The irregularly shaped space has been open from the west, towards the Rába, since the middle of the 19th century. Once upon a time, the Renaissance-style Vienna Gate stood here, through which passengers from the west arrived in the city center.");
      setstitle16("Church of Our Lady of Carmel Hill");
      setstext16("The architect of the church was the brother Athanasius of Carmelite. He led the construction and the plans for the equipment also come from him. His altars, along with the statues, were made by the Carmelite brother Dominic. His main altarpiece depicts King St. Stephen and Prince St. Imre as worshiped before the Blessed Virgin. The foundation stone of the church was laid in 1721 and consecrated in 1725. The martyr Bishop William of Apor William was temporarily buried in the crypt of our church in 1945, and his earthly remains rested here until 1986.");
      setstitle17("Statue of Kisfaludy");
      setstext17("The statue of Károly Kisfaludy from the vicinity of Győr was erected in 1892 on Radó Island, near the still standing stone theater. In fact, the inauguration was planned for 1888, the 50th anniversary of Kisfaludy's death, but the necessary money was not raised. In addition to the city fathers, Mór Jókai also gave a speech at the inauguration.");
      setstext17_2("Due to frequent flood damage - it was submerged for days in 1920 - it moved to its present location in 1921.");
      setstext17_3("There are several local legends attached to the statue. If we are not careful and parking is prohibited, we can easily put it on the notes in our hands, just like students who are late for school. This is smile because, as a Benedictine high school student, Kisfaludy was a teacher’s horror.");
      setstitle18("Mobilis");
      setstext18("The exhibition, located right next to the university, gives an insight into the world of modern technology, presenting the operation of the technology to guests with various models and simulations, such as electric airplanes or water-powered vehicles. Older technologies can sometimes be viewed, such as internal combustion engines or a lithium ion battery. In addition to exhibitions, his mobile team plays an active role in education. Young people are taught programming, physical and chemical skills, and the older age group is caught up in the use of infocommunication tools.");
      setstitle19("Dunakapu Square");
      setstext19("Dunakapu Square is one of the iconic squares of Győr. It is bordered by the Mosoni-Danube from the north, it is also named after the Danube Gate of the old castle, which in many places is also referred to as the Water Gate. Legend has it that this was the gate where the Turks set up the Iron Rouge in 1594, when they took the town, stating that they would remain until it was spoken - which was four years later.");
      setstext19_2("Nowadays, it plays an important role in organizing concerts, festivals and fairs, just like in the last century.");
      setstitle20("Baross road");
      setstext20("Baross út is one of the busiest routes in Győr, crossing the city center from the edge of Káptalandomb, then continuing through the Baross bridge over the railway in Nádorváros, where it goes all the way to Szigethy Attila út. The downtown section of the road is the most significant pedestrian street in the city with many shops and restaurants. The image of the pedestrian street has changed significantly in the last hundred years, after the Baroque buildings have been renovated, the blocks erected in socialist times have been rebuilt and modernized, where only trees could be planted.");
      setstitle21("Castle wall promenade");
      setstext21("The three-meter-wide promenade connects the Kossuth Bridge and the plot of the Rábatext Fishing Association. The promenade, which has been renovated several times in recent years due to the damage caused by the weather and the flood, is full of people who want to relax and enjoy each season. Here you can admire the view of the Danube, the spa, rebuilt in 2023 and completely renovated in 2086, and the island of Radó in a calm environment.");
      setstitle22("Synagogue");
      setstext22("The former synagogue in Győr was built in the 19th century in a historical and Art Nouveau style. Today it serves as a museum building and hosts cultural events and the College of Music.");
      setstitle23("Széchenyi István University");
      setstext23("The university has always played an important role in the life of the city as it has attracted an enormous number of students from all over the world. In cooperation with the city, they helped to stop the new transport infrastructure, to shape the image of the city, so that everyone who comes to Győr and lives here experiences the city of rivers as an orderly, modern and livable city.");
      setstext23_2("After the reconstruction of the former university sports hall, the construction of the new sports center began, the greening of which was the primary aspect, which was successfully taken over by the students involved in the design.");
      setstext23_3("The new sports center is not only open to students for recreation and sports, but is also open to everyone during the visit.");
      setstitle24("Győr last century exhibition");
      setstext24("This exhibition was organized by the city administration for the 850th anniversary of the city of Győr, in which we have the opportunity to look back at the reality of the city 100 years ago, the changes that have taken place since then. Thanks to the sponsors, the interactive exhibition also provides an insight into the changing world and technology, which shows that it is perhaps no exaggeration to say that the 3rd Industrial Revolution has taken place in this century. Visitors to the Audi arena can see the achievements and benefits of this.");
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
      setFoottext("Czuczor Gergely Benediktiner Gymnasium und Studentenheim ");
      setstitle1("Rába Quelle Spa, Thermal- und Erlebnisbad");
      setstext1("Das beliebte Kur-, Thermal- und Erlebnisbad Rába Quelle liegt in der Stadt Győr, auf der Halbinsel am Zusammenfluss von Moson-Donau und Rab, mit einem unvergleichlichen Blick auf die historische Altstadt.");
      setstitle2("Heilwasser");
      setstext2("Das Wasser im Bad sprudelt aus einer Tiefe von 2.000 Metern und hat eine Temperatur von 67 °C. Der Komplex verfügt über hochwertiges Heilwasser, wodurch es zur Behandlung verschiedener Krankheiten geeignet ist.");
      setstext2_2("Seit seiner Renovierung im Jahr 2023 wartet es ununterbrochen auf Gäste.");
      setstitle3("Xantus János Zoo");
      setstext3("Die erste Zoo-ähnliche Einrichtung wurde 1962 in Győr im Bischofswald neben dem Forstgelände der Forstwirtschaft gegründet. Der Wildpark wurde in der Mosoni-Donau-Aue eingerichtet, um heimische Großwildarten und Raubtiere einzuführen.");
      setstext3_2("Die umfassende Renovierung des Zoos erfolgte im Jahr 2080, als wir dank der wachsenden Grünflächen in der Stadt den Lebensraum der Tiere vergrößern und neue Arten beherbergen konnten.");
      setstext3_3("Unter schattigen Bäumen können die Besucher den Zooalltag in einer gepflegten, schönen Umgebung beobachten, die sowohl für Kinder als auch für Erwachsene ein reichhaltiges Programm bietet.");
      setstitle4("Das Rathaus");
      setstext4("Das Rathaus von Győr ist ein Gebäude im neobarocken Stil aus dem Jahr 1900 mit einem zweistöckigen Gebäude mit einem Uhrturm in der Mitte und zwei kleineren Türmen, die aus der Hauptfassade herausragen.");
      setstext4_2("Im Untergeschoss befinden sich die Küche, das Restaurant, die Hausdruckerei und weitere Wirtschafts- und Gastronomieeinheiten. Im Erdgeschoss befinden sich verschiedene Büros, ein zentrales Register und ein Hauptempfangsbereich, in dem der reich verzierte Saal die Besucher empfängt. In der Halle sind die Statuen von König Stephan V. und Joseph Bisinger zu sehen.");
      setstext4_3("Der erste Stock ist der reich verzierteste, mit Treppendekorationen und Bürolayouts, einem Bürgermeisteramt und einem Festsaal.");
      setstext4_4("Im zweiten Stock befinden sich auch Büros. Diese Etage ist weniger kunstvoll, bildet aber in Stil und Atmosphäre eine Einheit mit den darunter liegenden Ebenen. Die nächste Ebene ist der Turm, der aus vielen Teilen der Stadt zu sehen ist und einen wunderbaren Blick über die Stadt bietet.");
      setstitle5("Besucherzentrum Szent László");
      setstext5("Das Szent László Besucherzentrum umfasst die Püspökvár-Toronykilátó und die Boldog Apor Vilmos Gedenkausstellung mit dem Titel LEGEND AUREA - Relics. auch eine Dauerausstellung und die Diözesanbibliothek und Ausstellungshalle.");
      setstitle6("Aussichtspunkt des Bischofsburgturms");
      setstext6("Die während der Staatsgründung erbaute Burg ist noch heute Sitz der Diözese Győr. Das heutige Bild der Hohepriesterresidenz ist mit dem Namen des Grafen Bischofs Ferenc Zichy (1743-1783) verbunden. Im abgestumpften Turm können wir die Geschichte des Baus der bischöflichen Burg, die Porträts und Wappen der Bischöfe von Győr sehen. Auf der obersten Ebene offenbart sich das Stadtbild von Győr durch die Aufnahmen aus dem späten 19. Jahrhundert und den 1960er Jahren. Wenn wir zum Aussichtspunkt hinaufsteigen, können wir das einzigartige Panorama der Stadt bewundern.");
      setstitle7("Kathedrale Mariä Himmelfahrt");
      setstext7("Die Kathedrale Mariä Himmelfahrt in Győr ist die Hauptkirche der Diözese Győr. Es befindet sich im ältesten Teil der Stadt, an der Káptalandomb, am Zusammenfluss von Rába und Mosoni-Donau, gegenüber der Bischofsburg. Es ist neben der Bischofsburg das älteste und bedeutendste Denkmal der Stadt. Die Kathedrale wurde 1997 II gebaut. Papst Johannes Paul verlieh den Rang einer kleinen Basilika.");
      setstitle8("Unsere Liebe Frau des Lichts");
      setstext8("Die Muttergottes vergoss am Morgen des 17. März 1697 blutige Tränen, wie auf dem Bild der Kathedrale von Győr zu sehen ist. Im Zusammenhang mit dem Jubiläum pilgern jedes Jahr viele zu Unserer Lieben Frau des Lichts.");
      setstext8_2("Das Bild der Andacht gehört zum Bildtypus der schlafenden Maria oder der seligen Maria. Vermutlich von einem irischen Maler. Das antike Gemälde des mit Kronen verzierten Ölgemäldes auf Leinwand ist ein Kupferstich von Abraham van Merlen um 1640. Das Kinderbild einer betenden Jungfrau, die sich über Jesus beugt, gehörte dem späteren Bischof von Clonfert, Walter Lynch aus einer gehobenen irischen Familie, der nach der Flucht aus seiner Heimat während der Cromwell-Verfolgung nach Ungarn gebracht wurde. In Wien lernte er den damaligen Bischof von Győr, János Püsky, kennen, der ihn nach Gyr einlud und ihn zum Domherren und stellvertretenden Bischof ernannte. Das Bild wurde nach dem Tod des Bischofs (1663) an der Seitenwand des Doms angebracht.");
      setstitle9("Insel Rado");
      setstext9("Die Insel Radó liegt im historischen Kern von Győr, umgeben von zwei Nebenarmen des Raab. Die Insel liegt direkt vor der Rába-Mündung, zwischen Downtown, New Town und Sziget. Hier finden Sie auch den schönsten Park von Győr auf der Insel, Unterhaltung, Erholung und historische Denkmäler. Die Insel hieß früher Promenadeninsel und ihr heutiger Name leitet sich von Kálmán Radó Szentmártoni ab, dem ehemaligen Direktor des Rábaszabegulozó Társulat.");
      setstitle10("Szechenyi-Platz");
      setstext10("Der Széchenyi-Platz ist der barocke Hauptplatz von Győr. Meistens 17-18. Jahrhundert, vor allem die Barockpaläste an der Nordseite und die Benediktineranlage an der Südseite sind bemerkenswert. Seit Jahrhunderten ist dieser Platz das Zentrum des öffentlichen Lebens und noch heute finden hier viele Veranstaltungen statt.");
      setstitle11("Czuczor Gergely Benediktiner Gymnasium und Studentenheim");
      setstext11("Das heutige eklektische Gebäude wurde 1888 auf dem Gelände des 1627 gegründeten ehemaligen Jesuitengymnasiums errichtet. Das Gymnasium gehört seit 1802 den Benediktinern. Die Schüler des Gymnasiums waren Károly Kisfaludy und Sándor, Lajos Batthyány, János Xántus und Gyula Kautz.");
      setstitle12("Benediktinerkirche St. Ignatius von Loyola");
      setstext12("Zwischen Gymnasium und Kloster liegt die Kirche mit zweitürmiger Fassade, eines der schönsten Werke des italienischen Frühbarocks in Ungarn. Die Kirche hat ein einziges Kirchenschiff mit Kapellenkabinen auf beiden Seiten. Von nationaler Bedeutung sind die Stuckverzierungen der Kapellen aus dem 18. Jahrhundert und das Fresko im Hauptschiff. Von der barocken Ausstattung heben sich die von Ludwig Gode gestaltete Kanzel und der Hauptaltar mit Statuen von Josef Rosler ab. Die geschnitzten Bänke der Kirche sind sehr schön.");
      setstitle13("Brauerei Apátúr");
      setstext13("Im Keller des Lloyd’s-Gebäudes, das der Benediktinergemeinde gehört, braut ein ehemaliger Benediktiner-Student seit Anfang des 21. Die Manufaktur wird immer erfolgreicher, wer eine Flasche Benediktinerbier haben möchte, muss sehr lückenhaft sein, da sie sehr bald aus den Regalen gehen.");
      setstext13_2("Seit Dezember 2021 werden in der Brauerei aus der klösterlichen Tradition bekannte Speisen und Getränke angeboten.");
      setstitle14("Kimba Elefantenpark");
      setstext14("Der Zoo wird von der zu Recht berühmten Familie Casselly betrieben, die seit mehreren Generationen mit Zirkustieren arbeitet, um sie aufzunehmen. Sie haben jetzt aufgehört zu touren und versuchen, so viele Tiere wie möglich zu retten und unterzubringen.");
      setstext14_2("Besucher, kleine und große, sind willkommen, da jeder das Programm und die Gelegenheit für sich findet.");
      setstitle15("Wiener Torplatz");
      setstext15("Der Wiener Torplatz ist einer der ältesten Plätze in Győr. Der unregelmäßig geformte Raum ist seit Mitte des 19. Jahrhunderts von Westen, zur Rába hin, geöffnet. Hier stand einst das Wiener Tor im Renaissancestil, durch das Reisende aus dem Westen in die Innenstadt gelangten.");
      setstitle16("Kirche Unserer Lieben Frau vom Karmelhügel");
      setstext16("Der Baumeister der Kirche war der Bruder Athanasius des Karmeliter. Er leitete den Bau und auch die Pläne für die Ausstattung stammen von ihm. Seine Altäre wurden zusammen mit den Statuen von dem Karmelitenbruder Dominikus angefertigt. Sein Hauptaltarbild zeigt König St. Stephan und Prinz St. Imre, wie sie vor der Heiligen Jungfrau verehrt werden. Der Grundstein der Kirche wurde 1721 gelegt und 1725 geweiht. Der Märtyrer Bischof Wilhelm von Apor Wilhelm wurde 1945 vorübergehend in der Krypta unserer Kirche bestattet und seine irdischen Überreste ruhten hier bis 1986.");
      setstitle17("Statue von Kisfaludy");
      setstext17("Die Statue von Károly Kisfaludy aus der Nähe von Győr wurde 1892 auf der Insel Radó in der Nähe des noch stehenden Steintheaters aufgestellt. Tatsächlich war die Einweihung für 1888, dem 50. Todestag von Kisfaludy, geplant, aber das nötige Geld wurde nicht aufgebracht. Neben den Stadtvätern hielt auch Mór Jókai eine Rede bei der Einweihung.");
      setstext17_2("Aufgrund häufiger Hochwasserschäden – 1920 stand es tagelang unter Wasser – wurde es 1921 an seinen heutigen Standort verlegt.");
      setstext17_3("Es gibt mehrere lokale Legenden, die mit der Statue verbunden sind. Wenn wir nicht aufpassen und das Parken verboten ist, können wir es einfach auf die Zettel in unsere Hände legen, genau wie Schüler, die zu spät zur Schule kommen. Dies ist ein Lächeln, denn Kisfaludy war als Benediktiner-Gymnasium der Schrecken eines Lehrers.");
      setstitle18("Mobilis");
      setstext18("Die direkt neben der Universität gelegene Ausstellung gibt einen Einblick in die Welt der modernen Technik und präsentiert den Gästen mit verschiedenen Modellen und Simulationen die Funktionsweise der Technik, wie zum Beispiel Elektroflugzeuge oder Wasserfahrzeuge. Teilweise sind auch ältere Technologien zu sehen, etwa Verbrennungsmotoren oder eine Lithium-Ionen-Batterie. Neben Ausstellungen engagiert sich sein mobiles Team in der Bildung. Junge Menschen lernen Programmieren, physikalische und chemische Fähigkeiten, und die ältere Altersgruppe wird in die Nutzung von Infokommunikationswerkzeugen eingeholt.");
      setstitle19("Dunakapu-Platz");
      setstext19("Der Dunakapu-Platz ist einer der ikonischen Plätze von Győr. Sie wird im Norden von der Mosoni-Donau begrenzt, sie ist auch nach dem Donautor der alten Burg benannt, das vielerorts auch als Wassertor bezeichnet wird. Die Legende besagt, dass dies das Tor war, an dem die Türken im Jahr 1594 das Iron Rouge errichteten, als sie die Stadt eroberten und behaupteten, dass sie bleiben würden, bis es gesprochen würde - was vier Jahre später war.");
      setstext19_2("Heute spielt es eine wichtige Rolle bei der Organisation von Konzerten, Festivals und Messen, genau wie im letzten Jahrhundert.");
      setstitle20("Baross straße");
      setstext20("Die Baross straße ist eine der verkehrsreichsten Strecken in Győr. Sie durchquert das Stadtzentrum vom Rand von Káptalandomb und führt dann über die Baross-Brücke über die Eisenbahn in Nádorváros, wo sie bis zur Szigethy Attila út führt. Der Innenstadtabschnitt der Straße ist die bedeutendste Fußgängerzone der Stadt mit vielen Geschäften und Restaurants. Das Bild der Fußgängerzone hat sich in den letzten hundert Jahren stark gewandelt, nachdem die barocken Bauten saniert wurden, wurden die zu sozialistischen Zeiten errichteten Blocks umgebaut und modernisiert, wo nur Bäume gepflanzt werden durften.");
      setstitle21("Schlossmauerpromenade");
      setstext21("Die drei Meter breite Promenade verbindet die Kossuth-Brücke und das Grundstück des Fischereivereins Rábatext. Die Promenade, die in den letzten Jahren aufgrund der Witterungs- und Hochwasserschäden mehrfach renoviert wurde, ist zu jeder Jahreszeit voller Erholungs- und Genussmenschen. Hier können Sie in ruhiger Umgebung den Blick auf die Donau, das 2023 umgebaute und 2086 komplett renovierte Kurbad und die Insel Radó bewundern.");
      setstitle22("Synagoge");
      setstext22("Die ehemalige Synagoge in Győr wurde im 19. Jahrhundert im historischen Stil und im Jugendstil erbaut. Heute dient es als Museumsgebäude und beherbergt kulturelle Veranstaltungen und die Hochschule für Musik.");
      setstitle23("Széchenyi István Universität");
      setstext23("Die Universität hat schon immer eine wichtige Rolle im Leben der Stadt gespielt, da sie eine enorme Anzahl von Studenten aus der ganzen Welt angezogen hat. In Zusammenarbeit mit der Stadt halfen sie, die neue Verkehrsinfrastruktur zu stoppen, das Stadtbild zu prägen, damit jeder, der nach Győr kommt und hier lebt, die Flussstadt als geordnete, moderne und lebenswerte Stadt erlebt.");
      setstext23_2("Nach dem Umbau der ehemaligen Universitätssporthalle begann der Bau des neuen Sportzentrums, dessen Begrünung im Vordergrund stand und von den am Entwurf beteiligten Studenten erfolgreich übernommen wurde.");
      setstext23_3("Das neue Sportzentrum steht nicht nur Studierenden für Freizeit und Sport offen, sondern steht auch allen während des Besuchs offen.");
      setstitle24("Győr Ausstellung des letzten Jahrhunderts");
      setstext24("Diese Ausstellung wurde von der Stadtverwaltung zum 850-jährigen Jubiläum der Stadt Győr organisiert, in der wir die Möglichkeit haben, auf die Realität der Stadt vor 100 Jahren zurückzublicken, die seither stattgefundenen Veränderungen. Dank der Sponsoren gibt die interaktive Ausstellung auch einen Einblick in die sich verändernde Welt und Technik, was zeigt, dass es vielleicht nicht übertrieben ist zu sagen, dass in diesem Jahrhundert die 3. Industrielle Revolution stattgefunden hat. Besucher der Audi arena können sich von den Errungenschaften und Vorteilen davon überzeugen.");
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
      setstitle1("Spa Rába Quelle, bain thermal et aventure");
      setstext1("Le populaire spa, bain thermal et d'aventure Rába Quelle est situé dans la ville de Győr, sur la péninsule au confluent du Mosoni-Danube et de la Rába, avec une vue imprenable sur le centre-ville historique.");
      setstitle2("Eau médicinale");
      setstext2("L'eau du bain jaillit d'une profondeur de 2000 mètres et a une température de 67°C. Le complexe contient de l'eau médicinale de haute qualité, ce qui le rend approprié pour le traitement de plusieurs maladies.");
      setstext2_2("Il n'a cessé d'attendre ses hôtes depuis sa rénovation en 2023.");
      setstitle3("Xantus János Zoo");
      setstext3("La première institution de type zoo a été créée à Győr en 1962 dans la forêt de l'évêque, à côté du site forestier de la Foresterie. Le parc à gibier a été créé dans la plaine inondable de Mosoni-Danube pour introduire des espèces domestiques de gros gibier et des prédateurs.");
      setstext3_2("La rénovation complète du zoo a eu lieu en 2080, lorsque nous avons pu augmenter l'habitat des animaux et accueillir de nouvelles espèces grâce aux espaces verts croissants de la ville.");
      setstext3_3("Les visiteurs peuvent voir la vie quotidienne du zoo à l'ombre des arbres dans un environnement soigné et magnifique, qui propose un programme riche pour les enfants et les adultes.");
      setstitle4("Mairie");
      setstext4("L'hôtel de ville de Győr est un bâtiment de style néo-baroque construit en 1900, avec un bâtiment de deux étages avec une tour d'horloge au milieu et deux tours plus petites dépassant de la façade principale.");
      setstext4_2("Au sous-sol se trouvent la cuisine, le restaurant, l'imprimerie domestique et d'autres unités économiques et de restauration. Au rez-de-chaussée se trouvent divers bureaux, un registre central et une zone de réception principale où le hall orné accueille les visiteurs. Les statues du roi Stephen V et de Joseph Bisinger sont visibles dans le hall.");
      setstext4_3("Le premier étage est le plus décoré, avec des décorations d'escaliers et des aménagements de bureaux, un bureau de maire et une salle d'apparat.");
      setstext4_4("Il y a aussi des bureaux au deuxième étage. Cet étage est moins orné, mais dans son style et son atmosphère, il forme une unité avec les niveaux inférieurs. Le niveau suivant est la tour, qui peut être vue de nombreux endroits de la ville et offre une vue magnifique sur la ville.");
      setstitle5("Centre d'accueil des visiteurs de Szent László");
      setstext5("Le centre d'accueil de Szent László comprend l'exposition commémorative Püspökvár-Toronykilátó et Boldog Apor Vilmos, intitulée LEGEND AUREA - Relics. également une exposition permanente et la bibliothèque diocésaine et la salle d'exposition.");
      setstitle6("Belvédère de la tour du château de l'évêque");
      setstext6("Le château, construit lors de la fondation de l'état, est toujours le siège du diocèse de Győr. L'image actuelle de la résidence sacerdotale est liée au nom du comte évêque Ferenc Zichy (1743-1783). Dans la tour tronquée, on peut voir l'histoire de la construction du château épiscopal, les portraits et les armoiries des évêques de Győr. Au niveau supérieur, le paysage urbain de Győr se révèle aux enregistrements réalisés à la fin du XIXe siècle et dans les années 1960. En montant au belvédère, on peut admirer le panorama unique de la ville.");
      setstitle7("Cathédrale de l'Assomption");
      setstext7("La cathédrale de l'Assomption à Győr est l'église principale du diocèse de Győr. Il est situé dans la partie la plus ancienne de la ville, sur le Káptalandomb, au confluent de la Rába et du Mosoni-Danube, en face du château épiscopal. À côté du château épiscopal, c'est le monument le plus ancien et le plus important de la ville. La cathédrale a été construite en 1997 II. Le pape Jean-Paul a accordé le rang de petite basilique.");
      setstitle8("Notre Dame de la Lumière");
      setstext8("Notre-Dame a versé des larmes de sang le matin du 17 mars 1697, comme le montre l'image de la cathédrale de Győr. Dans le cadre de l'anniversaire, beaucoup font chaque année un pèlerinage à Notre-Dame de la Lumière.");
      setstext8_2("L'image de la dévotion appartient au type d'image de la Marie endormie ou de la Bienheureuse Marie. Probablement d'un peintre irlandais. La peinture ancienne de la peinture à l'huile sur toile, décorée de couronnes, est une gravure sur cuivre d'Abraham van Merlen vers 1640. L'image de l'enfant d'une Vierge en prière, penchée sur Jésus, appartenait au futur évêque de Clonfert, Walter Lynch, d'une famille irlandaise haut de gamme, qui a été amené en Hongrie après avoir été contraint de fuir son pays natal pendant la persécution de Cromwell. À Vienne, il rencontra l'évêque de Győr de l'époque, János Püsky, qui l'invita à Győr et le nomma chanoine et évêque adjoint. L'image a été placée sur le mur latéral de la cathédrale après la mort de l'évêque (1663).");
      setstitle9("Île de Rado");
      setstext9("L'île de Radó est située dans le centre historique de Győr, entourée de deux branches de la Rába. L'île est située juste en face de l'estuaire de la Rába, entre le centre-ville, la nouvelle ville et le Sziget. Le plus beau parc de Győr de l'île, des animations, du repos et des monuments historiques s'y trouvent également. L'île s'appelait autrefois l'île de la Promenade, et son nom actuel est dérivé de Kálmán Radó Szentmártoni, l'ancien directeur du Rábaszabegulozó Társulat.");
      setstitle10("Place Széchenyi");
      setstext10("La place Széchenyi est la place principale baroque de Győr. Pour la plupart 17-18. les bâtiments du siècle, en particulier les palais baroques du côté nord et le complexe bénédictin du côté sud sont remarquables. Pendant des siècles, cette place a été le centre de la vie publique et de nombreux événements s'y déroulent encore aujourd'hui.");
      setstitle11("Czuczor Gergely Gymnase et Collège bénédictin");
      setstext11("Le bâtiment éclectique actuel a été construit en 1888 sur le site de l'ancien lycée jésuite, fondé en 1627. Le lycée appartient aux Bénédictins depuis 1802. Les élèves du lycée étaient Károly Kisfaludy et Sándor, Lajos Batthyány, János Xántus et Gyula Kautz.");
      setstitle12("Église bénédictine de Saint-Ignace de Loyola");
      setstext12("Entre le lycée et le couvent se trouve l'église à façade à deux tours, l'une des plus belles œuvres du baroque italien primitif en Hongrie. L'église a une seule nef avec des cabines de chapelle des deux côtés. L'ornementation en stuc du XVIIIe siècle des chapelles et la fresque couvrant la nef principale sont d'importance nationale. La chaire conçue par Ludwig Gode et le maître-autel avec des statues de Josef Rosler se détachent du mobilier baroque. Les bancs sculptés de l'église sont très beaux.");
      setstitle13("Brasserie Apátúr");
      setstext13("Dans le sous-sol du bâtiment Lloyd's, propriété de la communauté bénédictine, un ancien étudiant bénédictin fabrique des bières depuis le début du 21e siècle, en commençant par une variété de pils, mais maintenant tout le monde peut trouver sa bière préférée. La manufacture a de plus en plus de succès qui veut se procurer une bouteille de bière bénédictine, ça doit être très gênant car ils manquent très bientôt de rayons.");
      setstext13_2("Des aliments et boissons connus de la tradition monastique sont disponibles dans la brasserie depuis décembre 2021.");
      setstitle14("Parc des éléphants de Kimba");
      setstext14("Le zoo est géré par la célèbre famille Casselly, qui travaille avec les animaux de cirque depuis plusieurs générations pour les inclure. Ils ont maintenant arrêté les tournées et essaient de sauver et d'héberger autant d'animaux que possible.");
      setstext14_2("Les visiteurs, petits et grands, sont les bienvenus car chacun y trouve le programme et l'opportunité qui lui convient.");
      setstitle15("Place de la porte de Vienne");
      setstext15("La place de la porte de Vienne est l'une des plus anciennes places de Győr. L'espace aux formes irrégulières est ouvert de l'ouest, vers la Rába, depuis le milieu du XIXe siècle. Il était une fois la porte de Vienne de style Renaissance, par laquelle les passagers de l'ouest arrivaient dans le centre-ville.");
      setstitle16("Église Notre-Dame de Carmel Hill");
      setstext16("L'architecte de l'église était le frère Athanase de Carmélite. Il a dirigé la construction et les plans des équipements viennent aussi de lui. Ses autels, ainsi que les statues, ont été réalisés par le frère carmélite Dominique. Son retable principal représente le roi Saint-Étienne et le prince Saint-Imre vénérés devant la Sainte Vierge. La première pierre de l'église a été posée en 1721 et consacrée en 1725. L'évêque martyr William d'Apor William a été temporairement enterré dans la crypte de notre église en 1945, et ses restes terrestres y ont reposé jusqu'en 1986.");
      setstitle17("Statue de Kisfaludy");
      setstext17("La statue de Károly Kisfaludy des environs de Győr a été érigée en 1892 sur l'île de Radó, près du théâtre en pierre encore debout. En fait, l'inauguration était prévue pour 1888, le 50e anniversaire de la mort de Kisfaludy, mais l'argent nécessaire n'a pas été réuni. En plus des pères de la ville, Mór Jókai a également prononcé un discours lors de l'inauguration.");
      setstext17_2("En raison des fréquents dégâts causés par les inondations - il a été submergé pendant des jours en 1920 - il a déménagé à son emplacement actuel en 1921.");
      setstext17_3("Il y a plusieurs légendes locales attachées à la statue. Si nous ne faisons pas attention et que le stationnement est interdit, nous pouvons facilement le mettre sur les notes entre nos mains, tout comme les élèves qui sont en retard à l'école. C'est sourire car, en tant que lycéen bénédictin, Kisfaludy était l'horreur d'un enseignant.");
      setstitle18("Mobilis");
      setstext18("L'exposition, située juste à côté de l'université, donne un aperçu du monde de la technologie moderne, en présentant le fonctionnement de la technologie aux invités avec différents modèles et simulations, tels que des avions électriques ou des véhicules à eau. Des technologies plus anciennes peuvent parfois être consultées, comme les moteurs à combustion interne ou une batterie lithium-ion. En plus des expositions, son équipe mobile joue un rôle actif dans l'éducation. Les jeunes apprennent la programmation, les compétences physiques et chimiques, et les plus âgés sont pris dans l'utilisation des outils d'infocommunication.");
      setstitle19("Place Dunakapu");
      setstext19("La place Dunakapu est l'une des places emblématiques de Győr. Il est bordé par le Mosoni-Danube du nord, il porte également le nom de la porte du Danube de l'ancien château, qui dans de nombreux endroits est également appelée la porte de l'eau. La légende raconte qu'il s'agissait de la porte où les Turcs établirent le fer rouge en 1594, lorsqu'ils prirent la ville, déclarant qu'ils resteraient jusqu'à ce qu'on en parle - c'est-à-dire quatre ans plus tard.");
      setstext19_2("De nos jours, elle joue un rôle important dans l'organisation de concerts, de festivals et de foires, tout comme au siècle dernier.");
      setstitle20("Route de Baross");
      setstext20("Route de Baross est l'une des routes les plus fréquentées de Győr, traversant le centre-ville depuis le bord de Káptalandomb, puis passant par le pont Baross sur la voie ferrée à Nádorváros, où il va jusqu'à Szigethy Attila út. La section du centre-ville de la route est la rue piétonne la plus importante de la ville avec de nombreux magasins et restaurants. L'image de la rue piétonne a considérablement changé au cours des cent dernières années, après la rénovation des bâtiments baroques, les blocs érigés à l'époque socialiste ont été reconstruits et modernisés, où seuls des arbres pouvaient être plantés.");
      setstitle21("Promenade des remparts du château");
      setstext21("La promenade de trois mètres de large relie le pont de Kossuth et la parcelle de l'association de pêche Rábatext. La promenade, qui a été rénovée à plusieurs reprises ces dernières années en raison des dommages causés par les intempéries et les inondations, est pleine de gens qui veulent se détendre et profiter de chaque saison. Ici, vous pourrez admirer la vue sur le Danube, la station thermale, reconstruite en 2023 et entièrement rénovée en 2086, et l'île de Radó dans un environnement calme.");
      setstitle22("Synagogue");
      setstext22("L'ancienne synagogue de Győr a été construite au XIXe siècle dans un style historique et Art nouveau. Aujourd'hui, il sert de bâtiment de musée et accueille des événements culturels et le Collège de musique.");
      setstitle23("Université Széchenyi István");
      setstext23("L'université a toujours joué un rôle important dans la vie de la ville car elle a attiré un nombre énorme d'étudiants du monde entier. En coopération avec la ville, ils ont aidé à arrêter la nouvelle infrastructure de transport, à façonner l'image de la ville, afin que tous ceux qui viennent à Győr et y vivent vivent la ville des rivières comme une ville ordonnée, moderne et habitable.");
      setstext23_2("Après la reconstruction de l'ancienne salle de sport universitaire, la construction du nouveau centre sportif a commencé, dont le verdissement était l'aspect principal, qui a été repris avec succès par les étudiants impliqués dans la conception.");
      setstext23_3("Le nouveau centre sportif n'est pas seulement ouvert aux étudiants pour les loisirs et les sports, mais est également ouvert à tous lors de la visite.");
      setstitle24("Exposition Győr du siècle dernier");
      setstext24("Cette exposition a été organisée par l'administration municipale pour le 850e anniversaire de la ville de Győr, dans laquelle nous avons l'occasion de revenir sur la réalité de la ville il y a 100 ans, les changements qui ont eu lieu depuis lors. Grâce aux sponsors, l'exposition interactive donne également un aperçu de l'évolution du monde et de la technologie, ce qui montre qu'il n'est peut-être pas exagéré de dire que la 3e révolution industrielle a eu lieu au cours de ce siècle. Les visiteurs de l'arène Audi peuvent voir les réalisations et les avantages de cela.");
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
      setstitle1("Rába Quelle Spa, Thermal and Adventure Bath");
      setstext1("Popularis Rába Quelle Spa, Thermal et Adventure Bath sita est in urbe Győr, in peninsula ad confluentem Mosoni-Danube et Rába, singulari intuitu mediae urbis historicae.");
      setstitle2("Medicinae aqua");
      setstext2("Aqua in balineo ex profundo 2000 metrorum erumpit et temperatura 67°C habet. In complexu aquae medicinalis summus qualitas est, quae plurium morborum ad curationem idoneam facit.");
      setstext2_2("Hospites inde ab anno 2023 renovationem continenter exspectabant.");
      setstitle3("Xantus János Zoo");
      setstext3("Prima Tesserae institutio in Győr anno 1962 constituta est in Silva Episcopi, iuxta silvam forestariam. Ludus parcus in Mosoni-Danube in diluvio constitutus est ad introducendas species magnas domesticas lusus et predonum.");
      setstext3_2("Renovatio comprehensiva saepti ferarum anno 2080 facta est, cum possemus incolas animalium augere et novas species ob areas viridis in urbe crescentes accommodare.");
      setstext3_3("Visitatores videre possunt vitam cotidianam saepti sub umbrosis arboribus in ambitu bene conservato, pulchritudine, quae uberem propositum tam pueris quam adultis praebet.");
      setstitle4("Urbs praetorium");
      setstext4("Atrium oppidi Győr stilo neo-barocum anno 1900 aedificatum cum turri horologii in media et duabus turribus minoribus a fronte eminens fabricata est.");
      setstext4_2("In cella sunt culina, caupona, domus typographiae et aliae unitates oeconomicae et obsonandi. In solo solo varia sunt officia, actis mandare centralis et receptaculum principale ubi visitatores excipit aula ornatissima. Statuae Stephani V regis et Iosephi Bisinger in aula videri possunt.");
      setstext4_3("Tabula prima ornatissima est, cum gradibus ornamentis et extensionibus officii, officium maioris et aulae caeremonialis.");
      setstext4_4("Sunt etiam secundae tabulae officia. Haec tabula minus ornata est, sed suo stylo et atmosphaera unitatem cum inferioribus format. Proxima est turris planities, quae ex multis partibus urbis conspici potest et mirabilem conspectum civitatis praebet.");
      setstitle5("Szent László Visitator Center");
      setstext5("In Szent László Visitator Centrum comprehendit Püspökvár-Toronykilátó et Boldog Apor Vilmos Exhibitionem Memorialem, cui inscribitur TRADITIO AUREA - RELIQUIAE. item exhibitio perpetua ac Bibliotheca Dioecesana et Exhibition Hall.");
      setstitle6("Castrum Episcopi Turris Specula");
      setstext6("Arx, condita in urbe condita, adhuc est sedes dioecesis Győr. Haec imago altae sacerdotalis residentiae coniuncta est nomini Comitis Episcopi Ferenc Zichy (1743-1783). In turri truncata videre possumus historiam constructionis castelli episcopi, imagines et insignia episcoporum Győr. In summo gradu, urbsscape Győr monumentis in saeculo XIX et 1960 facta se manifestat. Ascendentes ad speculam, admirari possumus unicam urbis panorama.");
      setstitle7("Cathedralis Assumptionis");
      setstext7("Metropolitanae Assumptionis in Győr est maior ecclesia dioecesis Győr. Sita est in antiquissima urbis parte, in Káptalandomb, ad confluentem Rába et Mosoni-Danube, contra castrum episcopi. Juxta castrum episcopi, vetustissimum est et notabile monumentum in urbe. Ecclesia cathedralis anno 1997 II aedificata est. Ioannes Paulus Papa concessit parvae Basilicae gradum.");
      setstitle8("Beatae Mariae Virginis de Lux");
      setstext8("Domina nostra lacrimas cruentas fudit die 17 Martii 1697, in imagine Cathedralis Győrensi. Iuxta anniversarium anniversarium permulta quotannis faciunt peregrinationem Beatae Mariae de Lumine.");
      setstext8_2("Devotionis imago pertinet ad imaginem typum S. Mariae dormientis vel Beatae Mariae. Probabiliter ex pictore Hibernico. Antiqua pictura olei in pariete pictus coronis ornata, sculptura cuprea Abrahami van Merlen circa 1640 . Imago Virginis orantis infantis super Jesum innixa, fuit postea Clonfert episcopi, Gualteri Lynch e familia Hibernica upscale, qui in Hungariam perductus est, postquam in Cromwell persecutionem suam patriam fugere coactus est. Viennae deinde Győr, János Püsky episcopus occurrit, qui eum ad Győr invitavit et episcopum illum canonicum et vicarium constituit. Statua in pariete laterali ecclesiae cathedralis post mortem episcopi posita (1663).");
      setstitle9("Rado Island");
      setstext9("Radó Island sita est in nucleo historico Győr, duobus ramis Rába circumdato. Insula recta ante aestuarium Rába sita est, inter Downtown, Novam Oppidum et Sziget. Pulcherrimum parcum Győr in insula, hospitium, cetera et monumenta historica hic etiam inveniri possunt. Insula olim Promenade dicta, et nomen hodiernum ab Kalmán Radó Szentmártoni, quondam rectore Rábaszabegulozó Társulat.");
      setstitle10("Szechenyi Quadratus");
      setstext10("Széchenyi Quadratus baroque principalis quadratum Győr. Pleraque 17-18. aedificia saeculi, praesertim palatia baroque ad partem septentrionalem et complexum Benedictinorum in parte australi, sunt mirabilia. Saeculis hoc quadratum centrum vitae publicae fuit et multae eventus hodie hic habentur.");
      setstitle11("Scholae Grammaticae Benedictinae et Collegium");
      setstext11("Hodie aedificium eclecticum anno 1888 aedificatum est in situ prioris scholae grammaticae Iesuitae, quae anno 1627 condita est. Schola grammatica ad Benedictinos ab anno MDCCCII pertinebat. Discipuli scholae grammaticae fuerunt Károly Kisfaludy et Sándor, Lajos Batthyány, János Xántus et Gyula Kautz.");
      setstitle12("Benedictinae Ecclesiae S. Ignatus Loyola");
      setstext12("Inter scholam grammaticam et conventum ecclesia est cum turri fronte, una pulcherrima opera veterum Italicorum Baroque in Hungaria. Ecclesia una nave cum gurgustio ex utraque parte capellam habet. Tectorium saeculi XVIII de ornamentis saculorum et tegumenta obtegenti nave principale sunt momenti nationalis. Exstantes e Baroque supellectile suggestum a Ludwig Gode et altare majus cum statuis Josef Rosler designatur. Sculptilia ecclesiae sunt pulcherrima.");
      setstitle13("Apátúr eclesiam");
      setstext13("In basi aedificii Lloyd, a coenobio Benedictino possesso, olim discipulus Benedictinus cerevisiam faciens ab ineunte saeculo XXI, cum pilis variis, nunc quisque ceruisiam ventus invenire potest. Faciendi magis ac felicior est qui utrem Benedictinae cerevisiae obtinere cupit, valde hiatus est ut cito e vadis excurrat.");
      setstext13_2("Cibus et potiones, quae ex traditione monastica notae sunt, praesto fuerunt in eclesiano post Decembrem MMXXI.");
      setstitle14("Kimba elephantum parcum");
      setstext14("Tesserae currunt a familia Casselly merito celebre, qui cum animalibus circensibus per plures aetates laboraverunt ut ea comprehenderent. Iam cessere et quaerere et salvare et accommodare quam plurimas bestias possunt.");
      setstext14_2("Visitatores, parvi et magni, grata sunt, prout quisque eorum rationem et opportunitatem invenit.");
      setstitle15("Vindobonae Porta Square");
      setstext15("Porta Vindobonae Quadratus est unus ex quadratis antiquissimis in Győr. Spatium irregulare formatum ab occasu versus Rába apertum est, cum medio saeculo XIX. Olim Porta Renaissance-style Vienna hic stetit, per quam vectores ab occidente in mediam urbem venerunt.");
      setstitle16("Ecclesia Sanctae Mariae de Monte Carmelo");
      setstext16("Frater Athanasius Carmelitarum faber ecclesiae fuit. Ab eo quoque fabricam et consilium apparatum duxit. Ejus altaria cum statuis a fratre Dominico Carmelitarum facta sunt. Praecipuum eius altare S. Stephani et principis Imre regis ante Beatam Virginem adoratum depingit. Fundamentum ecclesiae lapis anno 1721 conditus est, et anno 1725 consecratus. Martyr Episcopus Gulielmus Apor William sepultus est in crypta ecclesiae nostrae anno MCMXLV, cuius terreni reliquiae hic usque ad MCMLXXXVI requievit.");
      setstitle17("Statua Kisfaludy");
      setstext17("Statua Károly Kisfaludy e vicinia Győr in Radó Island anno 1892 erecta est, prope theatrum lapideum adhuc stans. Re quidem vera inauguratio pro 1888, 50th anniversaria mortis Kisfaludy destinata est, sed pecunia necessaria non surgit. Praeter patres civitatis, Mór Jókai etiam in inauguratione orationem dedit.");
      setstext17_2("Ob damnum crebra diluvii - per dies MCMXX submersum est - ad praesentem locum MCMXXI.");
      setstext17_3("Plures fabulae locales statuae adnexae sunt. Si non curati sumus et raeda prohibita, facile notas in manibus ponere possumus, sicut studiosi qui sero sunt scholae. Hoc risus est, quia, ut discipulus Benedictinus altus schola, Kisfaludy magistri horroris fuit.");
      setstitle18("Mobilis");
      setstext18("Exhibitio, iuxta universitatem ius posita, perspectionem in mundo technologiae modernae praebet, operationem technologiarum hospitibus exhibens cum diversis exemplaribus et simulationibus, ut aeroplanorum electricorum vel autocinetorum possibilium aquarum. Aliquando technologiae antiquiores considerari possunt, ut machinae combustiones internae vel lithium ion altilium. Praeter spectacula, eius mobilis turma activam partem in educatione agit. Iuvenes docentur programmandi, artes physicae et chemicae, et maior aetas coetus in usu instrumentorum infocommunicationis deprehenditur.");
      setstitle19("Dunakapu tér");
      setstext19("A Dunakapu tér Győr ikonikus terei közül az egyik. A Mosoni-Duna határolja északi irányból, nevét is a régi vár Duna-kapujáról kapta, amit sok helyen Vízi-kapunak is emlegetnek a források. A legenda szerint erre a kapura állították a törökök a vaskakast 1594-ben, mikor bevették a várost, kijelentvén, hogy addig maradnak, amíg meg nem szólal – ami négy évvel később be is következett.");
      setstext19_2("Napjainkban fontos szerepet játszik a koncertek, fesztiválok, vásárok lebonyolításában, akárcsak az elmúlt évszázadban.");
      setstitle20("Baross via");
      setstext20("Baross via est unus e frequentissimis itineribus in Győr, mediam urbem transiens ab ore Káptalandomb, deinde continuans per pontem Baross super balneas in Nádorváros, ubi usque ad Szigethy Attila út vadit. Sectio media viae media est maxime insignis platea pedestri in urbe cum multis tabernis et popinis. Imago plateae pedestris his centum annis insigniter mutata est, postquam Baroque aedificia renovata sunt, caudices socialistarum temporibus aedificatae et modernistae sunt, ubi solae arbores plantari potuerunt.");
      setstitle21("Murus castelli gestatio");
      setstext21("Tres ambulationes metri latae pontem Kossuth et insidias Consociationis Piscationis Rábatext coniungit. Gestatio, quae pluries in annis proximis propter damnum tempestatis et diluvii renovata est, plenus est hominibus, qui singulis temporibus relaxare ac frui volunt. Hic mirari potes conspectum Danubii, spa, anno 2023 reaedificatae et in 2086 penitus renovatae, et insulam Radó in ambitu tranquillo.");
      setstitle22("Synagoga");
      setstext22("Prior synagoga in Győr saeculo XIX aedificata est stilo historico et Art Nouveau. Hodie in museo aedificationis et exercituum eventuum culturalium et Collegio Musicae inservit.");
      setstitle23("Széchenyi István University");
      setstext23("Universitas semper in vita urbis magnas partes egit ut ex toto orbe terrarum innumerabiles discipulos attraxit. In cooperatione cum civitate, adiuvaverunt ut novum onerariam infrastructuram obsisteret, ad imaginem urbis figurandam, ita ut omnes, qui ad Győr venerant et hic habitant, civitatem fluminum experiantur sicut civitatem ordinatam, modernam et vivam.");
      setstext23_2("Post refectionem in aula gymnasii pristini universitatis, constructio gymnasiorum novi mediorum incepit, cuius viror erat aspectus primarius, qui a studiosis in consilio versatus feliciter susceptus est.");
      setstext23_3("Novus centrum ludis non solum studiosis recreationis et ludis aperitur, sed etiam omnibus in visitatione aperitur.");
      setstitle24("Győr saeculo exhibitionem");
      setstext24("Haec exhibitio ab administratione urbana ad 850 anniversarium urbis Győr instituta est, in qua facultas est ad rem urbis ante 100 annos respicere, mutationes quae tunc factae sunt. Propter sponsores, exhibitio interactiva etiam perspectionem praebet in mundo mutabili et technologia, quae ostendit fortasse nihil augeri posse dicere tertiam Industrialem Revolutionem hoc saeculo factam esse. Visitatores in Audi arena res gestas et beneficia huius videre possunt.");
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
