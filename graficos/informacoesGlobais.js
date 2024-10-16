const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais'

async function vizualizarinformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_mundo / 1e9)
    constpessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas =pareInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const poecentagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML= 'Voce sabia que o mundo tem <span>${pessoasnomundo} bilhoes'

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarinformacoesGlobais