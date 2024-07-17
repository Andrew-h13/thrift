import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";

interface DecodedToken {
  exp?: number;
}

function ProtectedRoute(children: any) {
  const [isAuthorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    auth().catch(() => setAuthorized(false));
  });

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
      const res = await api.post("/myapp/token/refresh/", {
        refresh: refreshToken,
      });
      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        setAuthorized(true);
      } else {
        setAuthorized(false);
      }
    } catch (error) {
      console.log(error);
      setAuthorized(false);
    }
  };

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setAuthorized(false);
      return;
    }
    const decoded: DecodedToken = jwtDecode(token);
    const tokenExpiration = decoded.exp;
    const now = Date.now() / 1000;

    if (tokenExpiration && tokenExpiration < now) {
      await refreshToken();
    } else {
      setAuthorized(true);
    }
  };
  if (isAuthorized === null) {
    return <div>loading...</div>;
  }

  return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;