const result = fetch("https://bobbykjh.github.io/1bank.json")
  .then((res) => {
    return res.json();
  })
  .then((obj) => {
    할일(obj);
  });

function 할일(obj) {
  console.log(obj);
  const ulToday = document.querySelector(".today");
  const ulYesterday = document.querySelector(".yesterday");
  const ulTwoDay = document.querySelector(".twoDay");

  for (let i = 0; i < 6; i++) {
    // li 만들기
    if (obj[i].income === "out") {
      const today = document.createElement("li");
      const todayPrice = document.createElement("ul");
      const strPrice = obj[i].price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      // li에 넣기
      today.textContent = obj[i].history;
      todayPrice.textContent = `${strPrice}`;
      // today class에 넣기
      ulToday.appendChild(today);
      ulToday.appendChild(todayPrice);
    } else {
      const today = document.createElement("li");
      const todayPrice = document.createElement("ul");
      // 문자열
      const strPrice = obj[i].price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      todayPrice.style.color = "#FF5F00";
      // li에 넣기
      today.textContent = obj[i].history;
      todayPrice.textContent = `+ ${strPrice}`;
      // today class에 넣기
      ulToday.appendChild(today);
      ulToday.appendChild(todayPrice);
    }
  }

  for (let i = 6; i < 12; i++) {
    if (obj[i].income === "out") {
      const yesterday = document.createElement("li");
      const yesterdayPrice = document.createElement("ul");
      const strPrice = obj[i].price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      yesterday.textContent = obj[i].history;
      yesterdayPrice.textContent = `${strPrice}`;

      ulYesterday.appendChild(yesterday);
      ulYesterday.appendChild(yesterdayPrice);
    } else {
      const yesterday = document.createElement("li");
      const yesterdayPrice = document.createElement("ul");
      const strPrice = obj[i].price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      yesterdayPrice.style.color = "#ff5f00";

      yesterday.textContent = obj[i].history;
      yesterdayPrice.textContent = `${strPrice}`;

      ulYesterday.appendChild(yesterday);
      ulYesterday.appendChild(yesterdayPrice);
    }
  }
  for (let i = 12; i < 17; i++) {
    if (obj[i].income === "out") {
      const twoDay = document.createElement("li");
      const twoDayPrice = document.createElement("ul");
      const strPrice = obj[i].price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      twoDay.textContent = obj[i].history;
      twoDayPrice.textContent = `${strPrice}`;
      ulTwoDay.appendChild(twoDay);
      ulTwoDay.appendChild(twoDayPrice);
    } else {
      const twoDay = document.createElement("li");
      const twoDayPrice = document.createElement("ul");
      const strPrice = obj[i].price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      twoDayPrice.style.color = "#ff5f00";
      twoDay.textContent = obj[i].history;
      twoDayPrice.textContent = `+ ${strPrice}`;
      ulTwoDay.appendChild(twoDay);
      ulTwoDay.appendChild(twoDayPrice);
    }
  }
  // for (let i = 8;i < )
}
