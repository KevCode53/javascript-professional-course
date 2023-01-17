import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import { getUsers, renderTemplate } from "./useUsers.js";
import Ads from './plugins/Ads'

const video: HTMLElement = document.querySelector("video");
const btnPlay: HTMLElement = document.querySelector("#play");
const btnMute: HTMLElement = document.querySelector("#mute");

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPause(), new AutoPlay(), new Ads()],
});

btnPlay.onclick = () => player.togglePlay();
btnMute.onclick = () => {
  if (video.muted) {
    btnMute.innerText = "🔇";
  } else {
    btnMute.innerText = "🔊";
  }
  player.toggleMute();
};

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("../../sw.js").catch((error) => {
//     console.error(error.message);
//   });
// }

const renderUsers = async (users) => {
  const comentsList = document.querySelector(".coments");
  comentsList.innerHTML = "";
  const usersList = await users;
  usersList.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = renderTemplate(
      user.picture.thumbnail,
      user.name.first,
      user.name.last
    );
    comentsList.appendChild(listItem);
  });
};

renderUsers(getUsers());
