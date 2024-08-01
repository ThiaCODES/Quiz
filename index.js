const questionQuiz=[
  {
    question: 'Which of this following is not my name?',
    a: "Damilola", 
    b: 'Ajoke',
    c: "Busola",
    d: 'Olanike',
    isCorrect: 'a'
},
{
    question: 'How old am I?',
    a: "22", 
    b: '21',
    c: "23",
    d: '24',
    isCorrect: 'a'
},
{
    question: 'Who is my celebrity crush?',
    a: "Wizkid", 
    b: 'Lee Min Ho',
    c: "Daniel Etim Effong",
    d: 'Rugar',
    isCorrect: 'c'
},
{
    question: 'What is my GitHub username?',
    a: "TheamiDEV", 
    b: 'FathyCODES',
    c: "ThiaCODES",
    d: 'TheamiCODES',
    isCorrect: 'c'
},
{
    question: 'What is my favorite food?',
    a: "Amala with Efo", 
    b: 'fried rice',
    c: "Yam and Egg",
    d: 'Spagetti',
    isCorrect: 'd'
},
{
    question: 'What is my favorite saying?',
    a: "Subhanallah", 
    b: 'I dey',
    c: "Peele",
    d: 'I love you',
    isCorrect: 'a'
},
{
    question: 'What is my position in the family',
    a: "4TH born", 
    b: '5th born',
    c: "3rd born",
    d: '6th born',
    isCorrect: 'b'
},
{
  question: 'What is the name of my friend?',
  a: "Uthman", 
  b: 'Yusuf Zainab',
  c: "Afwa",
  d: 'All of the above',
  isCorrect: 'd'
},
{
  question: 'Who is my favorite actor ?',
  a: "Ray emodi", 
  b: 'Alihu nuhu',
  c: "Murice sam",
  d: 'Odunlade adekola',
  isCorrect: 'c'
},
{
  question: 'What is my love language?',
  a: "Word of affirmation", 
  b: 'Gift',
  c: "Physical touch",
  d: 'Quality Time',
  isCorrect: 'd'
},
{
  question: 'Name a country I love to visit?',
  a: "Saudi Arabia", 
  b: 'UAE',
  c: "America",
  d: 'Korea',
  isCorrect: 'a'
},
{
  question: 'What is my shoe size?',
  a: "40", 
  b: '39',
  c: "37",
  d: '38',
  isCorrect: 'd'
},
{
  question: 'What is my dream?',
  a: "Make lot of money", 
  b: 'Travel round the world',
  c: "Get my own happy ending/family/AL-JANNAH FRIDAUS",
  d: 'All of the above',
  isCorrect: 'd'
},
{
  question: 'What is my most used social media app?',
  a: "Istagram", 
  b: 'Facebook',
  c: "Tiktok",
  d: 'Slack',
  isCorrect: 'b'
},
 {question: 'Do I love you?',
  a: "Yes", 
  b: 'No',
  c: "Maybe",
  d: 'partially yes and no',
  isCorrect: 'a'
}

]
const container= document.querySelector('.container')
const questionE1 = document.getElementById('question')
const button = document.getElementById('submit')
const at = document.getElementById('a-text')
const bt = document.getElementById('b-text')
const ct = document.getElementById('c-text')
const dt = document.getElementById('d-text')
const answers = document.querySelectorAll('.answers')
//set current question to 0
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers(); 
    const currentQuizText = questionQuiz[currentQuiz];
    questionE1.innerText = currentQuizText.question;
    at.innerText = currentQuizText.a;
    bt.innerText = currentQuizText.b;
    ct.innerText = currentQuizText.c;
    dt.innerText = currentQuizText.d;
}

function getSelected() {
    let answer;
    answers.forEach((answerE1) => {
        if (answerE1.checked) {
            answer = answerE1.id;
        }
    });
    return answer;
}
function deselectAnswers() {
    answers.forEach((answerE1)=>{
         answerE1.checked=false
    })
}

button.addEventListener('click', () => {
    const answer = getSelected();
      if(answer){
        if (answer === questionQuiz[currentQuiz].isCorrect) {
            score++
        }
        currentQuiz++;
        if (currentQuiz < questionQuiz.length) {
            loadQuiz();
        }
        else{
          container.innerHTML=`Quiz finished! <br> Your score is ${score} out of ${questionQuiz.length}`;
          container.style.textAlign='center';
          container.style.fontSize='240x'
         
        }
      }
        
    
}
      
);
