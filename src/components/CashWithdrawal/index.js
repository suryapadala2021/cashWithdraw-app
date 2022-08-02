import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  addDenomination = value => {
    const {amount} = this.state
    let changeAmount = amount - value
    if (changeAmount < 0) {
      changeAmount = 0
    }
    this.setState({amount: changeAmount})
  }

  render() {
    const {denominationsList} = this.props

    const {amount} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <div className="owner-section">
            <div className="letter-box">
              <p className="letter">S</p>
            </div>
            <h1 className="name">Surya Reddy</h1>
          </div>
          <div className="amount-section">
            <p className="amount-section-head">Your Balance</p>
            <div>
              <p className="amount-section-amount">{amount}</p>
              <br />
              <span className="amount-inrupess">in rupees</span>
            </div>
          </div>
          <div className="withDrawSection">
            <p className="withDraw-heading">Withdraw</p>
            <p className="withDraw-description">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denomination-list">
              {denominationsList.map(obj => (
                <DenominationItem
                  key={obj.id}
                  details={obj}
                  addDenomination={this.addDenomination}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
