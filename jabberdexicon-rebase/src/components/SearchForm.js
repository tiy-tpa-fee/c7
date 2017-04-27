import React from 'react'
import { InlineForm } from 'rebass'
import { withRouter } from 'react-router-dom'

const SearchForm = ({ entries, history }) =>
  <InlineForm
    backgroundColor='white'
    color='#333'
    buttonLabel='Go'
    name='search'
    label='Search'
    onChange={(event) => {
      const query = event.target.value
      const path = query.length > 0 ? `/search/${query}` : '/'
      history.replace(path)
    }}
  />

export default withRouter(SearchForm)
