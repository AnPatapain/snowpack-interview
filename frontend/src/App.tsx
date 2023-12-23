import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";

const App: React.FC = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/dashboard" element={<DashBoard/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App;