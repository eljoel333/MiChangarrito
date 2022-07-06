import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import { getProducts } from "../../services/firebase/firestore";

import { useAsync } from "../../hooks/useAsync";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PropagateLoader   from "react-spinners/PropagateLoader";

const ItemListContainer = (props) => {
  const notify = () => toast("Wow so easy!");

  const { categoryId } = useParams();
  const { isLoading, data, error } = useAsync(
    () => getProducts(categoryId),
    [categoryId]
  );

  if (isLoading) {
    return (
      <>
        <Container fluid >
        <Row  className="justify-content-md-center">
          <PropagateLoader   color="#36D7B7" />
          </Row>
        </Container>
      </>
    );
  }

  if (error) {
    return (
        <>
          <Container fluid >
          <Row className="justify-content-md-center">
           <h1>Hubo un error</h1>
            </Row>
          </Container>
        </>
      );
  }

  return (
    <Container>
      <h1>{props.greeting}</h1>
      {data.length > 0 ? (
        <ItemList products={data} />
      ) : (
        <h1>No hay productos</h1>
      )}
      {/* <button onClick={notify}>Notify!</button> */}
      {/* <ToastContainer /> */}
    </Container>
  );
};

export default ItemListContainer;
