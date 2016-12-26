new Vue({
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
        },
        deleteTask: function(task){
            var index = this.tasks.indexOf(task);
            this.tasks.splice(index, 1);
        },
        clearTasks: function(){
            this.tasks = [];
        }
    },
    data:{
        // Input form text
        taskText: '',
        // Tasks
        tasks: [{
            text: "hello"
        }]
    }
})