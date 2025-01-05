import "./App.css";
//import { pizzaData } from "../data";

import { useEffect, useState } from "react";

import db from "./firebaseConfig"; // Get a list of cities from your database
import { collection, getDocs } from "firebase/firestore/lite";

import Headers from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  const [pizzaData, setPizza] = useState([]);
  useEffect(() => {
    async function getCities(db) {
      const pizzaCol = await collection(db, "pizza");
      const pizzaSnapshot = await getDocs(pizzaCol);
      const pizzaList = await pizzaSnapshot.docs.map((doc) => doc.data());
      console.log(pizzaList);
      setPizza(pizzaList);

      return pizzaList;
    }
    getCities(db);
  }, []);

  return (
    <div className="container">
      <Headers />
      <Menu pizzaData={pizzaData} />
      <Footer />
    </div>
  );
}

export default App;
