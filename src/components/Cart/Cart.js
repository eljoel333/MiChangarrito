import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItemList from "../CartItemList/CartItemList.js";

import { useNotification } from "../../notification/Notification";
import Form from "react-bootstrap/Form";

import { useForm } from "react-hook-form";

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
import {  toast } from "react-toastify";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropagateLoader from "react-spinners/PropagateLoader";

const Cart = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const { cart, totalQuantity, getTotal, clearCart } = useContext(CartContext);

  const total = getTotal();


  const handleCreateOrder = (data) => {
    console.log(data);
    setLoading(true);

    const objOrder = {
      buyer: {
        name: data.name,
        email: data.email,
        phone: String(data.tel),
        address: data.direccion,
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
    return (
      <Container>
        <Row className="justify-content-center">
          <h1>Se está generando su orden...</h1>
          

        </Row>
        <Row className="justify-content-center">
        <PropagateLoader color="#36D7B7" />
        
        </Row>
      </Container>
    );
  }

  if (totalQuantity === 0) {
    return (
      <Container>
        <Row className="justify-content-center">
          <h1>No hay productos en el carrito</h1>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="justify-content-center">
      <Row className="justify-content-center">
        <h1>Tu carrito de compras</h1>
      </Row>

      <CartItemList productsAdded={cart} />

      <Row className="justify-content-center">
        <h3>Total: ${total}</h3>
      </Row>
      <Row className="justify-content-center">
        <Button variant="danger" onClick={() => clearCart()}>
          Limpiar carrito
        </Button>
      </Row>
      <Row className="justify-content-md-center my-3 px-4">
        <Col md={12} xs={12} className="g-12">
          <h2>Formulario de compra</h2>
          <Form onSubmit={handleSubmit(handleCreateOrder)}>
            <Form.Group className="mb-12" controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                {...register("name", {
                  required: true,
                  maxLength: 50,
                })}
                placeholder="Nombre Completo"
                isInvalid={!!errors.name}
              />

              <Form.Control.Feedback type="invalid">
                {errors.name?.type === "required" && (
                  <p>El nombre es requerido</p>
                )}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                })}
                placeholder="Correo Electrónico"
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.type === "pattern" && (
                  <p>El formato del email es incorrecto</p>
                )}
                {errors.email?.type === "required" && (
                  <p>El correo electrónico es requerido</p>
                )}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="tel">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="number"
                {...register("tel", {
                  required: true,
                })}
                placeholder="Teléfono"
                isInvalid={!!errors.tel}
              />
              <Form.Control.Feedback type="invalid">
                {errors.tel?.type === "required" && (
                  <p>El Teléfono es requerido</p>
                )}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="direccion">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                {...register("direccion", {
                  required: true,
                })}
                placeholder="Dirección"
                isInvalid={!!errors.direccion}
              />
              <Form.Control.Feedback type="invalid">
                {errors.direccion?.type === "required" && (
                  <p>La dirección es requerida</p>
                )}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                {...register("chkMayor", {
                  required: true,
                })}
                label="Soy mayor de edad"
                isInvalid={!!errors.chkMayor}
              />
              <Form.Control.Feedback type="invalid">
                {errors.chkMayor?.type === "required" && (
                  <p>Debes aceptar la mayoria de edad</p>
                )}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Finalizar Compra
            </Button>
          </Form>
        </Col>
      </Row>

      {/* <button onClick={handleUpdateStock} className="Button">Stock 1000</button> */}
    </Container>
  );
};

export default Cart;
