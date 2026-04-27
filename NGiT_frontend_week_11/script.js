// QUESTIONS
const questions = [
    {
        question: "What does ML stand for?",
        options: [
            "Manaul Learning",
            "Main Logic",
            "Machine Learning",
            "Model Language"
        ],
        answer: "Machine Learning"
    },

    {
        question: "Which library is used for data analysis in Python?",
        options: [
            "Pandas",
            "Bootstrap",
            "Laravel",
            "React"
        ],
        answer: "Pandas"
    },

    {
        question: "Which algorithm is commonly used for classification?",
        options: [
            "HTML",
            "Flexbox",
            "Decision Tree",
            "CSS"
        ],
        answer: "Decision Tree"
    },

    {
        question: "Which Python library is used for numerical computing?",
        options: [
            "Node.js",
            "NumPy",                  
            "Vue",
            "Photoshop"
        ],
        answer: "NumPy"
    },

    {
        question: "What is data visualization used for?",
        options: [
            "To delete data",
            "To represent data graphically",
            "To write CSS",
            "To build websites"
        ],
        answer: "To represent data graphically"
    },

    {
        question: "What does HTML stand for?",
        options: [
            "High Transfer Machine Language",
            "Home Tool Markup Language",
            "Hyper Tool Machine Language",
            "Hyper Text Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },

    {
        question: "Which CSS property changes text color?",
        options: [
            "font-style",
            "background",
             "color",
            "text-align"
        ],
        answer: "color"
    },

    {
        question: "Which symbol is used for IDs in CSS?",
        options: [
            ".",
            "*",
            "@",
            "#",
        ],
        answer: "#"
    },

    {
        question: "Which JavaScript method is used to select an element by ID?",
        options: [
            "queryAll()",
            "selectElement()",
            "getElementById()",
            "getClass()"
        ],
        answer: "getElementById()"
    },

    {
    question: "Which CSS property is used to make text bold?",
    options: [
        "font-weight",
        "text-style",
        "font-style",
        "bold-text"
    ],
    answer: "font-weight"
}
];

// DECLARATION
let currentQuestion = 0;
let score = 0;

// SELECT ELEMENTS (IDs in HTML)
const questionText = document.getElementById("question");
const optionsBox = document.getElementById("options");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const finalScore = document.getElementById("finalScore");
const restartBtn = document.getElementById("restartBtn");


// LOAD QUESTION
function loadQuestion(){
    feedback.textContent = "";

    // Currennt question
    const current = questions[currentQuestion];

    // Update question text
    questionText.textContent =`Question ${currentQuestion + 1}: ${current.question}`;
    // questionText.textContent = current.question;

    // Clear previous options
    optionsBox.innerHTML = "";

    // Loop through options
    current.options.forEach(function(option){
        optionsBox.innerHTML += `
            <div class="option">
                <label>
                    <input type="radio" name="quiz" value="${option}">
                    ${option}
                </label>
            </div>
        `;
    });
}


// NEXT BUTTON
nextBtn.addEventListener("click", function() {

    // Get selected option
    const selected = document.querySelector('input[name="quiz"]:checked');

    // If nothing selected
    if (selected === null) {
        alert("Please select an answer.");
        return;
    }
    // DECLARATION
    const userAnswer = selected.value;
    const correctAnswer = questions[currentQuestion].answer;

    // Check answer
    if(userAnswer === correctAnswer){
        score++;
        feedback.textContent = "✅ Correct!";
        feedback.style.color = "green";
    }
    else{
        feedback.textContent = "❌ Incorrect!";
        feedback.style.color = "red";
    }

    // Move to next question
    currentQuestion++;

    setTimeout(function(){
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 1000);
});


// SHOW RESULT
function showResult(){
    quizScreen.style.display = "none";
    resultScreen.style.display = "block";

    finalScore.textContent = `You scored ${score} out of ${questions.length}!`;
}


// RESTART QUIZ
restartBtn.addEventListener("click", function(){
    currentQuestion = 0;
    score = 0;

    quizScreen.style.display = "block";
    resultScreen.style.display = "none";

    loadQuestion();
});


// START QUIZ
loadQuestion();