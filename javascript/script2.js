let stringa="";
let numero=0;
let somma=0;
do{
    numero=prompt("inserisci numero");
    stringa+=numero;
    somma+=+numero;
}while(numero!=0)
document.write(stringa);
document.write("somma="+somma);