import { useState } from "react";
import Input from "../components/forms/Input";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              <Input value={email} setValue={setEmail} />
              <Input value={password} setValue={setPassword} />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>

          <pre>{JSON.stringify({ email, password }, null, 4)}</pre>
        </div>
      </div>
    </div>
  );
}
