import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import { Toaster } from "react-hot-toast"; // Import Toaster

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
