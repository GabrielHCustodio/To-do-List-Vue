const nameApp = {
    data() {
        return {
            activity: [],
            checked: false
        }
    },
    mounted() {
        this.activity = JSON.parse(localStorage.getItem('act'))

        if (!this.activity) this.activity = []
    },
    updated() {
        this.activity = JSON.parse(localStorage.getItem('act'))
    },
    methods: {
        addAct() {
            let activities = this.activity
            activities.push({
                name: prompt('Informe o nome da atividade...'),
                id: Math.random()
            })

            localStorage.setItem('act', JSON.stringify(activities))

        },
        dltAct(id) {
            let index = this.activity
            function removeId(index, prop, value) {
                return index.filter( (i) => {
                    return i[prop] !== value
                })
            }

            let newAct =  removeId(index, "id" , id)

            this.activity = localStorage.setItem('act', JSON.stringify(newAct))
        }
    }
}

Vue.createApp(nameApp).mount('#app')
