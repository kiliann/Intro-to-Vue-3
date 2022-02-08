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
            stock: '2',
            enOferta: true,
            detalles: ['50% algodón', '30% lana', '20% otros materiales'],
            colores: [
                {cod: 'A020', color:'Verde'},
                {cod: "B022", color: 'Azul'}
            ],
            unidades: 0

        }
    }
})

window.onload = () => {const appMontada = app.mount('#app')}