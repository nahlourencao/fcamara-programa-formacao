/*
   Exemplo 1
*/
var fcamara = 'fcamara';
console.log(fcamara);

/*
   Exemplo 2
*/
var a = 5,
    b = 1;

function soma() {
    return a + b;
}


/*
   Validação simples de formulário
*/
var form = document.getElementById('form');
var feedback = document.querySelector('.feedback');

function validarForm() {
    if (document.getElementById('nome').value == "") {
        alert("Preencha o campo nome.");
    }
    else {
        form.style.display = 'none';
        feedback.style.display = 'block'
    }
}
