class Empresa {
    constructor(id, nombre, direccion, provincia, aforo, piscina, coordenadas) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.provincia = provincia;
        this.aforo = aforo;
        this.piscina = piscina;
        this.coordenadas = coordenadas;
    }
    
    hotelesJSON() {
        return fetch("hoteles.json")
            .then(Response => Response.json()) // Convierte la respuesta generada en un json
            .then(data => data.libros) // Extrae la propiedad libros
            .catch(error => console.error(`Error al cargar el archivo json`, error));
    }

}