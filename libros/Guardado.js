let Guardar = {
    template: `
        <div>
            <button @click="biblioteca=biblioteca.concat(libro)" class="boton">AGREGAR A BIBLIOTECA</button>
        </div>
    `,

    data(){
        return {
            biblioteca: [],
        }

    },

    methods: {


    }

}