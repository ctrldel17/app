const url = 'https://dados.ifpb.edu.br/dataset/e99b5cfd-f2f3-4b54-bb4f-6ddd9e480af7/resource/f81de6aa-afde-4cdb-bee0-a9ed2f87c4c3/download/projetos-pesquisa.json'
const axios = require('axios')
const area = f => f.area_conhecimento ==='ENGENHARIA ELE\u0301TRICA'
const resumo = f => f.resumo =='Modalidade internet'
const justificativa = f => f.justificativa == 'Nada consta'
axios.get(url).then(resposta =>{
    const projetos = resposta.data
    module.exports.resultado = projetos.filter(area).filter(resumo).filter(justificativa)
})