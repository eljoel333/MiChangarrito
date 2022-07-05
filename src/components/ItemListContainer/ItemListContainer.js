import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

import { getProducts } from '../../services/firebase/firestore'

import { useAsync } from '../../hooks/useAsync'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container'

const ItemListContainer = (props) => {

  const notify = () => toast("Wow so easy!");

    const { categoryId } = useParams()
    const { isLoading, data, error } = useAsync(() => getProducts(categoryId), [categoryId])

    if(isLoading) {
        return <h1>Cargando...</h1>
    }

    if(error) {
        return <h1>Hubo un error</h1>
    }

    return(
        <Container>
           
            <h1>{props.greeting}</h1>
            { data.length > 0 
                ? <ItemList products={data}/>
                : <h1>No hay productos</h1>
            }
             <button onClick={notify}>Notify!</button>
        <ToastContainer />
       
        </Container>
    )
}

export default ItemListContainer