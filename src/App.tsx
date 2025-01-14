// Import custom hook and Expense interface
import { useFetchExpenses, Expense } from './useFetchExpenses';

function App() {
  // Get structure of the data, loading state, and error state from the custom hook
  const { expenses, loading, error } = useFetchExpenses();

  // If the data is still loading, display a loading message
  if (loading) return <p>Loading...</p>;

  // If there was an error while fetching data, display the error message
  if (error) return <p>{error}</p>;
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Expenses</h1> {/* Header for the page */}

      {/* Table to display the fetched expenses */}
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
          {/* Iterate over the expenses array and display each expense in a table row */}
          {expenses.map((transaction: Expense) => (
            <tr key={transaction.id}>
              {/* Render each property of the expense in the respective columns */}
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

