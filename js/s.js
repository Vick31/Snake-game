document.body.onload = addElement;

function addElement () {
  var newDiv = document.createElement("div");
  document.body.insertBefore(newDiv);
}

newDiv.style.border = "1px solid black"