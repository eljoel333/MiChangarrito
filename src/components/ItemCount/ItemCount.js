import { useState } from 'react'
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       if(quantity < stock) {
           setQuantity(quantity+1)
       }
   }

   const decrement = () => {
       if(quantity > 1) {
           setQuantity(quantity - 1)
       }     
   }

   return(
       <div className='Counter'>          
            <div className='Controls'>
                <Button variant="dark" onClick={decrement}>-</Button>
                <h4 className='Number'>{quantity}</h4>
                <Button variant="dark" onClick={increment}>+</Button>
            </div>
            <div>
                <Button variant="primary" onClick={() => onAdd(quantity)}>Agregar al carrito</Button>
            </div>
       </div>
   )

}
export default ItemCount