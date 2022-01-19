const music = document.querySelector('audio');
const play = document.getElementById("play");
const img = document.querySelector("img");
const artist = document.getElementById("play");
const title= document.getElementById("play");
const prev= document.getElementById("play");
const next = document.getElementById("play");
let isplaying = false;
// for play function
const playMusic = () =>{
    isplaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime")
};
// for pause function
const pauseMusic = () =>{
    isplaying = false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime")
};

play.addEventListener('click',() =>{
    // if(isplaying){
    //     pauseMusic();
    // }else{
    //     playMusic();
    // }
    isplaying ?  pauseMusic() :  playMusic();


});
