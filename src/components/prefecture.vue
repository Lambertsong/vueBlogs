<template>
  <div class="content_prefecture">
    <div class="content_header">
      <div class="header_title">
        <h3><b>VIP专区</b></h3>
        <div class="join">申请加入</div>
      </div>
      <div class="header_main">
        <div class=" tab_all">全部</div>
        <div class="main_list">
          <div class="main_tab pitch">博客模板</div>
          <div class="main_tab">CMS模板</div>
          <div class="main_tab">图片模板</div>
          <div class="main_tab">企业模板</div>
        </div>
      </div>
    </div>
    <div class="content_main">
      <div class="main_ul">
        <!--文章-->
        <div class="main_li" v-for="(item, index) in list" :key="index">
          <div  class="li_title">
            <div class="li_h1">{{item.title}}</div>
            <div class="li_p">{{item.content}}</div>
          </div>
          <div class="theme-thumb">
            <img :src="item.img" alt="">
          </div>
          <div class="li_title click">
            <button class="motif">主题详情</button>
            <button>查看演示</button>
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
    </div>
  </div>
</template>

<script>
    export default {
        name: "prefecture",
        data() {
            return {
                list: [{
                    title: "QQ微信红包猎手",
                    img: require('../assets/img/005BYqpgly1fz8a8ivqlpj30xx0u0k5r.jpg'),
                    content: "适用于企业站、淘宝客和各种展示类型站点",
                    userImg: "../assets/img/indexBg.jpg",
                    time: "2019-06-12",
                    style: "专业破解版",
                    check: 1,
                    discuss:7,
                    user: "一枝梨花压海棠"
                },{
                    title: "电脑游戏优化大师-AiBooster",
                    img: require('../assets/img/lazyload.gif'),
                    content: "适用于企业站、淘宝客和各种展示类型站点",
                    userImg: "../assets/img/indexBg.jpg",
                    time: "2019-06-12",
                    style: "专业破解版",
                    check: 1,
                    discuss:7,
                    user: "一枝梨花压海棠"
                },{
                    title: "安卓一个强大备受好评的资源文件管理器",
                    img: require('../assets/img/005Kin8igy1fz5ue286fqj30pe0kwjsu.jpg'),
                    content: "适用于企业站、淘宝客和各种展示类型站点",
                    userImg: "../assets/img/indexBg.jpg",
                    time: "2019-06-12",
                    style: "专业破解版",
                    check: 1,
                    discuss:7,
                    user: "一枝梨花压海棠"
                },{
                    title: "完全免费工具箱万彩办公大师OfficeBox",
                    img: require('../assets/img/lazyload.gif'),
                    content: "适用于企业站、淘宝客和各种展示类型站点",
                    userImg: "../assets/img/indexBg.jpg",
                    time: "2019-06-12",
                    style: "专业破解版",
                    check: 1,
                    discuss:7,
                    user: "一枝梨花压海棠"
                },{
                    title: "打游戏必备的电脑内存优化工具",
                    img: require('../assets/img/lazyload.gif'),
                    content: "适用于企业站、淘宝客和各种展示类型站点",
                    userImg: "../assets/img/indexBg.jpg",
                    time: "2019-06-12",
                    style: "专业破解版",
                    check: 1,
                    discuss:7,
                    user: "一枝梨花压海棠"
                },{
                    title: "必用，给博客添加代码高亮",
                    img: require('../assets/img/005Kin8igy1fyl9akx7m1j30kd053t8w.jpg'),
                    content: "适用于企业站、淘宝客和各种展示类型站点",
                    userImg: "../assets/img/indexBg.jpg",
                    time: "2019-06-12",
                    style: "专业破解版",
                    check: 1,
                    discuss:7,
                    user: "一枝梨花压海棠"
                },{
                    title: "草根吧源码共享_逆天资源草根吧网站整站源码分享caogen8.co",
                    img: require('../assets/img/005Kin8igy1fybru09bc4j30p50eswf7.jpg'),
                    content: "适用于企业站、淘宝客和各种展示类型站点",
                    userImg: "../assets/img/indexBg.jpg",
                    time: "2019-06-12",
                    style: "专业破解版",
                    check: 1,
                    discuss:7,
                    user: "一枝梨花压海棠"
                },{
                    title: "动态的电脑桌面壁纸软件Wallpaper Engine与UPUPOO哪个好",
                    img: require('../assets/img/98301542213952.jpg'),
                    content: "动态的电脑桌面壁纸软件Wallpaper Engine与UPUPOO哪个好",
                    userImg: "../assets/img/indexBg.jpg",
                    time: "2019-06-12",
                    style: "专业破解版",
                    check: 1,
                    discuss:7,
                    user: "一枝梨花压海棠"
                },{
                    title: "emlog仿站专用工具",
                    img: require('../assets/img/005Kin8igy1fxfs9mgav1j30k70f4aao.jpg'),
                    content: "适用于企业站、淘宝客和各种展示类型站点",
                    userImg: "../assets/img/indexBg.jpg",
                    time: "2019-06-12",
                    style: "专业破解版",
                    check: 1,
                    discuss:7,
                    user: "一枝梨花压海棠"
                },{
                    title: "利用 Chrome 浏览器的开发者工具截取整个页面",
                    img: require('../assets/img/5.jpg'),
                    content: "适用于企业站、淘宝客和各种展示类型站点",
                    userImg: "../assets/img/indexBg.jpg",
                    time: "2019-06-12",
                    style: "专业破解版",
                    check: 1,
                    discuss:7,
                    user: "一枝梨花压海棠"
                },{
                    title: "emlog修改每天都修改背景图--必应图库",
                    img: require('../assets/img/lazyload.gif'),
                    content: "适用于企业站、淘宝客和各种展示类型站点",
                    userImg: "../assets/img/indexBg.jpg",
                    time: "2019-06-12",
                    style: "专业破解版",
                    check: 1,
                    discuss:7,
                    user: "一枝梨花压海棠"
                },{
                    title: "纪念金庸辞世全集48M书籍",
                    img: require('../assets/img/005Kin8igy1fwtg3ex3atj30fv0lytak.jpg'),
                    content: "适用于企业站、淘宝客和各种展示类型站点",
                    userImg: "../assets/img/indexBg.jpg",
                    time: "2019-06-12",
                    style: "专业破解版",
                    check: 1,
                    discuss:7,
                    user: "一枝梨花压海棠"
                }],
            }
        }
    }
</script>

<style scoped>
  .content_prefecture{
    /*width: 80%;*/
    margin: 78px auto 0;
  }
  @media (min-width: 768px){
    .content_prefecture {
      width: 750px;
    }
  }
  @media (min-width: 992px)
  {
    .content_prefecture {
      width: 970px;
    }
  }
  @media (min-width: 1200px)
  {
    .content_prefecture {
      width: 1170px;
    }
  }
  .content_header{
    width: 100%;
    padding: 20px;
    background-color: white;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  .header_title{
    border-bottom: 1px solid #eaeaea;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header_title h3{
    height: 42px;
    line-height: 42px;
    border-bottom: 3px solid #FF5E52;
    margin-bottom: 0px;
    margin-top: 0;
    font-weight: inherit;
    font-size: 20px;
  }
  .join{
    font-size: 15px;
    color: #777777;
  }
  .header_main{
    display: flex;
    margin-top: 30px;
  }
  .tab_all{
    background-color: #3ca5f6;
    font-size: 16px;
    float: left;
    height: 40px;
    line-height: 40px;
    width: 80px;
    text-align: center;
    color: #fff;
  }
  .main_list{
    display: flex;
    margin-left: 30px;
  }
  .main_tab{
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
  }
  .pitch{
    background-color: #F79694;
    color: white;
  }
  .main_tab:hover{
    background-color: #F79694;
    color: white;
  }
  .content_main{
    width: 100%;
    text-align: left;
    background-color: white;
    padding: 20px;
    box-sizing: border-box;
  }
  .main_ul{
    width: 100%;
    display: flex;
    flex-warp:warp; /*CSS3样式，支持webkit，ms*/
    -ms-flex-wrap: wrap;/*IE9以及一下不支持*/
    -webkit-flex-wrap: wrap;
  }
  .main_li{
    width: 33%;
    border-right: 1px solid #eeeeee;
    text-align: center;
    margin-bottom: 15px;
  }
  .li_title{
    background-color: #F3F7F8;
  }
  .li_h1{
    font-size:16px;
    font-weight: 200;
    padding: 15px 15px 0;
    margin: 0 0 8px 0;
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .li_p{
    font-size: 10px;
    color: #cccccc;
    padding-bottom: 15px;
  }
  .theme-thumb{
    padding: 20px;
    overflow: hidden;
  }
  .li_title{
    /*padding: 15px;*/
  }
  .click{
    padding: 15px;
  }
  .li_title button{
    border: 1px solid #aaaaaa;
    background-color: white;
    margin-right: 15px;
    display: inline-block;
    padding: 6px 15px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;

    color: #666;
    border-radius: 4px;
  }
  .motif{
    background-color: #0ae!important;
    color: white!important;
    border: 1px solid #0ae!important;
  }
  .theme-thumb img{
    cursor: pointer;
    transition: all 0.6s;
  }
  .theme-thumb:hover img{
    transform: scale(1.1);
  }
  .theme-thumb img{
    max-width: 100%;
    width: 100%;
    height: 270px;
  }
</style>
<style scoped>
  .page{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 10px;
    margin-top: 8px;
    font-size: 14px;
    text-align: center;
    border: 1px solid #eee;
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
