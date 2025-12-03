import CounterContainer from "./CounterContainer";
import Button from "./Button";

function Catalogo(props) {
  return (
    <>
      <div className="container">
        <h2>Catalogo</h2>
        <div className="catalogo">
          {props.productos.map((producto) => (
            <div key={producto.id} className="card">
              <h3>{producto.title}</h3>
              <img src={producto.image} alt={producto.title} />
              <p>${producto.price}</p>
              <CounterContainer />
              <Button />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Catalogo;
