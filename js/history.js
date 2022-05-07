const result = fetch("https://eulsoo.github.io/list.json")
  .then((res) => {
    return res.json();
  })
  .then((obj) => {
    console.log(obj);
    할일(obj);
  });

console.log(result);

function 할일(obj) {
  console.log(obj);
  const ulElem = document.querySelector(".list");
  for (let i = 0; i < obj.length; i++) {
    //li 만들기
    const li = document.createElement("li");
    const span = document.createElement("span");
    //item 값 가져와서 li에 넣기
    li.textContent = obj[i].item;
    span.textContent = obj[i].price;
    // ul에 li 붙이기
    ulElem.appendChild(li);
    ulElem.appendChild(span);
  }
}

const btn = document.querySelector(".btn");
const history = document.querySelector(".history");

function onHistory() {
  if (history.style.marginTop === "55px") {
    history.style.marginTop = "309px";
  } else {
    history.style.marginTop = "55px";
  }
}

const transfer = document.querySelector(".transfer");
const container2 = document.querySelector(".container_2");
const container3 = document.querySelector(".container_3");
// 이체 화면 올리기
function onTransfer() {
  // e.preventDefault();
  console.log(1);
  container2.style.marginTop = "-812px";
}
// 이체 화면 내리기
function Cancellation() {
  container2.style.marginTop = "10px";
}

function onSpending() {
  console.log(3);
  container3.style.marginTop = "-1634px";
}
function Close() {
  container3.style.marginTop = "11px";
}

// {
//   div && true;
// }
