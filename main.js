const app = new Vue({
  el:'#app',
  data: {
    newToDo: '',
    todos: [],
  },
  mounted() {
    if (localStorage.newToDo) {
      this.newToDo = localStorage.name;
    }
    if (localStorage.getItem('todos')) {
      try {
        this.todos = JSON.parse(localStorage.getItem('todos'));
      } catch(e) {
        localStorage.removeItem('todos');
      }
    }
  },
  methods: {
    add() {
      this.todos.push({
        text: this.newToDo,
        id: new Date().valueOf(),
        done: false
      }),
      this.newToDo='';
      this.saveToDos();
    },
    deleteToDo(i) {
      this.todos.splice(i,1);
      this.saveToDos();
    },
    completedToDo() {
      this.saveToDos();
    },
    saveToDos() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem('todos', parsed);
    }
  }
})
