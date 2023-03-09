import { useState } from "react";
import { Header } from "./pages/components/header/header";
import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  const renderPage = () => {
    if (currentPage == 'home' ) {
      return <Home />
    } else {
      return <Login />
    }
  };

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      <div>{renderPage()}</div>
    </div>
  );
}

export default App;
