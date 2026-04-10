import React from "react";
import PropTypes from "prop-types";
import filter from '../../assets/img/filter_blurred.jpg';

export default function TeamBio(props) {
  const { imgSrc, name, title, parity } = props;

  return (
    <div className={`teamBio ${parity ? "right" : "left"}`} key={`${name}-teamBio`}>
      <div
        className="headshot"
        style={{
          backgroundImage: `url("${filter}"), url("${imgSrc}")`,
        }}
        key={`${name}-headshot`}
      />
      <p className="name" key={`${name}-name`}>{name}</p>
      <p className="title" key={`${name}-title`}>{title}</p>
    </div>
  );
}

TeamBio.propTypes = {
  /** @brief Background-image URL for the headshot. */
  imgSrc: PropTypes.string,
  /** @brief Full name displayed under the headshot. */
  name: PropTypes.string.isRequired,
  /** @brief Role title displayed under the name. */
  title: PropTypes.string.isRequired,
  /** @brief Alternating layout flag used by the grid. */
  parity: PropTypes.bool.isRequired,
};
