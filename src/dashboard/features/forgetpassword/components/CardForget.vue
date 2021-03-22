<template>
  <div class="cardLayout px-4 py-3">
    <form @submit.prevent="sendInfo()">
      <div class="logo my-4">
        <h1>Forgot Password</h1>
      </div>
      <div class="input mb-4">
        <label class="form-label">Enter you account e-mail</label>
        <b-form-input
          id="InputEmail"
          v-model="email"
          trim
          placeholder="e.g. example@Email.com"
          type="email"
        ></b-form-input>
      </div>
      <b-alert show> We will send password reset link to your e-mail.</b-alert>
      <div class="btt pt-2">
        <b-button block variant="danger" type="submit">Send</b-button>
        <a href="#" class="py-2" @click="home()">Back to login</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: ""
    };
  },
  methods: {
    home() {
      this.$router.push({
        name: "AuthLoginPage"
      });
    },
    sendInfo() {
      if (this.email === "") {
        this.$swal.fire({
          position: "center",
          icon: "error",
          title: "โปรดใส่Email",
          text: "เราพบว่าท่านไม่ใส่ข้อมูล!",
          showCancelButton: true,
          showConfirmButton: false,
          cancelButtonColor: "rgb(255,0,0)",
          cancelButtonText: "close"
        });
      } else {
        this.$swal
          .fire({
            position: "center",
            icon: "success",
            title: "ส่งเเล้ว!",
            text: "ส่งคำร้องขอไปยังระบบเรียบร้อย",
            showCancelButton: false,
            showConfirmButton: true,
            confirmButtonText: "OK",
            confirmButtonColor: "green"
          })
          .then((result) => {
            if (result.value) {
              this.$router.push({
                name: "AuthLoginPage"
              });
            }
          });
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Kanit", sans-serif;
}
.cardLayout {
  max-width: 450px;
  background: white;
  border-radius: 5px;
}
.cardLayout .logo {
  text-align: center;
  color: orange;
}
.cardLayout .logo h1 {
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 2px;
}
.cardLayout input {
  width: 100%;
  box-shadow: 0 2px 4px rgb(0 0 0 / 16%);
}
.cardLayout .input label {
  color: rgba(0, 0, 0, 0.5);
}
.cardLayout .btt {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.cardLayout .btt a {
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: red;
  font-size: 12px;
}
.cardLayout .btt a:hover {
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
}
</style>
