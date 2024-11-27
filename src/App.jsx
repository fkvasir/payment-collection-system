import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import PaymentRecords from "./components/screens/paymentRecords";
import StudentRecords from "./components/screens/studentRecords";
import Items from "./components/screens/items";
import Dashboard from "./components/screens/dashboard";
import TransactionHistory from "./components/screens/transactionHistory";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 ml-64 overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/payment-records" element={<PaymentRecords />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/student-records" element={<StudentRecords />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
