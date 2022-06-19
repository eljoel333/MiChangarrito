import { useEffect, useState } from "react";
import {
  getProductsByCategory,
  getProductsByCategoryById,
} from "../APIMercadoLibre/APIMercadoLibre";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = (category) => {
  const [productDetail, setProductDetail] = useState([]);
  const params = useParams();

  console.log("params,", params);
  const { categoryId, productId } = params;
  console.log("itemdeilcon:", categoryId);
  useEffect(() => {
    getProductsByCategoryById(categoryId, productId).then((respuesta) => {
      setProductDetail(respuesta);
    });
  }, []);

  console.log("productDetail", productDetail);

  return (
    <>
      <h1>Detalle del producto seleccionado:</h1>
      <ItemDetail products={productDetail} />
    </>
  );
};

export default ItemDetailContainer;
