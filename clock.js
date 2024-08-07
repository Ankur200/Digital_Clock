const digitalClock = document.getElementById("clock");

setInterval(() => {
  let date = new Date();
  digitalClock.innerHTML = date.toLocaleTimeString();
}, 1000);
