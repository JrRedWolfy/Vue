let Categorias = {
    template: `
        <div>

            <div v-for="(libros, index) in libro" :key="index"
            >
                <ul>{{categories | mayusculas}}<ul>
            </div>
            

        </div>
    `,

    props: ['categories'],

    data(){
        return {
        
        }
    },

    filters:{
        mayusculas(value){
            return value.toUpperCase()
        }
        
    },

    methods: {
        cargarCategoria(){
            
        }

    }



}