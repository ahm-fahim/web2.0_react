import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Questions from "../Questions/Questions";

const QuizArea = () => {
    const { id } = useParams();
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
            .then((res) => res.json())
            .then((data) => setQuestions(data.data.questions));
    }, [id]);
    return (
        <div>
            {questions.map((questionSheet) => (
                <Questions
                    key={questionSheet.id}
                    questionSheet={questionSheet}
                />
            ))}
        </div>
    );
};

export default QuizArea;
