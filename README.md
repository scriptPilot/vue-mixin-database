# Database Mixin for Vue Applications

Provides a persistent "database" object for Vue applications.

## Installation

1. Run `npm install --save @scriptpilot/vue-mixin-database` to install the package
2. Add the mixin to your Vue application:

   ```js
   import Vue from 'vue'
   import databaseMixin from '@scriptpilot/vue-mixin-database'
   ...
   Vue.mixin(databaseMixin)
   ...
   new Vue(...)
   ```

## Usage

- To read: `$db('path')`
- To write: `$db('path', 'value')`
- To delete: `$db('path', null)`

`path` can be simple or nested.

## Examples

Nested path:

```js
$db('a[0].b.c', 123)
console.log($db(a[0].b)) // => { c: 123 }
```

In the template:

```html
<template>
  <div>
    <p>Value: {{$db('key')}}</p>
    <p><button @click="$db('key', 'new value')">Update the Value</button></p>
    <p><button @click="$db('key', null)">Delete the Value</button></p>
  </div>
</template>
```

In the script:

```html
<script>
  export default {
    created() {
      this.$db('key', 'old value')
    }
  }
</script>
```
