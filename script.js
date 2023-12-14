const {createApp} = Vue;

createApp({

    data(){
        return{
            mail : []
        }
    },

    methods : {

    },

    mounted() {
        

        for (let i = 0; i <= 10; i++) {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((risposta) => {
                    
                    
                    this.mail.push(risposta.data.response)
                
                   
                })
        }
}

}).mount('#app');

