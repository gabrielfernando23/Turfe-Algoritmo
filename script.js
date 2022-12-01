
    var cavalos = []
    var qntdVoltas =0;
function cadastrarCavalo() {
    if (cavalos.length < 3) {
        cavalos.push(ipt_nomeCavalo.value)
        ipt_nomeCavalo.value = '';
        cavalos_adicionados.innerHTML = ``
        for (var index = 0; index < cavalos.length; index++) {
            cavalos_adicionados.innerHTML += `<br>${cavalos[index]}`
        }
    }else{
        alert('Você já cadastro o número máximo de cavalos!')
   }
}

// function cadastrarVoltas() {
//     qntdVoltas = Number (ipt_qntdVoltasCavalo.value);
//     qntdVoltas++;
//     exibir.innerHTML += `sua corrida terá ${qntdVoltas}voltas`
// }
function Corrida() {

    let contador = 0;
   var velocidadeTotalCavalo1 = 0;
   var velocidadeTotalCavalo2 = 0;
   var velocidadeTotalCavalo3 = 0;
//    var velocidadeTotalCavalo4 = 0;
//    var velocidadeTotalCavalo5 = 0;
//    var velocidadeTotalCavalo6 = 0;
//    var velocidadeTotalCavalo7 = 0;
   

    for (let index = 0; index < qntdVoltas ; index++) {
        var velocidade_cavalo1 = Math.random() *3 +7;
        var velocidade_cavalo2 = Math.random() *3 +7;
        var velocidade_cavalo3 = Math.random() *3 +7;
        // var velocidade_cavalo4 = Math.random() *3 +7;
        // var velocidade_cavalo5 = Math.random() *3 +7;
        // var velocidade_cavalo6 = Math.random() *3 +7;
        // var velocidade_cavalo7 = Math.random() *3 +7;

        velocidadeTotalCavalo1+=velocidade_cavalo1;
        velocidadeTotalCavalo2+=velocidade_cavalo2;
        velocidadeTotalCavalo3+=velocidade_cavalo3;
        // velocidadeTotalCavalo4+=velocidade_cavalo4;
        // velocidadeTotalCavalo5+=velocidade_cavalo5;
        // velocidadeTotalCavalo6+=velocidade_cavalo6;
        // velocidadeTotalCavalo7+=velocidade_cavalo7;

        cavalos.push({volta: `volta${index+1}`,cavalo1VelocidadeTotal:`${velocidade_cavalo1}`,
        cavalo1VelocidadeTotal:`${velocidadeTotalCavalo1}`,
        cavalo2VelocidadeTotal:`${velocidade_cavalo2}`,
        cavalo2VelocidadeTotal:`${velocidadeTotalCavalo2}`,
        cavalo3VelocidadeTotal:`${velocidade_cavalo3}`,
        cavalo3VelocidadeTotal:`${velocidadeTotalCavalo3}`});
        // cavalo4VelocidadeTotal:`${velocidade_cavalo4}`,
        // cavalo4VelocidadeTotal:`${velocidadeTotalCavalo4}`,
        // cavalo5VelocidadeTotal:`${velocidade_cavalo5}`,
        // cavalo5VelocidadeTotal:`${velocidadeTotalCavalo5}`,
        // cavalo6VelocidadeTotal:`${velocidade_cavalo6}`,
        // cavalo6VelocidadeTotal:`${velocidadeTotalCavalo6}`,
        // cavalo7VelocidadeTotal:`${velocidade_cavalo7}`,
        // cavalo7VelocidadeTotal:`${velocidadeTotalCavalo7}`,})
        console.log(cavalos)
        largada.innerHTML+=``
        contador++;    
    }

    if (cavalo1VelocidadeTotal > cavalo2VelocidadeTotal && cavalo1VelocidadeTotal > cavalo3VelocidadeTotal){
        if (cavalo2VelocidadeTotal > cavalo3VelocidadeTotal) {
            
        } else {
            
        }
    }
    if (cavalo2VelocidadeTotal > cavalo3VelocidadeTotal && cavalo2VelocidadeTotal > cavalo1VelocidadeTotal){
        
    }
    if (cavalo3VelocidadeTotal > cavalo1VelocidadeTotal && cavalo3VelocidadeTotal > cavalo2VelocidadeTotal){
        
    }



  
}

function segundaPagina() {
    primeiraPagina.style.display = "none"
    paginaCorrida.style.display = "block"
    cavalos_concorrentes.innerHTML = `<h2>Cavalos concorrendo</h2><span>${cavalos[0]}<br>${cavalos[1]}<br>${cavalos[2]}`
}