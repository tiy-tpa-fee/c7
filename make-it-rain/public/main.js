let drops = []

const randomWidth = () => {
  return Math.floor(
    Math.random() * document.body.clientWidth
  ).toString() + 'px'
}

const makeDrop = () => {
  drops.push({
    top: 0,
    left: randomWidth(),
    speed: Math.random()
  })
}

const moveDrops = () => {
  for (let i = 0; i < drops.length; i++) {
    let top = drops[i].top + drops[i].speed + 1
    if (top > document.body.clientHeight) {
      drops.splice(i, 1)
    } else {
      drops[i].top = top
    }
  }
}

const drawDrops = () => {
  const dropDiv = document.querySelector('.drops')
  while (dropDiv.firstChild) { dropDiv.removeChild(dropDiv.firstChild) }

  for (let i = 0; i < drops.length; i++) {
    let drop = document.createElement('div')
    drop.className = 'drop'
    drop.style.left = drops[i].left
    drop.style.top = drops[i].top + 'px'
    let scale = (1 + drops[i].speed) / 2
    drop.style.transform = `scale(${scale})`
    dropDiv.appendChild(drop)
  }
}

const main = () => {
  window.setInterval(moveDrops, 30 / 1000)
  window.setInterval(drawDrops, 30 / 1000)
  document.querySelector('button')
    .addEventListener('click', makeDrop)
}

document.addEventListener('DOMContentLoaded', main)
