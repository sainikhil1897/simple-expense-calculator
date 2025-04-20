import React from "react";

const ExpenseSummary = ({ expense }) => {
    const totalExpenses = expense.length
    const totalAmount = expense.reduce((acc, item) => acc + item.amount, 0);
    const summary = expense.reduce((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + item.amount;
        return acc;
      }, {});
      
    
    return (
        <div className="card-container">
            <h2>Expense Summary</h2>
            <p>{console.log(summary)}</p>
            {totalExpenses === 0 ? (
                <p>No expenses added yet.</p>
            ) : (
                <table className="expense-table">
                    <tbody>
                        {Object.entries(summary).map(([category, total]) => (
                            <tr key={category}>
                                <td>{category}</td>
                                <td>{total}</td>
                            </tr>
                        ))}
                        <tr>
                            <td>Total Expenses:</td>
                            <td>{totalExpenses}</td>
                        </tr>
                        <tr>
                            <td>Total Amount:</td>
                            <td>{totalAmount}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ExpenseSummary;