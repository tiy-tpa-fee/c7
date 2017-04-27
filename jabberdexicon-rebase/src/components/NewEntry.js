import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
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
import entries from '../stores/entries'

class NewEntry extends Component {
  _submit = (event) => {
    event.preventDefault()
    const term = event.target.elements.term.value
    const definition = event.target.elements.definition.value
    entries.create(term, definition).then((entry) => {
      this.props.history.push(`/entry/${entry.slug}`)
      this.props.onDismiss()
      entries.loadAll()
    })
    event.target.elements.term.value = ''
    event.target.elements.definition.value = ''
  }

  render () {
    return <div className='NewEntry' style={{ maxWidth: '720px' }}>
      <Panel theme='info' m={4}>
        <form action='#' onSubmit={this._submit}>
          <PanelHeader>
            <Text>Add a New Entry</Text>
            <Space auto />
            <Close onClick={this.props.onDismiss} />
          </PanelHeader>
          <Input name='term' label='Term' />
          <Textarea name='definition' label='Definition' />
          <PanelFooter theme='default'>
            <Button type='submit'>Submit</Button>
          </PanelFooter>
        </form>
      </Panel>
    </div>
  }
}
export default withRouter(NewEntry)
