alert ("--Media--\n\nSaiba as suas notas aqui!\n");

console.log ("--Media--\n\nSaiba as suas notas aqui!\n");
let notas1 = parseInt (prompt  ("Digite sua primeira nota"));
console.log("1° Nota" + ": " + notas1);
let notas2 = parseInt (prompt ("Digite sua segunda nota"));
console.log("2° Nota" + ": " + notas2);
let notas3 =parseInt (prompt ("Digite sua terceira nota"));
console.log("3° Nota" + ": " + notas3);
let notas4 =parseInt (prompt ("Digite sua quarta nota"));
console.log("4° Nota" + ": " + notas4);

if  (notas1 < 0 || notas1 > 10 
    || notas2 < 0 || notas2 > 10 
    || notas3 < 0 || notas3 > 10
    || notas4 < 0 || notas4 > 10){ 
        alert ("Valor inválido Digite uma nota de 0 a 10");
    }
    else {

        let media = parseFloat ((notas1 + notas2 + notas3 + notas4)/4).toFixed(1);
        alert ("Resultados " + media);
        console.log ("Resultados " + media);

    }
if (media < 5)
{
     resultado = "Reprovado";
}

else if (media >6 ) {
    resultado = "Aprovado";
}

else 
{
    resultado = "Em recuperação";
}

alert ("Você ficou com média " (media:notas1) . resultado: "Resultado")
