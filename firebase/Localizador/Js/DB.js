
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

  function renderProducts(doc){
      
        
        let li = document.createElement("li");
        let latit = document.createElement("span");
        let longit = document.createElement("span");

        

        latit.textContent = doc.data().nombre;
        longit.textContent = doc.data().codigo;

        li.setAttribute("id", doc.id)

        
        li.appendChild(nombre);
        li.appendChild(codigo);

        productosLista.appendChild(li);
      
  }

  function addGeopoint(){
    db.collection("Ubucaciones").add(
        {
          coordenadas : new firebase.firestore.GeoPoint(latitude, longitude)
        }
      );
  }


  db.collection("productos").onSnapshot( snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change =>{
      if (change.type == "added") {
        renderProducts(change.doc);
      }else if(change.type == "removed"){
        console.log(change.doc.id);
        let valorid = document.getElementById(change.doc.id);
        lista.removeChild(valorid);
      }
    });
  });

