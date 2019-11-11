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
