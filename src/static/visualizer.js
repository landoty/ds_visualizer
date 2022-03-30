var data_structure = 0; //Stack = 1, Queue = 2, etc..

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
}

function data_info(data_structure) {
  if(data_structure==1)
  {
    alert('A stack is a data structure that acts as a collection of elements. Push adds an element to the top of the stack.' +
    ' Pop removes the element at the top of the stack. Peek allows the user to see the value of the top element');
  }
} 
function Shape(x, y, w, h, fill) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.fill = fill;
}
var elem = document.getElementById('canvas');

function stackTable()
{
  if (data_structure==1)
  {
    if (elem.getContext) {

      var myRect = [];
    
      myRect.push(new Shape(0, 0, 25, 25, "#333"));
      myRect.push(new Shape(0, 40, 39, 25, "#333"));
      myRect.push(new Shape(0, 80, 100, 25, "#333"));
    
      context = elem.getContext('2d');
      for (var i in myRect) {
          oRec = myRect[i];
          context.fillStyle = oRec.fill;
          context.fillRect(oRec.x, oRec.y, oRec.w, oRec.h);
    
      }
    }
  }
}

