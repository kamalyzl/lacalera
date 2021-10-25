import "../App.css";

function Home() {
  return (
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
  );
}

export default Home;
