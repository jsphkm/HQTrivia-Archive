'use strict'


function generateMessageHeaderContainerElements(){
  return `
    <div class='messagecontainer'>
      <div class='headermessage'>
        Test yourself against the HQ Trivia questions
      </div>
    </div>
  `
}

function generateWelcomeScreenMainContainerElements(){
  return `
    <div class="startpage">
      <div class='yourscorecontainer'>
        <div class='yourscore'>YOUR SCORE</div>
        <div class='yourscorenum'>0</div>
      </div>
      <div class='finalscoreboard'>
        <div class='highscore'>
          <div>HIGH SCORE</div>
          <div class='scoreboardnums'>${highestscoreNum}</div>
        </div>
        <div class='currentattempts'>
          <div>ATTEMPTS</div>
          <div class='scoreboardnums'>${arrayAllScores.length - 1}</div>
        </div>
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
        <img class=\'checkcrossmarkicons\' src=\'img/checkmark.svg\' />
        Correct
      </div>
    </div>
    <div class='incorrectcontainer'>
      <div class='incorrect hideclass'>
        <img class=\'checkcrossmarkicons\' src=\'img/crossmark.svg\' />
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
    <header>
      <div class='scorediv'></div>
      <div class='questionnumorresult'>
        <div class='qnumorresultcontainer'>
        </div>
      </div>
      <figure>
        <div class='hqlogo'>
          <img src='img/HQArchiveLogoGray.svg' />
        </div>
      </figure>
    </header>
    </div>
    <p class='question row'></p>
    <form class='row' id='formid' name='formName' action='' method='post'>
      <fieldset>
        <ul>
          <li>
            <input type='radio' name='answername' id='answer1' value='0' required>
            <label for='answer1' class='answer1'></label>
          </li>
          <li>
            <input type='radio' name='answername' id='answer2' value='1' required>
            <label for='answer2' class='answer2'></label>
          </li>
          <li>
            <input type='radio' name='answername' id='answer3' value='2' required>
            <label for='answer3' class='answer3'></label>
          </li>
          <li>
            <input type='radio' name='answername' id='answer4' value='3' required>
            <label for='answer4' class='answer4'></label>
          </li>
        </ul>
        <div class='correctanswer'></div>
        <div class='submitbuttoncontainer'>
          <button type='button' class="submitBtn">Submit</button>
        </div>
      </fieldset>
      <div class='currentQuestionFraction'></div>
    </form>
  </div>
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
      <div class='yourscorecontainer'>
        <div class='yourscore'>YOUR SCORE</div>
        <div class='yourscorenum'>${currentScore}</div>
      </div>
      <div class='finalscoreboard'>
        <div class='highscore'>
          <div>HIGH SCORE</div>
          <div class='scoreboardnums'>${highestscoreNum}</div>
        </div>
        <div class='currentattempts'>
          <div>ATTEMPTS</div>
          <div class='scoreboardnums'>${arrayAllScores.length - 1}</div>
        </div>
      </div>
      <div class='tryagainbuttoncontainer'>
        <button class='tryagainbtn' type='button' onClick='renderQuestionTemplate()'>Try Again</button>
      </div>
    </div>
  `
}
