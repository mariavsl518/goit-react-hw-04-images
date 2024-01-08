import React from 'react'
import css from './Searchbar.module.css'

export const Searchbar = ({handleSearchSubmit}) => {
  return (
    <header className={css.searchbar}>
    <form className={css.searchForm} onSubmit={handleSearchSubmit}>
        <button type="submit" className={css.button}>
        <span className={css.buttonLabel}>
          Search
        </span>
        </button>
        <input
        className={css.input}
        name='input'
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        />
    </form>
    </header>
  )
}
