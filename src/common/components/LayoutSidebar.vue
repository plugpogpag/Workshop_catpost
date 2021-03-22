<template>
  <div class="Sidebar">
    <nav class="SidebarLayout">
      <ul>
        <li @click.prevent="GoOverview()">
          <i class="fas fa-home"></i>
          <a href="#">Overview</a>
        </li>
        <li @click.prevent="GoDashboard()">
          <i class="fas fa-chart-line"></i>
          <a href="#">Dashboard</a>
        </li>
        <li @click.prevent="GoAdmin()">
          <i class="fas fa-user-cog"></i>
          <a href="#">Admin</a>
        </li>
      </ul>
      <div class="logo"><img src="http://122.155.174.204:92/images/logo-cat.png" alt="" /></div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    GoOverview() {
      this.$router.push({
        name: "OverViewPage"
      });
    },
    GoDashboard() {
      this.$router.push({
        name: "DashboardPage"
      });
    },
     GoAdmin() {
      this.$router.push({
        name: "AdminPage"
      });
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
  list-style: none;
}
@media only screen and (min-width: 1191px) {
  .Sidebar {
    width: 300px;
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    transition: all 0.3s ease;
  }
  .Sidebar .SidebarLayout {
    width: 100%;
    height: 100%;
    background-color: steelblue;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    border-radius: 5px;
  }
  .Sidebar .SidebarLayout ul {
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .Sidebar .SidebarLayout ul li {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px;
  }
  .Sidebar .SidebarLayout ul li:hover {
    height: 60px;
    display: flex;
    background-color: rgba(255, 0, 0, 0.6);
    cursor: pointer;
    transition: all 0.3 ease;
  }
  .Sidebar .SidebarLayout ul li i {
    font-size: 25px;
    margin: 0 30px 0 10px;
    color: white;
  }
  .Sidebar .SidebarLayout ul li a {
    text-decoration: none;
    color: white;
    width: 100%;
    font-size: 18px;
    font-weight: normal;
    letter-spacing: 0.5px;
  }
  .Sidebar .SidebarLayout .logo {
    position: absolute;
    top: 94%;
    right: 35%;
  }
}
@media only screen and (max-width: 1190px) {
  .Sidebar {
    width: 0px;
    overflow: hidden;
    height: 100vh;
  }
}
</style>
