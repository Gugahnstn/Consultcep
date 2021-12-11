const result = document.querySelector('.cep')

// faz a requisição da API e retorna o JSON
const getPost = async () => {
    const resultcep = document.querySelector('.cep').value
    const url = await fetch(`https://viacep.com.br/ws/${resultcep}/json/`)
    return url.json()
}

// essa função coloca os dados na tela
const addDom = async () => {
    const dados = await getPost()
    const { cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi } = dados
    document.querySelector('.resul').innerHTML = `
    
    <div>
        <p>CEP: <strong>${cep}</strong></p>
        <p>LOGRADOURO: <strong>${logradouro}</strong></p>
        <p>COMPLEMENTO: <strong>${complemento}</strong></p>
        <p>BAIRRO: <strong>${bairro}</strong></p>
        <p>LOCALIDADE: <strong>${localidade}</strong></p>
        <p>UF: <strong>${uf}</strong></p>
        <p>IBGE: <strong>${ibge}</strong></p>
        <p>GIA: <strong>${gia}</strong></p>
        <p>DDD: <strong>${ddd}</strong></p>
        <p>SIAFI: <strong>${siafi}</strong></p>
    </div>
    
    `
}

// quando o usuario clicar no ENTER vai chamar a função que coloca as info na tela
result.addEventListener('keypress', e => {
    if (e.keyCode === 13) {
        addDom()
    }
})