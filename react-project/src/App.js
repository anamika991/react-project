import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionHistory from "./components/TransactionHistory";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import  {JWTProvider} from "./context/JWTContext"; 

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="container">
          <Header />
          <JWTProvider>
          <>
          <Routes>
              <Route path="/" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/expense-tracker" element={<Balance />} />
              <Route path="/expense-tracker" element={<IncomeExpenses />} />
              <Route path="/expense-tracker" element={<TransactionHistory />} />
              <Route path="/expense-tracker" element={<AddTransaction />} />
          </Routes>
          </>
          </JWTProvider>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
