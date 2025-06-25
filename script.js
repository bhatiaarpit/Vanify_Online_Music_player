

//// Initialize Initialize Variables Variables
let songIndex
let songIndex = 0; = 0;
let audio
let audioElement = new Audio('Element = new Audio('songssongs/1.mp/1.mp3');
3');
let masterlet masterPlay = documentPlay = document.getElementBy.getElementById('masterId('Play');
masterletPlay');
let myProgressBar = document.get myProgressBar = document.getElementById('myProgressElementById('myProgressBar');
let gifBar');
let gif = document.getElementById = document.getElementById('gif');
let('gif');
let masterSong masterSongName = document.getElementByName = document.getElementById('masterSongNameId('masterSongName');
let masterArtist');
let masterArtistName = document.getElementByName = document.getElementById('masterId('masterArtistArtistName');
let bannerName');
let bannerImageImage = document.getElementById = document.getElementById('bannerImage');
let banner('bannerImage');
let bannerSongName = document.getElementSongName = document.getElementById('bannerById('bannerSongName');
let bannerSongName');
let bannerArtistName = document.getElementArtistName = document.getElementById('bannerArtistById('bannerArtistName');
let volumeName');
let volumeSliderSlider = document.getElement = document.getElementByIdById('volumeSlider');
let current('volumeSlider');
let currentTimeDisplayTimeDisplay = document.getElementById = document.getElementById('currentTime');
let total('currentTime');
let totalTimeDisplay =TimeDisplay = document.getElement document.getElementById('totalTime');
ById('totalTime');
let shuffleButtonlet shuffleButton = document.getElementBy = document.getElementByIdId('shuffle');
let repeat('shuffle');
let repeatButton = document.getElementByButton = document.getElementById('repeat');
let toastId('repeat');
let toast = document.getElementById = document.getElementById('toast');
('toast');
let toastlet toastMessage = document.getElementById('toastMessageMessage = document.getElementById('toast');
let loadingSpinner =Message');
 documentlet loadingSpinner.getElementBy = document.getId('loadingElementById('loadingSpinner');
let searchSpinner');
Inputlet searchInput = document.get = document.getElementByIdElementById('('searchInputsearchInput');');
let mobile
let mobileMenuToggleMenuToggle = document.getElementById = document.getElementById('mobileMenu('mobileMenuToggleToggle');
let navbar = document');
let navbar = document.getElementById('navbar');
let songItems.getElementById('navbar');
let songItems = Array = Array.from(document.getElementsByClass.from(document.getElementsByClassName('songName('songItem'));
Item'));


let songs = [
   let songs = [
    { { songName: " songName: "Jannat Ve - DarJannat Ve - Darshan Raval", artistshan Raval", artist:: "Dar "Darshan Ravalshan Raval", file", filePath: "Path: "songs/1songs/1.mp3", coverPath: "covers/1.jpg" },
    {.mp3", coverPath: "covers/1.jpg" },
    songName: "Ba { songNameawla -: "Baawla - Badshah", artist Badshah: "Bad", artist:shah", "Badsh filePath:ah", file "songs/Path: "2.mp3", coverPath: "covers/2.jpgsongs/2" },
    { songName: "Kabhii Tumh.mp3",he - Sh coverPath:ershah", artist: "Shers "covers/2.jpg" },
    { songName: "Kabhii Tumhhe - Shershah", artist: "Shershah", filehah", filePath: "Path: "songs/3songs/3.mp.mp3",3", coverPath: "covers coverPath: "covers//3.jpg" },
    {3.jpg" },
    { songName: songName: "Sakh "Sakhiyan 2iyan 2.0 - Bell Bottom.0 - Bell Bottom", artist", artist: "Bell Bottom: "Bell Bottom", file", filePath: "songs/4Path: "songs/4.mp3",.mp3", coverPath: "covers coverPath: "covers//4.jpg"4.jpg" },
    },
    { songName: { songName "Bairiyaa - Ra: "Bairiyaa - Raamaya Vastamaya Vastavaiya", artist:avaiya", artist: "Raamaya Vastav "Raamaya Vastavaiya", filePath:aiya", filePath: "songs/5.mp "songs/5.mp3", cover3", coverPath: "covers/5Path: "covers/5.jpg" },
.jpg" },    { song
    { songName: "Name: "KinKinna Sonana Sona - Marja - Marjaavaanavaan", artist:", artist: "Mar "Marjaavaanjaavaan", filePath: "songs", filePath: "songs/6.mp/6.mp3", cover3", coverPath: "coversPath: "covers/6.jpg/6.jpg" },
   " },
    { songName: " {Bad songName: "Bad Munda - J Munda - Jass Manak", artist:ass Manak", artist: "Jass Manak", "Jass Manak", filePath: "songs/ filePath: "songs/7.mp7.mp33", cover", coverPath: "Path: "covers/7covers/7.jpg.jpg" },
" },
    {    { songName songName: "M: "Mere Sohneyere Sohneya - Kaba - Kabir Singh",ir Singh", artist: "Kab artist: "Kabir Singh", fileir Singh", filePath: "songs/8Path: "songs/8.mp3",.mp3", cover coverPath: "covers/8Path: "covers/8.jpg" },
.jpg"    { },
 song    { songName: "KName: "Kandhe Kaandhe Ka Woh Til Woh Til - Song - Song", artist: "Various", artist: "Various Artists", filePath: Artists", filePath: " "songs/9.mp3songs/9.mp3",", cover coverPath: "covers/Path: "covers/99.jpg" },
];

let is.jpg" },
];

let isShShuffling = false;uffling = false;
let is
let isReRepeating = false;

// Populatepeating = false;

// Populate Song List Song List

songItems.forsongItems.forEach((elementEach((element, i) =>, i) => {
    element.getElements {
    element.getElementsByTagName("ByTagName("img")[0].srcimg")[0].src = songs = songs[i].cover[i].coverPath;
    elementPath;
    element.getElements.getElementsByClassName("ByClassNamesongName("songName")[0].inner")[0].innerText = songsText = songs[i].[i].songName;songName;
    element.get
    element.getElementsByClassElementsByClassName("artistName("artistName")[0].innerName")[0].innerText = songsText = songs[i].artist[i].artist;
;
});

// Update UI for});

// Update UI for Current Current Song
const Song
const updateSongUI updateSongUI = () => {
    master = () => {
    masterSongName.innerTextSongName.innerText = songs[s = songs[songIndex].songName;
ongIndex].songName;
    masterArtistName.innerText    masterArtistName.innerText = songs[s = songs[songIndexongIndex].artist;
].artist;
    bannerImage    bannerImage.src = songs.src = songs[songIndex].cover[songIndex].coverPath;
    bannerSongNamePath;
    bannerSongName.innerText = songs.innerText = songs[songIndex[songIndex].songName;
    banner].songName;
    bannerArtistNameArtistName.innerText.innerText = songs[songIndex = songs[songIndex].].artist;artist;

    gif    gif.style.opacity = audio.style.opacity = audioElement.paused ? 0Element.paused : 1;
    show ? 0 : 1;
Toast(`    showToast(`Now playingNow playing: ${songs: ${songs[songIndex[songIndex].songName].songName}`);
}`);
};};

//

 Show Toast Notification// Show Toast Notification

constconst showToast showToast = (message) => {
    toast = (message) => {
    toastMessage.innerTextMessage.innerText = message = message;
    toast;
    toast.style.style.display = 'block';
   .display = 'block';
    setTimeout(() setTimeout(() => {
        => {
        toast.style.display toast.style.display = 'none';
    }, = 'none';
    }, 3000);
};

// 3000);
};

// Format Format Time ( Time (mm:ssmm:ss)
const formatTime)
const formatTime = ( = (seconds) =>seconds) => {
    {
    const minutes = Math const minutes = Math.floor(seconds / 60.floor(seconds / 60);
);
    const secs =    const secs = Math.floor(seconds % 60 Math.floor(seconds % 60);
    return `${minutes}:${);
    return `${minutes}:${secs < secs < 10 ? '0' :10 ? '0' : ''}${secs}`;
};

// ''}${secs}`;
};

// Play Play Song Song
const playSong = ()
const playSong = () => {
    audio => {
    audioElement.src = songsElement.src = songs[songIndex].filePath[songIndex].filePath;
    audio;
    audioElement.currentTimeElement.currentTime = 0 = 0;
    audioElement.play();
;
    audioElement.play();
    masterPlay.classList    masterPlay.remove.classList.remove('fa-play-circle');
   ('fa-play-circle');
    masterPlay.classList.add(' masterPlay.classList.add('fa-pause-circle');
   fa-pause-circle');
    gif gif.style.opacity = 1.style.opacity = 1;
    updateSongUI;
    updateSongUI();
};

// Handle Play();
};

// Handle Play/Pause
masterPlay.add/Pause
masterPlay.addEventListener('click', ()EventListener('click', () => {
    if (audio => {
    if (audioElement.pausedElement.paused || audioElement || audioElement.currentTime <= 0).currentTime <= 0) {
        audioElement.play();
 {
        audioElement.play();
        masterPlay        masterPlay.classList.remove.classList.remove('fa-play-circle');
('fa-play       -circle');
        masterPlay.classList.add(' masterPlay.classList.add('fa-pause-circle');
       fa-pause-circle');
        gif.style.opacity = 1 gif.style.opacity = 1;
   ;
    } else {
        } else {
        audioElement.pause audioElement.pause();
();
        masterPlay.classList.remove        masterPlay.classList.remove('fa-p('fa-pause-circle');
        masterPlay.classListause-circle');
        masterPlay.classList.add('fa.add('fa-play-circle');
-play-circle');
        gif.style        gif.style.opacity =.opacity = 0;
    }
});

// Update 0;
    }
});

// Update Progress Bar and Time Progress Bar and Time
audio
audioElement.addEventListener('timeElement.addEventListener('timeupdate', () => {
update',    () => {
    const progress = (audio const progress = (audioElement.currentTime /Element.currentTime / audioElement audioElement.duration) *.duration) * 100;
 100;
       myProgress myProgressBarBar.value.value = is = isNaNaNN(progress)(progress) ? 0 ? 0 : progress : progress;
    currentTimeDisplay.innerText = formatTime(audioElement.currentTime);
    totalTime;
    currentTimeDisplay.innerText = formatTime(audioElement.currentTime);
    totalTimeDisplay.innerText = formatDisplay.innerText = formatTime(audioElement.duration) ||Time(audioElement.duration) || ' '0:0:00';00';

});

// Seek Song
myProgressBar.addEventListener('});

// Seek Song
myProgressBar.addEventListener('input', ()input', () => {
    audioElement.current => {
    audioElement.currentTime = (Time = (myProgressBar.value * audiomyProgressBar.value * audioElement.duration) /Element.duration) / 100 100;
});;
});



// Make// Make All Play Icons All Play Icons

constconst makeAllPlays = () makeAllPlays = () => { => {
   
    Array Array.from.from(document.get(document.getElementsByClassName('ElementsByClassName('songItemPlay')).forEachsongItemPlay')).forEach((element) => {
       ((element) => {
        element.classList.remove('fa element.classList.remove('fa-pause-circle');
        element-pause-circle');
        element.classList.add.classList.add('fa-play('fa-play-circle');
-circle');
    });    });

};

// Handle Song};

// Handle Song Item Play
 Item Play
ArrayArray.from(document.from(document.getElementsByClass.getElementsByClassName('songItemPlay')).Name('songItemPlay')).forEach((element) =>forEach((element) => {
    element.addEventListener {
    element.addEventListener('click', (e)('click', (e) => {
        make => {
        makeAllPlAllPlays();
        songays();
        songIndex = parseInt(e.targetIndex = parseInt(e.target.id);
        e.target.id);
        e.target.class.classList.removeList.remove('fa-play-circle');
       ('fa-play-circle');
        e.target.class e.target.classList.add('List.add('fa-pause-circle');
       fa-pause-circle');
        playSong(); playSong();
    });
});

//
    });
});

// Next Next Song
document Song
document.getElementById('next.getElementById('next').addEventListener('click').addEventListener('click', () => {
    if', () => {
    if (isShuffling) {
 (isShuffling) {
        songIndex = Math.floor(Math.random()        songIndex = Math.floor * songs(Math.random() * songs.length);
    } else.length);
    } else {
        song {
        songIndex = songIndexIndex = songIndex >= songs.length - >= songs.length - 1 ? 0 : song 1 ? 0 : songIndex + 1;
   Index + 1;
    }
    make }
    makeAllPlays();
    documentAllPlays();
    document.getElementById(song.getElementById(songIndex).classIndex).classListList.add('fa.add('fa-pause-circle-pause-circle');
    playSong();
');
    playSong();
});

// Previous Song
document});

// Previous Song
document.getElementBy.getElementById('previousId('previous').addEvent').addEventListener('clickListener('click', () =>', () => {
    song {
    songIndex = songIndex = songIndex <=Index <= 0 ? 0 0 ? 0 : songIndex - : songIndex - 1;
    makeAll 1;
    makeAllPlays();Plays();
    document
    document.getElementBy.getElementById(songIndexId(songIndex).classList).classList.add.add('fa-p('fa-pause-circleause-circle');
   ');
    playSong();
});
 playSong();

// Shuffle Toggle
shuffleButton});

//.addEventListener('click Shuffle Toggle
shuffleButton.addEventListener('click', () =>', () => {
    is {
   Shuffling = isShuffling = !isShuffling;
    shuffle !isShuffling;
    shuffleButton.style.color = isButton.style.color = isShuffling ? '#00Shuffling ? '#00ddeb'ddeb' : '#fff : '#fff';
   ';
    showToast(is showToast(isShuffling ? 'ShuffleShuffling ? 'Shuffle enabled enabled' : 'Shuffle' : 'Shuffle disabled');
});

// Repeat disabled');
});

// Repeat Toggle
repeat Toggle
repeatButton.addEventListenerButton.addEvent('click', () => {Listener('click
    is', () => {
    isRepeating =Repeating = !isRepeating;
    audio !isRepeating;
    audioElement.loop = isReElement.loop = isRepeating;
    repeatpeating;
    repeatButton.style.colorButton.style.color = isRe = isRepeating ? '#peating ? '#00ddeb00ddeb' : '#' : '#fff';
    showToast(isfff';
    showToast(isRepeating ?Repeating ? 'Repeat 'Repeat enabled' : enabled' : 'Repeat 'Repeat disabled');
});

// Volume Control disabled');
});

// Volume Control
volume
volumeSliderSlider.addEventListener.addEventListener('input', () => {
    audioElement('input', () => {
    audioElement.volume = volume.volume = volumeSlider.value / 100;
Slider.value / 100;
});

// Handle Song});

// Handle Song End
audioElement End
audioElement.addEvent.addEventListener('Listener('endedended',', () => {
 () => {
    if    if (! (!isisRepeating) {
        documentRepeating) {
        document.getElementById('next.getElementById('next').click();
   ').click();
    }
});

// Loading }
});

// Loading Spinner
audio Spinner
audioElement.addEventElement.addEventListener('waitingListener('waiting', () => {
    loading', () => {
    loadingSpinner.style.display =Spinner.style.display = 'flex';
});
 'flex';
});
audioElement.addaudioElement.addEventListener('canplay', () => {
EventListener('canplay', () => {
    loadingSpinner.style.display = 'none';
});

// Error Handling    loadingSpinner.style.display = 'none';
});

// Error Handling
audio
audioElement.addEventElement.addEventListener('errorListener('error', () =>', () => {
    show {
   Toast('Error loading song');
 showToast('Error loading song');
    loading    loadingSpinner.style.displaySpinner.style.display = 'none';
});

// Search = 'none';
});

// Search Functionality
searchInput.addEvent Functionality
searchInput.addListener('input', () =>EventListener('input', () => {
    {
    const query = const query = searchInput.value.toLowerCase();
    songItems searchInput.value.toLowerCase.forEach((item();
   , i) songItems.for => {
        const songName = songs[i].songEach((item, i) => {
        const songName = songs[i].songName.toLowerName.toLowerCase();
Case();
        const artist =        const artist songs[i]. = songs[iartist.toLowerCase();
        item.style].artist.toLowerCase();
        item.style.display = songName.includes(query.display = songName.includes(query) || artist) || artist.includes(query).includes(query) ? 'flex ? 'flex' : '' : 'none';
none';
    });
});
    });

// Mobile});

// Mobile Menu Toggle Menu Toggle
mobile
mobileMenuToggleMenuToggle.addEventListener.addEventListener('click',('click', () => { () => {
    navbar
    navbar.classList.toggle.classList.toggle('active');
('active');
    mobileMenuToggle    mobileMenuToggle.classList.toggle('.classList.toggle('activeactive');
});');
});

// Initial

// Initial Setup
 Setup
audioaudioElement.volumeElement.volume = 0. = 0.5; // Set5; // Set default default volume to 50%
update volume to 50%
updateSongUISongUI();