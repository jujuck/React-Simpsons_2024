import "./App.css";
import Avatar from "./components/Avatar";

function App() {
  return (
    <>
      <h1>Les Simpsons</h1>
      <Avatar
        image="https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png"
        firstName="Bart"
        lastName="Simpson"
      />
      <Avatar
        image="https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png"
        firstName="Homer"
        lastName="Simpson"
      />
    </>
  );
}

export default App;
