    var cavalos = []
    var cavalos_cadastrados = []

function cadastrarCavalo() {
    if (cavalos_cadastrados.length < 3) {
        cavalos_cadastrados.push(ipt_nomeCavalo.value)
        ipt_nomeCavalo.value = '';
        cavalos_adicionados.innerHTML = ``
        for (var index = 0; index < cavalos_cadastrados.length; index++) {
            cavalos_adicionados.innerHTML += `<br>${cavalos_cadastrados[index]}`
        }
    }else{
        alert('Você já cadastro o número máximo de cavalos!')
   }
}

function Corrida() {
   var velocidadeTotalCavalo1 = 0;
   var velocidadeTotalCavalo2 = 0;
   var velocidadeTotalCavalo3 = 0;

    for (let index = 0; index < 7; index++) {
        var velocidade_cavalo1 = Math.random() *3 +7;
        var velocidade_cavalo2 = Math.random() *3 +7;
        var velocidade_cavalo3 = Math.random() *3 +7;
        velocidadeTotalCavalo1+=velocidade_cavalo1;
        velocidadeTotalCavalo2+=velocidade_cavalo2;
        velocidadeTotalCavalo3+=velocidade_cavalo3;

        cavalos.push({volta:`volta${index+1}`,cavalo1Velocidade:`${velocidade_cavalo1}`,
        cavalo1VelocidadeTotal:`${velocidadeTotalCavalo1}`,
        cavalo2Velocidade:`${velocidade_cavalo2}`,
        cavalo2VelocidadeTotal:`${velocidadeTotalCavalo2}`,
        cavalo3Velocidade:`${velocidade_cavalo3}`,
        cavalo3VelocidadeTotal:`${velocidadeTotalCavalo3}`});
        console.log(cavalos)
        largada.innerHTML+=``
        index++;    
        largada.innerHTML += `${cavalos[index].volta} - Cavalo 1 -${cavalos[index].cavalo1Velocidade} - ${cavalos[index].cavalo1VelocidadeTotal}- Cavalo 2 - ${cavalos[index].cavalo2Velocidade} - ${cavalos[index].cavalo2VelocidadeTotal} - Cavalo 3 - ${cavalos[index].cavalo3Velocidade} - ${cavalos[index].cavalo3VelocidadeTotal}`
    }

    if (cavalo1VelocidadeTotal > cavalo2VelocidadeTotal && cavalo1VelocidadeTotal > cavalo3VelocidadeTotal){
       largada.innerHTML += `1`
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
    cavalos_concorrentes.innerHTML = `<h2>Cavalos concorrendo</h2><span>${cavalos_cadastrados[0]}<br>${cavalos_cadastrados[1]}<br>${cavalos_cadastrados[2]}`
}