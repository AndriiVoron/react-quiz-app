export const questions = [
  {
    id: 1,
    type: 'select-sex',
    question: 'What is your gender assigned at birth?',
    additionalOptions: {
      hideNextButton: true
    },
    conditionalBlocks: {
      female: [
        {
          id: 2,
          question: 'Are you currently pregnant',
          type: 'single-variant'
        }
      ]
    }
  },
  {
    id: 3,
    question: 'Do you have any known allergies?',
    type: 'custom-input',
    additionalOptions: {
      hideNextButton: true
    },
  },
  {
    id: 4,
    question: 'Do you have chronic diseases?',
    type: 'custom-input',
    additionalOptions: {
      hideNextButton: true
    },
  },
  {
    id: 5,
    question: 'Do you have any disabilities?',
    type: 'radio-group',
    additionalOptions: {
      hideNextButton: true
    },
    answerOptions: [
      {
        value: 'Yes, I have',
        checked: false,
      },
      {
        value: 'No, I don`t have',
        checked: false,
      },
      {
        value: 'yea, I have',
        checked: false,
      },
    ]
  },
  {
    id: 6,
    question: 'How many steps do you take per day?',
    type: 'custom-input',
    additionalOptions: {
      hideNextButton: true
    },
  },
  {
    id: 7,
    question: 'Do you have any known allergies?',
    type: 'radio-group',
    additionalOptions: {
      hideNextButton: true
    },
    answerOptions: [
      {
        value: 'Yes',
        checked: false,
      },
      {
        value: 'No',
        checked: false,
      },
      {
        value: 'Not regularly',
        checked: false,
      },
    ]
  },
  {
    id: 8,
    question: 'You control your weight?',
    type: 'radio-group',
    additionalOptions: {
      hideNextButton: true
    },
    answerOptions: [
      {
        value: 'Yes',
        checked: false,
      },
      {
        value: 'No',
        checked: false,
      }
    ]
  },
  {
    id: 9,
    question: 'What bad habits do you have?',
    type: 'checkbox-group',
    additionalOptions: {
      hideNextButton: true
    },
    answerOptions: [
      {
        value: 'I smoke',
        checked: false,
      },
      {
        value: 'I drink alcohol',
        checked: false,
      },
      {
        value: 'I eat a lot of sweets',
        checked: false,
      },
    ]
  },
  {
    id: 10,
    question: 'Waht is you <b>primary reason</b> for wanting to make a change?',
    description: '(We can help with all of these. For now, pick the moust important for you.)',
    type: 'radio-group',
    additionalOptions: {
      hideNextButton: true
    },
    answerOptions: [
      {
        value: 'I whant to live longer',
        checked: false,
      },
      {
        value: 'I whant to lock better',
        checked: false,
      },
      {
        value: 'I whant to reduce health issues',
        checked: false,
      },
      {
        value: 'I whant to impruve mental health',
        checked: false,
      },
    ]
  }
]
