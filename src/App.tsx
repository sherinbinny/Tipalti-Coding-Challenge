import { useFetchExpenses, Expense } from './useFetchExpenses';

function App() {
  const { expenses, loading, error } = useFetchExpenses();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Expenses</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Merchant</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((transaction: Expense) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{new Date(transaction.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(transaction.date).toLocaleDateString('en-GB')}</td>
              <td>£{transaction.amount.toFixed(2)}</td>
              <td>{transaction.merchant}</td>
              <td>{transaction.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

