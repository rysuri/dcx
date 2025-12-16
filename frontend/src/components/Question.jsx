import "../css/question.css";
import styles from "../css/question.module.css";

function Question({ question, answer }) {
  return (
    <div className={`question ${styles.container}`}>
      <h3 className="question-title">{question}</h3>
      <p className="question-answer">{answer}</p>
    </div>
  );
}

export default Question;
