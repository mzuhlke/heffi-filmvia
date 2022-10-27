<template>
  <b-navbar
    name="navbar"
    toggleable="lg"
    type="dark"
    style="background-color: #0656a1"
  >
    <b-navbar-brand href="/"
      ><img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAXVBMVEVHcEwwOksbeqYAsf8AsP8Ar/8wO0sbdqkxOksxO0swOUoAsv8AvP8Apv8ApP8Auf8xO0sAwP8Awv8As/8AsP8Avv8Aov8AvP8Arv8Auv8ArP8cbpoPjsorSWIEoPAOuG4dAAAAEHRSTlMAYBC/62WAILPrcK9/gKCfeuPyPgAAAzBJREFUaN7tl21jqiAYhlva21ZbiIiUx///MwcI+hD4gkI7H7hWCIjce4CEe7dLJBKJRCLhZn/N8iIMpHn+uysu58/TlOzpqwhL00vf7+dx6UNehIY9B+XLx4jutW+OCoSQTNWnGFIk7qOuka6WjSRDve4KKN+P7nhRr4vM7nSvfnQRFAVUdsV8ypVaWPhog3m+OOb5B4VX7aQbEPLZDnjmcbJBGgjf99bKIj0I5oTiUIVkDhFQROCR4cmhzEOeXF8ZcYDIPPNtpsc6J9EoWiB8eRVGKJqwOcmvwkM7ClKYpbDOqKLUqjeZEs4ph9AOfXVDiJ3TTxHX83hqqDO6FEI9mV5cVxoP+HP6tDbieLoEvDPv9jvzizEm2/FL/6FMVsiMzIo/xvQdVSdb6DbqCdY3ZdOvTL5JMA1VXwcU1FOQvlQOBb60ZjaJ3YHFYW5b5Osruu5x9OgTXBYvOfrwef4JrLvwsCekD1mosNtmiPZyPu6Td0gkEhGNOV7EA/juWeaNueiS4S5lKqvLOqdK/NMsl54x5kO3Jq+KmvbpoTxuzJ1DyqbG29j25hkx5ngVXspuY75Kl7U+8+w05ngljU/IDmOOV+MjbBvzAy5xaYJ1FQYFDG935W3rKzN7Xc7Wsc7L1bQ+wpZbLDfgNcku4drus7YyoYXzWlPWQqR+oasyq2WpxNuGOqvdlLWl98q2xXWrV+P1c7KN+Xphn3emy5jDvh7iIxNZknlxkV/VRCAuG1+ZfJN4dJ111GZa9zdrkBds3iR2h8cE9eidzdsiX1+PFQQ4CIijj69smKMPn+dvP91Qhz1lzBcG23hEm4x5IpGIacxvWV5VrY/pDmPMK8GD/1VNWOkZYy5EpS6/eO08m3anmw5WX0IrjxlzJae0RRpc2W3MtVw/2FUbep5dZ65vLdvF29GEDtlhzE1Ftcqq0MIOY24K6n8i/vrKKifxxxosLUgbWthyi9UIwSf5vxHO3brxh/rPFtfNLRz852Qbc7dw6Hemy5j/zUj3m4S5tN6xSQwvzYgz/DF6EIire5w4+oBxftvRRxhzsK7eeNhTxlwebwMHm4x5IpFIJBIT/AIYgRbDqSSOKgAAAABJRU5ErkJggg=="
        alt="filmvia"
        height="50px"
        width="50px"
      />
      Filmvia - Heffi viewer
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item v-if="!$auth.loggedIn" href="/login" active
            >Login</b-nav-item
          >
          <b-nav-item v-if="$auth.loggedIn" @click="logout">Logout</b-nav-item>
        </b-navbar-nav>
        <!--<b-nav-item-dropdown v-if="$auth.loggedIn" right>
          <template #button-content>
            <em>{{ user.name }}</em>
          </template>
          <b-dropdown-item href="profile">Profile</b-dropdown-item>
          <b-dropdown-item >Logout</b-dropdown-item>
        </b-nav-item-dropdown>-->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
// import VueJwtDecode from 'vue-jwt-decode'
export default {
  props: {
    pageTitle: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      user: {
        name: '',
        role: '',
        email: '',
      },
      search: '',
    }
  },
  /* updated() {
    const tokenBearer = this.$auth.strategy.token.get()
    // eslint-disable-next-line no-console
    // console.log('foken', tokenBearer)
    if (tokenBearer) {
      const token = tokenBearer.replace('Bearer ', '')
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      const claims = VueJwtDecode.decode(token)
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.user.name = claims.User_name
      // const role = claims.User_type
      //     if (role.includes('admin')) {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      //        this.user.role = 'admin'
      //    }

      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.user.email = claims.Email
      // eslint-disable-next-line no-console
      // console.log('role', this.user.role)
    }
    return this.user
  }, */

  // computed: {},
  /* computed: {
    rows() {
      return null
    },
  },

  /* mounted() {
    // this.user = this.$store.getters.getUser
    // eslint-disable-next-line no-console
    // console.log('user', this.$store.getters.getUser)
    const tokenBearer = this.$auth.strategy.token.get()
    // eslint-disable-next-line no-console
    // console.log('foken', tokenBearer)
    if (tokenBearer) {
      const token = tokenBearer.replace('Bearer ', '')
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.claims = VueJwtDecode.decode(token)
      // eslint-disable-next-line no-console
      // console.log('claims', this.claims)
    }
    return this.claims
  }, */
  methods: {
    async logout() {
      await this.$auth.logout()
    },
    searchpage() {
      this.$router.push({
        name: 'search',
        params: { data: this.search },
      })
      this.search = ''
    },
  },
}
</script>
<style scoped>
.navbar {
  background-color: #4e32a8;
}
</style>
