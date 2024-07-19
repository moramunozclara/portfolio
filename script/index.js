document.addEventListener('DOMContentLoaded', function () {
    
    // MENÚ DESPLEGABLE
    /* Constantes del MENÚ desplegable, que llaman a las clases
    que añadimos en nuestro html*/
    const headerBtn = document.querySelector('.Header-btn');
    const headerNav = document.querySelector('.Header-nav');

    /*  Comprobaciones (&&) para ejecutar las acciones de abrir y cerrar
     el menú si encuentra las constantes que hemos definido antes */
    if (headerBtn && headerNav) {
        headerBtn.addEventListener('click', function () {
            headerNav.classList.toggle('isActive');
            headerBtn.classList.toggle('isActive');
        });
    }

   /*  Constantes del FILTRO DE tipos de TRABAJOS */
    const trabajosFilterAll = document.querySelector('.Trabajos-filter--all');
    const trabajosFilterUxui = document.querySelector('.Trabajos-filter--uxui');
    const trabajosFilterGrafico = document.querySelector('.Trabajos-filter--grafico');
    const trabajosFilterThreeD = document.querySelector('.Trabajos-filter--threeD');
    const trabajoPreviews = document.querySelectorAll('.Trabajo-preview');

   /* Comprobación para ejecutar la acción de mostrar 
    TODOS los elementos del grid si encuentra
    la constante previamente definida. Al hacer click
    se añade la clase que sí tiene visibilidad    
    */
    if (trabajosFilterAll) {
        trabajosFilterAll.addEventListener('click', function() {
            trabajoPreviews.forEach(function (preview) {
                preview.classList.add('isActive');
                preview.classList.remove('isHidden');
            });
        });
    }

   /* Comprobación para ejecutar la acción de mostrar 
    SOLO UX/UI de los elementos del grid, si encuentra
    la constante del filtro de UX/UI (previamente definida). Al hacer click
    se añade la clase que sí tiene visibilidad    
    */
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

   /* Comprobación para ejecutar la acción de mostrar 
    SOLO LOS TRABAJOS DE DISEÑO GRÁFICO del grid, si encuentra
    la constante del filtro de GRÁFICO (previamente definida). Al hacer click
    se añade la clase que sí tiene visibilidad    
    */
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

    /* Comprobación para ejecutar la acción de mostrar 
    SOLO LOS TRABAJOS DE 3D del grid, si encuentra
    la constante del filtro de 3D (previamente definida). Al hacer click
    se añade la clase que sí tiene visibilidad    
    */
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
    /* Constantes del CARRUSEL O SLIDER DE IMÁGENES
    de la muestra de TRABAJO INDIVIDUAL*/
    const sliderImages = document.querySelector('.TrabajoIndividual-sliderImages');
    const images = document.querySelectorAll('.TrabajoIndividual-sliderImages img');
    const btnPrev = document.querySelector('.btnPrev');
    const btnNext = document.querySelector('.btnNext');
   
    /* Comprobación previa, que si encuentra el slider
    y los botones de control que van a ejecutar las acciones
    y llevar a cabo los eventos, tomará la primera imagen
    como la actual y de la cual parte el slider,
    y toma el total de imagenes contenidas como el número
    máximo de imágenes o veces que se puede hacer click a siguiente
    hasta quee vuelva al inicio    
    */
    if (sliderImages && btnPrev && btnNext ) {
        let currentImageIndex = 0;
        const totalImages = images.length;

        /* Al hacer click en botón siguiente, llevame a la siguiente imagen
        Ídem con el botón de imagen anterior
        */
        btnNext.addEventListener('click', nextImage);
        btnPrev.addEventListener('click', prevImage);

        /* Función de incremento de 1 al hacer click en siguiente 
        y actualización que renderiza en pantalla el cambio de imagen
        */
        function nextImage() {
            currentImageIndex++;
            if (currentImageIndex >= totalImages) {
                currentImageIndex = 0;
            }
            actualizarSlider();
        }

        /* Función de decremento de 1 al hacer click en anterior
        y actualización que renderiza en pantalla el cambio de imagen
        */
        function prevImage() {
            currentImageIndex--;
            if (currentImageIndex < 0) {
                currentImageIndex = totalImages - 1;
            }
            actualizarSlider();
        }

        function actualizarSlider() {
            const width = 400; /* ancho que he fijado para mi imagen */
            sliderImages.style.transform = `translateX(${-width * currentImageIndex}px)`;
            /* mediante TRANSFORM, trasladamos en el eje horizontal
            las imágenes cada vez que damos a siguiente o a anterior */

        }

    }
});
