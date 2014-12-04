/**
 * Created by erikmagnusson on 03/12/14.
 */

var map = {

    map:undefined,

    initialize:function() {
        var mapOptions = {
            center: { lat: 61.23026, lng: 14.91776},
            zoom: 5
        };
        this.map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
    }
}

window.addEventListener('load', map.initialize())
