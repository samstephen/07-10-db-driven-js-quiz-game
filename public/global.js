/**
 * Created by Samuel Stephen and Nick Schetter on 7/10/15.
 */


// variables containing an array of the questions AND an array of answers
var questions = [question1, question2, question3, question4];
var answers = ["b", "a", "d", "a"];


for (var n=0; n < questions.length; n++) {
    questions[n].style.display = 'none';
}
questions[0].style.display = 'block';


// variables containing our counter and the score
var score = 0;
var i = 0;

// variables handling the submission and interactivity of the app
var userAnswer = document.getElementById("answer");
var questionResult = document.getElementById("question_result");
var totalResult = document.getElementById("total_result");

// runs the function process_answer_submission when user clicks submitter button
var buttonSubmitter = document.getElementById('submitter');
buttonSubmitter.addEventListener('click', process_answer_submission);

// returns the string the user entered in the input field with the id of "answer"
function given_answer() {
    return userAnswer.value;
}

// variable containing anonymous function
// displays the respective div of each question
var next_question = function() {
    for (var n=0; n < questions.length; n++) {
        questions[n].style.display = 'none';
    }
    questions[i].style.display = "block"
}

// variable containing anonymous function
// answer_text comes from process_answer_submission function
var is_correct_answer = function(answer_text) {
    if (answer_text === answers[i]) {
        return true;
    } else {
        return false;
    }
}

// function that clears ALL fields including the div of the question
function clear_all() {
    userAnswer.value = "";
    questionResult.innerHTML = "";
    if (i < questions.length) {
        questions[i].style.display = "none";
    }
    if (i == questions.length) {
        document.getElementById('quiz-wrapper').style.display = 'none';
        document.getElementById('result-wrapper').style.display = 'block';
    }
}

// anonymous function inside a variable
// correct is taken from process_answer_submission
// if correct is true, score incremented by one and questionResult div reads "Success!"
var update_question_result = function(correct) {
    if (correct == true) {
        score++;
        questionResult.innerHTML = "Success!"
    } else {
        questionResult.innerHTML = "Incorrect!"
    }
}

// function that processes multiple functions
// first declares user_answer variable, which comes from given_answer()
// calls the update_question_result function taking is_correct_answer as argument
// is_correct_answer() takes variable user_answer as an argument
function process_answer_submission(){
    var user_answer = given_answer();
    update_question_result(is_correct_answer(user_answer));
    i++;
    count_to_end();
}

// variable containing anonymous function
// calls clear_all
// advances us to next question
// if we are at the last question, continue to results()
// otherwise move to next question
var count_to_end = function() {
    clear_all();
    if (i == questions.length) {
        results();
    } else {
        next_question();
    }
}

function results() {
    questionResult.innerText =
        "You answered " + score + " of " + questions.length + " questions correctly, good for " + (score/questions.length*100) + "%. You need a 70% to pass.";
    if (score/questions.length*100 >= 70) {
        return totalResult.innerText = "You passed! You know when winter is coming.";
    } else {
        return totalResult.innerText = "You failed. You know nothing Jon Snow.";
    }
}
