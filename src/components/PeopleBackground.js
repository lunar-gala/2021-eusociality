import React from "react";
import * as CONSTANTS from "../constants";
import headshot1 from '../../assets/img/headshot1.png'
import headshot2 from '../../assets/img/headshot2.png'
import headshot3 from '../../assets/img/headshot3.png'
import headshot4 from '../../assets/img/headshot4.png'


class PeopleBackground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      landing_page_state: CONSTANTS.LANDING_PAGE_STATES.DEFAULT,
    };
  }


  render() {
    const style = {
      img1: {
        width: "150px",
        position: 'absolute',
        left: "-2vw",
        top: "10vh",
        opacity: 0.5
        
      },
      img2: {
        position: 'absolute',
        width: "180px",
        top: '15vh',
        left: '30vw',
        opacity: 0.5
      },
      img3: {
        position: 'absolute',
        width: "200px",
        top: '35vh',
        left: '10vw',
        opacity: 0.5
      },
      img4: {
        position: 'absolute',
        width: "250px",
        top: '70vh',
        left: '-2vw',
        opacity: 0.5
      },
      img5: {
        position: 'absolute',
        width: "400px",
        top: '40vh',
        left: '30vw',
        opacity: 0.5
      },
      img6: {
        position: 'absolute',
        width: "250px",
        top: '0vh',
        left: '60vw',
        opacity: 0.5
      },
      img7: {
        position: 'absolute',
        width: "150px",
        top: '40vh',
        left: '68vw',
        opacity: 0.5
      },
      img8: {
        position: 'absolute',
        width: "400px",
        top: '20vh',
        left: '88vw',
        opacity: 0.5
      },
      img9: {
        position: 'absolute',
        width: "250px",
        top: '80vh',
        left: '70vw',
        opacity: 0.5
      }
    }

    return (
      <div className="page-background">
        <img style={style.img1} src={headshot1} />
        <img style={style.img2} src={headshot2} />
        <img style={style.img3} src={headshot3} />
        <img style={style.img4} src={headshot4} />

        <img style={style.img5} src={headshot1} />
        <img style={style.img6} src={headshot2} />
        <img style={style.img7} src={headshot3} />
        <img style={style.img8} src={headshot4} />

        <img style={style.img9} src={headshot2} />
      </div>
    );
  }
}

export default PeopleBackground;
