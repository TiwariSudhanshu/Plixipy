import BrandPage from "./pages/BrandPage";
import Home from "./pages/home";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/brand" element={<BrandPage />} />
      <Route path="/register" element={<Signup />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
