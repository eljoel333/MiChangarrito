import Item from "../Item/Item";

const ItemDetail = ({ products }) => {
  console.log("tittlee", products);
  return (
    <>
    
      {products.map((prod) => (
        <article className="CardItem">
          <header className="Header">
            <h2 className="ItemHeader">{prod.title}</h2>
          </header>
          <picture>
            <img src={prod.thumbnail} alt={prod.title} className="ItemImg" />
          </picture>
          <section>
            <p className="Info">Precio: ${prod.price}</p>
          </section>
        </article>
      ))}
    </>
  );
};

export default ItemDetail;
