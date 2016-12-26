var taskForm = new Vue({
    el: "#taskForm",
    methods: {
        // Add a new task from the input form
        submitTask: function(){
            // Add a new task
            this.tasks.push({
                text: this.taskText
            });
            // Clear the input form
            this.taskText = "";
      }  
    },
    data:{
        // Input form text
        taskText: 'Insert a new task and press "Enter" to submit',
        // Tasks
        tasks: []
    }
})