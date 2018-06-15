<template>
<div>
 <div class="nav white">
              <div class="logo"><img src="../../../static/images/logo.png" /></div>
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
  <sliderbar></sliderbar>
  <div class="slideall">
    <div class="long-title"><span class="all-goods">全部分类</span></div>
    <div class="nav-cont">
      <ul>
        <li class="index"><a href="#">首页</a></li>
        <li class="qc"><a href="#">闪购</a></li>
        <li class="qc"><a href="#">限时抢</a></li>
        <li class="qc"><a href="#">团购</a></li>
        <li class="qc last"><a href="#">大包装</a></li>
      </ul>
      <div class="nav-extra">
        <i class="am-icon-user-secret am-icon-md nav-user"></i><b></b>我的福利
        <i class="am-icon-angle-right" style="padding-left: 10px;"></i>
      </div>
    </div>
    <shopnav></shopnav>
  </div>

</div>
</template>

<script>
import Sliderbar from './sliderbar'
import Shopnav from './shopnav'

export default {
  components: {
    'sliderbar': Sliderbar,
    'shopnav': Shopnav
  },
  name: 'App'
}
</script>
