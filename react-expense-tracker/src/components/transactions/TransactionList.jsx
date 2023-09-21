import React from "react";
import { useGlobalState } from "../../context/GlobalState";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useGlobalState();
  return (
    <div className="list">
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>{transaction.description}</p>
          <p>{transaction.amount}</p>
          <button
            onClick={() => {
              deleteTransaction(transaction.id);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
