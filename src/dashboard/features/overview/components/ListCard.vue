<template>
  <div class="CardList px-4 py-5">
    <div class="Score">
      <div class="ListLayout">
        <div class="ListText"><label>Sensor List</label></div>
        <div class="ListConnect"><i class="fas fa-check-circle"></i></div>
        <div class="ListDisConnect"><i class="fas fa-times-circle"></i></div>
      </div>
      <div class="ListLayout">
        <div class="ListText"><label>TEMP_HUMID</label></div>
        <div class="ListConnect">{{ TEMP_HUMID.Connect }}</div>
        <div class="ListDisConnect">{{ TEMP_HUMID.DisConnect }}</div>
      </div>
      <div class="ListLayout">
        <div class="ListText"><label>COUNTER</label></div>
        <div class="ListConnect">{{ COUNTER.Connect }}</div>
        <div class="ListDisConnect">{{ COUNTER.DisConnect }}</div>
      </div>
      <div class="ListLayout">
        <div class="ListText"><label>DOOR</label></div>
        <div class="ListConnect">{{ DOOR.Connect }}</div>
        <div class="ListDisConnect">{{ DOOR.DisConnect }}</div>
      </div>
    </div>
    <div class="ScoreTotal">
      <div class="ListLayouttotal">
        <div class="ListText"><label>ALL</label></div>
        <div class="ListConnect">{{ Total.Connect }}</div>
        <div class="ListDisConnect">{{ Total.DisConnect }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TEMP_HUMID: {
        DisConnect: 0,
        Connect: 0
      },
      COUNTER: {
        DisConnect: 0,
        Connect: 0
      },
      DOOR: {
        DisConnect: 0,
        Connect: 0
      },
      Total: {
        DisConnect: 0,
        Connect: 0
      }
    };
  }
};
</script>

<style scoped>
.CardList {
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  justify-content: space-between;
}
.ListLayout {
  color: black;
  height: 80px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid rgba(0, 0, 0, 0.6);
}
.ListLayouttotal {
  height: 80px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ListText {
  width: 50%;
  font-size: 20px;
}
.ListConnect {
  width: 20%;
  text-align: center;
  font-size: 25px;
  color: green;
}
.ListDisConnect {
  width: 20%;
  text-align: center;
  font-size: 25px;
  color: red;
}
</style>
