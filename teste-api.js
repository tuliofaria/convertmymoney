/*
    Para um gerador de URL para cotação:
    https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/aplicacao#!/recursos/CotacaoDolarDia#eyJmb3JtdWxhcmlvIjp7IiRmb3JtYXQiOiJqc29uIiwiJHRvcCI6MTAwLCJkYXRhQ290YWNhbyI6IjA0LTIxLTIwMjAifSwicHJvcHJpZWRhZGVzIjpbMCwxLDJdfQ==
*/
const axios = require('axios')

const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='04-20-2020'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`

axios
  .get(url)
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
