import  Props from 'prop-types'
import { Component } from 'react'
export class Button extends Component {

    render(){
      const { text, onClicks,disabled } = this.props
      return (
        <button
        className='button'
        onClick={onClicks}
        disabled={disabled}
        >
          {text}
          </button>
      )
    }
  }

  Button.defaultProps = {
    disabled:false,
  }
  Button.propstypes = {
    text: Props.string.isRequired,
    onClick: Props.func.isRequired,
    disabled:Props.bool
  }
