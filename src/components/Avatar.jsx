import { useState } from "react";
import PropTypes from "prop-types";
import "./Avatar.css";

function Avatar(props) {
  const [donuts, setDonuts] = useState(0);

  return (
    <div className={props.cls + " card"}>
      <img src={props.image} alt="avatar" />
      <h2>
        {props.lastName} {props.firstName}
      </h2>
      {/** POUr faire du JS en JSX, il faut ouvrir les {} */}
      <button onClick={() => setDonuts(donuts + 1)}>Donuts</button>
      {donuts}
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
