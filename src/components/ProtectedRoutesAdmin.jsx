import React, { useContext , useEffect} from 'react'
import { Navigate, Outlet } from 'react-router';
import authContext from '../context/authContext';

const useAuth=()=> {
  const user = {loggedIn :true};
  return (user&&user.loggedIn);

}

function ProtectedRoutesAdmin() {

const authCurrentContext= useContext(authContext);
useEffect(() => {
  authCurrentContext.updateRole(localStorage.getItem('user_role'));
}, )

const user_role= authCurrentContext.userRole;

 const isAuth = useAuth();
return (
  isAuth && (user_role==='admin')?<Outlet/> : <Navigate to="/unauthorized-user"/>
)
}
export default ProtectedRoutesAdmin;