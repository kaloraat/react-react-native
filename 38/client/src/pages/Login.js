import { useState, useContext } from "react";
import Input from "../components/forms/Input";
import toast from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../context/auth";
import { saveInLocalStorage } from "../helpers/auth";
import { useNavigate } from "react-router-dom";
import Button from "../components/forms/Button";
import { Link } from "react-router-dom";

export default function Login() {
  // context
  const [auth, setAuth] = useContext(AuthContext);
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // hook
  const navigate = useNavigate();

  // console.log("context => ", auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // console.log("registering user", { name, email, password });
      const { data } = await axios.post(`/signin`, {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
        setLoading(false);
        return;
      } else {
        toast.success("Successfully logged in");
        // context
        setAuth(data);
        // save in localstorage
        saveInLocalStorage("auth", data);
        setLoading(false);
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ marginTop: "-100px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="fw-bold mb-3">Login</h1>

            <form>
              <Input
                value={email}
                setValue={setEmail}
                label="Email"
                type="email"
              />
              <Input
                value={password}
                setValue={setPassword}
                label="Password"
                type="password"
              />
              <Button
                handleSubmit={handleSubmit}
                email={email}
                password={password}
                loading={loading}
              />
            </form>

            <p className="mt-3">
              <Link to="/forgot-password">Forgot password?</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}