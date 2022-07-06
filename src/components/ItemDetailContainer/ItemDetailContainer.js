import { useState, useEffect } from "react";
import { getProductById } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PropagateLoader   from "react-spinners/PropagateLoader";


const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  //Este id proviene de la url
  const { productId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", productId);

    getDoc(docRef)
      .then((doc) => {
        const productFormatted = { id: doc.id, ...doc.data() };
        setProduct(productFormatted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    // getProductById(productId).then(response => {
    //     setProduct(response)
    // })
  }, [productId]);

  if (loading) {
    return (
      <>
        <Container fluid>
          <Row className="justify-content-md-center">
            <PropagateLoader  color="#36D7B7" />
          </Row>
        </Container>
      </>
    );
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <h1>Detalle del producto</h1>
      </Row>

      <Row className="justify-content-md-center">
        <ItemDetail {...product} />
      </Row>
    </Container>
  );
};

export default ItemDetailContainer;
