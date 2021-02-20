function Quiz(questions)
 {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function()
{
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer)
 {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) 
	{
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) 
{
    return this.answer === choice;
}


function populate()
 {
    if(quiz.isEnded())
	{
        showScores();
    }
    else
		{
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) 
{
    var button = document.getElementById(id);
    button.onclick = function() 
	{
        quiz.guess(guess);
        populate();
    }
};


function showProgress()
 {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores()
 {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + " / " + quiz.questions.length + "</h2>";
    if (quiz.score < 8){
    gameOverHTML +=  "<h5>Unfortunately you did not pass the test.Please try again later!</h5>";}
    else{
        gameOverHTML +=  "<h6>You have successfully passed the test.You are now certified in iOS.Where iOS is the certification topic you have chosen for the assignment</h6>";
    }
    
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("iOS Stands For ?", ["Inter network operating system", "iPhone Operating System","Internet Operating System", "None of the above"], "iPhone Operating System"),
    new Question("The IDE Used In Swift Is?", ["Swiftc", "Gas", "XCode", "Ld"], "XCode"),
    new Question("To Create Mutable Object __ Is Used ?", ["Let", "Var","Both", "None of the above"], "Var"),
    new Question(" Which Of The Following IOS Frameworks Is A Commonly Used Third Party Library?", ["AVFoundation.framework", "Audiotoolbox.framework", "AFNetwork.framework", "None of the above"], "AFNetwork.framework"),
    new Question("To Create Contants In Swift We Use Keyword?", ["Conts","Let","Constants","None of the above"], "Let"),
    new Question("Double Has A Precision Of At Least _ Decimal Digits In Swift", ["15", "20", "17", "None"], "15"),
    new Question("First IOS Was Written In", ["1984", "1985", "1986", "1987"], "1986"),
    new Question("We Can Return Multiple Values In Swift From Function By Using?", ["Array", "Tuple", "Both", "None"], "Tuple"),
    new Question("Which Of The Following Is Incorrect Data Type In SWIFT ?", ["int", "double", "char", "none"], "char"),
    new Question("The Most Recent Version Of MacOS Is Based On ... ?", ["WINDOWS", "LINUX", "UNIX", "CMOS"], "UNIX"),


];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();