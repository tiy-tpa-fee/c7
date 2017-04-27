import { observable } from 'mobx'

class UI {
  @observable modal = false
}

const ui = new UI()
export default ui
