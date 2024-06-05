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

document.addEventListener('DOMContentLoaded', function() {
    const albumCards = document.querySelectorAll('.album-card');
    
    albumCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            const playIcon = card.querySelector('.play-icon');
            playIcon.style.bottom = '50%';
            playIcon.style.opacity = '1';
        });
        
        card.addEventListener('mouseout', () => {
            const playIcon = card.querySelector('.play-icon');
            playIcon.style.bottom = '-50px';
            playIcon.style.opacity = '0';
        });
    });
});

// js/home-script.js
document.addEventListener('DOMContentLoaded', function () {
    const podcastLinks = document.getElementsByClassName('podcast-link');

    // Itera sobre a coleção de links de podcast
    for (let i = 0; i < podcastLinks.length; i++) {
        podcastLinks[i].addEventListener('click', function (event) {
            event.preventDefault(); // Previne o comportamento padrão do link
            console.log('Podcast link clicado:', this);
            // Aqui você pode adicionar a lógica que deseja ao clicar no link
        });
    }

    const expandButton = document.querySelector('.expand-button');
    const expandedPlayer = document.getElementById('expanded-player');
    const closeExpandedButton = document.getElementById('close-expanded');
    const iframeMusicPlayer = document.querySelector(".expanded-player-content");

    // Verifica se o botão de expandir existe antes de adicionar o evento
    if (expandButton) {
        expandButton.addEventListener('click', function () {
            if (expandedPlayer) {
                expandedPlayer.style.display = 'flex'; // Mostra o player expandido
            }
        });
    }

    // Verifica se o botão de fechar a tela expandida existe antes de adicionar o evento
    if (closeExpandedButton) {
        closeExpandedButton.addEventListener('click', function () {
            if (expandedPlayer) {
                expandedPlayer.style.display = 'none'; // Esconde o player expandido
            }
        });
    }
});



