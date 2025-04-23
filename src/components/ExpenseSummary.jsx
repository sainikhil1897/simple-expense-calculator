import React from "react";

const ExpenseSummary = ({ expense }) => {
    const totalExpenses = expense.length
    const totalAmount = expense.reduce((acc, item) => acc + item.amount, 0);
    const summary = expense.reduce((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + item.amount;
        return acc;
    }, {});
    
    return (
        <div className="card-container expense-list-container">
            <h2>Expense Summary</h2>
            {totalExpenses === 0 ? (
                <p>No expenses added yet.</p>
            ) : (
                <table className="expense-table">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(summary).map(([category, total]) => (
                            <tr key={category}>
                                <td>{category}</td>
                                <td>₹{total.toFixed(2)}</td>
                            </tr>
                        ))}
                        <tr className="summary-row">
                            <td><strong>Total Expenses:</strong></td>
                            <td><strong>{totalExpenses}</strong></td>
                        </tr>
                        <tr className="summary-row">
                            <td><strong>Total Amount:</strong></td>
                            <td><strong>₹{totalAmount.toFixed(2)}</strong></td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ExpenseSummary;