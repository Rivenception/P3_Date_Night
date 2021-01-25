import Jumbotron from "../components/Jumbotron";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { getDates } from "../utils/api";
import Datecard from "../components/Cards/datecard";





function Home() {

  async function newCard() {
    const apiCall = await getDates();
    const newDate = apiCall.data[0];
    setCardState({...newDate, display: true})
  }

  const [cardState, setCardState] = useState({
    id: '',
    photo: '',
    date: '',
    instructions: '',
    location: '',
    budget: '',
    items: '',
    links: '',
    display: false
  });

  return (
    <div>
      <Jumbotron />
      <h2 className="text-light">Try pressing the button to generate a random idea for a date!</h2>
      <Button variant="success" onClick={newCard}>Click me!</Button>
      {cardState.display ? 
        <Datecard
          key = {cardState.id}
          id = {cardState.id}
          photo = {cardState.photo}
          date = {cardState.date}
          instructions = {cardState.instructions}
          location = {cardState.location}
          budget = {cardState.budget}
          items = {cardState.items}
          links = {cardState.links}
        />
      : ''}
    </div>
  );
}
export default Home;
