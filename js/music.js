class Music{
    constructor(img, musicName, singerName, mp3File){
        this.img = img;
        this.musicName = musicName;
        this.singerName = singerName;
        this.mp3File = mp3File;
    }
    /* get img(){
        return this._img;
    }
    set img(value){
        this._img = value;
    }
    get musicName(){
        return this._musicName;
    }
    set musicName(value){
        this._musicName = value;
    }
    get singerName(){
        return this._singerName;
    }
    set singerName(value){
        this._singerName = value;
    }
    get mp3File(){
        return this._mp3File;
    }
    set mp3File(value){
        this._mp3File = value;
    } */
   getImage(){
    return this.img;
   }
   
   getName(){
        return this.musicName + " - " + this.singerName;
   }
   getMp3(){
    return this.mp3File;
   }
}




