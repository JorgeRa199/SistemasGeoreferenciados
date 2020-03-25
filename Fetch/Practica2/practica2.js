var paises = document.getElementById("paises");

fetch("https://corona.lmao.ninja/countries")
    .then(function (response) {
        response.json().then(function (datos) {
            datos.forEach(registro => {
                console.log(registro);
                let li = document.createElement("li");
                let pais = document.createElement("span");
                let casos = document.createElement("span");

                li.className = "list-group-item";
                li.setAttribute("id", registro.country);

                pais.innerHTML = registro.country + " &emsp;";
                casos.textContent = registro.cases;
                casos.className = "badge badge-primary badge-pill";
                li.appendChild(pais);
                li.appendChild(casos);
                paises.appendChild(li);

                li.addEventListener("mouseover", function () {
                    li.className = "list-group-item active";
                });
                li.addEventListener("mouseout", function () {
                    li.className = "list-group-item";
                });

            });
        });
    })
    .catch(function (error) {
        console.log(
            "Hubo un problema con la petición Fetch:" + error.message
        );
    });