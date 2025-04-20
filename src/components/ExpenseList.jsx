import React from "react";
import ExpenseItem from "./ExpenseItem.jsx";

const ExpenseList = ({ expense }) => {
  return (
    <div className="card-container">
      <h2>Expense List</h2>
      {expense.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <table className="expense-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
          {expense.map((item, index) => (
              <ExpenseItem
                key={index}
                description={item.description}
                amount={item.amount}
                date={item.date}
                category={item.category}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenseList;
