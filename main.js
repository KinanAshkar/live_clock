const hours = document.querySelector(".hour");
const minutes = document.querySelector(".minute");
const seconds = document.querySelector(".second");

function updateTheTime() {
  const date = new Date();
  setTimeout(updateTheTime, 1000);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const HourCalculation = (hour / 12) * 360;
  hours.style.transform = `rotate(${HourCalculation}deg)`;
  const minuteCalculation = (minute / 60) * 360;
  minutes.style.transform = `rotate(${minuteCalculation}deg)`;
  const secondCalculatoin = (second / 60) * 360;
  seconds.style.transform = `rotate(${secondCalculatoin}deg)`;
}
updateTheTime();
