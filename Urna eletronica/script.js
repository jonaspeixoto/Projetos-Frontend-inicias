let seuVotoPara = document.querySelector(".d11 span")
let Cargo = document.querySelector(".d12 span")
let descricao = document.querySelector(".d14 ")
let aviso = document.querySelector(".d2 ")
let lateral = document.querySelector(".dirigth")
let numeros = document.querySelector(".d13")


let etapaAtual = 0;

let numero = '';

function começarEtapa(){
    let etapa = etapas[etapaAtual]
    let numeroHtml = '';

    for(let i=0; i<etapa.numeros;i++){

        if (i === 0){
            numeroHtml += '<div class="numero pisca"></div>'
        }
        else{
            numeroHtml += '<div class="numero"></div>'
        }
    }

    seuVotoPara.style.display = 'none';
    Cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display= 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;

}

function atualizaInterface(){
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true;
        }
        else{
            return false;
        }
    })

    if(candidato.length > 0){
        candidato = candidato[0]
        seuVotoPara.style.display = 'block'
        descricao.innerHTML = `Nome: ${candidato.nome} <br/> Partido: ${candidato.partido}`
        aviso.style.display = 'block';

        let fotoshtml = '';
        for(let i in candidato.fotos){
             fotoshtml += `<div class="d1image"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda} </div>`
         }
        lateral.innerHTML = fotoshtml;
    }

    else{
        seuVotoPara.style.display = 'block'
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="avisoGrande pisca">voto nulo </div>';
    }
}


function clicou(n){
    let elnumero = document.querySelector('.numero.pisca')
    if( elnumero !== null){
        elnumero.innerHTML = n;
        numero = `${numero}${n}`;
    }
    elnumero.classList.remove('pisca');
    if(elnumero.nextElementSibling !== null){
        elnumero.nextElementSibling.classList.add('pisca')
    }
    else{
        atualizaInterface()
    }
}

function branco(){
    alert("branco")
}

function Corrige(){
    alert("corrige")
}
function Cofirma(){
 alert("confima")   
}

começarEtapa()