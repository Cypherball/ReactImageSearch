import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

class ImageCard extends Component {
  constructor(props) {
    super(props)
    this.state = { imgHeight: 0 }
    this.imageRef = React.createRef()
  }

  componentDidUpdate() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    this.setState({ imgHeight: this.imageRef.current.clientHeight })
  }

  render() {
    return (
      <div
        key={this.props.image.id}
        style={{ gridRowEnd: `span ${Math.ceil(this.state.imgHeight / 5)}` }}
      >
        <Image
          variant='top'
          className='w-100 unsplash-img'
          src={this.props.image.urls.regular}
          ref={this.imageRef}
        ></Image>
      </div>
    )
  }
}

export default ImageCard
