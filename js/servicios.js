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
