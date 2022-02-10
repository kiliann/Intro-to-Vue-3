app.component('listarRevision',{
    props:{
        revision:{
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
        `
  <div class="review-container">
  <h3>Revision:</h3>
    <ul>
      <li v-for="(reviso, index) in revision" :key="index">
        {{ reviso.nombre }} gave this {{ reviso.rango }} stars
        <br/>
        "{{ reviso.revision }}"
        <br/>
      </li>
    </ul>
  </div>
`

})