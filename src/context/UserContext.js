import React, { createContext, useContext, useState } from 'react'
import { AUTH_TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from '../utils/constant';
import { getItem, setItem } from '../utils/storage';
export const getAuthToken = () => getItem(AUTH_TOKEN_STORAGE_KEY)

const DEFAULT_VALUES = {
  isLoggedIn: !!getAuthToken(),
  ...(JSON.parse(getItem(USER_STORAGE_KEY))  || {})
};

const UserContext = createContext(DEFAULT_VALUES);

export const UserProvider = (props) => {
  const [user, setUserData] = useState({
    ...DEFAULT_VALUES,
  })
  
  const setUser = (user, token) => {
    setItem(AUTH_TOKEN_STORAGE_KEY, token)
    setItem(USER_STORAGE_KEY, JSON.stringify(user));
    const authToken = getAuthToken();

    setUserData({
      ...DEFAULT_VALUES,
      ...user,
      token: authToken,
      isLoggedIn: !!authToken,
    })
  }

  const logoutUser = () => {
    localStorage.clear();
    setUserData({ ...DEFAULT_VALUES })
  }

  const contextValue = {
    ...user,
    setUser,
    logoutUser,
  };
  
  return (
    <UserContext.Provider value={contextValue}>
        {props.children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);

export default UserContext;