import { useContext } from "react";
import CartContext from "../../context/CartContext";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

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
        <div className="ms-2 me-auto">
          <div className="fw-bold">{name}</div>
          Precio x Unidad: ${price}
          Subtotal: ${price * quantity}
        </div>
        <Badge bg="primary" pill>
          {quantity}
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default CartItem;
