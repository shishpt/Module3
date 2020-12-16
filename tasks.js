//** TASKLIST **/

var tasklist = document.getElementsByClassName("taskItem");
var i;
for (i = 0; i < tasklist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("-");
  span.className = "close";
  span.appendChild(txt);
  tasklist[i].appendChild(span);
}

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector("UL");
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'li.taskItem') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("taskItem");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  //Finished Task Change color onclick
  function taskComplete() {
    var li = document.getElementsByClassName("taskItem");
  }

  //Alert if nothing no data is entered
  if (inputValue === '') {
    alert("Please enter a task");
  } else {
    document.getElementById("newItems").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("-");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

var close = document.getElementsByClassName('close');
var i;
for (i=0; i < close.length; i++) {
  close[i].onclick = function() {
    var div =this.parentElement;
    div.style.display = "none";
  }}