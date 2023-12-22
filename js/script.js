const fotos = [
    "./assets/bosque01.jpg",
    "./assets/bosque02.jpg",
    "./assets/bosque03.jpg",
    "./assets/bosque04.jpg",
    "./assets/bosque05.jpg",
    "./assets/bosque06.jpg",
    "./assets/bosque07.jpg",
    "./assets/bosque08.jpg",
    "./assets/bosque09.jpg",
    "./assets/bosque10.jpg",
  ]

  
  const fondos = () => {
    const aleatorio = Math.floor(Math.random() * 10);
    const cambiofondo = fotos[aleatorio]
    document.body.style.backgroundImage= `url(${cambiofondo})`
  }

  let temporizador = setInterval(fondos,15000)

fondos()