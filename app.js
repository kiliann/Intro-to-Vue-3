const product = 'Calcetines'
//Creo una aplicacion de Vue
const app = Vue.createApp({
    data(){ //Datos que recibe la aplicacion
        return{
            producto: 'calcetines',
            descripcion: 'De pura lana virgen',
            imagen: 'assets/images/socks_blue.jpg',
            tooltip: 'sin agujeros',
            wikiCalcetines: 'https://es.wikipedia.org/wiki/Calcet%C3%ADn',
            stock: '6',
            totalStock: true,
            enOferta: true,
            detalles: ['50% algodón', '30% lana', '20% otros materiales'],
            colores: [
                {cod: "#265d26", color:'Verde', imagenes: './assets/images/socks_green.jpg'},
                {cod: "#0c0c91", color: 'Azul', imagenes: './assets/images/socks_blue.jpg'},
            ],
            unidades: 0,



        }
    },
    methods: {
        añadirAlCarrito() {
            this.unidades += 1
        },
        quitarDelCarrito(){
            if(this.unidades >=1){
                this.unidades -= 1
            }
        },
        updateImagenes(variantImage) {
            this.imagen = variantImage
        }
    }

})

window.onload = () => {const appMontada = app.mount('#app')}