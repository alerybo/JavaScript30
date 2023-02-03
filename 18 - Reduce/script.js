// MY SOLUTION

const videos = document.querySelectorAll("li[data-time]");

const videoLengths = [];

videos.forEach((video) => {
  videoLengths.push(video.dataset.time);
});

const totalTimeInSeconds = videoLengths.reduce((acc, curr) => {
  const minutes = parseInt(curr.match(/(\d+):(\d+)/)[1]);
  const seconds = parseInt(curr.match(/(\d+):(\d+)/)[2]);
  return acc + seconds + minutes * 60;
}, 0);
console.log(totalTimeInSeconds);
const totalHours = Math.floor(totalTimeInSeconds / 3600);
const totalMinutes = Math.floor((totalTimeInSeconds % 3600) / 60);
const totalSeconds = (totalTimeInSeconds % 3600) % 60;

console.log(totalHours + ":" + totalMinutes + ":" + totalSeconds);

// WESBOS

// const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

// const seconds = timeNodes
//   .map((node) => node.dataset.time)
//   .map((timeCode) => {
//     const [mins, secs] = timeCode.split(":").map(parseFloat);
//     return mins * 60 + secs;
//   })
//   .reduce((total, vidSeconds) => total + vidSeconds);

// let secondsLeft = seconds;
// const hours = Math.floor(secondsLeft / 3600);
// secondsLeft = secondsLeft % 3600;

// const mins = Math.floor(secondsLeft / 60);
// secondsLeft = secondsLeft % 60;

// console.log(hours, mins, secondsLeft);
