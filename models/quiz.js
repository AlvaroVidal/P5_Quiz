const quizzes = [
	{	id: 1,
		question: "Pregunta Número 1",
		answer: "Roma"
	},
	{	id: 2,
		question: "Capital de Francia",
		answer: "Paris"
	},
	{	id: 3,
		question: "Capital de España",
		answer: "Madrid"
	},
	{	id: 4,
		question: "Capital de Portugal",
		answer: "Lisboa"
	}];


let nextId = quizzes.length + 1;

exports.create = (quiz) => {
	const newQuiz = {
		id: nextId++,
		question: (quiz.question || "").trim(),
		answer: (quiz.answer || "").trim()
	};
	quizzes.push(newQuiz);
	return newQuiz;
};

exports.update = (quiz) => {
	const index = quizzes.findIndex(q => quiz.id === q.id);
	if(index >= 0) {
		quizzes[index] = {
			id: quiz.id,
			question: (quiz.question || "").trim(),
			answer: (quiz.answer || "").trim()
		};
	}

};

exports.findAll = () => quizzes;

exports.findById = (id) => {
	return quizzes.find(quiz => quiz.id === id);
};

exports.destroy = (quiz) => {
	const index = quizzes.findIndex(quiz => quiz.id ===q.id);
	if (index >= 0){
		quizzes.splice(index,1);
	}
};