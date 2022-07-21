import { useContext, useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth";

export default function PrivateRoute() {
  // context
  const [auth, setAuth] = useContext(AuthContext);
  // state
  const [loading, setLoading] = useState(true);
  // hooks
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [auth]);

  return loading ? "Loading..." : <Outlet />;
}
