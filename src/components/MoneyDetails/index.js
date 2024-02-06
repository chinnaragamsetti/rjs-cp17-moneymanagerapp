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
          <div className="textcontent">
            <p className="amount">RS </p>
            <p className="amount" data-testid="balanceAmount">
              {balance}
            </p>
          </div>
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
          <div className="textcontent">
            <p className="amount">RS </p>
            <p className="amount" data-testid="incomeAmount">
              {income}
            </p>
          </div>
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
          <div className="textcontent">
            <p className="amount">RS </p>
            <p className="amount" data-testid="expensesAmount">
              {expenses}
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}
export default MoneyDetails
