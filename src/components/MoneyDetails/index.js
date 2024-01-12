// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <div className="statuscontainer">
      <div className="eaccon1">
        <div className="imagecon1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="balanceimage"
          />
        </div>

        <div className="balancecon">
          <h1 className="balance">Your Balance</h1>
          <p className="amount">RS {balance}</p>
        </div>
      </div>
      <div className="eaccon2">
        <div className="imagecon2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="balanceimage"
          />
        </div>

        <div className="balancecon">
          <h1 className="balance">Your Income</h1>
          <p className="amount">RS {income}</p>
        </div>
      </div>
      <div className="eaccon3">
        <div className="imagecon3">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="balanceimage"
          />
        </div>

        <div className="balancecon">
          <h1 className="balance">Your Expenses</h1>
          <p className="amount">RS {expenses}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
