<template>
  <header>
    <article>
    <div class="mt-logo">
      <!--顶部导航条 -->
      <div class="am-container header">
        <ul class="message-l">
          <div class="topMessage">
            <!--此处需要进行是否登录的判断-->
            <div class="menu-hd">
              <a href="./login.html" target="_top" class="h">亲，请登录</a>
              <a href="../home/register.html" target="_top">免费注册</a>
            </div>
            <!--如果登录的话就执行下面的代码-->
            <!--你好，-->
            <!--&nbsp&nbsp&nbsp&nbsp<a href="../home/logout.php">退出登录</a>-->
          </div>
        </ul>
        <ul class="message-r">
          <div class="topMessage home">
            <div class="menu-hd"><a href="./index.html" target="_top" class="h">商城首页</a></div>
          </div>
          <div class="topMessage ">
            <div class="menu-hd"><a href="#" target="_top"><i class="glyphicon glyphicon-home"></i><span>商家入驻</span></a></div>
          </div>
          <div class="topMessage my-shangcheng">
            <div class="menu-hd MyShangcheng"><a href="#" target="_top"><i class="am-icon-user am-icon-fw"></i>个人中心</a></div>
          </div>
          <div class="topMessage mini-cart">
            <div class="menu-hd"><a id="mc-menu-hd" href="../home/shopcart.php" target="_top"><i class="am-icon-shopping-cart  am-icon-fw"></i><span>购物车</span><strong id="J_MiniCartNum" class="h">0</strong></a></div>
          </div>
          <div class="topMessage favorite">
            <div class="menu-hd"><a href="#" target="_top"><i class="am-icon-heart am-icon-fw"></i><span>收藏夹</span></a></div>
          </div>
        </ul>
      </div>

      <!--悬浮搜索框-->

      <div class="nav white">
        <div class="logoBig">
          <li><img src="../../../static/images/logobig.png" /></li>
        </div>

        <div class="search-bar pr">
          <a name="index_none_header_sysc" href="#"></a>
          <form>
            <input id="searchInput" name="index_none_header_sysc" type="text" placeholder="搜索" autocomplete="off">
            <input id="ai-topsearch" class="submit am-btn" value="搜索" index="1" type="submit">
          </form>
        </div>
      </div>

      <div class="clear"></div>
    </div>
    </article>
  </header>

</template>
<script>
export default{
  name: 'headnav'
}
</script>
