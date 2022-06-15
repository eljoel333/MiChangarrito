// import Item from "../Item/Item"
import Item from '../Item/Item'
import '../../App.css';

const ItemList = (props) => {
    console.log('itemprod', props.productos, props.cat)
    
    return(
        
        <>
        
        <h1>Hola, Bienvenido a Mi Changarrito... </h1>
        <h2 className='colorH'>Seguimos trabajando para ofrecerte un mejor servicio... Tenemos grandes cambios para TI!!! </h2>
        {props.productos.map(prod => <Item  key={prod.id} {...prod} cat={props.cat} />)}
        
        </>
    )
}

export default ItemList