<template>
  <div id="content" class="hello">
    <!--雪花特效-->
    <let-it-snow
      v-bind="snowConf"
      :show="show"
    ></let-it-snow>
    <!--公示牌-->
    <div class="billboard">
      <div class="billboard_turnoff">
        <img src="../assets/turnoff1.jpg" alt="">
      </div>
      <div class="billboard_content">
        <div class="plate">2019年，祝大家“诸”事吉祥</div>
      </div>
    </div>
    <div class="content">
      <!--主体部分-->
      <div class="content_left">
        <div class="swiper">
          <swiper :options="swiperOption">
            <swiper-slide>
              <img style="height: 200px" src="../assets/itme1.jpg"/>
            </swiper-slide>
            <swiper-slide>
              <img style="height: 200px" src="../assets/itme2.jpg"/>
            </swiper-slide>
            <swiper-slide>
              <img style="height: 200px" src="../assets/itme4.jpg"/>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="animated fadeInUp">
          <div class="content_title">
            <div class="content_text">
              这是一个dome项目希望我能完成他，我也要通过这个对vue进行学习。（2019年10月16日）
            </div>
          </div>
        </div>
        <div class="content_menu">
          <div class="menu_list">
            <div class="menu_img">
              <img src="../assets/faimlyalbum.png" alt="">
            </div>
            <div class="list_genre">相册图库</div>
            <div class="list_introduce">相册库的介绍</div>
          </div>
          <div class="menu_list">
            <div class="menu_img">
              <img src="../assets/address.png" alt="">
            </div>
            <div class="list_genre">网站地图</div>
            <div class="list_introduce">站点简易通道</div>
          </div>
          <div class="menu_list">
            <div class="menu_img">
              <img src="../assets/suggestion.png" alt="">
            </div>
            <div class="list_genre">文章归档</div>
            <div class="list_introduce">所有文章的归纳处</div>
          </div>
          <div class="menu_list">
            <div class="menu_img">
              <img src="../assets/favoriteslist.png" alt="">
            </div>
            <div class="list_genre">视频分享</div>
            <div class="list_introduce">想看什么视频请说</div>
          </div>
          <div class="menu_list">
            <div class="menu_img">
              <img src="../assets/schedule.png" alt="">
            </div>
            <div class="list_genre">留言互动</div>
            <div class="list_introduce">不要打广告哦</div>
          </div>
          <div class="menu_list">
            <div class="menu_img">
              <img src="../assets/addresslist.png" alt="">
            </div>
            <div class="list_genre">我的邻居</div>
            <div class="list_introduce">我的亲爱的小伙伴</div>
          </div>
        </div>
        <div class="content_user">
          <div class="user_header">
            <div style="color: #FF5E5C;font-weight: 600">活跃用户</div>
            <div>排行</div>
          </div>
          <div class="user_photo">
            <div class="user_list">
              <img src="../assets/indexBg.jpg" alt="">
              <img class="vip" src="../assets/icn.png" alt="">
            </div>
            <div class="user_list">
              <img src="../assets/logo.png" alt="">
              <img class="vip" src="../assets/icn.png" alt="">
            </div>
            <div class="user_list">
              <img src="../assets/2.png" alt="">
              <img class="vip" src="../assets/icn.png" alt="">
            </div>
            <div class="user_list">
              <img src="../assets/4.png" alt="">
              <!--<img class="vip" src="../assets/icn.png" alt="">-->
            </div>
          </div>
        </div>
        <div class="content_video">
          <!--单独图片大小-->
          <div class="video">
            <img src="../assets/video1.jpg" alt="">
            <div class="hint">
              <div>视频播放的地方，经我正版授权</div>
            </div>
          </div>
          <!--多个图片列表-->
          <div class="video_ul">
            <div class="video_list">
              <img src="../assets/git1.gif" alt="">
              <div class="hint_list">
                <div>最好看的动漫</div>
              </div>
            </div>
            <div class="video_list">
              <img src="../assets/git2.jpg" alt="">
              <div class="hint_list">
                <div>高级学习地址</div>
              </div>
            </div>
            <div class="video_list">
              <img src="../assets/git3.gif" alt="">
              <div class="hint_list">
                <div>学习聚集地</div>
              </div>
            </div>
            <div class="video_list">
              <img src="../assets/git4.jpg" alt="">
              <div class="hint_list">
                <div>学习环境的配置，但是属于测试阶段</div>
              </div>
            </div>
          </div>
        </div>
        <!--公告部分-->
        <div class="content_announcement">
          <div class="text">这个博客是我写这练练手的，以后会持续更新，会慢慢更完善的!</div>
          <div class="resources">本站共分享了 <span style="color: red">100</span> 个资源</div>
        </div>
        <!--广告图片-->
        <div class="content_advertising">
          <img src="../assets/advertising.jpg" alt="">
        </div>
        <!--内容部分-->
        <div>
          <div class="section section_list animated yin" v-for="(item, index) in list" :key="index">
            <div>
              <img :src="item.img" alt="">
            </div>
            <div class="content_list">
              <h2>{{item.title}}</h2>
              <div class="list_text">
                {{item.content}}
              </div>
              <div class="list_style">
                <div class="list_user">
                  <img src="../assets/indexBg.jpg" alt="">
                  <span>{{item.user}}</span>
                </div>
                <div class="list_user">
                  <img src="../assets/favoriteslist.png" alt="">
                  <span>{{item.style}}</span>
                </div>
                <div class="list_user">
                  <img src="../assets/history.png" alt="">
                  <span>{{item.time}}</span>
                </div>
                <div class="list_user">
                  <img src="../assets/respond.png" alt="">
                  <span>16</span>
                </div>
                <div class="list_user">
                  <img src="../assets/eye_protection.png" alt="">
                  <span>{{item.discuss}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--分页-->
        <div class="page">
          <div class="page_quantity">1</div>
          <div class="next">下一页</div>
          <div class="next">尾页</div>
          <div class="page_all">共17页</div>
        </div>
      </div>
      <!--广告及个人部分-->
      <div class="content_right">
        <div class="right_header">
          <div class="user_img">
            <img src="../assets/mi.jpg" alt="">
          </div>
          <div class="user_name">君落云霞、、</div>
          <div class="referral">资讯快报、学习交流、新闻趣事！六十二博客..</div>
          <div class="user_button">
            <button><img class="headerIcon" src="../assets/social.png" alt="">骚扰一下</button>
            <button><img class="headerIcon" src="../assets/github.png" alt=""> 关注github</button>
          </div>
          <div class="user_ul">
            <div class="user_li">
              <span>200</span>
              <span>文章</span>
            </div>
            <div class="user_li">
              <span>100</span>
              <span>评论</span>
            </div>
            <div class="user_li">
              <span>84</span>
              <span>微语</span>
            </div>
          </div>
        </div>
        <div class="right_calendar">
          <div class="calendar_header">
            <img src="../assets/calendar.png" alt="">
            <span>日历和时间</span>
          </div>
          <Calendar
            v-on:choseDay="clickDay"
            v-on:changeMonth="changeDate"
          ></Calendar>
          <div class="time">
            <div id="clock">
              <!--<p class="date">{{ date }}</p>-->
              <p class="time">当前时间：<span style="color: #ff808e">{{ time }}</span></p>
            </div>
          </div>
        </div>
        <!--标签-->
        <div class="right_tally">
          <div class="calendar_header">
            <img src="../assets/tally.png" alt="">
            <span>标签</span>
          </div>
          <div class="tally_ul">
            <div class="tally_li" v-for="(item, index) in tally" :key="index">{{item.title}}</div>
          </div>
        </div>
        <!--热门文章-->
        <div class="right_article">
          <div class="calendar_header" style="border-bottom: 1px solid #eee">
            <img src="../assets/give.png" alt="">
            <span>热门文章</span>
          </div>
          <div>
            <div class="article_list inbox" v-for="(item, index) in article" :key="index">
                <div class="indexes">{{index + 1}}</div>
                <div class="article_index">{{item.content}}</div>
            </div>
          </div>
        </div>
        <!--最新文章-->
        <div class="right_new">
          <div class="calendar_header" style="border-bottom: 1px solid #eee">
            <img src="../assets/suggestion.png" alt="">
            <span>最新文章</span>
          </div>
          <div class="new_ul">
            <div class="new_li" v-for="(item, index) in list" :key="index">
              <div class="li_img">
                <img :src="item.img" alt="">
              </div>
              <div class="li_content">
                <div class="li_title">{{item.title}}</div>
                <div class="li_str">
                  <div class="list_user">
                    <img src="../assets/history.png" alt="">
                    <span>{{item.time}}</span>
                  </div>
                  <div class="list_user">
                    <img src="../assets/eye_protection.png" alt="">
                    <span>{{item.discuss}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<!--逻辑js-->
<script>
  // $('#yourElement').addClass('animated bounceOutLeft');
  // export default {
  //   name: 'HelloWorld',
  //   data() {
  //     return {
  //       msg: 'Welcome to Your Vue.js App'
  //     }
  //   }
  // }
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css';
  import Vue from 'vue'
  import Calendar from 'vue-calendar-component';
  export default {
    name: 'homeContent',
    props: {
      images: Array
    },
    components: {
      swiper,
      swiperSlide,
      Calendar
    },
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

        scroll: '',
        time: '',
        date: '',
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          observer: true,
          observeParents: true,
          autoplay: {
            delay: 3000,
            waitForTransition: true
          },
          cubeEffect: {
            slideShadows: true, //开启slide阴影。默认 true。
            shadow: true, //开启投影。默认 true。
            shadowOffset: 100, //投影距离。默认 20，单位px。
            shadowScale: 0.6 //投影缩放比例。默认0.94。
          },
          coverflowEffect: {
            rotate: 100, //slide做3d旋转时Y轴的旋转角度。默认50。
            stretch: 10, //每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
            depth: 60, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
            modifier: 2, //depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
            slideShadows: true //开启slide阴影。默认 true。
          },
          loop: true,
          speed:1000
        },
        list: [{
          title: "如何保存浏览器内容js密码",
          img: require('../assets/git1.gif'),
          content: "实打实大师的大声大声道大声大声道娃娃衫的撒大声地是打算沙发斯蒂芬湿哒哒撒大声地大大",
          userImg: "../assets/indexBg.jpg",
          time: "2019-06-12",
          style: "专业破解版",
          check: 1,
          discuss:7,
          user: "一枝梨花压海棠"
        },{
          title: "如何保存浏览器内容js密码",
          img: require('../assets/git2.jpg'),
          content: "实打实大师的大声大声道大声大声道娃娃衫的撒大声地是打算沙发斯蒂芬湿哒哒撒大声地大大",
          userImg: "../assets/indexBg.jpg",
          time: "2019-06-12",
          style: "专业破解版",
          check: 1,
          discuss:7,
          user: "一枝梨花压海棠"
        },{
          title: "如何保存浏览器内容js密码",
          img: require('../assets/git4.jpg'),
          content: "实打实大师的大声大声道大声大声道娃娃衫的撒大声地是打算沙发斯蒂芬湿哒哒撒大声地大大",
          userImg: "../assets/indexBg.jpg",
          time: "2019-06-12",
          style: "专业破解版",
          check: 1,
          discuss:7,
          user: "一枝梨花压海棠"
        },{
          title: "如何保存浏览器内容js密码",
          img: require('../assets/git3.gif'),
          content: "实打实大师的大声大声道大声大声道娃娃衫的撒大声地是打算沙发斯蒂芬湿哒哒撒大声地大大",
          userImg: "../assets/indexBg.jpg",
          time: "2019-06-12",
          style: "专业破解版",
          check: 1,
          discuss:7,
          user: "一枝梨花压海棠"
        },{
          title: "如何保存浏览器内容js密码",
          img: require('../assets/git3.gif'),
          content: "实打实大师的大声大声道大声大声道娃娃衫的撒大声地是打算沙发斯蒂芬湿哒哒撒大声地大大",
          userImg: "../assets/indexBg.jpg",
          time: "2019-06-12",
          style: "专业破解版",
          check: 1,
          discuss:7,
          user: "一枝梨花压海棠"
        },{
          title: "如何保存浏览器内容js密码",
          img: require('../assets/git3.gif'),
          content: "实打实大师的大声大声道大声大声道娃娃衫的撒大声地是打算沙发斯蒂芬湿哒哒撒大声地大大",
          userImg: "../assets/indexBg.jpg",
          time: "2019-06-12",
          style: "专业破解版",
          check: 1,
          discuss:7,
          user: "一枝梨花压海棠"
        }],
        article:[{
          title: "1",
          content: "一键制作支付宝微信QQ三合一收款码",
        },{
          title: "2",
          content: "利用js动态修改网站的title，挺好玩的，需要的拿走"
        },{
          title: "3",
          content: "同事离职，要了份他的离职申请书",
        },{
          title: "4",
          content: "让emlog侧边栏显示彩色标签,随机显示标签,数量多少有你控制",
        },{
          title: "6",
          content: "面试分享：2018阿里巴巴前端面试总结(题目+答案)",
        },{
          title: "7",
          content: " css实现div在屏幕内垂直水平居中",
        }],
        tally: [{
          title: "视频",
        },{
          title: "接口",
        },{
          title: "css",
        },{
          title: "电子商务",
        },{
          title: "verydows",
        },{
          title: "挂载点",
        },{
          title: "博客",
        },{
          title: "成人高考",
        },{
          title: "react",
        },{
          title: "前端",
        },{
          title: "三合一",
        },{
          title: "腾讯",
        },{
          title: "SEO",
        },{
          title: "fkreekan",
        },{
          title: "emlog",
        },{
          title: "彩虹文字",
        },{
          title: "原生",
        },{
          title: "开发手册",
        },{
          title: "网站",
        },{
          title: "亚运会",
        },{
          title: "系统",
        },{
          title: "百度链接",
        },{
          title: "羊羊羊",
        },{
          title: "div",
        },{
          title: "css3",
        },{
          title: "影视",
        },{
          title: "收款码",
        },{
          title: "收录",
        },{
          title: "时间",
        },{
          title: "源码集合",
        },{
          title: "搜索",
        },{
          title: "重建",
        }],
        show: false
      }
    },
    methods: {
      //触底事件
      created(){
        window.onscroll = function(){
          //变量scrollTop是滚动条滚动时，距离顶部的距离
          var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
          //变量windowHeight是可视区的高度
          var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
          //变量scrollHeight是滚动条的总高度
          var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
          //滚动条到底部的条件
          if(scrollTop+windowHeight==scrollHeight){
            //写后台加载数据的函数
            console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
          }
        }
      },
      getScroll(event) {
        // 滚动条距离底部的距离scrollBottom
        let scrollBottom =
          event.target.scrollHeight -
          event.target.scrollTop -
          event.target.clientHeight;
      },
      dataScroll: function () {
        //scrollTop()方法返回或设置匹配元素的滚动条的垂直位置。
        //document.documentElement.scrollTop 要获取当前页面的滚动条纵坐标位置
        //网页被卷去的高 document.body.scrollTop
        this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(this.scroll)
      },
      loadSroll: function () {
        var that = this;
        var val = 0;
        // console.log(that.scroll);
        var section_list = $(".section_list");
        var sections = document.getElementsByClassName('section');
        // console.log(sections[0].offsetTop,sections[1].offsetTop,sections[2].offsetTop,sections[3].offsetTop,sections[4].offsetTop,sections[5].offsetTop);
        for (var i = sections.length - 1; i >= 0; i--) {
          var hd = sections[i].offsetHeight;  //元素高度
          // window.innerHeight  // 当前窗口高度
          // that.scroll //区域的高度
          // sections[i].offsetTop //元素距离顶部的距离
          if (that.scroll + window.innerHeight >= sections[i].offsetTop + hd) {
            section_list.eq(i).addClass("fadeInUp").removeClass("current");
            // console.log("我进来了");
            break;
          }
        }
      },
      fn(){
        window.scrollTo(0,0);
      },
      clickDay(data) {
        console.log(data); //选中某天
      },
      changeDate(data) {
        console.log(data); //左右点击切换月份
      },
      clickToday(data) {
        console.log(data); //跳到了本月
      }
    },
    watch: {
      scroll: function () {
        this.loadSroll()
      },
      '$route': function(to,from){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
      }
    },
    mounted() {
      this.show = true
      var that = this;
      window.addEventListener("beforeunload", this.fn);
      window.addEventListener('scroll', this.dataScroll);
      //数字时钟
      var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      var timerID = setInterval(updateTime, 1000);
      updateTime();
      function updateTime() {
        var cd = new Date();
        clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
        clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
        Vue.set(that,"date",zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2));
        Vue.set(that,"time",zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2));
      };

      function zeroPadding(num, digit) {
        var zero = '';
        for(var i = 0; i < digit; i++) {
          zero += '0';
        }
        return (zero + num).slice(-digit);
      }
    }
  }
</script>
<!--日历js-->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--公共部分-->
<style>
  img {
    width: 100%;
    height: 100%;
  }
  .content{
    /*width: 80%;*/
    margin: 78px auto 0;
    display: flex;
  }
</style>
<!--左侧内容-->
<style scoped>
  /*公示牌*/
  .billboard_content{
    width: 250px;
    height: 300px;
    background-image: url("../assets/billboard2.png");
    background-size: 100% 100%;
    position: fixed;
    top: 50px;
    right: 13px;
    z-index: 9999;
    user-select: none;
  }
  .plate{
    /*background-color: cornflowerblue;*/
    width: 70%;
    position: absolute;
    top: 85px;
    left: 24px;
    font-size: 20px;
    box-sizing: border-box;
    line-height:27px;
    font-weight: bold;
    font-family: 宋体;
  }
  .billboard_turnoff{
    width: 100px;
    position: fixed;
    top: 25px;
    right: 0px;
    z-index: 9999;
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
  .swiper{
    width: 100%;
    margin: 0 auto;
  }
  .content_title{
    background-color: white;
    margin-top: 4px;
  }
  .content_text{
    padding: 8px 8px  8px 12px;
    text-align: left;
    border-left: 1px dashed #aaa;
    margin-left: 50px;
    font-size: 13px;
  }
  .menu_list{
    padding: 15px 10px;
    font-size: 13px;
    width: 16.6%;
    border-right: 1px dashed #aaaa;
  }
  .content_menu{
    background-color: white;
    margin-top: 8px;
    display: flex;
  }
  .menu_img{
    margin-bottom: 8px;
    height: 25px;
  }
  .menu_img img{
    width: 25px;
  }
  .list_genre{
    font-size: 14px;
    margin-bottom: 8px;
  }
  .list_introduce{
    color: #aaa;
    font-size: 12px;
  }
  .content_user{
    background-color: white;
    padding: 10px 15px 5px;
    margin-top: 8px;
  }
  .user_header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    font-size: 13px;
    padding: 8px 0;
    border-bottom: 1px solid #ccc;
  }
  .user_photo{
    display: flex;
    padding: 20px 40px 15px;
  }
  .user_list{
    width: 20%;
    text-align: left;
  }
  .user_list img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 0 10px #777
  }
  .vip{
    width: 20px!important;
    height: 20px!important;
    position: relative;
    right: 73px;
    top: 5px;
    border: 1px solid #fff;
  }
  .video{
    width: 50%;
    height: 280px;
    overflow: hidden;
    position: relative;
  }
  .video img{
    cursor: pointer;
    transition: all 0.6s;
  }
  .video img:hover{
    transform: scale(1.4);
  }
  .video:hover .hint{
    background-color: rgba(255,0,0,.6);
  }
  .content_video{
    display: flex;
    text-align: left;
    margin-top: 8px
  }
  .video_ul{
    display: flex;
    width: 50%;
    flex-wrap: wrap;
  }
  .video_list{
    width: 46%;
    height: 135px;
    overflow: hidden;
    margin: 0 2%;
    position: relative;
  }
  .video_list:nth-child(3){
    margin-top: 10px;
  }
  .video_list:nth-child(4){
    margin-top: 10px;
  }
  .video_list img{
    cursor: pointer;
    transition: all 0.6s;
  }
  .video_list:hover img{
    transform: scale(1.4);
  }
  .video_list:hover .hint_list{
    background-color: rgba(255,0,0,.6);
  }
  .hint{
    width: 100%;
    position: absolute;
    background: rgba(0,0,0,.6);
    color: white;
    bottom: 0px;
    padding: 5px 5px 5px 10px;
    font-size: 15px;
  }
  .hint:hover{
    background-color: rgba(255,0,0,.6);
  }
  .hint_list{
    width: 100%;
    position: absolute;
    background: rgba(0,0,0,.6);
    color: white;
    bottom: 0px;
    padding: 5px 5px 5px 10px;
    font-size: 12px;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  .section{
    background-color: white;
    margin-top: 10px;
    display: flex;
    padding: 10px;
  }
  .section img{
    width: 200px;
    height: 150px;
  }
  .yin{
    opacity:0;
  }
  .content_list{
    text-align: left;
    margin-left: 10px;
    position: relative;
  }
  .content_list h2{
    font-size: 17px;
  }
  .list_text{
    font-size: 14px;
  }
  .list_style{
    display: flex;
    position: absolute;
    bottom: 0;
  }
  .list_user{
    display: flex;
    align-items: center;
    padding-left: 5px;
    margin-right: 10px;
  }
  .list_user img{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 4px;
  }
  .list_user span{
    font-size: 12px;
  }
  .content_announcement{
    display: flex;
    background-color: white;
    margin-top: 8px;
    padding: 15px;
    font-size: 14px;
    align-items: center;
    justify-content: center;
  }
  .resources{
    margin-left: 10px;
    font-weight: 900;
  }
  .content_advertising{
    width: 100%;
  }
  .content_advertising img{
    width: 100%;
    margin-top: 8px;
  }
  .right_article{
    margin-top: 8px;
    background-color: white;
  }
  .article_list{
    display: flex;
    padding: 12px 12px 12px 18px;
    font-size: 13px;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
  }
  .indexes{
    width: 18px;
    height: 18px;
    background-color: #45B6F7;
    color: white;
    line-height: 20px;
    margin-right: 5px;
    border-radius: 3px;
  }
  .article_list:nth-child(1) .indexes{
    background-color: #E71555;
  }
  .article_list:nth-child(2) .indexes{
    background-color: #16D083;
  }
  .article_list:nth-child(3) .indexes{
    background-color: #FF6700;
  }
  .article_index{
    text-align: left;
    font-size: 12px;
    color: #666;
    display: flex;
    flex-wrap: wrap;
  }
  .inbox {
    transition: .5s;/*过渡效果*/
  }
  .inbox:hover{
    margin-left: 15px;
    color: #FF6700;
  }
  .inbox:hover .article_index{
    color: #FF6700;
  }
</style>
<style>
  .user_img{
    padding-top: 70px;
    background: url("../assets/userBg.jpeg")no-repeat;
    background-size:100%;
  }
  .user_img img{
    width: 80px;
    height: 80px;
    border-radius: 500%;
    background-color: white;
  }
  .right_header{
    background-color: white;
  }
  .user_name{
    padding: 15px;
    font-size: 16px;
    font-weight: bold;
  }
  .referral{
    font-size: 12px;
    padding: 0 0 13px;
  }
  .user_button{
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
  }
  .user_button button{
    width: 110px;
    height: 32px;
    color: white;
    border: none;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .user_button button:nth-child(1){
    background-color: #ff5e5c;
  }
  .user_button button:nth-child(2){
    background-color: #19b5fe;
  }
  .headerIcon{
    width: 17px!important;
    height: 17px!important;
    background-color: white;
    border-radius: 50%;
    margin-right: 5px!important;
  }
  .user_ul{
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid #eeeeee;
    margin-top: 10px;
    font-family: "Yu Gothic UI Semibold";
  }
  .user_li{
    padding: 10px;
    font-size: 14px;
  }
</style>
<style>
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
  /*时钟*/
  .time{
    background-color: white;
    border-top: 1px dashed #aaa;
  }
  p{
    margin: 0;
    padding: 8px;
  }
  /*标签*/
  .right_tally{
    margin-top: 8px;
    background-color: white;
  }
  .tally_ul{
    padding: 13px 13px 20px 13px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-top: 1px solid #eeeeee;
  }
  .tally_li{
    width: 23%;
    height: 28px;
    margin-top: 5px;
    background-color: #eeeeee;
    font-size: 12px;
    line-height: 28px;
  }
  .tally_li:nth-child(2n+1){
    color: greenyellow;
  }
  .tally_li:nth-child(3n+1){
    color: cornflowerblue;
  }
  .tally_li:nth-child(4n+1){
    color: burlywood;
  }
  .tally_li:nth-child(5n+1){
    color: aqua;
  }
  .tally_li:nth-child(11n+1){
    color: darkcyan;
  }
  .tally_li{
    cursor: pointer;
    transition: all 0.6s;
  }
  .tally_li:hover{
    transform: scale(1.1);
    background-color: #aaa;
    border-radius: 5px;
  }
</style>
<style>
  .right_new{
    background-color: white;
    margin-top: 8px;
  }
  .new_li{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    /*justify-content: space-between;*/
    padding: 10px;
  }
  .li_img img{
    width: 70px;
    height: 70px;
  }
  .new_ul{

  }
  .li_str{
    display: flex;
    align-items: center;
    text-align: left!important;
  }
  .li_content{
    text-align: left;
    margin-bottom: 10px;
    margin-left: 5px;
  }
  .li_str{
    /*margin-top: 20px;*/
  }
  .li_title{
    margin-bottom: 25px;
    margin-left: 5px;
  }
  .page{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 10px;
    margin-top: 8px;
    font-size: 14px;
  }
  .page_quantity{
    width: 35px;
    height: 25px;
    line-height: 25px;
    background-color: #FF5E52;
    color: white;
    border-radius: 2px;
    margin-right: 5px;
  }
  .page_all{
    margin-left: 15px;
  }
  .next{
    width:60px;
    height: 25px;
    line-height: 25px;
    border-radius: 2px;
    margin-left: 10px;
    color: #666;
    border: 1px solid #eeeeee;;
  }
</style>
