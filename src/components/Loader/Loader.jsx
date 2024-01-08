import React from 'react'
import css from './Loader.module.css'
import { InfinitySpin } from 'react-loader-spinner'

export const Loader = () => {
  return (
    <div className={css.loaderBG}>
    <InfinitySpin
    visible={true}
    color="#4E75B5"
    ariaLabel="infinity-spin-loading"
    />
    </div>
        )
  
}
