import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import QuestionPage from "./pages/QuestionPage";
import LoadingPage from "./pages/LoadingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/questions" element={<QuestionPage />} />
        <Route path="/loading" element={<LoadingPage />} />
      </Routes>
    </Router>
  );
}

export default App;