
// Mi configuraciòn de firebase
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

const geopointsLista = document.querySelector("#lista");

function renderProducts(doc) {

  let li = document.createElement("li");
  let coords = document.createElement("span");

  //Crear boton personalizado con icono localizacion
  let localizacion = document.createElement("button");
  let icon = document.createElement("i");
  localizacion.className = "btn btn-info";
  icon.className = "fa fa-map-marker";
  localizacion.appendChild(icon);

  //Crear boton personalizado con icono borrar
  let borrar = document.createElement("button");
  let icon2 = document.createElement("i");
  borrar.className = "btn btn-info";
  icon2.className = "fa fa-trash";
  borrar.appendChild(icon2);

  var Latitutd = JSON.stringify(doc.data().coordenadas.O);
  var Longitud = JSON.stringify(doc.data().coordenadas.F);
  coords.textContent = Latitutd + "," + Longitud;

  li.className = "list-group-item";
  li.setAttribute("id", doc.id);

  li.appendChild(localizacion);
  li.appendChild(borrar);
  li.appendChild(coords);

  geopointsLista.appendChild(li);

  li.addEventListener("mouseover", function(){
    li.className = "list-group-item active";
  });
  li.addEventListener("mouseout", function(){
    li.className = "list-group-item";
  }); 

  //EVENTO PARA BORRAR DE FIREBASE UN DATO
  borrar.addEventListener("click", (e) => {
    let id = e.target.parentElement.getAttribute("id");
    db.collection("Ubucaciones").doc(id).delete();
  });

  //EVENTO PARA COLOCAR MARCADOR EN MAPA
  localizacion.addEventListener("click", (e) => {
    let id = e.target.parentElement.getAttribute("id");

    firebase.firestore().collection("Ubucaciones").doc(id).get().then((docRef) => {
      var latMarker = (JSON.stringify(doc.data().coordenadas.O));
      var longMarker = (JSON.stringify(doc.data().coordenadas.F));

      var coordenadasMarcador = {
        lat: parseFloat(latMarker),
        lng: parseFloat(longMarker)
      }

      colocarMarcador(coordenadasMarcador);
    }).catch((error) => { console.log(error); })

  });

}

function mouseOverList() {
  document.getElementById("demo").style.color = "red";
}

function mouseOutList() {
  document.getElementById("demo").style.color = "black";
}

//SERVICE WORKER
db.collection("Ubucaciones").onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    if (change.type == "added") {
      renderProducts(change.doc);
    } else if (change.type == "removed") {
      console.log(change.doc.id);
      let valorid = document.getElementById(change.doc.id);
      lista.removeChild(valorid);
    }
  });
});

//FUNCION PARA PONER MARCADORES EN MAPA
function colocarMarcador(coords) {


  var map = new google.maps.Map(
    document.getElementById('mapa'),
    {
      center: coords,
      zoom: 15
    }
  );

  var marcador = new google.maps.Marker({ position: coords, map: map });
}

//INICIAR MAPA CUANDO CARGA PAGINA
function iniciaMapa() {
  var coordenadas = {
    lat: 21.152639,
    lng: -101.711598
  }

  var map = new google.maps.Map(
    document.getElementById('mapa'),
    {
      center: coordenadas,
      zoom: 15
    }
  );

  var marcador2 = new google.maps.Marker({ position: coordenadas, map: map });
}

