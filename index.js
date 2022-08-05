var randomNumber=Math.floor(Math.random()*16)+1; 
var buttons=["r1","r2","r3","r4","r5","r6","r7","r8","r9","r10","r11","r12","r13","r14","r15","r16"];
var randomButton=buttons[randomNumber];
var gamePattern=[];
gamePattern.push(randomButton);
var userPattern=[];

function soundEffect(music){
    var audio=new Audio("sounds/"+music+".mp3");
    audio.play();
}
soundEffect("bgmmusic");
// This code is to make a button blink at the start of game


document.addEventListener("keydown",function(){
    $("#"+randomButton).fadeOut(100).fadeIn(100);
})

// This is to make a track of userclicked button and button animation

$(".btn").click(function(){
    soundEffect("ding");
    var clickedButton=$(this).attr("id");
    userPattern.push(clickedButton);
    console.log(userPattern);
    $("#"+clickedButton).fadeOut(100).fadeIn(100);
    nextLevel();
    });
    

// Used for the game to go to next level
function nextLevel(){
    var round2=userPattern.length;
    for (var i=0;i<round2;i++){
        if (gamePattern[i]===userPattern[i]){
            var round=gamePattern.length-1;
        }
        else{
           restartGame();
           break;
        }
    }
    
    if (gamePattern.length===userPattern.length){
        if (gamePattern[round]===userPattern[round]){
            userPattern=[];
            var randomNumber2=Math.floor(Math.random()*16)+1; 
            var buttons=["r1","r2","r3","r4","r5","r6","r7","r8","r9","r10","r11","r12","r13","r14","r15","r16"];
            var randomButton2=buttons[randomNumber2];
            gamePattern.push(randomButton2);
            setTimeout(function(){
                $("#"+randomButton2).fadeOut(100).fadeIn(100);
            },1000);
            
        }      
    }

} 
// alert("This is a Memory testing game.")
// alert("Follow the pattern of clicking the button as they get blinked.")
function restartGame(){
    soundEffect("wrong");
    document.querySelector("body").classList.add("game-over");
    document.querySelector("h1").textContent="GAME OVER, REFRESH TO PLAY AGAIN";
    setTimeout(function(){
        document.querySelector("body").classList.remove("game-over");
        document.querySelector("h1").textContent="Press a key to start";
    },5000) 
    gamePattern=[];
    userPattern=[];
    
}