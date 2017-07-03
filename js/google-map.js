function initMap() {
    var iconBase = 'img/pin copy 4.png';
    var uluru = {lat: 37.973405, lng: 23.672955};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: iconBase
    });
}
