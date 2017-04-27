import React from 'react'
import {
  Button,
  Close,
  Input,
  Panel,
  PanelFooter,
  PanelHeader,
  Space,
  Text,
  Textarea
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
      <form action='#'>
        <Input name='term' label='Term' />
        <Textarea name='definition' label='Definition' />
      </form>
      <PanelFooter theme='default'>
        <Button>Submit</Button>
      </PanelFooter>
    </Panel>
  </div>

export default NewEntry
