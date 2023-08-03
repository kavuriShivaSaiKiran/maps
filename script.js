mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpdmFrYXZ1cmkiLCJhIjoiY2xoZnR5NzQ3MXl6NDNybnVlZWYxaXB5biJ9._RuH08W_j4gdDJVB7W6p3A';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy:true})

function successLocation(position){
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    [17.3850, 78.4867]
}

function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 12
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);


    map.addControl(
        new MapboxDirections({
        accessToken: mapboxgl.accessToken
        }),
        'top-left'
        );
}