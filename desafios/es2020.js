/*------------------UNO-----------------------
const numeros =[1,2,3,4,5,6,7,8,9,10,11,12,13];

function nParCuadradoMay10(s){
    const cuadrados = s.map(n => (n*n));
    const paresMayores = (cuadrados.filter(n => n % 2==0 && n > 10 ));
    return paresMayores;
}

const resultado = nParCuadradoMay10(numeros);
console.log(resultado);*/

/*
*******************DOS*************************
const personas = [
    {nombre:'Juan', edad:30},
    {nombre:'Ana', edad:25},
    {nombre:'Pedro', edad:27},
    {nombre:'María', edad:22},
];

function personaJoven (p){
    p.sort((p1,p2) =>{
        let{edad:e1}=p1;
        let{edad:e2}=p2;
        return e1-e2;   
    });
    return p[0];
}

const resultado = personaJoven(personas);
console.log(resultado);


**********************TRES**********************


const texto = 'Hola, mundo!';

function obtenerFrecuenciaLetras(tx){
    const atributos = tx.split('');
    const x = atributos.reduce((n,m)=>{
        n[m]= n[m]+1 || 1 ;
        return n;
    },{});
    return x;
}

const resultado = obtenerFrecuenciaLetras(texto);
console.log(resultado);



const texto = 'Hola, mundo!';

// [H, H, l, a, ]
function obtenerFrecuenciaLetras(tx){
    const atributos = tx.split('');
    const x = atributos.reduce((n,m)=>{
        n[m]= n[m]+1 || 1 ; // si H tiene algo sumale + 1 sino H va a ser 1
        //console.log(n)
        return n;
    },{}); /// {H: ,
    const s = atributos.reduce((t,k)=>((t[k]= t[k]+1),t),{});
    return x;
}

const resultado = obtenerFrecuenciaLetras(texto);
console.log(resultado);
*/