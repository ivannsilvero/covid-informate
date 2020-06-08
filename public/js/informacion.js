(() => {
    'use strict';

    const acc = document.getElementsByClassName('accordion');

    const despliegue = function() {
        const panel = this.nextElementSibling;
        (panel.style.display === 'block') ? panel.style.display = 'none': panel.style.display = 'block';
    };

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', despliegue);
    }

    const disparar = (e) => {
        Swal.fire({
            title: 'Coronavirus: Todo lo que tenés que saber',
            showClass: {
                popup: 'animate__animated animate__fadeInDown animate__faster'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp animate__faster'
            },
            html: `
                <iframe width="100%"
                height="315"
                src="https://www.youtube.com/embed/AQH-dWsgHwY" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media;
                gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            `
        });
    };

    document.querySelector('#fire').addEventListener('click', disparar);

})();