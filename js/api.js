const result = fetch("https://bobbykjh.github.io/1bank.json")
  .then((res) => {
    return res.json();
  })
  .then((obj) => {
    // console.log(obj);
    할일(obj);
  });

// console.log(result.date);

function 할일(obj) {
  console.log(obj);
  const ulElem = document.querySelector(".list");
  const ulToday = document.querySelector(".today");
  const ulYesterday = document.querySelector(".yesterday");
  const ulLastWeek = document.querySelector(".lastWeek");

  for (let i = 0; i < 4; i++) {
    // li 만들기
    const today = document.createElement("li");
    // li에 넣기
    today.textContent = obj[i].price;
    today.textContent = obj[i].history;
    // today class에 넣기
    ulToday.appendChild(today);
  }
  for (let i = 4; i < 8; i++) {
    const yesterday = document.createElement("li");
    yesterday.textContent = obj[i].history;
    ulYesterday.appendChild(yesterday);
  }
  for (let i = 8; i < 20; i++) {
    const lastWeek = document.createElement("li");
    lastWeek.textContent = obj[i].history;
    ulLastWeek.appendChild(lastWeek);
  }
}
