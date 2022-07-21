export default function Input({ email, setValue, label, type }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        value={email}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        className="form-control"
      />
    </div>
  );
}
