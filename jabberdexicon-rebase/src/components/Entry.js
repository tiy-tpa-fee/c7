import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Block, PageHeader } from 'rebass'
import entries from '../stores/entries'

@observer
class Entry extends Component {
  componentDidMount () {
    entries.load(this.props.match.params.slug)
  }

  componentDidUpdate (prevProps) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      entries.load(this.props.match.params.slug)
    }
  }

  render () {
    const entry = entries.current
    if (entry) {
      return <div className='Entry'>
        <PageHeader heading={entry.term} m={1} />
        <Block borderLeft px={2} dangerouslySetInnerHTML={{__html: entry.formatted_definition}} />
      </div>
    } else {
      return <PageHeader heading='Loading...' m={1} />
    }
  }
}

export default Entry
