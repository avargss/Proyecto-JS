class Hotel {
    constructor(id, nombre, direccion, provincia, aforo, piscina, latitud, longitud) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.provincia = provincia;
        this.aforo = aforo;
        this.piscina = piscina;
        this.latitud = latitud;
        this.longitud = longitud;
    }

    // GET 

    static async doGet() {
        const response = await fetch("../../assets/hoteles.json");
        if (!response.ok) throw new Error("DATOS NO CARGADOS")
        const datos = await response.json();

        // Convertir cada entrada en una instancia de Hotel
        return datos.map(
            (h) =>
                new Hotel(
                    h.id,
                    h.nombre,
                    h.direccion,
                    h.provincia,
                    h.aforo,
                    h.piscina,
                    h.latitud,
                    h.longitud
                )
        );
    }

    // GET ID

    static async filterData() {

    }

    // PUT

    static async doPut() {

    }

    // POST

    static async doPost() {

    }

    // DELETE

    static async doDelete() {

    }

}