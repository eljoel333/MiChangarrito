
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../App";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Item = ({ id, name, img, price }) => {
  return (
    <Col  md={4} xs={6} className="my-3 px-4">
     
       
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
              Precio: ${price}
              </Card.Text>
              <Card.Text>
              <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
              </Card.Text>
            </Card.Body>
          </Card>
       
    
    </Col>
  );
};

export default Item;
