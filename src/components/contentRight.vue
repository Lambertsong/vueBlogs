<template>
  <div>
    <div class="content_right">
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
</template>
<script>
    import contentRight from '../components/contentRight';
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css';
    import '../css/contentRight.css'
    import Vue from 'vue'
    import Calendar from 'vue-calendar-component';
    export default {
        name: 'contentRight',
        props: {
            images: Array
        },
        components: {
            swiper,
            swiperSlide,
            Calendar,
            'contentRight': contentRight
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
            this.show = true;
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
