import "../App.css";

function Header({ logout }) {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Pedidos</a>
        <form class="d-flex">
          <button class="btn btn-outline-success" type="button" onClick={logout}>
            Salir
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
