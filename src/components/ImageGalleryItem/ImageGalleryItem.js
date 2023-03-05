import { GalleryItem, GalleryItemImg } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({tags, smallImage, largeImage}) => {
  return (
  <GalleryItem>
    <GalleryItemImg src={smallImage} alt={tags} loading="lazy" />
  </GalleryItem>
  )
}

