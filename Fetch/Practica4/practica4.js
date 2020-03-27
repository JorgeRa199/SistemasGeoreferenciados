var coordenadas = {
    lat: 0,
    lng: 0
};

var propiedades = {
    center: coordenadas,
    zoom: 2
};

function iniciaMapa() {
    var styledMapType = new google.maps.StyledMapType([
        {
            elementType: "geometry",
            stylers: [
                {
                    color: "#1d2c4d"
                }
            ]
        },
        {
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#8ec3b9"
                }
            ]
        },
        {
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#1a3646"
                }
            ]
        },
        {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        },
        {
            featureType: "administrative.country",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#4b6878"
                }
            ]
        },
        {
            featureType: "administrative.land_parcel",
            elementType: "labels",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        },
        {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#64779e"
                }
            ]
        },
        {
            featureType: "administrative.province",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#4b6878"
                }
            ]
        },
        {
            featureType: "landscape.man_made",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#334e87"
                }
            ]
        },
        {
            featureType: "landscape.natural",
            elementType: "geometry",
            stylers: [
                {
                    color: "#023e58"
                }
            ]
        },
        {
            featureType: "poi",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
                {
                    color: "#283d6a"
                }
            ]
        },
        {
            featureType: "poi",
            elementType: "labels.text",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#6f9ba5"
                }
            ]
        },
        {
            featureType: "poi",
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#1d2c4d"
                }
            ]
        },
        {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#023e58"
                }
            ]
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#3C7680"
                }
            ]
        },
        {
            featureType: "road",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                {
                    color: "#304a7d"
                }
            ]
        },
        {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        },
        {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#98a5be"
                }
            ]
        },
        {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#1d2c4d"
                }
            ]
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
                {
                    color: "#2c6675"
                }
            ]
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#255763"
                }
            ]
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#b0d5ce"
                }
            ]
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#023e58"
                }
            ]
        },
        {
            featureType: "road.local",
            elementType: "labels",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        },
        {
            featureType: "transit",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        },
        {
            featureType: "transit",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#98a5be"
                }
            ]
        },
        {
            featureType: "transit",
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#1d2c4d"
                }
            ]
        },
        {
            featureType: "transit.line",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#283d6a"
                }
            ]
        },
        {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [
                {
                    color: "#3a4762"
                }
            ]
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                {
                    color: "#0e1626"
                }
            ]
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#4e6d70"
                }
            ]
        }
    ],
        { name: 'Styled Map' });
    var icono = {
        url: "https://interbolivia.com/wp-content/uploads/2018/12/pulse.gif",
        scaledSize: new google.maps.Size(15, 15),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    }
    fetch("paises.json")
        .then(function (response) {
            response.json().then(function (datos) {
                const map = new google.maps.Map(
                    document.getElementById("map"),
                    propiedades, {
                    mapTypeControlOptions: {
                        mapTypeIds: ['styled_map']
                    }
                }
                );
                map.mapTypes.set('styled_map', styledMapType);
                map.setMapTypeId('styled_map');

                console.log(datos);

                datos.forEach(marcador => {
                    fetch("https://corona.lmao.ninja/countries").then(function (
                        respuesta
                    ) {
                        respuesta.json().then(function (datospaises) {
                            datospaises.forEach(registro => {
                                if (registro.country == marcador.CountryName) {
                                    var información =
                                        "<strong>País:</strong> " +
                                        registro.country +
                                        "<br><strong>Casos:</strong> " +
                                        registro.cases +
                                        "<br><strong>Nuevos hoy:</strong> " +
                                        registro.todayCases +
                                        "<br><strong>Muertes:</strong> " +
                                        registro.deaths +
                                        "<br><strong>Muertes Hoy:</strong> " +
                                        registro.todayDeaths +
                                        "<br><strong>Recuperados:</strong> " +
                                        registro.recovered +
                                        "<br><strong>Activos:</strong> " +
                                        registro.active +
                                        "<br><strong>Críticos:</strong> " +
                                        registro.critical +
                                        "<br><strong>Casos por millón:</strong> " +
                                        registro.casesPerOneMillion;

                                    var infowindow = new google.maps.InfoWindow({
                                        content: información
                                    });

                                    let marker = new google.maps.Marker({
                                        map: map,
                                        icon: icono,
                                        position: new google.maps.LatLng(
                                            marcador.CapitalLatitude,
                                            marcador.CapitalLongitude
                                        ),
                                        title: marcador.CountryName + registro.cases
                                    });

                                    marker.addListener("click", function () {
                                        infowindow.open(map, marker);
                                    });
                                }
                            });
                        });
                    });
                });
            });
        })
        .catch(function (error) {
            console.log(
                "Hubo un problema con la petición Fetch:" + error.message
            );
        });
}