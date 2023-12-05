import react from 'react'
import Navbar from './Navbar';
import { useEffect, useState } from 'react'

const Quiz = (props) => {

    const [answer, setAnswer] = useState("")

    const answerClick = event => {
        let currId = event.target.id;
        let btn = document.getElementById(currId);
        let arr = [];
        for (let i = 0; i < event.target.value.length; i++) {
            if (event.target.value[i] != ',') {
                arr.push(parseInt(event.target.value[i]));
            }
        }
        setAnswer(arr);
        console.log(arr);
        for (var i = 0; i < props.question.answers.length; i++) {
          let btn1 = document.getElementById("answerButton" + (i));
          if (btn1.id == btn.id) {
            btn1.className = "selected-answer";
          } else {
            btn1.className = "answer-button";
          }
        }
    }

    const submit = () => {
        for (var i = 0; i < props.question.answers.length; i++) {
            let btn1 = document.getElementById("answerButton" + (i));
            btn1.className = "answer-button";
        }
        if (answer == "") {
            alert("Please select an answer");
            return;
        }
        props.submitAnswer(answer)
        setAnswer("");
    }

    return (
        <>
            <Navbar></Navbar>
        <div className="card" id="question-box">
            <h2>{props.question.questionText}</h2>
            <div className="list-group">
                {props.question.answers.map(function(data, index) {
                    return <button type="button" onClick={(event) => answerClick(event, 'value')} className="answer-button" id={"answerButton" + index} data-toggle="button" value={data.points}>{data.text}</button>
                })}
                
            </div>
            <button className="submit-answer" onClick={() => submit()}>Next</button>
        </div>
        </>
    )
} 
export default Quiz;