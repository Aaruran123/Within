import React, { useEffect, useState } from "react";
import { Typography, Box, ButtonGroup, Button } from "@mui/material";

// A pure component to display the question
export const Questions = ({ data, questionNumber, answer, callback }) => {

  // Get various properties from data object
  let { title, description, answers, type } = data;

  // Call the CallBack function passed from parent component when user selects an answer
  const updateAnswer = (index) => {
    callback(questionNumber, index)
};
  const AnswerGroupedButton = ({ index, text, selected }) =>
    selected ? (
      <Button
        sx={{ backgroundColor: "#4B98B2", padding: "0 2em", color: "#FFFFFF" }}
        size="large"
        onClick={(e)=>updateAnswer(index)}
      >
        {text}
      </Button>
    ) : (
      <Button
        sx={{ backgroundColor: "#ffffff", padding: "0 2em", color: "#A3CDDD" }}
        size="large"
        onClick={(e)=>updateAnswer(index)}
      >
        {text}
      </Button>
    );

  const AnswerLayeredButton = ({ index, text, selected }) =>
    selected ? (
      <Box>
        <Button
          sx={{
            backgroundColor: "#4B98B2",
            padding: "0 2em",
            width: "20em",
            marginTop: ".5em",
            border: "1px solid #A3CDDD",
            color: "#FFFFFF",
          }}
          size="large"
          onClick={(e)=>updateAnswer(index)}
        >
          {text}
        </Button>
      </Box>
    ) : (
      <Box>
        <Button
          sx={{
            backgroundColor: "#ffffff",
            padding: "0 2em",
            width: "20em",
            marginTop: ".5em",
            border: "1px solid #A3CDDD",
            color: "#A3CDDD",
          }}
          size="large"
          onClick={(e)=>updateAnswer(index)}
        >
          {text}
        </Button>
      </Box>
    );

  return (
    <Box sx={{ textAlign: "center", marginTop: "4em" }}>
      <Typography variant="h2" sx={{ color: "#4B98B2", fontSize: "2em" }}>
        {title}
      </Typography>
      <Typography variant="h2" sx={{ color: "#A3CDDD", fontSize: "1.5em" }}>
        {description}
      </Typography>

      <Box sx={{ marginTop: "6em" }}>
        {type == "short" ? (
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            {answers.map((ans, ansIndex) => (
              <AnswerGroupedButton
                key={ansIndex}
                text={ans.text}
                selected={answer == ansIndex}
                index={ansIndex}
              />
            ))}
          </ButtonGroup>
        ) : (
          <Box>
            {answers.map((ans, ansIndex) => (
              <AnswerLayeredButton
                key={ansIndex}
                text={ans.text}
                selected={answer == ansIndex}
                index={ansIndex}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};
