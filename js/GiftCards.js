var giftcardimg = document.getElementById("giftcardimg"); 
var dollaramount = document.getElementById("dollaramount");
var cost = document.getElementById("cost");
var costamount = document.getElementById("costamount");
var warionoise = new Audio('../Sounds/WarioNoises.mp3')

var randomwario = parseInt(Math.random() * 10);
console.log(randomwario);

var randomreviewcount = parseInt(Math.random() * 1000);
if (randomreviewcount==0) {
    randomreviewcount++;
}
document.getElementById("reviewcount").innerHTML = randomreviewcount;

var randomstarcount = parseInt(Math.random() * 10);
if (randomstarcount < 5) {
    document.getElementById("starcount").innerHTML = "★★★★☆";
} else {
    document.getElementById("starcount").innerHTML = "★★★★★";
}

if (randomwario == 1) {
    warionoise.play();
    document.getElementById("warioimg").classList.add("warioimganimationclass");
    document.getElementById("button5").style.opacity = "0.75";
    document.querySelector("html").style.filter = "invert(100%)";
    document.getElementById("warioimg").style.opacity = "1";
    document.getElementById("cautiontape").style.opacity = "1";
    document.getElementById("button1").style.backgroundColor = "#fdd50b";
    document.getElementById("button2").style.backgroundColor = "#fdd50b";
    document.getElementById("button3").style.backgroundColor = "#fdd50b";
    document.getElementById("button4").style.backgroundColor = "#fdd50b";
    document.getElementById("button1").style.filter = "invert(100%)";
    document.getElementById("button2").style.filter = "invert(100%)";
    document.getElementById("button3").style.filter = "invert(100%)";
    document.getElementById("button4").style.filter = "invert(100%)";
    document.getElementById("giftcardimg").style.filter = "invert(100%)";
    document.getElementById("button5").style.filter = "invert(100%)";
    button5();
} else {
    document.getElementById("button5").remove();
}

function button1() {
    if (randomwario == 1) {
        giftcardimg.setAttribute("src", "Images/FinalImages/Wario5.png");
        dollaramount.innerHTML = "$5";
        cost.innerHTML = "5";
        costamount.innerHTML = "5";
    } else {
        giftcardimg.setAttribute("src", "Images/FinalImages/LuigiCard.png");
        dollaramount.innerHTML = "$5";
        cost.innerHTML = "5";
        costamount.innerHTML = "5";
    }
}

function button2() {
    if (randomwario == 1) {
        giftcardimg.setAttribute("src", "Images/FinalImages/Wario25.png");
        dollaramount.innerHTML = "$25";
        cost.innerHTML = "25";
        costamount.innerHTML = "25";
    } else {
        giftcardimg.setAttribute("src", "Images/FinalImages/MarioCard.png");
        dollaramount.innerHTML = "$25";
        cost.innerHTML = "25";
        costamount.innerHTML = "25";
    }
}

function button3() {
    if (randomwario == 1) {
        giftcardimg.setAttribute("src", "Images/FinalImages/Wario50.png");
        dollaramount.innerHTML = "$50";
        cost.innerHTML = "50";
        costamount.innerHTML = "50";
    } else {
        giftcardimg.setAttribute("src", "Images/FinalImages/YoshiCard.png");
        dollaramount.innerHTML = "$50";
        cost.innerHTML = "50";
        costamount.innerHTML = "50";
    }
}

function button4() {
    if (randomwario == 1) {
        giftcardimg.setAttribute("src", "Images/FinalImages/Wario100.png");
        dollaramount.innerHTML = "$100";
        cost.innerHTML = "100";
        costamount.innerHTML = "100";
    } else {
        giftcardimg.setAttribute("src", "Images/FinalImages/WaluigiCard.png");
        dollaramount.innerHTML = "$100";
        cost.innerHTML = "100";
        costamount.innerHTML = "100";
    }
}

function button5() {
    giftcardimg.setAttribute("src", "Images/FinalImages/WarioCard.png");
    dollaramount.innerHTML = "$1000";
    cost.innerHTML = "1000";
    costamount.innerHTML = "1000";
}

function RemoveTheWar() {
    document.getElementById("warioimg").remove();
    document.getElementById("cautiontape").remove();
    document.body.removeAttribute("onclick");
}

function randomstartingshirt() {
    //randomizes the starting shirt
    var randomshirts = parseInt(Math.random() * 10);
    //console.log(`randomshirts: ${randomshirts}`);
    if (randomshirts < 3 || randomshirts==9) { changeimg(1); }
    else if (randomshirts < 6 || randomshirts==10) { changeimg(3); }
    else if (randomshirts < 9) { changeimg(4); }

    var wrandomshirts = parseInt(Math.random() * 10);
    //console.log(`wrandomshirts: ${wrandomshirts}`);
    if (wrandomshirts < 3 || wrandomshirts==9) { wchangeimg(1); }
    else if (wrandomshirts < 6 || wrandomshirts==10) { wchangeimg(3); }
    else if (wrandomshirts < 9) { wchangeimg(4); }

    var yrandomshirts = parseInt(Math.random() * 10);
    //console.log(`yrandomshirts: ${yrandomshirts}`);
    if (yrandomshirts < 3 || yrandomshirts==9) { ychangeimg(1); }
    else if (yrandomshirts < 6 || yrandomshirts==10) { ychangeimg(3); }
    else if (yrandomshirts < 9) { ychangeimg(4); }
}

function changeimg(number) {
    if (number==1) {
        console.log("1bigmarioimg");
        document.getElementById("Bigmariofaceshirt").setAttribute("src", "Images/FinalImages/BigMarioFace1.png");
    } else if (number==3) {
        console.log("3bigmarioimg");
        document.getElementById("Bigmariofaceshirt").setAttribute("src", "Images/FinalImages/BigMarioFace3.png");
    } else if (number==4) {
        console.log("4bigmarioimg");
        document.getElementById("Bigmariofaceshirt").setAttribute("src", "Images/FinalImages/BigMarioFace4.png");
    }
}

function wchangeimg(wnumber) {
    if (wnumber==1) {
        console.log("w1bigmarioimg");
        document.getElementById("wBigmariofaceshirt").setAttribute("src", "Images/FinalImages/wBigMarioFace1.png");
    } else if (wnumber==3) {
        console.log("w3bigmarioimg");
        document.getElementById("wBigmariofaceshirt").setAttribute("src", "Images/FinalImages/wBigMarioFace3.png");
    } else if (wnumber==4) {
        console.log("w4bigmarioimg");
        document.getElementById("wBigmariofaceshirt").setAttribute("src", "Images/FinalImages/wBigMarioFace4.png");
    }
}

function ychangeimg(ynumber) {
    if (ynumber==1) {
        console.log("y1bigmarioimg");
        document.getElementById("yBigmariofaceshirt").setAttribute("src", "Images/FinalImages/yBigMarioFace1.png");
    } else if (ynumber==3) {
        console.log("y3bigmarioimg");
        document.getElementById("yBigmariofaceshirt").setAttribute("src", "Images/FinalImages/yBigMarioFace3.png");
    } else if (ynumber==4) {
        console.log("y4bigmarioimg");
        document.getElementById("yBigmariofaceshirt").setAttribute("src", "Images/FinalImages/yBigMarioFace4.png");
    }
}

function MarioSweatshirtchangeimg(value) {
    if (value==1) {
        console.log("mariosweatshirtfront");
        document.getElementById("MarioSweatshirt").setAttribute("src", "Images/FinalImages/MarioSweatshirt.png");
    } else if (value==2) {
        console.log("mariosweatshirtfront");
        document.getElementById("MarioSweatshirt").setAttribute("src", "Images/FinalImages/MarioSweatshirtFromBehind.png")
    }
}

function changesweatshirtgraphicimg(sweatshirtnumber) {
    if (sweatshirtnumber==1) {
        console.log("1GraphicSweatshirt");
        document.getElementById("GraphicSweatshirt").setAttribute("src", "Images/FinalImages/GraphicSweatshirt1bg.png");
    } else if (sweatshirtnumber==3) {
        console.log("3GraphicSweatshirt");
        document.getElementById("GraphicSweatshirt").setAttribute("src", "Images/FinalImages/GraphicSweatshirt3bg.png");
    } else if (sweatshirtnumber==4) {
        console.log("4GraphicSweatshirt");
        document.getElementById("GraphicSweatshirt").setAttribute("src", "Images/FinalImages/GraphicSweatshirt4bg.png");
    }
}