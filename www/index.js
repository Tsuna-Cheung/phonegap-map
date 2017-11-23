document.addEventListener("deviceready", onDeviceReady, false);
 function onDeviceReady() {
     var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 27.993828, lng: 120.699361},
          zoom: 8
        });
      }
}