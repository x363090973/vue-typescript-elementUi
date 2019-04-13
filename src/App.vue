<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{msg}}
    <router-view/>
    <el-button>默认按钮</el-button>
      
    <HelloWorld
      need="111"
    ></HelloWorld>
  </div>
</template>

<script lang="ts">

import {Vue,Component} from 'vue-property-decorator'
import HelloWorld from "@/components/HelloWorld.vue";


@Component({

  name: 'app',

  components:{
    HelloWorld
  }

})

export default class App extends Vue {

  msg = '欢迎来到vue'

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
