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
// https://codesandbox.io/p/sandbox/yl6ddq?file=%2Findex.html%3A10%2C1-11%2C1.



// .swiper-button-prev:after {
//     content: "";
//     position: absolute;
//     left: -10px;
// }

// .swiper-button-next:after {
//     content: "";
//     position: absolute;
//     right: -10px;
// }

// .swiper-button-prev,
// .swiper-button-next {
//     width: initial;
//     height: initial;
//     font-size: 3rem;
//     color: var(--second-color);
//     display: none;
// }

// .swiper-button-prev {
//     left: 0;
// }

// .swiper-button-next {
//     right: 0;
// }

// .swiper-pagination-bullet {
//     background-color: hsl(212, 32%, 40%);
//     opacity: 1;
// }

// .swiper-pagination-bullet-active {
//     background-color: var(--second-color);
// }







// ---------------
// <div class="swiper-slide">
// <div class="row" style="border: 1px solid black;">
//     <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">

//         <div>
//             <img src="img/proyectos/proyecto_appmusica.jpg" alt="">
//         </div>
//     </div>

//     <div class="col-md-6">
//         <div class="text-left">
//             <h6>titulo</h6>
//             <p>descpricion</p>
//             <span>tecnologias</span>
//         </div>
//     </div>

// </div>
// </div>

// <div class="swiper-slide">
// <div class="row">
//     <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">

//         <div>
//             <img src="img/proyectos/proyecto_appmusica.jpg" alt="">
//         </div>
//     </div>
//     <div class="col-md-6">
//         <div class="text-left">
//             <h6>titulo</h6>
//             <p>descpricion</p>
//             <span>tecnologias</span>
//         </div>
//     </div>

// </div>
// </div>