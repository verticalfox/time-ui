
import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./SideBar";
import 'bootstrap/dist/css/bootstrap.css';
import Content from "./Content";
import "./App.css";
import Login from './Login';
import UnauthorizedView from './components/UnauthorizedView';
import Logout from './components/Logout';
import AuthState from './context/AuthState';
function App() {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  // const user= localStorage.getItem('user_role');
  
  return (
  <>
 <AuthState>
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized-user" element={<UnauthorizedView/>}/>
      <Route exact path ="/logout" element={<Logout/>}/>
      <Route path="*" element={<div className='App wrapper'>
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
      </div>}>
      </Route>
    </Routes>
  </BrowserRouter>
  </AuthState>
  </>);



}

export default App;

