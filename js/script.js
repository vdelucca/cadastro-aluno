/*let nome = "Ana"; // string tem que acompanhar aspas ""
let idade = 17; // número não precisa de aspas ""
console.log(nome);
console.log(idade);

{  // tudo que está entre chaves {} é um bloco de código.
let nome = "Delucca";
let idade= 16;

console.log(nome);
console.log(idade);
}


console.log(nome)

let curso = "";
console.log(curso);*/

function cadastrar(){
    let nome = document.getElementById("nome").value; // value atribui o valor do id para a variavel

    let idade = document.getElementById("idade").value;

    let curso = document.getElementById("curso").value;

    if (nome == ""|| idade == ""|| curso == "") (
        alert("cadastro inválido")
    )

    else{
        alert("Cadastro realizado com sucesso!")
    document.getElementById("resultado").innerHTML = "Nome do(a) aluno(a) é " + nome + "<br> idade:" + idade + " anos."
    + "<br> curso:" + curso;

    document.querySelector(".descricao").textContent =
    "informações do aluno";

    //display = none  - serve para ocultar um elemento HTML
    document.getElementById("nome").style.display = "none";
    document.getElementById("idade").style.display = "none";
    document.getElementById("curso").style.display = "none";
    document.getElementById("cadastrar").style.display = "none";
    document.getElementById("resultado").style.display = "block";
    document.getElementById("novoAluno").style.display = "block";

    // display = block: Serve para exibir um elemento HTML
    
    }
}

function novoAluno(){
    document.getElementById("nome").style.display = "block";
    document.getElementById("idade").style.display = "block";
    document.getElementById("curso").style.display = "block";
    document.getElementById("cadastrar").style.display = "block";
    document.getElementById("resultado").style.display = "none";
    document.getElementById("novoAluno").style.display = "none";

    document.querySelector(".descricao").textContent =
    "Preencha os dados abaixo";

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("curso").value = "";


}
/* || = ou
alerte = é usado para dar um aviso ao usuário
 em uma caixa no navegdor.

 if (se) = caso seja verdadeiro a condição.
 else (senão) = caso seja falso ancondição.

 = sinal de atribuição de valor

 == sinal de comparação entre
 dois elementos ou valores.

 + concatenar (juntar informações).

 */