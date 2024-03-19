const mes = ['janeiro','fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'setembro', 'outubro', 'novembro', 'dezembro'];

function pegarmes (mesatual){
    let date = new Date();
    var mesatual = date.getMonth();
    const mesescrito = mes[mesatual];
    console.log (mesescrito)
    mesdisplay = document.querySelector('.mesatual')
    mesdisplay.innerHTML = mesescrito
}
pegarmes()