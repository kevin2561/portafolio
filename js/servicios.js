export const leerJsonServicios = async (url, funcionHTML) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error ${response.status}: No se pudo cargar el JSON`);
        }
        const data = await response.json();
        funcionHTML(data);
        console.log("Datos cargados correctamente:", data);
    } catch (error) {
        console.error("Error al cargar el JSON:", error);
    }
};
// .d-flex { 
//     display: flex; 
//     align-items: center; /* Alinea verticalmente todo */
//     flex-wrap: wrap; /* Permite que los íconos bajen si no caben */
//     gap: 10px; /* Espacio entre "Herramientas:" y los íconos */
// }

// .proyectos-etiquetas {
//     white-space: nowrap; /* Evita que "Herramientas:" se divida en varias líneas */
// }

// .icons-proyectos {
//     display: flex;
//     gap: 8px; 
//     flex-wrap: wrap; 
//     align-items: center;
// }