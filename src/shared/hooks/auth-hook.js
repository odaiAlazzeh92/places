import { useState, useEffect, useCallback } from "react"

let logoutTimer;

export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(false);
    const [tokenExpirationDate, setTokenExpirationDate] = useState();
  
    const login = useCallback((uId, token, expirationDate) => {
      setToken(token);
      setUserId(uId);
      const tokenExpirationD =
        expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
      setTokenExpirationDate(tokenExpirationD);
      localStorage.setItem(
        "userData",
        JSON.stringify({
          userId: uId,
          token: token,
          expiration: tokenExpirationD.toISOString(),
        })
      );
    }, []);
  
    const logout = useCallback(() => {
      setToken(null);
      setUserId(null);
      setTokenExpirationDate(null);
      localStorage.removeItem("userData");
    }, []);
  
    useEffect(() => {
      if (token && tokenExpirationDate) {
        const remainingTime =
          tokenExpirationDate.getTime() - new Date().getTime();
        logoutTimer = setTimeout(logout, remainingTime);
      } else {
        clearTimeout(logoutTimer);
      }
    }, [token, logout, tokenExpirationDate]);
  
    useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem("userData"));
      if (
        storedData &&
        storedData.token &&
        new Date(storedData.expiration) > new Date()
      ) {
        login(
          storedData.userId,
          storedData.token,
          new Date(storedData.expiration)
        );
      }
    }, [login]);
  
    return { userId, token, login, logout }
}