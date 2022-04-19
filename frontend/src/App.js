import React from "react";
import './App.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './home/home';
import Download from "./pdfs/pdf";
import Payment from "./pdfs/payment";
import Register from "./register/register";


function App() {
  return (

   
      <BrowserRouter>
        <div className="App">
          <Routes>
          <Route path = '/' exact element = {<Home />} />
          <Route path = '/register' exact element = {<Register />} />
          <Route path = '/rules' exact element = {<Download />} />
          <Route path = '/paymentrules' exact element = {<Payment />} />
          </Routes>
        </div>
      </BrowserRouter>
    
  
  );
}

export default App;
