const app = Vue.createApp({
  data() {
    return {
      goalInput:'', 
      goals: [] 
    };
  },
  computed:{
    isGoalEmpty(){
      return !Boolean(this.goals.length)
    }
  },
  methods:{
    addGoal(){
      this.goals.push(this.goalInput)
      this.goalInput = ""
    },
  }
});

app.mount('#user-goals');
