function definitiva (){
    let n1 = parseInt(document.getElementById("n1").value),
    n2 = parseInt(document.getElementById("n2").value),
    n3 = parseInt(document.getElementById("n3").value),
    n4 = parseInt(document.getElementById("n4").value),
    n5 = parseInt(document.getElementById("n5").value);

    console.log(n1,n2,n3,n4,n5);
    let def = (0.55*((n1+n2+n3)/3))+(0.3*n4)+(0.15*n5);
    let resultado = document.getElementById("resultado");
    resultado.value=def;
    return def;
}