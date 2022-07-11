
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import {  useNavigate } from 'react-router-dom'
import '../NavBar/NavBar.css'

const CartWidget = () => {

    const { getCartQuantity, totalQuantity } = useContext(CartContext)

    // const totalQuantity = getCartQuantity()
    const navigate = useNavigate()

    return(
        <div className='colorA' onClick={() => navigate('/cart')}>
            <img className='sizeCart' src="/images/cart.svg" alt='cart' />
            { totalQuantity }
        </div>
    );
}

export default CartWidget