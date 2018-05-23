'use strict'

// This function will insert the welcome screen into index.html
// and wait for the 'click' event of the '.starbutton'
function renderWelcomescreen(){
  // Initialize the global variable for the score
  findHighestScore();
  $('.bodyheadercontainer').append(generateMessageHeaderContainerElements());
  $('.maincontainer').html(generateWelcomeScreenMainContainerElements());
  onclickstartRenderQuestions();
  // initializeQuizEventHandlers();
}

function onclickstartRenderQuestions(){
  $('.startpage').on('click', '.startbutton', function(event){
    renderQuestionTemplate();
  })
}

function renderQuestionTemplate(){
  window.currentScore = 0;
  var indexofCurrentQuestion = 0;
  $('body > header').slideUp(300, 'swing');
  var maincontainerChild = document.getElementsByClassName('maincontainer')[0];
  maincontainerChild.innerHTML = '';
  $('.maincontainer').append(generateQuestionTemplate());
  renderNewQorFinalPage(indexofCurrentQuestion);
}

function renderNewQorFinalPage(indexofCurrentQuestion){
  findHighestScore();
  if (indexofCurrentQuestion<12) {
    $('input').prop('checked', false);
    $('.scorediv').html('');
    $('.question').html('');
    $('label').html('');
    $('.submitbuttoncontainer').html('');
    $('.currentQuestionFraction').html('');
    $('.correctanswer').html('')
    $('label').removeClass('wrong right userwrong');
    $('label').addClass('labelhover');
    $("input[type=radio]").attr('disabled', false);
    renderNewQuestion(indexofCurrentQuestion);
    indexofCurrentQuestion++;
  }
  else {
    $('.maincontainer').html('');
    arrayAllScores.push(currentScore);
    $('body > header').slideDown(300, 'swing');
    renderFinalPageElements();
    console.log('Done');
  }
}

function renderNewQuestion(indexofCurrentQuestion){

  window.currentQA_STORE = listofallQA_STORE[indexofCurrentQuestion];
  window.currentQuestionNum = indexofCurrentQuestion + 1;

  // Pick a random whole number between 0 & 6
  window.randnumforVaryingQuestions = Math.floor(Math.random() * 7);

  renderQuestionElements(currentQuestionNum)
}

function renderQuestionElements(currentQuestionNum){

  // Randomize the array of 0 to 4, which will sort the order of the 4 answers
  window.randomized_q_array = randomize();

  $('.scorediv').append(generateScoreElement());
  $('.qnumorresultcontainer').html(generateQNumOrResultElement());
  $('.question').html(`${currentQA_STORE[randnumforVaryingQuestions].q}`);
  $('.answer1').html(`<div class='answerclass'>${answerkeys(0)}</div>`);
  $('.answer2').html(`<div class='answerclass'>${answerkeys(1)}</div>`);
  $('.answer3').html(`<div class='answerclass'>${answerkeys(2)}</div>`);
  $('.answer4').html(`<div class='answerclass'>${answerkeys(3)}</div>`);
  $('.currentQuestionFraction').html(`${currentQuestionNum}/12`);
  $('.submitbuttoncontainer').html(`<button type='button' class="submitBtn">Submit</button>`);

  enableSubmitButton();
  submitbuttonEventHandler();
}

function randomize(){
  var ans_array = [0, 1, 2, 3];
  var t = Math.floor(Math.random() * 6);
  for (var t; t < 5; t++) {
    var randomized_q_array = []
    for (var a = 3; a >= 0; a--){
      var rand = Math.floor(Math.random() * a);
      randomized_q_array.push(ans_array[rand]);
      ans_array.splice(rand, 1);
    }
    var ans_array = randomized_q_array
  }
  return ans_array;
}

function enableSubmitButton(){
  $('#formid input[type=radio]').click(function(){
    if ($("input").is(':checked')) {
      $('button').addClass('submitActive');
    }
    else {
      $('button').removeClass('submitActive');
    }
  });
}

function submitbuttonEventHandler(){
  var submitElement = document.getElementsByClassName('submitBtn')[0];
  submitElement.addEventListener('click', function(e){
    if (!$('input').is(':checked')) {
      console.log('Can not submit, you need to make a selection!')
      e.preventDefault();
    }
    else {
      var userAnswer = $('input:checked').val();
      generateArrayAnswerBinaryVals()
      renderResultElements(userAnswer);
    }
  })
}

function generateArrayAnswerBinaryVals(){
  window.arrayAnswerBinaryVals = []
  for (var i=0; i<4; i++){
    var eachAnswerBinaryVal = currentQA_STORE[randnumforVaryingQuestions].a[0][Object.keys(currentQA_STORE[randnumforVaryingQuestions].a[0])[randomized_q_array[i]]];
    arrayAnswerBinaryVals.push(eachAnswerBinaryVal);
  }
}

function renderResultElements(userAnswer){
  // 1 = correct
  // 0 = Incorrect
  if (arrayAnswerBinaryVals[userAnswer] === 1){
    var userAnswerBinaryVal = 1;
    currentScore++;
    document.getElementById("score").textContent=`Score: ${currentScore}`;
    //$(".qnumorresultcontainer").html(`<div class='correct'><img class=\'checkcrossmarkicons\' src=\'img/checkmark.svg\' />Correct</div>`);
    // TODO: Toggle Class to scale this element to appear
    $('.correct').removeClass('hideclass');
    $('.qnumcontainer').addClass('hideclass');
    $('.correct').addClass('showclass');
  }
  else {
    var userAnswerBinaryVal = 0;
    //$(".qnumorresultcontainer").html(`<div class='incorrect'><img class=\'checkcrossmarkicons\' src=\'img/crossmark.svg\' />Incorrect</div>`);
    // TODO: Toggle Class to scale this element to appear
    $('.incorrect').removeClass('hideclass');
    $('.qnumcontainer').addClass('hideclass');
    $('.incorrect').addClass('showclass');
  }
  $('button').remove();
  onsubmitAddClasstoAnswers(userAnswer);
  $('.submitbuttoncontainer').html(generateNextButtonElements());

  if (userAnswerBinaryVal === 0){
    $('button').addClass('redNext');
    $('.correctanswer').html(`${correctanswerText} is the correct answer`);
  }
  else {
    $('button').addClass('greenNext');
  }
  disableRadio();
  savagequestion();
}

function onsubmitAddClasstoAnswers(userAnswer){
  console.log(userAnswer);
  $('input').prop('checked', false);
  var answer_symbols = ['wrong','right']
  var t = 0;
  $('li > label').each(function (){
    if (arrayAnswerBinaryVals[t] === 1) {
      window.correctanswerText = answerkeys(t);
      $(this).addClass(answer_symbols[arrayAnswerBinaryVals[t]]);
    }
    if (userAnswer == t && arrayAnswerBinaryVals[t] == 0) {
      console.log(t);
      $(this).addClass('userwrong');
    }
    else {
      $(this).addClass(answer_symbols[arrayAnswerBinaryVals[t]]);
    }
    t++;
  });
  $('label').removeClass('labelhover');
  renderPeopleNums();
}

function disableRadio() {
  $("input[type=radio]").attr('disabled', true);
}

// This function will grab all the answer choices for the current question
function answerkeys(v){
  return Object.keys(currentQA_STORE[randnumforVaryingQuestions].a[0])[randomized_q_array[v]];
}

function renderPeopleNums(){
  var arrayAllAnswersNum = currentQA_STORE[randnumforVaryingQuestions].people;
  var t = 0;
  $('li > label').each(function (){
    $(this).append('<div class=\'numpeople\'>'+ parseInt(arrayAllAnswersNum[randomized_q_array[t]]) +'</div>');
    t++;
  });
  animatePeopleNums();
}

function animatePeopleNums(){
  $('label > .numpeople').each(function () {
    var $this = $(this);
    jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
      duration: 600,
      easing: 'swing',
      step: function () {
        $this.text(Math.ceil(this.Counter));
      }
    });
  });
}


function renderFinalPageElements() {
  if (currentScore > highestscoreNum) {
    $('.headermessage').html('You\'ve beat the high score!');
  }
  else {
    $('.headermessage').html('Better luck next time');
  }
  $('.maincontainer').append(generateFinalPageElements());
}


function savagequestion(){
  var savage_value = currentQA_STORE[randnumforVaryingQuestions].savage
  if (savage_value){
    $('form > ul').append(savage_message());
  }
}

function savage_message(){
  return `
    <p>SAVAGE QUESTION</p>
  `
}

function findHighestScore(){
  if (arrayAllScores.length === 0) {
        return -1;
    }

    window.highestscoreNum = arrayAllScores[0];
    var highestscoreNumIndex = 0;

    for (var i = 1; i < arrayAllScores.length; i++) {
        if (arrayAllScores[i] > highestscoreNum) {
            highestscoreNumIndex = i;
            highestscoreNum = arrayAllScores[i];
        }
    }
}


// This function will execute all the necessary functions to render and display 'stuff'
function load_master(){
  window.arrayAllScores = [0];
  renderWelcomescreen();
}

// When the page is ready, load the master function
$(load_master);


// TODO:
// 1. Check that accessibility is working - due to elements hidden
// 2. Check that CSS: input[type="radio"]:focused+label is working
// 3. Review css styles that might be duplicates or wins over css specificity
// 4. Attempt the 'savage answer' response

// CSS Specificity: https://css-tricks.com/specifics-on-css-specificity/
// CSS Transitions: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
// CSS Pseudo classes: https://www.w3schools.com/css/css_pseudo_classes.asp

// how to create a modal dialog in javascript
// showModal();
// add timer and fade with setTimeout()
//
// implement drag and drop
// ondrop
// ondragover
//
// html toast popup
//
// https://getbootstrap.com/docs/4.0/components/modal/
//
// https://www.w3schools.com/w3css/w3css_progressbar.asp
//
// https://www.w3schools.com/howto/howto_js_snackbar.asp
//
// https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop
