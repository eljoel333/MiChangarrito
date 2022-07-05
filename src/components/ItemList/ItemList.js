

import Item from '../Item/Item'
import Row from 'react-bootstrap/Row'


const ItemList = ({products}) => {

    return(
        <Row className="justify-content-md-center">
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </Row>    
    )
}

export default ItemList