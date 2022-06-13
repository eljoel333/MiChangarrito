import { useEffect, useState } from "react";
import { getProductsByCategory } from "../APIMercadoLibre/APIMercadoLibre";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";



const ItemDetailContainer = (category) =>{

    const [productDetail, setProductDetail] = useState([]);
const params = useParams();

console.log('params,',params);

    useEffect(()=>{
        debugger;
        getProductsByCategory(params.productId ).then(respuesta=>{
            setProductDetail(respuesta);

        })
    }, []);

    console.log('productDetail',productDetail);
debugger;


    return (
        <>
            <h1>Detalle del productoooo</h1>
            <ItemDetail products={productDetail}  />
            
        </>
    );
}

export default ItemDetailContainer;