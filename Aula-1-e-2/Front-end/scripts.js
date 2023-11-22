//alert('fala galera') alert = manda uma mensagem de alerta no front (navegador)
const tarefasHtml = document.getElementById('tarefas')

const chamadaApi = fetch('http://localhost:3000/tarefas')
console.log(chamadaApi);

chamadaApi.then((response) => {
    console.log(response)
    return response.json()
}).then((tarefas) => {
    console.log(tarefas)
})