
function randomImageSource(){
    var randomNumber = Math.floor(Math.random() * 6 + 1);
    var imageNum = "images/dice"+randomNumber+".png";
    return imageNum;
}

var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1];

var source1 = randomImageSource();

var source2 = randomImageSource();

image1.setAttribute("src", source1);

image2.setAttribute("src", source2);


//For validating winner: 

if(source1[11] > source2[11]){
    document.querySelector("h1").innerText = " 🚩 Player 1 Wins "
}
else if (source1[11] < source2[11]){
    document.querySelector("h1").innerText = " Player 2 Wins  🚩 "
}
else{
    document.querySelector("h1").innerText = " Draw "
}


console.log(source1[11]);