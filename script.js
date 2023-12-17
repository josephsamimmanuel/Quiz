const quizData = [
    {
        question: "What is the capital of France?",
        a: "Paris",
        b: "London",
        c: "Berlin",
        correct: "a",
    },
    {
        question: "Which is known as the Red Planet?",
        a: "Mars",
        b: "Venus",
        c: "Jupiter",
        correct: "a",
    },
    {
        question: "What is the largest mammal on the Earth?",
        a: "Elephant",
        b: "Blue Whale",
        c: "Giraffee",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            const percent = (score);
            quiz.innerHTML = `
            <h2>Interactive Quiz<h2>
            <h2>You Quiz Result </h2> 
                <p>Score:  ${percent} </p>             
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
