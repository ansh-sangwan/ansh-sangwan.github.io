const quizDB = [
    {
        quesition: "Q1:What is the full form of HTML?",
        a: "Hello to My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markeup Language",
        d: "Hypertext Markeup Language",
        ans: "ans4"
    },
    {
        quesition: "Q2:What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style sheep",
        c: "Cartoon Style Sheet",
        d: "Casciding Super Sheet",
        ans: "ans1"
    },

    {

        quesition: "Q3:What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfar Protocol",
        ans: "ans4"
    },
    {

        quesition: "Q4:What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordenShoes",
        ans: "ans1"
    },

];
const quesition = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit')
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let quesitionCount = 0;
let score = 0;
const loadQuestion = () => {
    console.log(quizDB[0]);
    const questionList = quizDB[quesitionCount];
    quesition.innerHTML = questionList.quesition;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

}



loadQuestion();
const getcheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectall = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
submit.addEventListener('click', () => {
    const checkedAnswer = getcheckAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer === quizDB[quesitionCount].ans) {
        score++;
    };
    quesitionCount++;
    deselectall();

    if (quesitionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
    <h3 class="asd"> Your score ${score}/${quizDB.length} ✌️ </h3>
    <buttin class="btn" onclick="location.relaod()">play Again</buttion>
    `;
        showScore.classList.remove('scoreArea')
    }
});






