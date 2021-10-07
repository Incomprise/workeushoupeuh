import React, { useState } from 'react';

export default function App() {
	
	const questions = [
		{
			questionText: 'Quel est le nombre de personnes en situation de handicap en France ?',
			answerOptions: [
				{ answerText: '5 millions', isCorrect: false },
				{ answerText: '52 millions', isCorrect: false },
				{ answerText: '12 millions', isCorrect: true },
			],
		},
		{
			questionText: 'Combien de personnes en situation de handicap travaillent ?',
			answerOptions: [
				{ answerText: '488', isCorrect: false },
				{ answerText: '988 000', isCorrect: true },
				{ answerText: '200 000', isCorrect: false },
			],
		},
		{
			questionText: 'Quel est le pourcentage de chômage des personnes en situation de handicap ?',
			answerOptions: [
				{ answerText: '18%', isCorrect: true },
				{ answerText: '59%', isCorrect: false },
				{ answerText: '10%', isCorrect: false },
			],
		},
		{
			questionText: 'Quel est le montant engagé par l\'Agefiph pour soutenir l\'emploi des personnes en situation de handicap ? ',
			answerOptions: [
				{ answerText: '450,18 millions € ', isCorrect: false },
				{ answerText: '435,5 millions €', isCorrect: true },
				{ answerText: '418,22 millions €', isCorrect: false },
			],
		},
    {
			questionText: 'Quel est le nombre d\'étudiants en situation de handicap ?',
			answerOptions: [
				{ answerText: '361 000', isCorrect: true },
				{ answerText: '452 000', isCorrect: false },
				{ answerText: '118 218', isCorrect: false },
			],
		},
    {
			questionText: 'Combien de personnes en situation de handicap se disent en difficulté lors de leurs déplacements ? ',
			answerOptions: [
				{ answerText: '16%', isCorrect: false },
				{ answerText: '67%', isCorrect: true },
				{ answerText: '58%', isCorrect: false },
			],
		},
    {
			questionText: 'Selon vous, la plupart des handicaps sont acquis...',
			answerOptions: [
				{ answerText: 'En regardant trop TF1', isCorrect: false },
				{ answerText: 'A la naissance', isCorrect: false },
				{ answerText: 'A cause du vieillissement', isCorrect: true },
			],
		},
    {
			questionText: 'Quelle est la proportion de travailleurs handicapés ayant besoin d\'aménagement de postes en France (temps de travail, accessibilité, etc.) ?',
			answerOptions: [
				{ answerText: '15%', isCorrect: true },
				{ answerText: '65%', isCorrect: false },
				{ answerText: '35%', isCorrect: false },
			],
		},
    {
			questionText: 'Quel est le nombre d\'étudiants en situation de handicap ?',
			answerOptions: [
				{ answerText: '20 000', isCorrect: false },
				{ answerText: '25 000', isCorrect: true },
				{ answerText: '30 000', isCorrect: false },
			],
		},
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
					Tu as {score} bonnes réponses !
				</div>
				
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span  className='question-count2' >Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<h4 className='question-text'>{questions[currentQuestion].questionText}</h4>
					</div>

					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}