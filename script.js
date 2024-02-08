function calcular() {
    
    const cidade1 = document.getElementById('cidade1').value;
    const distancia = document.getElementById('distancia').value;

    let velocidadeMedia;
    switch (cidade1) {
        case 'SP-RJ':
            velocidadeMedia = 400 / 4;
            break;
        case 'RJ-BH':
            velocidadeMedia = 500 / 4;
            break;
        case 'BH-BSB':
            velocidadeMedia = 700 / 4;
            break;
        case "BSB-SAL":
            velocidadeMedia = 1000 / 4;
            break;
        default:
            alert('Escolha uma cidade válida');
            return;
    }
    const consumoCombistivelCarro = 10;
    const consumoCombistivelCaminhao = 4.5;
    const capacidadeTanqueCarro = 42;
    const capacidadeTanqueCaminhao = 380;

    const combustivelNecessarioCarro = (distancia * consumoCombistivelCarro) / 100;
    const combustivelNecessarioCaminhao = (distancia * consumoCombistivelCaminhao) / 100;

    document.getElementById('resultado').innerHTML = `
        Velocidade média: ${velocidadeMedia.toFixed(2)} km/h<br>
        Combustível necessário para carro: ${combustivelNecessarioCarro.toFixed(2)} litros<br>
        Combustível necessário para caminhão: ${combustivelNecessarioCaminhao.toFixed(2)} litros
    `;
}