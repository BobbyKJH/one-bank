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
