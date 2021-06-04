let Controlador = {
    template: `
        <div>

            <div class ="izquierda">
            <input v-model="buscar">
            </div>

            <aside class ="derecha">
                <button>BIBLIOTECA</button>
            </aside>

        </div>
    `,


    data(){
        return {
            busqueda: [],
            buscar: ""
        }
    },

    filters:{
        mayusculas(value){
            return value.toUpperCase()
        }
        
    },

    methods: {
        showForName(){
            
            const URL = `https://www.etnassoft.com/api/v1/get/?book_title_index=${buscar}`
            fetch(URL)
                .then(response => response.json())
                .then(data => {
                    this.busqueda=data
                    console.log(data)
                })
        }

    },

}