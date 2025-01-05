import Pizza from "./Pizza";

export default function Menu({ pizzaData }) {
  const numPizza = pizzaData.length;
  //const numPizza = [];

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizza > 0 ? (
        <>
          <p>Authentic italian cusine</p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>Sorry we are currently closed.</p>
      )}
    </main>
  );
}
