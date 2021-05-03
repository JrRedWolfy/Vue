let directivashowif = {
    template:`
        <div>
            <h2 v-html="titulo"></h2>
            <p v-show="mostrar" v-html="mensaje"></p>
            <p v-if="user.permiso">Fin de la Cita</p>
            <p v-if="!user.permiso">No es el fin de la Cita</p>
            <button @click="user.permiso=!user.permiso">Permiso</button>
        </div>
    `,

    data(){
        return {
            titulo: 'O atente a las consecuencias',
            mensaje: '<strong style="color:red">Muerte por Nosnu</strong>',
            mostrar: true,
            user: {
                permiso: false
            }
        }
    }

}