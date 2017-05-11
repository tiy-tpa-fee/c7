import { observable, action } from 'mobx'

class UI {
  @observable menuShown = false
  @observable notice

  @action toggleMenu () {
    this.menuShown = !this.menuShown
  }

  @action warn (message) {
    this.notice = {
      message,
      type: 'warn'
    }
  }

  @action info (message) {
    this.notice = {
      message,
      type: 'info'
    }
  }

  @action dismissNotice () {
    this.notice = null
  }
}

const ui = new UI()
window.ui = ui
export default ui
