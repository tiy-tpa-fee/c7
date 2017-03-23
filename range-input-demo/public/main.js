
const main = () => {
  const slider = document.querySelector('input[name=hue]')
  const number = document.querySelector('div.number')
  slider.addEventListener('input', (event) => {
    number.style.color = `hsl(${event.target.value}, 80%, 66%)`
    number.textContent = event.target.value
  })
  slider.addEventListener('change', () => {
    let hue = Math.floor(Math.random() * 360)
    let sat = Math.round(Math.random() * 100)
    let lit = Math.round(Math.random() * 100)
    document.body.style.backgroundColor = `hsl(${hue}, ${sat}%, ${lit}%)`
  })
}

document.addEventListener('DOMContentLoaded', main)
