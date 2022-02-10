app.component('formulario', {
    template:
    /*html*/
        `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Revisado del producto</h3>
    <label for="nombre" >Nombre:</label>
    <input id="nombre" v-model="nombre">

    <label for="revision">Revision:</label>      
    <textarea id="revision" v-model="revision"></textarea>

    <label for="rango">Rango:</label>
    <select id="rango" v-model.number="rango">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <input class="button" type="submit" value="Enviar">
  </form>`,
    data() {
        return {
            nombre: '',
            revision: '',
            rango: null,
        }

    },
    method: {
        onSubmit(){
            if (this.nombre === '' || this.revision === '' || this.rango === null ) {
                alert('La revision esta incompleta, acabe de rellenarla.')
                return
            }
            let productoRevision = {
                nombre: this.nombre,
                revision: this.revision,
                rango: this.rango
            }
        this.$emit('revision-Producto', productoRevision)

            this.nombre = ''
            this.revision = ''
            this.rango = null
        }

    }
})