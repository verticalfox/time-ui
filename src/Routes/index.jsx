import { Navigate, Outlet, useLocation } from "react-router";
import { useUserContext } from "../context/UserContext";
import paths from "../paths";
import { USER_STORAGE_KEY } from "../utils/constant";
import { getItem } from "../utils/storage";
import React, { Component }  from 'react';
export const AuthenticatedRoute = ({ children }) => {
  let { isLoggedIn } = useUserContext();
  let location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to={paths.login} state={{ from: location }} replace />;
  }

  return children;
}

export const UnAuthenticatedRoute = ({ children }) => {
  let { isLoggedIn } = useUserContext();
  let location = useLocation();

  if (isLoggedIn) {
    return <Navigate to={paths.home} state={{ from: location }} replace />;
  }

  return children;
}

export const withAuthenticate = WrappedComponent =>  {
  const HOC = props => (
    <AuthenticatedRoute>
      <WrappedComponent {...props}/>
    </AuthenticatedRoute>
  );
  
  return HOC;
}

export const withoutAuthenticate = WrappedComponent =>  {
  const HOC = props => (
    <UnAuthenticatedRoute>
      <WrappedComponent {...props}/>
    </UnAuthenticatedRoute>
  );
  
  return HOC;
}

export const PrivateAdminRoutes = ({ children }) => {
  let { isLoggedIn ,} = useUserContext();
  const userData= JSON.parse(getItem(USER_STORAGE_KEY));
  let location = useLocation();

return( isLoggedIn&&(userData.role === 'admin')? <Outlet/> : <Navigate to="/login"></Navigate> );

  


}