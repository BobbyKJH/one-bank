// 시간 JS
let Target = document.querySelector(".clock");
function clock() {
  let time = new Date();

  let hours = time.getHours();
  let minutes = time.getMinutes();
  // let seconds = time.getSeconds();

  Target.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
  // :${seconds < 10 ? `0${seconds}` : seconds};
}
clock();
setInterval(clock, 1000); // 1초마다 실행
