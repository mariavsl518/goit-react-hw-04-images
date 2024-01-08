import React from 'react'
import css from './ImageGallery.module.css'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({images, openModalWindow}) => {
  return (
    <ul className={css.imgGallery}>
        { images?.map(img => {
        return (<ImageGalleryItem
            id={img.id}
            url={img.webformatURL}
            openModalWindow={openModalWindow}
            />)
        })
        }
        </ul>
        )
    }

