
let Libro = {
    template: `
        <div>

        </div>
    `,

    data(){
        return {

            titulo: '???',

            libros: []
        }

    },

    components:{
        Expositor
    },

    methods: {

        getBooks(){
            const URL = `https://www.etnassoft.com/api/v1/get/?id=1&callback=?`
            fetch(URL)
                .then(response => response.json())
                .then(data => {
                    this.libros=data
                    console.log(data[0])
                })

        }

    },

    mounted() {
        this.getBooks()
    }



}