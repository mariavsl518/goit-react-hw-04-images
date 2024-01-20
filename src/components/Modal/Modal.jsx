import { useEffect } from 'react'
import css from './Modal.module.css'

export const Modal=({closeModalWindow, imgURL})=> {

    const closeWithOverlayClick = (evt) =>{
        if (evt.target === evt.currentTarget)
        {closeModalWindow()}
    }

    useEffect(()=>{
         const closeWithEscape = (evt) =>{
            if (evt.code === 'Escape')
            {closeModalWindow()}
        }

        window.addEventListener('keydown', closeWithEscape);

        return ()=>{window.removeEventListener('keydown', closeWithEscape)}

    }, [closeModalWindow]);

        return (
          <div className={css.overlay}
          onClick={closeWithOverlayClick}>
              <div className={css.modal}>
                  <img src={imgURL} alt="" />
              </div>
          </div>
        )
    }
