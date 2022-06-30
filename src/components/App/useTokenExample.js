// Changing between sessionStorage and localStorage can allow different benefits

// Using localStorage to Save Data Across Windows

// Unlike sessionStorage, localStorage will save data even after the session ends. This can be more convenient, since it lets users open multiple windows and tabs without a new login, but it does have some security problems. If the user shares their computer, they will remain logged in to the application even though they close the browser. It will be the user’s responsibility to explicitly log out. The next user would have immediate access to the application without a login. It’s a risk, but the convenience may be worth it for some applications.

import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}