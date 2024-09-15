var fruitList = document.getElementsByTagName("li");
for(var i = 0; i < fruitList.length; i++) {
    fruitList[i].innerHTML = fruitList[i].innerHTML.toUpperCase();
}