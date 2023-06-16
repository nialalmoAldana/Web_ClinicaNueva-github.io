const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .contenido-select');
const hiddenInput = document.querySelector('#inputSelect');

document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
        window.open(e.currentTarget.href, "_blank");
		contenidoSelect.innerHTML = e.currentTarget.innerHTML;
		select.classList.toggle('active');
		opciones.classList.toggle('active');
        select.classList.remove("activo");
		hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText;
	});
});

select.addEventListener('click', () => {
	select.classList.toggle('active');
	opciones.classList.toggle('active');
});

window.addEventListener('click', (e) => {
    if (!select.contains(e.target)) {
        select.classList.remove('active');
        opciones.classList.remove('active');
    }
});


const select1 = document.querySelector('#select1');
const opciones1 = document.querySelector('#opciones1');
const contenidoSelect1 = document.querySelector('#select1 .contenido-select1');
const hiddenInput1 = document.querySelector('#inputSelect1');

document.querySelectorAll('#opciones1 > .opcion1').forEach((opcion1) => {
	opcion1.addEventListener('click', (e) => {
		e.preventDefault();
        window.open(e.currentTarget.href, "_blank1");
		contenidoSelect1.innerHTML = e.currentTarget.innerHTML;
		select1.classList.toggle('active');
		opciones1.classList.toggle('active');
        select1.classList.remove("activo");
		hiddenInput.value = e.currentTarget.querySelector('.titulo1').innerText;
	});
});

select1.addEventListener('click', () => {
	select1.classList.toggle('active');
	opciones1.classList.toggle('active');
});

window.addEventListener('click', (e) => {
    if (!select1.contains(e.target)) {
        select1.classList.remove('active');
        opciones1.classList.remove('active');
    }
});