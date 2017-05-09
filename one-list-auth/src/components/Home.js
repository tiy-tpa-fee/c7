import React from 'react'
import auth from '../utils/auth'

const Home = () => (
  <div className='Home'>
    <button onClick={() => auth.signIn()}>LOGIN</button>
  </div>
)

export default Home
