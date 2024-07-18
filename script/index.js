document.addEventListener('DOMContentLoaded', function () {
    // Menú desplegable
    const headerBtn = document.querySelector('.Header-btn');
    const headerNav = document.querySelector('.Header-nav');

    headerBtn.addEventListener('click', function () {
        headerNav.classList.toggle('isActive');
        headerBtn.classList.toggle('isActive');

        // headerNav.classList.toggle('isHidden');
    });

  


    // Galería de proyectos con filtros
    const trabajosFilterAll = document.querySelector('.Trabajos-filter--all');
    const trabajoPreviews = document.querySelectorAll('.Trabajo-preview');

    const trabajosFilterUxui = document.querySelector('.Trabajos-filter--uxui');
    const trabajosFilterGrafico = document.querySelector('.Trabajos-filter--grafico');
    const trabajosFilter3d = document.querySelector('.Trabajos-filter--3d');

    trabajosFilterAll.addEventListener('click', function () {
        trabajoPreviews.forEach(function (preview) {
            preview.classList.add('isActive');
            preview.classList.remove('isHidden');
        });
    });

    trabajosFilterUxui.addEventListener('click', function () {
        trabajoPreviews.forEach(function (preview) {
            if (preview.classList.contains('Trabajo-uxui')) {
                preview.classList.add('isActive');
                preview.classList.remove('isHidden');
            } else {
                preview.classList.remove('isActive');
                preview.classList.add('isHidden');
            }
        });
    });

    trabajosFilterGrafico.addEventListener('click', function () {
        trabajoPreviews.forEach(function (preview) {
            if (preview.classList.contains('Trabajo-grafico')) {
                preview.classList.add('isActive');
                preview.classList.remove('isHidden');
            } else {
                preview.classList.remove('isActive');
                preview.classList.add('isHidden');
            }
        });
    });

    trabajosFilter3d.addEventListener('click', function () {
        trabajoPreviews.forEach(function (preview) {
            if (preview.classList.contains('Trabajo-3d')) {
                preview.classList.add('isActive');
                preview.classList.remove('isHidden');
            } else {
                preview.classList.remove('isActive');
                preview.classList.add('isHidden');
            }
        });
    });



    // SLIDER IMAGENES
    // 1. Constantes y variables

    // Slider
    const sliderImages = document.querySelector('.TrabajoIndividual-sliderImages');
    const images = document.querySelectorAll('.TrabajoIndividual-sliderImages img');

    // Botones
    const btnPrev = document.querySelector('.btnPrev');
    const btnNext = document.querySelector('.btnNext');

    // Contador
    const spanActual = document.getElementById('txtActual');
    const spanTotal = document.getElementById('txtTotal');

    let currentImageIndex = 0;
    const totalImages = images.length;

    // Actualiza el contador total de imágenes
    spanTotal.textContent = totalImages;

    // Event listeners
    btnNext.addEventListener('click', nextImage);
    btnPrev.addEventListener('click', prevImage);

    // Funciones
    function nextImage() {
        currentImageIndex++;
        if (currentImageIndex >= totalImages) {
            currentImageIndex = 0;
        }
        actualizarSlider();
        actualizarContador();
    }

    function prevImage() {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = totalImages - 1;
        }
        actualizarSlider();
        actualizarContador();
    }

    function actualizarSlider() {
        const width = 400; // Establece el ancho del slider a 400px
        sliderImages.style.transform = `translateX(${-width * currentImageIndex}px)`;
    }

    function actualizarContador() {
        spanActual.textContent = currentImageIndex + 1;
    }

    // Iniciar el contador
    actualizarContador();

    // Crear intervalos
    let intervalos;

    function agregarIntervalo() {
        intervalos = setInterval(nextImage, 3000);
    }

    agregarIntervalo();

    sliderImages.addEventListener("mouseover", () => {
        clearInterval(intervalos);
    });

    sliderImages.addEventListener("mouseout", () => {
        agregarIntervalo();
    });
});








    



// document.addEventListener('DOMContentLoaded', function () {
//     const headerBtn = document.querySelector('.Header-btn');
//     const headerNav = document.querySelector('.Header-nav');
//     const header = document.querySelector('.Header');

//     headerBtn.addEventListener('click', function () {
//         headerNav.classList.toggle('isActive');
//         headerNav.classList.toggle('isHidden');

//         // Verifica si el menú está oculto
//         if (headerNav.classList.contains('isHidden')) {
//             // Si está oculto, establece la altura del header a auto
//             header.style.height = 'auto';
//         } else {
//             // Si no está oculto, deja la altura del header al 100%
//             header.style.height = '100%';
//         }
//     });
// });