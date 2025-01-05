export default function Pizza({ pizzaObj }) {
  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img
        src={pizzaObj.photoName ? pizzaObj.photoName : "pizzas/image.png"}
        alt={pizzaObj.name}
      />
      <div>
        <h1>{pizzaObj.name}</h1>
        <p>{pizzaObj.ingredients}</p>

        <span>{pizzaObj.soldOut ? "SOLD OUT" : ` $${pizzaObj.price}`}</span>
      </div>
    </div>
  );
}
