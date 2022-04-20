
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./SideBar";
import 'bootstrap/dist/css/bootstrap.css';
import Content from "./Content";
import "./App.css";
import Login from './Login';
function App() {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (<BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<div className='App wrapper'>
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
      </div>}>
      </Route>
    </Routes>
  </BrowserRouter>);



}

export default App;
