import React, { Component } from 'react'
import { Card, Image } from 'react-bootstrap'
import ImageCard from './ImageCard'

class ImageList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    console.log(this.props.images)
    const images = this.props.images.map((image) => {
      return <ImageCard image={image} />
    })
    return <div className='image-list'>{images}</div>
  }
}

export default ImageList
