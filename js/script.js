// Botón ver más en sección podcast
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

// Botón ver más en sección pdfs
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

document.addEventListener('DOMContentLoaded', function() {
    // Cargar podcasts
    fetch('data/podcasts.json')
        .then(response => response.json())
        .then(data => {
            const visibleContainer = document.getElementById('no-hidden-pods');
            const hiddenContainer = document.getElementById('hidden-pods');
            
            data.podcasts.forEach(podcast => {
                const podcastHTML = `
                    <div class="col-md-3">
                        <div class="card podcast-card mb-4">
                            <a href="#" class="play-audio" data-audio-src="${podcast.audio}">
                                <img src="${podcast.cover}" class="card-img-top" alt="Podcast">
                            </a>
                            <div class="card-body text-center">
                                <h6 class="card-title text-primary text-black">${podcast.title}</h6>
                            </div>                          
                        </div>
                    </div>
                `;
                
                if (podcast.visible) {
                    visibleContainer.innerHTML += podcastHTML;
                } else {
                    hiddenContainer.innerHTML += podcastHTML;
                }
            });
            
            // Configurar eventos para los botones de audio
            setupAudioPlayers();
            setupShowMoreButtons();
        });
    
    // Cargar revistas
    fetch('data/revistas.json')
        .then(response => response.json())
        .then(data => {
            const visibleContainer = document.getElementById('no-hidden-pdfs');
            const hiddenContainer = document.getElementById('hidden-pdfs');
            
            data.revistas.forEach(revista => {
                const revistaHTML = `
                    <div class="col-md-2 mb-4">
                        <div class="card border-danger">
                            <a href="${revista.file}" download class="btn btn-primary">
                                <img src="${revista.cover}" class="card-img-top" alt="Portada de la revista">
                            </a>
                            <div class="card-body text-center">
                                <h6 class="card-title text-danger">${revista.title}</h6>        
                            </div>
                        </div>
                    </div>
                `;
                
                if (revista.visible) {
                    visibleContainer.innerHTML += revistaHTML;
                } else {
                    hiddenContainer.innerHTML += revistaHTML;
                }
            });
        });

    // Función para configurar los botones "Ver más"
    function setupShowMoreButtons() {
        document.getElementById('show-more-btn-podcast').addEventListener('click', function() {
            const hiddenPods = document.getElementById('hidden-pods');
            if (hiddenPods.style.display === 'none') {
                hiddenPods.style.display = 'flex';
                this.textContent = 'Ver menos...';
            } else {
                hiddenPods.style.display = 'none';
                this.textContent = 'Ver más...';
            }
        });
        document.getElementById('show-more-btn').addEventListener('click', function() {
            const hiddenPdfs = document.getElementById('hidden-pdfs');
            if (hiddenPdfs.style.display === 'none') {
                hiddenPdfs.style.display = 'flex';
                this.textContent = 'Ver menos...';
            } else {
                hiddenPdfs.style.display = 'none';
                this.textContent = 'Ver más...';
            }
        });
    }
    
    // Función para configurar los reproductores de audio
    function setupAudioPlayers() {
        const playButtons = document.querySelectorAll('.play-audio');
        const audioPlayer = document.getElementById('audio-player');
        const audioContainer = document.getElementById('audio-player-container');
        
        playButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const audioSrc = this.getAttribute('data-audio-src');
                audioPlayer.src = audioSrc;
                audioContainer.style.display = 'block';
                audioPlayer.play();
            });
        });
    }

    // Configurar inicialmente los botones y reproductores
    setupShowMoreButtons();
    setupAudioPlayers();

    // Actualizar año automáticamente en el footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});