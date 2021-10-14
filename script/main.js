function cep() {
    let resultcep = document.querySelector('.cep').value;
    fetch(`https://viacep.com.br/ws/${resultcep}/json/`)
    .then(response => response.json())
    .then(ler => {
        document.querySelector('.resul').innerHTML = `
          <div>
            <p>CEP: <strong>${ler.cep}</strong></p>
            <p>LOGRADOURO: <strong>${ler.logradouro}</strong></p>
            <p>COMPLEMENTO: <strong>${ler.complemento}</strong></p>
            <p>BAIRRO: <strong>${ler.bairro}</strong></p>
            <p>LOCALIDADE: <strong>${ler.localidade}</strong></p>
            <p>UF: <strong>${ler.uf}</strong></p>
            <p>IBGE: <strong>${ler.ibge}</strong></p>
            <p>GIA: <strong>${ler.gia}</strong></p>
            <p>DDD: <strong>${ler.ddd}</strong></p>
            <p>SIAFI: <strong>${ler.siafi}</strong></p>
        </div>
    `
    })
}

