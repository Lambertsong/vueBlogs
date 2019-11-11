<template>
  <div>
    <div class="headerAll">
      <let-it-snow
        v-bind="snowConf"
        :show="show"
      ></let-it-snow>
      <header class="header">
        <div>
          <img src="../assets/logo.png">
        </div>
        <ul>
          <li>
            <router-link class="li" to="/">
              <div class="header_list">
                <img src="../assets/home.png" alt="">
              </div>
              <div>首页</div>
            </router-link>
          </li>
          <li>
            <router-link class="li" to="/contentSubregion">
              <div class="header_list">
                <img src="../assets/suggestion.png" alt="">
              </div>
              <div>个人笔记</div>
            </router-link>
          </li>
          <li>
            <router-link class="li" to="/template">
              <div class="header_list">
                <img src="../assets/favoriteslist.png" alt="">
              </div>
              <div>小故事</div>
            </router-link>
          </li>
          <li>
            <router-link class="li" to="/contentSubregion">
              <div class="header_list">
                <img src="../assets/voiceprint.png" alt="">
              </div>
              <div>更多功能</div>
            </router-link>
          </li>
        </ul>
      </header>
    </div>
    <router-view></router-view>
    <!--尾部-->
    <div class="footer">
      <div class="footer_img">
        <img src="../assets/005Kin8igy1fxmmsr924rg302r031t8n.gif" alt="">
      </div>
      <div>友情提示：本博客所有资源，均来自网络，如有侵权，请联系删除</div>
      <div>Copyright©2019羊羊博客 <img src="../assets/005Kin8igy1fwgqbuez9gj300i00j3y9.jpg" alt="">豫ICP备18020296号</div>
      <div>
        <img src="../assets/005Kin8igy1fx545g9zong305c00rwed.gif" alt="">
      </div>
      <div>
        <span  style="background-color: #5d99cd;margin-right: 5px;padding: 3px;color: white">Powered by Emlog</span>
        <span  style="background-color: #5d99cd;margin-right: 5px;padding: 3px;color: white">· Theme by 羊羊羊博客</span>
        <span  style="background-color: #5d99cd;margin-right: 5px;padding: 3px;color: white">|  导航地图</span></div>
    </div>
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
          console.log(123132);
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
</style>
