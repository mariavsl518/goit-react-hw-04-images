import React, { Component } from 'react'
import css from './Modal.module.css'

export class Modal extends Component {

    closeWithEscape = (evt) =>{
        if (evt.code === 'Escape')
        {this.props.closeModalWindow()}
    }
    closeWithOverlayClick = (evt) =>{
        if (evt.target === evt.currentTarget)
        {this.props.closeModalWindow()}
    }
    
    componentDidMount(){
        window.addEventListener('keydown', this.closeWithEscape)
    }

    componentWillUnmount(){
        window.removeEventListener('keydown',this.closeWithEscape)
    }

    render(){

        return (
          <div className={css.overlay}
          onClick={this.closeWithOverlayClick}>
              <div className={css.modal}>
                  <img src={this.props.imgURL} alt="" />
              </div>
          </div>
        )
    }
}
