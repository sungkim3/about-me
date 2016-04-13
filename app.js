var userName;

alert('Hi and welcome to Sung\'s webpage.');
userName = prompt('What\'s your name?');
alert('Nice to meet you ' + userName + '\!');
// stored userName to be utilized to make game more personal when interacting
var counter = 0;
var correctAnswer = 0;
var playGame;
playGame = prompt('Would you like to play a guessing game about me? Please answer Y or N').toUpperCase();

// game will check to see if user wants to play game, if not or invalid input then user will cancel game and enter website
if (playGame === 'Y' || playGame === 'YES') {
  console.log('user wants to play');
  alert('Great! Let\'s get started. Please answer Y or N for all the questions!');

  var answer;
// answer variable will update progressively as user answers each question
  answer = prompt('Is Sung originally from Washington?').toUpperCase();
  console.log('answer is ' + answer);
  counter += 1;
  if (answer === 'Y' || answer === 'YES') {
    alert('Sorry, Sung is actually originally from Guam.');
  } else {
    alert('That\'s right! Sung was originally from Guam');
    correctAnswer += 1;
  }

  answer = prompt('Does Sung have any pets?').toUpperCase();
  console.log('answer is ' + answer);
  counter += 1;
  if (answer === 'Y' || answer === 'YES') {
    alert('You got it! Sung has a Japanese chin and Tibetan spaniel mix living with him. His name is Cookie');
    correctAnswer += 1;
  } else {
    alert('Sorry, Sung does have one dog named Cookie living with him.');
  }

  answer = prompt('Do you think Sung likes to play sports, ' + userName + '?').toUpperCase();
  console.log('answer is ' + answer);
  counter += 1;
  if (answer === 'Y' || answer === 'YES') {
    alert('Yup! His favorite sports are surfing and rock climbing.');
    correctAnswer += 1;
  } else {
    alert('Even though he spends a lot of time at home, Sung does like to surf and rock climb on occasion!');
  }

  answer = prompt('Does Sung have any siblings?').toUpperCase();
  console.log('answer is ' + answer);
  counter += 1;
  if (answer === 'Y' || answer === 'YES') {
    alert('That\'s right ' + userName + '! Sung has 2 siblings, an older brother and sister.');
    correctAnswer += 1;
  } else {
    alert('Sadly he has to contend with 2 siblings, both older.');
  }

  answer = prompt('Is Sung Japanese?').toUpperCase();
  console.log('answer is ' + answer);
  counter += 1;
  if (answer === 'Y' || answer === 'YES') {
    alert('While commonly mistake for being Japanese, Sung is actually Korean.');
  } else {
    alert('I\'m impressed! Sung gets mistaken for Japanese, but is actually Korean!');
    correctAnswer += 1;
  }
// This is the number guessing game utilizing a do/while loop
  var tries = 0;
  do {
    if (tries !== 3) {
      answer = prompt('Let\'s try to guess how old I am. I\'ll give you a hint, I\'m less than 50 years old. You get ' + (4 - tries) + ' tries!');
      console.log('User guessed ' + answer);
    } else {
      answer = prompt('Let\'s try to guess how old I am. I\'ll give you a hint, I\'m less than 50 years old. You get ' + (4 - tries) + ' try!');
      console.log('User guessed ' + answer);
    }
    if (isNaN(parseFloat(answer)) === false ) {
      if (parseFloat(answer) === 30) {
        alert('Good job! You got it right!');
      } else if (tries === 3) {
        alert('Sorry you ran out of guesses!');
      } else if (parseFloat(answer) < 30) {
        alert('Try to guess a higher number.');
      } else {
        alert('Try to guess a lower number.');
      }
    } else {
      alert('Please input a valid numerical value.');
    }
    tries++;
  } while (parseFloat(answer) !== 30 && tries < 4);

  answer = prompt('Last question. Do you think Sung is good looking??').toUpperCase();
  console.log('answer is ' + answer);
  if (answer === 'Y' || 'YES') {
    alert('We should hang out. ;)');
  } else {
    alert('Well even if you don\'t, welcome to his page!');
  }
  var finalScore = (correctAnswer / counter) * 100;
  alert('Your final score is ' + finalScore + '%!');

} else if (playGame === 'N' || playGame === 'NO') {
  console.log('user does not want to play the game');
  alert('No problem, ' + userName + ' ,we don\'t have to. Enjoy the page in the meantime! If you change your mind, refresh the page to play.');
} else {
  console.log('user did not input a Y or N answer');
  alert('That was not a Y or N answer, please refresh the page to try again if you want. Enjoy the page otherwise!');
}
