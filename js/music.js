const music = document.querySelector('audio');
const play = document.getElementById("play");
const img = document.querySelector("img");
const artist = document.getElementById("artist");
const title= document.getElementById("title");
const prev= document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
    name: "ansh-1",
    title: "JIGRA",
    artist: 'Varinder Brar',  
}, 
{
    name: "ansh-2",
    title: "Baapu Tharo KHOTO SIKKO",
    artist: ' Kapil Jangir',  
}, 
{
    name: "ansh-3",
    title: "Kaafla ",
    artist: 'Varinder Brar',  
}, 
]


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
const loadsong = (songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/"+songs.name+".mp3";
    img.src = "images/" + songs.name +".jpg";
}
songsIndex =0;
// loadsong(songs [1]); 
const nextsong = () => {
 songsIndex = (songsIndex + 1) % songs.length
    loadsong(songs [songsIndex]);
    playMusic();
}
const prevsong = () => {
    songsIndex = (songsIndex + 1) % songs.length
       loadsong(songs [songsIndex]);
       playMusic();
    }
next.addEventListener("click", nextsong);
prev.addEventListener("click", prevsong);