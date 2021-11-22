$(function () {
  const endTime = new Date("Thu Nov 23 2021 21:00:00 GMT+0200").getTime();
  let currentTime, timeLeft, days, hours, mins, seconds;

  const MIN_IN_MSECONDS = 1000 * 60;
  const HOUR_IN_MSECONDS = MIN_IN_MSECONDS * 60;
  const DAY_IN_MSECONDS = HOUR_IN_MSECONDS * 24;
  let intervalId;

  let getInt = (time) => {
    time = `${Math.floor(time)}`;
    if (time.length === 1) {
      time = `0${time}`;
    }
    return time;
  };

  function countDown() {
    currentTime = new Date().getTime();
    timeLeft = endTime - currentTime;

    if (timeLeft > 0) {
      days = getInt(timeLeft / DAY_IN_MSECONDS);
      hours = getInt((timeLeft % DAY_IN_MSECONDS) / HOUR_IN_MSECONDS);
      mins = getInt((timeLeft % HOUR_IN_MSECONDS) / MIN_IN_MSECONDS);
      seconds = getInt((timeLeft % MIN_IN_MSECONDS) / 1000);

      $("#days").text(days);
      $("#hours").text(hours);
      $("#mins").text(mins);
      $("#seconds").text(seconds);
    } else {
      clearInterval(intervalId);
    }
  }

  intervalId = setInterval(countDown, 1000);
});
