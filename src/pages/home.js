import "../App.css";
import { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <main className="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nº de Pedido</th>
            <th scope="col">Estado</th>
            <th scope="col">Fecha</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>ABC123</td>
            <td>Pendiente</td>
            <td>21/11/2020</td>
            <td>
              <Button variant="primary" onClick={handleShow}>
                Detalle
              </Button>
              {/* <a href="url">Editar</a> <br></br>
              <a href="url">Eliminar</a> */}
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>XYZ434</td>
            <td>Cerrado</td>
            <td>02/01/2021</td>
            <td>
              <Button variant="primary" onClick={handleShow}>
                Detalle
              </Button>
              {/* <a href="url">Editar</a> <br></br>
              <a href="url">Eliminar</a> */}
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>ERF123</td>
            <td>Abierto</td>
            <td>09/11/2021</td>
            <td>
              <Button variant="primary" onClick={handleShow}>
                Detalle
              </Button>
              {/* <a href="url">Editar</a> <br></br>
              <a href="url">Eliminar</a> */}
            </td>
          </tr>
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body>
          <h4 className="text-center">Datos del pedido</h4>
          <br></br>
          <br></br>
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-6 col-form-label">
              Nº de pedido
            </label>
            <div class="col-sm-6">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value="123456"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-6 col-form-label">
              Estado de pedido
            </label>
            <div class="col-sm-6">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value="Pendiente"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-6 col-form-label">
              Fecha pedido
            </label>
            <div class="col-sm-6">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value="21/11/2021"
              />
            </div>
          </div>
          <br></br>
          <br></br>
          <table class="table caption-top">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col-12">Datos del cliente</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Nombre</th>
                <td>Luciano</td>
              </tr>
              <tr>
                <th scope="row">Nº de Contacto</th>
                <td>123456</td>
              </tr>
              <tr>
                <th scope="row">Dirección</th>
                <td>Calle Cibertec 123</td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <br></br>
          <h5 className="text-center">Detalle del pedido</h5>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Grupo</th>
                <th>Código</th>
                <th>Descripción</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Huevo Gallina</td>
                <td>1</td>
                <td>Huevo Pardo</td>
                <td>20</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Modificar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Entrega
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
}

export default Home;
