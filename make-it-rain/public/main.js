const randomWidth = () => {
  return Math.floor(
    Math.random() * document.body.clientWidth
  ).toString() + 'px'
}

const makeDrop = () => {
  // Ask the document to create a <div>
  let drop = document.createElement('div')
  // Assign that <div> the class 'drop':  <div class="drop"></div>
  drop.className = 'drop'
  // Give it a random horizontal position
  drop.style.left = randomWidth()
  drop.style.top = '10px'
  // Get a reference to the <div class="drops">...</div>
  const drops = document.querySelector('.drops')
  // Append our "drop" div to the "drops"
  drops.appendChild(drop)
}

const moveDrops = () => {
  const parent = document.querySelector('.drops')
  const drops = document.querySelectorAll('.drop')
  for (let i = 0; i < drops.length; i++) {
    let top = Number(drops[i].style.top.replace('px', ''))
    top += 1
    if (top > document.body.clientHeight) {
      parent.removeChild(drops[i])
    }

    drops[i].style.top = top + 'px'
  }
}

const main = () => {
  window.setInterval(moveDrops, 30 / 1000)
  document.querySelector('button')
    .addEventListener('click', makeDrop)
}

document.addEventListener('DOMContentLoaded', main)
