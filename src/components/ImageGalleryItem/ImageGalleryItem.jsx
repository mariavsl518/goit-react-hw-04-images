import React from 'react'
import css from './ImageGalleryItem.module.css'


export const ImageGalleryItem = ({id, url, openModalWindow}) => {

  return(
    <li key={id} className={css.galleryItem}
      onClick={()=>openModalWindow(id)}>
        <img src={url} alt="" className={css.galleryImage}/>
    </li>
  )
  }