let perguntas = [
"Você estava na sala?",
"Você viu alguém pegar o celular?",
"Você conhece o dono do celular?",
"Você estava presente na sala?",
"Você viu quem levou o celular?",
"Você sabe quem é o dono do celular?"
];
let respostas = [];
let atual = 0;
mostrarPergunta();
function mostrarPergunta() {
document.getElementById("pergunta").innerHTML = perguntas[atual];
document.getElementById("numero").innerHTML = "Pergunta " + (atual +
1);
}
function responder() {
let resposta = document.getElementById("resposta").value;
if (resposta == "") {
alert("Escolha uma resposta!");
return;
}
respostas[atual] = resposta;
atual++;
document.getElementById("resposta").value = "";
if (atual < perguntas.length) {
mostrarPergunta();
} else {
resultado();
}
}
function resultado() {
let pontos = 0;
if (respostas[0] != respostas[3]) pontos++;
if (respostas[1] != respostas[4]) pontos++;
if (respostas[2] != respostas[5]) pontos++;
let mensagem = "";
switch (pontos) {
case 0:
mensagem = "VERDADE! Respostas consistentes.";
break;
case 1:
mensagem = "SUSPEITO! Uma contradição.";
break;
default:
mensagem = "POSSÍVEL MENTIRA! Várias contradições.";
}
document.getElementById("pergunta").innerHTML = mensagem;
document.getElementById("numero").innerHTML = "Fim do interrogatório";
document.getElementById("resposta").style.display = "none";
document.querySelector("button").style.display = "none";
document.getElementById("reiniciar").style.display = "inline-block";
}
function reiniciarJogo() {
location.reload();
}