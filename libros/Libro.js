
let Libro = {
    template: `
        <div>

            <div v-for="(libro, index) in libros" :key="index"
            >
            <expositor
            :title="libro.title"
            :cover="libro.cover"
            ></expositor>
            </div>

        </div>
    `,

    data(){
        return {

            libros: [],
            allLibros: []
        }

    },

    components:{
        Expositor
    },

    methods: {

        getBooks(){
            const URL = `https://www.etnassoft.com/api/v1/get/?keyword=&publisher_date=2011`
            fetch(URL)
            .then(response => response.json())
            .then(data => {
                this.libros=data
                console.log(data[0])
            })

            this.allLibros= this.allLibros.concat(this.libros);


        }

    },

    mounted() {
        this.getBooks()
    }



}