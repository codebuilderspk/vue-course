const app = Vue.createApp({
    data(){
        return{
            taskInput:"",
            tasks:[],
            taskVisible:true
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.taskInput)
            this.taskInput = ""
        },
        toggleTask(){
            this.taskVisible = ! this.taskVisible
        }
    }

})
app.mount("#assignment")