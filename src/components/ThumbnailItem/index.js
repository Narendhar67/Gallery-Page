// Write your code here.
//  import {Component} from "react"

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, selectedImageId, selectImage} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const selectedImage = () => {
    selectImage(id)
  }

  return (
    <li>
      <button
        className={`ThumbnailImg ${selectedImageId === id ? 'Opacity' : ''}`}
        type="button"
        onClick={selectedImage}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
