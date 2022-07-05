import React from "react";
import YouTube from "react-youtube";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Content } from "../ContentLibrary/Content";

export const Player = () => {
  let { id } = useParams();
  let height = window.innerWidth;

  let {title, youtubeID} = Content[id];
  const generateFrameWidth = () => (height < 500 ? 300 : 720);
  const generateFrameHeight = () => (height < 500 ? 200 : 400);
  const opts = {
    height: generateFrameHeight(),
    width: generateFrameWidth(),
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Box textAlign="center">
      <h1>{title}</h1>
      <YouTube videoId={youtubeID} opts={opts} />
    </Box>
  );
};
