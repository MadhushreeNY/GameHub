function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(choices);

var content =
[
  {question: 'A farmer has 12 goats. All but 7 died. How many does he have?', choices: [0, 12, 5, 7], correct: 3},
  {question: 'What is the missing number: 1, 1, 2, 3, 5, 8, 13, _ ?', choices: [20, 22, 21, 18], correct: 2},
  {question: 'The yellow pigment present in some plants is _', choices: ['Xanthophyll', 'Bilirubin', 'Chlorophyll', 'Melanin'], correct: 0},
  {question: 'What is the oxidation state of oxygen in superoxide?', choices: [2, -0.5, -1, +0.5], correct: 1},
  {question: 'Which of the words below is spelled incorrectly?', choices: ['Daiquiri', 'Onomatopoeia', 'Fuchsia', 'Miniscule'], correct: 3},
  {question: 'Which of the following is not a non-contact force?', choices: ['Gravity', 'Friction', 'Magnetic', 'Centripetal'], correct: 1},
  {question: 'Which one of the following was not an Indian president?', choices: ['Zail Singh', 'Shankar Dayal Sharma', 'Lal Bahadur Shastri', 'Pranab Mukherjee'], correct: 2},
  {question: 'A person who studies clouds is called a/an _', choices: ['Vexillologist', 'Sinologist', 'Oneirologist', 'Nephologist'], correct: 3},
  {question: 'What was the first ever Android version?', choices: ['Apple Pie', 'Cupcake', 'Brownie', 'Danish'], correct: 1},
  {question: 'Where is the busiest airport in the world located?', choices: ['Georgia,USA', 'Beijing,China', 'Dubai,UAE', 'California,USA'], correct: 0},
].sort( () => Math.random() - 0.5);

var x = 0;
var y = 1;
var score = 0;

function choices() {
  if (y>10) {
    document.form1.style.visibility = 'hidden';
    document.querySelector('.header').style.visibility = 'hidden';
    document.querySelector('.score').textContent = 'Score: ' + score;
    document.querySelector('.score').style.color='#EEEEEE';
    document.querySelector('.score').style.textShadow='2px 0px grey';
    document.querySelector('.score').style.fontSize='70px';
    document.querySelector('.again').textContent = 'Try again';
    document.querySelector('.home').textContent = 'Go to the Homepage';


  } else {
    var questionNumber = document.querySelector('.questionNumber');
    questionNumber.textContent = 'Question ' + y;

    var question = document.querySelector('.question');
    question.textContent = content[x]['question'];

    var choices = document.querySelectorAll('label');
    for (var i = 0; i < choices.length; i++) {
      choices[i].textContent = content[x]['choices'][i];
    }
  }
}

function next() {
sleep(500);
  var inputs = document.querySelectorAll('input');

  if (content[x] === undefined) {
    return false;
  }

  else if (inputs[0].checked !== true && inputs[1].checked !== true && inputs[2].checked !== true && inputs[3].checked !== true) {
    alert('Please select an answer');

  } else {
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].checked === true && i === content[x]['correct']) {
        score++;
      }
    inputs[i].checked = false;
  }

  x++;
  y++;
  choices();
  }
}

function back() {
  var inputs = document.querySelectorAll('input');

  if (x === 0) {
    return false;

  } else {
    x--;
    y--;
    choices();
  }
}
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e6; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
