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
    },
    resetInput() {
      // Don't manipulate DOM directly in Vue.js - use this.name = '' instead since input is bound with v-model
      // document.querySelector('input').value = '';
      this.name = '';
    },
  }
});

app.mount('#events');
