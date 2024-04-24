import "./Avatar.css";

function Avatar(props) {
  console.log(props);
  return (
    <div className="card">
      <img
        src="https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png"
        alt="avatar"
      />
      <h2>Nom Prénom</h2>
    </div>
  );
}

export default Avatar;
