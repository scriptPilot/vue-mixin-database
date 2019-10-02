# Database Mixin for Vue Applications

Provides a persistent "database" object for Vue applications.

## Installation

1. Run `npm install --save @scriptpilot/mixin-vue-db` to install the package
2. Add the mixin to your Vue application:

   ```js
   import vue from 'vue'
   import dbMixin from '@scriptpilot/vue-mixin-db'
   ...
   vue.mixin(dbMixin)
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

```js
<script>
  export default {
    created() {
      this.$db('key', 'old value')
    }
  }
</script>
```
