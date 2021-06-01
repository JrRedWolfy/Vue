let Expositor = {
    template:`
        <div class="portada">
            <h2> {{title | mayusculas}} </h2>
            <img :src="cover">
        </div>
    `,

    props: ['title', 'cover'],

    data(){
        return {
        
        }
    },

    filters:{
        mayusculas(value){
            return value.toUpperCase()
        }
        
    },

}