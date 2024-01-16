// Write your code here

import './index.css'

const TransactionItem = props => {
  const {deleteTransaction, details} = props
  const {id, income, title, amount, type} = details
  const onDelete = () => {
    deleteTransaction(id, income, title, amount)
  }
  return (
    <li className="contentlist">
      <p className="transactiondetails">{title}</p>
      <p className="transactiondetails">{amount}</p>
      <p className="transactiondetials">{income}</p>
      <button type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          data-testid="delete"
          className="deleteicon"
        />
      </button>
    </li>
  )
}
export default TransactionItem
