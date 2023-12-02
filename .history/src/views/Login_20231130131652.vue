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
          <p style="font-size: 60px">门诊挂号系统</p>
        </div>
      </div>
      <div class="login">
        <div class="main">
          <p>
            <input class="in" type="tel" placeholder="手机号" />
          </p>
          <p class="password">
            <input class="in" type="password" placeholder="密码" />
            <!-- <i class="ri-eye-off-line"></i>
              <a href="#">找回密码</a> -->
          </p>
          <p>
            <input type="submit" class="submit" value="登录" />
          </p>
          <div class="separator">
            <p class="select">选择登录身份</p>
          </div>
          <div class="roles">
            <div class="role"></div>
            <div class="role"></div>
            <div class="role"></div>
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
  background-color: #fcfcff;
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
      margin-top: -200px;
      position: relative;
      .hero::before {
        content: "";
        position: absolute;
        top: 32%;
        left: 100px;
        width: 280px;
        height: 110px;
        background: linear-gradient(
          to right,
          #71d2ed,
          #4460f1,
          rgb(255, 56, 103)
        );
        z-index: -1;
        filter: blur(90px);
        animation: gradientAnimation 3s ease-in-out infinite;
      }
    }
    .login {
      width: 40%;
      display: grid;
      height: 60%;
      place-items: center;
      margin-top: -80px;
      .main {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        .roles {
          width: 100%;
          display: flex;
          height: 60px;
          justify-content: space-evenly;
          .role {
            height: 60px;
            width: 60px;
            border-radius: 10px;
          }
        }

        .separator {
          position: relative;
          margin-top: 14px;
          .select {
            font-size: 14px;
            width: fit-content;
            padding: 0 10px;
            color: #9398b3;
            background-color: #fcfcff;
            margin: 0 auto;
            position: relative;
            z-index: 1;
            font-weight: 300;
          }
        }

        .separator::before {
          content: "";
          position: absolute;
          top: 50%;
          width: 100%;
          height: 1px;
          background-color: #9398b3;
          opacity: 0.3;
          z-index: 1;
        }

        .submit {
          font-weight: 700;
          color: #fff;
          background-color: #4460f1;
          box-shadow: #4460f1 0 20px 30px -10px;
          cursor: pointer;
          transition: box-shadow 0.3s;
          width: 100%;
          line-height: 50px;
          border-radius: 10px;
          border: 0;
          letter-spacing: 1px;
        }

        .in {
          font-size: 16px;
          width: 100%;
          border: 0;
          outline: 0;
          padding: 0 20px;
          line-height: 60px;
          border-radius: 10px;
          /*修复input 加入padding之后大小变化的问题*/
          box-sizing: border-box;
          background-color: #f2f4ff;
        }

        .in::placeholder {
          color: #333333;
          font-family: "Noto Sans SC", sans-serif;
          font-size: inherit;
          font-weight: 400;
        }
      }
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
