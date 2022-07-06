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
          <div className="fw-bold">{name}</div>
        </div>
        <div className="ms-2 me-auto">
          <div className="fw-bold">Precio x Unidad: ${price}</div>
        </div>
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subtotal: ${price * quantity}</div>
        </div>
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            {" "}
            <Badge bg="primary" pill>
              {quantity}
            </Badge>
          </div>
        </div>

        <div className="ms-2 me-auto">
          <Button variant="danger" onClick={() => handleRemove(id)}>
            X
          </Button>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default CartItem;
