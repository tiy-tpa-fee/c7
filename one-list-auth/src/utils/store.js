import { observable, action } from 'mobx'
import auth from './auth'
import * as api from './api'

class Store {
  @observable items = []

  @action load () {
    if (auth.isSignedIn) {
      api.get('/items').then(data => {
        this.items = data
      })
    }
  }

  @action addItem (text) {
    api.post('/items', { item: { text } })
      .then(data => this.items.push(data))
  }

  @action toggle (index) {
    const item = this.items[index]
    const complete = !item.complete
    api.put(`/items/${item.id}`, { item: { complete } })
      .then((data) => { this.items[index] = data })
  }

  @action delete (index) {
    const item = this.items[index]
    api.destroy(`/items/${item.id}`)
      .then(() => this.items.splice(index, 1))
  }
}

const store = new Store()

window.store = store

export default store
