import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItemList from "../CartItemList/CartItemList.js";

import { useNotification } from "../../notification/Notification";

import FormShop from "../FormShop/FormShop";

import {
  addDoc,
  collection,
  writeBatch,
  getDocs,
  query,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../../services/firebase/index";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const { cart, totalQuantity, getTotal, clearCart } = useContext(CartContext);

  const total = getTotal();

  const setNotification = useNotification();

  const handleCreateOrder = () => {
    setLoading(true);

    const objOrder = {
      buyer: {
        name: "joel gaspar",
        email: "joelcoder@coder.com",
        phone: "544556677",
        address: "mi direccion",
      },
      items: cart,
      total: total,
    };

    const batch = writeBatch(db);

    const ids = cart.map((prod) => prod.id);

    const outOfStock = [];

    const collectionRef = collection(db, "products");

    getDocs(query(collectionRef, where(documentId(), "in", ids)))
      .then((response) => {
        response.docs.forEach((doc) => {
          const dataDoc = doc.data();

          const prod = cart.find((prod) => prod.id === doc.id);
          const prodQuantity = prod.quantity;

          if (dataDoc.stock >= prodQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
          } else {
            outOfStock.push({ id: doc.id, ...dataDoc });
          }
        });
      })
      .then(() => {
        if (outOfStock.length === 0) {
          const collectionRef = collection(db, "orders");
          return addDoc(collectionRef, objOrder);
        } else {
          return Promise.reject({ type: "out_of_stock", products: outOfStock });
        }
      })
      .then(({ id }) => {
        batch.commit();
        clearCart();
        // setNotification('success',`Su orden se genero correctamente. El id de su orden es: ${id}`)

        toast(`Su orden se genero correctamente. El id de su orden es: ${id}`);
      })
      .catch((error) => {
        if (error.type === "out_of_stock") {
          // setNotification('error','Hay productos que no tienen stock')
          toast(`Hay productos que no tienen stock`);
        } else {
          console.log(error);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // const handleUpdateStock = () => {
  //     const docRef = doc(db, 'products', 'UhQsaWPNkWSOqT9jOAWm')

  //     updateDoc(docRef, { stock: 1000 })
  // }

  if (loading) {
    return <h1>Se esta generando su orden...</h1>;
  }

  if (totalQuantity === 0) {
    return <h1>No hay productos en el carrito</h1>;
  }

  return (
    <Container >
      <Row>
        <h1>Tu carrito de compras</h1>
      </Row>
      <Row>
      </Row>

      <CartItemList productsAdded={cart} />

      <Row className="text-right">
        <h3>Total: ${total}</h3>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={4} xs={6} className="g-4">
          <Button variant="danger" onClick={() => clearCart()}>
            Limpiar carrito
          </Button>
        </Col>
      <FormShop></FormShop>

        <Col md={4} xs={6} className="g-4">
          <Button variant="success" onClick={handleCreateOrder}>
            Generar Orden
          </Button>
        </Col>
      </Row>

      {/* <button onClick={handleUpdateStock} className="Button">Stock 1000</button> */}
    </Container>
  );
};

export default Cart;
