var myText = document.getElementById("text-area");
var remaining = document.getElementById("remaining-number");
var limit = 150;
remaining.textContent ="Character " + 0 + "/" + limit;

myText.addEventListener("input", function(){
    var textlength = myText.value.length;
    remaining.textContent ="Character " + textlength + "/" + limit;

    if(textlength > limit){
        myText.style.borderColor = "#DE3163";
        remaining.style.color = "#DE3163";
    }
    else{
        myText.style.borderColor = "black";
        remaining.style.color = "black";
    }
});