import { useNavigate } from "react-router-dom";
function MainContent() {

    const navigate = useNavigate();
    function start() {
        navigate('./quizz');
    }
    return (
        <main>
            <h2>Get Started with our Quizz</h2>
            <button onClick={start}>Start Quiz</button>
        </main>
    )
};

export default MainContent;