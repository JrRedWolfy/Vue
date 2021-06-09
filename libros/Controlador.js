let Controlador = {
    template: `
        <div>
            <div>
                <button class="boton"><a href="biblioteca.html">BIBLIOTECA</a></button>
            </div>

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