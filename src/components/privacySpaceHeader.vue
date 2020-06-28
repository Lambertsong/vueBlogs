<template>
    <div class="header">
      <div class="login">
          <img src="../assets/img/logo.png">
      </div>
      <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="4">订单管理</el-menu-item>
          <el-menu-item index="5">个人信息</el-menu-item>
        </el-menu>
      </div>
    </div>
</template>

<script>
    export default {
        name: "privacySpaceHeader",
        data(){
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods:{
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px 10px 30px;
    margin: 0 auto 0px;
  }
  .login{
    width: 50px;
  }
  .el-menu{
    background-color: transparent!important;
    color: white!important;
  }
  .el-menu.el-menu--horizontal{
    border: none;
  }
</style>
