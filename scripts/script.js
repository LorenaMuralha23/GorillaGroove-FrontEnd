function togglePassword() {
    var passwordField = document.getElementById("password");
    var toggleText = document.querySelector(".toggle-password");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleText.textContent = "Hide";
    } else {
        passwordField.type = "password";
        toggleText.textContent = "Show";
    }
}

// JavaScript para o botão play/pause e simulação da barra de progresso
const playPauseBtn = document.getElementById('play-pause-btn');
const progressBar = document.getElementById('progress');
const currentTimeElem = document.getElementById('current-time');
const totalTimeElem = document.getElementById('total-time');

let isPlaying = false;
let currentTime = 0;
const totalTime = 225; // tempo total em segundos (3:45)

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
});

function playMusic() {
    isPlaying = true;
    playPauseBtn.innerHTML = '&#9208;';
    musicInterval = setInterval(updateProgress, 1000);
}

function pauseMusic() {
    isPlaying = false;
    playPauseBtn.innerHTML = '&#9654;';
    clearInterval(musicInterval);
}

function updateProgress() {
    if (currentTime < totalTime) {
        currentTime++;
        const progressPercentage = (currentTime / totalTime) * 100;
        progressBar.style.width = progressPercentage + '%';
        currentTimeElem.innerText = formatTime(currentTime);
    } else {
        clearInterval(musicInterval);
        isPlaying = false;
        playPauseBtn.innerHTML = '&#9654;';
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

