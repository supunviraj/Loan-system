import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoanApply from "./pages/LoanApply";
import LoanList from "./pages/LoanList";

function App() {
  return (
    <Router>
      <div className="container mt-6">
        <nav className="flex gap-4 mb-6">
          <Link to="/" className="text-blue-600 hover:text-blue-800">Loan List</Link>
          <Link to="/apply" className="text-blue-600 hover:text-blue-800">Apply Loan</Link>
        </nav>
        <Routes>
          <Route path="/" element={<LoanList />} />
          <Route path="/apply" element={<LoanApply />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
