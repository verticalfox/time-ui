
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./SideBar";
import 'bootstrap/dist/css/bootstrap.css';
import Content from "./Content";
import "./App.css";
import Login from './pages/Login';
import { UserProvider } from './context/UserContext';
import { useToggle } from './hooks';




const AppLayout = () => {
  const [sidebarIsOpen, toggleSidebar] = useToggle();

  return (
    <div className='App wrapper'>
      <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
      <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
    </div>
  )
}

const App = () => (
  <>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </>
);

export default App;

