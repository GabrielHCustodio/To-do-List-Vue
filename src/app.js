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
        clearActivity() {
            const newAtividades = document.querySelectorAll('.activities')
            for(var i = 0 ; i < newAtividades.length; i++) {
                newAtividades[i].remove()
            }
        }
    }
}

Vue.createApp(nameApp).mount('#app')
