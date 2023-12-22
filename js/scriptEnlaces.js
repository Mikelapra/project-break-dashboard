let registrarURL = document.getElementById("registrarURL")
let contenedorLinks =document.getElementById("contenedorLinks")
let enlacesGuardados = JSON.parse(localStorage.getItem("enlace"))|| [];



registrarURL.addEventListener("click", () => {
    let nombreInput=document.getElementById("nombreInput").value;
    let enlaceInput =document.getElementById("enlaceInput").value;
    enlacesGuardados.push({name: nombreInput, url: enlaceInput});
    localStorage.setItem("enlace",JSON.stringify(enlacesGuardados))
    contenedorLinks.innerHTML = "";
    printuser()


})

function printuser () {
    contenedorLinks.innerHTML = "";
    enlacesGuardados.forEach ((element,index) => {
    contenedorLinks.innerHTML += `<li class="enlaceGuardado"><a href=${element.url} target="_blank" rel="noopener noreferrer">${element.name}</a>
    <button class="eliminar" data-index="${index}" >X</button></li>`
    })
    
}

contenedorLinks.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("eliminar")){
        const urlElimanada = evento.target.getAttribute("data-index");
        enlacesGuardados.splice(urlElimanada,1);
        printuser (enlacesGuardados);
        localStorage.setItem("enlace",JSON.stringify(enlacesGuardados))
    }

})

printuser();