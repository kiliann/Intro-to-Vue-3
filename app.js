const product = 'Calcetines'
//Creo una aplicacion de Vue
const app = Vue.createApp({
    data(){ //Datos que recibe la aplicacion
        return{

            unidades: [],
            premium: true



        }
    },
    methods: {
        updateCarro(id){
            this.unidades.push(id)
        },
        eliminarDelCarro(cod){
            const index = this.unidades.indexOf(cod)
            if (index > -1) {
                this.unidades.splice(index, 1)
            }
        }

    },



})

window.onload = () => {const appMontada = app.mount('#app')}