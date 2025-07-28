const formulario = document.querySelector('.container-form');
const campos = document.querySelectorAll('.informacao');
const mensagensErro = document.querySelectorAll('.obrigatorio');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // impede o recarregamento da página

    campos.forEach((campo, index) => {
        if (campo.value.trim() === '') {
            campo.classList.remove('borda-verde');
            campo.classList.add('borda-vermelha');
            mensagensErro[index].style.display = 'block';
        } else {
            campo.classList.remove('borda-vermelha');
            campo.classList.add('borda-verde');
            mensagensErro[index].style.display = 'none';
        }
    });
});