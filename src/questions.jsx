const questions =  [
    {
    questionText: 'Q1. What is your ideal distance from campus?',
    answers: [
    {text: '5 minute walk or less.', letter: 'A'},
    {text: '10 minute walk or less.', letter: 'BC'},
    {text: '15 minute walk or less.', letter: 'CD'},
    {text: '20 minute walk or less.', letter: 'DE'},
    ],
    },
    {
      questionText: 'Q2. What mode of transportation do you think you take most often?',
      answers: [
        {text: 'Walking', letter: 'AC'},
        {text: 'City transportation', letter: 'BC'},
        {text: 'My car', letter: 'D'},
        ],
    },
    {
    questionText: 'Q3. How often do you plan on getting groceries?',
    answers: [
    {text: 'Weekly', letter: 'AE'},
    {text: 'Bi-Weekly', letter: 'BC'},
    {text: 'Monthly', letter: 'D'},
    {text: 'Whenever my roommates are going', letter: 'BD'},
    ],
    },
  {
  questionText: 'Q4. Looking for security? How much?',
  answers: [
  {text: 'Security Cameras / Doorbell Camera is fine with me!', letter: 'BCD'},
  {text: 'Emergency On-Call Contact with Property Manager.', letter: 'ABC'},
  {text: 'Security/Reception during the Day.', letter: 'AE'},
  {text: '24-Hour security.', letter: 'A'},
  ],
  },
  {
  questionText: 'Q5. How advanced are your cooking skills? (Refrigerator included)',
  answers: [
  {text: 'Microwave, stove, dishwasher are a must.', letter: 'AE'},
  {text: 'Stove & Microwave, I dont mind washing dishes.', letter: 'ABDE'},
  {text: 'I can get by with just a stove!', letter: 'BCD'},
  {text: 'As long as I have somewhere to plug in my air-fryer, I\'m good to go!', letter: 'AE'},
  ],
  },
  {
  questionText: 'Q6. What are your laundry expectations?',
  answers: [
  {text: 'in-unit Laundry, I don\'t really want to share.', letter: 'AE'},
  {text: 'Communal Laundry (either with roommates or the rest of your building...)', letter: 'ABDE'},
  {text: 'Where is the nearest laundromat?!', letter: 'BCD'},
  {text: 'Wait, my parents wont be doing my laundry anymore?', letter: 'AE'},
  ],
  },
  {
  questionText: 'Q7. Furniture included? Yes please, or no thank you?',
  answers: [
  {text: 'Everything included and yes, im willing to pay extra!', letter: 'AE'},
  {text: 'A couch for the living room would be ideas, but I can bring my own bed.', letter: 'ABDE'},
  {text: 'Nothing for me! I want an empty space!', letter: 'C'},
  {text: 'Facebook marketplace is kind of my thing... I\'d take a mixture of both', letter: 'BD'},
  ],
  },
  {
  questionText: 'Q8. Bathroom sharing? You in or are you out?',
  answers: [
  {text: 'En-Suite only. No exceptions.', letter: 'BCD'},
  {text: 'I\'m fine sharing with 1 or 2 people...', letter: 'ABDE'},
  {text: '1 bathroom?! I will start making a schedule now.', letter: 'BCD'},
  ],
  },
  {
  questionText: 'Q9. Need parking?',
  answers: [
  {text: 'yes and would prefer shared undergound/indoor.', letter: 'AE'},
  {text: 'Yes and definitely with my own spot.', letter: 'C'},
  {text: 'Yes but dont particularly care where!', letter: 'C'},
  {text: 'Nope, city transit for me.', letter: 'BC'},
  ],
  },
  ]
  export default questions;