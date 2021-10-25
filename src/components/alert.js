import "../App.css";

function Alert({ message }) {
  return (
    <>
      <div class="alert alert-danger d-flex align-items-center" role="alert">
        <svg
          class="bi flex-shrink-0 me-2"
          width="24"
          height="10"
          role="img"
          aria-label="Danger:"
        >
          {/* <use xlink:href="#exclamation-triangle-fill" /> */}
        </svg>
        <div>{message}</div>
      </div>
    </>
  );
}

export default Alert;
