const quizData = [
    {
        question: "Which was not of voldenort's Horcruxes?",
        a: "Harry",
        b: "Nagini",
        c: "Helga's Diadem",
        d: "Tom Riddle's Diary",
        correct: "c",
    },
    {
        question: "Which of these are not one of Hargrid's many pets?",
        a: "Grawp",
        b: "Fluffy", 
        c: "Aragog",
        d: "Noberta",
        correct: "a",
    },
    {
        question: "Which Class did Severus Snape alwats want to teach?",
        a: "Portions",
        b: "Charms",
        c: "Defense Against Dark Arts",
        d: "Transfiguration",
        correct: "c",
    },
    {
        question: "Which Hogwarts house did Moaning Myrtle belong in?",
        a: "Gryffindor",
        b: "Slytherin",
        c: "Ravenclaw",
        d: "Hufflepuff",
        correct: "c",
    },
    {
        question: "What class did Neville end up teaching at Hogwarts?",
        a: "Astronomy",
        b: "Herbology",
        c: "charms",
        d: "Muggle Studies",
        correct: "d",
    }
];

const quiz =  document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const sumitBtn = document.getElementById('sumit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswer()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}
function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}
sumitBtn.addEventListener('click',() => {
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }


        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
            <h2>you answer ${score}/${quizData.length} question correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
            
            
        }
    }
})
















































