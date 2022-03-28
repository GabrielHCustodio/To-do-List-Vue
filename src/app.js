const nameApp = {
    data() {
        return {
            título: "To Do List",
            placeholder: "Informe a atividade",
            valor: "Adicionar",
            nomeAtividade: ""
        }
    },
    methods: {
        addActivity() {
            alert('Atividade adicionada')
        }
    }
}

Vue.createApp(nameApp).mount('#app')
