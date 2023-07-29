import React from 'react'
import { Image, Preview, Thumbnail, ThumbnailsSection } from './styles'
import PropTypes from 'prop-types'

const ItemImage = (props) => {
  const { image, thumbnail } = props

  return (
        <Image>
            <Preview img={image || 'https://placehold.co/400x400'}/>
            <ThumbnailsSection>
                {[...Array(5)].map((_, index) => (
                    <Thumbnail key={index} img={thumbnail || 'https://placehold.co/200x200'}/>
                ))}
            </ThumbnailsSection>
        </Image>
  )
}

ItemImage.propTypes = {
  image: PropTypes.string | undefined,
  thumbnail: PropTypes.string | undefined
}

export default ItemImage
