import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Quiz from './components/Quiz.jsx'
import questions from './questions.jsx'
import Result from './components/Result.jsx'
//import {Resend} from 'resend'

function App() {
  const homeComp = <Home
  startQuiz = {startQuiz}></Home>
  const nav = <Navbar
  startQuiz = {startQuiz}></Navbar>
  const [count, setCount] = useState(0)
  const [component, setComponent] = useState(homeComp)
  const [currQuestion, setCurrQuestion] = useState(0)
  const [quizState, setQuizState] = useState(false)
  const [results, setResults] = useState(new Map([
    ["A", 0],
    ["B", 0],
    ["C", 0],
    ["D", 0],
    ["E", 0]
  ]));

  const submitAnswer = answer => {
    console.log(answer)
    let resultsCopy = results
    for (let i = 0; i < answer.length; i++) {
      resultsCopy.set(answer[i], results.get(answer[i]) + 1);
    }
    setResults(resultsCopy);
    console.log(results);
    setCurrQuestion((prev) => prev + 1);
  }

    useEffect(() => {
      console.log(currQuestion);
      if (quizState && currQuestion < questions.length) {
        setComponent(<Quiz
          submitAnswer = {submitAnswer}
          question = {questions[currQuestion]}></Quiz>);
      } else if (currQuestion == questions.length) {
        setComponent(<Result
          results = {results}
          restartQuiz = {restartQuiz}></Result>);
      }
    }, [currQuestion]);
  



  function startQuiz() {
    console.log("startQuiz")
    console.log(questions[0])
    setComponent(<Quiz
    submitAnswer = {submitAnswer}
    question = {questions[currQuestion]}></Quiz>);
    setQuizState(true);
  }

  function restartQuiz() {
    setComponent(homeComp);
    setCurrQuestion(0);
    setResults(new Map([
      ["A", 0],
      ["B", 0],
      ["C", 0],
      ["D", 0],
      ["E", 0]
    ]));
  }

  

 

  document.body.style.backgroundImage = `url("https://www.ontariouniversitiesinfo.ca/assets/files/images/ouinfo-wlu-wat-feature-1080x610-2.jpg")`;
  document.body.style.backgroundColor = "grey";
  document.body.style.backgroundBlendMode = "multiply";  

  return (
    <>
    {nav}
    {component}
    </>
  )
}

export default App
