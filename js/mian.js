import { leerJsonServicios } from "./servicios.js";

const main = () => {
    const cv = document.getElementById("cv");
    const menuHome = document.getElementById("menu-home");



    // const proyectos = [
    //     { nombre: "EDO", real: "1", empresa: "SECUAZ", img: "../img/proyectos/proyecto_edo.jpg", git: "", pagina: "https://restaurantnikkei.fr", descripcion: "Dessarrollo de una página web, con el objetivo de promover sus servicios de manera efectiva. La web fue creada utilizando WordPress y Elementor." },

    //     { nombre: "The Simpson", real: "0", empresa: "", img: "../img/proyectos/proyecto_simpson.jpg", git: "https://github.com/kevin2561/theSimpson", pagina: "https://musical-peony-5c424d.netlify.app/", descripcion: "Un sitio web de Los Simpsons que fue creado ya que me gustó mucho la serie desde que era un niño y también fue una buena manera de practicar mis conocimientos de js y el framework React que utilicé para crear este sitio web." },

    //     { nombre: "Dota 2", real: "0", empresa: "", img: "../img/proyectos/proyecto_dota2.jpg", git: "https://github.com/kevin2561/dota2", pagina: "", descripcion: "Una pagina web de Dota 2, creo en esta pagina porque me encanto el juego, fue uno de los juegos que mas me entretuvo y ademas fue una buena forma de practicar con js ya que en esta pagina esta hecha con js puro y un poco de jQuery." },

    //     { nombre: "App Musica", real: "0", empresa: "", img: "../img/proyectos/proyecto_appmusica.jpg", git: "https://github.com/kevin2561/appMusica", pagina: "", descripcion: "Una pequeña aplicación que Brendia puede convertir en mp3 en la que podrás escuchar una lista de canciones." },

    //     { nombre: "CRUD Gestor de Cuentas", real: "0", empresa: "", img: "../img/proyectos/proyecto_sistemacuentas.jpg", git: "https://github.com/kevin2561/CRUD-Gestor-de-Cuentas.git", pagina: "", descripcion: "Este proyecto fue creado para administrar las ventas del pequeño negocio de mi padre, permitiendo registrar, consultar y editar reportes de ventas. Utilicé HTML, CSS, JavaScript y MySQL para desarrollar la solución." },
    // ]

    // El icono que aparece en la imagen se parece mucho al de "signal" o "chart-bar" en FontAwesome. Algunos nombres que podrían coincidir son:



    let enlaces = ["sobre-mi", "tecnologias-main", "habilidades-blandas", "proyectos-main", "contacto-main"]




    const tecnologiasHTML2 = (tecnologias) => {
        let div = "";
        tecnologias.sort((a, b) => a.nombre.toLowerCase() < b.nombre.toLowerCase() ? -1
            : a.nombre.toLowerCase() > b.nombre.toLowerCase() ? 1
                : 0).map((tecnologia, index) => {
                    div += `<article class='contenedor-cd-tecnologia' data-nivel='${tecnologia.level}'   style='--icon-color: ${tecnologia.color};'>`
                    div += `<div class='contenedor-cd-svg'>${tecnologia.icono}</div>`
                    div += `<div><span  class='txt-nombre-nivel'>${tecnologia.nombre}</span></div>`
                    div += `</article>`


                })
        document.getElementById("carrusel-tecnologias").innerHTML = div;
        const cajaTecnologia = document.querySelectorAll("#carrusel-tecnologias .contenedor-cd-tecnologia")
        const cajaNombreNivel = document.querySelectorAll("#carrusel-tecnologias .txt-nombre-nivel")



        cajaTecnologia.forEach((element, index) => {
            const nombreTecnologia = cajaTecnologia[index].innerText;

            element.addEventListener('mouseover', function (e) {
                e.preventDefault();
                cajaNombreNivel[index].innerText = element.getAttribute('data-nivel');
                cajaNombreNivel[index].classList.add("mouseOver")
            });
            element.addEventListener("mouseout", function (e) {
                e.preventDefault();
                cajaNombreNivel[index].innerText = nombreTecnologia
                cajaNombreNivel[index].classList.remove("mouseOver")

            })
        });


    }

    leerJsonServicios("./json/tecnologias.json", tecnologiasHTML2);



    const habilidadBlandasHTML = (data) => {
        let div = "";
        const contenedorIconos = document.getElementById("contenedor-habilidades");
        data.map((habilidad) => {
            div += `<div class='caja-habilidades-blandas'> `
            div += `<img src='${habilidad.img}' alt='${habilidad.nombre}' /> `
            div += `<div class='habilidades-blandas-nombre'><i class='bi bi-${habilidad.icono}'></i><span>${habilidad.nombre}</span> </div>`
            div += `</div>`

        })

        contenedorIconos.innerHTML = div;

    }
    leerJsonServicios("./json/habilidadesblandas.json", habilidadBlandasHTML);




    const enlacesMenu = () => {
        let a = document.querySelectorAll("#enlaces-nav a");
        // console.log(a)
        a.forEach((enlace, index) => {
            enlace.addEventListener("click", (e) => {
                e.preventDefault(); // Evita que se agregue el # en la URL

                // Desplazar suavemente al elemento
                const targetElement = document.getElementById(enlaces[index]);
                console.log(enlace)
                targetElement.scrollIntoView({ behavior: "smooth" });
            });
        });
    }



    cv.addEventListener("click", function () {
        const url = "img/CV_AZUL4.pdf";
        window.open(url, '_blank');
    });
    menuHome.addEventListener("click", function (e) {
        e.preventDefault();
        // let bodyAltura = document.body.clientHeight
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })


    })


    const formContacto = () => {
        const resultado = document.getElementById('resultado');
        const contenedorResultado = document.getElementById('contenedor-resultado');

        document.getElementById('formulario-contacto').addEventListener('submit', function (event) {
            event.preventDefault();
            const serviceID = 'default_service';
            const templateID = 'template_pkll0dt';
            contenedorResultado.style.display = "block";


            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    resultado.innerText = "¡Mensaje Enviado Exitosamente!";
                    resultado.style.color = "#15fd15";
                    setTimeout(() => {
                        contenedorResultado.style.display = "none";
                        limpiarInputsFormulario();
                    }, 8000);

                }, (error) => {
                    resultado.innerText = "Hubo un error al enviar el mensaje. Intente nuevamente.";
                    resultado.style.color = "#ff0000";
                    console.log(error)
                    setTimeout(() => {
                        contenedorResultado.style.display = "none";
                        limpiarInputsFormulario();

                    }, 8000);

                });


        });
    }

    const limpiarInputsFormulario = () => {
        const inputs = document.querySelectorAll("#formulario-contacto .inputs");
        inputs.forEach((input) => {
            input.value = "";
        })

    }


    enlacesMenu();
    formContacto();




}
main();




