import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the fifth planet from the sun?',
			answer: [
				{ answerText: 'Earth', isCorrect: false },
				{ answerText: 'Mars', isCorrect: false },
				{ answerText: 'Venus', isCorrect: false },
				{ answerText: 'Jupiter', isCorrect: true }
			],
		},
		{
			questionText: 'What is the Dr. Watson first name?',
			answer: [
				{ answerText: 'Jeff', isCorrect: false },
				{ answerText: 'John', isCorrect: true },
				{ answerText: 'Bill', isCorrect: false },
				{ answerText: 'Tony', isCorrect: false }
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answer: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false }
			],
		}
	];
	
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answer.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
