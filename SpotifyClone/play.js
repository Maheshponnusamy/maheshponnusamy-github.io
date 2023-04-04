let image = document.getElementById("image");
let counter = 0;
let imgArray = [
  "pic/topimg/top0.jpg",
  "pic/topimg/top1.jpg",
  "pic/topimg/top2.jpg",
  "pic/topimg/top3.jpg",
  "pic/topimg/top4.jpg",
  "pic/topimg/top5.jpg",
  "pic/topimg/top6.jpg",
  "pic/topimg/top7.jpg",
  "pic/topimg/top8.jpg",
  "pic/topimg/top9.jpg",
  "pic/topimg/top10.png",
];
// pre-load the images into the browser cache
let images = imgArray.map((src) => {
  let img = new Image();
  img.src = src;
  return img;
});
// DELAY TIME FOR EACH INMAGE
setInterval(function () {
  image.src = imgArray[counter];
  if (counter === imgArray.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
}, 4000);
// To get current or System date or time
const hour = new Date().getHours();

// Update the greeting based on the current hour
const greeting = document.getElementById("greeting");
if (hour >= 0 && hour < 12) {
  greeting.textContent = "Good morning !..";
} else if (hour >= 12 && hour < 18) {
  greeting.textContent = "Good afternoon !..";
} else {
  greeting.textContent = "Good evening !..";
}

// ...........TO PLAY SONG ...........
const playlist = document.getElementById("playlist");
const playImage = document.getElementsByClassName("plybtn");
const audio = new Audio();
audio.controls = true;
audio.autoplay = false;
audio.addEventListener("ended", playNext);
let currentSongIndex = -1;
const songs = [
  { id: 1, file: "sounds/Telleapugalum4.mp3" },
  { id: 2, file: "sounds/Soul-Of-Varisu-MassTamilan.dev.mp3" },
  { id: 3, file: "sounds/kanjapoo.mp3" },
  { id: 4, file: "sounds/tumtum.mp3" },
  { id: 5, file: "sounds/mesaiyamuruku.mp3" },
  { id: 6, file: "sounds/Ippadiye.mp3" },
  { id: 7, file: "sounds/ennandanthalumu.mp3" },
  { id: 8, file: "sounds/OruThuli.mp3" },
  { id: 9, file: "sounds/Idhazhin-oram.mp3" },
  { id: 10, file: "sounds/Daddy-Mummy.mp3" },
  { id: 11, file: "sounds/Tjimiki1.mp3" },
  { id: 12, file: "sounds/kadhalsolla.mp3" },
  { id: 13, file: "sounds/english/english1.mp3" },
  { id: 14, file: "sounds/english/english2.mp3" },
  { id: 15, file: "sounds/english/english3.mp3" },
  { id: 16, file: "sounds/english/english4.mp3" },
  { id: 17, file: "sounds/english/english5.mp3" },
];

// Create an array of song elements and add click event listeners to each one
const songElements = Array.from(document.querySelectorAll(".song"));
songElements.forEach((songElement) => {
  songElement.addEventListener("click", playSong);
});
//Function to play the songs
function playSong() {
  // Get the index of the song based on the clicked element's data-src attribute
  const songIndex = songs.findIndex(
    (song) => song.file === this.getAttribute("data-src")
  );

  // If the clicked song is not the currently playing song, update the audio source and play the song
  if (currentSongIndex == songIndex) {
    if (audio.paused) {
      audio.play();
      playImage[songIndex].src = "pic/pause.jpg";
    } else {
      audio.pause();
      playImage[songIndex].src = "pic/play.jpg";
    }
  } else {
    if (currentSongIndex >= 0) {
      playImage[currentSongIndex].src = "pic/play.jpg";
    }
    currentSongIndex = songIndex;
    audio.src = songs[songIndex].file;
    audio.play();
    playImage[songIndex].src = "pic/pause.jpg";
  }
}

//TO PLAY NEXT SONG
function playNext() {
  playImage[currentSongIndex].src = "pic/play.jpg";
  currentSongIndex++;
  playImage[currentSongIndex].src = "pic/pause.jpg";
  if (currentSongIndex === songs.length) {
    currentSongIndex = 0;
  }
  audio.src = songs[currentSongIndex].file;
  audio.play();
}
// ..................ADD TO THE LIKED SONGS.........
let myIcon = document.getElementById("likes");
let isRed = false;
myIcon.addEventListener("click", function () {
  isRed = !isRed;
  if (isRed) {
    myIcon.style.color = "red";
    alert("Added to Liked Songs");
  } else {
    myIcon.style.color = "";
    alert("Removed from Liked Songs");
  }
});
// TO ADD ACTIVE CLASS IN NAVE BAR
var navItems = document.querySelectorAll(".nav-item");
// Add click event listener to each navigation item
navItems.forEach(function (item) {
  item.addEventListener("click", function () {
    // Remove active class from all navigation items
    navItems.forEach(function (navItem) {
      navItem.querySelector("a").classList.remove("active");
    });
    // Add active class to clicked navigation item
    this.querySelector("a").classList.add("active");
  });
});
