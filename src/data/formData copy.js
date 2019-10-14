let formData = [ //pages
  [ //sections
    {
      title: "Your Details",
      questions: [{ //question      
        question: "What's your name?",
        name: "name",
        type: "text",
        description: null,
        maxChar: 50
      }, { //question      
        question: "What's your date of birth?",
        description: "For example, 31 . 10 . 1970",
        name: "dob",
        type: "date",
        maxChar: 50
      }, { //question      
        question: "What's your address?",
        name: "address",
        type: "long-text",
        description: null,
        maxChar: 255
      }]
    },
    {
      title: "Your Next of Kin",
      questions: [{ //question      
        question: "What's the name of your next of kin?",
        description: "This question is about your next of kin",
        name: "nok-name",
        type: "text",
        maxChar: 50
      }]
    }
  ],
  [ //page
    {
      title: "Communication and Sensory Needs",
      description: "Many autistic people have different communication and sensory needs. Meeting these needs are likely to make the health check process better for you. Below, you can tell us what accommodations you would like for the health check. This information will help the doctor understand your communication and sensory needs.",
      questions: [{ //question      
        question: "What would you like?",
        name: "prefs",
        type: "text",
        description: null,
        maxChar: 50
      }, {
        type: "separator"
      }, {
        question: "Do you stim, self-stimulate or undertake repetitive behaviours (e.g. rock your body, flap your hands or twirl objects)?",
        name: "stim",
        type: "radio",
        options: [{
          name: "Yes",
          action: {
            onchecked: true,
            name: "stim-details"
          }
        }, {
          name: "No"
        }, {
          name: "Unsure"
        }]
      }, {
        name: "stim-details",
        type: "section",
        questions: [{
          question: "Which one is it?",
          name: "stem-short",
          type: "text",
          description: null
        }, {
          question: "Can you elaborate more?",
          name: "stem-long",
          type: "long-text",
          description: null,
          maxChar: 255
        }]
      }]
    }
  ],
  [ //page
    {
      title: "Communication and Sensory Needs",
      description: "Many autistic people have different communication and sensory needs. Meeting these needs are likely to make the health check process better for you. Below, you can tell us what accommodations you would like for the health check. This information will help the doctor understand your communication and sensory needs.",
      questions: [{
        question: "Please tick things that you would find helpful in supporting you to attend and engage with your health check appointment",
        name: "helpful-support-items",
        type: "checkbox",
        options: [{
          name: "A clinician who has experience of / training in understanding autism"
        }, {
          name: "Receiving information about what is likely to happen during the visit beforehand"
        }, {
          name: "Support to arrange appointment (e.g. office staff helping to schedule appointments, using alternative ways to telephone calls)",
          action: {
            onchecked: true,
            name: "helpful-details"
          }
        }]
      }, {
        name: "helpful-details",
        type: "section",
        questions: [{
          question: "Which one is it?",
          name: "helpful-short",
          type: "text",
          description: null
        }]
      }]
    }
  ]
]

export default formData