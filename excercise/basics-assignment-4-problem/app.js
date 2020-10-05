const app =Vue.createApp({
    data(){
        return{
            classFromInput:"",
            visible:true,
            bgcolor:""
        };
    },
    computed:{
        visibility(){
            return this.visible
        },
        addClassToParagraph(){
            return {
                name:true
            };
        }        
    },
    watch:{
        classFromInput(value){
            return {
                value:true
            }
        }
    },
    methods:{
        updateClass(e){
            this.classFromInput = e.target.value
        },
        toggleVisibility(){
            this.visible = ! this.visible
        }
    }
})
app.mount("#assignment")