import React, { Component } from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <Form onSubmit={this.onFormSubmit}>
        <Form.Group>
          <InputGroup className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text id='search-addon'>
                <FontAwesomeIcon icon='search' />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type='text'
              placeholder='Search Anything'
              aria-label='Search'
              aria-describedby='search-addon'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <InputGroup.Append>
              <Button variant='secondary' type='submit'>
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    )
  }
}

export default SearchBar
