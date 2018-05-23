'use strict'


function generateMessageHeaderContainerElements(){
  return `
    <div class='messagecontainer'>
      <div class='headermessage'>
        <h1>Test yourself with these 12 HQ Trivia questions.</h1>
      </div>
    </div>
  `
}

function generateWelcomeScreenMainContainerElements(){
  return `
    <div class="startpage">
      <div class='currentscoreboard'>
        <div class='yourstreakcontainer'>
          <div class='yourstreak scoretitle'>YOUR STREAK</div>
          <div class='yourstreaknum'>--</div>
        </div>
      </div>
      <div class='finalscoreboard'>
        <div class='highscore'>
          <div class='scoretitle'>HIGH SCORE</div>
          <div class='scoreboardnums'>--</div>
        </div>
        <div class='highstreak'>
          <div class='streaktitle'>HIGH STREAK</div>
          <div class='scoreboardnums'>--</div>
        </div>
      </div>
      <div class='currentattempts'>
        <div class='scoretitle'>ATTEMPTS</div>
        <div class='scoreboardnums'>--</div>
      </div>
      <div class='tryagainbuttoncontainer'>
        <button class="startbutton" type="button">Begin</button>
      </div>
    </div>
  `
}

function generateQNumOrResultElement(){
  return `
    <div class='qnumcontainer'>
      <div class='questionnumber'>Q ${currentQuestionNum}</div>
    </div>
    <div class='correctcontainer'>
      <div class='correct hideclass'>
        <img class=\'checkcrossmarkicons\' src=\'img/checkmark.svg\' alt='checkmark'/>
        Correct
      </div>
    </div>
    <div class='incorrectcontainer'>
      <div class='incorrect hideclass'>
        <img class=\'checkcrossmarkicons\' src=\'img/crossmark.svg\' alt='crossmark'/>
        Incorrect
      </div>
    </div>
  `
}

function generateScoreElement(){
  return `
    <div id='score'>Score: ${currentScore}</div>
  `
}

function generateQuestionTemplate(){
  return `
  <div class="questions">
    <div class='currentscorecontainer'></div>
    <div class='questionnumorresult'>
      <div class='qnumorresultcontainer'></div>
    </div>
    <figure>
      <div class='hqlogo'>
        <img src='img/HQArchiveLogoGray.svg' alt='HQ Archive Gray Logo'/>
      </div>
    </figure>
  </div>
  <p class='question row'></p>
  <div class='formcontainer'>
  </div>
  `
}

function generateFormElements(){
  return `
  <form class='row' id='formid' name='formName' action='' method='post'>
    <ul>
      <li>
        <input type='radio' name='answername' id='answer1' value='0' class='labelhover' required>
        <label for='answer1' class='answer1 labelhover'></label>
      </li>
      <li>
        <input type='radio' name='answername' id='answer2' value='1' class='labelhover' required>
        <label for='answer2' class='answer2 labelhover'></label>
      </li>
      <li>
        <input type='radio' name='answername' id='answer3' value='2' class='labelhover' required>
        <label for='answer3' class='answer3 labelhover'></label>
      </li>
      <li>
        <input type='radio' name='answername' id='answer4' value='3' class='labelhover' required>
        <label for='answer4' class='answer4 labelhover'></label>
      </li>
    </ul>
    <div class='correctanswercontainer'>
    </div>
    <div class='submitbuttoncontainer'>
      <button type='button' class="submitBtn">Submit</button>
    </div>
    <div class='currentQuestionFraction'></div>
  </form>
  `
}

function generateNextButtonElements(){
  return `
    <button class='nextbtn' type='button' onClick='renderNewQorFinalPage(${currentQuestionNum})'>Next</button>
  `
}

function generateFinalPageElements() {
  return `
    <div class='finalpage'>
      <div class='currentscoreboard'>
        <div class='yourstreakcontainer'>
          <div class='yourstreak scoretitle'>YOUR STREAK</div>
          <div class='yourstreaknum'>${currentStreakResult[0]}</div>
        </div>
      </div>
      <div class='finalscoreboard'>
        <div class='highscore'>
          <div class='scoretitle'>HIGH SCORE</div>
          <div class='scoreboardnums'>${highestscoreNum}</div>
        </div>
        <div class='highstreak'>
          <div class='streaktitle'>HIGH STREAK</div>
          <div class='scoreboardnums'>${higheststreakNum}</div>
        </div>
      </div>
      <div class='currentattempts'>
        <div class='scoretitle'>ATTEMPTS</div>
        <div class='scoreboardnums'>${arrayAllScores.length - 1}</div>
      </div>
      <div class='tryagainbuttoncontainer'>
        <button class='tryagainbtn' type='button' onClick='renderQuestionTemplate()'>Try Again</button>
      </div>
    </div>
  `
}

function generateAnswerElements(nthanswerkey) {
  return `
  <div class='borderoutline'>
    <div class='answerclass'>${answerkeys(nthanswerkey)}</div>
  </div>
  <div class='whiteoverlay'></div>
  <div class='color-bg'></div>
  `
}

function generateSavageElements(){
  return `
    <div class='savagecontainer'>
      <p>SAVAGE
      <br />
      QUESTION
      </p>
    </div>
  `
}

function generateCorrectAnswerElements(correctanswerText){
  return `
    <div class='correctanswer'>
      ${correctanswerText} is the correct answer
    </div>
  `
}

function generateFinalStreakElements(currentStreak, correctanswerText, currentQuestionText){
  return `
    <div class=streakModalWrapper>
      <div class='finalstreakcontainer' role='dialog' aria-labelledby='incorrectmessage' aria-describedby='questiontext correctanswermessage'>
        <div class='closebuttoncontainer'>
          <button type='button' class="closebutton modalbuttons" onClick='removeModalandRenderQuestions()' tabindex='1'>&times;</button>
        </div>
        <div class='streakmessagemaincontainer'>
          <div class='incorrectmessagecontainer'>
            <div class='incorrectmessage' id='incorrectmessage'>
              You're incorrect.
            </div>
            <div class='questiontext' id='questiontext'>
              ${currentQuestionText}
            </div>
            <div class='correctanswermessage' id='correctanswermessage'>
              The correct answer is ${correctanswerText}
            </div>
          </div>
          <div class='streakdetailcontainer' role='dialog' aria-labelledby='finalstreaktext finalstreaknumber' aria-describedby='streakinstructions1 streakinstructions2'>
            <div class='streakstats'>
              <div class='finalstreaktext' id='finalstreaktext'>Streak</div>
              <div class='finalstreaknumber' id='finalstreaknumber'>${currentStreak}</div>
            </div>
            <div class='streakinstructions'>
              <p class='streakinstructions1' id='streakinstructions1'>Your streak is over.</p>
              <p class='streakinstructions2' id='streakinstructions2'>However, you can still continue to play and finish this round without affecting your streak or you can end to start a new round.</p>
            </div>
            <div class='endbuttoncontainer'>
              <button type='button' class='endbutton modalbuttons' aria-label='End' onClick='renderHome()' tabindex='2'>End</button>
            </div>
          </div>
          <div class='continuebuttoncontainer'>
            <button type='button' class='continuebutton modalbuttons' aria-label='Close Navigation' onClick='removeModalandRenderQuestions()' tabindex='3'>Continue</button>
          </div>
        </div>
      </div>
      <div class='finalstreakoverlay' onClick='removeModalandRenderQuestions()'></div>
    </div>
  `
}

function generateToastElements(){
  return `
    <div class='toastcontainer'>
      <div class='toastmessage'>
        <div class='currentscoretoast'>
          You got ${currentScore} questions correct!
        </div>
        <div class='highscoretoast'>
          Your last high score was ${highestscoreNum}
        </div>
      </div>
    </div>
  `
}
