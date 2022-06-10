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
            this.activity.push({ name : name , id : id})
        },
        dltAct(id) {
            console.log(id)
        }
    }
}

Vue.createApp(nameApp).mount('#app')
