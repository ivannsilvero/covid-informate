(() => {
    'use strict';

    document.querySelectorAll('.copy').forEach(telefono => {
        telefono.addEventListener('click', () => {
            const seleccion = window.getSelection();
            const rango = document.createRange();
            rango.selectNodeContents(telefono);
            seleccion.removeAllRanges();
            seleccion.addRange(rango);
            document.execCommand('copy');
            seleccion.removeAllRanges();
            const original = telefono.textContent;
            telefono.textContent = 'Copiado!';
            telefono.classList.add('exito');


            setTimeout(() => {
                telefono.textContent = original;
                telefono.classList.remove('exito');
            }, 1200);

        });
    });
})();