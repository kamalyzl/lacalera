import "../App.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { data } from "../utils/data";
import Modal from "../components/modal";

const { user } = JSON.parse(data);

function Home() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <main className="container">
      <br></br>
      <br></br>
      <h2>Pedidos</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nº de Pedido</th>
            <th scope="col">Estado</th>
            <th scope="col">Fecha</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          {user.pedido && (
            <tr>
              <th scope="row">1</th>
              <td>{user.pedido.id}</td>
              <td>{user.pedido.status}</td>
              <td>{user.pedido.date}</td>
              <td>
                <Button variant="primary" onClick={handleShow}>
                  Detalle
                </Button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Modal show={show} handleClose={handleClose} data={user.pedido} />
    </main>
  );
}

export default Home;
