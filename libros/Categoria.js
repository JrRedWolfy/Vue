let Categoria = {
    template: `
        <div>

            <div v-for="(categoria, index) in categorias" :key="index"
            >
                <ul class="inline">
                <li><button class="button">{{categoria.name | mayusculas}}</button></li>
                </ul>
            </div>

        </div>
    `,


    data(){
        return {
            categorias: []

        }
    },

    filters:{
        mayusculas(value){
            return value.toUpperCase()
        }
        
    },

    methods: {
        getCategorias(){
            
            const URL = `https://www.etnassoft.com/api/v1/get/?get_categories=all`
            fetch(URL)
                .then(response => response.json())
                .then(data => {
                    this.categorias=data
                    console.log(data)
                })
        }

    },

    mounted() {
        this.getCategorias()
    }

}