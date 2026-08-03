
//objeto da ficha -> salvar no local storage E gerar JSON baixavel para salvamento mais aprofundado
const ficha = {
    
    nome: "",
    jogador: "",
    pvf: 40,
    pvMult: 2,
    pvtModp: 3,
    pvtModn: 4,
    forca: 0,
    agilidade: 0,
    intelecto: 0,
    presenca: 0,
    vigor: 3,
    pec: 60,

};

//dados finitos que não são permanentes -> apenas salvar no local storage
const temporario = {



}

//calculos
function fichaCalculos(ficha) {

    //calculos primarios (que não precisam de outro calculo)
    const rk = ficha.pec / 15;

    //calculos secundarios (que precisam de outra variavel)
    const pvt = ficha.pvf + rk * (ficha.pvMult * ficha.vigor) + ficha.pvtModp - ficha.pvtModn;

    //calculos terciarios (que precisam de uma variavel secundaria)

    //retorno
    return{

        rk,
        pvt

    }

}

const calculos = fichaCalculos(ficha);

console.log("Valores: " + ficha.pvf )
console.log("Resultado: " + calculos.pvt);




function carregarCacador(calculos){

    const pvt = document.getElementById('pv').innerHTML = "PV: " + calculos.pvt;

  

//carregar status

}

//carrega o caçador ao inicio da pagina
document.addEventListener('DOMContentLoaded', function(){

    carregarCacador(calculos);

})

function atualizarCacador(){

    const novoPvf = document.getElementById("novoPvf").value;
    const novoPvmult = document.getElementById("novoPvMult").value;
    const novoPvf = document.getElementById("novoPvf").value;
    const novoPvf = document.getElementById("novoPvf").value;
    
    ficha.pvf = +novoPvf;
    ficha.pvMult = +novoPvmult;
    ficha.pvf = +novoPvf;
    ficha.pvf = +novoPvf;

    console.log(ficha.pvf);

    const novosCalculos = fichaCalculos(ficha);    
    carregarCacador(novosCalculos);

}
