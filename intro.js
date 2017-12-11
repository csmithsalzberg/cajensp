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
var linebreak = document.createElement("br");
document.body.appendChild(linebreak);
var linebreak = document.createElement("br");
document.body.appendChild(linebreak);

var newB = document.createElement("button"); //add a button with text
var textB = document.createTextNode("next fib");
newB.appendChild(textB);
document.body.appendChild(newB);
var newL = document.createElement("ol"); //add empty list
document.body.appendChild(newL); 

var fib = function(n){
  if (n == 0)
    return 0;
  if (n <= 2)
    return 1;
  return fib(n-1) + fib(n-2);
};

var fibList = function(e){
    var newEle = document.createElement("li");
    var fibeles = newL.getElementsByTagName("li");
    if (fibeles.length < 2)
	var text = document.createTextNode(fibeles.length);
    else{
	console.log(fibeles[fibeles.length-1].innerHTML);
	var num1 = Number(fibeles[fibeles.length-1].innerHTML);
	var num2 = Number(fibeles[fibeles.length-2].innerHTML);
	var text = document.createTextNode(num1+num2);
	
    }
    newEle.appendChild(text);
    newL.appendChild(newEle);
};

newB.addEventListener("click", fibList);




var linebreak = document.createElement("br");
document.body.appendChild(linebreak);
var linebreak = document.createElement("br");
document.body.appendChild(linebreak);

var newB = document.createElement("button"); //add a button with text
var textB = document.createTextNode("next fact");
newB.appendChild(textB);
document.body.appendChild(newB);
var newL = document.createElement("ol"); //add empty list
document.body.appendChild(newL); 

var fib = function(n){
  if (n == 0)
    return 0;
  if (n <= 2)
    return 1;
  return fib(n-1) + fib(n-2);
};

var counter = 0;
var fibList = function(e){
    var newEle = document.createElement("li");
    var text = document.createTextNode( fib(counter) );
    newEle.appendChild(text);
    newL.appendChild(newEle);
    counter++;

};

newB.addEventListener("click", fibList);

var fact = function(n){
  if (n < 2)
    return 1;
  return n * fact(n-1);
};



