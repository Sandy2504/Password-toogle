const fastCheckbox = document.querySelector("#fast");
const cheapCheckbox = document.querySelector("#cheap");
const goodCheckbox = document.querySelector("#good");

let lastClickedCheckbox;

fastCheckbox.addEventListener("click", function () {
  if (countCheck() > 2) {
    lastClickedCheckbox.checked = false;
  }
  lastClickedCheckbox = fastCheckbox;
});

cheapCheckbox.addEventListener("click", function () {
  if (countCheck() > 2) {
    lastClickedCheckbox.checked = false;
  }
  lastClickedCheckbox = cheapCheckbox;
});

goodCheckbox.addEventListener("click", function () {
  if (countCheck() > 2) {
    lastClickedCheckbox.checked = false;
  }
  lastClickedCheckbox = goodCheckbox;
});

function countCheck() {
  let result = 0;
  if (fastCheckbox.checked) {
    result += 1;
  }
  if (cheapCheckbox.checked) {
    result += 1;
  }
  if (goodCheckbox.checked) {
    result += 1;
  }
  return result;
}
