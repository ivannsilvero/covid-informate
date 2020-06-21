const si1 = document.querySelector('#si1'), no1 = document.querySelector('#no1'), si2 = document.querySelector('#si2'), no2 = document.querySelector('#no2'), si3 = document.querySelector('#si3'), no3 = document.querySelector('#no3'), si4 = document.querySelector('#si4'), no4 = document.querySelector('#no4'), si5 = document.querySelector('#si5'), no5 = document.querySelector('#no5');

si1.addEventListener('click', () => {
    if (no1.checked) no1.checked = false;
});
no1.addEventListener('click', () => {
    if (si1.checked) si1.checked = false;
});

si2.addEventListener('click', () => {
    if (no2.checked) no2.checked = false;
});
no2.addEventListener('click', () => {
    if (si2.checked) si2.checked = false;
});

si3.addEventListener('click', () => {
    if (no3.checked) no3.checked = false;
});
no3.addEventListener('click', () => {
    if (si3.checked) si3.checked = false;
});

si4.addEventListener('click', () => {
    if (no4.checked) no4.checked = false;
});
no4.addEventListener('click', () => {
    if (si4.checked) si4.checked = false;
});

si5.addEventListener('click', () => {
    if (no5.checked) no5.checked = false;
});
no5.addEventListener('click', () => {
    if (si5.checked) si5.checked = false;
});



