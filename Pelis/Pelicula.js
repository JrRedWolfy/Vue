const APIKEY = '7fa41e64945fa2fe482ea00acdb454be'
const BASEURL = 'https://api.themoviedb.org/3/'

let Pelicula = {
    template: `
         <div>

              <h2 v-html="titulo"></h2>

              <div v-for="(pelicula, index) in peliculas" :key="index"
              >
              <cartelera
                :id="pelicula.id"
                :title="pelicula.title"
                :synopsis="pelicula.overview"
                :cover="'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+pelicula.poster_path"
                :like.sync="pelicula.like"
               ></cartelera>
              </div>

              <div
                v-for="(pelicula, index) in peliculas" :key="'_'+index"
              >
                <h3 v-if="pelicula.like" v-text="pelicula.title"></h3>
              </div>


        </div>
    `,

    data(){
        return {

            titulo: 'Peliculas',

            peliculas: []
        }

    },

    components:{
        Cartelera
    },

    methods: {
        getPopularMovies(){
            const URL = `${BASEURL}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`
            fetch(URL)
                .then(response => response.json())
                .then(data => {
                    this.peliculas=data.results
                    console.log(data.results)
                })
        }

    },

    mounted() {
        this.getPopularMovies()
    }



}