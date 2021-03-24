<template>
  <div class="Main">
    <div class="CardLaout">
      <b-container-fluid>
        <b-row>
          <b-col lg="3" md="6" class="py-3">
            <div class="card">
              <i class="fas fa-user-cog"></i>
              <label>Super admin</label>
            </div>
          </b-col>
          <b-col lg="3" md="6" class="py-3">
            <div class="card">
              <i class="fas fa-users-cog"></i>
              <label>Admin</label>
            </div>
          </b-col>
          <b-col lg="3" md="6" class="py-3">
            <div class="card">
              <i class="fas fa-mail-bulk"></i>
              <label>หลักสี่</label>
            </div>
          </b-col>
        </b-row>
      </b-container-fluid>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  background-color: white;
  height: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(0, 18, 59, 0.16);
  border: 1px solid rgba(0, 0, 0, 0.125);
  color: steelblue;
   transition: transform .2s;
}
.card:hover {
  transform: scale(1.1);
}
.card i {
  font-size: 60px;
  margin-bottom: 20px;
}
.card label {
  font-weight: bolder;
}
</style>
