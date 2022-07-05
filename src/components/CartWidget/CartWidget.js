
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom'

const CartWidget = () => {

    const { getCartQuantity, totalQuantity } = useContext(CartContext)

    // const totalQuantity = getCartQuantity()
    const navigate = useNavigate()

    return(
        <div className='colorA' onClick={() => navigate('/cart')}>
            <img src="/images/cart.svg" alt='cart' />
            { totalQuantity }
        </div>
    );
}

export default CartWidget