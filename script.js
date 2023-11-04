
const inputBox = document.getElementById("input-box");
const listconatiner = document.getElementById("list-container");
 function addTask(){
    if(inputBox.value == ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value
        listconatiner.appendChild(li);
        let span = document.createElement("span");
     span.innerHTML  = "\u00d7";
     li.appendChild(span);
    }
    inputBox.value ="";
    saveDate();
 }
 listconatiner.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("chceked");
        saveDate();
    }
    else if(e.target.tagName === "SPAN"){ // changes were here
        e.target.parentElement.remove();
        saveDate();
    }
        
 }, false);

 function saveDate(){
    localStorage.setItem("data",listconatiner.innerHTML);

 }
 function showTask(){
    listconatiner.innerHTML = localStorage.getItem("data");
 }
 showTask();