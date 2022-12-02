import React, { useEffect } from "react";

function QuestionList() {
  const [questions, setQuestions] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())  
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  const dataToShow=questions.map((question) => (
    <div key={question.id}>
      <h3>{question.prompt}</h3>
      <select>
        <option>{question.answer1}</option>
        <option>{question.answer2}</option>
        <option>{question.answer3}</option>
        <option>{question.answer4}</option>
      </select>
    </div>
  ));
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{dataToShow}</ul>
    </section>
  );
}

export default QuestionList;
