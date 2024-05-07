const buttonEnter = document.querySelector('.buttonG3')

buttonEnter.addEventListener('click', () => {
  const articleBase = document.querySelector('.selectorGame')
  articleBase.innerHTML = ''

  const titleGame = document.createElement('h2')
  titleGame.className = 'titleG3'
  titleGame.textContent = 'Juego de Memoria'
  articleBase.appendChild(titleGame)

  const divGame = document.createElement('div')
  divGame.className = 'divG3'
  articleBase.appendChild(divGame)

  const numRows = 4
  const numCols = 4

  const opciones = ['🍔', '🍕', '🌭', '🍟', '🍿', '🥗', '🌮', '🥩']
  const pares = opciones.concat(opciones)

  for (let i = pares.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pares[i], pares[j]] = [pares[j], pares[i]]
  }

  for (let i = 0; i < numRows; i++) {
    const row = document.createElement('div')
    row.classList.add('row')
    for (let j = 0; j < numCols; j++) {
      const viñeta = document.createElement('button')
      viñeta.classList.add('viñeta')
      viñeta.textContent = pares[i * numCols + j]
      row.appendChild(viñeta)
    }
    divGame.appendChild(row)
  }

  let viñetasAbiertas = []
  let viñetasVisibles = document.querySelectorAll('.viñeta')

  viñetasVisibles.forEach((viñeta) => {
    viñeta.addEventListener('click', () => {
      if (viñeta.style.color !== 'black' && viñetasAbiertas.length < 2) {
        viñeta.style.color = 'black'
        viñetasAbiertas.push(viñeta)

        if (viñetasAbiertas.length === 2) {
          const [viñeta1, viñeta2] = viñetasAbiertas

          if (viñeta1.textContent !== viñeta2.textContent) {
            setTimeout(() => {
              viñeta1.style.color = 'transparent'
              viñeta2.style.color = 'transparent'
            }, 1000)
          }

          viñetasAbiertas = []

          let todasDescubiertas = true
          viñetasVisibles.forEach((viñeta) => {
            if (viñeta.style.color !== 'black') {
              todasDescubiertas = false
            }
          })

          if (todasDescubiertas) {
            setTimeout(() => {
              alert('¡GANASTE!')
              resetearJuego()
            }, 1000)
          }
          function resetearJuego() {
            viñetasVisibles.forEach((viñeta) => {
              viñeta.style.color = 'transparent'
            })

            for (let i = pares.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1))
              ;[pares[i], pares[j]] = [pares[j], pares[i]]
            }

            let viñetaIndex = 0
            viñetasVisibles.forEach((viñeta) => {
              viñeta.textContent = pares[viñetaIndex]
              viñetaIndex++
            })
          }
        }
      }
    })
  })
})
