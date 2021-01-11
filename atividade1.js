let notas = [5, 8, 7, 3 ], n = notas.length, media = 0
for(i = 0; i < notas.length; i++){
    a = notas[i]/n
    media = a + media
}
console.log(media)
if(media >= 5){
    console.log("Aprovado")
}else{
    console.log("Reprovado")
}