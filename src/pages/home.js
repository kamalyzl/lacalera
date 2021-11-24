import "../App.css";
import { useState, useEffect } from "react";
import { getDatabase, ref, set, onValue, get, child } from "firebase/database";
import { Button } from "react-bootstrap";
import Modal from "../components/modal";
import Loader from "../components/loader";
import { dbRef } from "../config";
import axios from "axios";

const getDelivery = (id) => {
  return new Promise((resolve, reject) => {
    get(child(dbRef, `deliveries/${id}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const res = snapshot.val();
          resolve(res);
        } else {
          reject("No data available");
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getdbibm = () => {
  return axios
    .get("https://971a161f.us-south.apigw.appdomain.cloud/api/entries", {
      // params: {
      //   ID: 12345
      // }
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};

function Home({ data }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [user, setUser] = useState(false);
  const [deliveries, setDeliveries] = useState(null);
  const [delivery, setDelivery] = useState(null);

  useEffect(() => {
    axios
      .get("https://971a161f.us-south.apigw.appdomain.cloud/api/entries", {
        // params: {
        //   ID: 12345
        // }
      })
      .then(function (response) {
        const res = response.data.entries.filter(
          (item) => item.correo === data.email
        );

        setDeliveries(res);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    // get(child(dbRef, `users/${data.uid}`))
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //       const dbdeliveries = snapshot.val().deliveries;
    //       setUser(snapshot.val());
    //       return dbdeliveries;
    //     } else {
    //       console.log("No data available");
    //     }
    //   })
    //   .then((deliveryCodes) => {
    //     Promise.all(
    //       deliveryCodes.map((item) => getDelivery(item))
    //     ).then((result) => setDeliveries(result));
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, []);

  return (
    <main className="container-fluid">
      <br></br>
      <br></br>
      <h2>Pedidos</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Código</th>
            <th scope="col">Estado</th>
            <th scope="col">Fecha</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          {deliveries &&
            deliveries.map((delivery) => {
              console.info("delivery->>>>", delivery);
              return (
                <tr>
                  <td>{delivery.codigo || "-"}</td>
                  <td>{delivery.estado || "-"}</td>
                  <td>
                    {delivery.createdAt
                      ? new Date(delivery.createdAt).toLocaleString()
                      : "-"}
                  </td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => (setDelivery(delivery), handleShow())}
                    >
                      Detalle
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Modal
        show={show}
        handleClose={handleClose}
        client={user}
        delivery={delivery || {}}
      />
    </main>
  );
}

export default Home;
