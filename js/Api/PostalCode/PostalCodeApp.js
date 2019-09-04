(function($) {
    'use strict';

    const app = leadApp;
    let cities = [];

    app.getPostalCodes = function() {
        return cities;
    } 

    app.event.subscribe('/api/postal-code', function(e, data) {
        let postalCodes = data.data.cities.map(function(municipality, index) {
            return {'id': index, 'text': municipality.city }
        });
        cities = postalCodes;
    });
    
})(jQuery);