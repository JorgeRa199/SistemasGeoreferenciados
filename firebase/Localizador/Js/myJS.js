var firebaseConfig = {
    apiKey: "AIzaSyCa7xMnsowLccKlTfad-IxV75cey7yzUnQ",
    authDomain: "jorgerangel65952.firebaseapp.com",
    databaseURL: "https://jorgerangel65952.firebaseio.com",
    projectId: "jorgerangel65952",
    storageBucket: "jorgerangel65952.appspot.com",
    messagingSenderId: "184673916307",
    appId: "1:184673916307:web:d798c0f3774bcd86b74466",
    measurementId: "G-LL6BJPQKJ3"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();


var coordenadas = {
    lat: 0,
    lng: 0
}

var propiedades = {
    center: coordenadas,
    zoom: 20
}

function iniciaMapa() {
    map = new google.maps.Map(document.getElementById("map"), propiedades);
    var icono = {
        url : "https://interbolivia.com/wp-content/uploads/2018/12/pulse.gif",
        scaledSize : new google.maps.Size(50,50),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0,0)
    }
    var marker = new google.maps.Marker({
        position: { lat: 0, lng: 0 },
        icon: icono,
        map : map
    });

    if (navigator.geolocation) {
        setInterval(function(){
            moverPosicion(marker);
        },3000);
    }
}

function moverPosicion(marker) {
    navigator.geolocation.getCurrentPosition(posicion => {
        var pos = {
            lat: posicion.coords.latitude,
            lng: posicion.coords.longitude
        }
        marker.setPosition(new google.maps.LatLng(posicion.coords.latitude, posicion.coords.longitude));
        map.panTo(new google.maps.LatLng(posicion.coords.latitude, posicion.coords.longitude));
        map.setCenter(pos);
        console.log(pos.lat, pos.lng);

        /* db.collection("Ubucaciones").add(
            {
              coordenadas : new firebase.firestore.GeoPoint(pos.lat, pos.lng)
            }
        ); */
    });

    
}