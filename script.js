    var cavalos = []
    var cavalos_cadastrados = []

function cadastrarCavalo() {
    if (cavalos_cadastrados.length < 3) {
        cavalos_cadastrados.push(ipt_nomeCavalo.value)
        ipt_nomeCavalo.value = '';
        alert('Cavalo cadastrado com sucesso!')
    }else{
        alert('Você já cadastro o número máximo de cavalos!')
   }
}

function Corrida() {
   var velocidadeTotalCavalo1 = 0;
   var velocidadeTotalCavalo2 = 0;
   var velocidadeTotalCavalo3 = 0;

    for (let index = 0; index < 7; index++) {
        var velocidade_cavalo1 = (Math.random() *3 +7).toFixed(2)
        var velocidade_cavalo2 = (Math.random() *3 +7).toFixed(2)
        var velocidade_cavalo3 = (Math.random() *3 +7).toFixed(2)
        velocidadeTotalCavalo1+= parseFloat(velocidade_cavalo1)
        velocidadeTotalCavalo2+= parseFloat(velocidade_cavalo2)
        velocidadeTotalCavalo3+= parseFloat(velocidade_cavalo3)

        cavalos.push({volta:`volta${index+1}`,cavalo1Velocidade:`${velocidade_cavalo1}`,
        cavalo1VelocidadeTotal:`${(velocidadeTotalCavalo1).toFixed(2)}`,
        cavalo2Velocidade:`${velocidade_cavalo2}`,
        cavalo2VelocidadeTotal:`${(velocidadeTotalCavalo2).toFixed(2)}`,
        cavalo3Velocidade:`${velocidade_cavalo3}`,
        cavalo3VelocidadeTotal:`${(velocidadeTotalCavalo3).toFixed(2)}`,})
        console.log(cavalos)
        largada.innerHTML+=`` 
        largada.innerHTML += `<br>${cavalos[index].volta} - Cavalo 1 -${cavalos[index].cavalo1Velocidade} - ${(cavalos[index].cavalo1VelocidadeTotal)}- Cavalo 2 - ${cavalos[index].cavalo2Velocidade} - ${(cavalos[index].cavalo2VelocidadeTotal)} - Cavalo 3 - ${cavalos[index].cavalo3Velocidade} - ${(cavalos[index].cavalo3VelocidadeTotal)}`
    }

    if (cavalo1VelocidadeTotal > cavalo2VelocidadeTotal && cavalo1VelocidadeTotal > cavalo3VelocidadeTotal){
       largada.innerHTML += `Campeão : Cavalo 1`
        if (cavalo2VelocidadeTotal > cavalo3VelocidadeTotal) {
            largada.innerHTML += ``
        } else {
            
        }
    }
    if (cavalo2VelocidadeTotal > cavalo3VelocidadeTotal && cavalo2VelocidadeTotal > cavalo1VelocidadeTotal){
        if (cavalo1VelocidadeTotal > cavalo3VelocidadeTotal) {
            
        } else {
            
        }
    }
    if (cavalo3VelocidadeTotal > cavalo1VelocidadeTotal && cavalo3VelocidadeTotal > cavalo2VelocidadeTotal){
        if (cavalo1VelocidadeTotal > cavalo2Velocidade) {
            
        } else {
            
        }
    }



  
}

function segundaPagina() {
    primeiraPagina.style.display = "none"
    paginaCorrida.style.display = "block"
}