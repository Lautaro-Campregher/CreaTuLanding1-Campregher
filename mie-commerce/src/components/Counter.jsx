function Counter(props) {
  return (
    <div>
      <p id="parrafo">Unidades:{props.counter}</p>
      <button onClick={props.addProd}>+</button>
      <button onClick={props.restProd}>-</button>
    </div>
  );
}

export default Counter;
