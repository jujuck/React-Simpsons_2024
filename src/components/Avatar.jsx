import PropTypes from "prop-types";
import "./Avatar.css";

function Avatar(props) {
  return (
    <div className={props.cls + " card"}>
      <img src={props.image} alt="avatar" />
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
  cls: PropTypes.string.isRequired,
};

export default Avatar;
