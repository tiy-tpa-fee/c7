import React, { Component } from 'react'
import EntryList from './EntryList'
import { get } from '../api'

class Search extends Component {
  state = {
    query: null,
    entries: []
  }

  doSearch () {
    const query = this.props.match.params.query
    if (query !== this.state.query) {
      get('/entries', query).then(entries => this.setState({ entries, query }))
    }
  }

  componentDidMount () {
    this.doSearch()
  }

  componentDidUpdate () {
    this.doSearch()
  }

  render () {
    return <div className='Search'>
      <h2>Searching for "{this.props.match.params.query}"</h2>
      <EntryList entries={this.state.entries} />
    </div>
  }
}

export default Search
