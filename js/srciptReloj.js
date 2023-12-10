const mostrarReloj = () => {
    let hora =document.querySelector(".hora");
    let fecha =document.querySelector(".fecha");
    let frase =document.querySelector(".frase");
    let newDate = new Date();
    hora.innerHTML = `${ponerCero(newDate.getHours())} :  ${ponerCero(newDate.getMinutes())} : ${ponerCero(newDate.getSeconds())}`;
    fecha.innerHTML = `${newDate.toLocaleDateString()}`;
    let frases= newDate.getHours()
    if (frases > 22) {
        frase.innerHTML = `<p>Buenas noches, es hora de pensar en parar y descansar</p>`
    } else {
        frase.innerHTML = `Esto ya son horas extras, ... piensa en parar pronto`
    }

}

//intervalor de tiempo, en milisegundos, en el que quiero que se ejecute "reloj."

let crono = setInterval(mostrarReloj,1000)

//Poner cero a los digitos menores de 10.

const ponerCero = numero => {
    return numero <10 
        ? "0" + numero 
        : numero
}