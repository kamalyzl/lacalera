import "../App.css";
import imgLaCalera from "../assets/lacalera.png";

function Header({ logout, nick }) {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src={imgLaCalera}
            alt=""
            width="20"
            height="24"
            class="d-inline-block align-text-top"
          />
          La Calera
        </a>

        <form class="d-flex">
          <span class="navbar-text m-1">{nick}</span>
          <button
            class="btn btn-outline-success"
            type="button"
            onClick={logout}
          >
            Salir
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
