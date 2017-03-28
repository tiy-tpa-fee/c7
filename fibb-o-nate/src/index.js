if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const fibbonacci = (n) => {
  let sequence = []
  let a = 0
  let b = 1
  let t

  while (n > 0) {
    t = a
    a = a + b
    b = t
    sequence.push(a)
    n--
  }

  return sequence
}

const main = () => {
  const input = document.querySelector('input')
  const list = document.querySelector('ul.fibbs')

  input.addEventListener('input', () => {
    const upto = Number(input.value)
    const seq = fibbonacci(upto)
    while (list.firstChild) list.removeChild(list.firstChild)
    seq.forEach((n, i) => {
      const li = document.createElement('li')
      const hue = Math.round((i / upto) * 360)
      const width = Math.round((i / upto) * 200)
      li.style.backgroundColor = `hsl(${hue}, 100%, 50%)`
      li.style.width = `${width}px`
      li.textContent = n
      list.appendChild(li)
    })
  })
}

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
