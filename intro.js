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
