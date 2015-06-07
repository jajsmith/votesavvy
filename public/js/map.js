var Map = {
    init: function(){
        var mapOptions = {
            center: { lat: 45.2501566, lng: -75.8002568},
            zoom: 8
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        google.maps.event.addListener(map, 'click', function(event) {
            Map.placeMarker(event.latLng, map);
        });
    },
    placeMarker: function(location, map) {
        if (Map.marker !== undefined){
            Map.marker.setMap(null);
        }
        Map.marker = new google.maps.Marker({
            position: location,
            map: map
        });
        Map.getCandidates(Map.marker.position.lat(), Map.marker.position.lng());
    },
    marker: undefined,
    getCandidates: function(lat, lon){
        Represent.candidatesLatLon(lat, lon, function(data){});
    }
};