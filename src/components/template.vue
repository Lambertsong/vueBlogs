<template>
    <div>
      <div class="content">
        <div class="content_list" v-for="(item, index) in list" :key="index">
          <div class="content_lump">
            <div class="content_img">
              <img :src="item.img" alt="">
            </div>
            <div class="content_title">
              {{item.title}}
            </div>
            <div class="lump_footer">
              <div>{{item.time}}</div>
              <div class="lump_sign">
                <img class="sign" src="../assets/favour.png" alt="">
                <span>1</span>
                <img class="sign" src="../assets/estimate.png" alt="">
                <span>16</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "template",
        data() {
            return{
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
                },{
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
            }
        },

    }
</script>

<style scoped>
  .content{
    /*width: 80%;*/
    margin: 78px auto 0;
    display: flex;
    flex-wrap: wrap;
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
  .content_list{
    width: 25%;
    height: 264px;
    padding: 10px 15px;
    box-sizing: border-box;
    /*margin: 10px 0 10px 0!important;*/
    margin-left: 0!important;
  }
  .content_lump{
    margin: 0 auto;
    height: 100%;
    background-color: white;
    padding: 10px;
    position: relative;
    box-sizing: border-box;
  }
  .content_img{
    width: 100%;
    height: 150px;
  }
  .content_title{
    margin: 20px 0 20px 0;
    font-size: 13px;
  }
  .lump_footer{
    width: calc(100% - 20px);
    height: 35px;
    /*background-color: red;*/
    line-height: 35px;
    display: flex;
    align-content: center;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    font-size: 14px;
    border-top: 1px solid #eeeeee;
    color: #888888;
  }
  .lump_sign{
    display: flex;
    align-items: center;
  }
  .sign{
    width: 15px;
    height: 15px;
    margin: 0 5px;
  }
</style>
