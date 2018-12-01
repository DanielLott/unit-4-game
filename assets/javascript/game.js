var wins = 0;
var losses = 0;
var total = 0;
var randomTarget = Math.floor(Math.random()*102)+19;
console.log(randomTarget);
$("#targetNumber").text(randomTarget);
$("#winsTally").text(wins);
$("#lossesTally").text(losses);
$("#currentTotal").text(total);

