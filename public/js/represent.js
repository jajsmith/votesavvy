var Represent = {
    boundarySets: function(boundary, callback){
        // TODO
    },
    boundaries: function(boundary, callback){
        // TODO
    },
    boundariesLatLon: function(lat, lon, callback){
        // TODO
    },
    postalCode: function(postalCode, callback){
        $.get('/represent/postcode/' + postalCode.toUpperCase(), function(data){
            callback(data);
        });
    },
    representativesLatLon: function(lat, lon, callback){
        // TODO
    }
};
