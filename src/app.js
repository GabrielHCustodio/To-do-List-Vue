const nameApp = {
    data() {
        return {
            activity: ''
        }
    },
    methods: {
        addActivity() {
            let name = prompt('Informe o nome da atividade...')
            this.activity = name
        },
        dltActivity() {
            console.log('HAHAHA')
        }
    }
}

Vue.createApp(nameApp).mount('#app')
