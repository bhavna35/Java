const dbtn = document.getElementById('decreaseBtn');
const ibtn = document.getElementById('increaseBtn');
const rbtn = document.getElementById('resetBtn');
const value = document.getElementById('countValue');
let count = 0;

dbtn.addEventListener("click", () => {
  count--;
  value.textContent = count;
  updateCounterColor();
});

ibtn.addEventListener("click", () => {
  count++;
  value.textContent = count;
  updateCounterColor();
});

rbtn.addEventListener("click", () => {
  count = 0;
  value.textContent = count;
  updateCounterColor();
});

// Initial color update based on initial count value
updateCounterColor();
function updateCounterColor(){
  if(count > 0) {
    value.style.color = "green";
  }
  if (count < 0) {
    value.style.color = "red";
  }
  if (count === 0) {
    value.style.color = "#222";
  }
}