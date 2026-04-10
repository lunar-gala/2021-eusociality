import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import filter from "../../assets/img/filter_blurred.jpg";

export default function TeamBio({ imgSrc, name, title, parity }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!imgSrc) return;
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = imgSrc;
    // If already cached, onload fires synchronously in some browsers.
    if (img.complete) setLoaded(true);
  }, [imgSrc]);

  return (
    <div className={`teamBio ${parity ? "right" : "left"}`}>
      <div
        className="headshot"
        style={{
          backgroundImage: `url("${filter}"), url("${imgSrc}")`,
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease-in",
        }}
      />
      <p className="name">{name}</p>
      <p className="title">{title}</p>
    </div>
  );
}

TeamBio.propTypes = {
  imgSrc: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  parity: PropTypes.bool.isRequired,
};
