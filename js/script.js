document.getElementById('show-more-btn-podcast').addEventListener('click', function() {
    var hiddenPods = document.getElementById('hidden-pods');
    
    // Verificar si los Podcast ocultos están visibles o no
    if (hiddenPods.style.display === 'none' || hiddenPods.style.display === '') {
        // Hacer visible el contenedor de Podcasts ocultos
        hiddenPods.style.display = 'flex';
        // Cambiar el texto del botón a "Ver menos..."
        this.innerText = 'Ver menos...';
    } else {
        // Ocultar el contenedor de Podcast ocultos
        hiddenPods.style.display = 'none';
        // Cambiar el texto del botón a "Ver más..."
        this.innerText = 'Ver más...';
    }
});

document.getElementById('show-more-btn').addEventListener('click', function() {
    var hiddenPdfs = document.getElementById('hidden-pdfs');
    
    // Verificar si los PDFs ocultos están visibles o no
    if (hiddenPdfs.style.display === 'none' || hiddenPdfs.style.display === '') {
        // Hacer visible el contenedor de PDFs ocultos
        hiddenPdfs.style.display = 'flex';
        // Cambiar el texto del botón a "Ver menos..."
        this.innerText = 'Ver menos...';
    } else {
        // Ocultar el contenedor de PDFs ocultos
        hiddenPdfs.style.display = 'none';
        // Cambiar el texto del botón a "Ver más..."
        this.innerText = 'Ver más...';
    }
});

// Espera a que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene todos los enlaces que activan el reproductor de audio
    const audioLinks = document.querySelectorAll('.play-audio');

    // Obtén el contenedor y el reproductor de audio
    const audioPlayerContainer = document.getElementById('audio-player-container');
    const audioPlayer = document.getElementById('audio-player');

    // Itera sobre cada enlace para agregar el evento de clic
    audioLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Previene el comportamiento por defecto del enlace

            // Obtiene la fuente del archivo de audio desde el atributo data-audio-src
            const audioSrc = link.getAttribute('data-audio-src');

            // Muestra el reproductor y actualiza la fuente del audio
            audioPlayerContainer.style.display = 'block';
            audioPlayer.src = audioSrc;

            // Reproduce el audio automáticamente
            audioPlayer.play();
        });
    });
});