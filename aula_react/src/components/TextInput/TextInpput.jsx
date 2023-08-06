import './TextInput.css'
import Props from 'prop-types'

export const TextInput = ({searchValue, handleChange}) => {
  return (
    <input 
    className="text-input"
    onChange={handleChange}
    value={searchValue}
    type="search" 
    placeholder='Type your search'
    />
  )
}

TextInput.propTypes = {
  searchValue : Props.string.isRequired,
  handleChange: Props.func.isRequired,
}