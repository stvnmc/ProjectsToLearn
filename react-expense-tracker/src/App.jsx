import { GlobalProvider } from "./context/GlobalState";
import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import ExpenseChart from "./components/ExpenseChart";

const App = () => {
  return (
    <GlobalProvider>
      <section>
        <div className="expenseTracker">
          <IncomeExpenses />
          <Balance />
          <TransactionForm />
        </div>
        <div className="history">
          <ExpenseChart />
          <TransactionList />
        </div>
      </section>
    </GlobalProvider>
  );
};

export default App;
