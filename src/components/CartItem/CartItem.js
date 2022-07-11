import { useContext } from "react";
import CartContext from "../../context/CartContext";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const CartItem = ({ id, name, quantity, price }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemove = (id) => {
    removeItem(id);
  };

  return (
    <Table striped bordered hover variant="dark" responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Precio por unidad</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
          <th>Quitar producto</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{name}</td>
          <td>${price}</td>
          <td>{quantity}</td>
          <td>${price * quantity}</td>
          <td>
            <Button variant="outline-danger" onClick={() => handleRemove(id)}>
              X
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CartItem;
