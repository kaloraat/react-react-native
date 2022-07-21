import { useState, useContext } from "react";
import Input from "../components/forms/Input";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../context/auth";
import { saveInLocalStorage } from "../helpers/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // context
  const [auth, setAuth] = useContext(AuthContext);
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // hook
  const navigate = useNavigate();

  // console.log("context => ", auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log("registering user", { name, email, password });
      const { data } = await axios.post(`${process.env.REACT_APP_API}/signin`, {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
        return;
      } else {
        // context
        setAuth(data);
        // save in localstorage
        saveInLocalStorage("auth", data);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ marginTop: "-100px" }}
    >
      <Toaster />
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
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary"
                disabled={!email || email < 6 || password.length < 6}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
