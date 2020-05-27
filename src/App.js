import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/AppHeader';
import AppContainer from './containers/AppContainer';

import './App.css';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppContainer />
    </div>
      <head>
    <title>Simple Map</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -38.488245, lng: 175.683139},
          zoom: 7
        });
      }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=Qs2S7c6xMNx9Nz8ZehXf-QccuAdlkxjMH8KD4pXr0oPo&callback=initMap"
    async defer></script>
  </body>
    
  );
}

export default App;
