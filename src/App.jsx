// //Let's create a simple landing page for full stack quiz application.

// As discussed in the class, you need to clearly focus on following requirements and submit the tasks within the timeline.

// Instructions:

// 1. Setting Up React Environment
// 2. Creating Functional Components
// 3. Styling Components
// 4. Incorporating React Basics
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import MainContent from "./components/main/MainContent";
import FooterContent from "./components/footer/footer";

import './App.css';
import Quizz from "./components/quizz/Quizz";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />}></Route>
          <Route path="/quizz" element={<Quizz />}></Route>
        </Routes>
        <FooterContent />
      </Router>
    </div>
  )
}

export default App;