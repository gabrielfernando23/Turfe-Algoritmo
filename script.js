
    var cavalos = []

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

function Corrida() {

    
    for (let index = 0; index < 7; index++) {
        var velocidade_cavalo1 = Math.random() *3 +7;
        var velocidade_cavalo2 = Math.random() *3 +7;
        var velocidade_cavalo3 = Math.random() *3 +7;
        cavalos.push({volta: `volta${index+1}`,cavalo1Velocidade:`${velocidade_cavalo1}`,
        cavalo2Velocidade:`${velocidade_cavalo2}`,
        cavalo3Velocidade:`${velocidade_cavalo3}`})
        console.log(cavalos)
    }
}

function segundaPagina() {
    primeiraPagina.style.display = "none"
    paginaCorrida.style.display = "block"
    cavalos_concorrentes.innerHTML = `<h2>Cavalos concorrendo</h2><span>${cavalos[0]}<br>${cavalos[1]}<br>${cavalos[2]}`
}