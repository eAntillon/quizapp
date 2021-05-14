import React from "react";
// Types
import { AnswerObject } from "../App";
//Styles
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: Number;
  totalQuestions: Number;
};

export const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((item, index) => (
          <ButtonWrapper
            key={index + item}
            correct={userAnswer?.correctAnswer === item}
            userClicked={userAnswer?.answer === item}
          >
            <button
              disabled={userAnswer ? true : false}
              onClick={callback}
              value={item}
            >
              <span dangerouslySetInnerHTML={{ __html: item }}></span>
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};
