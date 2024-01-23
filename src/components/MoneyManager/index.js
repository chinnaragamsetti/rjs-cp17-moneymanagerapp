import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import './index.css'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

//  Write your code here
const initialList = []
class MoneyManager extends Component {
  state = {
    title: '',
    amount: 0,
    type: '',
    balance: 0,
    income: 0,
    expenses: 0,
    list: initialList,
  }

  onChangetitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeamount = event => {
    this.setState({amount: event.target.value})
  }

  onChangetype = event => {
    this.setState({type: event.target.value})
  }

  onAddbutton = event => {
    event.preventDefault()
    const {title, type, amount, balance, income, expenses, list} = this.state
    if (type === 'INCOME') {
      this.setState(prevState => ({
        income: prevState.income + amount,
        balance: prevState.income - expenses,
      }))
    } else {
      this.setState(prevState => ({
        expenses: prevState.expenses + amount,
        balance: prevState.balance - amount,
      }))
    }

    const newtransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({list: [...prevState.list, newtransaction]}))
  }

  deleteTransaction = (id, type, income, expenses, balance) => {
    const {list} = this.state
    const afterdeletelist = list.filter(each => each.id !== id)
    if (type === 'INCOME') {
      this.setState(prevState => ({
        list: afterdeletelist,
        income: prevState.income - income,
        balance: prevState.balance + income,
      }))
    } else {
      this.setState(prevState => ({
        list: afterdeletelist,
        expenses: prevState.expenses - expenses,
        balance: prevState.balance + expenses,
      }))
    }
  }

  render() {
    const {balance, income, expenses, list} = this.state
    return (
      <div className="maincontainer">
        <div className="profilecontainer">
          <h1 className="name">Hi, Richard</h1>
          <p className="greet">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>
        <MoneyDetails details={(balance, income, expenses)} />
        <div className="bottomcontainer">
          <form className="inputscontainer" onSubmit={this.onAddbutton}>
            <h1 className="heading">Add Transaction</h1>
            <label htmlFor="title" className="title">
              TITLE
            </label>
            <input
              id="title"
              type="text"
              onChange={this.onChangetitle}
              className="inputcontainer"
              placeholder="TITLE"
            />
            <label htmlFor="amount" className="title">
              AMOUNT
            </label>
            <input
              id="amount"
              className="inputcontainer"
              placeholder="AMOUNT"
              type="text"
              onChange={this.onChangeamount}
            />
            <p className="title">Type</p>
            <select name="type" className="type" onChange={this.onChangetype}>
              <option value={transactionTypeOptions[0].optionId}>Income</option>
              <option value={transactionTypeOptions[0].optionId}>
                Expenses
              </option>
            </select>
            <button type="submit" className="button">
              Add
            </button>
          </form>
          <div className="transactioncont">
            <h1 className="history">History</h1>
            <ul className="lists">
              <li className="contentlist">
                <p className="historydetails">Title</p>
                <p className="historydetails">Amount</p>
                <p className="historydetails">Type</p>
              </li>
              {list.map(each => (
                <TransactionItem
                  details={each}
                  key={each.id}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
