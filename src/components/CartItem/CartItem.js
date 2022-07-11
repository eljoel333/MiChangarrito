import { useContext } from "react";
import CartContext from "../../context/CartContext";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const CartItem = ({ id, name, quantity, price }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemove = (id) => {
    removeItem(id);
  };

  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-3 me-auto">
          <div className="fw-bold"><strong>Nombre: </strong>{name}</div>
        </div>
        <div className="ms-2 me-auto">
          <div className="fw-bold">
          <strong>{"Cantidad: "}</strong>
            <Badge bg="primary" pill>
              {quantity}
            </Badge>
          </div>
        </div>
        <div className="ms-2 me-auto">
          <div className="fw-bold"><strong>Precio x Unidad:</strong> ${price}</div>
        </div>
        <div className="ms-2 me-auto">
          <div className="fw-bold"><strong>Subtotal:</strong> ${price * quantity}</div>
        </div>
       

        <div className="ms-2 me-auto">
          <Button variant="outline-danger" onClick={() => handleRemove(id)}>
            X
          </Button>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default CartItem;
