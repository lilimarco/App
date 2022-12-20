import React from "react";
import Greetings from "../components/Greetings";
import List from "../components/List";
import Calculator from "../components/Calculator";
import Contacts from "../components/Contacts.jsx";
import card from "../card.js";

function App() {
  return (
    <div>
      <List />
      <Greetings />
      <Calculator />
      <div>
        <h2>My Contacts</h2>
        {card.map(createCard)}
      </div>
    </div>
  );
}

function createCard(card) {
  return (
    <Contacts
      key={card.id}
      name={card.name}
      image={card.imageURL}
      telephone={card.phone}
      email={card.email}
    />
  );
}

export default App;
