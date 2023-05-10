'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

/* navigator.geolocation.getCurrentPosition(
  function (position) {
    // Destructuring; the Object returned from geolocation API called position, checked with console.log(position);
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
  },
  function () {
    alert('Could not get your position');
  }
); */
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // Destructuring; the Object returned from geolocation API called position, checked with console.log(position);
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude];
      const map = L.map('map').setView(coords, 13);

      /* Using the Leaflet API: L */
      L.titleLayer('https://{s}.tile.openstreetmap.fr/hot/{x},{y},{z}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.on('click', function (mapEvent) {
        /* console.log(mapEvent); */
        const { lat, lng } = mapEvent.latlng;
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
              className: 'running-popup',
            })
          )
          .setPopupContent('Workout').openPopup;
      });
    },
    function () {
      alert('Could not get your position');
    }
  );