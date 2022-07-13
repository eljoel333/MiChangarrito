import './ItemDetail.css'
import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'
import {useNotification }from '../../notification/Notification'
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import { ToastContainer, toast } from 'react-toastify';


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const setNotification = useNotification();



    const handleOnAdd = (quantity) => {
        // setNotification('error',`se agregaron ${quantity} ${name}`)
        toast(`Se agregaron ${quantity} ${name}, a tu carrito de compras.`)
        addItem({ id, name, price, quantity})
        setQuantityAdded(quantity)
    }

    return (
      <>
        <Col  md={12} xs={12} className="g-4">
     
       
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Title>
              <strong>Categoria: </strong>{category}

              </Card.Title>
              <Card.Text className='text-justify'>
              <strong>Descripción: </strong> {description}
              </Card.Text>
             
              <Card.Text>
              <strong> Precio: </strong>${price}
              </Card.Text>
              <div className='text-center'>
              { quantityAdded === 0 
                    ?  <ItemCount stock={stock} onAdd={handleOnAdd} />
                    :  <Link to='/cart'>Terminar compra</Link>
                }
              </div>
            </Card.Body>
          </Card>
     
    
    </Col>
    
    </>
    )
}

export default ItemDetail

