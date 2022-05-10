// const result = fetch("https://bobbykjh.github.io/")
//   .then((res) => {
//     return res.json();
//   })
//   .then((obj) => {
//     console.log(obj);
//     할일(obj);
//   });

// // console.log(result.date);

// function 할일(obj) {
//   console.log(obj);
//   const ulElem = document.querySelector(".list");
//   for (let i = 0; i < obj.length; i++) {
//     //li 만들기
//     const li = document.createElement("li");
//     const span = document.createElement("span");
//     //item 값 가져와서 li에 넣기
//     li.textContent = obj[i].item;
//     span.textContent = obj[i].price;
//     // ul에 li 붙이기
//     ulElem.appendChild(li);
//     ulElem.appendChild(span);
//   }
// }

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
