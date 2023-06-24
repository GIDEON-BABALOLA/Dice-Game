var randomNumber1 = Math.floor(Math.random()*6 +1);
var randomImage1 = "images/dice" +randomNumber1 + ".png";
document.querySelector(".image1").addEventListener("click", function(){
document.querySelector(".image1").setAttribute("src", randomImage1);
})
document.addEventListener("keypress", function(event){
    
    makeSwitch(event.key);
        
})
function makeSwitch(keypress){
    switch (keypress) {
        case "l":
            document.querySelector(".image1").setAttribute("src", randomImage1);
            break;
            case "r":
            document.querySelector(".image2").setAttribute("src", randomImage2);
            break;
            case "d":
            document.querySelector(".image3").setAttribute("src", randomImage3);
            result(randomNumber1, randomNumber2, randomNumber3);
            break;
    
        default:
            break;
         
        }
     
    }

var randomNumber2 = Math.floor(Math.random()*6 +1);
var randomImage2 = "images/dice" +randomNumber2 + ".png";
document.querySelector(".image2").addEventListener("click", function(){
document.querySelector(".image2").setAttribute("src", randomImage2);
})
var randomNumber3 = Math.floor(Math.random()*6 +1);
var randomImage3 = "images/dice" +randomNumber3 + ".png";
document.querySelector(".image3").addEventListener("click", function(){
document.querySelector(".image3").setAttribute("src", randomImage3);
result(randomNumber1, randomNumber2, randomNumber3);
})


function result(randomNumber1, randomNumber2, randomNumber3){
if( randomNumber1 > randomNumber2 &&  randomNumber1 > randomNumber3 ){
    document.querySelector("h1").innerHTML = "Player1 Wins"
}
else if( randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3){
    document.querySelector("h1").innerHTML = "Player2 Wins"
}
else if( randomNumber3 > randomNumber1 && randomNumber3 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player3 Wins"
}
else if( randomNumber2 === randomNumber1 && randomNumber3 < randomNumber2 ){
    document.querySelector("h1").innerHTML = "No winner"
}
else if( randomNumber3 === randomNumber2 && randomNumber1 <  randomNumber2){
    document.querySelector("h1").innerHTML = "No winner"
}
else if( randomNumber1 === randomNumber3 && randomNumber2 < randomNumber1){
    document.querySelector("h1").innerHTML = "No winner"
}
else{
    document.querySelector("h1").innerHTML = "Draw"
}
}
