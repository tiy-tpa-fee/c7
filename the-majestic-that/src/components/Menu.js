import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import data from '../data.json'

const Menu = () => (
  <div className='Menu'>
    <h2>Our Menu</h2>

    <section className='categories'>
      <ul>
        {data.menu.map(({ slug, name }, i) => (
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
)

const MenuSection = ({ match }) => {
  const category = data.menu.find(c => c.slug === match.params.slug)
  return <section>
    <h3>{category.name}</h3>
    <table>
      <tbody>
        {category.items.map((item, i) =>
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

export default Menu
