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

/*function printStack(stack) {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');
  ctx.textAlign - 'center';
  ctx.textBaseline = 'middle';
  ctx.font = "100px Arial";
  ctx.fillStyle = 'black';
  ctx.fillText(stack[0], 50, 50);
}*/

function moveToStack() {
  /*const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');
  ctx.textAlign - 'center';
  ctx.textBaseline = 'middle';
  ctx.font = "30px Arial";
  ctx.fillRect(10, 10, 150, 100);
  ctx.fillStyle = 'black';*/
  //const stack1 = createStack();
  //printStack(stack1);

  document.getElementById("stack-page").style.display = "block";
}

/*function createStack() {
  let stack = [1, 2];
  return stack;
}*/

