app.component('product-detalles', {
    props: {
        detalles: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
        `
  <ul>
    <li v-for="detalle in detalles">{{ detalle }}</li>
  </ul>
  `
})