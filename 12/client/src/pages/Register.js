import { useState } from "react";
import Input from "../components/forms/Input";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ marginTop: "-100px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="fw-bold mb-3">Register</h1>

            <form>
              <Input value={name} setValue={setName} label="Name" type="text" />
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
              <Input
                value={confirm}
                setValue={setConfirm}
                label="Confirm password"
                type="password"
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!name || !email || email < 6 || password.length < 6}
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
