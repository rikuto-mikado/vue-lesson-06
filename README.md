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

## Key Concepts: When to Use What

| Feature | Purpose | Use Case |
|---------|---------|----------|
| **data** | Reactive state properties | Store values that can be updated and displayed |
| **computed** | Cached calculated properties | Calculations based on data (best performance) |
| **methods** | Functions that always execute | Event handlers, actions that need fresh results |
| **watch** | React to data changes | Side effects like HTTP requests, timers, updating other data |

**Quick Rule:**
- Use **computed** for deriving values from data
- Use **methods** for event handlers and actions
- Use **watch** for side effects when data changes

## Directives Used in This Project

| Directive | Purpose | Example |
|-----------|---------|---------|
| **v-on:click** | Listen to events | `v-on:click="add(5)"` - Trigger method on click |
| **v-model** | Two-way data binding | `v-model="name"` - Sync input with data (combines v-bind + v-on:input) |
| **{{ }}** | Display data/computed | `{{ counter }}` or `{{ fullName }}` - Show reactive values |

**Shorthand Syntax:**
- `v-on:click` can be written as `@click`
- `v-bind:value` can be written as `:value`
- Both are equivalent, shorthand is more commonly used

## Challenges
- Understanding v-model is syntactic sugar but can still work with additional event listeners
- Remembering that removing event listeners breaks dependent functionality
- Knowing when to use computed vs methods for performance optimization
