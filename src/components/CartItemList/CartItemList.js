import CartItem from "../CartItem/CartItem"

const CartItemList = ({ productsAdded }) => {
    return (
        <>
            { productsAdded.map(p => <CartItem key={p.id} {...p}/>) }
        </>
    )
}

export default CartItemList