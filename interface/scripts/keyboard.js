document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

var cars_ip = "10.3.141.1:12345"
var speed = "100"

$( document ).ready(function() {
    
    $('#cars_ip').attr('value', cars_ip);
    $('#speed option[value="100"]').prop('selected', true);

    $("#button_cars_ip" ).click(function() {
        cars_ip = $('#cars_ip').val();
    });

    $("#button_speed" ).click(function() {
        speed = $('#speed').val();
    });

});

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
    request.open('GET', 'http://' + cars_ip + '/' + endPoint, true);

    console.log('URL appelée : http://' + cars_ip + '/' + endPoint);

    // Send request
    request.send();

}