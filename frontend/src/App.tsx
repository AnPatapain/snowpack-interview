import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import Profile from "./pages/Profile";

const App: React.FC = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<DashBoard/>}/>
              <Route path="/dashboard" element={<DashBoard/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/profile" element={<Profile/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App;