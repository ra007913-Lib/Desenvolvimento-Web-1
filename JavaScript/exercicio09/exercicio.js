function mostrarNome() {
    let nome = document.getElementById("nomeUsuario").value;

    document.getElementById("resultado").innerText =
        "Ola, " + nome + "!";
}