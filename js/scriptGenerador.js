
const botonGenerar = document.getElementById("botonGenerar");
let mayusculas= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let minusculas= "abcdefghijklmnopqrstuvwxyz";
let numeros= "0123456789";
let simbolos =  "!@#$%^&*()-_=+";
let todoJunto = mayusculas + minusculas + numeros + simbolos; 

botonGenerar.addEventListener("click", () => {
    let length = document.getElementById("length").value;
    let longitud= parseInt(length); //Parsear y convertirlo en numero entero, ya que viene como texto
    if (longitud < 12 || longitud > 50) {
        alert("La solicitud de generación de contraseña debe comprenderse entre 12 y 50 caracteres. Reintroduzca nuevo dígito que cumpla estos parámetros.");
        return;
    }
    let contraseña = "";
    let resultado = document.querySelector(".resultado")
        for (let i=0; i <= longitud; i++) {
            //charAt() metodo de String que localiza caracteres de una variable String como si fuese el índice de un array
            contraseña += todoJunto.charAt(Math.floor(Math.random() * todoJunto.length));
            console.log(contraseña)
        }
        resultado.innerHTML= `${contraseña}`;

    })
