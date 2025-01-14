# Expenses Tracker App

This is a simple React application built with TypeScript that fetches and displays a list of expenses. The app uses a custom hook (`useFetchExpenses`) to fetch data from an API and renders the expenses in a table format.

## Features

- Fetches data from an external API (`https://tip-transactions.vercel.app/api/transactions?page=1`).
- Displays expenses in a table with the following columns:
  - ID
  - Date (formatted as `HH:mm - dd/mm/yyyy`)
  - Amount (formatted as `£xx.xx`)
  - Merchant
  - Category
- Error and loading states to provide feedback to the user.

## Installation

To get started with the project, follow the steps below:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/expenses-tracker-app.git
