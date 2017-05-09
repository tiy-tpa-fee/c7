import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { query } from '../api'

class Menu extends React.Component {
  state = {
    categories: []
  }

  componentDidMount () {
    query(`allCategories {
      name
      slug
    }`).then(({ data }) => {
      this.setState({
        categories: data.allCategories
      })
    })
  }

  render () {
    return <div className='Menu'>
      <h2>Our Menu</h2>

      <section className='categories'>
        <ul>
          {this.state.categories.map(({ slug, name }, i) => (
            <li key={i}>
              <NavLink to={`/menu/${slug}`}>{name}</NavLink>
            </li>
          ))}
        </ul>
        <Switch>
          <Route path='/menu' exact>
            <h2>This is our delicious menu.</h2>
          </Route>
          <Route path='/menu/:slug' component={MenuSection} />
        </Switch>
      </section>
    </div>
  }
}

class MenuSection extends React.Component {
  state = {
    name: 'Loading...',
    items: []
  }

  componentDidMount () {
    this.load(this.props.match.params.slug)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.match.params.slug !== this.props.match.params.slug) {
      this.setState({ name: 'Loading...', items: [] })
      this.load(nextProps.match.params.slug)
    }
  }

  load (slug) {
    query(`allCategories(filter: { slug: "${slug}" }, first: 1) {
      name
      slug
      items {
        name
        price
        description
      }
    }`).then(({ data }) => {
      const { name, items } = data.allCategories[0]
      this.setState({ name, items })
    })
  }

  render () {
    return <section>
      <h3>{this.state.name}</h3>
      <table>
        <tbody>
          {this.state.items.map((item, i) =>
            <tr key={i}>
              <th>{item.name}</th>
              <td>{item.description}</td>
              <td>${item.price / 100}</td>
            </tr>
        )}
        </tbody>
      </table>
    </section>
  }
}

export default Menu
