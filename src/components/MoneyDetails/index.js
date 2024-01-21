// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <li className="statuscontainer">
      <div className="eaccon1">
        <div className="imagecon1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="balanceimage"
          />
        </div>

        <div className="balancecon">
          <p className="balance">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            RS {balance}
          </p>
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
          <p className="balance">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            RS {income}
          </p>
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
          <p className="balance">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            RS {expenses}
          </p>
        </div>
      </div>
    </li>
  )
}
export default MoneyDetails
