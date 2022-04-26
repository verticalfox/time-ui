import React, { useState } from 'react'
import AuthContext from './authContext'
 const AuthState = (props) => {

      

     const [userRole , setUserRole]= useState("current_role");
     const updateRole=(val) => {
         setUserRole(val)
     }
  return (
    <AuthContext.Provider value={{userRole ,updateRole}}>
        {props.children}
    </AuthContext.Provider>
  );
}

export default AuthState;