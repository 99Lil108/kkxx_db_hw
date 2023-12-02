<script setup></script>
<template>
  <div class="content">
    <header class="header">
      <div style="letter-spacing: 1px">@数据库作业</div>
    </header>
    <div class="site">
      <div class="left">
        <h1>你好 世界<br />Hello World</h1>
        <p>如果你没有账号<br />可以<a href="#">点击这里</a>进行注册.</p>
      </div>
      <div class="login">
        <div class="main">
          <form action="">
            <p>
              <input type="email" placeholder="邮箱" />
            </p>
            <p class="password">
              <input type="password" placeholder="密码" />
              <i class="ri-eye-off-line"></i>
              <a href="#">找回密码</a>
            </p>
            <p>
              <input type="submit" class="submit" value="登录" />
            </p>
          </form>
          <div class="options">
            <div class="separator">
              <p>使用其他方式登录</p>
            </div>
            <ul>
              <li>
                <a href="#"><i class="ri-steam-fill ri-2x"></i></a>
              </li>
              <li>
                <a href="#"><i class="ri-playstation-fill ri-2x"></i></a>
              </li>
              <li>
                <a href="#"><i class="ri-xbox-fill ri-2x"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.content {
  width: 100%;
  height: 100%;
  font-family: "Noto Sans SC", sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.8;
  user-select: none;
  .site {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    .left {
      width: 40%;
      display: grid;
    }
    .login {
      width: 40%;
    }
  }

  .header {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    padding: 25px;
  }
}
</style>
