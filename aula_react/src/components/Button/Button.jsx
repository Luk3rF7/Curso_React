import  Props from 'prop-types'
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

  aqui eu passo configuração padroes do elem
  Button.defaultProps = {
    disabled:false,
  }
    aqui passo os tipo que são as props: string,number,bool,func etc...
    e ja defino se e requirido ou não
  Button.propstypes = {
    text: Props.string.isRequired,
    onClick: Props.func.isRequired,
    disabled:Props.bool
  }