'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// function getCountryData(country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//         <article class="country">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>
//             ${data.currencies[0].name}</p>
//             </div>
//             </article>
//             `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// }

// getCountryData('portugal');
// getCountryData('indonesia');
// getCountryData('spain');

function renderCountry(data, className = '') {
  const html = `
        <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>
            ${data.currencies[0].name}</p>
            </div>
            </article>
            `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

/////////// Another way ////////////

// function getCountryandNeighbour(country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);

//     // Get neighbour country
//     const [neighbour] = data.borders;

//     if (!neighbour) return;
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       console.log(request2.responseText);

//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// }

// getCountryandNeighbour('spain');
// getCountryandNeighbour('russia');

// //////////Modern way to call Ajax//////////

// const request = fetch('https://restcountries.eu/rest/v2/name/portugal');

// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       renderCountry(data[0]);
//       console.log(data);
//     });
// };

// /////Simplyfied Code/////
// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;

//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}🤷‍♂️`);
//       renderError(`Something went wrong 🤷‍♀️🤷‍♀️🤷‍♀️ ${err.message}. Try Again !!`);
//     });
// };

// function getJSON(url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// }

// /////Simplyfied Code/////
// const getCountryData = function (country) {
//   getJSON(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error('No neighbour found!');

//       return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}🤷‍♂️`);
//       renderError(`Something went wrong 🤷‍♀️🤷‍♀️🤷‍♀️ ${err.message}. Try Again !!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('brazil');
//   //   getCountryData('indonesia');
// });

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

// Get Position automatically
// function success(pos) {
//   var crd = pos.coords;

//   console.log('Your current position is:');
//   let lat = crd.latitude;
//   console.log(`Latitude : ${lat}`);
//   let lng = crd.longitude;
//   console.log(`Longitude: ${lng}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
//   whereAmI(lat, lng);
// }

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 🎇`));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

btn.addEventListener('click', function () {
  getCountryData(data);
  //   getCountryData('indonesia');
});
