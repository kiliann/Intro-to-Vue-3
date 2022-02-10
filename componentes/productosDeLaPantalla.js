app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },

    template:
    /*html*/
        ` <div class="product-display">
    <div class="product-container">
    <div>
        <h1>{{titulo}}</h1>
                <h3>{{descripcion}}</h3>
                <p v-if=totalStock>Disponible</p>
        <!--<p v-else-if="totalStock > 0">¡Últimas unidades!</p>-->
                <p v-else>No Disponible</p>
                <p>Gastos de Envio: {{envio}}</p>
                <product-detalles :detalles="detalles"></product-detalles>
    </div>
            
            
            
            
            <div class="product-image">
            
                <a :href=wikiCalcetines><img v-bind:src=imagenes :title=tooltip></a>
            
            </div>
                  <p>{{oferta}}</p>
                <div class="color-circle" v-for="(color, index) in colores" :key=color.cod
                @mouseover="updateColores(index)"
                :style="{ backgroundColor: color.cod}">{{color.color}}
                </div>
            
            <div>
                <button class="button" :class="{disabledButton: !totalStock}" :disabled="!totalStock" @click="añadirAlCarrito()">
                        ¡Comprar!
                </button>
                <button class="button" @click="quitarDelCarrito()">¡Quitar del Carrito!</button>
            </div>
    </div>
    <listarRevision :revision="revision"></listarRevision>
    <formulario @revision-Producto="añadirRevision()"></formulario>
</div>`,
    data() { //Datos que recibe la aplicacion
        return {
            producto: 'calcetines',
            marca: 'Vue',
            descripcion: 'De pura lana virgen',
            selecionColor: 0,
            tooltip: 'sin agujeros',
            wikiCalcetines: 'https://es.wikipedia.org/wiki/Calcet%C3%ADn',


            enOferta: true,
            detalles: ['50% algodón', '30% lana', '20% otros materiales'],
            colores: [
                {cod: "#265d26", color: 'Verde', imagenes: './assets/images/socks_green.jpg', cantidad: 50},
                {cod: "#0c0c91", color: 'Azul', imagenes: './assets/images/socks_blue.jpg', cantidad: 0},
            ],
            revision:[]


        }
    },
    methods: {
        añadirAlCarrito() {
            //this.unidades += 1
            this.$emit('añadir-al-carrito', this.colores[this.selecionColor].cod)
        },
        quitarDelCarrito() {
            /*if(this.unidades >=1){
                this.unidades -= 1
            }*/
            this.$emit('eliminar-del-carrito', this.colores[this.selecionColor].cod)


        },

        updateColores(index) {
            this.selecionColor = index

        },
        añadirRevision(revision){

            this.revision.push(revision)

        }

    },

    computed: {
        titulo() {
            return this.marca + ' ' + this.producto
        },
        imagenes() {
            return this.colores[this.selecionColor].imagenes
        },
        totalStock() {
            return this.colores[this.selecionColor].cantidad
        },
        oferta() {
            if (this.enOferta) {
                return this.marca + ' ' + this.producto + ' esta en Oferta.'
            }
            return ''
        },
        envio() {
            if (this.premium) {
                return 'Gratis'
            }
            return 2.99

        }
    }
})