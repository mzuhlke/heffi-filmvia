<template>
  <div class="container">
    <div>
      <h1>Helsinki Education Film Festival International 2022</h1>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAXVBMVEVHcEwwOksbeqYAsf8AsP8Ar/8wO0sbdqkxOksxO0swOUoAsv8AvP8Apv8ApP8Auf8xO0sAwP8Awv8As/8AsP8Avv8Aov8AvP8Arv8Auv8ArP8cbpoPjsorSWIEoPAOuG4dAAAAEHRSTlMAYBC/62WAILPrcK9/gKCfeuPyPgAAAzBJREFUaN7tl21jqiAYhlva21ZbiIiUx///MwcI+hD4gkI7H7hWCIjce4CEe7dLJBKJRCLhZn/N8iIMpHn+uysu58/TlOzpqwhL00vf7+dx6UNehIY9B+XLx4jutW+OCoSQTNWnGFIk7qOuka6WjSRDve4KKN+P7nhRr4vM7nSvfnQRFAVUdsV8ypVaWPhog3m+OOb5B4VX7aQbEPLZDnjmcbJBGgjf99bKIj0I5oTiUIVkDhFQROCR4cmhzEOeXF8ZcYDIPPNtpsc6J9EoWiB8eRVGKJqwOcmvwkM7ClKYpbDOqKLUqjeZEs4ph9AOfXVDiJ3TTxHX83hqqDO6FEI9mV5cVxoP+HP6tDbieLoEvDPv9jvzizEm2/FL/6FMVsiMzIo/xvQdVSdb6DbqCdY3ZdOvTL5JMA1VXwcU1FOQvlQOBb60ZjaJ3YHFYW5b5Osruu5x9OgTXBYvOfrwef4JrLvwsCekD1mosNtmiPZyPu6Td0gkEhGNOV7EA/juWeaNueiS4S5lKqvLOqdK/NMsl54x5kO3Jq+KmvbpoTxuzJ1DyqbG29j25hkx5ngVXspuY75Kl7U+8+w05ngljU/IDmOOV+MjbBvzAy5xaYJ1FQYFDG935W3rKzN7Xc7Wsc7L1bQ+wpZbLDfgNcku4drus7YyoYXzWlPWQqR+oasyq2WpxNuGOqvdlLWl98q2xXWrV+P1c7KN+Xphn3emy5jDvh7iIxNZknlxkV/VRCAuG1+ZfJN4dJ111GZa9zdrkBds3iR2h8cE9eidzdsiX1+PFQQ4CIijj69smKMPn+dvP91Qhz1lzBcG23hEm4x5IpGIacxvWV5VrY/pDmPMK8GD/1VNWOkZYy5EpS6/eO08m3anmw5WX0IrjxlzJae0RRpc2W3MtVw/2FUbep5dZ65vLdvF29GEDtlhzE1Ftcqq0MIOY24K6n8i/vrKKifxxxosLUgbWthyi9UIwSf5vxHO3brxh/rPFtfNLRz852Qbc7dw6Hemy5j/zUj3m4S5tN6xSQwvzYgz/DF6EIire5w4+oBxftvRRxhzsK7eeNhTxlwebwMHm4x5IpFIJBIT/AIYgRbDqSSOKgAAAABJRU5ErkJggg=="
        alt="filmvia"
        height="250px"
        width="250px"
      />
      <!--<Logo />-->
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
  // computed: {},
  /* mounted() {
     let token2 = ''
    let to = ''
    let to2 = ''
    token2 = this.$auth.strategy.token.get()
    // eslint-disable-next-line no-console
    // console.log('token', token)
    if (token2 !== '') {
      to2 = token2
      to = to2.replace('Bearer ', '')
      // eslint-disable-next-line no-console
      // console.log('to', to)
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      const claims = VueJwtDecode.decode(to)
      // eslint-disable-next-line no-console
      // console.log('claims', claims)
      if (claims) {
        this.user.name = claims.Name
        this.user.role = claims.Role
        this.user.email = claims.Email
      }
    }
    //  this.user = this.$store.getters.getUser
    // eslint-disable-next-line no-console
    // console.log('user mounted', this.$store.getters.getUser) 
  }
  methods: {
    addMedia() {
      this.$router.push({ path: 'addmedia' })
    },
    getAllMedias() {
      this.$router.push({ path: this.localePath('addmedia') })
    },
  }, */
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
