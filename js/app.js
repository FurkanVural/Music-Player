const musicList = [
  new Music("img/1.jpeg", "Boşver", "Nilüfer", "mp3/1.mp3"),
  new Music("img/2.jpeg", "Bu da Geçer mi Sevgilim", "Yalın", "mp3/2.mp3"),
  new Music("img/3.jpeg", "Aramızda Uçurumlar", "Suat Suna", "mp3/3.mp3"),
];
const ui = new UI();
const music = new Music();
const state = {
  list: musicList,
  index: 0,
  audio: new Audio(),
}

/* ui.music_img.src = musicList[state.index].getImage();
ui.music_title.textContent = musicList[state.index].getName();
ui.singer.textContent = musicList[state.index].singerName;
ui.mp3.src = musicList[state.index].getMp3(); */
let x = 0;
for (let music of musicList) {
  const parentDiv = document.createElement("div");
  parentDiv.classList.add("parent-div");
  parentDiv.dataset.index = x;
  const songSinger = document.createElement("div");
  songSinger.classList.add("song-singer");
  songSinger.textContent = music.getName();
  const songTime = document.createElement("div");
  songTime.classList.add("song-time", "badge", "text-bg-primary");
  songTime.textContent = "--:--";
  music.getDuration((durText) => {
    songTime.textContent = durText;
  });

  parentDiv.appendChild(songSinger);
  parentDiv.appendChild(songTime);
  ui.songList.appendChild(parentDiv);
  parentDiv.addEventListener("click", (e) => {
    let seçilenElement = e.target;
    if(e.target.nodeName == "DIV" && e.target.classList.contains('song-singer')){
        seçilenElement = e.target.parentElement;
        
    }
    console.log(seçilenElement);
    const i = Number(seçilenElement.dataset.index);
    loadTrack(i);
    
  });
  x += 1;
}

// const input = document.createElement("input");
//   input.type = "checkbox";
//   input.classList.add("form-check-input");
//   input.checked = item.completed;
//   input.addEventListener("change", toggleCompleted);

function fmt(sec) {
  if (!isFinite(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

state.audio.addEventListener("loadedmetadata", () => {
  ui.seek.max = state.audio.duration;
  ui.timeEl.textContent = `${fmt(state.audio.currentTime)} / ${fmt(state.audio.duration)}`;
});

ui.btnPlay.addEventListener("click", async () => {
  if (state.audio.paused) {
    await state.audio.play();
    ui.btnPlay.innerHTML = ui.pauseIcon;
  } else {
    state.audio.pause();
    ui.btnPlay.innerHTML = ui.playIcon;
  }
});

state.audio.addEventListener("timeupdate", () => {
  ui.seek.value = state.audio.currentTime;
  ui.timeEl.textContent = `${fmt(state.audio.currentTime)} / ${fmt(state.audio.duration)}`;
});

ui.seek.addEventListener("input", () => {
  state.audio.currentTime = Number(ui.seek.value);
});

ui.volume.addEventListener("input", () => {
  state.audio.volume = Number(volume.value);
});

ui.btnNext.addEventListener("click", async () => {
  next();
});
ui.btnPrev.addEventListener("click", async () => {
  prev();
});

function loadTrack(i,{autoplay = true} = {}){
  state.index = (i + state.list.length) % state.list.length;
  const track = state.list[state.index];

  state.audio.src = track.mp3File;
  state.audio.load();

  setNowPlayingUI(track);
  setActiveRow(state.index);

  if(autoplay) state.audio.play();
  ui.btnPlay.innerHTML = ui.pauseIcon;
  
}
function next(){ loadTrack(state.index + 1);}
function prev(){ loadTrack(state.index - 1);}

function setNowPlayingUI(track) {
  ui.music_img.src = track.img;
  ui.music_title.textContent = track.getName();
  ui.singer.textContent = track.singerName;
}

function setActiveRow(i) {
  const rows = ui.songList.querySelectorAll(".parent-div");
  rows.forEach(r => r.classList.remove("active"));

  const active = ui.songList.querySelector(`.parent-div[data-index="${state.index}"]`);
  if (active) active.classList.add("active");
}

state.audio.addEventListener("ended", next);


loadTrack(0,{autoplay: true});