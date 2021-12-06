'use-strict'

const numeroProyectos   = 3;
const grande            = document.querySelector(".grande")
const punto             = document.querySelectorAll(".punto")

// cuando hago click en cada punto
    // saber la posicion de ese punto
    // aplicar un transform translateX al grande
    // quitar la clase activo de todos los puntos
    // añadir la clase activo al punto que hemos hecho click

punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener("click", () => {
        
        let posicion = i;
        let operacion = posicion * - (100/3);

        grande.style.transform = `translateX(${operacion}%)`

        punto.forEach( (cadaPunto, i) => {
            punto[i].classList.remove("activo");
        })
        punto[i].classList.add("activo");
        // si la posicion es 0, el transform es 0
        // si la posicion es 1, el transform es -50%
        // operacion = posicion * -50

    })
});