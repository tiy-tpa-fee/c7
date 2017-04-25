import unitData from './units.json'
import { observable, computed } from 'mobx'

class Store {
  static startingGold = 2400
  static startingSupply = 16

  @observable
  army = Object.keys(unitData).reduce((units, key) => {
    units[key] = 0
    return units
  }, {})

  @computed
  get gold () {
    return Object.keys(this.army).reduce((gold, unit) => {
      return gold - (this.army[unit] * unitData[unit].cost)
    }, Store.startingGold)
  }

  @computed
  get supply () {
    const total = Object.values(this.army).reduce((supply, count) => { return supply + count }, 0)
    return Store.startingSupply - total
  }

  addUnit (unit) {
    this.army[unit]++
    this.army = { ...this.army }
  }

  removeUnit (unit) {
    this.army[unit]--
    this.army = { ...this.army }
  }

  canAdd (unit) {
    return unitData[unit].cost <= this.gold && this.supply > 0
  }

  canRemove (unit) {
    return this.army[unit] > 0
  }

  get info () {
    return unitData
  }

  inspect () {
    console.log(this.army)
  }
}

const store = new Store()

window.store = store

export default store
