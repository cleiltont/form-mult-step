// Bloco de etapas
var nomeDiv = document.querySelector('div#nome');
var contatoDiv = document.querySelector('div#contato');
var aniverDiv = document.querySelector('div#aniver');
var contaDiv = document.querySelector('div#submit');

// Botoes
var prox1 = document.querySelector('button[name=prox1]');
var prox2 = document.querySelector('button[name=prox2]');
var prox3 = document.querySelector('button[name=prox3]');
var ant1 = document.querySelector('button[name=ant1]');
var ant2 = document.querySelector('button[name=ant2]');
var ant3 = document.querySelector('button[name=ant3]');

// Etapas
var etp1 = document.getElementById('etp1');
var etp2 = document.getElementById('etp2');
var etp3 = document.getElementById('etp3');
var etp4 = document.getElementById('etp4');

// Inputs
var nome = document.querySelector('input[name=nome]');
var apelido = document.querySelector('input[name=apelido]');
var email = document.querySelector('input[name=email]');
var numero = document.querySelector('input[name=telefone]');
var data = document.querySelector('input[name=data]');
var genero = document.querySelector('select[name=genero]');
var user = document.querySelector('input[name=usuario]');
var pass = document.querySelector('input[name=senha]');

// Ira iniciar com a penas o 1º bloco
nomeDiv.style.display = 'block';
contatoDiv.style.display = 'none';
aniverDiv.style.display = 'none';
contaDiv.style.display = 'none';

// Cliques para proxima etapa
prox1.onclick = function(){
	try{
		if(nome.value.trim() !== "" && apelido.value.trim() !== ""){
			nomeDiv.style.display = 'none';
			contatoDiv.style.display = 'block';
			etp1.setAttribute('class', 'fas fa-check-circle');
			etp1.style.color = '#15c715';
		}else {throw "Ops!";}
	} catch(err){
		alert('Preencha todos os campos corretamente!');
	}
}
prox2.onclick = function(){
	try{
		if(email.value.trim() !== "" && numero.value.trim() !== ""){
			contatoDiv.style.display = 'none';
			aniverDiv.style.display = 'block';
			etp2.setAttribute('class', 'fas fa-check-circle');
			etp2.style.color = '#15c715';
		}else {throw "Ops!";}
	} catch(err){
		alert('Preencha todos os campos corretamente!');
	}
}
prox3.onclick = function(){
	try{
		if(data.value.trim() !== "" && genero.value.trim() !== ""){
			aniverDiv.style.display = 'none';
			contaDiv.style.display = 'block';
			etp3.setAttribute('class', 'fas fa-check-circle');
			etp3.style.color = '#15c715';
		}else {throw "Ops!";}
	} catch(err){
		alert('Preencha todos os campos corretamente!');
	}
}
// Cliques para volta a etapa
ant1.onclick = function(){
	nomeDiv.style.display = 'block';
	contatoDiv.style.display = 'none';
	etp1.style.color = '#0cb9c19c';
}
ant2.onclick = function(){
	contatoDiv.style.display = 'block';
	aniverDiv.style.display = 'none';
	etp2.style.color = '#0cb9c19c';
}
ant3.onclick = function(){
	aniverDiv.style.display = 'block';
	contaDiv.style.display = 'none';
	etp3.style.color = '#0cb9c19c';
}

// Valida cadastro
function validaForm(){
	try{
		if(user.value.trim() !== "" && pass.value.trim() !== ""){
			alert('Cadastrado com sucesso!');
		} else{ throw 'Invalido!';}
	} catch(err){
		console.log('Error!');
	}
}