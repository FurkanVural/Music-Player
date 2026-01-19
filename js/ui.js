/* <div id="music-box" class="">
      <div class="img">img</div>
      <div class="music-inf ">
        <h5 class="music-title">title</h5>
        <h5 class="singer">singer</h5>
      </div>
      <div class="control-buttons">
        <div class="minute-show">minute</div>
        <div class="buttons">
          <button class="btn btn-primary btnPrev"><i class="bi bi-arrow-left"></i></button>
          <button class="btn btn-primary btnPlay"><i class="bi bi-play-fill"></i></button>
          <button class="btn btn-primary btnNext"><i class="bi bi-arrow-right"></i></button>
        </div>
      </div>
      <div class="music-list">
        <div class="dropdown-list">dropdown</div>
        <div class="sound-control">soundbar</div>
      </div>
    </div> */
class UI {
  constructor() {
    this.music_img = document.querySelector(".music-img");
    this.music_title = document.querySelector(".music-title");
    this.singer = document.querySelector(".singer");
    this.mp3 = document.querySelector("#player");
    this.audio = document.getElementById("player");
    this.btnPlay = document.getElementById("btnPlay");
    this.btnNext = document.querySelector(".btn-next");
    this.btnPrev = document.querySelector(".btn-prev");
    this.timeEl = document.getElementById("time");
    this.seek = document.getElementById("seek");
    this.volume = document.getElementById("volume");
    this.playIcon = `<i class="bi bi-play-fill"></i>`;
    this.pauseIcon = `<i class="bi bi-pause-fill"></i>`;
    this.songList= document.querySelector(".collapsable-song-list");
   
  }
}

