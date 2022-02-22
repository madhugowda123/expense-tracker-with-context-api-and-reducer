import "./App.css";
import { AddTransaction } from "./componenets/AddTransaction";
import { Balance } from "./componenets/Balance";
import { Header } from "./componenets/Header";
import { IncomeExpense } from "./componenets/IncomeExpense";
import { TransactionList } from "./componenets/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <div>
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
