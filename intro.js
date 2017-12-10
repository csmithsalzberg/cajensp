/*
Team cajen
Caleb Smith-Salzberg, Jennifer Zhang
SoftDev1 pd7
HW16 -- Sequential Progression II: Electric Boogaloo
2017-12-10
*/

var button = document.getElementById("b");
var itemNum = 8;

var addlistele = function(e){
    var list = document.getElementById("thelist"); //full list
    var newEle = document.createElement("li"); //create a new list element
    var text = document.createTextNode("item " + itemNum); //text for the element
    newEle.appendChild(text); //add the text to the element
    list.appendChild(newEle); //add the element to the list
    var listEle = document.getElementsByTagName("li");
    listEle[listEle.length - 1].addEventListener("mouseover", headset);
    listEle[listEle.length - 1].addEventListener("mouseout", headreset);
    listEle[listEle.length - 1].addEventListener("click", remclicked);
    //add the new element's listeners
    itemNum++;
};

b.addEventListener("click", addlistele); //when the button is clicked, perform function above


var headset = function(e){ //change contents of the header
    var text = this.innerHTML;
    var header = document.getElementById("h");
    header.innerHTML = "\n Hovering over " + text;
    //console.log(text);
};
var headreset = function(e){ //change contents of the header back to original
    var header = document.getElementById("h");
    header.innerHTML = "Hello World!";
};
var remclicked = function(e){ //remove clicked list element
    this.remove(); 
};

var listEle = document.getElementsByTagName("li");
var i = 0;
while(i < listEle.length){ //add listeners
    console.log(listEle[i]);
    listEle[i].addEventListener("mouseover", headset);
    listEle[i].addEventListener("mouseout", headreset);
    listEle[i].addEventListener("click", remclicked);
    i++;
}

