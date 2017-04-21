import React, { Component } from 'react'
import { get } from '../api'

class Entry extends Component {
  state = {
    entry: null
  }

  componentDidMount () {
    const { slug } = this.props.match.params
    get(`/entries/${slug}`).then(entry => this.setState({ entry }))
  }

  render () {
    const { entry } = this.state
    if (entry) {
      return <div className='Entry'>
        <h2>{entry.term}</h2>
        <div className='definition' dangerouslySetInnerHTML={{__html: entry.formatted_definition}} />
      </div>
    } else {
      return <h2>Loading...</h2>
    }
  }
}

export default Entry
