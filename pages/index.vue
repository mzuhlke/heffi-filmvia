<template>
  <div class="container" container-fluid main_container full-width>
    <div>
      <h1>Helsinki Education Film Festival International 2022</h1>
      <img src="Heffi_blue_logo-min.jpg" alt="filmvia" width="250px" />
      <!--<Logo />-->
      <br />
      <br />
      <b-button onclick="window.location.href='/login';"> Login </b-button>
      <br />
      <br />
      <h3>
        <a href="https://www.heffifinland.com/">HEFFI </a>festival home page
      </h3>
      <br />
      <img src="en_badge_web_generic.png" alt="google" height="55px" />
    </div>
  </div>
</template>

<script>
// import VueJwtDecode from 'vue-jwt-decode'
export default {
  auth: false,
  data() {
    return {
      user: {
        name: '',
        role: '',
        email: '',
      },
    }
  },
}
</script>
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
