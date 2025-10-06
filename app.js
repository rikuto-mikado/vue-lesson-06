// data: Reactive state properties that can be updated
// computed: Cached properties that only re-compute when dependencies change
// methods: Functions that execute every time they're called
// Use computed for calculations based on data (better performance due to caching)
// Use methods for event handlers or when you need to re-execute logic every time
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  // computed properties are cached and only re-evaluated when their dependencies change
  computed: {
    fullName() {
      console.log('Running again...');
      if (this.name === '') {
        return '';
      }
    }
  },
  methods: {
    outputFullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Mikado';
    },
    setName(event) {
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
