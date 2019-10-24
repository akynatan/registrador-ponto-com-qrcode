var video = document.getElementById('preview'); //recebe o video que irá mostrar o scanner na tela
let scanner = new Instascan.Scanner({ video: document.getElementById('preview') }); //realiza uma instancia 
var datahora = new Date(); // captura a hora atual.
var entrada = document.getElementById('entrada'); // recebe o paragrafo que é responsável por mostrar a entrada
var saida = document.getElementById('saida'); // recebe o paragrafo que é responsável por mostrar a saida
var fotofuncionario = document.getElementById('fotofuncionario'); // recebe a imagem que é responsável por mostrar a foto do funcionario

/* Como cadastrar o funcionario
objeto = {"nome": "Harry Potter","foto": "img/harrypotter.png"}
localStorage.setItem(123456,JSON.stringify(objeto))
obj = localStorage.getItem(123456)
obj = JSON.parse(obj)*/

function registrarHora(funcionario,content) { //funcao responsável por registrar a hora (entrada ou saida do funcionario)
    datahora = new Date();
    alert("entrou na funcao")
    var str_data = datahora.getDate() + '/' + (datahora.getMonth()+1) + '/' + datahora.getFullYear() + " " + datahora.getHours() + ':' + datahora.getMinutes() + ':' + datahora.getSeconds();
    if (funcionario.entrou){
        alert("entrou no if")
        funcionario.entrou = false;
        entrada.innerHTML = funcionario.ultimaentrada;
        saida.innerHTML = str_data;
        localStorage.setItem(content,JSON.stringify(funcionario))
    } else {
        alert("entrou no else")
        funcionario.entrou = true;
        funcionario.ultimaentrada = str_data;
        entrada.innerHTML = str_data;
        saida.innerHTML = "";
        localStorage.setItem(content,JSON.stringify(funcionario))
    }
}

scanner.addListener('scan', function (content) { //funcao responsável por identificar quando um scanner ler um codigo de barras
    var funcionario = localStorage.getItem(content);
    funcionario = JSON.parse(funcionario);
    fotofuncionario.src = funcionario.foto;
    registrarHora(funcionario,content);
});

Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
    scanner.start(cameras[0]);
    } else {
    console.error('No cameras found.');
    }
});