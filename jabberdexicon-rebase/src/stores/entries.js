import { action, computed, observable } from 'mobx'
import seedrandom from 'seedrandom'
import { get, post } from './api'

class Entries {
  @observable all = []
  @observable current = null

  @action loadAll () {
    get('entries').then((entries) => {
      this.all = entries
    })
  }

  @action load (slug) {
    this.current = null
    get(`entries/${slug}`).then((entry) => {
      this.current = entry
    })
  }

  @action create (term, definition) {
    return post('/entries', {
      entry: { term, definition }
    })
  }

  filter (letter) {
    return this.all.filter((entry) => {
      const start = entry.term[0].toLowerCase()
      if (letter === '0') {
        return start.match(/[^a-z]/)
      } else {
        return start === letter
      }
    })
  }

  search (query) {
    return this.all.filter((entry) => {
      const term = entry.term.toLowerCase()
      return term.includes(query.toLowerCase())
    })
  }

  @computed get daily () {
    if (this.all.length > 0) {
      const today = new Date().toJSON().slice(0, 10) // E.g. 2017-04-27
      const index = Math.floor(seedrandom(today)() * this.all.length)
      return this.all[index]
    }
  }
}

const entries = new Entries()
export default entries
