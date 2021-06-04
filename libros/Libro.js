
let Libro = {
    template: `
        <div>

            <div class="portada" v-for="(libro, index) in allLibros" :key="index"
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