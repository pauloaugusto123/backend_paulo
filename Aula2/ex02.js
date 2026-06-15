const input = require('readline-sync');

function validarSenha(senha) {
    if (senha.length >= 8) {
        return true;
    } else {
        return false;
    }
}

let senha = input.question('Digite uma senha de no minimo 8 digitos: ');

if (validarSenha(senha)) {
    console.log('Senha valida');
} else {
    console.log('Senha fraca – minimo 8 caracteres');
}
