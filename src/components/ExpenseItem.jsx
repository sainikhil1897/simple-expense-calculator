import React from "react";

const ExpenseItem = ({ description, amount, date, category }) => {

    // Inside ExpenseItem before the return:
    const formattedDate = new Date(date).toLocaleDateString('en-GB'); // 'en-GB' = dd/mm/yyyy

    return (

        <tr>
            <td>{description}</td>
            <td>{amount}</td>
            <td>{formattedDate}</td>
            <td>{category}</td>
        </tr>
    );
}

export default ExpenseItem;