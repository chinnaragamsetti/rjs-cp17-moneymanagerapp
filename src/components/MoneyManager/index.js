import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'
import './index.css'

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
    amount: '',
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
    this.setState({amount: parseInt(event.target.value)})
  }

  onChangetype = event => {
    this.setState({type: event.target.value})
  }

  onAddbutton = event => {
    event.preventDefault()
    const {title, type, amount, income, expenses} = this.state
    if (type === 'INCOME') {
      if (income === 0) {
        this.setState({income: amount})
        this.setState(prevState => ({balance: prevState.income - expenses}))
        this.setState({title: ''})
        this.setState({amount: ''})
      } else {
        this.setState(prevState => ({income: prevState.income + amount}))
        this.setState(prevState => ({balance: prevState.income - expenses}))
        this.setState({title: ''})
        this.setState({amount: ''})
      }
    } else if (type === 'EXPENSES') {
      if (expenses === 0) {
        this.setState({expenses: amount})
        this.setState(prevState => ({balance: income - prevState.expenses}))
        this.setState({title: ''})
        this.setState({amount: ''})
      } else {
        this.setState(prevState => ({expenses: prevState.expenses + amount}))
        this.setState(prevState => ({balance: income - prevState.expenses}))
        this.setState({title: ''})
        this.setState({amount: ''})
      }
    }

    const newtransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      list: [...prevState.list, newtransaction],
    }))
  }

  deleteTransaction = (id, type, amount) => {
    const {list} = this.state
    const {income, expenses} = this.state

    console.log(`${amount} a`)
    console.log(`${type} t`)
    console.log(`${income} i`)
    console.log(`${expenses} e`)
    const afterdeletelist = list.filter(each => each.id !== id)
    if (type === 'INCOME') {
      this.setState({list: afterdeletelist})
      this.setState(prevState => ({income: prevState.income - amount}))
      this.setState(prevState => ({balance: prevState.income - expenses}))
    } else {
      this.setState({list: afterdeletelist})
      this.setState(prevState => ({expenses: prevState.expenses - amount}))
      this.setState(prevState => ({balance: income - prevState.expenses}))
    }
  }

  render() {
    const {title, amount, balance, income, expenses, list} = this.state

    return (
      <div className="maincontainer">
        <div className="profilecontainer">
          <h1 className="name">Hi, Richard</h1>
          <p className="greet">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>
        <MoneyDetails balance={balance} income={income} expenses={expenses} />
        <div className="bottomcontainer">
          <form className="inputscontainer" onSubmit={this.onAddbutton}>
            <h1 className="heading">Add Transaction</h1>
            <label htmlFor="title" className="title">
              TITLE
            </label>
            <input
              id="title"
              type="text"
              value={title}
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
              value={amount}
              onChange={this.onChangeamount}
            />
            <p className="title">Type</p>
            <select className="type" onChange={this.onChangetype}>
              <option value={transactionTypeOptions[0].optionId}>Income</option>
              <option value={transactionTypeOptions[1].optionId}>
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
