const nameApp = {
    data() {
        return {
            activity: [],
            form: true
        }
    },
    created() {
        this.activity = JSON.parse(localStorage.getItem('act'))
    },
    methods: {
        addAct() {
            const modal = document.querySelector("#modal");
            const fade = document.querySelector("#fade");

            function toggleModal()  {
                [modal, fade].forEach((el) => {el.classList.toggle("hide")})
            }

            toggleModal()
        },
        saveAct() {
            const modal = document.querySelector("#modal");
            const fade = document.querySelector("#fade");

            function toggleModal()  {
                [modal, fade].forEach((el) => {el.classList.toggle("hide")})
            }

            let act = document.querySelector('#act').value

            let activities = this.activity
            if (!activities) activities = []
            activities.push({
                name: act,
                id: Math.random()
            })

            localStorage.setItem('act', JSON.stringify(activities))

            toggleModal()

            document.querySelector('#act').value = ''
        },
        cancel() {
            const modal = document.querySelector("#modal");
            const fade = document.querySelector("#fade");

            function toggleModal()  {
                [modal, fade].forEach((el) => {el.classList.toggle("hide")})
            }

            toggleModal()
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
