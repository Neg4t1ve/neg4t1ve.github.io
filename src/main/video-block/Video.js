import React from "react";
import YouTube from "react-youtube";

class Video extends React.Component {
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        fs: 1,
      },
    };

    return (
      <YouTube
        videoId="_rMZt292mJc"
        opts={opts}
        onReady={this._onReady}
        className={"video-block__video"}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Video;
