import { leerJsonServicios } from "./servicios.js";

const main = () => {
    const cv = document.getElementById("cv");
    const menuHome = document.getElementById("menu-home");
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

    const proyectosHTML = (data) => {
        let div = "";
    
        data.forEach((item) => {
            div += `
            <div class="swiper-slide">
                <div class="row" style="border: 1px solid black;">
                    <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <img src="${item.imagen}" alt="${item.titulo}">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="text-left">
                            <h6>${item.titulo}</h6>
                            <p>${item.descripcion}</p>
                            <span>${item.tecnologias}</span>
                        </div>
                    </div>
                </div>
            </div>`;
        });
    
        document.querySelector(".swiper-wrapper").innerHTML = div;
    
        // **Reinicializar Swiper después de agregar contenido**
        setTimeout(() => {
            new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        }, 100); // Pequeño retraso para asegurar que el DOM se haya actualizado
    };
    
    leerJsonServicios("./json/proyectos.json", proyectosHTML);

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