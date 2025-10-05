const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name + ' Mikado';
    },
    submitForm(event) {
      // Prevent default form submission behavior (page reload)
      // event.preventDefault();
      alert('Submitted!!');
    },
    setName(event, lastName) {
      // event.target is a vanilla JavaScript DOM element
      // this.name = event.target.value;
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
      // this.counter++;
    },
    remove(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
