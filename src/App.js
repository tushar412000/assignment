import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Transaction from './components/Transaction';
import Data from './components/Data';

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};


export default App;
