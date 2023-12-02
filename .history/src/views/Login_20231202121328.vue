<script setup>
import { useStore } from "vuex";
import { ref, onBeforeMount, onMounted } from "vue";
import { send_request, getVerifyToken } from "../utils/fetch";
import { useRouter } from "vue-router";
const store = useStore(),
  state = store.state,
  router = useRouter();
const roles = ref();
const password = ref(""),
  id = ref(""),
  enter = ref();
const mapper = ["patient", "doctor", "admin"];
const selectLoginStatus = (idx) => {
  if (idx != state.loginStatus) {
    const last = state.loginStatus;
    store.commit("changeLoginStatus", idx);
    const doms = roles.value.children;
    doms[idx].children[0].src = `/src/assets/login/${mapper[idx]}_white.png`;
    doms[last].children[0].src = `/src/assets/login/${mapper[last]}_blue.png`;
  }
};
const login = async () => {
  if (id.value) {
    const result = await send_request({
      url: state.baseUrl + "/login",
      payload: {
        status: state.loginStatus,
        id: id.value,
        password: password.value,
      },
    }).then((data) => data.json());
    if (result.status == 200) {
      store.commit("updateToken", result);
      router.push("/" + mapper[state.loginStatus]);
    } else alert("用户名或密码错误");
  } else alert("用户名不能为空");
};
onBeforeMount(async () => {
  if (state.token) {
    try {
      const result = await send_request({
        url: state.baseUrl + "/verify",
        extra_headers: getVerifyToken(state.token),
      }).then((data) => data.json());
      if (result.status == 200) {
        store.commit("loadUserInfo", result.info);
        router.push("/" + mapper[state.loginStatus]);
      } else throw Error();
    } catch (error) {
      store.commit("updateToken", null);
    }
  }
});
onMounted(() => {
  const doms = roles.value.children;
  for (let i = 0; i < doms.length; i++) {
    if (i == state.loginStatus)
      doms[i].children[0].src = `/src/assets/login/${mapper[i]}_white.png`;
    else doms[i].children[0].src = `/src/assets/login/${mapper[i]}_blue.png`;
  }
});
</script>
<template>
  <div class="content">
    <div class="site">
      <div class="left">
        <div class="hero" style="line-height: 1.4; font-size: 75px">
          <!-- <p style="font-size: 70px; margin-top: 10px">
            欢迎使用<br />门诊挂号系统
          </p> -->
          <div>欢迎使用<br />门诊挂号系统</div>
        </div>
      </div>
      <div class="login">
        <div class="main">
          <p>
            <input
              v-model="id"
              class="in"
              type="tel"
              :placeholder="state.loginStatus ? '工号' : '手机号'"
            />
          </p>
          <p class="password">
            <input
              v-model="password"
              class="in"
              type="password"
              placeholder="密码"
              @keyup.enter="login"
            />
            <!-- <i class="ri-eye-off-line"></i>
              <a href="#">找回密码</a> -->
          </p>
          <p>
            <button class="submit" @click="login">登录</button>
          </p>
          <div class="separator">
            <p class="select">选择登录身份</p>
          </div>
          <div class="roles" ref="roles">
            <div
              class="wrap"
              :class="{ act: state.loginStatus == 0 }"
              @click="selectLoginStatus(0)"
            >
              <img class="role" src="../assets/login/patient_white.png" />
            </div>
            <div
              class="wrap"
              :class="{ act: state.loginStatus == 1 }"
              @click="selectLoginStatus(1)"
            >
              <img class="role" src="../assets/login/doctor_blue.png" />
            </div>
            <div
              class="wrap"
              :class="{ act: state.loginStatus == 2 }"
              @click="selectLoginStatus(2)"
            >
              <img class="role" src="../assets/login/admin_blue.png" />
            </div>
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
  font-size: 24px;
  font-weight: bold;
  line-height: 1.8;

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
        z-index: 0;
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
          .wrap {
            border-radius: 15px;
            width: 60px;
            height: 60px;
            border-radius: 13px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            background-color: #fff;

            .role {
              height: 50px;
              width: 50px;
              display: block;
            }
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
}
.act {
  background-color: #4460f1 !important;
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
