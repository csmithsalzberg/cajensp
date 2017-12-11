/*
Team cajen
Caleb Smith-Salzberg, Jennifer Zhang
SoftDev1 pd7
HW16 -- Sequential Progression II: Electric Boogaloo
2017-12-10
*/


var addlistele = function(e){
    var list = document.getElementById("thelist"); //full list
    var newEle = document.createElement("li"); //create a new list element
    
    var listEle = list.getElementsByTagName("li"); //a list of elements in the list
    var numEle = listEle.length; //number of elements currently in the list
    
    var text = document.createTextNode("item " + numEle); //text for the element
    newEle.appendChild(text); //add the text to the element
    list.appendChild(newEle); //add the element to the list

    //add the new element's listeners
    listEle[numEle].addEventListener("mouseover", headset);
    listEle[numEle].addEventListener("mouseout", headreset);
    listEle[numEle].addEventListener("click", remclicked);
};

var button = document.getElementById("b"); //button for adding items into the list
b.addEventListener("click", addlistele); //when the button is clicked, perform function above

//change contents of the header
var headset = function(e){ 
    var text = this.innerHTML;
    var header = document.getElementById("h");
    header.innerHTML = "\n Hovering over " + text;
};
//change contents of the header back to original
var headreset = function(e){
    var header = document.getElementById("h");
    header.innerHTML = "Hello World!";
};
//remove clicked list element
var remclicked = function(e){ 
    this.remove(); 
};

//adds the listeners for the elements currently in the list (before you press the buttons)
var listEle = document.getElementsByTagName("li");
var i = 0;
while(i < listEle.length){
    listEle[i].addEventListener("mouseover", headset);
    listEle[i].addEventListener("mouseout", headreset);
    listEle[i].addEventListener("click", remclicked);
    i++;
}

//Pretty line breaks
var linebreak = document.createElement("br");
document.body.appendChild(linebreak);
var linebreak = document.createElement("br");
document.body.appendChild(linebreak);




//adding fib numbers

//adding a new button for fib
var fibB = document.createElement("button");
var fibT = document.createTextNode("Gimme the next Fibonacci number!");
fibB.appendChild(fibT); //adds text to the button
document.body.appendChild(fibB); //adds button to the dom
var fibL = document.createElement("ol"); //add empty list
document.body.appendChild(fibL); 

//
var fibList = function(e){
    //adds a new element to the list
    var newEle = document.createElement("li");
    var fibEles = fibL.getElementsByTagName("li"); //a list of all the elements in the list
    var numEle = fibEles.length; //number of elements in the list
    if (numEle < 2)
	var text = document.createTextNode(numEle); //if the number of elements is less than 2, then the number is just the number of elements
    else{
	//else, add the previous 2 elements together
	var prev1 = Number(fibEles[numEle-1].innerHTML);
	var prev2 = Number(fibEles[numEle-2].innerHTML);
	var text = document.createTextNode(prev1+prev2);
    }
    newEle.appendChild(text); //adds the text to the element
    fibL.appendChild(newEle); //adds the element to the list
};

fibB.addEventListener("click", fibList);


//factorial
//adding a new button for fact
var factB = document.createElement("button");
var factT = document.createTextNode("Gimme the next factorial number!");
factB.appendChild(factT); //adds text to the button
document.body.appendChild(factB); //adds button to the dom
var factL = document.createElement("ol"); //add empty list
document.body.appendChild(factL); 

//
var factList = function(e){
    //adds a new element to the list
    var newEle = document.createElement("li");
    var factEles = factL.getElementsByTagName("li"); //a list of all the elements in the list
    var numEle = factEles.length; //number of elements in the list
    if (numEle == 0)
	var text = document.createTextNode(1); //if this is the first element, then it is 1
    else{
	//else, multiply the previous number and numEle + 1
	var prev = Number(factEles[numEle-1].innerHTML);
	var text = document.createTextNode(prev * (numEle + 1));
    }
    newEle.appendChild(text); //adds the text to the element
    factL.appendChild(newEle); //adds the element to the list
};

factB.addEventListener("click", factList);
