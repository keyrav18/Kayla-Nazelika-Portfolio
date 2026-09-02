const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

let isPlaying = localStorage.getItem("music") === "on";

if (isPlaying) {
  music.play();
  btn.textContent = "🔇 Pause Music";
}

btn.addEventListener("click", () => {
  isPlaying = !isPlaying;

  if (isPlaying) {
    music.play();
    btn.textContent = "🔇 Pause Music";
    localStorage.setItem("music", "on");
  } else {
    music.pause();
    btn.textContent = "🔈Play Music";
    localStorage.setItem("music", "off");
  }
});
