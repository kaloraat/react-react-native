import LoadingGif from "../../images/loading.gif";

export default function Button({
  handleSubmit,
  name = "",
  email,
  password,
  loading,
}) {
  return (
    <button
      onClick={handleSubmit}
      type="submit"
      className="btn btn-primary"
      disabled={(name && !name) || !email || email < 6 || password.length < 6}
    >
      {loading ? (
        <img src={LoadingGif} alt="loading" style={{ height: "20px" }} />
      ) : (
        "Submit"
      )}
    </button>
  );
}
