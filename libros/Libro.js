
let Libro = {
    template: `
        <div>

            <div v-for="(libro, index) in allLibros" :key="index"
            >
            <div class="portada">
                <expositor
                :cover="libro.cover"
                :code="libro.ID"
                :icono="libro.thumbnail"
                :autor="libro.author"
                :titulo="libro.title"
                :contenido="libro.content_short"
                :pages="libro.pages"
                :idioma="libro.language"
                :publicado="libro.publisher_date"
                :descarga="libro.url_details"

                ></expositor>
            </div>
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

            date = 02

            do {
                const URL = `https://www.etnassoft.com/api/v1/get/?keyword=&publisher_date=20${date}`
                fetch(URL)
                .then(response => response.json())
                .then(data => {
                    this.libros=data
                    this.allLibros = this.allLibros.concat(data);
                    console.log(this.allLibros)
 //                   console.log(data)
                })
                date += 1
                

            } while (date < 20);

           
           

        }

    },

    mounted() {
        this.getBooks()
    }



}