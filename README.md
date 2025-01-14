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
git clone https://github.com/sherinbinny/Tipalti-Coding-Challenge.git
```

### 2. Install dependencies

Navigate to the project directory and install the required dependencies:

cd expenses-tracker-app
npm install

### 3. Run the app
To run the development server, use the following command:

npm run dev
The app will be available at http://localhost:5173/ by default.

### Technologies Used
React
TypeScript
Vite (for bundling and development server)
Fetch API for data fetching

## Screenshot

![Screenshot](/src/Screenshot.png)

