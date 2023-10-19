const questions =  [
    {
    questionText: 'Q1. What is your ideal distance from campus?',
    answers: [
    {text: '5 minute walk or less.', points: [1,0,0,0,0]},
    {text: '10 minute walk or less.', points: [0,1,1,0,0]},
    {text: '15 minute walk or less.', points: [0,0,2,1,0]},
    {text: '20 minute walk or less.', points: [0,0,0,1,2]},
    ],
    },
    {
      questionText: 'Q2. What mode of transportation do you think you take most often?',
      answers: [
        {text: 'Walking', points: [2,0,1,0,0]},
        {text: 'City transportation', points: [0,1,1,0,0]},
        {text: 'My car', points: [0,0,0,2,0]},
        ],
    },
    {
    questionText: 'Q3. How often do you plan on getting groceries?',
    answers: [
    {text: 'Weekly', points: [2,0,0,0,1]},
    {text: 'Bi-Weekly', points: [0,1,1,0,0]},
    {text: 'Monthly', points: [0,0,0,1,0]},
    {text: 'Whenever my roommates are going', points: [0,1,0,1,0]},
    ],
    },
  {
  questionText: 'Q4. Looking for security? How much?',
  answers: [
  {text: 'Security Cameras / Doorbell Camera is fine with me!', points: [0,2,2,1,0]},
  {text: 'Emergency On-Call Contact with Property Manager.', points: [1,1,1,0,0]},
  {text: 'Security/Reception during the Day.', points: [1,0,0,0,1]},
  {text: '24-Hour security.', points: [2,0,0,0,0]},
  ],
  },
  {
  questionText: 'Q5. How advanced are your cooking skills? (Refrigerator included)',
  answers: [
  {text: 'Microwave, stove, dishwasher are a must.', points: [1,0,0,0,1]},
  {text: 'Stove & Microwave, I dont mind washing dishes.', points: [1,1,0,1,1]},
  {text: 'I can get by with just a stove!', points: [0,1,1,1,0]},
  {text: 'As long as I have somewhere to plug in my air-fryer, I\'m good to go!', points: [1,0,0,0,1]},
  ],
  },
  {
  questionText: 'Q6. What are your laundry expectations?',
  answers: [
  {text: 'in-unit Laundry, I don\'t really want to share.', points: [1,0,0,0,1]},
  {text: 'Communal Laundry (either with roommates or the rest of your building...)', points: [1,1,0,1,1]},
  {text: 'Where is the nearest laundromat?!', points: [0,1,1,1,0]},
  {text: 'Wait, my parents wont be doing my laundry anymore?', points: [1,0,0,0,1]},
  ],
  },
  {
  questionText: 'Q7. Furniture included? Yes please, or no thank you?',
  answers: [
  {text: 'Everything included and yes, im willing to pay extra!', points: [2,0,0,0,2]},
  {text: 'A couch for the living room would be ideas, but I can bring my own bed.', points: [1,1,0,1,1]},
  {text: 'Nothing for me! I want an empty space!', points: [0,0,2,0,0]},
  {text: 'Facebook marketplace is kind of my thing... I\'d take a mixture of both', points: [0,1,0,1,0]},
  ],
  },
  {
  questionText: 'Q8. Bathroom sharing? You in or are you out?',
  answers: [
  {text: 'En-Suite only. No exceptions.', points: [0,2,2,2,0]},
  {text: 'I\'m fine sharing with 1 or 2 people...', points: [1,1,0,1,1]},
  {text: '1 bathroom?! I will start making a schedule now.', points: [0,1,1,1,0]},
  ],
  },
  {
  questionText: 'Q9. Need parking?',
  answers: [
  {text: 'yes and would prefer shared undergound/indoor.', points: [2,0,0,0,2]},
  {text: 'Yes and definitely with my own spot.', points: [0,0,1,2,0]},
  {text: 'Yes but dont particularly care where!', points: [0,0,1,2,0]},
  {text: 'Nope, city transit for me.', points: [0,1,1,0,0]},
  ],
  },
  ]
  export default questions;