
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigada por clicar";

    //console.log(document.getElementById)
    //alert("Obrigada por clicar");
};

function redirecionar(){
    //window.open("https://web.digitalinnovation.one/");
    window.location.href = "https://web.digitalinnovation.one";

};

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "obrigada por passar o mouse";
    elemento.innerHTML = "obrigada por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "passe o mouse aqui"
    elemento.innerHTML = "passe o mouse aqui";

}

function funcaoChange(elemento){
    console.log(elemento)
}


/*function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else {
        validar = false
    }
    return validar;


var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
}*/
/*function soma(n1, n2){
    return n1 + n2;

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}*/

//alert(soma(5, 10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));

//var d = new Date();
//alert(d.getMinutes());


/*var count;
for(count = 0; count <= 5; count++){
    alert(count);
};*/

/*var count = 0;
while (count < 5){
    console.log(count);
    count++;
};*/




/*var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("maior de idade");
} else{
    alert("menor de idade");
};*/


/*var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);*/


//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);



//var nome = "Natalia Menezes";
//var idade = 22;
//var idade2 = 10;
//var frase = ""
//alert("Bem vindo " + nome)
//alert(nome + " tem " + idade + " anos")
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
