import { ImageGalleryStyled } from "./ImageGallery.styled"
import {ImageGalleryItem} from "../ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({images}) => {
  return (
    <ImageGalleryStyled>
      {images.map(image => 
        <ImageGalleryItem key={image.id} tags={image.tags} smallImage={image.smallImage} largeImage={image.largeImage} /> 
    )}
  </ImageGalleryStyled>
  )
}

