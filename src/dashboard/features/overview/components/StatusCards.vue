<template>
  <b-container-fluid>
    <b-row>
      <b-col sm="12" lg="3" class="py-2"
        ><div class="Card">
          <div class="CardLayout1">
            <div class="Maintext">
              <h2>All Devices</h2>
            </div>
            <div class="content">
              <h4>0</h4>
              <i class="fas fa-laptop"></i>
            </div>
          </div></div
      ></b-col>
      <b-col sm="12" lg="3" class="py-2"
        ><div class="Card">
          <div class="CardLayout2">
            <div class="Maintext">
              <h2>Devices Online</h2>
            </div>
            <div class="content">
              <h4>0</h4>
              <i class="fas fa-signal"></i>
            </div>
          </div></div
      ></b-col>
      <b-col sm="12" lg="3" class="py-2"
        ><div class="Card">
          <div class="CardLayout3">
            <div class="Maintext">
              <h2>Devices Fail</h2>
            </div>
            <div class="content">
              <h4>0</h4>
              <i class="fas fa-ban"></i>
            </div>
          </div></div
      ></b-col>
      <b-col sm="12" lg="3" class="py-2"
        ><div class="Card">
          <div class="CardLayout4">
            <div class="Maintext">
              <h2>Devices Offline</h2>
            </div>
            <div class="content">
              <h4>0</h4>
              <i class="fas fa-power-off"></i>
            </div>
          </div></div
      ></b-col>
    </b-row>
  </b-container-fluid>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DotGothic16&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.Card {
  font-family: "DotGothic16", sans-serif;
  cursor: pointer;
  max-width: 100%;
  height: 175px;
}
.CardLayout1 {
  background-color: #5aa7a7;
  border-radius: 5px;
  border-bottom: 5px solid rgba(0, 0, 0, 0.6);
  padding: 30px;
}
.CardLayout2 {
  background-color: #56c596;
  border-radius: 5px;
  border-bottom: 5px solid rgba(0, 0, 0, 0.6);
  padding: 30px;
}
.CardLayout3 {
  background-color: #ff9190;
  border-radius: 5px;
  border-bottom: 5px solid rgba(0, 0, 0, 0.6);
  padding: 30px;
}
.CardLayout4 {
  background-color: #9b9b9b;
  border-radius: 5px;
  border-bottom: 5px solid rgba(0, 0, 0, 0.6);
  padding: 30px;
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}
h2 {
  font-size: 25px;
  color: white;
}
h4,
i {
  font-size: 26px;
  color: white;
}
@media only screen and (max-width: 1346px) {
  h2 {
    font-size: 20px;
    color: white;
  }
}
</style>
