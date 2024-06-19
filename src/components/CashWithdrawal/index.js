// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdarawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationList} = this.props
    const {balance} = this.state
    const name = 'Sara Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="app-cont">
        <div className="cash-with-cont">
          <div className="user-details-cont">
            <div className="initial-cont">
              <p className="initial">{initial}</p>
            </div>
            <div className="balance-cont">
              <p className="your-balance">Your Balance</p>
              <p className="balance">
                {balance}
                <br />
                <span className="currency">In Rupees</span>
              </p>
            </div>
            <p className="withdraw">Withdraw</p>
            <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denomination-list">
              {denominationList.map(each => (
                <DenominationItem
                  key={each.id}
                  denominationDetails={each}
                  updateBalance={this.updateBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdarawal
