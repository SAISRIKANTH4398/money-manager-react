import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props

  const {id, title, amount, type} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="table-row">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">Rs {amount}</p>
      <p className="transaction-text">{type}</p>
      <div className="delete-container">
        <button
          type="button"
          className="delete-button"
          onClick={onDeleteTransaction}
          testid="delete"
        >
          <img
            className="delete-icon"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
