import React, { useContext , useEffect } from 'react'
import { Navigate, Outlet } from 'react-router';
import authContext from './context/authContext';

const useAuth=()=> {
  const user = {loggedIn :true};
  return (user&&user.loggedIn);

}
var user=false;
var admin=false;

function ProtectedRoutesUser() {


// const user_role = localStorage.getItem('user_role');
const authCurrentContext=useContext(authContext);
const user_role= authCurrentContext.userRole;
console.log("Protected routes | role | : " + user_role);
  const isAuth = useAuth();
 return (
   isAuth && (user_role==='user')? <Outlet/> :<Navigate to="/unauthorized-user"/>
 )
}
function ProtectedRoutesAdmin() {
  // const user_role = localStorage.getItem('user_role');
const authCurrentContext=useContext(authContext);
const user_role= authCurrentContext.userRole;
console.log("Protected routes | role | : " + user_role);

 const isAuth = useAuth();
return (
  isAuth && (user_role==='admin')?<Outlet/> : <Navigate to="/unauthorized-user"/>
)
}
export {ProtectedRoutesAdmin , ProtectedRoutesUser};