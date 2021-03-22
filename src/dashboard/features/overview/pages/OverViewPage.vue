<template>
  <div>
    <h1 class="py-1 px-3">
      OverView
    </h1>
    <div class="LayoutCards px-3"><StatusCards></StatusCards></div>
    <div class="content px-3 py-2">
      <b-container-fluid>
        <b-row>
          <b-col sm="12" lg="8" class="Card py-2">
            <MapCard></MapCard>
          </b-col>
          <b-col sm="12" lg="4" class="Card py-2">
            <ListCard></ListCard>
          </b-col>
        </b-row>
      </b-container-fluid>
    </div>
  </div>
</template>

<script>
import StatusCards from "../components/StatusCards";
import MapCard from "../components/MapCard";
import ListCard from "../components/ListCard";
export default {
  components: {
    StatusCards,
    MapCard,
    ListCard
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DotGothic16&family=Titillium+Web&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
h1 {
  font-family: "Oswald", sans-serif;
}
.Card {
  height: 700px;
}
</style>
