<template>
  <div class="navLayout">
    <nav class="Navbar">
      <div class="Navfirst">
        <div class="logoNav">
          <img src="http://122.155.174.204:92/images/logo-thaipost.png" alt="" />
        </div>
        <div class="BarNav">
          <button class="navbar-toggler" type="button" @click.prevent="ToggleMenu()">
            <span class="navbar-toggler-icon"> <i class="fas fa-bars"></i></span>
          </button>
        </div>
        <div class="BarNomal">
          <b-button variant="primary" class="mr-5" @click="home()">Logout</b-button>
        </div>
      </div>
      <div class="NavSecondEl" :class="[toggle ? 'Active' : 'NotActive']">
        <ul>
          <li @click="GoOverview()">
            <i class="fas fa-home"></i>
            <a href="#">Overview</a>
          </li>
          <li @click="GoDashboard()">
            <i class="fas fa-chart-line"></i>
            <a href="#">Dashboard</a>
          </li>
          <li @click="GoAdmin()">
            <i class="fas fa-user-cog"></i>
            <a href="#">Admin</a>
          </li>
          <hr />
          <li @click="home()">
            <i class="fas fa-user-lock"></i>
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false
    };
  },
  methods: {
    ToggleMenu() {
      this.toggle = !this.toggle;
    },
    home() {
      this.$router.push({
        name: "AuthLoginPage"
      });
    },
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
  .navLayout .Navbar .Navfirst {
    width: 100%;
    height: 50px;
    background-color: red;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navLayout .Navbar .Navfirst .logoNav img {
    width: 58px;
    margin-left: 50px;
  }
  .navLayout .Navbar .Navfirst .BarNav {
    display: none;
  }
  .navLayout .Navbar .NavSecondEl {
    display: none;
  }
}
@media only screen and (max-width: 1190px) {
  .navLayout .Navbar .Navfirst {
    width: 100%;
    height: 50px;
    background-color: red;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navLayout .Navbar .Navfirst .logoNav img {
    width: 58px;
    margin-left: 50px;
  }
  .navLayout .Navbar .Navfirst .BarNomal {
    display: none;
  }
  .navLayout .Navbar .Navfirst .BarNav {
    display: inline-block;
    margin-right: 36px;
  }
  .navLayout .Navbar .Navfirst .BarNav button i {
    color: white;
    font-size: 30px;
  }
  .navLayout .NavSecondEl {
    transition: all 0.3s ease;
  }
  .navLayout .NavSecondEl ul {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .navLayout .NavSecondEl ul li {
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navLayout .NavSecondEl ul li:hover {
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .navLayout .NavSecondEl ul li a {
    margin-left: 20px;
    letter-spacing: 1px;
  }
  .navLayout .NavSecondEl ul li a,
  i {
    color: white;
    text-decoration: none;
    font-size: 25px;
  }
  .Active {
    width: 100%;
    height: 240.8px;
    background-color: red;
    justify-content: center;
  }
  .NotActive {
    height: 0;
    overflow: hidden;
  }
}
</style>
