import "../App.css";
import { Button, Modal, Table } from "react-bootstrap";

function ModalDetail({ handleClose, show, client, delivery }) {
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body>
          <h4 className="text-center">Datos del pedido</h4>
          <br></br>
          <br></br>
          <div class="mb-3 row">
            <label for="staticEmail" class="col-6 col-form-label">
              Código de pedido
            </label>
            <div class="col-6">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value={delivery.id}
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="staticEmail" class="col-6 col-form-label">
              Estado de pedido
            </label>
            <div class="col-6">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value={delivery.status}
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="staticEmail" class="col-6 col-form-label">
              Fecha pedido
            </label>
            <div class="col-6">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value={delivery.create_date}
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
                <td>{client.name}</td>
              </tr>
              <tr>
                <th scope="row">Nº de Contacto</th>
                <td>{client.phone}</td>
              </tr>
              <tr>
                <th scope="row">Dirección</th>
                <td>{client.address}</td>
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
                <th>Descripción</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{delivery.group}</td>
                <td>{delivery.sub_group}</td>
                <td>{delivery.amount}</td>
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
          {/* <Button variant="primary" onClick={handleClose}>
            Entrega
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDetail;
