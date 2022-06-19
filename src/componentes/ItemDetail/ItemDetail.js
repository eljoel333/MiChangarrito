import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'


const InputCount = ({ onAdd, stock, initial }) => {
  const [count, setCount] = useState(initial);

  const handleChange = (e) => {
    if (e.target.value <= stock) {
      setCount(e.target.value);
    }
  };

  return (
    <>
      <div>
        <input type="number" onChange={handleChange} value={count} />
        <button onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </>
  );
};

const ButtonCount = ({ onAdd, stock, initial = 0 }) => {
  const [count, setCount] = useState(initial);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carroooo...</button>
    </div>
  );
};

const ItemDetail = ({ id, name, img, category, description, price, stock, products }) => {

  const [quantityAdded, setQuantityAdded] = useState(0)

  const { addItem } = useContext(CartContext)
  
  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} ${name}`)
    addItem({ id, name, price, quantity})
    setQuantityAdded(quantity)
}

  return (
    <>
      {products.map((prod) => (
        <article className="CardItem">
          <header className="Header">
            <h2 className="ItemHeader">{prod.title}</h2>
          </header>
          <picture>
            <img src={prod.thumbnail} alt={prod.title} className="ItemImg" />
          </picture>
          <section>
            <p className="Info">Preciooo: ${prod.price}</p>
          </section>
          <section>
            {/* <ButtonCount onAdd={(quantity)=>console.log(quantity)}></ButtonCount> */}
            {/* <ButtonCount onAdd={handleOnAdd}></ButtonCount>
            <ButtonCount onAdd={handleOnAdd}></ButtonCount> */}
          </section>

          <footer className='ItemFooter'>
                { quantityAdded === 0 
                    ?  <ItemCount stock={stock} onAdd={handleOnAdd} />
                    :  <Link to='/cart'>Terminar compra</Link>
                }
            </footer>
        </article>
      ))}
    </>
  );
};

export default ItemDetail;
