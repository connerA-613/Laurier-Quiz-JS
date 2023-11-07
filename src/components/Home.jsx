import react from 'react'
import Navbar from './Navbar';

const Home = (props) => {
    return (
        <>
        <div className="home">
            <h1 className="title">Welcome to the Laurier Off-Campus Housing Quiz!</h1>
            <h2 className="desc">This quiz will help you make a housing decision for school next year.</h2>
            <button className="start-quiz" onClick={() => props.startQuiz()}>Start Quiz</button>
        </div>
        </>
    )
} 
export default Home;