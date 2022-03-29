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
}

function data_info(data_structure) {
  if(data_structure==1)
  {
    alert('A stack is a data structure that acts as a collection of elements. Push adds an element to the top of the stack.' +
    ' Pop removes the element at the top of the stack. Peek allows the user to see the value of the top element');
  }
} 

