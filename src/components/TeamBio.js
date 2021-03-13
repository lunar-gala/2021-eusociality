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
          backgroundImage: `url(${filter}), url(${imgSrc})`,
        }}
        key={`${name}-headshot`}
      />
      <p className="name" key={`${name}-name`}>{name}</p>
      <p className="title" key={`${name}-title`}>{title}</p>
    </div>
  );
}

TeamBio.propTypes = {
  /** @brief Shows if the tab is expanded or not */
  imgSrc: PropTypes.string,
  /** @brief Shows if the tab is expanded or not */
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  parity: PropTypes.bool.isRequired,
  isMobile: PropTypes.string.isRequired,
};
