<template>
  <div id="app">
    <el-container>
      <el-header>这是一个正在成长的小网页</el-header>
      <el-container class="main-contant">
        <!-- 侧边导航栏 -->
        <el-aside width="200px">
          <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              :default-active="'/pages/scanner/workPage'"
              >
              <el-menu-item index="/pages/scanner/workPage">
                <i class="el-icon-printer"></i>
                <span slot="title">操作扫描仪</span>
              </el-menu-item>
              <el-menu-item index="/pages/scanner/uploadProgress">
                <i class="el-icon-upload"></i>
                <span slot="title">上传进度表</span>
                </el-badge>
              </el-menu-item>
              <el-menu-item index="/pages/scanner/historyPage">
                <i class="el-icon-picture"></i>
                <span slot="title">历史记录册</span>
              </el-menu-item>
            </el-menu>
        </el-aside>
        <!-- 主要内容展示框 -->
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <!-- 底部说明 -->
          <el-footer>本网站用来学习交流</el-footer>
        </el-container>
      </el-container>
    </el-container>
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

<style lang='scss'>
@import "@/style/global.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  >.el-container {
    height: 100%;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .main-contant {
    height: calc(100% - 60px);
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    
  }
  
  body > .el-container {
    margin-bottom: 40px;
  
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
}
</style>
