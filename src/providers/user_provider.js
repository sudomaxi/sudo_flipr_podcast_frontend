import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const signInUser = (username, email) => {
    setUser({
      username: username,
      email: email
    });
  }
  const signOut = () => {
    setUser({
      username: "",
      email: ""
    });
  }
  return (<UserContext.Consumer value={{ user, setUser, signInUser, signOut }}>
      {children}
    </UserContext.Consumer>);
}

export const useUserContext = () => useContext(
  UserContext
);