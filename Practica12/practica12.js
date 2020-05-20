function iniciaMapa() {
  var coordenadas = { lat: 21.152639, lng: -101.711598 };

  var propiedades = {
    center: coordenadas,
    zoom: 12,
  };

  var mapa1 = new google.maps.Map(
    document.getElementById("mapa1"),
    propiedades
  );

  var marker = new google.maps.Marker({
    position: coordenadas,
    map: mapa1,
  });

  marker.addListener("click", function () {
    mapa1.setZoom(8);
    mapa1.setCenter(marker.getPosition());
  });

  /*     MAPA2       */

  var mapa2 = new google.maps.Map(
    document.getElementById("mapa2"),
    propiedades
  );

  var marker2 = new google.maps.Marker({
    position: coordenadas,
    map: mapa2,
  });

  mapa2.addListener("center_changed", function () {
    window.setTimeout(function () {
      mapa2.panTo(marker2.getPosition());
    }, 3000);
  });

  /*     MAPA3       */

  var mapa3 = new google.maps.Map(
    document.getElementById("mapa3"),
    propiedades
  );

  var infowindow = new google.maps.InfoWindow({
    content: "Cambia el zoom",
    position: coordenadas,
  });

  infowindow.open(mapa3);

  mapa3.addListener("zoom_changed", function () {
    infowindow.setContent("Zoom" + mapa3.getZoom());
  });

  /*     MAPA4      */

  var mapa4 = new google.maps.Map(
    document.getElementById("mapa4"),
    propiedades
  );

  mapa4.addListener("click", function (e) {
    console.log(e.latLng);

    estableceMarcador(e.latLng);
  });

  function estableceMarcador(latLng) {
    var marker = new google.maps.Marker({
      position: latLng,
      map: mapa4,
    });

    mapa4.panTo(latLng);
  }

  /*     MAPA5      */

  var mapa5 = new google.maps.Map(
    document.getElementById("mapa5"),
    propiedades
  );

  var infowindow = new google.maps.InfoWindow({
    content: "Haz click para obtener las coordenadas",
    position: coordenadas,
  });

  infowindow.open(mapa5);

  mapa5.addListener("click", function (evento) {
    infowindow.close();

    infowindow = new google.maps.InfoWindow({ position: evento.latLng });
    infowindow.setContent(evento.latLng.toString());
    infowindow.open(mapa5);
  });

  /*     MAPA6   */

  var mapa6 = new google.maps.Map(
    document.getElementById("mapa6"),
    propiedades
  );

  google.maps.event.addDomListener(mapa6, "click", function () {
    window.alert(" Se hizo click en el mapa");
  });

  var boton = document.getElementById("btnCentrar");
  google.maps.event.addDomListener(boton, "click", function () {
    mapa6.panTo(coordenadas);
  });
}
