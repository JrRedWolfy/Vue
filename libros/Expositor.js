let Expositor = {
    template:`
        <div>
            <img :src="cover" href="infoLibro.html">
        </div>
    `,

    props: ['cover'],

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