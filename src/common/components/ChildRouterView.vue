<template>
  <div class="bg">
    <div class="img_logo">
      <div class="imgleft">
        <img src="http://122.155.174.204:92/images/logo-thaipost.png" alt="" />
      </div>
      <div class="imgright">
        <img src="http://122.155.174.204:92/images/logo-cat.png" alt="" />
      </div>
    </div>
    <router-view class="Card"></router-view>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Kanit", sans-serif;
}
.bg {
  background-image: url(https://www.macthai.com/wp-content/uploads/2015/11/macthai-review-cat-telecom-service-telepresence-18.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.img_logo {
  position: relative;
  width: 100%;
}
.imgleft {
  display: inline-block;
  position: absolute;
  top: 40px;
  left: 40px;
}
.imgright {
  display: inline-block;
  position: absolute;
  top: 40px;
  right: 40px;
}
.Card {
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
