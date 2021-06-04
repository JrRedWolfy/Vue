let Expositor = {
    template:`
        <div>
            <img :src="cover">
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