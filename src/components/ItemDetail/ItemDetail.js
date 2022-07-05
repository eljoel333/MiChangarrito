import './ItemDetail.css'
import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'
import {useNotification }from '../../notification/Notification'
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const setNotification = useNotification();



    const handleOnAdd = (quantity) => {
        setNotification('error',`se agregaron ${quantity} ${name}`)
        addItem({ id, name, price, quantity})
        setQuantityAdded(quantity)
    }

    return (
        <Col  md={12} xs={12} className="g-4">
     
       
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Title>
              Categoria: {category}

              </Card.Title>
              <Card.Text className='text-justify'>
              Descripción: {description}
              </Card.Text>
              <Card.Title></Card.Title>
              <Card.Text>
              Precio: ${price}
              </Card.Text>
              <Card.Text className='text-center'>
              { quantityAdded === 0 
                    ?  <ItemCount stock={stock} onAdd={handleOnAdd} />
                    :  <Link to='/cart'>Terminar compra</Link>
                }
              </Card.Text>
            </Card.Body>
          </Card>
     
    
    </Col>
    )
}

export default ItemDetail

