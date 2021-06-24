import { shuffleArray } from './utils';

// export enum Difficulty {
//   EASY = 'easy',
//   MEDIUM = 'medium',
//   HARD = 'hard',
// }

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export const fetchQuestions = async (
  amount: number,
  difficulty: string | null,
  category: number | null
) => {
  try {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&type=multiple&difficulty=${difficulty}`;
    const data = await fetch(endpoint);
    const jsonData = await data.json();
    return jsonData.results.map((question: Question) => ({
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }));
  } catch (error) {
    console.log({ error });
  }
};
