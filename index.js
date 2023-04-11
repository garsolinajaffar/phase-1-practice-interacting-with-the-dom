const counter = document.getElementById("counter");
let count = 0;

setInterval(function() {
  count++;
  counter.textContent = count;
}, 1000);
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

plusBtn.addEventListener("click", function() {
  count++;
  counter.textContent = count;
});

minusBtn.addEventListener("click", function() {
  count--;
  counter.textContent = count;
});
const heartBtn = document.getElementById("heart");
const likesList = document.querySelector(".likes");
const likes = {};

heartBtn.addEventListener("click", function() {
  if (likes[count]) {
    likes[count]++;
    document.getElementById(`like-${count}`).textContent = `${count} has ${likes[count]} likes`;
  } else {
    likes[count] = 1;
    const li = document.createElement("li");
    li.setAttribute("id", `like-${count}`);
    li.textContent = `${count} has 1 like`;
    likesList.appendChild(li);
  }
});
const pauseBtn = document.getElementById("pause");
let timer;

pauseBtn.addEventListener("click", function() {
  if (pauseBtn.textContent === "pause") {
    clearInterval(timer);
    plusBtn.disabled = true;
    minusBtn.disabled = true;
    heartBtn.disabled = true;
    pauseBtn.textContent = "resume";
  } else {
    timer = setInterval(function() {
      count++;
      counter.textContent = count;
    }, 1000);
    plusBtn.disabled = false;
    minusBtn.disabled = false;
    heartBtn.disabled = false;
    pauseBtn.textContent = "pause";
  }
});
const restartBtn = document.getElementById("restart");

restartBtn.addEventListener("click", function() {
  count = 0
