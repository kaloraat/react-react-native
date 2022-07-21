import { useContext, useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth";
import LoadingToRedirect from "./LoadingToRedirect";
import axios from "axios";

export default function PrivateRoute() {
  // context
  const [auth, setAuth] = useContext(AuthContext);
  // state
  const [loading, setLoading] = useState(true);
  // hooks
  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = async () => {
      const { data } = await axios.get(`/auth-check`);
      if (!data.ok) {
        setLoading(true);
      } else {
        setLoading(false);
      }
    };
    if (auth) authCheck();
  }, [auth]);

  return loading ? <LoadingToRedirect /> : <Outlet />;
}
