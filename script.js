let score = 0;
let currentQuestion = {};
let previousScore = localStorage.getItem('previousScore') || 'N/A';
let userName = localStorage.getItem('userName') || '';

function loadPreviousData() {
    if (userName) {
        document.getElementById('name').value = userName;
    }
    document.getElementById('previous-score').textContent = previousScore;
}

function generateQuestion() {
    const angle1 = Math.floor(Math.random() * 180) + 1;
    const angle2 = Math.floor(Math.random() * 180) + 1;
    const sum = angle1 + angle2;

    // Create a simple addition question for angles.
    currentQuestion = {
        question: `What is the sum of ${angle1}° and ${angle2}°?`,
        answer: sum
    };

    document.getElementById('question').textContent = currentQuestion.question;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);

    if (userAnswer === currentQuestion.answer) {
        score++;
        document.getElementById('score').textContent = score;
        localStorage.setItem('score', score);
    }

    // Save current score as the "previous score" for next time.
    localStorage.setItem('previousScore', score);
}

function nextQuestion() {
    generateQuestion();
    document.getElementById('answer').value = '';
}

function compareScores() {
    const currentScore = score;
    alert(`Your current score is: ${currentScore}. Previous score: ${previousScore}`);
}

function saveUserData() {
    const name = document.getElementById('name').value;
    if (name) {
        userName = name;
        localStorage.setItem('userName', userName);
    }
}

window.onload = () => {
    loadPreviousData();
    generateQuestion();

    // Save user data on change
    document.getElementById('name').addEventListener('input', saveUserData);
};
