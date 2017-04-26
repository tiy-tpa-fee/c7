import React from 'react'
import { Link } from 'react-router-dom'
import { Block, Heading, Text } from 'rebass'

const WordOfTheDay = () =>
  <Block borderLeft px={3} color='primary'>
    <Heading level={3} alt>Word of the Day</Heading>
    <Heading level={3} size={1}>
      <Link to='/entry/1-yoda-condition'>Yoda Conditions</Link>
    </Heading>
    <Text color='black'>Using if (constant == variable) instead of if (variable == constant), like if (4 == foo). Because it's like saying "if blue is the sky" or "if tall is the man".</Text>
  </Block>

export default WordOfTheDay
