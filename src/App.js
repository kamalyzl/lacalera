import "./App.css";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="Calera">
            Calera
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="Pedidos">
                  Pedidos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br></br>
      <main className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nº de Pedido</th>
              <th scope="col">Estado</th>
              <th scope="col">Fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>ABC123</td>
              <td>Pendiente</td>
              <td>21/11/2020</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>XYZ434</td>
              <td>Cerrado</td>
              <td>02/01/2021</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>ERF123</td>
              <td>Abierto</td>
              <td>09/11/2021</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
