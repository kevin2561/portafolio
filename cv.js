
let habilidadesArreglo = [
    { nombre: "JAVASCRIPT", nivel: "Intermediate", imagen: "javascript" },
    { nombre: "HTML", nivel: "Intermediate", imagen: "html", },
    { nombre: "CSS", nivel: "Intermediate", imagen: "css" },
    { nombre: "BOOTSTRAP", nivel: "Intermediate", imagen: "bootstrap" },
    { nombre: "REACT", nivel: "Essential", imagen: "react" },
    { nombre: "MySQL", nivel: "Essential", imagen: "mysql" },
    { nombre: "INGLÉS", nivel: "Essential", imagen: "ingles", }
]

let habilidadesBlandas = [
    { nombre: "Communication", imagen: "comunicacion" },
    { nombre: "Teamwork", imagen: "trabajo-equipo" },
    { nombre: "Patience", imagen: "paciencia" },
    { nombre: "Initiative", imagen: "iniciativa" },
    { nombre: "Responsibility", imagen: "responsabilidad" },
    { nombre: "eager to learn", imagen: "aprender" },


]
//console.log(habilidadesArreglo)

let contenedorHabilidadesBlandas = document.getElementById("habilidadesBlnadas")

function llenarHabilidadesBlandas(array, destino) {
    let columna = "<div class='row row-cols-1 row-cols-md-3 g-4'>"
    for (let i = 0; i < array.length; i++) {
        columna += "<div class='col'>"
        columna += "<div id='card-hBlandas' class='card h-100'>"
        columna += "<h5 class='card-title'>" + array[i].nombre + "</h5>"
        columna += "<div class='card-body'>"
        columna += "<img src='img/" + array[i].imagen + ".jpg' class='card-img-top' alt=' " + array[i].nombre + " ' title='" + array[i].nombre + "'>"

        columna += "</div></div></div>"
        destino.innerHTML = columna
    }
    return columna
}
//llenarHabilidades(habilidadesArreglo, contenedorHabilidades)
llenarHabilidadesBlandas(habilidadesBlandas, contenedorHabilidadesBlandas)

let cajasProyectos = document.querySelectorAll("#proyectos .conteneddor-proyectos");

//    background-color: #00000092;

for (let i = 0; i < cajasProyectos.length; i++) {
    cajasProyectos[i].addEventListener("mouseenter", function () {
        let crearDescripcion = document.createElement("div")
        crearDescripcion.setAttribute("class", "descripcion")
        crearDescripcion.setAttribute("id", i)
        let idDescripcion = Number(crearDescripcion.getAttribute("id"))

        let tituloDescripcion = document.createElement("h1")
        crearDescripcion.append(tituloDescripcion)

        let textoDescripcion = document.createElement("p")
        crearDescripcion.append(textoDescripcion)

        let contenedorIconos = document.createElement("div")
        contenedorIconos.setAttribute("id", "contenedor-iconos")
        crearDescripcion.appendChild(contenedorIconos)

        let cajaIcono1 = document.createElement("div")
        cajaIcono1.setAttribute("class", "iconos")
        contenedorIconos.append(cajaIcono1)

        let cajaIcono2 = document.createElement("div")
        cajaIcono2.setAttribute("class", "iconos")
        contenedorIconos.append(cajaIcono2)


        switch (idDescripcion) {
            case 0:
                tituloDescripcion.innerText = "The Simpson"
                textoDescripcion.innerText = "A Simpsons website which was created since I really liked the series since I was a child and it was also a good way to practice my knowledge of js and the React framework that I used to create this website."
                cajaIcono1.innerHTML = "<a href='https://github.com/kevin2561/theSimpson' target='_blank' title='Ver Código'>" + "<i class='bi bi-github'>" + "</i>" + "</a>"
                cajaIcono2.innerHTML = "<a href='https://musical-peony-5c424d.netlify.app/'  target='_blank' title='Ver Página'>" + "<i class='bi bi-globe'>" + "</i>" + "  </a>"
                break;

            case 1:
                tituloDescripcion.innerText = "Dota 2"
                textoDescripcion.innerText = "A Dota 2 website, I believe this website because I loved the game, it was one of the games that entertained me the most and it was also a good way to practice with js since on this page it is made with pure js and a bit of jQuery."
                cajaIcono1.innerHTML = "<a href='https://github.com/kevin2561/dota2' target='_blank' title='Ver Código'>" + "<i class='bi bi-github'>" + "</i>" + "</a>"
                cajaIcono2.innerHTML = "<a href='https://dota2practica.000webhostapp.com/'  target='_blank' title='Ver Página'>" + "<i class='bi bi-globe'>" + "</i>" + "  </a>"
                break;

            case 2:
                tituloDescripcion.innerText = "App Music"
                textoDescripcion.innerText = "A small app that Brendia can make as an mp3 in which you can listen to a list of songs."
                cajaIcono1.innerHTML = "<a href='https://github.com/kevin2561/appMusica' target='_blank' title='Ver Código'>" + "<i class='bi bi-github'>" + "</i>" + "</a>"
                cajaIcono2.innerHTML = "<a href=''  target='_blank' title='Ver Página'>" + "<i class='bi bi-globe'>" + "</i>" + "  </a>"
                break;

            case 3:
                tituloDescripcion.innerText = "AIRLINES"
                textoDescripcion.innerText = "This page is a bit different since it was made in a project for the classes in which we used Angular as a framework and it was a good way of working and also it was done as a team so it shows the work done by everyone."
                cajaIcono1.innerHTML = "<a href='#' target='_blank' title='Ver Código'>" + "<i class='bi bi-github'>" + "</i>" + "</a>"
                cajaIcono2.innerHTML = "<a href='http://vivamundo.oplevperu.dk/'  target='_blank' title='Ver Página'>" + "<i class='bi bi-globe'>" + "</i>" + "  </a>"
                break;
        }

        cajasProyectos[i].appendChild(crearDescripcion)
    })
    cajasProyectos[i].addEventListener("mouseleave", function () {
        let cajasDescriptivas = document.querySelectorAll(".descripcion");
        cajasDescriptivas.forEach(element => {
            element.remove()

        });


    })


}

let contenedorVueltas = document.getElementsByClassName("contenedor-vuletas");
let cajasVueltas = document.querySelectorAll(".caja-vueltas");


for (let i = 0; i < cajasVueltas.length; i++) {

    let img
    img = "<img src=' img/" + habilidadesArreglo[i].imagen + ".jpg' alt='' >"

    let front = document.createElement("div")
    front.classList.add("front")
    front.innerHTML = img
    cajasVueltas[i].append(front)

    let back = document.createElement("div")
    back.classList.add("back")

    let contenidoBack = document.createElement("div")
    contenidoBack.classList.add("contenido-back")
    let descripcion = "<h1>" + habilidadesArreglo[i].nombre + "</h1>"
    descripcion += "<h4> Level: " + habilidadesArreglo[i].nivel + "<h4>"
    contenidoBack.innerHTML = descripcion

    back.appendChild(contenidoBack)
    cajasVueltas[i].append(back)

    cajasVueltas[i].addEventListener("mouseenter", function (e) {
        e.preventDefault()
        cajasVueltas[i].style.transform = "rotateY(180deg)"
        back.style.display = "block"
        front.style.display = "none"

    })

    cajasVueltas[i].addEventListener("mouseleave", function (e) {
        e.preventDefault()
        cajasVueltas[i].style.transform = "rotateY(0deg)"
        back.style.display = "none"
        front.style.display = "block"

    })
}
//https://www.youtube.com/shorts/MEuoG1DnEyM