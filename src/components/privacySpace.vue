<template>
   <!-- 私密空间 -->
  <div>
    <el-container>
      <el-header>
        <privacySpaceHeader></privacySpaceHeader>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <leftMenu></leftMenu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view name="as"></router-view>
          </el-main>
          <el-footer>
            <privacySpaceFooter></privacySpaceFooter>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script >
    import leftMenu from '../components/leftMenu'; //左侧菜单栏
    import privacySpaceHeader from '../components/privacySpaceHeader'; //顶部
    import privacySpaceFooter from '../components/privacySpaceFooter'; //顶部

    export default {
        name: "privacySpace",
        data() {
            return {
                isCollapse: true
            };
        },
        components:{
            'leftMenu': leftMenu,
            'privacySpaceHeader':privacySpaceHeader,
            "privacySpaceFooter":privacySpaceFooter
        },
        methods: {

        }
    }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
    height: 100%;
  }

  body > .el-container {
    margin-bottom: 40px;
    height: 100%;
  }
  .el-header{
    height: auto!important;
  }
  .el-footer{
    height: auto!important;
    padding: 0!important;
  }
</style>
