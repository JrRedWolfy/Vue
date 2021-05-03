let VueDirectivas = {
    template:`
        <div>
            <p v-html="descripcion"></p>
            <directivashowif></directivashowif>
            <directivafor></directivafor>
            <directiva-model></directiva-model>
        </div>
    `,

    data(){
        return {
            descripcion: 'Este es un representante respetado, no oses faltarle al respeto'
        }
    },

    components:{
        directivashowif, 
        directivafor,
        DirectivaModel
    }

}