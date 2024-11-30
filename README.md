# Gestión de Hoteles y Empleados

Este proyecto es una aplicación web diseñada para gestionar hoteles y empleados, siguiendo el patrón de diseño **MVC**. Incluye vistas estilizadas con **Bootstrap** y usa archivos **JSON** para la gestión inicial de datos.

## 🚀 Funcionalidades Actuales

### 📄 Listado de Instancias
- **Hoteles**: Clase `listaHoteles` que muestra una lista interactiva de hoteles.
- **Empleados**: Clase similar para mostrar la lista de empleados.

### 🛠 CRUD Incompleto
- Implementación inicial de las vistas del CRUD para ambas instancias (`Hoteles` y `Empleados`).
  - **Crear**
  - **Leer**
  - **Actualizar**
  - **Eliminar**

> **Nota**: Estas vistas aún no tienen funcionalidad completa, pero sirven como base para futuras integraciones.

### 💡 Tecnologías Utilizadas
- **Frontend**:
  - HTML5
  - CSS3
  - Bootstrap 5
  - JavaScript (Vanilla)
- **Datos**:
  - Archivos JSON (`hoteles.json`, `empleados.json`)
- **Planificación futura**:
  - Angular para la implementación completa del CRUD y gestión de estados.
  - Consumo de APIs para interactuar con los datos.

## 🏗 Estructura del Proyecto

/assets 

    ├── images/ # Imágenes del proyecto 

    ├── hoteles.json # Datos iniciales de hoteles 

    └── empleados.json # Datos iniciales de empleados

/empresa/ 

    ├── modelo/ # Modelos relacionados con hoteles 

    ├── vista/ # Vistas relacionadas con hoteles 

    └── controlador/ # Controladores relacionados con hoteles 

/empleado/ 

    ├── modelo/ # Modelos relacionados con empleados 

    ├── vista/ # Vistas relacionadas con empleados 

    └── controlador/ # Controladores relacionados con empleados 

/css 

    └── main.css # Estilos personalizados


### Archivos clave
- `hoteles.json`: Archivo JSON con datos de hoteles.
- `empleados.json`: Archivo JSON con datos de empleados.
- `listaHoteles.js`: Controlador para la lista de hoteles.
- `listaEmpleados.js`: Controlador para la lista de empleados.
- `index.html`: Página principal del proyecto.

## 🌟 Características Planeadas
- Implementación completa del CRUD (Creación, Lectura, Actualización y Eliminación) para hoteles y empleados.
- Consumo de datos dinámicos mediante una API.
- Uso de Angular para la gestión de vistas y funcionalidades.
- Validaciones avanzadas y optimización de interfaz.

## 🛠 Requisitos
- Navegador web moderno (compatible con ES6+).
- Servidor local (opcional) para pruebas iniciales.

## 🚧 Cómo Ejecutar el Proyecto
1. Clona el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git

2. Abre el archivo index.html en tu navegador para explorar la interfaz actual.

3. Navega entre las vistas de hoteles y empleados.

## 📋 Notas del Desarrollo
- El patrón **MVC** facilita la escalabilidad y mantenimiento del proyecto.
- Los datos iniciales están almacenados en los archivos `hoteles.json` y `empleados.json`.
- Bootstrap se usa para un diseño consistente y atractivo.