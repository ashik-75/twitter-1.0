import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Widgets() {
  return (
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="youyuxi"
      options={{ height: 400 }}
    />
  );
}

export default Widgets;
