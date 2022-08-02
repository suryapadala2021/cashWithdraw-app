import './index.css'

const DenominationItem = props => {
  const {details, addDenomination} = props
  const {value} = details
  const func = () => addDenomination(value)
  return (
    <li>
      <button type="button" onClick={func} className="btn">
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
