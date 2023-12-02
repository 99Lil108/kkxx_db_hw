<script setup></script>
<template>
  <div class="content">
    <header class="header">
      <div style="letter-spacing: 1px">@数据库作业</div>
    </header>
    <div class="site">
      <div class="left">
        <div class="hero">
          <p>欢迎使用</p>
          <p>门诊挂号系统</p>
        </div>
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
      place-items: center;
      font-size: 60px;
      margin-top: -100px;
      position: relative;
      .hero::before {
        content: "";
        position: absolute;
        top: 29%;
        left: 50px;
        width: 280px;
        height: 100px;
        background: linear-gradient(
          to right,

          #71d2ed,
          rgb(255, 56, 103)
        );
        z-index: -1;
        filter: blur(70px);
        animation: gradientAnimation 3s ease-in-out infinite;
      }
    }
    .login {
      width: 40%;
      display: grid;
      place-items: center;
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

@keyframes gradientAnimation {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.2);
  }
  100% {
    transform: rotate(360deg) scale(1.1);
  }
}
</style>
