import React from 'react'
import { PageHeader } from 'rebass'
import WordOfTheDay from './WordOfTheDay'

const Home = () =>
  <div className='Home'>
    <PageHeader
      heading='Welcome the Jabberdexicon!'
      description='A little glossary of jargon'
      m={1}
    />
    <WordOfTheDay />
  </div>

export default Home
