import React from "react";
import Card from "./Card";
import contacts from "../contacts";
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Kuanl Singh"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpEmVeONJa6j63RtEjHFrB4oBGiB_PSgPh-jgvBXxxnVdvJqSqjRFaS9LSmlcRULy_K5M&usqp=CAU"
        tel="+91 6287858883"
        email="kunalsinghguitar30@gmail.com"
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].img}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
    </div>
  );
}

export default App;
