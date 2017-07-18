// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
var choices = [];
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    var choice = div.innerHTML;
    removedChoices.push(choice);
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
//var list = document.querySelector('ul');
//list.addEventListener('click', function(ev) {
//  if (ev.target.tagName === 'LI') {
//    ev.target.classList.toggle('checked');
//  }
//}, false);

String.prototype.trim = function() {
    return this.replace(/^\s*/,"").replace(/\s*$/,"");
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
//  choices.push(inputValue);
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

// trims the string
  var trimString = inputValue.trim().length;
    
// checks if the string has actual letters and it's not just white space
  if (trimString === 0) {
    alert("You must enter some text!");
  } else {
    document.getElementById("myUL").appendChild(li);
    choices.push(inputValue);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
    
  // This is where its being accessed when pressing the 'x'
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      var text = div.innerHTML;
      var choice = text.split('<')[0];
      div.style.display = "none";
      removeChoice(choice);
    }
  }
}

function multFunc()
{
    document.getElementById("inputs").innerHTML = randomize(choices);
    var el = document.getElementById("inputs");
    var text = new ShuffleText(el);
    text.start();
}

function randomize(choices)
{
        if(choices.length == 0)
        {
            return "Add some choices first!"
        }
    
        var result = choices[Math.floor(Math.random()*choices.length)];
    
        return result;
}

// Not sure if this will be an issue later, but here, the textfield is connected to the function newElement() and not to the button 'Add'
function handle(e) {
    var key = e.keyCode || e.which;
    if (key===13) {
        newElement();
    }
}

function removeChoice(ch) {
    var index = choices.indexOf(ch);
    choices.splice(index, 1);
}

function backFunc() {
    window.history.back();
}