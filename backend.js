const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Idiya</title>
      <link rel="stylesheet" href="site.css">
      <script src="https://kit.fontawesome.com/086d741336.js" crossorigin="anonymous"></script>


      <style>*{
        margin: 0;
        padding: 0;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
    
    body{
        background: #efefef;
    }
    
    /* --------------- error adjusts -------------------------- */
    
    /* exists in container_mid */
    .line{ 
        display: inline-flex;
        align-items: center;
    }
    
    /* exists in container_mid */
    .adjust{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    /* --------------- error adjusts -------------------------- */
    
    
    /* ------------------------- navigation bar -------------------------- */
    
    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: rgb(0, 115, 255);
        padding: 6px 2.5%;
        position: sticky;
        top: 0;
        z-index: 100;
    }
    
    .nav-left, .nav-right{
        display: flex;
        align-items: center;
    }
    
    .logo{
        width: 160px;
        margin-right: 13px;
    }
    
    .nav-left ul li{
        list-style: none;
        display: inline-block;
    }
    
    .nav-left ul li img{
        width: 28px;
        margin: 0px 16px;
    }
    
    .user-icon img{
        width: 50px;
        border-radius: 50%;
    }
    
    .search-bar{
        background: #efefef;
        display: flex;
        align-items: center;
        border-radius: 20px;
        padding: 0px 20px;
        width: 330px;
        margin-right: 18px;
    }
    
    .search-bar img{
        width: 18px;
    }
    
    .search-bar input{
        width: 100%;
        background: transparent;
        padding: 10px;
        outline: none;
        border: 0;
    }
    
    .online{
        position: relative;
    }
    
    .online::after{
        content: '';
        position: absolute;
        width: 11px;
        height: 11px;
        border: 2px solid #fff;
        border-radius: 50%;
        background: rgb(88 194 2);
        top: 1px;
        right: 1px;
    }
    
    .main{
        display: grid;
        grid-template-columns: 23.5% 48.5% 28%;
        margin-top: 20px;
    }
    
    /*------------------------- container left ------------------------------- */
    
    .container_left{
        position: sticky;
        top: 80px;
        margin-left: 45px;
        margin-right: 5px;
        height: fit-content;
        padding-bottom: 40px;
    }
    
    .imp-links{
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #cec9c9;
    }
    
    .imp-links a, .shortcut-links a{
        text-decoration: none;
        padding: 10px 0;
        font-size: 1.15rem;
        color: rgb(67, 66, 66);
        display: flex;
        flex-direction: row;
    }
    
    .shortcut-links a p{
        font-size: 1.3rem;
        margin-top: 13px;
        color: #626262;
    }
    
    .imp-links a img{
        width: 25px;
        margin-right: 22px
    }
    
    .imp-links a:last-child{
        color: rgb(42, 160, 250);
        margin-top: 5px;
        margin-bottom: 12px;
    }
    
    .shortcut-links{
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }
    
    .shortcut-links a img{
        width: 55px;
        height: 53px;
        border-radius: 10%;
        margin-right: 22px
    }
    
    .shortcut-links p{
        font-size: 1.2rem;
        color: rgb(46, 45, 45);
        margin-bottom: 20px;
        margin-top: 5px;
    }
    
    /* --------------------- right_container -------------------------------- */
    
    .container_right{
        position: sticky;
        top: 40px;
        margin-bottom: 15px;
        margin-right: 34px;
        color: #626262;
        background: #fff;
        border-radius: 5px;
        margin-left: 10px;
        height: fit-content;
        padding-bottom: 25px;
    }
    
    .rightbar_title{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 13px 15px;
    }
    
    .rightbar_title a, .event a{
        color: rgb(9, 156, 225);
        text-decoration: none;
        font-size: 15px;
    }
    
    .rightbar_title h4{
        font-size: 1.08rem;
    }
    
    .event{
        display: flex;
        flex-direction: row;
        padding: 15px 19px;
        margin-top: -6px;
    }
    
    .left_event{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 7px 10px;
        /* border: 1px solid rgb(176, 176, 176); */
        border-radius: 20px;
        box-shadow: 1px 2px 4px 2px rgb(112, 111, 111);    
        position: relative;
        overflow: hidden;
        height: 55px;
        width: 46px;
    }
    
    .left_event span{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #1876f2;
        color: #fff;
        font-size: 15px;
        text-align: center;
        padding: 5px 0;
    }
    
    .left_event h3{
        font-size: 25px;
    }
    
    .right_event{
        margin-left: 35px;
        padding: 6px 0px;
        font-size: 1.025rem;
    }
    
    .rightbar_ads{
        width: 90%;
        height: 215px;
        display: block;
        margin: auto;
        text-align: center;
        border-radius: 5px;
        margin-top: 6px;
    }
    
    
    .online_list{
        display: flex;
        padding: 10px 20px;
    }
    
    .online_list img{
        width: 50px;
        border-radius: 50%;
    }
    
    .online_list .online::after{
        width: 10px;
        height: 10px;
        top: unset;
        bottom: 3px;
        right: 1px;
    }
    
    .online_list p{
        font-size: 1.2rem;
        margin-top: 13px;
        margin-left: 26px;
        color: #626262;
    }
    
    
    /*---------------------- container_mid --------------------------*/
    
    .container_mid{
        margin-left: 10px;
        margin-right: 10px;
    }
    
    .story_gallery{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    
    .story{
        flex-basis: 18%;
        padding-top: 32%;
        position: relative;
        background-position: center;
        background-size: cover;
        border-radius: 10px;
    }
    
    .story img{
        position: absolute;
        width: 40px;
        border-radius: 50%;
        top: 8px;
        left: 10px;
        border: 5px solid #1876f2;
    }
    
    .story p{
        position: absolute;
        color: #fff;
        font-size: 17px;
        width: 100%;
        text-align: center;
        bottom: 10px;
    }
    
    .story1{
        background-image: linear-gradient(transparent, rgba(0,0,0,0.5)), url(images/status-1.png);
    }
    
    .story2{
        background-image: linear-gradient(transparent, rgba(0,0,0,0.5)), url(images/status-2.png);
    }
    
    .story3{
        background-image: linear-gradient(transparent, rgba(0,0,0,0.5)), url(images/status-3.png);
    }
    
    .story4{
        background-image: linear-gradient(transparent, rgba(0,0,0,0.5)), url(images/status-4.png);
    }
    
    .story5{
        background-image: linear-gradient(transparent, rgba(0,0,0,0.5)), url(images/status-5.png);
    }
    
    
    .story1 img{
        text-align: center;
        top: unset;
        bottom: 35px;
        left: 50%;
        transform: translateX(-50%);
        border: 0;
        width: 39px;
    }
    
    
    .write_post_container{
        display: block;
        width: 100%;
        background: #fff;
        border-radius: 14px;
        padding: 8px 0px;
        color: #626262;
    }
    
    .user_profile{
        display: grid;
        grid-template-columns: 12% 88%;
    }
    
    .user_profile img{
        position: relative;
        width: 50px;
        border-radius: 50%;
        margin: auto 16px;
    }
    
    .user_profile div{
        margin: auto 3px;
    }
    
    .user_profile p{
        font-size: 17px;
    }
    
    .user_profile small{
        font-size: 13.2px;
    }
    
    .post_input_container{
        padding-left: 88px;
        padding-top: 13px;
        padding-right: 38px;
    }
    
    .post_input_container textarea{
        width: 100%;
        border: 0;
        outline: 0;
        border-bottom: 1px solid #ccc;
        background: transparent;
        resize: none;
    }
    
    .add_post_links{
        display: flex;
        margin-top: 10px;
    }
    
    .add_post_links a{
        display: flex;
        text-decoration: none;
        align-items: center;
        color: #626262;
        margin-right: 35px;
        font-size: 13px;
    }
    
    .add_post_links a img{
        width: 20px;
        margin-right: 10px;
    }
    
    .add_post_links a img:first-child{
        margin-left: 3px;
    }
    
    .post_container{
        width: 100%;
        margin-top: 20px;
        background: #fff;
        padding: 8px 0px;
        border-radius: 6px;
        color: #626262;
    }
    
    .post_para{
        color: #626262;
        font-size: 1.026rem;
        margin-left: 18px;
        margin-top: 13px;
        margin-right: 10px;
        margin-bottom: 13px;
    }
    
    .post_para a{
        text-decoration: none;
        color: rgb(9, 156, 225);
        margin-left: 6px;
    }
    
    .post_img{
        width: 95.5%;
        border-radius: 4px;
        display: block;
        margin: auto;
        text-align: center;
        margin-bottom: 15px;
    }
    
    .post-row{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 8px 0px;
    }
    
    .activity_icons{
        display: flex;
        align-items: center;
        margin-left: 25px;
    }
    
    .activity_icons div{
        display: inline-flex;
        align-items: center;
        margin-right: 40px;
    }
    
    .activity_icons div img{
        width: 18px;
        margin-right: 7px;
    }
    
    .post_profile_icon{
        margin-right: 23px;
    }
    
    .post_profile_icon img{
        width: 26px; 
        border-radius: 50%;
    }
    
    .load-more-btn{
        display: block;
        margin: 14px auto;
        text-align: center;
        padding: 3px 8px;
        cursor: pointer;
        /* margin-top: 14px; */
        font-size: 1.06rem;
        border: 1px solid #626262;
        border-radius: 3px;
        color: #626262;
    }
    
    .load-more-btn:hover{
        background: #eae8e8;
    }
    
    .footer{
        display: block;
        /* background: #3c3c3c; */
        color: #626262;
        font-size: 1.1rem;
        margin: auto;
        text-align: center;
        padding-top: 25px;
        padding-bottom: 30px;
        padding-right: 75px;
    }</style>



  </head>
  
  <body>
  
      <!-------------------------------------- navigation bar -------------------------------------------->
  
      <nav>
          <div class="nav-left">
              <h1
              style="
              /* display: inline-block; */
              /* background: #fff; */
              font-size: 1.7rem;
              /* padding: 1px 7px; */
              /* border-radius: 8px; */
              margin-right: 12px;
              color: #fff;">facebook</h1>
  
              <!-- <img class="logo" src="images/logo.png" alt="logo"> -->
  
              
              <ul>
                  <li><img src="images/notification.png" alt=""></li>
                  <li><img src="images/inbox.png" alt=""></li>
                  <li><img src="images/video.png" alt=""></li>
              </ul>
          </div>
  
          <div class="nav-right">
              <div class="search-bar">
                  <img src="images/search.png" alt="search">
                  <input type="text" placeholder="search">
              </div>
              <div class="user-icon online">
                  <img src="images/profile-pic.png" alt="#">
              </div>
          </div>
      </nav>
  
      <!---------------------------------- left container --------------------------------------------->
  
      <div class="main">
          <div class="container_left">
              <div class="imp-links">
                  <a href="#"><img src="images/news.png" alt="#">Latest news</a>
                  <a href="#"><img src="images/friends.png" alt="#">Friends</a>
                  <a href="#"><img src="images/group.png" alt="#">Gropus</a>
                  <a href="#"><img src="images/marketplace.png" alt="#">marketplace</a>
                  <a href="#"><img src="images/watch.png" alt="#">watch</a>
                  <a href="#">See More</a>
              </div>
  
              <div class="shortcut-links">
                  <p>Your shortcuts</p>
                  <a href="#"><img src="images/shortcut-1.png" alt="#">
                      <p>web developers</p>
                  </a>
                  <a href="#"><img src="images/shortcut-2.png" alt="#">
                      <p>web design course</p>
                  </a>
                  <a href="#"><img src="images/shortcut-3.png" alt="#">
                      <p>full-stack development</p>
                  </a>
                  <a href="#"><img src="images/shortcut-4.png" alt="#">
                      <p>website experts</p>
                  </a>
              </div>
          </div>
  
          <!-------------------------------------- mid container ----------------------------------------------------->
  
          <div class="container_mid">
              <div class="story_gallery">
                  <div class="story story1">
                      <img src="images/upload.png" alt="">
                      <p>post story</p>
                  </div>
                  <div class="story story2">
                      <img src="images/member-1.png" alt="">
                      <p>Laura</p>
                  </div>
                  <div class="story story3">
                      <img src="images/member-2.png" alt="">
                      <p>Mark</p>
                  </div>
                  <div class="story story4">
                      <img src="images/member-3.png" alt="">
                      <p>Shaley</p>
                  </div>
                  <div class="story story5">
                      <img src="images/member-4.png" alt="">
                      <p>Joe</p>
                  </div>
              </div>
  
              <div class="write_post_container">
                  <div class="user_profile">
                      <img src="images/profile-pic.png" alt="#">
                      <div>
                          <p>John Nikolson</p>
                          <small>Public <i class="fas fa-caret-down" style="margin-left: 1px;"></i></small>
                      </div>
                  </div>
                  <div class="post_input_container">
                      <textarea id="#" rows="6" placeholder="What's on your your mind John?"></textarea>
                      <div class="add_post_links">
                          <a href="#"><img src="images/live-video.png">Live video</a>
                          <a href="#"><img src="images/photo.png">Photo/Video</a>
                          <a href="#"><img src="images/feeling.png">Feeling/Activity</a>
                      </div>
                  </div>
              </div>
  
              <!------------------------------------------------ post-1 ------------------------------------------------>
              <div class="post_container">
                  <div class="adjust">
                      <div class="user_profile">
                          <img src="images/profile-pic.png" alt="#">
                          <div style="margin-left: 58px;">
                              <p>John Nikolson</p>
                              <span id="days1"></span> <span id="d1">days</span> <span id="hours1"></span> <span
                                  id="h1">hr</span>
                              <span id="minutes1"></span> <span id="m1">min</span> <span id="sec1"></span> <span
                                  id="s1">sec</span>
                          </div>
                      </div>
                      <a href="#"><i class="fas fa-ellipsis-v" style="margin-right: 23px; color: #9a9a9a;"></i></a>
                  </div>
  
                  <p class="post_para">Buy <span>@amazon</span> product Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Illo totam a expedita reiciendis magni tempora saepe. <a href="#">#Laptop</a> <a
                          href="https://amazon.in" target="_blank">amazon.in</a></p>
  
                  <img src="images/feed-image-1.png" alt="#" class="post_img">
  
                  <div class="post-row">
                      <div class="activity_icons">
                          <div><img src="images/like-blue.png" alt="#">192K</div>
                          <div><img src="images/comments.png" alt="#">16K</div>
                          <div><img src="images/share.png" alt="#">20K</div>
                      </div>
  
                      <div class="post_profile_icon line">
                          <img src="images/profile-pic.png" alt="#"><i class="fas fa-caret-down"
                              style="margin-left: 5px;"></i>
                      </div>
                  </div>
  
              </div>
  
              <!------------------------------------------------ post-2 ------------------------------------------------>
              <div class="post_container">
                  <div class="adjust">
                      <div class="user_profile">
                          <img src="images/profile-pic.png" alt="#">
                          <div style="margin-left: 58px;">
                              <p>John Nikolson</p>
                              <span id="days2"></span> <span id="d2">days</span> <span id="hours2"></span> <span
                                  id="h2">hr</span>
                              <span id="minutes2"></span> <span id="m2">min</span> <span id="sec2"></span> <span
                                  id="s2">sec</span>
                          </div>
                      </div>
                      <a href="#"><i class="fas fa-ellipsis-v" style="margin-right: 23px; color: #9a9a9a;"></i></a>
                  </div>
  
                  <p class="post_para">Buy <span>@amazon</span> product Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Illo totam a expedita reiciendis magni tempora saepe. <a href="#">#Laptop</a>  go to<a
                          href="https://YouTube.com" target="_blank">YouTube</a>.</p>
  
                  <img src="images/feed-image-2.png" alt="#" class="post_img">
  
                  <div class="post-row">
                      <div class="activity_icons">
                          <div><img src="images/like.png" alt="#">20K</div>
                          <div><img src="images/comments.png" alt="#">9K</div>
                          <div><img src="images/share.png" alt="#">212</div>
                      </div>
  
                      <div class="post_profile_icon line">
                          <img src="images/profile-pic.png" alt="#"><i class="fas fa-caret-down"
                              style="margin-left: 5px;"></i>
                      </div>
                  </div>
  
              </div>
  
  
              <!------------------------------------------------ post-3 ------------------------------------------------>
              <div class="post_container">
                  <div class="adjust">
                      <div class="user_profile">
                          <img src="images/profile-pic.png" alt="#">
                          <div style="margin-left: 58px;">
                              <p>John Nikolson</p>
                              <span id="days3"></span> <span id="d3">days</span> <span id="hours3"></span> <span
                                  id="h3">hr</span>
                              <span id="minutes3"></span> <span id="m3">min</span> <span id="sec3"></span> <span
                                  id="s3">sec</span>
                          </div>
                      </div>
                      <a href="#"><i class="fas fa-ellipsis-v" style="margin-right: 23px; color: #9a9a9a;"></i></a>
                  </div>
  
                  <p class="post_para">Buy <span>@amazon</span> product Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Illo totam a expedita reiciendis magni tempora saepe. <a href="#">#Laptop</a> <a
                          href="https://linkedin.com" target="_blank">linkedin.com</a></p>
  
                  <img src="images/feed-image-3.png" alt="#" class="post_img">
  
                  <div class="post-row">
                      <div class="activity_icons">
                          <div><img src="images/like.png" alt="#">19K</div>
                          <div><img src="images/comments.png" alt="#">253</div>
                          <div><img src="images/share.png" alt="#">33</div>
                      </div>
  
                      <div class="post_profile_icon line">
                          <img src="images/profile-pic.png" alt="#"><i class="fas fa-caret-down"
                              style="margin-left: 5px;"></i>
                      </div>
                  </div>
  
              </div>
  
  
              <!------------------------------------------------ post-4 ------------------------------------------------>
              <div class="post_container">
                  <div class="adjust">
                      <div class="user_profile">
                          <img src="images/profile-pic.png" alt="#">
                          <div style="margin-left: 58px;">
                              <p>John Nikolson</p>
                              <span id="days4"></span> <span id="d4">days</span> <span id="hours4"></span> <span
                                  id="h4">hr</span>
                              <span id="minutes4"></span> <span id="m4">min</span> <span id="sec4"></span> <span
                                  id="s4">sec</span>
                          </div>
                      </div>
                      <a href="#"><i class="fas fa-ellipsis-v" style="margin-right: 23px; color: #9a9a9a;"></i></a>
                  </div>
  
                  <p class="post_para">Buy <span>@amazon</span> product Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Illo totam a expedita reiciendis magni tempora saepe. <a href="#">#Laptop</a> <a
                          href="https://Naukri.com" target="_blank">Naukri.com</a></p>
  
                  <img src="images/feed-image-4.png" alt="#" class="post_img">
  
                  <div class="post-row">
                      <div class="activity_icons">
                          <div><img src="images/like-blue.png" alt="#">200</div>
                          <div><img src="images/comments.png" alt="#">18</div>
                          <div><img src="images/share.png" alt="#">39</div>
                      </div>
  
                      <div class="post_profile_icon line">
                          <img src="images/profile-pic.png" alt="#"><i class="fas fa-caret-down"
                              style="margin-left: 5px;"></i>
                      </div>
                  </div>
  
              </div>
  
  
              <!------------------------------------------------ post-5 ------------------------------------------------>
              <div class="post_container">
                  <div class="adjust">
                      <div class="user_profile">
                          <img src="images/profile-pic.png" alt="#">
                          <div style="margin-left: 58px;">
                              <p>John Nikolson</p>
                              <span id="days5"></span> <span id="d5">days</span> <span id="hours5"></span> <span
                                  id="h5">hr</span>
                              <span id="minutes5"></span> <span id="m5">min</span> <span id="sec5"></span> <span
                                  id="s5">sec</span>
                          </div>
                      </div>
                      <a href="#"><i class="fas fa-ellipsis-v" style="margin-right: 23px; color: #9a9a9a;"></i></a>
                  </div>
  
                  <p class="post_para">Buy <span>@amazon</span> product Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Illo totam a expedita reiciendis magni tempora saepe. <a href="#">#Laptop</a> <a
                          href="https://Microsoft.com" target="_blank">microsoft.com</a></p>
  
                  <img src="images/feed-image-5.png" alt="#" class="post_img">
  
                  <div class="post-row">
                      <div class="activity_icons">
                          <div><img src="images/like.png" alt="#">1K</div>
                          <div><img src="images/comments.png" alt="#">166</div>
                          <div><img src="images/share.png" alt="#">207</div>
                      </div>
  
                      <div class="post_profile_icon line">
                          <img src="images/profile-pic.png" alt="#"><i class="fas fa-caret-down"
                              style="margin-left: 5px;"></i>
                      </div>
                  </div>
              </div>
  
              <button type="button" class="load-more-btn">Load More</button>
  
  
          </div>
  
  
          <!-------------------------------------- right container -------------------------------------------->
  
          <div class="container_right">
              <div class="rightbar_title">
                  <h4>Events</h4>
                  <a href="#">See All</a>
              </div>
  
              <div class="event">
                  <div class="left_event">
                      <h3>18</h3>
                      <span>March</span>
                  </div>
                  <div class="right_event">
                      <h4>Social Media</h4>
                      <p><i class="fa-solid fa-location-dot" style="margin-right: 4px;"></i>Wilson Tech Park</p>
                      <a href="#">More Info</a>
                  </div>
              </div>
  
              <div class="event">
                  <div class="left_event">
                      <h3>22</h3>
                      <span>June</span>
                  </div>
                  <div class="right_event">
                      <h4>Mobile Marketing</h4>
                      <p><i class="fa-solid fa-location-dot" style="margin-right: 4px;"></i>Wilson Tech Park</p>
                      <a href="#">More Info</a>
                  </div>
              </div>
  
              <div class="rightbar_title" style="padding-top: 40px;">
                  <h4>Advertisement</h4>
                  <a href="#">Close</a>
              </div>
              <img src="images/advertisement.png" alt="#" class="rightbar_ads">
  
              <div class="rightbar_title" style="padding-top: 30px;">
                  <h4>Conversations</h4>
                  <a href="#">Hide Chat</a>
              </div>
  
              <div class="online_list">
                  <div class="online">
                      <img src="images/member-1.png" alt="#">
                  </div>
                  <p>Laura ipsum</p>
              </div>
              <div class="online_list">
                  <div class="online">
                      <img src="images/member-2.png" alt="#">
                  </div>
                  <p>Mark Gray</p>
              </div>
              <div class="online_list">
                  <div class="online">
                      <img src="images/member-3.png" alt="#">
                  </div>
                  <p>Shaley Laureanse</p>
              </div>
          </div>
  
      </div>
  
      <div class="footer">
          <em> @copyright SocialBook.com </em> &nbsp;&nbsp;&nbsp; All rights reserved
      </div>
  
  
  <script src="site.js"></script>
  <script src="additional.js"></script>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});