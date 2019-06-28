document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

function keyDownHandler(event) {
    if(event.keyCode == 39) {
        rightPressed = true;
        console.log("touche droite pressée");
        apiCall("rightKeydown");
    }
    else if(event.keyCode == 37) {
        leftPressed = true;
        console.log("touche gauche pressée");
        apiCall("leftKeydown");
    }
    if(event.keyCode == 40) {
        downPressed = true;
        console.log("touche bas pressée");
        apiCall("backwardKeydown");
    }
    else if(event.keyCode == 38) {
        upPressed = true;
        console.log("touche haut pressée");
        apiCall("forwardKeydown");
    }
}

function keyUpHandler(event) {
    if(event.keyCode == 39) {
        rightPressed = false;
        console.log("touche droite relachée");
        apiCall("resetMotorTurn");
    }
    else if(event.keyCode == 37) {
        leftPressed = false;
        console.log("touche gauche relachée");
        apiCall("resetMotorTurn");
    }
    if(event.keyCode == 40) {
        downPressed = false;
        console.log("touche bas relachée");
        apiCall("resetMotorMove");
    }
    else if(event.keyCode == 38) {
        upPressed = false;
        console.log("touche haut relachée");
        apiCall("resetMotorMove");
    }
}

function apiCall(endPoint){

    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'http://10.3.141.1:12345/' + endPoint, true);

    // Send request
    request.send();

}