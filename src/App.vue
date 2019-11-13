<template>
  <!--雪花特效-->
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
    data () {
        return {
            show: false
        }
    },
  methods:{
    go(){
      this.$router.push('/Registered')
    }
  },
  mounted() {
  }
}
</script>
<style>
  body{
    margin: 0;
    padding: 0;
    background: url("./assets/img/indexBg.jpg") no-repeat center fixed;
    background-size: cover;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
