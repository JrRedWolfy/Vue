let Biblio = {
    template: `
        <div>

            <div v-for="(libro, index) in biblioteca" :key="index"
            >
            <div class="portada">
                <expositor
                :cover="libro.cover"
                :code="libro.ID"
                :titulo="libro.title"
                ></expositor>
            </div>
            </div>

        </div>
    `,

    data(){
        return {

            biblioteca: []
        }

    },

    components:{
        Expositor
    },

    methods: {

        getBooks(){

            do {
                const URL = `https://www.etnassoft.com/api/v1/get/?keyword=&publisher_date=20${date}`
                fetch(URL)
                .then(response => response.json())
                .then(data => {
                    this.libros=data
                    this.allLibros = this.allLibros.concat(data);
                    console.log(this.allLibros)
                })
                date += 1
                

            } while (date < 20);

           
           

        }

    },



}