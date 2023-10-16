import react from 'react'
import Navbar from './Navbar';
import resultPages from '../constants.jsx'

//const resend = new Resend('re_5KwUNSHv_JpmrVVNLQqCdyej9oZD9Rwzg')

const Result = (props) => {
    let highestVal = 0;
    let highestKey = "";
    for(let [key, value] of props.results) {
        if(value > highestVal) {
            highestVal = value;
            highestKey = key;
        }
    }
    let final = null
    for (let result of resultPages) {
        if (highestKey == result.letter) {
            final = result;
        }
    }

    async function sendEmail(userEmail) {
        try {
            await resend.send({
                from: 'onboarding@resend.dev',
                to: 'connerarmour@gmail.com',
                subject: 'Your Laurier Program Quiz Results',
                html: `<h1>Thank you for taking the Laurier Program Quiz!</h1><p>Based on your answers, we have determined that you would be best suited for the ${final.title} program.</p><p>${final.desc}</p>`
            });
            alert("Email sent!")
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <>
        <h1 className="title">{final.title}</h1>
        <h2 className="desc">{final.desc}</h2>
        <button className="start-quiz" onClick={() => props.restartQuiz()}>Restart Quiz</button>
        <button className="start-quiz" onClick={() => sendEmail()}>Email Results</button>
        </>
    )
} 
export default Result;