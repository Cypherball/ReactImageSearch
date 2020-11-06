import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap'
import unsplash from './api/unsplash'
import './App.scss'
import ImageList from './ImageList'
import SearchBar from './SearchBar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '', images: [] }
  }

  onSearchSubmit = async (term) => {
    this.setState({ term: term })
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term,
      },
    })
    this.setState({ images: response.data.results })
  }

  render() {
    let imagesFound = null
    if (this.state.images.length) {
      imagesFound = (
        <p className='small text-muted'>
          Found {this.state.images.length} Results
        </p>
      )
    }
    return (
      <Container className='my-5'>
        <Card bg='dark' className='shadow'>
          <Card.Body>
            <h1 className='mb-4 text-secondary text-center'>
              Image Search API
            </h1>
            <SearchBar onSubmit={this.onSearchSubmit} />
          </Card.Body>
        </Card>
        <h3 className='mt-5'>{this.state.term}</h3>
        {imagesFound}
        <ImageList images={this.state.images}></ImageList>
      </Container>
    )
  }
}

export default App
