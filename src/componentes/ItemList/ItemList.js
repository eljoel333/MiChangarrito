// import Item from "../Item/Item"
import Item from '../Item/Item'
const ItemList = (props) => {
    console.log('itemprod', props.productos, props.cat)
    
    return(
        
        <>
        
        <h1>Hola Mercado </h1>
        {props.productos.map(prod => <Item  key={prod.id} {...prod} cat={props.cat} />)}
        
        </>
    )
}

export default ItemList