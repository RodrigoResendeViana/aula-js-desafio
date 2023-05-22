
let relogio = document.querySelector('#main')
let hora = new Date()
relogio.innerHTML = (hora.toLocaleString())

function validar(){
    let nome = document.getElementById("nome").value
    let telefone = document.getElementById("telefone").value
    let email = document.getElementById("email").value
        
        
    if(nome =="" || telefone =="" || email ==""){
        alert("PREENCHA TODOS OS CAMPOS")
        }else if(telefone.length != 11){
            alert('Insira seu número com 9 dígitos, mais o ddd do seu estado: xxxxxxxxx')
        }else if(email.indexOf('@') === -1 ) {
            alert('Digite um email válido')
        }else{
        alert('Entraremos em contato em breve!')    
        }
        
    }

    

var imagens =[
    'imagens/heroi1.png',
    'imagens/heroi2.png',
    'imagens/heroi3.png',
    'imagens/heroi4.png',
    'imagens/heroi5.png',
    'imagens/heroi6.png',
    'imagens/heroi7.png',
    'imagens/heroi8.png',
    'imagens/heroi9.png',
    'imagens/heroi10.png',
];
    
var index = 0;
var time = 2000;
    
function slideShow(){
    document.getElementById('imagens'). src= imagens[index];
    index++;
    if (index == imagens.length){index = 0}
        setTimeout("slideShow()", time);
}
    
slideShow();
