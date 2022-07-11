import { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <Row>
        <Col>
        <Button variant="dark" onClick={decrement}>
            <span>-</span>
          </Button>
        <span className="my-3 px-4" >{quantity}</span>
          <Button variant="dark" onClick={increment}>
          <span>  + </span>
          </Button>
          
         
        </Col>
      </Row>
      <Row className="my-3 px-4" >
        <Col>
          <Button variant="primary" onClick={() => onAdd(quantity)}>
          <span>  Agregar al carrito </span>
          </Button>
        </Col>
      </Row>
    </>
  );
};
export default ItemCount;
