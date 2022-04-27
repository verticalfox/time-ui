import React from 'react'
import { Navigate } from 'react-router';

function UnauthorizedView() {
  localStorage.clear();
  return (
    <div>You are not authorized to view this page !! 
   { <Navigate to="/login">  </Navigate>}
    </div>
  )
}

export default UnauthorizedView