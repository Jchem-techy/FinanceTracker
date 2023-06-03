import './Home.css';
import useFirestore from '../../hooks/useFirestore';
import { colRef } from '../../firebase/config';
export default function TransactionList({ transactions }) {
  const { deleteDocument } = useFirestore(colRef);
  return (
    <ul className='transactions'>
      {transactions.map((transaction) => {
        return (
          <li key={transaction.id}>
            <p className='name'>{transaction.name}</p>

            <p className='amount'>${transaction.amount}</p>
            <button onClick={() => deleteDocument(transaction.id)}>x</button>
          </li>
        );
      })}
    </ul>
  );
}
