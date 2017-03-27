if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const main = () => {
  const swatch = document.querySelector('.swatch')
  const colorCSS = document.querySelector('.color')
  const hueSlider = document.querySelector('input[name=hue]')
  const saturationSlider = document.querySelector('input[name=saturation]')
  const lightnessSlider = document.querySelector('input[name=lightness]')
  const alphaSlider = document.querySelector('input[name=alpha]')

  const updateColor = () => {
    const hue = hueSlider.value
    const saturation = saturationSlider.value
    const lightness = lightnessSlider.value
    const alpha = alphaSlider.value

    const color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`

    document.querySelector('li.hue input')
      .style.background = `linear-gradient(to right,
        hsl(0, ${saturation}%, ${lightness}%),
        hsl(45, ${saturation}%, ${lightness}%),
        hsl(90, ${saturation}%, ${lightness}%),
        hsl(135, ${saturation}%, ${lightness}%),
        hsl(180, ${saturation}%, ${lightness}%),
        hsl(225, ${saturation}%, ${lightness}%),
        hsl(270, ${saturation}%, ${lightness}%),
        hsl(315, ${saturation}%, ${lightness}%),
        hsl(360, ${saturation}%, ${lightness}%))`

    document.querySelector('li.saturation input')
      .style.background = `linear-gradient(to right,
        hsl(${hue}, 0%, ${lightness}%),
        hsl(${hue}, 100%, ${lightness}%))`

    document.querySelector('li.lightness input')
      .style.background = `linear-gradient(to right,
        black, hsl(${hue}, ${saturation}%, 50%), white)`

    document.querySelector('li.alpha input')
      .style.background = `linear-gradient(to right,
        hsla(${hue}, ${saturation}%, ${lightness}%, 0),
        hsla(${hue}, ${saturation}%, ${lightness}%, 1.0))`

    swatch.style.backgroundColor = color
    colorCSS.textContent = color
  }

  // hueSlider.addEventListener('input', updateColor)
  // saturationSlider.addEventListener('input', updateColor)
  // lightnessSlider.addEventListener('input', updateColor)
  // alphaSlider.addEventListener('input', updateColor)
  window.addEventListener('input', updateColor)

  updateColor()
}

document.addEventListener('DOMContentLoaded', main)

// For webpack, ignore this...
if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
