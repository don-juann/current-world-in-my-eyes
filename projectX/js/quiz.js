var questions = [
    {
        question: "What is the topic of this website?",
        answer1: "a. The Modern World In My Opinion",
        answer2: "b. Nowadays World From My View",
        answer3: "c. The Current World In My Eyes",
        answer4: "d. Today's World In My Vision",
        correct: "c"
    },
    {
        question: "In how many ways does the author see this world?",
        answer1: "a. 3",
        answer2: "b. 2",
        answer3: "c. 5",
        answer4: "d. 4",
        correct: "a"
    },
    {
        question: "How many eras are there in human history?",
        answer1: "a. 6",
        answer2: "b. 5",
        answer3: "c. 4",
        answer4: "d. 7",
        correct: "b"
    },
    {
        question: "What is the name of the author?",
        answer1: "a. Kuat Zhanbolatov",
        answer2: "b. Zhan Kazikhanov",
        answer3: "c. Kerey Zhumabay",
        answer4: "d. Zhanibek Kaziev",
        correct: "b"
    },
    {
        question: "What Is The Purpose Of This Website?",
        answer1: "a. To practice Web-Development",
        answer2: "b. To spend quality time",
        answer3: "c. To apply for an IT-company",
        answer4: "d. To give visualized answer",
        correct: "d"
    }
];

function submitQuiz() {
    var score = 0;
    for (var i = 1; i <= 5; i++) {
        var selectedOption = document.querySelector('input[name="q' + i + '"]:checked');
        if (selectedOption) {
            if (selectedOption.value === questions[i - 1].correct) {
                score++;
            }
        }
    }

    const sound = new Audio('source/successsfx.mp3');
    sound.play();
    setTimeout( () => {
    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = 'Your score: ' + score + '/5' + '<a style="color: white" href="index.html">Go Home</a>';
    document.getElementById('quiz-container').remove();
    document.getElementById('result').style.display = 'flex';
    }, 100);
    
}

for (var i = 0; i < questions.length; i++) {
    var questionContainer = document.getElementById('question' + (i + 1));
    questionContainer.textContent = (i + 1) + '. ' + questions[i].question;

    var optionsContainer = document.getElementById('options' + (i + 1));
    optionsContainer.innerHTML = `
        <label><input type="radio" name="q${i + 1}" value="a"> ${questions[i].answer1}</label>
        <label><input type="radio" name="q${i + 1}" value="b"> ${questions[i].answer2}</label>
        <label><input type="radio" name="q${i + 1}" value="c"> ${questions[i].answer3}</label>
        <label><input type="radio" name="q${i + 1}" value="d"> ${questions[i].answer4}</label>
    `;
}
