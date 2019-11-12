<template>
  <div class="content">
    <div class="content_left">
      <contentLeft></contentLeft>
    </div>
    <div  class="content_right">
      <contentRight></contentRight>
    </div>
  </div>
</template>
<script>
    import contentLeft from '../components/contentLeft';
    import contentRight from '../components/contentRight';
    export default {
        name: "contentSubregion",
        components:{
            'contentLeft': contentLeft,
            'contentRight': contentRight
        },
    }
</script>
<style scoped>
  .content{
    /*width: 80%;*/
    margin: 78px auto 0;
    display: flex;
  }
  @media (min-width: 768px){
    .content {
      width: 750px;
    }
  }
  @media (min-width: 992px)
  {
    .content {
      width: 970px;
    }
  }
  @media (min-width: 1200px)
  {
    .content {
      width: 1170px;
    }
  }
  .content_left{
    width: 70%;
    /*height: 100px;*/
    /*background-color: red;*/
    margin-right: 4px;
  }
  .content_right{
    width: 30%;
    /*height: 100px;*/
    /*background-color: cornflowerblue;*/
    margin-left: 4px;
  }
</style>
