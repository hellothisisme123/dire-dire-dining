var usernamevar = 0;
var reviewvar = 0;
var starreview = 0;
var semifill = 1;
var profileimg = "";

document.getElementById("username").addEventListener('keydown', (e) => {
    if (e.code == "Enter") {
        document.getElementById("review").focus();
        console.log("usernamevar: " + usernamevar);
    }
});

document.getElementById("review").addEventListener('keydown', (e) => {
    if (e.code == "Enter") {
        enterfunction();
    }
});

function enterfunction() {
    console.log("enterclick");
    reviewvar = document.getElementById("review").value;
    usernamevar = document.getElementById("username").value;
    //console.log("reviewvar: " + reviewvar);
    if (usernamevar=="" && starreview==0) {
        alert("Please select a star count and add a name");
    } else if (starreview == 0) {
        alert("Please select a star count");
    } else if (usernamevar == "") {
        alert("Please add a name");
    } else {
        addreview();
        semifill = 1;
    }
}

document.getElementById("star1").addEventListener('mouseover', (e) => {
    if (semifill==1) {
        resetbuttonstars();
        document.getElementById("star1").setAttribute("src", "images/FinalImages/Semi-FilledStar.svg");
    }
});

document.getElementById("star1").addEventListener('mouseleave', (e) => {
    mouseleavefunctionstuff();
});

document.getElementById("star2").addEventListener('mouseover', (e) => {
    if (semifill==1) {
        resetbuttonstars();
        document.getElementById("star1").setAttribute("src", "images/FinalImages/Semi-FilledStar.svg");
        document.getElementById("star2").setAttribute("src", "images/FinalImages/Semi-FilledStar.svg");
    }
});

document.getElementById("star2").addEventListener('mouseleave', (e) => {
    mouseleavefunctionstuff();
});

document.getElementById("star3").addEventListener('mouseover', (e) => {
    if (semifill==1) {
        resetbuttonstars();
        document.getElementById("star1").setAttribute("src", "images/FinalImages/Semi-FilledStar.svg");
        document.getElementById("star2").setAttribute("src", "images/FinalImages/Semi-FilledStar.svg");
        document.getElementById("star3").setAttribute("src", "images/FinalImages/Semi-FilledStar.svg");
    }
});

document.getElementById("star3").addEventListener('mouseleave', (e) => {
    mouseleavefunctionstuff();
});

document.getElementById("star4").addEventListener('mouseover', (e) => {
    if (semifill==1) {
        resetbuttonstars();
        document.getElementById("star1").setAttribute("src", "images/FinalImages/Semi-FilledStar.svg");
        document.getElementById("star2").setAttribute("src", "images/FinalImages/Semi-FilledStar.svg");
        document.getElementById("star3").setAttribute("src", "images/FinalImages/Semi-FilledStar.svg");
        document.getElementById("star4").setAttribute("src", "images/FinalImages/Semi-FilledStar.svg");
    }
});

document.getElementById("star4").addEventListener('mouseleave', (e) => {
    mouseleavefunctionstuff();
});

document.getElementById("star5").addEventListener('mouseover', (e) => {
    if (semifill==1) {
        resetbuttonstars();
        document.getElementById("star1").setAttribute("src", "images/FinalImages/Semi-FilledStar.svg");
        document.getElementById("star2").setAttribute("src", "images/FinalImages/Semi-FilledStar.svg");
        document.getElementById("star3").setAttribute("src", "images/FinalImages/Semi-FilledStar.svg");
        document.getElementById("star4").setAttribute("src", "images/FinalImages/Semi-FilledStar.svg");
        document.getElementById("star5").setAttribute("src", "images/FinalImages/Semi-FilledStar.svg");
    }
});

document.getElementById("star5").addEventListener('mouseleave', (e) => {
    mouseleavefunctionstuff();
});

function buttonclick(stars) {
    if (stars == 1) {
        //1
        resetbuttonstars();
        document.getElementById("star1").setAttribute("src", "images/FinalImages/FilledStar.svg");
        starreview = 1;

    } else if (stars == 2) {
        //2
        resetbuttonstars();
        document.getElementById("star1").setAttribute("src", "images/FinalImages/FilledStar.svg");
        document.getElementById("star2").setAttribute("src", "images/FinalImages/FilledStar.svg");
        starreview = 2;

    } else if (stars == 3) {
        //3
        resetbuttonstars();
        document.getElementById("star1").setAttribute("src", "images/FinalImages/FilledStar.svg");
        document.getElementById("star2").setAttribute("src", "images/FinalImages/FilledStar.svg");
        document.getElementById("star3").setAttribute("src", "images/FinalImages/FilledStar.svg");
        starreview = 3;

    } else if (stars == 4) {
        //4
        resetbuttonstars();
        document.getElementById("star1").setAttribute("src", "images/FinalImages/FilledStar.svg");
        document.getElementById("star2").setAttribute("src", "images/FinalImages/FilledStar.svg");
        document.getElementById("star3").setAttribute("src", "images/FinalImages/FilledStar.svg");
        document.getElementById("star4").setAttribute("src", "images/FinalImages/FilledStar.svg");
        starreview = 4;

    } else if (stars == 5) {
        //5
        resetbuttonstars();
        document.getElementById("star1").setAttribute("src", "images/FinalImages/FilledStar.svg");
        document.getElementById("star2").setAttribute("src", "images/FinalImages/FilledStar.svg");
        document.getElementById("star3").setAttribute("src", "images/FinalImages/FilledStar.svg");
        document.getElementById("star4").setAttribute("src", "images/FinalImages/FilledStar.svg");
        document.getElementById("star5").setAttribute("src", "images/FinalImages/FilledStar.svg");
        starreview = 5;

    }
    console.log(starreview + " stars");
    semifill = 0;
}

function resetbuttonstars() {
    document.getElementById("star1").setAttribute("src", "images/FinalImages/UnfilledStar.svg");
    document.getElementById("star2").setAttribute("src", "images/FinalImages/UnfilledStar.svg");
    document.getElementById("star3").setAttribute("src", "images/FinalImages/UnfilledStar.svg");
    document.getElementById("star4").setAttribute("src", "images/FinalImages/UnfilledStar.svg");
    document.getElementById("star5").setAttribute("src", "images/FinalImages/UnfilledStar.svg");
}

classvar = "classvar";

function addreview() {
    //console.log("Adding the review now");
    //profileimg = document.getElementById("imageinput").value;
    //console.log(profileimg);

    

    if (reviewvar == "") {
        reviewvar = "No Review"
    }
    if (profileimg == "") {
        document.getElementById("reviews").innerHTML += `<div class=\'review\'>
                        <div class=\'innerbox\'>
                            <h2 class=\'username\'>${usernamevar}</h2>
                            <img class=\'faceicon ${classvar}\' src=\'images/FinalImages/FaceIcon.svg\'></img>
                            <p class=\'Review\'>${reviewvar}</p>
                            <p class=\'starcountsreviews\'>${starreview} Stars</p>
                        </div>
                    </div><br><br>`;
                    classvar+= "1";
                    $('#imageinput').change( function(event) {
    var profileimg = URL.createObjectURL(event.target.files[0]);
        $(".classvar").fadeIn("fast").attr('src',URL.createObjectURL(event.target.files[0]));
   
        $("#disp_tmp_path").html("Temporary Path(Copy it and try pasting it in browser address bar) --> <strong>["+tmppath+"]</strong>");
    });
    } else {
        //gets the image stuff
            //profileimg = profileimg.split("\\");
            //console.log(profileimg);
            //profileimg = profileimg[2];
            //console.log(`profileimg: ${profileimg}`);

        //const reader = new FileReader();
        //reader.addEventListener("load", () => {
         //   profileimg = reader.result;
        //});

        document.getElementById("reviews").innerHTML += `<div class=\'review\'>
                        <div class=\'innerbox\'>
                            <h2 class=\'username\'>${usernamevar}</h2>
                            <img class=\'faceicon\' src=\'${profileimg}\'></img>
                            <p class=\'Review\'>${reviewvar}</p>
                            <p class=\'starcountsreviews\'>${starreview} Stars</p>
                        </div>
                    </div><br><br>`;
    }
    //reader.readAsDataURL(this.files[0]);
    resetbuttonstars();
    document.getElementById("username").value = "";
    document.getElementById("review").value = "";
    starreview = 0;
}

function mouseleavefunctionstuff() {
    if (starreview == 1) {
        resetbuttonstars();
        document.getElementById("star1").setAttribute("src", "images/FinalImages/FilledStar.svg");
    } else if (starreview == 2) {
        resetbuttonstars();
        document.getElementById("star1").setAttribute("src", "images/FinalImages/FilledStar.svg");
        document.getElementById("star2").setAttribute("src", "images/FinalImages/FilledStar.svg");
    } else if (starreview == 3) {
        resetbuttonstars();
        document.getElementById("star1").setAttribute("src", "images/FinalImages/FilledStar.svg");
        document.getElementById("star2").setAttribute("src", "images/FinalImages/FilledStar.svg");
        document.getElementById("star3").setAttribute("src", "images/FinalImages/FilledStar.svg");
    } else if (starreview == 4) {
        resetbuttonstars();
        document.getElementById("star1").setAttribute("src", "images/FinalImages/FilledStar.svg");
        document.getElementById("star2").setAttribute("src", "images/FinalImages/FilledStar.svg");
        document.getElementById("star3").setAttribute("src", "images/FinalImages/FilledStar.svg");
        document.getElementById("star4").setAttribute("src", "images/FinalImages/FilledStar.svg");
    } else if (starreview == 5) {
        resetbuttonstars();
        document.getElementById("star1").setAttribute("src", "images/FinalImages/FilledStar.svg");
        document.getElementById("star2").setAttribute("src", "images/FinalImages/FilledStar.svg");
        document.getElementById("star3").setAttribute("src", "images/FinalImages/FilledStar.svg");
        document.getElementById("star4").setAttribute("src", "images/FinalImages/FilledStar.svg");
        document.getElementById("star5").setAttribute("src", "images/FinalImages/FilledStar.svg");
    }  else {
        resetbuttonstars();
    }
}