if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

// an array to hold our todo items
let items = []

// renders an unorder list to the screen
const renderList = () => {
  // grab the list
  const list = document.querySelector('ul.one-list')
  // empty out the old items (we're going recreate them from scratch)
  while (list.firstChild) list.removeChild(list.firstChild)

  // for each item in the array
  items.forEach((item, i) => {
    // make an <li> tag
    const li = document.createElement('li')
    // set the text to be this items label
    li.textContent = item.label
    // if it's completed, show that
    if (item.done) li.className = 'completed'

    // setup a click for this item
    li.addEventListener('click', () => {
      // wait, incase we double clicked
      window.setTimeout(() => {
        // mark the item as done, or undone
        item.done = !item.done
        // save changes
        persistItems()
      }, 250) // wait 0.25 seconds
    })

    // on double click
    li.addEventListener('dblclick', () => {
      // remove this item (at this position) from the list of items
      items.splice(i, 1)
      // save changes
      persistItems()
    })

    // insert this element into the DOM
    list.appendChild(li)
  })
}

// Save the items array to local storage
const persistItems = () => {
  // turn the array into a string of JSON
  const data = JSON.stringify(items)
  // save the string in local storage
  window.localStorage.setItem('items', data)
  // re-render any changes to the interface
  renderList()
}

// Reload items from local storage
const loadItems = () => {
  // read any data out of local storage
  const data = window.localStorage.getItem('items')
  // parse the data as JSON, if it's undefined (new visitor) it's an empty array
  items = JSON.parse(data) || []

  // render the interface
  renderList()
}

// When the document is ready
const main = () => {
  // Grab our form and inputs
  const form = document.querySelector('form')
  const input = document.querySelector('input[type=text]')

  // Listen for the user to press enter on the input
  form.addEventListener('submit', (event) => {
    // Stop the page from reloading
    event.preventDefault()
    // Create an object that describes a new todo item
    //   and push it into our items array
    items.push({ label: input.value, done: false })
    // save changes to the items
    persistItems()
    // empty the text input
    form.reset()
  })

  // Reload items from local storage
  loadItems()
}

// When the page is loaded, start our program
document.addEventListener('DOMContentLoaded', main)

// Ignore this. webpack.
if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
