var score = score;
function correctAns(){
    score += 1;
    document.getElementById("score").innerHTML = score;
    document.getElementById("ansFeedback").interHTML = "Great job! " + Reason;
}
function wrongAns(){
    score -= 1;
    document.getElementById("score").innerHTML = score;
    document.getElementById("ansFeedback").interHTML = "Incorrect. " + Reason;
}