import { useState, useEffect } from 'react';

// Define the Expense interface to type-check the data structure
export interface Expense {
  id: number;
  date: string;
  amount: number;
  merchant: string;
  category: string;
}

// Custom hook to fetch expenses from the API
export const useFetchExpenses = () => {
   // State to hold the fetched expenses
  const [expenses, setExpenses] = useState<Expense[]>([]);

   // State to track the loading status
  const [loading, setLoading] = useState(true);

  // State to track errors during the fetch operation
  const [error, setError] = useState<string | null>(null);

   // useEffect hook to fetch data on component mount
  useEffect(() => {
     // Async function to fetch expenses
    const fetchExpenses = async () => {
      try {
        // Sending a GET request to fetch the transactions (expenses) from the API
        const response = await fetch('https://tip-transactions.vercel.app/api/transactions?page=1');
        
        // Parse the response as JSON
        const data = await response.json();

        // Update the expenses state with the fetched transactions
        setExpenses(data.transactions);
      } catch (err) {

        // If an error occurs, update the error state
        setError('Failed to load expenses');
      } finally {
        // Set loading to false after the fetch operation completes (either success or failure)
        setLoading(false);
      }
    };

    // Call the fetchExpenses function
    fetchExpenses();
  }, []);

  // Return the expenses data, loading state, and error message for use in components
  return { expenses, loading, error };
};