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

To read: `$db('path')`
To write: `$db('path', 'value')`
To delete: `$db('path', null)`

`path` to be used according https://lodash.com/docs/4.17.15#set.

## Examples

In the template:

```html
<template>
  <p>Value: {{$db('key')}}</p>
  <p><button @click="$db('key', 'new value')">Update the Value</button></p>
  <p><button @click="$db('key', null)">Delete the Value</button></p>
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
