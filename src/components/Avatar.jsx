import "./Avatar.css";

function Avatar(props) {
  return (
    <div className="card">
      <img src={props.image} alt="avatar" />
      <h2>
        {props.lastName} {props.firstName}
      </h2>
    </div>
  );
}

export default Avatar;
