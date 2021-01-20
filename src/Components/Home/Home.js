import React, {useState, useEffect} from 'react';
import axios from 'axios';
import HeadPhones from './orangeheadphones.JPG';
import ProductList from '../ProductList/ProductList';

import './home.css';

function Home() {
const defaultValue = [];
const [products, setProducts] = useState(defaultValue); 

/*useEffect(() => {
  axios.get('https://localhost:5001/product')
  .then(res => {
    setProducts(res.data)
  })
  .catch(err => {
    console.log(err);
  })
},[]);
*/

const staticData = [
  {
    "Title" : "Apple AirPods Max",
    "Description" : "Apple AirPods Max är en trådlös over-ear lur med bekväm och kompromisslös passform och en av marknadens bästa brusreduceringstekniker.",
    "Image" : "https://www.hembiobutiken.se/images/prod/320170-apple-airpods-max-966_2.jpg",
    "Price" : 6690
  },
  {
    "Title" : "Hifiman Sundara",
    "Description" : "HiFiMan Sundara är ersättaren till den mycket omtyckta HE400i. En riktigt fin hifi-hörlur i mellanprissegmentet med Hifimans planar magnetic-element som ger fantastisk rymd och detaljrikedom. Ny matt finish, uppgraderade komponenter och förbättrad byggkvalitet.",
    "Image" : "https://www.hembiobutiken.se/images/prod/281680_2.jpg",
    "Price" : 5290
  },
  {
    "Title" : "Hifiman Susvara",
    "Description" : "Hifiman Susvara är bolagets toppmodell och tar vara på Hifimans spetskompetens när det gäller att utveckla en high-end lur för inbitna musikälskare. Styrkan ligger i deras planarelement som tar fram en extremt stor och naturlig ljudbild med låg distorsion och bästa möjliga ljudupplevelse. Susvara använder sig av ett ”Stealth” magnetsystem som är en av deras senaste innovationer tillsammans med deras nanometer-membran som är ett av världens tunnaste material. Det här är en otroligt välbyggd hörlur som andas lyx och välljud och bara måste upplevas!",
    "Image" : "https://www.hembiobutiken.se/images/prod/293280_2.jpg",
    "Price" : 65990
  },
  {
    "Title" : "Focal hörlurar Utopia",
    "Description" : "Focal Utopia är en referenshörlur från Franska Focal med deras välkända Beryllium-element! Utopia hörluren ingår i deras storsatsning av High-End hörlurar där Utopia är toppmodellen och ett statement från företaget. Konstruktionen påminner mer om en högtalare där ett 40mm Beryllium-element tar hand om hela registret.",
    "Image" : "https://www.hembiobutiken.se/images/prod/242660_2.jpg",
    "Price" : 44990
  },
  {
    "Title" : "Focal hörlurar Stellia",
    "Description" : "Stellia är en sluten referenshörlur från Focal, den franska anrika Hi-Fi-tillverkaren som dominerat hörlursmarknaden för bättre hörlurar de senaste åren. De flesta detaljerna är hämtade från Utopia-modellen men med den stora skillnaden att detta är en sluten modell. Läcker design och ett fantastiskt ljud gör att vi varmt kan rekommendera denna exklusiva hörlur.",
    "Image" : "https://www.hembiobutiken.se/images/prod/290260_2.jpg",
    "Price" : 33990
  },
  {
    "Title" : "Kennerton Odin",
    "Description" : "Kennerton Odin är ett par referenshörlurar med planar-magnetic konstruktion, egenbyggda element tillverkade i Ryssland. Odin spelar med en imponerade dynamik och transparens och målar upp klangbilden åt det varmare hållet utan förlorad finess eller detalj.",
    "Image" : "https://www.hembiobutiken.se/images/prod/273110_2.jpg",
    "Price" : 25990
  },
  {
    "Title" : "Hifiman Arya",
    "Description" :"Hifiman Arya är en enastående hifi-hörlur för de som längtar efter riktigt välljud. Inspirationen till Arya ligger i den tidigare HE-1000 V2, enligt många en av de bästa hörlurarna de hört, och använder planarmagnetiska element med nanometer-membran. Världens tunnaste element som tar fram detaljer på ett mycket imponerande sätt samtidigt som ljudet bli otroligt transparent och helt neutralt.",
    "Image" : "https://www.hembiobutiken.se/images/prod/293190_2.jpg",
    "Price" : 18990
  },
  {
    "Title" : "Focal hörlurar Clear",
    "Description" : "Focal Clear är en helt ny mellanmodell av Focals premiumlurar. Clear befinner sig prismässigt under referensmodellen Utopia men bygger på samma filosofi, med enklare materialval. Focal Clear är handbyggd i Frankrike.",
    "Image" : "https://www.hembiobutiken.se/images/prod/267210_2.jpg",
    "Price" : 17990
  },
  {
    "Title" : "Klipsch Heritage HP-3",
    "Description" : "Klipsch Heritage HP-3 är en halvöppen stereolur i Klipsch hyllade Heritage-serie. Kraftulla 52 mm-element med premium byggkvalitet och en häftig design med kåpor i solid trä, huvudband i koläder och precisionstillverkade aluminiumkomponenter. En fantastisk hörlur som tar vara på Klipsch dynamiska spelstil.",
    "Image" : "https://www.hembiobutiken.se/images/prod/282840_2.jpg",
    "Price" : 13990
  },
  {
    "Title" : "Hifiman Ananda-BT",
    "Description" : "Hifiman Ananda-BT är en trådlös öppen hörlur med stöd för högupplöst ljud och enastående ljudkvalitet i high-end klass.",
    "Image" : "https://www.hembiobutiken.se/images/prod/318420-hifiman-ananda-bt-579_2.jpg",
    "Price" : 13990
  },
  {
    "Title" : "Audio Technica ATH-W5000",
    "Description" : "Audio Technica ATH-W5000 är det japanska bolagets referenshörlur och en utsökt kompanjon runt öronen. Njut av ett rikt och fylligt ljud från dessa slutna hi-end lurar med exklusiva och specialbyggda element inuti ebenholtsträ-kåpor som ger den extra luxuösa känslan!",
    "Image" : "https://www.hembiobutiken.se/images/prod/210840_2.jpg",
    "Price" : 13795
  },
  {
    "Title" : "Focal hörlurar Elear",
    "Description" : "Focal Elear är en High-End hörlur från Franska Focal och räknas som lillebror till referensmodellen Utopia. Elear bygger på samma filosofi och tänk som sin storebror men med mycket enklare materialval för att få ner kostnaden och ge dig som lyssnare ett steg in till High-End världens mitt till en betydligt lägre kostnad.",
    "Image" : "https://www.hembiobutiken.se/images/prod/242810_2.jpg",
    "Price" : 10990
  },
  {
    "Title" : "Kennerton Vali",
    "Description" : "Kennerton Vali är ett par dynamiska hörlurar med 50mm papp-membran tillverkat från Peerless by Tymphani, specialbehandlade träkåpor och helt handbyggda från Ryssland. Vali spelar mycket neutralt och håller en bra balans i hela registret med förvånande dynamiska egenskaper med en varmare ton.",
    "Image" : "https://www.hembiobutiken.se/images/prod/273410_2.jpg",
    "Price" : 10990
  },
  {
    "Title" : "Audio Technica ATH-AD2000X",
    "Description" : "Audio Technica ATH-AD2000X ingår i bolagets bättre sortiment av hifilurar och har fått en fjäderlätt design med enastående komfort och passform. Den öppna konstruktionen definierar ett detaljerat och närvarorikt mellanregister för den som verkligen vill ha en högupplöst musikupplevelse.",
    "Image" : "https://www.hembiobutiken.se/images/prod/211090_2.jpg",
    "Price" : 9450
  },
  {
    "Title" : "Audio Technica ATH-W1000Z", 
    "Description" : "Audio Technica ATH-W1000Z är en designad hi-end lur med omsorgsfull byggkvalitet för att göra musiken rättvisa. Klassisk design med kåpor i äkta teak och nyutvecklade element som framhäver hela registret.",
    "Image" : "https://www.hembiobutiken.se/images/prod/241450_2.jpg",
    "Price" : 7495
  },
  {
    "Title" : "Audio Technica ATH-A2000Z",
    "Description" : "Audio Technica ATH-A2000Z är en audiofil-hörlur i bolagets Art Monitor-serie. Sluten konstruktion med nyutvecklade element som byggs för hand i Japan. Fantastisk byggkvalitet ser till att detta är hörluren som matchar ens högupplösta musik.",
    "Image" : "https://www.hembiobutiken.se/images/prod/241390_2.jpg",
    "Price" : 6890
  },
  {
    "Title" : "Audio Technica ATH-DSR9BT",
    "Description" : "Audio Technica ATH-DSR9BT är flaggskeppet i AT-serien, och erbjuder det bästa ljuder du kan hitta bland trådlösa hörlurar.",
    "Image" : "https://www.hembiobutiken.se/images/prod/287560_2.jpg",
    "Price" : 5990
  },
  {
    "Title" : "Audio Technica ATH-A1000Z",
    "Description" : "Audio Technica ATH-A1000Z är ett par slutna hifi-lurar med en läcker röd finish. Nyutvecklade element som tillverkas i Japan, ger den krispiga ljudkvalitén tillsammans med den fjäderlätta designen och härliga komfort.",
    "Image" : "https://www.hembiobutiken.se/images/prod/241410_2.jpg",
    "Price" : 4950
  },
  {
    "Title" : "Hifiman DEVA",
    "Description" : "Öppna hörlurar från HiFiMAN med flera kopplingsmöjligheter! Den smarta HiFiMAN Bluemini DAC/Amp-adaptern ingår.",
    "Image" : "https://www.hembiobutiken.se/images/prod/310500-hifiman-deva-091_2.jpg",
    "Price" : 4290
  },
  {
    "Title" : "Emotiva Airmotiv GR1",
    "Description" : "Emotiva Airmotiv GR1 använder sig av ny teknik för att leverera engagerad, detaljrik och kraftfull återgivning av din musik. Deras vana trogen har de skapat en riktigt prisvärd produkt där ljudkvalitet kommer i första rummet men där man använder låg marginalstruktur och stor innovationskraft för att leverera en produkt som står sig högt i den tuffa konkurrensen. GR1 stoltserar med bra passform och tydlig Emotiva-design, allt för många timmars njutande av musik i ditt hem eller på språng.",
    "Image" : "https://www.hembiobutiken.se/images/prod/319020-emotiva-airmotiv-gr1-956_2.jpg",
    "Price" : 3790
  },
]

useEffect(()=> {
  setProducts(staticData);
},[]);
return (
  <div className="home-container">
    <div className="img-container">
    </div>
        <ProductList product={products} />
    </div>
  );
}

export default Home;
