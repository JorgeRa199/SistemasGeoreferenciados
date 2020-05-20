function iniciaMapa() {
  var coordenadas = { lat: 21.152639, lng: -101.711598 };

  var propiedades1 = {
    center: coordenadas,
    zoom: 12,
  };

  var mapa1 = new google.maps.Map(
    document.getElementById("mapa1"),
    propiedades1
  );

  var propiedades2 = {
    center: coordenadas,
    zoom: 12,
    disableDefaultUI: true,
  };

  var mapa2 = new google.maps.Map(
    document.getElementById("mapa2"),
    propiedades2
  );

  var propiedades3 = {
    center: coordenadas,
    zoom: 12,
    zoomControl: false,
    scaleControl: false,
  };

  var mapa3 = new google.maps.Map(
    document.getElementById("mapa3"),
    propiedades3
  );

  var propiedades4 = {
    center: coordenadas,
    zoom: 12,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ["roadmap", "satellite", "terrain"],
    },
  };
  var mapa4 = new google.maps.Map(
    document.getElementById("mapa4"),
    propiedades4
  );

  var propiedades5 = {
    center: coordenadas,
    zoom: 12,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_CENTER,
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_CENTER,
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP,
    },
    fullscreenControl: true,
  };
  var mapa5 = new google.maps.Map(
    document.getElementById("mapa5"),
    propiedades5
  );

  var limites = {
    north: 21.390039,
    south: 20.858414,
    west: -102.149631,
    east: -101.09299,
  };

  var propiedades6 = {
    center: coordenadas,
    zoom: 12,
    restriction: {
      latLngBounds: limites,
      strictBounds: false,
    },
  };
  var mapa6 = new google.maps.Map(
    document.getElementById("mapa6"),
    propiedades6
  );
}
