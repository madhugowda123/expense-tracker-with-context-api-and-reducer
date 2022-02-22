import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li>
      {transaction.text}&nbsp;&nbsp;&nbsp;&nbsp;
      <span>
        {sign}₹{Math.abs(transaction.amount)}
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  );
};
