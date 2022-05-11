const container = document.querySelector(".container");

const btn = document.querySelector(".btn");
const history = document.querySelector(".history");

function onHistory() {
  if (history.style.marginTop > "310px") {
    history.style.marginTop = "309px";
    container.style.opacity = "0.8";
  } else {
    history.style.marginTop = "45px";
    container.style.opacity = "1";
  }
}

function onHistory1() {
  if (history.style > "310px") {
    history.style.marginTop = "309px";
    container.style.opacity = "0.8";
  } else {
    history.style.marginTop = "45px";
    container.style.opacity = "1";
  }
}

const transfer = document.querySelector(".transfer");
const container2 = document.querySelector(".container_2");
const container3 = document.querySelector(".container_3");
// 이체 화면 올리기
function onTransfer() {
  container2.style.marginTop = "-812px";
  container.style.opacity = "1";
}
// 이체 화면 내리기
function Cancellation() {
  container2.style.marginTop = "10px";
  container.style.opacity = "0.8";
}

function onSpending() {
  container3.style.marginTop = "-1634px";
  container.style.opacity = "1";
}
function Close() {
  container3.style.marginTop = "11px";
  container.style.opacity = "0.8";
}

// {
//   div && true;
// }
