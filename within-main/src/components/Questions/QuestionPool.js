export const QuestionPool = [
  {
    title: "How would you rate your Stress Level?",
    description: "On a scacle of 1 to 5",
    type: 'short',
    answers: [
      {
        text: "1",
        isExtreme: false,
      },
      {
        text: "2",
        isExtreme: false,
      },
      {
        text: "3",
        isExtreme: false,
      },
      {
        text: "4",
        isExtreme: true,
      },
      {
        text: "5",
        isExtreme: true,
      },
    ],
  },
  {
    title: "Have you recently had or attempted suicide?",
    type: 'short',
    answers: [
      {
        text: "Yes",
        isExtreme: true,
      },
      {
        text: "No",
        isExtreme: false,
      },
    ],
  }, 
  {
    title: "Is the stress caused by COVID?",
    type: 'short',
    answers: [
      {
        text: "Yes",
        isExtreme: false,
      },
      {
        text: "No",
        isExtreme: false,
      },
    ],
  }, 
  {
    title: "What led you to try the WithinApp?",
    type: 'long',
    answers: [
      {
        text: "Stress",
        isExtreme: false,
      },
      {
        text: "Depression",
        isExtreme: false,
      },
      {
        text: "Sleep",
        isExtreme: false,
      },
      {
        text: "Anxiety",
        isExtreme: false,
      },
      {
        text: "To improve academic performance",
        isExtreme: false,
      },
    ],
  }, 
];
