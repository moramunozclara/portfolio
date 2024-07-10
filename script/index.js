document.addEventListener('DOMContentLoaded', function () {
    // Menú desplegable
    const headerBtn = document.querySelector('.Header-btn');
    const headerNav = document.querySelector('.Header-nav');

    headerBtn.addEventListener('click', function () {
        headerNav.classList.toggle('isActive');
        headerNav.classList.toggle('isHidden');
    });

    // Gelería de proyectos con filtros
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