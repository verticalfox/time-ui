// import React, { useContext , useEffect,useLayoutEffect } from 'react'
// import { Navigate, Outlet } from 'react-router';
// import authContext from './context/authContext';

// const useAuth=()=> {
//   const user = {loggedIn :true};
//   return (user&&user.loggedIn);

// }

// console.log("in protected routes globally , value of role is :" + localStorage.getItem('user_role'));
// const role_to_update=localStorage.getItem('user_role');
// function ProtectedRoutesUser() {

//   const authCurrentContext= useContext(authContext);
//   authCurrentContext.updateRole(role_to_update);
//   // console.log(localStorage.getItem('user_role'));
//   // useLayoutEffect(()=>{
//   //   console.log(localStorage.getItem('user_role'));
//   //     authCurrentContext.updateRole(localStorage.getItem('user_role'));
//   //     console.log("updated role in protected routes user" + authCurrentContext.userRole);
//   // });

// const user_role= authCurrentContext.userRole;

//   const isAuth = useAuth();
//  return (
//    isAuth && (user_role==='user')? <Outlet/> :<Navigate to="/unauthorized-user"/>
//  )
// }


// function ProtectedRoutesAdmin() {

//   const authCurrentContext= useContext(authContext);
//   authCurrentContext.updateRole(role_to_update);
//   // console.log(localStorage.getItem('user_role'));
//   // useLayoutEffect(()=>{
//   //   console.log(localStorage.getItem('user_role'));
//   //     authCurrentContext.updateRole(localStorage.getItem('user_role'));
//   //     console.log("updated role in protected routes admin" + authCurrentContext.userRole);
//   // });

// const user_role= authCurrentContext.userRole;


//  const isAuth = useAuth();
// return (
//   isAuth && (user_role==='admin')?<Outlet/> : <Navigate to="/unauthorized-user"/>
// )
// }
// export {ProtectedRoutesAdmin , ProtectedRoutesUser};