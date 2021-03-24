<template>
  <div>
    <div class="LogoPage">
      <h1 class="py-1 px-3 mt-3">
        Dashboard List
      </h1>
      <div class="content mx-3">
        <CardDashboard></CardDashboard>
      </div>
    </div>
  </div>
</template>

<script>
import CardDashboard from "../components/CardDashboard";
export default {
  components: {
    CardDashboard
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.LogoPage {
  font-family: "Roboto", sans-serif;
  color: rgba(0, 0, 0, 0.7);
}
</style>
