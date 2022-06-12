// Šaja majasdarba mes izveidosiem nelilu aplikaciju kura izvadis uz ekrana izveleto siņa šķirni bildi
// Apkskatiet DogApiDemo.mp4

// Mes izmantosim API https://dog.ceo/dog-api/

// 1)  Apskatiet failu data.js tur piejami visi dati par suņu šķirnem
//     Mums ir piejajams <select id='dogSelector'> kura mums nepiecišams pievienot vairakas <option value="value">name</option>
//     Mes to varam izveidot ar rokam bet labak izmantot ciklu kurš izies cauri visiem datim un izveidos mums nepiecišamus elementus

//     Implementacija:
//     - Izvejdosim mainigo dogSelector kura saglabasim musu <select> element var izmantot elementa id 'dogSelector' un getElementById() metodi
//     - izveidosiem funkciju renderDogData(data) kura saņems siņa šķirnes datus
//     - izmantojot cilku forEach() izesiem cauri musu datiem un pieinosim musu dogSelector ar innerHTML metodi nepiecišamo html
//         `<option value=${breed.value}>${breed.name}</option>`
//     - izsaucam musu funkciju un rezultata mes saņemis visas iespejamas suņu šķirnes

const dogSelector = document.getElementById("dogSelector");
const dogImg = document.getElementById("dogImg");

const renderDogData = (data) => {
  if (!data) {
    return;
  }
  if (data.message) {
    dogImg.innerHTML = `<img src="${data.message}"></img>`;
    return;
  }
  data.forEach((breed) => {
    const option = document.createElement("option");
    option.value = `${breed.value}`;
    option.innerHTML = `${breed.name}`;
    dogSelector.appendChild(option);
  });
};

// 2)  Izmantojot addEventListener('change', funkcijaVards) notikumu pirkš dogSelector mes varam palaist funkciju kura sanems mums siņa bildi
//     Implementacija:
//     - pievienojam addEventListener pie dogSelector un izsaucam funkciju getDogImg
//     - pievinojam funkciju getDogImg
//     - fukcija pievienojam mainigu url kura mes saglabasim musi api url
//         https://dog.ceo/api/breed/${SUŅA-ŠKIRNE}/images/random
//     - musu api nepiecišams padot izveleto sunā škirni varam to padot devinejot dogSelector.value
//     talak uzmantojot fetch() metodi izvejdojam request prikš servera
//         fetch(url)
//             .then(response => response.json())
//             .then(data => renderDogData(data))
//             .catch(error => alert(error));

const getDogImg = () => {
  
};

// 3)  Izvadit suņa bildi
//     Implementacija:
//     - izvedojam funkciju renderDogData() kurai padosim musu data objektu
//     - ivejdosim vel vienu selektoru lai dabut musu dogImg elementu
//     - izmantojot innerHTML pievienot img tag ar src=${data.message}
renderDogData(data);
getDogImg();

dogSelector.addEventListener("change", getDogImg);
