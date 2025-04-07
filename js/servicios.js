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

/*
   {
        "nombre": "Dota 2",
        "real": "0",
        "empresa": "",
        "img": "../img/proyectos/proyecto_dota2.jpg",
        "git": "https://github.com/kevin2561/dota2",
        "pagina": "",
        "descripcion": "Página web dedicada a Dota 2, desarrollada para combinar mi pasión por el juego con el aprendizaje de JavaScript puro y jQuery. Cuenta con una interfaz intuitiva y elementos dinámicos.",
        "herramientas": [
            [
                "JavaScript",
                "fa-brands fa-js"
            ],
            [
                "Jquery",
                "devicon-jquery-plain"
            ],
            [
                "Bootstrap",
                "fa-brands fa-bootstrap"
            ],
            [
                "HTML",
                "fa-brands fa-html5"
            ],
            [
                "CSS",
                "fa-brands fa-css3-alt"
            ]
        ]
    },
    
*/ 