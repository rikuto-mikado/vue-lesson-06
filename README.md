# Vue Lesson 06 - Events and Two-Way Data Binding

## What I Learned
- Event handling with v-on:click directive
- Event modifiers (.right, .prevent, .enter) for specific event behaviors
- v-model as shorthand combining v-bind:value and v-on:input for two-way data binding
- v-model can be combined with other event listeners like v-on:keyup.enter
- $event special keyword to pass event object to methods
- Difference between data, computed, and methods in Vue
- computed properties are cached and only re-compute when dependencies change
- methods execute every time they're called
- Use computed for data-based calculations (better performance), methods for event handlers
- Methods in {{ }} require (), event handlers allow optional ()
- Computed properties in {{ }} do NOT use () - accessed like properties
- Optional parameters in methods can be omitted if not used

## Challenges
- Understanding v-model is syntactic sugar but can still work with additional event listeners
- Remembering that removing event listeners breaks dependent functionality
- Knowing when to use computed vs methods for performance optimization
