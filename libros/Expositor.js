let Expositor = {
    template:`
        <div>
            <a :title="titulo" :href="'infoLibro.html?id='+code" target="_blank"><img :src="cover"/></a>
        </div>
    `,

    props: ['cover', 'code', 'titulo'],

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