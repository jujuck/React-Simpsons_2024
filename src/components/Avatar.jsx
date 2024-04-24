import PropTypes from "prop-types";
import "./Avatar.css";

function Avatar(props) {
  return (
    <div className="card">
      <img src={props.image.push("Bob")} alt="avatar" />
      <h2>
        {props.lastName} {props.firstName}
      </h2>
    </div>
  );
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Avatar;
