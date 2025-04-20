import React, {useState} from 'react';
import ExpenseForm from './components/ExpenseForm.jsx';
import ExpenseList from './components/ExpenseList.jsx';
import ExpenseSummary from './components/ExpenseSummary.jsx';
import './index.css';

const App = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [expense,setExpense] = useState([]);
  const [error, setError] = useState('');

  const handleAddExpense = (e) => {
    e.preventDefault(); // prevents page reload
    
    const newExpense = {
      description: description.trim().replace(/\s+/g, ' '),
      amount: Number(amount),
      date,
      category,
    };
    console.log(newExpense);
    if(!description || !date || !category) {
      setError('Please fill in all fields');
      return;
    }
    else if (amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    else{
      setExpense([...expense, newExpense]);
    }
    setDescription('');
    setAmount('');
    setDate('');
    setCategory('');
  }
  return (
    <div>
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
      />

      <ExpenseList expense={expense}/>
      <ExpenseSummary expense={expense} />

    </div>
  );
}
export default App;