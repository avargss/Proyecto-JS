/* function showHotelData(hoteles) {

    let tabla = document.querySelector("table");

    hoteles.forEach(element => {

        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${element.id}</td>
        <td>${element.nombre}</td>
        <td>${element.direccion}</td>
        <td>${element.provincia}</td>
        <td>${element.aforo}</td>
        <td>${element.piscina ? "Sí" : "No"}</td>
        <td>${element.latitud}</td>
        <td>${element.longitud}</td>
        <td class="text-center">
                <button class="btn btn-custom-warning me-2">
                    <i class="fas fa-pencil-alt"></i> Editar
                </button>
                <button class="btn btn-custom-danger">
                    <i class="fas fa-trash-alt"></i> Eliminar
                </button>
        </td>
        `;

        tabla.appendChild(tr);

    });
}

async function loadHoteles() {
    try {
        const hoteles = await Hotel.doGet();
        showHotelData(hoteles);

    } catch (error) {
        console.error("No hay hoteles registrados en el sistema", error);

    }
}

loadHoteles();

async function getLastID() {

    try {
        const hoteles = await Hotel.doGet();
        if (hoteles.length === 0) return 0; // Si no hay hoteles en el json, la id comienza desde 0
        let lastHotel = hoteles[hoteles.length - 1];
        return lastHotel.id;

    } catch (error) {
        console.error("Error al obtener la última ID", error);
        return 0; // Si salta error y no pilla la id, comienza desde 0.
    }
}

function saveNewHotelData(newHotel) {

    console.log("Guardando nuevo hotel:", newHotel);
    // Aquí irá la lógica para guardar el nuevo hotel en el archivo hoteles.json.
    console.log(typeof newHotel);

}

document.getElementById("saveButton").addEventListener("click", async (event) => {
    event.preventDefault();

    let nombre = document.getElementById("nombre");
    let direccion = document.getElementById("direccion");
    let provincia = document.getElementById("provincia");
    let aforo = document.getElementById("aforo");
    let piscina = document.getElementById("piscina");
    let latitud = document.getElementById("latitud");
    let longitud = document.getElementById("longitud");

    try {
        let lastID = await getLastID();
        let newAutoID = lastID + 1;

        // Creo el nuevo objeto de hotel
        let newHotel = new Hotel(newAutoID, nombre.value, direccion.value, provincia.value, aforo.value, piscina.value, latitud.value, longitud.value)

        saveNewHotelData(newHotel);

        alert("Nuevo hotel añadido correctamente.");

        // Esto sirve para que una vez que el código llega aquí, me redirige al html que le pongo.
        window.location.href = "listaHoteles.html";

    } catch (error) {
        console.error("Error al añadir el nuevo hotel:", error);
        alert("Hubo un problema al añadir el hotel.");
    }

}); */