const dt = luxon.DateTime;
const { createApp } = Vue;

createApp(
    {
        data(){
            return {
                contacts: [
                        {
                            id:1,
                            name: 'Michele',
                            avatar: './img/avatar_1.jpg',
                            visible: true,
                            messages: [
                                {
                                    date: '10/01/2020 15:30:55',
                                    message: 'Hai portato a spasso il cane?',
                                    status: 'sent',
                                    drop: false,
                                    removed: false
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Ricordati di stendere i panni',
                                    status: 'sent',
                                    drop: false,
                                    removed: false
                                },
                                {
                                    date: '10/01/2020 16:15:22',
                                    message: 'Tutto fatto!',
                                    status: 'received',
                                    drop: false,
                                    removed: false
                                }
                            ],
                        },
                        {
                            id:2,
                            name: 'Fabio',
                            avatar: './img/avatar_2.jpg',
                            visible: true,
                            messages: [
                                {
                                    date: '20/03/2020 16:30:00',
                                    message: 'Ciao come stai?',
                                    status: 'sent',
                                    drop: false,
                                    removed: false
                                },
                                {
                                    date: '20/03/2020 16:30:55',
                                    message: 'Bene grazie! Stasera ci vediamo?',
                                    status: 'received',
                                    drop: false,
                                    removed: false
                                },
                                {
                                    date: '20/03/2020 16:35:00',
                                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                    status: 'sent',
                                    drop: false,
                                    removed: false
                                }
                            ],
                        },
                        {
                            id:3,
                            name: 'Samuele',
                            avatar: './img/avatar_3.jpg',
                            visible: true,
                            messages: [
                                {
                                    date: '28/03/2020 10:10:40',
                                    message: 'La Marianna va in campagna',
                                    status: 'received',
                                    drop: false,
                                    removed: false
                                },
                                {
                                    date: '28/03/2020 10:20:10',
                                    message: 'Sicuro di non aver sbagliato chat?',
                                    status: 'sent',
                                    drop: false,
                                    removed: false
                                },
                                {
                                    date: '28/03/2020 16:15:22',
                                    message: 'Ah scusa!',
                                    status: 'received',
                                    drop: false,
                                    removed: false
                                }
                            ],
                        },
                        {
                            id:4,
                            name: 'Alessandro B.',
                            avatar: './img/avatar_4.jpg',
                            visible: true,
                            messages: [
                                {
                                    date: '10/01/2020 15:30:55',
                                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                                    status: 'sent',
                                    drop: false,
                                    removed: false
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Si, ma preferirei andare al cinema',
                                    status: 'received',
                                    drop: false,
                                    removed: false
                                }
                            ],
                        },
                        {
                            id:5,
                            name: 'Alessandro L.',
                            avatar: './img/avatar_5.jpg',
                            visible: true,
                            messages: [
                                {
                                    date: '10/01/2020 15:30:55',
                                    message: 'Ricordati di chiamare la nonna',
                                    status: 'sent',
                                    drop: false,
                                    removed: false
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Va bene, stasera la sento',
                                    status: 'received',
                                    drop: false,
                                    removed: false
                                }
                            ],
                        },
                        {
                            id:6,
                            name: 'Claudia',
                            avatar: './img/avatar_5.jpg',
                            visible: true,
                            messages: [
                                {
                                    date: '10/01/2020 15:30:55',
                                    message: 'Ciao Claudia, hai novità?',
                                    status: 'sent',
                                    drop: false,
                                    removed: false
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Non ancora',
                                    status: 'received',
                                    drop: false,
                                    removed: false
                                },
                                {
                                    date: '10/01/2020 15:51:00',
                                    message: 'Nessuna nuova, buona nuova',
                                    status: 'sent',
                                    drop: false,
                                    removed: false
                                }
                            ],
                        },
                        {
                            id:7,
                            name: 'Federico',
                            avatar: './img/avatar_7.jpg',
                            visible: true,
                            messages: [
                                {
                                    date: '10/01/2020 15:30:55',
                                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                                    status: 'sent',
                                    drop: false,
                                    removed: false
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                                    status: 'received',
                                    drop: false,
                                    removed: false
                                }
                            ],
                        },
                        {
                            id:8,
                            name: 'Davide',
                            avatar: './img/avatar_8.jpg',
                            visible: true,
                            messages: [
                                {
                                    date: '10/01/2020 15:30:55',
                                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                                    status: 'received',
                                    drop: false,
                                    removed: false
                                },
                                {
                                    date: '10/01/2020 15:50:00',
                                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                                    status: 'sent',
                                    drop: false,
                                    removed: false
                                },
                                {
                                    date: '10/01/2020 15:51:00',
                                    message: 'OK!!',
                                    status: 'received',
                                    drop: false,
                                    removed: false
                                }
                            ],
                        }
                ],
                activeIndex: 0,
                newTxt: '',
                newMsg: {
                    date: '',
                    message: '',
                    status: 'sent',
                    drop: false,
                    removed: false
                },
                autoMsg: {
                    date: '',
                    message: 'ok',
                    status: 'received',
                    drop: false,
                    removed: false
                },
                searchTxt: '',
            }
        },
        methods : {
            checkIndex(id){
                    this.activeIndex = this.contacts.findIndex((contact) => contact.id ===id);
            },
            autoRx(){
                this.autoMsg.date = dt.now().setLocale('it').toFormat('dd/LL/yyyy TT');
                this.contacts[this.activeIndex].messages.push(this.autoMsg);
            },
            sendMsg(){
                if (this.newTxt.trim() ===''){
                    return
                }
                this.newMsg = {
                    date: dt.now().setLocale('it').toFormat('dd/LL/yyyy TT'),
                    message: this.newTxt,
                    status: 'sent',
                    drop: false
                }
                this.contacts[this.activeIndex].messages.push(this.newMsg);
                setTimeout(this.autoRx, 1000);
                this.newTxt = '';
                this.autoMsg.date = '';
            },
            searchContact(){
                /**
                 * Salvo l'input in searchTxt - 
                 * prendo l'array (i nomi) e per ognuno faccio il match: se l'input è contenuto è visibile
                 * se l'input non è contenuto visibile false
                 */
                for (contact of this.contacts){
                    if (contact.name.toLowerCase().match(this.searchTxt)){
                        contact.visible= true;
                    } else {
                        contact.visible= false;
                    }
                };
            },
            deleteMsg(i){
                this.contacts[this.activeIndex].messages[i].removed = true;
                //this.contacts[this.activeIndex].messages[i] = {};
                //dà errore per la presenta di .slice 
                //restano il button e il dropopts
            }
        }
        // mounted(){

        // }
    }
).mount('#app');