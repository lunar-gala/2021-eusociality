import React from "react";
import { getRandomHeadshots } from "../data/people_data";
import filter from "../../assets/img/filter_blurred.jpg";

/**
 * NOTE: this is no longer being used
 */
class PeopleBackground extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      img: {
        position: "absolute",
        opacity: 0.5,
      },
    };

    const imgPlacements = [
      {
        width: "12vw",
        height: "12vw",
        left: "-2vw",
        top: "10vh",
      },
      {
        width: "12vw",
        height: "12vw",
        top: "15vh",
        left: "30vw",
      },
      {
        width: "18vw",
        height: "18vw",
        top: "35vh",
        left: "10vw",
      },
      {
        width: "20vw",
        height: "20vw",
        top: "70vh",
        left: "-2vw",
      },
      {
        width: "30vw",
        height: "30vw",
        top: "48vh",
        left: "32vw",
      },
      {
        width: "22vw",
        height: "22vw",
        top: "0vh",
        left: "60vw",
      },
      {
        width: "10vw",
        height: "10vw",
        top: "55vh",
        left: "68vw",
      },
      {
        width: "30vw",
        height: "30vw",
        top: "20vh",
        left: "88vw",
      },
      {
        width: "22vw",
        height: "22vw",
        top: "85vh",
        left: "70vw",
      },
    ];

    const headshots = getRandomHeadshots(9);

    let pictures = [];
    pictures = headshots.map((imgSrc, index) => {
      return (
        <div
          className="headshotImg"
          style={{
            backgroundImage: `url(${filter}), url(${imgSrc})`,
            ...style.img,
            ...imgPlacements[index],
          }}
          key={index}
        />
      );
    });

    return <div className="page-background">{pictures}</div>;
  }
}

export default PeopleBackground;
