import { useState, useEffect } from 'react';

export interface Expense {
  id: number;
  date: string;
  amount: number;
  merchant: string;
  category: string;
}

export const useFetchExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch('https://tip-transactions.vercel.app/api/transactions?page=1');
        const data = await response.json();
        setExpenses(data.transactions);
      } catch (err) {
        setError('Failed to load expenses');
      } finally {
        setLoading(false);
      }
    };
    fetchExpenses();
  }, []);

  return { expenses, loading, error };
};