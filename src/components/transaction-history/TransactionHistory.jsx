import css from './TransactionHistory.module.css';
import PropTypes from "prop-types";

export const TransactionHistory = ({transactions})=>{
    return <table className={css.transactions}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
  {transactions.map(transaction=>(
 <tr key={transaction.id}>
 <td>{transaction.type}</td>
 <td>{transaction.amount}</td>
 <td>{transaction.currency}</td>
</tr>
  ))}
    </tbody>
  </table>
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }