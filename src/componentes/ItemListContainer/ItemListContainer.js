
import { useState, useEffect } from 'react'
// import { getProducts } from '../../asyncmock'
import {getProductsByCategory}from '../APIMercadoLibre/APIMercadoLibre'
import ItemList from '../ItemList/ItemList';

import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
    const { categoryId } = useParams()
const params = useParams();

    console.log('paramsxcgvxcv,',params);

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getProductsByCategory(categoryId).then(response => {
            setProducts(response)
        })
    }, [categoryId])
console.log('productodds', products)
   
    return (
        <div>
            <h1 className='Titulo'>{props.greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer