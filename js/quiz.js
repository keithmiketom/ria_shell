
var questions = [
//	{"text": "this is my question"},
    {"text": "Which is not a cat?", "answers": ["Alice","Sandra","Smoked Cod","Pamplemousse" ], "correct": "Pamplemousse" },
    {"text": "Which cat is fat?", "answers": ["Smoked Cod","Mr. Fluffy","Alice","Sandra" ], "correct": "Smoked Cod"  },
    {"text": "Who is the prettiest cat?", "answers": ["Alice","Smoked Cod","Sandra","Goolag" ], "correct": "Sandra" },
    {"text": "What does Maurice love more than anything?", "answers": ["Salt","Kippers","Wool","Silly Questions" ], "correct": "Wool" },
    {"text": "What happened wigget?", "answers": ["he stood on a crack","he broke his back","he lied","all of the above", "wool" ], "correct": "all of the above" }, 
	{"text": "Where is Mr Fluffy from?", "answers": ["Canada","Belarus","USA","France" ], "correct": "France" },
    {"text": "What Colour is Dave cat?", "answers": ["Ginger","Woolen","Black","White" ], "correct": "Ginger"  },
    {"text": "Which cat is the oldest?", "answers": ["Wigget","Dave Cat","Sandra","Smoked Cod","Wispy", "Alice",  ], "correct": "Wispy" },
    {"text": "What is Sandra Cat's favourite thing to drink?", "answers": ["Tea","Milk","Wine","Blood","Stoly"  ], "correct": "Stoly" },
    {"text": "How many cats are there?", "answers": ["10","8","6","333", "4" ], "correct": "8" }


];

var score = 0;//assign a value to score
var display_question =(function(){//creates a var
    var question = questions[score];//targets a specific question, change array position to change q number

    $("#question").text(question.text); //select key => value

    $("#answers").empty();
    for(var i in question.answers) {
        var answer =question.answers[i];
        $("#answers").append("<li>" + answer + "</li>"); //append adds instead of overwrites as list items
    }

    $("#answers li").on("click", validate_answer); //aims to validate the answer by calling the variable val ans
}
);

var validate_answer = (function () { //creates a function that will validate the answer
    if( $(this).text().toLowerCase() == questions[score].correct.toLowerCase()){
        score++;
        if(questions.length > score){
            display_question();
            countdown = max_countdown
        }else{
            $("#question").text("Thank Mew for finishing!");
            $("#answers").empty();
            clearInterval(countdown_interval);
        }
    }else{
        display_error();
    }
    display_score();
});

var display_error = (function(){
    $("#question").text("You got it wrong, refresh and try again");
    $("#answers").empty();
    clearInterval(countdown_interval);
});
var display_score =(function(){
    $("#score").text(score);
});
var max_countdown = 10;
var countdown = max_countdown;
var display_countdown = (function () {
    $("#countdown").text(countdown);
});

var countdown_interval = setInterval( function() {
        display_countdown();
        countdown--;
        if(countdown < 0){
            display_error();
        }
    },
    1000);



display_question();//displays the content of the question variable

function progress(percent, $element) {//this is in process
					var progressBarWidth = (400 * percent / 100);
					$('#progressBar').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
					}
display_score();