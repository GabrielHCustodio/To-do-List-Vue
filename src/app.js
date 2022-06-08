const nameApp = {
    data() {
        return {
            activity: [],
            checked: false
        }
    },
    methods: {
        addAct() {
            let name = prompt('Informe o nome da atividade...')
            this.activity.push(name)
        },
        dltAct() {
            console.log('HAHAHA')
        }
    }
}

Vue.createApp(nameApp).mount('#app')
