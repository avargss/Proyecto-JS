class Empleado {
    constructor(id_empleado, nombre, apellidos, edad, fecha_nacimiento, id_hotel) {
        this.id_empleado = id_empleado;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.fecha_nacimiento = fecha_nacimiento;
        this.id_hotel = id_hotel;
    }

    // GET 

    /* static async loadData() {
        const response = await fetch("../../assets/empleados.json");
        if (!response.ok) throw new Error("DATOS NO CARGADOS")
        const datos = await response.json();

        // Convertir cada entrada en una instancia de Empleado
        return datos.map(
            (e) =>
                new Empleado(
                    e.id_empleado,
                    e.nombre,
                    e.apellidos,
                    e.edad,
                    e.fecha_nacimiento,
                    e.id_hotel
                )
        );
    } */

    // GET ID



    // PUT



    // POST



    // DELETE
}

