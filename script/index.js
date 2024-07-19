document.addEventListener('DOMContentLoaded', function () {
    // Menú desplegable
    const headerBtn = document.querySelector('.Header-btn');
    const headerNav = document.querySelector('.Header-nav');

    if (headerBtn && headerNav) {
        headerBtn.addEventListener('click', function () {
            headerNav.classList.toggle('isActive');
            headerBtn.classList.toggle('isActive');
        });
    }

    // FILTRO DE TRABAJOS
    const trabajosFilterAll = document.querySelector('.Trabajos-filter--all');
    const trabajosFilterUxui = document.querySelector('.Trabajos-filter--uxui');
    const trabajosFilterGrafico = document.querySelector('.Trabajos-filter--grafico');
    const trabajosFilterThreeD = document.querySelector('.Trabajos-filter--threeD');
    const trabajoPreviews = document.querySelectorAll('.Trabajo-preview');

    if (trabajosFilterAll) {
        trabajosFilterAll.addEventListener('click', function() {
            trabajoPreviews.forEach(function (preview) {
                preview.classList.add('isActive');
                preview.classList.remove('isHidden');
            });
        });
    }

    if (trabajosFilterUxui) {
        trabajosFilterUxui.addEventListener('click', function() {
            trabajoPreviews.forEach(function (preview) {
                if (preview.classList.contains('Trabajo-uxui')) {
                    preview.classList.add('isActive');
                    preview.classList.remove('isHidden');
                } else {
                    preview.classList.add('isHidden');
                    preview.classList.remove('isActive');
                }
            });
        });
    }

    if (trabajosFilterGrafico) {
        trabajosFilterGrafico.addEventListener('click', function() {
            trabajoPreviews.forEach(function (preview) {
                if (preview.classList.contains('Trabajo-grafico')) {
                    preview.classList.add('isActive');
                    preview.classList.remove('isHidden');
                } else {
                    preview.classList.add('isHidden');
                    preview.classList.remove('isActive');
                }
            });
        });
    }

    if (trabajosFilterThreeD) {
        trabajosFilterThreeD.addEventListener('click', function() {
            trabajoPreviews.forEach(function (preview) {
                if (preview.classList.contains('Trabajo-threeD')) {
                    preview.classList.add('isActive');
                    preview.classList.remove('isHidden');
                } else {
                    preview.classList.add('isHidden');
                    preview.classList.remove('isActive');
                }
            });
        });
    }

    // SLIDER IMAGENES
    const sliderImages = document.querySelector('.TrabajoIndividual-sliderImages');
    const images = document.querySelectorAll('.TrabajoIndividual-sliderImages img');
    const btnPrev = document.querySelector('.btnPrev');
    const btnNext = document.querySelector('.btnNext');
   
    if (sliderImages && btnPrev && btnNext ) {
        let currentImageIndex = 0;
        const totalImages = images.length;


        btnNext.addEventListener('click', nextImage);
        btnPrev.addEventListener('click', prevImage);

        function nextImage() {
            currentImageIndex++;
            if (currentImageIndex >= totalImages) {
                currentImageIndex = 0;
            }
            actualizarSlider();
        }

        function prevImage() {
            currentImageIndex--;
            if (currentImageIndex < 0) {
                currentImageIndex = totalImages - 1;
            }
            actualizarSlider();
        }

        function actualizarSlider() {
            const width = 400;
            sliderImages.style.transform = `translateX(${-width * currentImageIndex}px)`;
        }

    }
});
