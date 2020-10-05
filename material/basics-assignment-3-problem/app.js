const app = Vue.createApp({
    data(){
        return {
            number:0,
            result:0
        };
    },
    methods:{
        add(number){
            this.result = this.result + number
        }
    },
    computed:{
        calculate(){
            if(this.result<=37){
                return "Not there yet"
            }else if(this.result>37){
                return "Too much!"
            }
        }
    },
    watch:{
        result(value,oldvalue){
            if(value!==oldvalue){
                const that = this
                setTimeout(function(){
                    that.result = 0;
                },5000)
            }
        }
    }
})

app.mount('#assignment')