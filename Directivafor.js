let directivafor = {
    template:`
        <div>
            <h2 v-html="titulo"></h2>

            <h3>Listar un Array</h3>
            <ul>
                <li v-for="(color, index) in lista" :key="index" v-show="index==mostrar">{{index + 1}}.- {{ color }}</li>
            </ul>
            <button @click="restarUno()">-</button>
            <button @click="sumarUno()">+</button>
            {{ mostrar }}

            <h3>Listar Objeto</h3>

            <ul>
                <li
                    v-for="(profesor, key) in arrayObjetos" :key="key"
                >
                Nombre: {{ profesor.nombre }}<br>
                Apellido: {{ profesor.apellido }}<br>
                Profesion: {{ profesor.profesion }}<br>&nbsp;
                </li>

            </ul>



        </div>
    `,

    data(){
        return {
            titulo: 'Directiva For',
            lista: ['azul','rojo','verde','cian','amarillo'],

            mostrar: 0,

            objeto: {
                nombre: 'Wolf',
                apellido: 'Reaper',
                profesion: 'Biologo del Mesozoico'

            },

            arrayObjetos: [
                {
                    nombre: 'Lian',
                    apellido: 'Mendes',
                    profesion: 'Politico'
                },
                {
                    nombre: 'Carlo',
                    apellido: 'Idemus',
                    profesion: 'Minero'
                }
            ]

        }
    },
    
    methods: {
        sumarUno(){
            if(this.mostrar < this.lista.length - 1){
                this.mostrar++
            }
        },

        restarUno(){
            if(this.mostrar > 0){
                this.mostrar--
            }
        }
    },

}