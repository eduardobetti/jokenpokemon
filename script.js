const grass = document.getElementById('grass')
const fire = document.getElementById('fire')
const water = document.getElementById('water')

const result = document.querySelector('.result')

let playerScore = document.querySelector('.playerScore span')
p = 0
let machineScore = document.querySelector('.machineScore span')
m = 0

let resultado = (Math.floor(Math.random() * 3) + 1)

grass.addEventListener('click', () => {
    
    let resultado = (Math.floor(Math.random() * 3) + 1)
    console.log(resultado)

    if (resultado === 1) {
       result.innerHTML = `A máquina também escolheu Bulbasauro, do tipo grama. Empate!`
       result.style.color = 'rgb(0, 0, 0)'
       result.style.textShadow = '2px 2px 2px white'
    }
    if (resultado === 2) {
        result.innerHTML = `A máquina escolheu Charmander, do tipo fogo. Você perdeu!`
        result.style.color = 'rgb(223, 18, 195)'
        result.style.textShadow = '2px 2px 2px white'
        m += 1
        machineScore.innerHTML = m
    }
    if (resultado === 3) {
        result.innerHTML = `A máquina escolheu Squirtle, do tipo água. Você venceu!`
        result.style.color = 'rgb(20, 56, 219)'
        result.style.textShadow = '2px 2px 2px white'
        p += 1
        playerScore.innerHTML = p
    }
})

fire.addEventListener('click', () => {

    let resultado = (Math.floor(Math.random() * 3) + 1)
    console.log(resultado)

    if (resultado === 1) {
       result.innerHTML = `A máquina escolheu Bulbasauro, do tipo grama. Você venceu!`
       result.style.color = 'rgb(20, 56, 219)'
       result.style.textShadow = '2px 2px 2px white'
       p += 1
       playerScore.innerHTML = p
    }
    if (resultado === 2) {
        result.innerHTML = `A máquina também escolheu Charmander, do tipo fogo. Empate!`
        result.style.color = 'rgb(0, 0, 0)'
        result.style.textShadow = '2px 2px 2px white'
    }
    if (resultado === 3) {
        result.innerHTML = `A máquina escolheu Squirtle, do tipo água. Você perdeu!`
        result.style.color = 'rgb(223, 18, 195)'
        result.style.textShadow = '2px 2px 2px white'
        m += 1
        machineScore.innerHTML = m
    }
})

water.addEventListener('click', () => {

    let resultado = (Math.floor(Math.random() * 3) + 1)
    console.log(resultado)

    if (resultado === 1) {
       result.innerHTML = `A máquina escolheu Bulbasauro, do tipo grama. Você perdeu!`
       result.style.color = 'rgb(223, 18, 195)'
       result.style.textShadow = '2px 2px 2px white'
       m += 1
       machineScore.innerHTML = m
    }
    if (resultado === 2) {
        result.innerHTML = `A máquina escolheu Charmander, do tipo fogo. Você venceu!`
        result.style.color = 'rgb(20, 56, 219)'
        result.style.textShadow = '2px 2px 2px white'
        p += 1
        playerScore.innerHTML = p
    }
    if (resultado === 3) {
        result.innerHTML = `A máquina também escolheu Squirtle, do tipo água. Empate!`
        result.style.color = 'rgb(0, 0, 0)'
        result.style.textShadow = '2px 2px 2px white'
    }
})