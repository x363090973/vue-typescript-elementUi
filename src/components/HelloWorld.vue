<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{need}}</h2>

  </div>
</template>

<script lang="ts">

import {Vue,Component, Prop} from 'vue-property-decorator'

@Component({})
export default class HelloWorld extends Vue {
    msg:string = 'Welcome to Your Vue.js App'
    @Prop(Number) readonly need!: number
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
