import "./App.css";
import Avatar from "./components/Avatar";
import avatars from "./data/avatar";

function App() {
  return (
    <>
      <h1>Les Simpsons</h1>
      <Avatar
        image={avatars[0].image}
        firstName={avatars[0].firstName}
        lastName={avatars[0].lastName}
        cls="right"
      />
      <Avatar
        image={avatars[1].image}
        firstName={avatars[1].firstName}
        lastName={avatars[1].lastName}
        cls="left"
      />
    </>
  );
}

export default App;
