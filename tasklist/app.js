input.focus();

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));


function addTask() {    
    let listRow = document.createElement("li");    
    let newValue = document.getElementById("input").value;
    let x = document.createTextNode(newValue);

    if (newValue === '') {
    alert("You must write something!");
    } else {
    itemsArray.push(newValue);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    let a = document.createElement("a");
    a.appendChild(x);
    listRow.appendChild(a);
       
    let newDiv = document.createElement("div");
    newDiv.appendChild(listRow);
    newDiv.className = "newDivClass";

    document.getElementById("listOfTasks").appendChild(newDiv);
    //document.getElementById("input").value = "";
    
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);
    a.appendChild(span);

    let close = document.getElementsByClassName("close");
        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                let conf = confirm("Are you sure you want to delete the task?");
                if (conf ==  true){
                let div = this.parentElement.parentElement.parentElement;
                div.style.display = "none"; 
                }
            } 
        }   
    }
    document.getElementById("input").value = "";   
}


function filter(){
    let input, inputUpperCase, ul, li, a, i;
    input = document.getElementById("filter");
    inputUpperCase = input.value.toUpperCase();
    ul = document.getElementById("listOfTasks");
    li = ul.getElementsByTagName("li");
        for (let i = 0; i < li.length; i++) {
            let a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(inputUpperCase) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }    
}

function clearAll() {
    let list = document.getElementsByClassName("newDivClass");
    let conf = confirm("Are you sure you want to delete all tasks?");
        if (conf ==  true){
            for(i = 0; i<list.length; i++) {      
            list[i].style.display = "none";
            localStorage.clear();
            itemsArray=[];            
            }
        }  

    }
    

for (let i=0;i<itemsArray.length;i++){

    let listRow = document.createElement("li");
    let newValueS = itemsArray[i];
    let x = document.createTextNode(newValueS);
    
    let a = document.createElement("a");
    a.appendChild(x);
    listRow.appendChild(a);

    let newDiv = document.createElement("div");
    newDiv.appendChild(listRow);
    newDiv.className = "newDivClass";

    document.getElementById("listOfTasks").appendChild(newDiv);
    document.getElementById("input").value = "";
    
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);
    a.appendChild(span);

    let close = document.getElementsByClassName("close");
        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                let conf = confirm("Are you sure you want to delete the task?");
                if (conf ==  true){
                let div = this.parentElement.parentElement.parentElement;
                div.style.display = "none"; 
                }
            } 
       }   
}


let inputEnter = document.getElementById("input");

inputEnter.addEventListener("keypress", function(event) {
   // event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById('button1').click();
    }
});