const nome= "manuel" //'manuel' va bene (costante)
let n1=1; // creo una variabile
if(n1==='1'){//controlla se è uguale a 3(carattere) (uguaglianza stretta)
    alert("non funziona")
}
else{
    //alert('funziona')
}

/*if(n1==1) // va bene n1=='1'
    alert('sium');
*/
/*let numero=prompt("inserisci un valore")
if(numero%2==0){
    alert("pari")
}else{
    alert("dispari")
}
*/
/*let numero=prompt("inserisci un valore");
let somma=0;
for(let i=0; i<=numero; i++){
    somma+=i;
    console.log(i)
}
//console.log(somma)
console.log("somma=",somma)
document.write(somma);
*/
//1-10
//11-20
let numero=10;

for(let i=0; i<numero; i++){
    document.write("|")
    for(let j=1; j<=numero; j++){
        let numero2=j+i*10;
        if(numero2==100){
            break;
        }
        if(numero2<10){
            document.write("&nbsp;"+numero2+"&nbsp;&nbsp;|"); 
        }else{
            document.write(numero2+"&nbsp;|");
        }
        
    }
    document.write('<br>');
}
