// 시간 JS
let Target1 = document.querySelector(".clock_1");
let Target2 = document.querySelector(".clock_2");
let Target3 = document.querySelector(".clock_3");
function clock() {
  let time = new Date();

  let hours = time.getHours();
  let minutes = time.getMinutes();
  // let seconds = time.getSeconds();

  Target1.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;

  Target2.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;

  Target3.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}
clock();
setInterval(clock, 1000); // 1초마다 실행
