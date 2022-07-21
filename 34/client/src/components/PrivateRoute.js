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
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/auth-check`,
        {
          headers: {
            Authorization: auth.token,
          },
        }
      );
      console.log("AUTH CHECK RES.DATA", data);
    };
    authCheck();

    if (!auth) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [auth]);

  return loading ? <LoadingToRedirect /> : <Outlet />;
}
