const buttonEnter = document.querySelector('.buttonG2')
let puntos = 0

buttonEnter.addEventListener('click', () => {
  const articleBase = document.querySelector('.selectorGame')
  articleBase.innerHTML = ''

  const titleGame = document.createElement('h2')
  titleGame.className = 'titleG2'
  titleGame.textContent = 'Piedra, Papel o Tijeras'
  articleBase.appendChild(titleGame)

  const divGame = document.createElement('div')
  divGame.className = 'divG2'
  articleBase.appendChild(divGame)

  const buttonElegido = document.createElement('button')
  buttonElegido.className = 'buttonElegidoG2'
  buttonElegido.textContent = '✂️'
  divGame.appendChild(buttonElegido)

  const pVS = document.createElement('p')
  pVS.className = 'pVS'
  pVS.textContent = 'VS'
  divGame.appendChild(pVS)

  const buttonEnemigo = document.createElement('button')
  buttonEnemigo.className = 'buttonEnemigoG2'
  buttonEnemigo.textContent = generarValorAleatorio()
  divGame.appendChild(buttonEnemigo)

  const buttonGo = document.createElement('button')
  buttonGo.className = 'buttonGo'
  buttonGo.textContent = 'Luchar!'
  articleBase.appendChild(buttonGo)

  const alerta = document.createElement('p')
  alerta.className = 'resultadoText'
  alerta.textContent = ''
  articleBase.appendChild(alerta)

  const divSelector = document.createElement('div')
  divSelector.className = 'div2G2'
  articleBase.appendChild(divSelector)

  const buttonPiedra = document.createElement('button')
  buttonPiedra.className = 'buttonPiedra'
  buttonPiedra.textContent = '🪨'
  divSelector.appendChild(buttonPiedra)

  const buttonPapel = document.createElement('button')
  buttonPapel.className = 'buttonPapel'
  buttonPapel.textContent = '🧻'
  divSelector.appendChild(buttonPapel)

  const buttonTijeras = document.createElement('button')
  buttonTijeras.className = 'buttonTijeras'
  buttonTijeras.textContent = '✂️'
  divSelector.appendChild(buttonTijeras)

  const puntosDisplay = document.createElement('p')
  puntosDisplay.className = 'puntosDisplay'
  puntosDisplay.textContent = `Puntos: ${puntos}`
  articleBase.appendChild(puntosDisplay)

  buttonPiedra.addEventListener('click', () => {
    buttonElegido.textContent = '🪨'
    buttonEnemigo.textContent = generarValorAleatorio()
    buttonEnemigo.style.visibility = 'hidden'
  })

  buttonPapel.addEventListener('click', () => {
    buttonElegido.textContent = '🧻'
    buttonEnemigo.textContent = generarValorAleatorio()
    buttonEnemigo.style.visibility = 'hidden'
  })

  buttonTijeras.addEventListener('click', () => {
    buttonElegido.textContent = '✂️'
    buttonEnemigo.textContent = generarValorAleatorio()
    buttonEnemigo.style.visibility = 'hidden'
  })

  function generarValorAleatorio() {
    const opciones = ['✂️', '🧻', '🪨']
    return opciones[Math.floor(Math.random() * opciones.length)]
  }
  buttonPapel.addEventListener('click', () => {
    buttonGo.style.visibility = 'visible'
    alerta.textContent = ''
  })

  buttonPiedra.addEventListener('click', () => {
    buttonGo.style.visibility = 'visible'
    alerta.textContent = ''
  })

  buttonTijeras.addEventListener('click', () => {
    buttonGo.style.visibility = 'visible'
    alerta.textContent = ''
  })
  buttonGo.addEventListener('click', () => {
    const Elegido = buttonElegido.textContent
    const Enemigo = buttonEnemigo.textContent
    buttonEnemigo.style.visibility = 'visible'
    if (
      (Elegido === '🪨' && Enemigo === '✂️') ||
      (Elegido === '🧻' && Enemigo === '🪨') ||
      (Elegido === '✂️' && Enemigo === '🧻')
    ) {
      puntos += 10
    } else if (
      (Elegido === '✂️' && Enemigo === '🪨') ||
      (Elegido === '🪨' && Enemigo === '🧻') ||
      (Elegido === '🧻' && Enemigo === '✂️')
    ) {
      puntos = Math.max(puntos - 10, 0)
    } else {
      alerta.textContent = 'JUEGO NULO ⚔️'
    }
    puntosDisplay.textContent = `Puntos: ${puntos}`
    if (puntos >= 100) {
      alert('¡Has alcanzado 100 puntos! Reiniciando el contador.')
      puntos = 0
      puntosDisplay.textContent = `Puntos: ${puntos}`
    }
    buttonGo.style.visibility = 'hidden'
  })
})
