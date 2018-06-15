<template>
  <div class="login-banner">
    <div class="login-main">
      <div class="login-banner-bg"><span></span><img src="../../../static/images/big.jpg" /></div>
      <div class="login-box">

        <h3 class="title">登录商城</h3>

        <div class="clear"></div>
          <form v-on:submit.prevent="submit">
            <div class="login-form">
            <div class="user-name">
              <label for="user"><i class="am-icon-user"></i></label>
              <input type="text" v-model="userName" name="user" id="user" placeholder="邮箱/手机/用户名">
            </div>
            <div class="user-pass">
              <label for="password"><i class="am-icon-lock"></i></label>
              <input type="password" v-model="passWord" name="password" id="password" placeholder="请输入密码">
            </div>

        </div>
          </form>
        <div class="login-links">
          <label for="remember-me"><input id="remember-me" type="checkbox">记住密码</label>
          <a href="#" class="am-fr">忘记密码</a>
          <a href="register.html" class="zcnext am-fr am-btn-default">注册</a>
          <br />
        </div>
        <div class="am-cf">
          <input type="submit" name="" value="登 录" class="am-btn am-btn-primary am-btn-sm">
        </div>

        <div class="partner">
          <h3>合作账号</h3>
          <div class="am-btn-group">
            <li><a href="#"><i class="am-icon-qq am-icon-sm"></i><span>QQ登录</span></a></li>
            <li><a href="#"><i class="am-icon-weibo am-icon-sm"></i><span>微博登录</span> </a></li>
            <li><a href="#"><i class="am-icon-weixin am-icon-sm"></i><span>微信登录</span> </a></li>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
var $ = require('jquery')

export default{
  data () {
    return {
      userName: '',
      passWord: '',
      personobj: {
        type: Object,
        default: ''
      }
    }
  },
  name: 'App',
  methods: {
    submit () {
      let that = this
      $.ajax({
        url: global.ROOTPATH + '/wechat/userLogin',
        type: 'post',
        dataType: 'text',
        data: {
          userName: this.userName,
          passWord: this.passWord
        },
        success: function (data) {
          this.personobj = JSON.parse(data)
          // console.log('store = ' + that.$store);
          if (this.personobj.code === 0) {
            that.$store.state.personobj = this.personobj
            // console.log(this.personobj.personinfo.workcode);
            localStorage.setItem('personobj', data)
            // 将workcode存入到personobj的localStorage中,防止刷新数据后消失
            let test = JSON.parse(localStorage.getItem('personobj'))
            console.log(test)
            that.$router.replace({ path: '/person' })
          } else {
            alert('账号密码错误')
          }
        },
        error: function (data) {
          alert('error')
        }
      })
    }
  }
}
</script>
