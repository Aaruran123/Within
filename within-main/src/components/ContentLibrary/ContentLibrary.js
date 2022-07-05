import { Box } from "@mui/system";
import React from "react";
import { Content } from "./Content";
import { SessionCard } from "./SessionCard";

export const ContentLibrary = () => {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {Content.map((card, cardID) => (
        <SessionCard key={card.youtubeID} data={card} id={cardID} />
      ))}
    </Box>
  );
};
