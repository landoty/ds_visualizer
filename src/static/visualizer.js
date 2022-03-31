var data_structure = 0; //Stack = 1, Queue = 2, etc..
var top_X = 320;
const top_Y = 350;
var stack = [];
var top_index = stack.length-1;

function dropdown_buttons() {
  document.getElementById("dropdown-menu").classList.toggle("show");
}

function move_to_main() {
  document.getElementById("landing-page").style.display = "none";
  document.getElementById("visualizer-navbar").style.display = "block";
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function moveToStack() {
  document.getElementById("stack-page").style.display = "block";
  data_structure = 1;
  stackTable();
  startStackTable();
}

function data_info(data_structure) {
  if(data_structure==1)
  {
    alert('A stack is a data structure that acts as a collection of elements. Push adds an element to the top of the stack.' +
    ' Pop removes the element at the top of the stack. Peek allows the user to see the value of the top element');
  }
} 
var elem = document.getElementById('canvas');

function stackTable()
{
  if (data_structure==1)
  {
    if (elem.getContext) {
        context = elem.getContext("2d");
        context.beginPath();
        top_X = 320;
        for (let i=0; i<stack.length; i++) {
          context.rect(top_X, top_Y, 130, 200);
          context.fillStyle = "#FAF9F6";
          context.fillRect(top_X, top_Y, 130, 200);
          top_X+=130;
        }
        context.lineWidth = "4";
        context.strokeStyle = "black";
        context.stroke();
      }
    }
  }

function stack_push(value){
  if(stack.length < 10){
    let new_stack_value = prompt("Please enter a value to push onto the stack:");
    if(new_stack_value=="")
    {
      alert("You cannot enter a empty string!")
      return;
    }
    if(new_stack_value==null)
    {
      return;
    }
    context = elem.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    stack.push(new_stack_value);
    top_index++;
    stackTable();
  }
  else{
    alert("Stack length is limited to only 10 elements for this program!");
  }
}

function stack_pop(){
  if(stack.length > 0){
    context = elem.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    stack.pop();
    top_index--;
    stackTable();
  }
  else{
    alert("You can not perform a pop on an empty stack!");
  }
}

function stack_peek(){
  if(stack.length != 0){
    alert("The value in the top element is " + stack[top_index] + "!");
  }
  else{
    alert("Peek can not be performed on an empty stack!");
  }

function startStackTable()
{
  for(let i=0; i<10;i++)
  {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
}