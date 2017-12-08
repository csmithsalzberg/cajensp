var button = document.getElementById("b");
var itemNum = 8;

var buttonCallback = function(e){
    var list = document.getElementById("thelist");
    var newEle = document.createElement("li");
    var text = document.createTextNode("item " + itemNum);
    newEle.appendChild(text);
    list.appendChild(newEle);
    itemNum++;
};

b.addEventListener("click", buttonCallback);


//
//var list = document.getElementById("thelist");
var listEle = document.getElementsByTagName("li");

var i = 0;
while(i < listEle.length){

    console.log(listEle[i]);
    listEle[i].addEventListener("mouseover", listCallback);
    i++;
    }


listEle[0].addEventListener("mouseover", listCallback);

//listEle.addEventListener("mouseover", listCallback);

var listCallback = function(e){
    console.log("woah it works!");
    
};
