const rows = document.getElementsByClassName("slide-box-row");
const dots = document.getElementsByClassName("dot");

// add dots
for (let i = 0; i < rows.length; i++) {
  let c = "dot";
  if (i === 0) c = "dot active";

  document
    .getElementById("dots")
    .insertAdjacentHTML(
      "beforeend",
      `<div id=${i} class="${c}" onclick="handleClick(this.id)"></div>`
    );
}

let currIndex = 0;
let interval = 1000;

function change() {
  let before = currIndex - 1;
  let next = currIndex + 1;

  if (currIndex === 0) {
    before = rows.length - 1;
  } else if (currIndex === rows.length - 1) {
    next = 0;
  }

  for (let i = 0; i < rows.length; i++) {
    if (i === currIndex) dots[i].className = "dot active";
    else dots[i].className = "dot";
    rows[i].className = "slide-box-row";
  }
  rows[currIndex].className = "slide-box-row current";
  rows[before].className = "slide-box-row before";
  rows[next].className = "slide-box-row next";
}

const myInterval = setInterval(() => {
  change();
  currIndex++;
  currIndex %= rows.length;
}, 3000);

function handleClick(id) {
  currIndex = parseInt(id);
  change();
  
}
