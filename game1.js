const buttonEnter = document.querySelector('.buttonG1')

buttonEnter.addEventListener('click', () => {
  const articleBase = document.querySelector('.selectorGame')
  articleBase.innerHTML = ''

  const divGame = document.createElement('div')
  divGame.className = 'divG1'
  articleBase.appendChild(divGame)

  const titleGame = document.createElement('h2')
  titleGame.className = 'titleG1'
  titleGame.textContent = 'Tres en Rayas'
  divGame.appendChild(titleGame)

  const divGame2 = document.createElement('div')
  divGame2.className = 'div2G1'
  divGame.appendChild(divGame2)

  const text1g1 = document.createElement('h3')
  text1g1.className = 'text1G1'
  text1g1.textContent = '1º Selecciona una ficha'
  divGame2.appendChild(text1g1)

  const buttonX = document.createElement('button')
  buttonX.className = 'buttonXG1'
  buttonX.textContent = '❎'
  divGame2.appendChild(buttonX)

  const button0 = document.createElement('button')
  button0.className = 'button0G1'
  button0.textContent = '🅾️'
  divGame2.appendChild(button0)

  const buttonNewGame = document.createElement('button')
  buttonNewGame.className = 'buttonNewG1'
  buttonNewGame.textContent = 'Nuevo Juego'
  divGame.appendChild(buttonNewGame)

  const divGame3 = document.createElement('div')
  divGame3.className = 'div3G1'
  divGame.appendChild(divGame3)

  for (let i = 0; i < 9; i++) {
    const cajon = document.createElement('button')
    cajon.className = 'cajonG1'
    cajon.textContent = '⬛'
    divGame3.appendChild(cajon)
  }

  let lastButtonClicked = null
  let hasMadeMove = false
  let playerSelection = ''
  let hasSelectedButton = false

  const cajones = document.querySelectorAll('.cajonG1')
  cajones.forEach((cajon) => {
    cajon.addEventListener('click', () => {
      if (
        !hasMadeMove &&
        hasSelectedButton &&
        !checkForWinner(playerSelection) &&
        cajon.textContent === '⬛'
      ) {
        cajon.textContent =
          playerSelection === '' ? lastButtonClicked : playerSelection
        hasMadeMove = true

        const cajonesNoModificados = Array.from(
          document.querySelectorAll('.cajonG1')
        ).filter((cajon) => cajon.textContent === '⬛')

        if (cajonesNoModificados.length === 0) {
          setTimeout(() => {
            if (!checkForWinner()) {
              alert('¡Has perdido! ¡Vuelve a intentarlo!')
              resetGame()
            }
          }, 1000)
        } else {
          const indiceAleatorio = Math.floor(
            Math.random() * cajonesNoModificados.length
          )
          const cajonAleatorio = cajonesNoModificados[indiceAleatorio]

          const buttonToUse =
            lastButtonClicked === 'buttonXG1' ? 'button0G1' : 'buttonXG1'
          cajonAleatorio.textContent = document.querySelector(
            `.${buttonToUse}`
          ).textContent

          hasMadeMove = false

          setTimeout(() => {
            if (checkForWinner(playerSelection)) {
              alert('¡Has ganado! ¡Felicidades!')
              resetGame()
            } else if (!checkForLoser()) {
              alert('¡Has perdido! ¡Vuelve a intentarlo!')
              resetGame()
            }
          }, 1000)
        }
      }
    })
  })

  const buttonXG1 = document.querySelector('.buttonXG1')
  const button0G1 = document.querySelector('.button0G1')
  buttonXG1.addEventListener('click', () => {
    if (!hasMadeMove) {
      lastButtonClicked = 'buttonXG1'
      playerSelection = '❎'
      hasSelectedButton = true
    }
  })
  button0G1.addEventListener('click', () => {
    if (!hasMadeMove) {
      lastButtonClicked = 'button0G1'
      playerSelection = '🅾️'
      hasSelectedButton = true
    }
  })

  const buttonNewG1 = document.querySelector('.buttonNewG1')
  buttonNewG1.addEventListener('click', resetGame)

  function checkForWinner(playerSelection) {
    const cajones = document.querySelectorAll('.cajonG1')
    for (let i = 0; i < 3; i++) {
      if (
        cajones[i].textContent === playerSelection &&
        cajones[i].textContent === cajones[i + 3].textContent &&
        cajones[i].textContent === cajones[i + 6].textContent
      ) {
        return true
      }
    }

    for (let i = 0; i < 9; i += 3) {
      if (
        cajones[i].textContent === playerSelection &&
        cajones[i].textContent === cajones[i + 1].textContent &&
        cajones[i].textContent === cajones[i + 2].textContent
      ) {
        return true
      }
    }

    if (
      cajones[0].textContent === playerSelection &&
      cajones[0].textContent === cajones[4].textContent &&
      cajones[0].textContent === cajones[8].textContent
    ) {
      return true
    }

    if (
      cajones[2].textContent === playerSelection &&
      cajones[2].textContent === cajones[4].textContent &&
      cajones[2].textContent === cajones[6].textContent
    ) {
      return true
    }

    return false
  }

  function checkForLoser() {
    const cajones = document.querySelectorAll('.cajonG1')
    for (let i = 0; i < 3; i++) {
      if (
        cajones[i].textContent !== '⬛' &&
        cajones[i].textContent === cajones[i + 3].textContent &&
        cajones[i].textContent === cajones[i + 6].textContent
      ) {
        return false
      }
    }

    for (let i = 0; i < 9; i += 3) {
      if (
        cajones[i].textContent !== '⬛' &&
        cajones[i].textContent === cajones[i + 1].textContent &&
        cajones[i].textContent === cajones[i + 2].textContent
      ) {
        return false
      }
    }

    if (
      cajones[0].textContent !== '⬛' &&
      cajones[0].textContent === cajones[4].textContent &&
      cajones[0].textContent === cajones[8].textContent
    ) {
      return false
    }

    if (
      cajones[2].textContent !== '⬛' &&
      cajones[2].textContent === cajones[4].textContent &&
      cajones[2].textContent === cajones[6].textContent
    ) {
      return false
    }

    return true
  }

  function resetGame() {
    const cajones = document.querySelectorAll('.cajonG1')
    cajones.forEach((cajon) => {
      cajon.textContent = '⬛'
    })
    hasMadeMove = false
    playerSelection = ''
    hasSelectedButton = false
  }
})

const buttonGameCenter = document.querySelector('.GameCenter')

buttonGameCenter.addEventListener('click', () => {
  location.reload()
})
