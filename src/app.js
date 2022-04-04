const nameApp = {
    data() {
        return {
            atividades: [],
            título: "To Do List",
            placeholder: "Informe a atividade",
            valor: "Adicionar",
            name_activity: ""
        }
    },
    methods: {
        addActivity() {
            this.atividades.push({
                atividade: inputActivity.value
            })
        },
    }
}

Vue.createApp(nameApp).mount('#app')
