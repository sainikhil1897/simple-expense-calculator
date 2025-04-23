import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import ExpenseForm from './components/ExpenseForm.jsx';
import ExpenseList from './components/ExpenseList.jsx';
import ExpenseSummary from './components/ExpenseSummary.jsx';
import './index.css';

const App = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [expense, setExpense] = useState([]);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAddExpense = (e) => {
    e.preventDefault();
  
    const newExpense = {
      description: description.trim().replace(/\s+/g, ' '),
      amount: Number(amount),
      date,
      category,
    };
  
    if (!description || !date || !category) {
      setError('Please fill in all fields');
      setIsSuccess(false);
      return;
    } else if (amount <= 0) {
      alert('Please enter a valid amount');
      setIsSuccess(false); 
      return;
    }
    setExpense([...expense, newExpense]);
    setError('');             
    setIsSuccess(true);       
    
    setDescription('');
    setAmount('');
    setDate('');
    setCategory('');

    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };
  
  const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-brand">Expense Tracker</div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/expenses" className="nav-link">Expense List</Link>
          </li>
          <li className="nav-item">
            <Link to="/summary" className="nav-link">Summary</Link>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={
              <ExpenseForm
                description={description}
                setDescription={setDescription}
                amount={amount}
                setAmount={setAmount}
                date={date}
                setDate={setDate}
                category={category}
                setCategory={setCategory}
                handleSubmit={handleAddExpense}
                error={error}
                success={isSuccess}
                setSuccess={setIsSuccess}
              />
            } />
            <Route path="/expenses" element={<ExpenseList expense={expense} />} />
            <Route path="/summary" element={<ExpenseSummary expense={expense} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;