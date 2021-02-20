const quizData = [
{
	question: "1+1?",
	a:"1",
	b:"2",
	c:"3",
	d:"4",

	correct:"a",
},
{
	question: "2+2?",
	a:"4",
	b:"1",
	c:"3",
	d:"4",

	correct:"a",
},
{
	question: "3+3?",
	a:"2",
	b:"6",
	c:"5",
	d:"4",

	correct:"b",
},
{
	question: "4+4?",
	a:"2",
	b:"7",
	c:"8",
	d:"5",

	correct:"c",
},
{
	question: "5+5?",
	a:"1",
	b:"8",
	c:"4",
	d:"10",

	correct:"d",
},
]
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const atxt = document.getElementById("atxt");
const btxt = document.getElementById("btxt");
const ctxt = document.getElementById("ctxt");
const dtxt = document.getElementById("dtxt");
const submit = document.getElementById("submit");

let currentQuiz=0;
let score=0;

function loadQuiz () {
    
    deselectAnswers();
	const currentQuizData = quizData[currentQuiz];
	questionEl.innerText = currentQuizData.question;
	atxt.innerText = currentQuizData.a;
	btxt.innerText = currentQuizData.b;
	ctxt.innerText = currentQuizData.c;
	dtxt.innerText = currentQuizData.d;

}

loadQuiz();

function getSelected (){

	let answer = undefined;
	answerEls.forEach(answerEl=>{
		if(answerEl.checked)
		{
			answer = answerEl.id;
		}
		
	});

	return answer;

}

function deselectAnswers(){
	answerEls.forEach(answerEl=>{
		answerEl.checked = false;
	});

}

submit.addEventListener("click", ()=>{

	const answer = getSelected();

	if(answer){
		if(answer === quizData[currentQuiz].correct){

			score++;

		}

		currentQuiz++;

		if(currentQuiz < quizData.length){
			loadQuiz();
		}

		else{
			quiz.innerHTML = `<h2>Your Score = ${score}/${quizData.length}</h2>`;
		}
	}

})