export default function Footer() {
  //const hour = new Date().getHours();
  const hour = 9;
  const openHour = 8;
  const closeHour = 22;
  // if (hour >= openHour && hour <= closeHour) alert("We are currently open");
  // else alert("Sorry we are closed");
  return (
    <footer className="footer">
      We are currently open from {openHour}:00 to {closeHour}:00.
    </footer>
  );
}
