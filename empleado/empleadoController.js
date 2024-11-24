function showData() {
    let empleado = new Empleado;

    let data = empleado.empleadosJSON().then(empleados);
    let tabla = document.querySelector("table");

    console.log(data);
    console.log(typeof data);
    
    

    data.forEach(element => {

        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${element.id_empleado}</td>
        <td>${element.nombre}</td>
        <td>${element.apellidos}</td>
        <td>${element.edad}</td>
        <td>${element.fecha_nacimiento}</td>
        <td>${element.id_hotel}</td>
        `;
        
        tabla.appendChild(tr);

    });

}

showData();