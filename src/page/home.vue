<template>
  <div>
    <div class="headerAll">
      <let-it-snow
        v-bind="snowConf"
        :show="show"
      ></let-it-snow>
      <header class="header">
        <div>
          <img src="../assets/img/logo.png">
        </div>
        <ul>
          <li>
            <router-link class="li" to="/">
              <div class="header_list">
                <img src="../assets/img/home.png" alt="">
              </div>
              <div>首页</div>
            </router-link>
          </li>
          <li>
            <router-link class="li" to="/contentSubregion">
              <div class="header_list">
                <img src="../assets/img/suggestion.png" alt="">
              </div>
              <div>个人笔记</div>
            </router-link>
          </li>
          <li>
            <router-link class="li" to="/template">
              <div class="header_list">
                <img src="../assets/img/favoriteslist.png" alt="">
              </div>
              <div>小故事</div>
            </router-link>
          </li>
          <li>
            <router-link class="li" to="/prefecture">
              <div class="header_list">
                <img src="../assets/img/voiceprint.png" alt="">
              </div>
              <div>更多功能</div>
            </router-link>
            <div class="options">
              <div class="region">
                VIP专区
              </div>
              <div class="region" @click="intimity()">
                私密空间
              </div>
            </div>
          </li>
        </ul>
      </header>
    </div>
    <router-view></router-view>
    <!--尾部-->
    <div class="footer">
      <div class="footer_img">
        <img src="../assets/img/005Kin8igy1fxmmsr924rg302r031t8n.gif" alt="">
      </div>
      <div>友情提示：本博客所有资源，均来自网络，如有侵权，请联系删除</div>
      <div>Copyright©2019羊羊博客 <img src="../assets/img/005Kin8igy1fwgqbuez9gj300i00j3y9.jpg" alt="">豫ICP备18020296号</div>
      <div>
        <img src="../assets/img/005Kin8igy1fx545g9zong305c00rwed.gif" alt="">
      </div>
      <div>
        <span  style="background-color: #5d99cd;margin-right: 5px;padding: 3px;color: white">Powered by Emlog</span>
        <span  style="background-color: #5d99cd;margin-right: 5px;padding: 3px;color: white">· Theme by 羊羊羊博客</span>
        <span  style="background-color: #5d99cd;margin-right: 5px;padding: 3px;color: white">|  导航地图</span></div>
    </div>
    <!--弹出自定义-->
    <div></div>
  </div>
</template>
<script>
  let topHeader=0;
  import ChoosingCity from '../components/homeContent';
    export default {
        name: "home",
      data() {
        return {
            snowConf: {
                windPower : 0,
                speed : 1,
                count : 20,
                size : 10,
                opacity : 1,
                images: ['http://jstest.czkids.cn/JHZicon/images/xue1.png',
                    'http://jstest.czkids.cn/JHZicon/images/xue2.png',
                    'http://jstest.czkids.cn/JHZicon/images/xue3.png']
            },
            show: false
        };
      },
      components:{
        'ChoosingCity': ChoosingCity
      },
      watch: {
        scroll: function () {
          this.loadSroll()
        }
      },
      methods:{
        go(){
          this.$router.push('/Registered')
        },
        minute(){
          this.$router.push('/home/contentSubregion')
        },
        dataScroll:function () {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          if(topHeader > scrollTop){
            topHeader = scrollTop;
            $(".header").slideDown()
          }else {
            topHeader = scrollTop;
            $(".header").slideUp()
          }
        },
        intimity:function () {
            var that = this;
            layer.prompt({title: '我最爱的人是谁？注意是全拼哦！', formType: 1}, function(pass, index){
                layer.close(index);
                if (pass == "zhangxuejie"){
                    console.log("wojinlaile1");
                    that.$router.push('/privacySpace')
                }else {
                    layer.msg('很遗憾，你并不知道！', {icon: 5});
                }
            });
        }
      },
      mounted() {
          this.show = true;
          window.addEventListener('scroll', this.dataScroll);
      }
    }
</script>
<!--头部css-->
<style scoped>
  .headerAll{
    width: 100%;
    background-color: white;
    position: fixed;
    top: 0;
    z-index: 666;
    border-bottom: 1px solid #eeeeee;
  }
  header{
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 10px 30px 10px 30px;
    align-items: center;
    background-color: white;
    margin: 0 auto 0px;
  }
  @media (min-width: 768px){
    header {
      width: 750px;
    }
  }
  @media (min-width: 992px)
  {
    header {
      width: 970px;
    }
  }
  @media (min-width: 1200px)
  {
    header {
      width: 1170px;
    }
  }
  header img{
    width: 50px;
  }
  ul{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
  }
  li{
    width: 25%;
    list-style: none;
    font-size: 15px;
    border-right: 1px solid #aaa;
  }
  .li{
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    out-line: none;
    color: #000000;
  }
  li:nth-child(4){
    border: none;
  }
  .header_list img{
    width: 25px;
    margin-right: 5px;
  }
  .header_list{
    height: 25px;
  }
</style>
<!--底部css-->
<style>
  .footer{
    background-color: white;
    width: 100%;
    font-size: 13px;
    line-height: 20px;
    color: #666;
    padding-bottom: 15px;
    margin-top: 15px;
  }
  .footer img{
    width: auto;
    height: auto;
  }
  .footer_img img{
    width: 50px;
  }
 /*日历*/
  .wh_content_all[data-v-2ebcbc83]{
    background-color: white!important;
  }
  .wh_content_item[data-v-2ebcbc83]{
    color: #000!important;
  }
  .wh_top_changge li[data-v-2ebcbc83]{
    color: white!important;
    font-size: 14px;
  }
  .wh_jiantou2[data-v-2ebcbc83] {
    width: 6px;
    height: 6px;
    border-top: 2px solid white;
    border-right: 2px solid white;
    transform: rotate(45deg);
  }
  .wh_jiantou1[data-v-2ebcbc83] {
    width: 6px;
    height: 6px;
    border-top: 2px solid white;
    border-left: 2px solid white;
    transform: rotate(-45deg);
  }
  .wh_content_item .wh_isToday[data-v-2ebcbc83]{
    background-color: #19b5fe!important;
    color: white;
  }
  .right_calendar{
    margin-top: 8px;
  }
  .calendar_header{
    background-color: white;
    display: flex;
    align-items: center;
    padding: 8px;
  }
  .calendar_header img{
    width: 13px;
    height: 13px;
    margin-right: 7px;
  }
  .calendar_header span{
    font-size: 15px;
  }
  .wh_top_changge[data-v-2ebcbc83]{
    background: linear-gradient(90deg, rgba(229,80,138,0.5) 0%, rgba(5,209,211,0.5) 100%);
  }
  .wh_top_changge li[data-v-2ebcbc83]{
    height: 35px;
  }
  .wh_content_item .wh_chose_day[data-v-2ebcbc83] {
    background-color: #19b5fe!important;
    color: white;
    border-radius: 100px;
  }
  @media screen and (min-width: 460px){
    .wh_item_date[data-v-2ebcbc83]:hover {
      background: #8DDFFE;
      border-radius: 50%;
      cursor: pointer;
    }
  }
/* 选项*/
  li{
    position: relative;
  }
  li:hover .options{
    /*height:auto;*/
    /*transition: all 0.6s;*/
    /*overflow: auto;*/
    opacity: 1;
  }
  .options{
    /*height: 0px;*/
    position: absolute;
    top: 35px;
    left: 0;
    background-color: #eeeeee;
    /*border: 1px solid #aaaaaa;*/
    width: 104%;
    border-radius: 4px;
    box-shadow: 0 5px 8px #aaaaaa;
    opacity: 0;
    overflow: hidden;
    transition: all 1s ease;
  }
  .region{
    padding: 10px;
    /*border-bottom: 1px solid #ffffff;*/
  }
  .icon{
    width: 0;
    height: 0;
    border: 10px solid #eeeeee;
    border-top: none;
    border-right-color: transparent;
    border-left-color: transparent;
    /*绝对位置*/
    position: absolute;
    /*将小三角形向下移90个像素*/
    top: -9px;
    /*将小三角形向右移10个像素*/
    left: calc(104%/2 - 15px);
  }
</style>
