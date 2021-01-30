import React from "react";
import PropTypes from "prop-types";

export default function TeamBio(props) {
  const { imgSrc, name, title } = props;

  return (
    <div className="teamBio" >
      <img className="headshot" src={imgSrc} />
      <p className="name">{name}</p>
      <p className="title">{title}</p>
    </div>
  );
}

TeamBio.propTypes = {
  /** @brief Shows if the tab is expanded or not */
  imgSrc: PropTypes.isRequired,
  /** @brief Shows if the tab is expanded or not */
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,

};
