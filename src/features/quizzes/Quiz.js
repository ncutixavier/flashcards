import { useSelector } from 'react-redux';
import { selectQuizzes } from './quizzesSlice'
import { Link, useParams } from "react-router-dom";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";

export default function Quiz() {
  const quizzes = useSelector(selectQuizzes);
  let { quizId } = useParams();
  const quiz = quizzes[quizId];
  return (
    <div>
      {quiz ? (
        <section>
          <h1>{quiz.name}</h1>
          <ul className="cards-list">
            {quiz.cardIds.map((id) => (
              <Card key={id} id={id} />
            ))}
          </ul>
          <Link to={ROUTES.newQuizRoute()} className="button center">
            Create a New Quiz
          </Link>
        </section>
      ) : (<section><h1>Quiz not found!</h1></section>)}
    </div>
  );
}
