// data: Reactive state properties that can be updated
// computed: Cached properties that only re-compute when dependencies change
// methods: Functions that execute every time they're called
// watch: Functions that react to data changes and execute side effects
// Use computed for calculations based on data (better performance due to caching)
// Use methods for event handlers or when you need to re-execute logic every time
// Use watch for side effects like HTTP requests, timers, or updating other data based on changes
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: '',
      // Could use computed for fullname, but using data + watch keeps it simpler for this case
      // fullname: '',
    };
  },
  // watch: Functions that automatically run when specific data properties change
  watch: {
    // Automatically reset counter to 0 after 2 seconds when it exceeds 50
    counter(value) {
      if (value > 50) {
        // Store reference to Vue instance because 'this' changes inside setTimeout's function
        // Use 'that' to access the Vue instance from within the setTimeout callback
        const that = this;
        setTimeout(function() {
          that.counter = 0;
        }, 2000);
      }
    }
    // // The 'value' parameter receives the new value of the watched property
    // // This allows us to access the updated value without using 'this.name'
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastname;
    //   }
    // },
    // lastname(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },
  // computed properties are cached and only re-evaluated when their dependencies change
  computed: {
    fullName() {
      console.log('Running again...');
      if (this.name === '' || this.lastname === '') {
        return '';
      }
      return this.name + ' ' + this.lastname;
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
