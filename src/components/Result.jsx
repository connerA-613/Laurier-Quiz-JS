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

    let imageUrl = "";
    if (final.letter == "C" ) {
        imageUrl = "https://media.istockphoto.com/id/521806786/photo/3d-rendering-of-empty-room-interior-white-brown-colors.jpg?s=612x612&w=0&k=20&c=njPof128FBEo4KjyC8ONDUPS0aBBkFEial5Uy8xoqdA="

    } else if (final.letter == "A") {
        imageUrl = "https://images.rentals.ca/property-pictures/medium/waterloo-on/534676/condo-5981140.jpg"
    } else if (final.letter == "B") {
        imageUrl = "https://students.wlu.ca/student-life/residence-and-off-campus-housing/residence/assets/images/home-sweet-home-banner.jpg"
    } else if (final.letter == "D") {
        imageUrl = "https://students.wlu.ca/services-and-spaces/parking-and-transportation/assets/images/purpleParkingSign.jpg"
    } else {
        imageUrl = "https://cf.bstatic.com/xdata/images/hotel/max1024x768/219302183.jpg?k=dd05bf821f0385667a2b45a7f27724fd6962804633b33b6f2fbfe8ffccb1b4df&o=&hp=1"
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
        <div className="justify-content-center">
            <div className="card" id="result-box">
                <h1 className="title">{final.title}</h1>
                <img className="result-image" src={imageUrl}></img>
                <h2 className="desc">{final.desc}</h2>
            </div>
            <button className="start-quiz" id="restart" onClick={() => props.restartQuiz()}>Restart Quiz</button>
            <button className="start-quiz" onClick={() => sendEmail()}>Email Results</button>
        </div>
        </>
    )
} 
export default Result;