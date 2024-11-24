function showData(empleados) {

    let tabla = document.querySelector("table");

    empleados.forEach(element => {

        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${element.id_empleado}</td>
        <td>${element.nombre}</td>
        <td>${element.apellidos}</td>
        <td>${element.edad}</td>
        <td>${element.fecha_nacimiento}</td>
        <td>${element.id_hotel}</td>
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

async function loadEmpleados() {
    try {
        const empleados = await Empleado.loadData();
        showData(empleados);

    } catch (error) {
        console.error("nanai", error);

    }
}

loadEmpleados();