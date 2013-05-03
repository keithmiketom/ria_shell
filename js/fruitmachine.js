$(document).ready();
var pix = ["1.gif", "2.gif", "3.gif", "4.gif"]

var arrayNum = 0;
var speed = 100;
var count;

playSound("wellcome.wav");

function startgame(leverPic) {
    playSound("wheelspin.wav");
    rndA = Math.round(Math.random() * 3) + 24;
    rndB = Math.round(Math.random() * 3) + 12;
    rndC = Math.round(Math.random() * 3);
    count = 48;
    leverPic.setAttribute("src", "img/lever2.jpg");
    cycles();
    var time = setTimeout("resetLever();", 750);
}

function cycles() {
    if (count > rndA) {
        changePic(1);
    }
    if (count > rndB) {
        changePic(2);
    }
    if (count > rndC) {
        changePic(3);
    }
    arrayNum++;
    count--;
    speed = speed + 3;
    if (count > 0) {
        var time = setTimeout("cycles();", speed);
    }
    if (arrayNum > 3) {
        arrayNum = 0;
    }
    if (count == 0) {
        speed = 100;
        endgame();
    }
}

function changePic(x) {
    var roller = document.getElementById("roller" + x);
    roller.setAttribute("src", "img/" + pix[arrayNum]);
}

function resetLever() {
    lever = document.getElementById("leverpic");
    lever.setAttribute("src", "img/lever1.jpg");
}

function endgame() {
    pic1 = document.getElementById("roller1").getAttribute("src");
    pic2 = document.getElementById("roller2").getAttribute("src");
    pic3 = document.getElementById("roller3").getAttribute("src");
    if (pic1 == pic2 && pic2 == pic3) {
        playSound("win.wav");
        alertify.confirm("AMEWSING!");
    } else {

        var rndEnd = Math.floor(Math.random() * 3) + 1;
        playSound("loose" + rndEnd + ".wav");
        alertify.alert("No matches, Boo for you!");
    }
}

function playSound(clip) {
    document.getElementById("sound").innerHTML = '<embed src="sounds/' + clip + '" hidden="true" autostart="true" loop="false" />';
}