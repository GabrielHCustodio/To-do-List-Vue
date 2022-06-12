const nameApp = {
    data() {
        return {
            activity: []
        }
    },
    created() {
        this.activity = JSON.parse(localStorage.getItem('act'))
    },
    methods: {
        addAct() {
            let activities = this.activity

            if (!activities) activities = []

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

            localStorage.setItem('act', JSON.stringify(newAct))

            this.activity = JSON.parse(localStorage.getItem('act'))
        }
    }
}

Vue.createApp(nameApp).mount('#app')
