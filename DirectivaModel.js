let DirectivaModel = {
    template:`
        <div>
            <h2 v-html="titulo"></h2>
            <input v-model="inputText">
            <h2> Tipo Checkbox </h2>
            <label>
                <input type="checkbox" v-model="checked">
                {{ checked ? "Activado": "Desactivado" }}
            </label>

            <h2> Marca las peliculas que has visto </h2>

            <label
                v-for="(pelicula, index) in peliculas" :key="index"
            >
                <input type="checkbox" :value="pelicula" v-model="peliculasVistas">
                {{ pelicula }}

            </label>
            {{ peliculasVistas }}

            <h2> Peliculas favoritas Objetos </h2>

            <label
                v-for="(pelicula, index) in peliculasObjeto" :key="'_'+index"
            >
                <input type="checkbox" :value="pelicula.id" v-model="peliculasVistasObjeto">
                {{ pelicula.nombre }}

            </label>
            {{ peliculasVistasObjeto }}
        </div>
    `,

    data(){
        return {
            titulo: 'Directiva Model',
            inputText: 'datos Input',
            checked: true,

            peliculas: ['Coraline','Up','Godzilla vs Kong'],
            peliculasVistas: [],

            peliculasObjeto: [
                {
                    nombre: 'Buscado',
                    id: 0
                },
                {
                    nombre: 'Fear',
                    id: 1
                },
                {
                    nombre: 'Final',
                    id: 2
                }
            ],

            peliculasVistasObjeto: []




        }
    }

}