
function animatePress(button){
    $("#"+button).addClass("pressed");
    setTimeout(function () {
    $("#" + button).removeClass("pressed");
    }, 100);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function checkUserPattern() {
    if (userPattern[userPattern.length - 1] === gamePattern[userPattern.length - 1]) {
        if (userPattern.length === gamePattern.length){
            setTimeout(function () {
            sequence();
          }, 1000);     
        } 
        
    } else if ((userPattern.length -1) !== gamePattern.length){
        
        if(userPattern[userPattern.length - 1] !== gamePattern[userPattern.length -1]){
            
            playSound("wrong");
            $("body").addClass("game-over");
            $("#level-title").text("Game Over, Press Any Key to Restart");

            setTimeout(function () {
            $("body").removeClass("game-over");
            }, 200);
        
            console.log("NaN")
            begin()
        
        }
    } 
}

function begin(){
    level = 0;
    gamePattern = [];
    started = false;
    
$(document).keypress(function() {
      
    if (!started) {
        sequence();
        started = true;
    }
});
}

function sequence() {
    
    userPattern = []
    
    level ++
    $("#level-title").text("Level " + level);


    buttonColours = ["green","red","yellow","blue"];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomColour = buttonColours[randomNumber];
    $("#"+randomColour).fadeIn(100).fadeOut(100).fadeIn(100);
    gamePattern.push(randomColour)
    playSound(randomColour)
    console.log(gamePattern)

   
}

function buttonClicks(){
    $(".btn").click(function() {
        var userChosenColour = $(this).attr("id");
        userPattern.push(userChosenColour);
        console.log(userPattern)
        animatePress(userChosenColour);
        playSound(userChosenColour)
        checkUserPattern();
    });
}



var gamePattern =[]
var userPattern =[]
var level = 0
var started= false

begin()

buttonClicks()
