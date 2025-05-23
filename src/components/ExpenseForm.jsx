import React from "react";
import '../index.css';

const ExpenseForm = ({
  description,
  setDescription,
  amount,
  setAmount,
  date,
  setDate,
  category,
  setCategory,
  handleSubmit,
  error,
  success
}) => {
  return (
    <div>
      <div className="card-container">
        <h2>Expense Form</h2>
        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
          <div>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div>
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} pattern="\d{2}/\d{2}/\d{4}" placeholder="dd/mm/yyyy"/>
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="" disabled hidden> -- Select Category --</option>
              <option value="food">Food</option>
              <option value="transportation">Transportation</option>
              <option value="entertainment">Entertainment</option>
              <option value="utilities">Utilities</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button id="submit">Add Expense</button>
        </form>
      </div>
      {success && <h3 className="success-message">Expense Added Successfully!</h3>}
    </div>
  );
}

export default ExpenseForm;
