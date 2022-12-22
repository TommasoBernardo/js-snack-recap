/***
Chiedere all'API 10 nomi da inserire in un array di invitati.
Una volta generata la lista chiedere all'utente di dire il proprio nome.
Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
*/

//dichiaro una variabile con un nuovo Vue
let app = new Vue({
    el : '#container',
    data: {
//array per le 10 email randomiche 
        emails: [],
    },

    mounted(){
        //creo un ciclo for per creare le 10 email randomiche
        for( let i = 0 ; i < 10 ; i++){
            //api
            axios.get('https://flynn.boolean.careers/exercises/api/random/name')
            .then((generatedEmail)=>{
                //pusho le email nell'array
                this.emails.push(generatedEmail.data.response);
            })
        }
        //visualizzo emails
        console.log(this.emails);
    }
})