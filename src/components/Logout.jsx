import React from 'react'
import { Navigate } from 'react-router-dom';

function Logout() {
  localStorage.clear();
  return (
    <div>
      <p>you are logged out successfully !!</p>
     {/* <button onClick={handleClick}> go to login </button>  */}
     <Navigate to="/login">go to login  </Navigate>
    </div>
  )
}

export default Logout;