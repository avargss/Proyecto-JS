function showHotelData(hoteles) {

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
        const hoteles = await Hotel.loadData();
        showHotelData(hoteles);

    } catch (error) {
        console.error("No hay hoteles registrados en el sistema", error);

    }
}

loadHoteles();

