var userName;

alert('Hi and welcome to Sung\'s webpage.');
userName = prompt('What\'s your name?');
alert('Nice to meet you ' + userName + '\!');
// stored userName to be utilized to make game more personal when interacting
var counter = 0;
var correctAnswer = 0;

var playGame = prompt('Would you like to play a guessing game about me? Please answer Y or N').toUpperCase();

// game will check to see if user wants to play game, if not or invalid input then user will cancel game and enter website
if (playGame === 'Y' || playGame === 'YES') {
  console.log('user wants to play');
  alert('Great! Let\'s get started. Please answer Y or N for all the questions!');
// arrays to contain the first five questions, answers, and appropriate responses
  var questionArray = ['Is Sung originally from Washington?', 'Does Sung have any pets?', 'Do you think Sung likes to play sports, ' + userName + '?', 'Does Sung have any siblings?', 'Is Sung Japanese?'];
  var answerArray = ['NO', 'YES', 'YES', 'YES', 'NO'];
  var responseArray = ['That\'s right! Sung was originally from Guam', 'You got it! Sung has a Japanese chin and Tibetan spaniel mix living with him. His name is Cookie', 'Yup! His favorite sports are surfing and rock climbing.', 'That\'s right ' + userName + '! Sung has 2 siblings, an older brother and sister.', 'I\'m impressed! Sung gets mistaken for Japanese, but is actually Korean!'];
  var wrongArray = ['Sorry, Sung is actually originally from Guam.', 'Sorry, Sung does have one dog named Cookie living with him.', 'Even though he spends a lot of time at home, Sung does like to surf and rock climb on occasion!', 'Sadly he has to contend with 2 siblings, both older.', 'While commonly mistake for being Japanese, Sung is actually Korean.'];
  var answer;
// answer variable will update progressively as user answers each question
  for (y = 0; y < questionArray.length; y++) {
    answer = prompt(questionArray[y]).toUpperCase();
    console.log('answer is ' + answer);
    counter++;
    if (answer === answerArray[y] || answer === answerArray[y][0]) {
      alert(responseArray[y]);
      correctAnswer++;
    } else {
      alert(wrongArray[y]);
    }
  }
// This is the number guessing game utilizing a do/while loop
  var tries = 0;
  do {
    // This if/else statement is to correct a minor grammar issue
    if (tries !== 3) {
      answer = prompt('Let\'s try to guess how old I am. I\'ll give you a hint, I\'m less than 50 years old. You get ' + (4 - tries) + ' tries!');
      console.log('User guessed ' + answer);
    } else {
      answer = prompt('Let\'s try to guess how old I am. I\'ll give you a hint, I\'m less than 50 years old. You get ' + (4 - tries) + ' try left!');
      console.log('User guessed ' + answer);
    }
    // This if/else statement is to first check whether or not the user input a valid response
    if (isNaN(parseFloat(answer)) === false ) {
      // This if/else statement is evaluating the valid response
      if (parseFloat(answer) === 30) {
        alert('Good job! You got it right!');
        correctAnswer++;
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
  counter++;

  tries = 0;
  // creates the array of possible answers
  var placeAnswer = ['JAPAN', 'KOREA', 'GUAM', 'PHILLIPINES', 'COSTA RICA', 'CANADA', 'AUSTRALIA'];
  do {
    if (tries !== 6) {
      answer = prompt('Can you guess some places I\'ve travelled to? You get ' + (7 - tries) + ' tries!').toUpperCase();
    } else {
      answer = prompt('Can you guess some places I\'ve travelled to? You get ' + (7 - tries) + ' try left!').toUpperCase();
    }
    console.log('User guessed ' + answer + '.');
    // a for loop that cycles through the possible answers until a correct answer is found
    for (var i = 0; i < placeAnswer.length; i++) {
      if (answer === placeAnswer[i]) {
        alert('Thats right! I visited ' + placeAnswer[i] + '.');
        tries = 8;
        correctAnswer++;
        for (var x = 0; x < placeAnswer.length; x++) {
          alert('I visited ' + placeAnswer[x] + '.');
        }
      }
    }
    tries++;
  } while (tries < 7);
  counter++;

  answer = prompt('Last question. Do you think Sung is good looking??').toUpperCase();
  console.log('answer is ' + answer);
  if (answer === 'Y' || answer === 'YES') {
    alert('We should hang out. ;)');
  } else {
    alert('Well even if you don\'t, I\'ll still be your friend!');
  }
  alert('You got a total of ' + correctAnswer + ' out of ' + counter + ' correct ' + userName + '! Don\'t worry, I didn\'t include that last one. Enjoy the webpage!');

} else if (playGame === 'N' || playGame === 'NO') {
  console.log('user does not want to play the game');
  alert('No problem, ' + userName + ' ,we don\'t have to. Enjoy the page in the meantime! If you change your mind, refresh the page to play.');
} else {
  console.log('user did not input a Y or N answer');
  alert('That was not a Y or N answer, please refresh the page to try again if you want. Enjoy the page otherwise!');
}
