'use strict'

// This function will insert the welcome screen into index.html
// and wait for the 'click' event of the '.starbutton'
function renderWelcomescreen(){
  // Initialize the global variable for the score
  findHighestScore();
  findHighestStreak();
  $('.bodyheadercontainer').append(generateMessageHeaderContainerElements());
  $('.maincontainer').html(generateWelcomeScreenMainContainerElements());
  onclickstartRenderQuestions();
}

function onclickstartRenderQuestions(){
  $('.startpage').on('click', '.startbutton', function(event){
    renderQuestionTemplate();
  })
}

function renderQuestionTemplate(){
  window.currentScore = 0;
  window.currentStreak = 0;
  window.currentStreakResult = [];
  window.indexofCurrentQuestion = 0;
  $('body > header').slideUp(300, 'swing');
  var maincontainerChild = document.getElementsByClassName('maincontainer')[0];
  maincontainerChild.innerHTML = '';
  $('.maincontainer').append(generateQuestionTemplate());
  renderNewQorFinalPage(indexofCurrentQuestion);
}

function renderNewQorFinalPage(){
  findHighestScore();
  findHighestStreak();
  if (indexofCurrentQuestion<12) {
    $('.currentscorecontainer').html('');
    $('.question').html('');
    $('label').html('');
    $('.submitbuttoncontainer').html('');
    $('.currentQuestionFraction').html('');
    $('.correctanswer').html('');
    $('label').removeClass('wrong right userwrong');
    $('label').addClass('labelhover');
    $("input[type=radio]").attr('disabled', false);
    $('.formcontainer').html('');
    renderNewQuestion(indexofCurrentQuestion);
    indexofCurrentQuestion++;
  }
  else {
    $('.maincontainer').html('');
    arrayAllScores.push(currentScore);
    currentStreakResult.push(currentStreak);
    arrayAllStreaks.push(currentStreakResult[0]);
    $('body > header').slideDown(300, 'swing');
    renderFinalPageElements();
  }
}

function renderNewQuestion(){

  window.currentQA_STORE = listofallQA_STORE[indexofCurrentQuestion];
  window.currentQuestionNum = indexofCurrentQuestion + 1;

  // Pick a random whole number between 0 & 6
  window.randnumforVaryingQuestions = Math.floor(Math.random() * currentQA_STORE.length);

  renderQuestionElements(currentQuestionNum)
}

function renderQuestionElements(currentQuestionNum){

  // Randomize the array of 0 to 4, which will sort the order of the 4 answers
  window.randomized_q_array = randomizeArray();
  var currentQuestionText = currentQA_STORE[randnumforVaryingQuestions].q;
  $('.formcontainer').html(generateFormElements());
  $('.currentscorecontainer').append(generateScoreElement());
  $('.qnumorresultcontainer').html(generateQNumOrResultElement());
  $('.question').html(`${currentQuestionText}`);
  $('.answer1').html(generateAnswerElements(0));
  $('.answer2').html(generateAnswerElements(1));
  $('.answer3').html(generateAnswerElements(2));
  $('.answer4').html(generateAnswerElements(3));
  $('.currentQuestionFraction').html(`${currentQuestionNum}/12`);
  $('.submitbuttoncontainer').html(`<button type='button' class="submitBtn">Submit</button>`);

  enableSubmitButton();
  submitbuttonEventHandler(currentQuestionText);
}

function randomizeArray(){
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

function submitbuttonEventHandler(currentQuestionText){
  var submitElement = document.getElementsByClassName('submitBtn')[0];
  submitElement.addEventListener('click', function(e){
    if (!$('input').is(':checked')) {
      console.log('Can not submit, you need to make a selection!')
      e.preventDefault();
    }
    else {
      var userAnswer = $('input:checked').val();
      generateArrayAnswerBinaryVals()
      renderResultElements(userAnswer, currentQuestionText);
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

function renderResultElements(userAnswer, currentQuestionText){
  // 1 = correct
  // 0 = Incorrect
  if (arrayAnswerBinaryVals[userAnswer] === 1){
    var userAnswerBinaryVal = 1;
    currentScore++;
    currentStreak++;
    document.getElementById("score").textContent=`Score: ${currentScore}`;
    $('.correct').removeClass('hideclass');
    $('.qnumcontainer').addClass('hideclass');
    $('.correct').addClass('showclass');
  }
  else {
    var userAnswerBinaryVal = 0;
    $('.incorrect').removeClass('hideclass');
    $('.qnumcontainer').addClass('hideclass');
    $('.incorrect').addClass('showclass');
  }
  $('button').remove();
  onsubmitAddClasstoAnswers(userAnswer);
  $('.submitbuttoncontainer').html(generateNextButtonElements());

  if (userAnswerBinaryVal === 0){
    $('button').addClass('redNext');
    $('.correctanswercontainer').html(generateCorrectAnswerElements(correctanswerText));
  }
  else {
    $('button').addClass('greenNext');
  }
  disableRadio();
  var savageTrueOrFalse = renderSavagequestionElements();
  if (!(arrayAnswerBinaryVals[userAnswer] === 1)){
    if (currentStreakResult.length == 0){
      currentStreakResult.push(currentStreak);
      console.log(currentStreak + ' is your final streak for this round');
      if (savageTrueOrFalse == 1){
        setTimeout(function(){
          $('.maincontainer').append(generateFinalStreakElements(currentStreak, correctanswerText, currentQuestionText));
          handleModalFocus();
        }, 2000);
      }
      else {
        $('.maincontainer').append(generateFinalStreakElements(currentStreak, correctanswerText, currentQuestionText));
        handleModalFocus();
      }
    }
  }
}

function handleModalFocus(){
  var focusableEls = $('.finalstreakcontainer').find('a, object, :input, [tabindex]');
  var firstFocusableEl = focusableEls.first()[0];
  var lastFocusableEl = focusableEls.last()[0];

  $('.nextbtn').attr('tabindex',-1);
  $('.finalstreakcontainer').on('keydown', function(e) {
    if (e.key === 'Tab' || e.keyCode === 9) {
      if ( e.shiftKey ) /* shift + tab */ {
          if (document.activeElement === firstFocusableEl) {
              lastFocusableEl.focus();
              e.preventDefault();
          }
      }
      else /* tab */ {
        if (document.activeElement === lastFocusableEl) {
            firstFocusableEl.focus();
            e.preventDefault();
        }
      }
    }
  });
}

function removeModalandRenderQuestions() {
  $('.modalbuttons').attr('tabindex', -1);
  $('.nextbtn').attr('tabindex',0);
  $('.finalstreakcontainer').addClass('removeModal');
  $('.finalstreakoverlay').addClass('removeOverlay');
  setTimeout(function(){
      $('.streakModalWrapper').remove();
  }, 600);
}

function renderHome(){
  $('.maincontainer').html('');
  arrayAllScores.push(currentScore);
  arrayAllStreaks.push(currentStreak);
  $('body > header').slideDown(300, 'swing');
  renderFinalPageElements();
}

function onsubmitAddClasstoAnswers(userAnswer){
  var answer_symbols = ['wrong','right']
  var t = 0;

  $('li > input').each(function(){
    if ($(this).is(':checked')) {
      $(this).next().children('.borderoutline').css({
        'background-color': 'transparent',
        'border': '3px solid #E5E5E5',
        'color': '#41414C'
      });
    };
  })

  $('li > label').each(function (){
    if (arrayAnswerBinaryVals[t] === 1) {
      window.correctanswerText = answerkeys(t);
      $(this).children('.color-bg').addClass(answer_symbols[arrayAnswerBinaryVals[t]]);
    }
    if (userAnswer == t && arrayAnswerBinaryVals[t] == 0) {
      $(this).children('.color-bg').addClass('userwrong');
    }
    else {
      $(this).children('.color-bg').addClass(answer_symbols[arrayAnswerBinaryVals[t]]);
    }
    t++;
  });
  $('label').removeClass('labelhover');
  $('input').removeClass('labelhover');
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
  var totalpeople = addTotalofPeople(arrayAllAnswersNum);
  var t = 0;
  $('.borderoutline').each(function (){
    var eachNumPeopleVal = parseInt(arrayAllAnswersNum[randomized_q_array[t]]);
    var numpeopleProportion = eachNumPeopleVal / totalpeople;

    animateWidthOfColorBg(numpeopleProportion, $(this));
    $(this).append('<div class=\'numpeople\'>'+ parseInt(arrayAllAnswersNum[randomized_q_array[t]]) +'</div>');
    t++;
  });
  animatePeopleNums();
}

function animateWidthOfColorBg(numpeopleProportion, thiselements){
  if (numpeopleProportion < 0.15) {
      var numpeopleProportion = 0.15;
  }
  else {
      var widthPercent = (numpeopleProportion * 100) + '%';
  }
  var whitewidthPercent = ((1 - numpeopleProportion) * 100) + '%';
  thiselements.siblings('.color-bg').css({
    'width': 100 + '%'
  });
  thiselements.siblings('.whiteoverlay').css({
    'width': whitewidthPercent
  });
}

function addTotalofPeople(arrayAllAnswersNum){
  var sum = arrayAllAnswersNum.reduce(
    function(acc, val){
      return acc + val;
    });
  return sum;
}

function animatePeopleNums(){
  $('.borderoutline > .numpeople').each(function () {
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
  if (currentStreakResult[0] > higheststreakNum) {
    $('.headermessage').html('<h1>That was your best streak!</h1>');
  }
  else {
    if (currentStreakResult[0] == 12) {
      $('.headermessage').html('<h1>Great Job!</h1>');
    }
    else {
      $('.headermessage').html('<h1>Play Again!</h1>');
    }
  }
  $('.maincontainer').append(generateFinalPageElements());
  $('header').append(generateToastElements());
  renderToastAnimation();
}

function renderToastAnimation() {
  setTimeout(function(){
    $('.toastcontainer').addClass('showtoast');
  }, 500);
  setTimeout(function(){
    $('.toastcontainer').removeClass('showtoast');
  }, 5000);
  setTimeout(function(){
    $('.toastcontainer').remove();
  }, 5500);

}


function renderSavagequestionElements(){
  var savage_value = currentQA_STORE[randnumforVaryingQuestions].savage
  var i = 0;
  if (savage_value){
    $('.maincontainer').append(generateSavageElements());
    setTimeout(function(){$('.savagecontainer').remove();}, 3000);
    i = 1;
  }
  return i;
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

function findHighestStreak(){
  if (arrayAllStreaks.length === 0) {
        return -1;
    }

    window.higheststreakNum = arrayAllStreaks[0];
    var higheststreakNumIndex = 0;

    for (var i = 1; i < arrayAllStreaks.length; i++) {
        if (arrayAllStreaks[i] > higheststreakNum) {
            higheststreakNumIndex = i;
            higheststreakNum = arrayAllStreaks[i];
        }
    }
}


// This function will execute all the necessary functions to render and display 'stuff'
function load_master(){
  window.arrayAllScores = [0];
  window.arrayAllStreaks = [0];
  renderWelcomescreen();
}

// When the page is ready, load the master function
$(load_master);
