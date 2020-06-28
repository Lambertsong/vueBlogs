<template>
  <div>
    <div class="content_left">
      <!--公告部分-->
      <div class="content_announcement fadeInUp">
        <div class="text">这个博客是我写这练练手的，以后会持续更新，会慢慢更完善的!</div>
        <div class="resources">本站共分享了 <span style="color: red">100</span> 个资源</div>
      </div>
      <!--广告图片-->
      <div class="content_advertising">
        <img src="../assets/img/advertising.jpg" alt="">
      </div>
      <!--内容部分-->
      <div class="content_vessel">
        <div data-aos="fade-up" class="section section_list animated yin" v-for="(item, index) in list" :key="index">
          <div>
            <img :src="item.img" alt="" >
          </div>
          <div class="content_list">
            <h2>{{item.title}}</h2>
            <div class="list_text">
              {{item.content}}
            </div>
            <div class="list_style">
              <div class="list_user">
                <img src="../assets/img/indexBg.jpg" alt="">
                <span>{{item.user}}</span>
              </div>
              <div class="list_user">
                <img src="../assets/img/favoriteslist.png" alt="">
                <span>{{item.style}}</span>
              </div>
              <div class="list_user">
                <img src="../assets/img/history.png" alt="">
                <span>{{item.time}}</span>
              </div>
              <div class="list_user">
                <img src="../assets/img/respond.png" alt="">
                <span>16</span>
              </div>
              <div class="list_user">
                <img src="../assets/img/eye_protection.png" alt="">
                <span>{{item.discuss}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--分页-->
      <div class="page" data-aos="fade-up">
        <div class="page_quantity">1</div>
        <div class="next">下一页</div>
        <div class="next">尾页</div>
        <div class="page_all">共17页</div>
      </div>
    </div>
  </div>
</template>
<!--逻辑js-->
<style src="../css/contentLeft.css" scoped></style>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css';
    import Vue from 'vue'
    import Calendar from 'vue-calendar-component';
    import 'aos/dist/aos.css'//aos滚动的使用。
    import Aos from 'aos'
    export default {
        name: 'contentLeft',
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
                    img: require('../assets/img/git1.gif'),
                    content: "实打实大师的大声大声道大声大声道娃娃衫的撒大声地是打算沙发斯蒂芬湿哒哒撒大声地大大",
                    userImg: "../assets/img/indexBg.jpg",
                    time: "2019-06-12",
                    style: "专业破解版",
                    check: 1,
                    discuss:7,
                    user: "一枝梨花压海棠"
                },{
                    title: "如何保存浏览器内容js密码",
                    img: require('../assets/img/git2.jpg'),
                    content: "实打实大师的大声大声道大声大声道娃娃衫的撒大声地是打算沙发斯蒂芬湿哒哒撒大声地大大",
                    userImg: "../assets/img/indexBg.jpg",
                    time: "2019-06-12",
                    style: "专业破解版",
                    check: 1,
                    discuss:7,
                    user: "一枝梨花压海棠"
                },{
                    title: "如何保存浏览器内容js密码",
                    img: require('../assets/img/git4.jpg'),
                    content: "实打实大师的大声大声道大声大声道娃娃衫的撒大声地是打算沙发斯蒂芬湿哒哒撒大声地大大",
                    userImg: "../assets/img/indexBg.jpg",
                    time: "2019-06-12",
                    style: "专业破解版",
                    check: 1,
                    discuss:7,
                    user: "一枝梨花压海棠"
                },{
                    title: "如何保存浏览器内容js密码",
                    img: require('../assets/img/git3.gif'),
                    content: "实打实大师的大声大声道大声大声道娃娃衫的撒大声地是打算沙发斯蒂芬湿哒哒撒大声地大大",
                    userImg: "../assets/img/indexBg.jpg",
                    time: "2019-06-12",
                    style: "专业破解版",
                    check: 1,
                    discuss:7,
                    user: "一枝梨花压海棠"
                },{
                    title: "如何保存浏览器内容js密码",
                    img: require('../assets/img/git3.gif'),
                    content: "实打实大师的大声大声道大声大声道娃娃衫的撒大声地是打算沙发斯蒂芬湿哒哒撒大声地大大",
                    userImg: "../assets/img/indexBg.jpg",
                    time: "2019-06-12",
                    style: "专业破解版",
                    check: 1,
                    discuss:7,
                    user: "一枝梨花压海棠"
                },{
                    title: "如何保存浏览器内容js密码",
                    img: require('../assets/img/git3.gif'),
                    content: "实打实大师的大声大声道大声大声道娃娃衫的撒大声地是打算沙发斯蒂芬湿哒哒撒大声地大大",
                    userImg: "../assets/img/indexBg.jpg",
                    time: "2019-06-12",
                    style: "专业破解版",
                    check: 1,
                    discuss:7,
                    user: "一枝梨花压海棠"
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
                    console.log(scrollHeight);
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
                        // section_list.eq(i).addClass("fadeInUp").removeClass("current");
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
            Aos.init({
                duration: 1200,
            })
            this.show = true;
            var that = this;
            var vessel = document.getElementsByClassName('content_vessel');
            var sections = document.getElementsByClassName('section');
            var section_list = $(".section_list");
            var tallyNumber = Math.ceil((window.innerHeight + + getScrollTop() - vessel[0].offsetTop) / sections[0].offsetHeight);
            if(sections.length > tallyNumber){
                for (var i = 0; i<tallyNumber; i++){
                    section_list.eq(i).addClass("fadeInUp").removeClass("current");
                }
            }else {
                for (var i = 0; i<sections.length; i++){
                    section_list.eq(i).addClass("fadeInUp").removeClass("current");
                }
            }
            console.log(getScrollTop())
            console.log((window.innerHeight + getScrollTop() - vessel[0].offsetTop) / sections[0].offsetHeight);
            console.log(tallyNumber);
            window.addEventListener("beforeunload", this.fn);
            window.addEventListener('scroll', this.dataScroll);
            //获取滚动条高度
            function getScrollTop() {
                var scrollPos;
                if (window.pageYOffset) {
                    scrollPos = window.pageYOffset; }
                else if (document.compatMode && document.compatMode != 'BackCompat')
                { scrollPos = document.documentElement.scrollTop; }
                else if (document.body) { scrollPos = document.body.scrollTop; }
                return scrollPos;
            }
        }
    }
</script>

