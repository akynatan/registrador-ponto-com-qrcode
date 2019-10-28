botaoCadastrar = document.getElementById("cadastrarFuncionario")
idFuncionario = document.getElementById("idFuncionario")
nomeFuncionario = document.getElementById("nomeFuncionario")
fotoFuncionario = document.getElementById("fotoFuncionario")
mensagem = document.getElementById("mensagem")

function cadastrarFuncionario() {
    if (idFuncionario.value!="" && nomeFuncionario.value!="" && fotoFuncionario.value!="") {
        novoFuncionario = {"nome": nomeFuncionario.value, "foto": fotoFuncionario.value, "entrou": false, ultimaentrada: ""}
        localStorage.setItem(idFuncionario.value,JSON.stringify(novoFuncionario))
    } else {
        alert("Dados Incorretos. Tente Novamente!")
    }
    
    /*mensagem.innerHTML = "Funcionario Cadastrado com Sucesso"
    mensagem.style.display = "block"*/
    /*var sucesso = document.createElement("p")
    var sucessoTexto = document.createTextNode("Funcionario Cadastrado com Sucesso")
    sucesso.appendChild(sucessoTexto)
    document.querySelector("form").appendChild(sucesso)*/
}

botaoCadastrar.addEventListener('click', cadastrarFuncionario)