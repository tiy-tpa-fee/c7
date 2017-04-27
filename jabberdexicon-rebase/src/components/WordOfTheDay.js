import React from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import { Block, Heading, Text } from 'rebass'
import entries from '../stores/entries'

const WordOfTheDay = ({ term }) => {
  const entry = entries.daily
  if (entry) {
    return <Block borderLeft px={3} color='primary'>
      <Heading level={3} alt>Word of the Day</Heading>
      <Heading level={3} size={1}>
        <Link to={`/entry/${entry.slug}`}>{entry.term}</Link>
      </Heading>
    </Block>
  } else {
    return null
  }
}

export default observer(WordOfTheDay)
