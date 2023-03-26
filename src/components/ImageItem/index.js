import './index.css'

const ImageItem = props => {
  const {imageDetails, onSelectMatchedImage} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickMatchedImage = () => {
    onSelectMatchedImage(id)
  }

  return (
    <li className="image-item">
      <button
        className="img-item-btn"
        type="button"
        onClick={onClickMatchedImage}
      >
        <img className="thumbnail-img" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
