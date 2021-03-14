import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

import * as CONSTANTS from "../constants";
import * as LINE_DATA from "../data/line_data";
import * as UTIL from "../util";

// Components
import DesktopSideNav from "../components/DesktopSideNav";

// Images
// TODO: there will be a lot of these, so probably a good idea to move this into a file and import everything in that file
import MODEL_2 from "../../assets/img/examples/girl2.jpg";
import MODEL_4 from "../../assets/img/examples/girl4.jpg";
import NavbarLinePage from "../components/NavbarLinePage";
import COLLECTIVA_LOGO from "../../assets/logo/CollectivaLogo_white.svg";

class LinePage extends React.Component {
  constructor(props) {
    super(props);

    const regexFindLineIndex = /\/lines\/(\d+)/;
    const currLineNumber = regexFindLineIndex.exec(
      this.props.location.pathname
    )[1];

    this.state = {
      animation_blur: "blur",
      animation_slide: true,
      landing_page_state: CONSTANTS.LANDING_PAGE_STATES.LINE_PAGE,
      selectedLineIdx: currLineNumber - 1,
      showBackButton: true,
      curr_video: "hide",
    };

    this.handlerSelectedLineIdx = this.handlerSelectedLineIdx.bind(this);
    this.handlerVideoLoad = this.handlerVideoLoad.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    // We need to trigger this to tell the App to allow transitions to happen on the main page
    this.props.handlePageLoad();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    let currentScrollPos = window.pageYOffset;

    this.setState({
      showBackButton: currentScrollPos < window.innerHeight,
    });
  }

  handlerSelectedLineIdx(index) {
    this.setState({ selectedLineIdx: index, curr_video: "hide" });
  }

  slidingImage(image, id) {
    return (
      <div className="pictures" id={id}>
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className={`image`}
          key={this.state.selectedLineIdx}
          id={id}
        />
        <div className="frame" />
      </div>
    );
  }

  handlerVideoLoad() {
    console.log("ready");
    this.setState({ curr_video: "show" });
  }

  render() {
    let line_info = LINE_DATA.LINE_INFO[this.state.selectedLineIdx];

    // TODO: this is a filler video for now. Remove when the real videos are ready.
    let video_link =
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4";

    video_link = line_info.video_ready ? line_info.video_ready : video_link;

    // TODO: The video player currently has a play button temporarily when it is not loaded
    return (
      <div id="line-page">
        <div id="background">
          <div id="player-wrapper" className={`${this.state.curr_video}`}>
            <ReactPlayer
              id="player"
              url={video_link}
              playing={true}
              volume={0}
              muted={true}
              loop={true}
              controls={false}
              playIcon={<button></button>}
              onStart={this.handlerVideoLoad}
            />
          </div>
        </div>
        <Link id="top-title" to={"/"}>
          <div id="top-title-wrapper">
            <span>{CONSTANTS.LANDING_PAGE_TITLE}</span>
            <div id="collectiva-logo">
              <COLLECTIVA_LOGO />
            </div>
          </div>
        </Link>
        <div className="main-content">
          <div
            id="name"
            className={this.state.animation_blur}
            key={line_info.name}
          >
            {line_info.name}
          </div>
          <div id="designers">
            <div
              id="designers-text"
              className={this.state.animation_blur}
              key={line_info.designers}
            >
              {UTIL.name_list_formatter(line_info.designers)}
            </div>
            <div
              id="right-bar"
              className={
                this.state.animation_slide ? "right-bar-slide-in-animation" : ""
              }
              key={this.state.selectedLineIdx}
            >
              <div className="dot-basic" />
              <div className="line" />
            </div>
          </div>

          <div id="content">
            <div id="upper">
              <div
                id="description"
                className={this.state.animation_blur}
                key={line_info.name}
              >
                {line_info.description
                  ? line_info.description
                  : LINE_DATA.LINE_INFO[0].description}
              </div>

              <div
                id="models"
                className={this.state.animation_blur}
                key={this.state.selectedLineIdx}
              >
                {this.slidingImage(MODEL_2, "a")}
                {this.slidingImage(MODEL_4, "b")}
              </div>
            </div>
            <div
              id="left-bar"
              className={
                this.state.animation_slide ? "left-bar-slide-in-animation" : ""
              }
              key={this.state.selectedLineIdx}
            >
              <div className="line" />
              <div className="dot-basic" />
            </div>
          </div>
        </div>
        <NavbarLinePage
          selectedLineIdx={this.state.selectedLineIdx}
          handlerSelectedLineIdx={this.handlerSelectedLineIdx}
        />
        {/* Additional overlay components */}
        <div className="fixed-overlay">
          <DesktopSideNav landing_page_state={this.state.landing_page_state} />
        </div>
      </div>
    );
  }
}

LinePage.propTypes = {
  location: PropTypes.object,
  handlePageLoad: PropTypes.func,
  history: PropTypes.object,
};

export default LinePage;
