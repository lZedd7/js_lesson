const POINTS = {
    RIGHT_ANSWER : 10,
    WRONG_ANSWER : 0,
}

const TYPES = {
    PROMT : 'promt',
    CONFIRM : 'confirm',
}

const quizQuestions =[
    {text :'Сколько будет 2+2?', answer: '4', type: TYPES.PROMT},
    {text :'Солнце встает на востоке?', answer: 'true', type: TYPES.CONFIRM},
    {text :'Сколько будет 5 / 0?', answer: 'infinity', type: TYPES.PROMT},
    {text :'Какого цвета небо?', answer: ['голубой', 'синий'], type: TYPES.PROMT},
    {text :'Как правильный ответ на главный вопрос жизни, вселенной и всего такого', answer: '42', type: TYPES.PROMT}
]
startQuiz(quizQuestions);

function startQuiz(questions) {
    let score = 0;
    questions.forEach((question) => (score += askQuestion(question) ? POINTS.RIGHT_ANSWER : POINTS.WRONG_ANSWER ));

    showResult(score);
}
function askQuestion(question) {
    const answer = getUserAnswer(question);
    return answer.toLowerCase() === question.answer; 
}

function getUserAnswer({type, text}){
    let answer = '';
    switch(type){
        case 'promt' : answer = prompt(text); break
        case 'confirm' : answer = confirm(text); break
    }
    return String(answer);
}

function showResult(score){
    console.log(`Вы набрали ${score} очков`);
}



