function initMap() {



    var options = {
        zoom: 7,
        center: { lat: -36.8485, lng: 174.7633 }
    }
    var map = new google.maps.Map(document.getElementById('map'), options);


    google.maps.event.addListener(map, 'click', function(event) {
        addMarker({ coords: event.latLng });


    });
    addMarker({ lat: tempLat, lng: tempLng });

    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map
        });

        marker.addListener('click', function() {

            var lat = this.position.lat();
            var lng = this.position.lng();
            localStorage.setItem('lat', lat);
            localStorage.setItem('lng', lng);
            const Http = new XMLHttpRequest();
            const url = 'https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&lat=' + lat + '&lon=' + lng;
            Http.open("GET", url);
            Http.send();

            Http.onreadystatechange = (e) => {
                localStorage.setItem('weather', Http.responseText);
                document.getElementById('usr').value = JSON.parse(Http.responseText).name;
            }
        });
    }

}