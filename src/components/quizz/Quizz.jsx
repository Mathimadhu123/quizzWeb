
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Quizz.css"

const quizzArray = [
  { question: "What does MERN stand for?", options: ["MongoDB, Express, React, NodeJs", "Mysql, Electron, Redux, NodeJs", "MongoDB, Express, Redux, NodeJs", "MySQL, Express, React, NodeJs"], answer: "MongoDB, Express, React, NodeJs" },
  { question: "Which NoSQL database is used in MERN?", options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"], answer: "MongoDB" },
  { question: "Which backend framework is used in MERN?", options: ["Express.js", "React.js", "Angular.js", "Vue.js"], answer: "Express.js" },
];

const Quizz = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleClick = (qIndex, option) => {
    if (!submitted) {
      setAnswers({ ...answers, [qIndex]: option });
    }
  };

  return (
    <div className="container  mt-5 text-center">
      <h2 className="text-center cust "></h2>
      {quizzArray.map((q, qIndex) => (
        <div key={qIndex} className="mb-3 button">
          <h5  className="text">{q.question}</h5>
          {q.options.map((option, i) => (
            <button
              key={i}
              className={`btn d-block w-75 my-1  ${submitted ? (option === q.answer ? "btn-success" : answers[qIndex] === option ? "btn-danger" : "btn-light") : "btn-outline-primary"}`}
              onClick={() => handleClick(qIndex, option)}
            >
              {option}
            </button>
          ))}
        </div>
      ))}
      <button className="btn btn-primary w-20 mt-3" onClick={() => setSubmitted(true)}>
        Submit
      </button>
    </div>
  );
};

export default Quizz;

