import React from 'react'
import css from './Button.module.css'

export const Button = ({handleLoadMore}) => {
  return (
    <button type="button" className={css.button} onClick={handleLoadMore}>Load more..</button>
  )
}
