let { createApp } = Vue;
const dt = luxon.DateTime; 
console.log(dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT));
let dateNew = dt.now().setLocale('it').toLocaleString(dt.TIME_24_SIMPLE);
createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            dateShowed: dateNew
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            dateShowed: dateNew
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            dateShowed: dateNew
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            dateShowed: dateNew
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            dateShowed: dateNew
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            dateShowed: dateNew
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            dateShowed: dateNew
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            dateShowed: dateNew
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            dateShowed: dateNew
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            dateShowed: dateNew
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            dateShowed: dateNew
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            dateShowed: dateNew
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            dateShowed: dateNew
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            dateShowed: dateNew
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            dateShowed: dateNew
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            dateShowed: dateNew
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            dateShowed: dateNew
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            dateShowed: dateNew
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            dateShowed: dateNew
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            dateShowed: dateNew
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            dateShowed: dateNew
                        }
                    ],
                }
            ],
            myMessage:'',
            activeFriend: null,
            botMessage:['Ciao, come stai?', 'Tutto bene', 'Sono felice per te :-)', 'Piove da te?'],
            mySearch: null
        }
    },
    methods:{
        sendMessage(){
            let newDate = dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT);
            let newdateShowed = dt.now().setLocale('it').toLocaleString(dt.TIME_24_SIMPLE);
            const newSendedMsg ={
                message: this.myMessage,
                status: 'sent',
                date: newDate,
                dateShowed: newdateShowed
            };
            this.activeFriend.messages.push(newSendedMsg);
            this.myMessage='';
            let send = new Audio('/sounds/sended.mp3');
            send.play();
            setTimeout(this.randomBotMessage, 500);
        },
        activatedFriend(item, index){
            this.activeFriend = item;
            console.log(this.activeFriend);
        },
        getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        },
        randomBotMessage(){
            let msgRndm = this.botMessage[this.getRndInteger(0, this.botMessage.length - 1)];
            let newDate = dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT);
            let newdateShowed = dt.now().setLocale('it').toLocaleString(dt.TIME_24_SIMPLE);
            const botMsg = {
                message: msgRndm,
                status: 'received',
                date: newDate,
                dateShowed: newdateShowed
            };
            msgRndm = '';
            this.activeFriend.messages.push(botMsg);
            let receve = new Audio('/sounds/receved.mp3');
            receve.play();
        },
        searchingContacts(){
            if(this.mySearch === this.contacts.name){
                console.log(this.contacts.name);
            }
        }
    }
}).mount('#app');