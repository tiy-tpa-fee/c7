import React from 'react'
import {
  Button,
  Close,
  Panel,
  PanelFooter,
  PanelHeader,
  Space,
  Text
} from 'rebass'

const NewEntry = ({ onDismiss }) =>
  <div className='NewEntry' style={{ maxWidth: '720px' }}>
    <Panel theme='info' m={4}>
      <PanelHeader
        inverted
        theme='default'
      >
        <Text>Add a New Entry</Text>
        <Space auto />
        <Close onClick={onDismiss} />
      </PanelHeader>
      <Text>
        Panels are great for visually separating UI, content, or data from the rest of the page.
      </Text>
      <PanelFooter theme='default'>
        <Button>Submit</Button>
      </PanelFooter>
    </Panel>
  </div>

export default NewEntry
