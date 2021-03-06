
/*
    Partendo dal markup consegnate rendere dinamici tutti i contenuti (foto e testi) e al click su una thumb, visualizzare in grande l’immagine corrispondente
*/
const app = new Vue({

    el:'#app',
    data:{
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],

        curentSlideIndex: 0,
        isOver: false,
        autoScroll: null,
    },


    methods: {
        nextSlide(){
            this.curentSlideIndex++;
            if(this.curentSlideIndex > (this.slides.length - 1)){
                this.curentSlideIndex = 0;
            }
        },


        prevSlide(){
            this.curentSlideIndex--;
            if(this.curentSlideIndex < 0){
                this.curentSlideIndex = this.slides.length - 1;
            }
        },

        changeSlide(index){
            this.curentSlideIndex = index;
        },


        
        /*
        Aggiunta del bonus, metodo visto durante la correzione
        */
        mouseOver(){
            console.log('SONO SOPRA');
             clearInterval(this.autoScroll);
             this.autoScroll = null;
        },
        
        mouseOut(){
            console.log('SONO FUORI');
            this.startAutoscroll();
        },

        startAutoscroll(){
            this.autoScroll = setInterval(()=>{
                this.nextSlide()
            }, 1500);
        }
    }, 

    mounted() {
        this.startAutoscroll();
    }
});
