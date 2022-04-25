import React from 'react'
import { Navigate, Outlet } from 'react-router';

const useAuth=()=> {
  const user = {loggedIn :true};
  return (user&&user.loggedIn);

}
var user=false;
var admin=false;


const user_role = localStorage.getItem('user_role');
console.log("Protected routes | role | : " + user_role);
if(user_role==='user') {
  user=true;
}
if(user_role==='admin') {
  admin=true;
}

console.log("value of user in Protected Routes:" + user , "value of admin in Protected Routes :" + admin);
function ProtectedRoutesUser() {

  const isAuth = useAuth();
 return (
   isAuth && user? <Outlet/> :<Navigate to="/unauthorized-user"/>
 )
}

function ProtectedRoutesAdmin() {
 const isAuth = useAuth();
return (
  isAuth && admin?<Outlet/> : <Navigate to="/unauthorized-user"/>
)
}
export {ProtectedRoutesAdmin , ProtectedRoutesUser};