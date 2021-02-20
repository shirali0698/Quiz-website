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
        gameOverHTML +=  "<h6>You have successfully passed the test.You are now certified in HTML.Where HTML is the certification topic you have chosen for the assignment</h6>";
    }
    
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("How can you open a link in a new tab/browser window?", ["href_new","href_blank","href_target","none of the above"], "href_blank"),
    new Question("Which HTML element is used to specify a footer for a document or section?", ["footer", "section", "bottom", "header"], "footer"),
    new Question("Which HTML element is used to display a scalar measurement within a range?", ["gauge", "range", "meter", "measure"], "meter"),
    new Question("Which input type defines a slider control?", ["search", "range", "controls", "Slide"], "range"),
    new Question("The HTML canvas element is used to:", ["draw graphics", "display database records", "create draggable elements", "manipulate dta in mysql"], "draw graphics"),
    new Question("Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?", ["src", "Longdesc", "Alt", "Title"], "Alt"),


];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();