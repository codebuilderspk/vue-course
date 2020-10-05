const app = Vue.createApp({
    data(){
        return {
            user:{
                name:"Waqar Hussain",
                age:24,
                image:"image.jpg"
            }
        };
    },
    methods:{
        agein5(){
            return this.user.age + 5;
        },
        random(){
            return Math.random()
        }
    }
})
app.mount('#assignment')