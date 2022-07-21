export default function Input({ email, setValue }) {
  return (
    <div className="mb-3">
      <label className="form-label">Email address</label>
      <input
        value={email}
        onChange={(e) => setValue(e.target.value)}
        type="email"
        className="form-control"
      />
    </div>
  );
}
