import React, { useState } from 'react';

export default function App() {
	
	const questions = [
		{
			questionText: 'Quel est le nombre de personnes handicapées en France ?',
			answerOptions: [
				{ answerText: '5 millions', isCorrect: false },
				{ answerText: '52 millions', isCorrect: false },
				{ answerText: '12 millions', isCorrect: true },
			],
		},
		{
			questionText: 'Combien de personnes handicapées travaillent ?',
			answerOptions: [
				{ answerText: '(jsaispo)', isCorrect: false },
				{ answerText: '(jsaispo)', isCorrect: false },
				{ answerText: '(jsaispo)', isCorrect: true },
			],
		},
		{
			questionText: 'Proportion effective qui travaille, par rapport à ceux qui ne travaillent pas alors qu\'ils sont en recherche active.',
			answerOptions: [
				{ answerText: 'quarantedeux', isCorrect: true },
				{ answerText: 'septahuit', isCorrect: false },
				{ answerText: 'septasept', isCorrect: false },
			],
		},
		{
			questionText: 'Sur l’ensemble de la population active handicapée, quelle est la proportion de personnes en fauteuil roulant.',
			answerOptions: [
				{ answerText: '118', isCorrect: false },
				{ answerText: '218', isCorrect: false },
				{ answerText: '0', isCorrect: false },
			],
		},
    {
			questionText: 'Combien d”étudiants handicapés ont fréquenté les universités et grandes écoles françaises ?',
			answerOptions: [
				{ answerText: 'bim', isCorrect: false },
				{ answerText: 'bam', isCorrect: false },
				{ answerText: 'boom', isCorrect: false },
			],
		},
    {
			questionText: 'Quel est le pourcentage d’handicapé obligatoire dans une entreprise d’au moins 20 personnes ? ',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
			],
		},
    {
			questionText: 'Quelle est la proportion de travailleurs handicapés ayant besoin d’aménagement de poste en France ? ',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
			],
		},
    {
			questionText: 'Quelle est la proportion de salariés jugeant la présence de leurs collègues handicapés enrichissante ? ',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
			],
		},
    {
			questionText: 'Selon vous, la plupart des handicaps sont acquis ? (à cause du vieillissement )',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
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
					{/*commentaire*/}
					<button>bim bam boom</button>
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