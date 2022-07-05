import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { QuestionNavigation } from "./QuestionNavigation";
import { QuestionPool } from "./QuestionPool";
import { Questions } from "./Questions";
import { useNavigate } from "react-router-dom";

export const Questionnaire = () => {
  // Initalize a state for current step in Questionnaire
  const [step, setStep] = useState(0);

  // Initalize a state for user selected answers
  const initAnswerArray = () => QuestionPool.map((q) => null);
  const [answers, setAnswer] = useState(initAnswerArray());

  // Initalize a state for extreme cases
  const [isExtreme, setIsExtreme] = useState(false);

  // Initalize a hook for navigation 
  const navigate = useNavigate()

  // Function to increment current step or call redirection function
  const goToNext = () => {
    if(step == QuestionPool.length -1){
      redirection()
      return;
    }
    return isStepValid(step + 1) && setStep(step + 1);
  };

  // Naivgate to next component on a condition (isExtreme)
  const redirection = () => navigate(isExtreme ? '/email-success' : '/content-library')

  // Go back to previous step
  const goToPrev = () => isStepValid(step - 1) && setStep(step - 1);

  // Validate step number
  const isStepValid = (newVal) => newVal >= 0 && newVal < QuestionPool.length;

  // Update the answer array state
  const updateAnswer = (quesNum, newAns) => {
    let temp = answers;
    temp[quesNum] = newAns;
    setAnswer([...temp]);

    // Update if extreme case
    let { isExtreme } = QuestionPool[quesNum].answers[newAns];
    if (isExtreme) {
      setIsExtreme(true);
    }
  };

  return (
    <Box>
      <Questions
        data={QuestionPool[step]}
        questionNumber={step}
        answer={answers[step]}
        callback={updateAnswer}
      />
      <QuestionNavigation
        handlePrev={goToPrev}
        handleNext={goToNext}
        disablePrevBtn={step === 0}
      />
    </Box>
  );
};
