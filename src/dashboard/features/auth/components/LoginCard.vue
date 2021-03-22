<template>
  <div class="layout-login">
    <form @submit.prevent="authLogin()">
      <div class="logo">
        <h1>LOGIN</h1>
      </div>
      <div class="input-email px-2 py-2">
        <i class="fas fa-envelope mr-2"></i>
        <label class="form-label ">Email</label>
        <b-form-input id="email-El" v-model="user.username" type="email"></b-form-input>
      </div>
      <div class="input-password px-2 py-2">
        <i class="fas fa-lock mr-2"></i>
        <label class="form-label">Password</label>
        <b-form-input id="password-El" v-model="user.password" type="password"></b-form-input>
      </div>
      <div class="sub_login px-2 py-3">
        <b-form-checkbox
          id="checkbox-1"
          v-model="user.status"
          name="checkbox-1"
          value="on"
          unchecked-value="off"
        >
          Remember me
        </b-form-checkbox>
        <a @click="forgetPage()">Forgot Password</a>
        {{ CheckStatus }}
      </div>
      <div class="btt-login px-2 pb-2">
        <b-button class="btt" block variant="danger" type="submit"> LOGIN</b-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
        status: "off"
      }
    };
  },
  methods: {
    forgetPage() {
      this.$router.push({
        name: "ForgotPage"
      });
    },
    authLogin() {
      if (this.user.username === "admin@hotmail.com" && this.user.password === "passw@rd") {
        this.$swal
          .fire({
            position: "center",
            icon: "success",
            title: "ล็อกอินสำเร็จ!",
            text: "ยินดีตอนรับครับ!",
            showCancelButton: false,
            showConfirmButton: true,
            confirmButtonText: "OK",
            confirmButtonColor: "green"
          })
          .then((result) => {
            if (result.value) {
              this.$router.push({
                name: "OverViewPage"
              });
            }
          });
      } else {
        this.$swal.fire({
          position: "center",
          icon: "error",
          title: "Failed",
          text: "User not found",
          showCancelButton: true,
          showConfirmButton: false,
          cancelButtonColor: "rgb(255,0,0)",
          cancelButtonText: "กลับหน้าหลัก"
        });
      }
    }
  },
  computed: {
    CheckStatus() {
      const status = this.user.status;
      if (status === "on") {
        return console.log("kuy1");
      } else {
        return console.log("kuy2");
      }
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Kanit", sans-serif;
}
.layout-login {
  max-width: 400px;
  background: white;
  border-radius: 5px;
}
.layout-login form {
  padding: 5px;
  margin: 5px;
}
.layout-login form .logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  color: red;
  letter-spacing: 1px;
}
.layout-login form .logo h1 {
  font-weight: bolder;
}
.layout-login form .input-email,
.input-password {
  width: 320px;
  color: rgba(1, 1, 1, 0.6);
}
.layout-login form .input-email input,
.input-password input {
  box-shadow: 0 2px 4px rgb(0 0 0 / 16%);
}
.layout-login form .sub_login {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
.layout-login form .sub_login label {
  color: rgba(1, 1, 1, 0.6);
}
.layout-login form .sub_login a {
  color: rgba(255, 0, 0, 0.6);
  text-decoration: none;
}
.layout-login form .sub_login a:hover {
  color: rgba(1, 1, 1, 0.6);
  text-decoration: none;
  cursor: pointer;
}
.btt {
  font-weight: bolder;
  font-size: 20px;
}
</style>
