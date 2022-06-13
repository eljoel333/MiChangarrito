// import Item from "../Item/Item"
import Item from '../Item/Item'
const ItemList = ({ products }) => {
    console.log('itemprod', products)
    return(
        
        <>
        
        <h1>Hola Mercado</h1>
        {products.map(prod => <Item key={prod.id} {...prod}/>)}
        
        </>
    )
}

export default ItemList