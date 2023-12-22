const mostrarReloj = () => {
    let hora =document.querySelector(".hora");
    let fecha =document.querySelector(".fecha");
    let frase =document.querySelector(".frase");
    let newDate = new Date();
    hora.innerHTML = `${ponerCero(newDate.getHours())} :  ${ponerCero(newDate.getMinutes())} : ${ponerCero(newDate.getSeconds())}`;
    fecha.innerHTML = `${newDate.toLocaleDateString()}`;
    let frases= newDate.getHours()
    if (frases >= 0 && frases <= 7) {
        frase.innerHTML = "<p>Es hora de descansar. Apaga y sigue mañana</p>";
    } else if (frases > 7 && frases <= 12) {
        frase.innerHTML = "<p>Buenos días, desayuna fuerte y a darle al código</p>";
    } else if (frases > 12 && frases <= 14) {
        frase.innerHTML = "<p>Echa un rato más pero no olvides comer</p>";
    } else if (frases > 14 && frases <= 16) {
        frase.innerHTML = "<p>Espero que hayas comido</p>";
    } else if (frases > 16 && frases <= 18) {
        frase.innerHTML = "<p>Buenas tardes, el último empujón</p>";
    } else if (frases > 18 && frases <= 22) {
        frase.innerHTML = "<p>Esto ya son horas extras, piensa en parar pronto</p>";
    } else {
        frase.innerHTML = "<p>Buenas noches, es hora de pensar en parar y descansar</p>";
    }}

//intervalor de tiempo, en milisegundos, en el que quiero que se ejecute "reloj."

let crono = setInterval(mostrarReloj,1000)

//Poner cero a los digitos menores de 10.

const ponerCero = numero => {
    return numero <10 
        ? "0" + numero 
        : numero
}