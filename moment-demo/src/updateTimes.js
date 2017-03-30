import moment from 'moment'
import _ from 'lodash'

const updateTimes = () => {
  const times = document.querySelectorAll('time')
  _.each(times, (timeNode) => {
    const dateTime = timeNode.attributes.datetime.value
    const relativeTime = moment(dateTime).fromNow()
    timeNode.textContent = relativeTime
  })
}

export default updateTimes
