const musicList = [
    new Music("img/1.jpeg", "Boşver", "Nilüfer", "mp3/1.mp3"),
    new Music("img/2.jpeg", "Bu da Geçer mi Sevgilim", "Yalın", "mp3/2.mp3"),
    new Music("img/3.jpeg", "Aramızda Uçurumlar", "Suat Suna", "mp3/3.mp3"),
]
const ui = new UI();
const music = new Music();

let count = 0;

ui.music_img.src = musicList[count].getImage();
ui.music_title.textContent = musicList[count].getName();
ui.singer.textContent = musicList[count].singerName;
ui.mp3.src = musicList[count].getMp3();

function fmt(sec){
    if(!isFinite(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec %60).toString().padStart(2, "0");
    return `${m}:${s}`;
}

ui.audio.addEventListener("loadedmetadata", () => {
    ui.seek.max = ui.audio.duration;
    ui.timeEl.textContent=`${fmt(ui.audio.currentTime)} / ${fmt(ui.audio.duration)}`;
});

ui.btnPlay.addEventListener("click", async() => {
    
    if(ui.audio.paused){
        await ui.audio.play();
        ui.btnPlay.innerHTML = ui.pauseIcon;
    }else{
        ui.audio.pause();
        ui.btnPlay.innerHTML = ui.playIcon;
    }
});

ui.audio.addEventListener("timeupdate", () => {
    ui.seek.value = ui.audio.currentTime;
    ui.timeEl.textContent = `${fmt(ui.audio.currentTime)} / ${fmt(ui.audio.duration)}`;
});

ui.seek.addEventListener("input", () => {
    ui.audio.currentTime = Number(ui.seek.value);
})

ui.volume.addEventListener("input", () => {
    ui.audio.volume = Number(volume.value);
});