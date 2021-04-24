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
import MODEL_2 from "../../assets/img/examples/girl1.jpg";
import MODEL_4 from "../../assets/img/examples/girl3.jpg";
import NavbarLinePage from "../components/NavbarLinePage";
import COLLECTIVA_LOGO from "../../assets/logo/CollectivaLogo_white.svg";

class LinePage extends React.Component {
  constructor(props) {
    super(props);

    const regexFindLineIndex = /\/lines\/(\d+)/;
    const currLineNumber = regexFindLineIndex.exec(
      this.props.location.pathname
    )[1];

    const isMobile = window.innerWidth < CONSTANTS.DESKTOP_WIDTH;

    this.state = {
      animation_blur: "blur",
      animation_slide: true,
      isMobile: isMobile,
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
    if (this.state.selectedLineIdx !== index) {
      this.setState({ selectedLineIdx: index, curr_video: "hide" });
    }
  }

  slidingImage(image, id) {
    return (
      <div className="pictures" id={id} key={`${this.state.selectedLineIdx} ${id}`}>
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className={`image`}
          id={id}
        >
        </div>
        <div className="image-border" id={id} />
      </div>
    );
  }

  handlerVideoLoad() {
    console.log("ready");
    this.setState({ curr_video: "show" });
  }

  render() {
    let line_info = LINE_DATA.LINE_INFO[this.state.selectedLineIdx];

    // TODO: The video player currently has a play button temporarily when it is not loaded
    return (
      <div id="line-page">
        <div id="background">
          <div id="player-wrapper" className={`${this.state.curr_video}`}>
            <ReactPlayer
              id="player"
              url={line_info.video_ready}
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
        <Link
          id="top-title"
          to={this.state.isMobile ? "/" : `/${this.state.selectedLineIdx + 1}`}
        >
          <div id="top-title-wrapper">
            <span>{CONSTANTS.LANDING_PAGE_TITLE}</span>
            <div id="collectiva-logo">
              <COLLECTIVA_LOGO />
            </div>
          </div>
        </Link>
        <div id="main-content" className="section">
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

              {line_info.img_1 != null ? (
                <div
                  id="models"
                  className={this.state.animation_blur}
                  key={this.state.selectedLineIdx}
                >
                  {this.slidingImage(
                    line_info.img_1 ? line_info.img_1 : MODEL_2,
                    "a"
                  )}
                  {this.slidingImage(
                    line_info.img_2 ? line_info.img_2 : MODEL_4,
                    "b"
                  )}
                </div>
              ) : null}
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
        <div id="middle-content" className="section">
          {/* TODO: replace with real show images */}
          <div
            id="models"
            className={this.state.animation_blur}
            key={this.state.selectedLineIdx}
          >
            {this.slidingImage(MODEL_2, "c")}
            {this.slidingImage(MODEL_4, "d")}
          </div>
        </div>
        <div id="right-bar-wrapper">
          <div id="right-bar-fill"/>
          <div
            id="right-bar"
            className={
              this.state.animation_slide ? "right-bar-slide-in-animation" : ""
            }
          >
            <div className="dot-basic" />
            <div className="line" />
          </div>
        </div>
        <div id="video-content" className="section">
          <ReactPlayer
            id="player-line"
            url={CONSTANTS.SHOW_VIDEO_LINK}
            playing={false}
            volume={100}
            controls={true}
            width={"100vw"}
            height={"100vh"}
          />
        </div>
        <div id="left-bar-wrapper">
          <div
            id="left-bar"
            className={
              this.state.animation_slide ? "left-bar-slide-in-animation" : ""
            }
          >
            <div className="line" />
            <div className="dot-basic" />
          </div>
          <div id="left-bar-fill"/>
        </div>
        <div id="navbar-wrapper">
          <NavbarLinePage
            selectedLineIdx={this.state.selectedLineIdx}
            handlerSelectedLineIdx={this.handlerSelectedLineIdx}
          />
        </div>
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
