// Write your code here

import './index.css'

const TransactionItem = props => {
  const {deleteTransaction, details} = props
  const {id, title, amount, type} = details
  const onDelete = () => {
    deleteTransaction(id, type, title, amount)
    console.log(amount)
  }
  return (
    <li className="contentlist">
      <p className="transactiondetails">{title}</p>
      <p className="transactiondetails">{amount}</p>
      <p className="transactiondetails">{type}</p>
      <button
        type="button"
        className="deletebutton"
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="deleteicon"
          data-testid="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
