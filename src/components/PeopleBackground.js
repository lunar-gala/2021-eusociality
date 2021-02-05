import React from "react";
import * as CONSTANTS from "../constants";
import { getRandomHeadshots } from "../data/people_data";
import filter from "../../assets/img/filter.jpg";

class PeopleBackground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      landing_page_state: CONSTANTS.LANDING_PAGE_STATES.DEFAULT,
    };
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
        width: "150px",
        height: "150px",
        left: "-2vw",
        top: "10vh",
      },
      {
        width: "180px",
        height: "180px",
        top: "15vh",
        left: "30vw",
      },
      {
        width: "200px",
        height: "200px",
        top: "35vh",
        left: "10vw",
      },
      {
        width: "250px",
        height: "250px",
        top: "70vh",
        left: "-2vw",
      },
      {
        width: "400px",
        height: "400px",
        top: "45vh",
        left: "32vw",
      },
      {
        width: "250px",
        height: "250px",
        top: "0vh",
        left: "60vw",
      },
      {
        width: "150px",
        height: "150px",
        top: "45vh",
        left: "68vw",
      },
      {
        width: "400px",
        height: "400px",
        top: "20vh",
        left: "88vw",
      },
      {
        width: "250px",
        height: "400px",
        top: "80vh",
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
