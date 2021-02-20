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
        gameOverHTML +=  "<h6>You have successfully passed the test.You are now certified in ANDROID.Where ANDROID is the certification topic you have chosen for the assignment</h6>";
    }
    
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("How to get a response from an activity in Android?", ["startActivityToResult", "startActivityForResult","Bundle", "None of the above"], "startActivityForResult"),
    new Question("Which of the following is/are are the subclasses in Android?", ["Action Bar Activity", "Launcher Acivity", "Tab Activity", "All of the above"], "All of the above"),
    new Question("What are the return values of onStartCommand() in android services?", ["START_STICKY", "START_NOT_STICKY","START_REDELIVER_INTENT", "All of the above"], "START_STICKY"),
    new Question("What is the use of content provider in android?", ["To send the data from an application to another application", "To store the data in database", "To share the data between applications", "None of the above"], "To share the data between applications"),
    new Question("What is the application class in android?", ["A class that can create only an object","Anonymous class","Java class","base class of all classes"], "base class of all classes"),
    new Question("What is DDMS in android?", ["Dalvik memory server", "Device memory server", "Dalvik monitoring services", "Dalvik debug monitor services"], "Dalvik debug monitor services"),
    new Question("In which technique, we can refresh the dynamic content in android?", ["Java", "Ajax", "Android", "none of the above"], "Ajax"),
    new Question("What is a GCM in android?", ["Google cloud messaging for chrome", "Google count messaging", "Google message pack", "None of the above"], "Google cloud messaging for chrome"),
    new Question("Android is based on which kernel?", ["Linux kernel", "Windows kernel", "Mac kernel", "Hybrid kernel"], "Linux kernel"),
    new Question("Web browser available in android is based on", ["Chrome", "Firefox", "Open-Source Webkit", "Opera"], "Open-Source Webkit"),


];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();