// Filters for tasks
var filters = {
    all: function(tasks){
        return tasks;
    },
    incomplete: function(tasks){
        return tasks.filter(function(task){
            return !task.completed
        })
    },
    complete: function(tasks){
        return tasks.filter(function(task){
            return task.completed
        })
    }
}

new Vue({
    el: "#taskForm",
    methods: {
        // Add a new task from the input form
        submitTask: function(){
            // Add a new task
            this.tasks.push({
                text: this.taskText,
                completed: false
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
        },
        setFilter: function(filter){
            this.currentFilter = filter;
        }
    },

    data:{
        // Input form text
        taskText: '',
        // Tasks
        tasks: [{
            text: "hello",
            completed: true
        }],
        currentFilter: 'all'
    },

    // Computed
    computed:{
        filteredTasks: function(){
            return filters[this.currentFilter](this.tasks)
        }
    }
})