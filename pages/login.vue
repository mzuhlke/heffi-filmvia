<template>
  <b-card>
    <div class="vue-tempalte">
      <!-- <h4 class="title has-text-centered">Welcome back!</h4> -->
      <form method="post" @submit.prevent="login">
        <h3>Login</h3>
        <div class="form-group">
          <div class="mt-2">Email:</div>
          <b-form-input
            v-model="email"
            type="email"
            placeholder="Email address"
          >
          </b-form-input>
        </div>
        <div class="form-group">
          <div class="mt-2">Password:</div>
          <b-form-input
            v-model="password"
            type="password"
            placeholder="Password"
          >
          </b-form-input>
        </div>
        <b-button native-type="submit" type="primary" class="btn-fill">
          Login
        </b-button>
      </form>
      <div>
        <AlertError v-if="error" :message="error" />
      </div>
      <!-- <p>{{ error }}</p>
        <p class="forgot-password text-right mt-2 mb-4">
          <router-link v-slot="{ navigate }" to="/forgot-password">
            <span role="link" @click="navigate" @keypress.enter="navigate"
              >Forgot password ?</span
            >
          </router-link>
        </p>
       <h3>Login with</h3>
        <div class="social-icons">
          <ul>
            <li>
              <a href="#">
                <b-button class="btn-facebook" icon round>
                  <i class="fab fa-facebook"></i>
                </b-button>
              </a>
            </li>
            <li>
              <a href="#">
                <b-button class="btn-google" icon round>
                  <i class="fab fa-google"></i>
                </b-button>
              </a>
            </li>
          </ul>
        </div> -->
    </div>
  </b-card>
</template>

<script>
// import axios from 'axios'
// import { LoadingPanel } from '~/components'
// import VueJwtDecode from 'vue-jwt-decode'
import VueJwtDecode from 'vue-jwt-decode'
import AlertError from '~/components/AlertError'
// import { mapState } from 'vuex'
export default {
  //  middleware: 'guest',
  components: {
    AlertError,
  },
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    async login() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: { email: this.email, password: this.password },
        })
        // eslint-disable-next-line no-console
        // console.log(response)

        const user = {
          name: '',
          role: '',
          email: '',
        }
        // eslint-disable-next-line no-console
        // console.log(response.data.data)
        if (response.data.data.token) {
          const token = response.data.data.token // .replace('Bearer ', '')
          const refresh = response.data.data.refresh
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          const claims = VueJwtDecode.decode(token)
          // eslint-disable-next-line no-console
          // console.log('claims', claims)
          user.name = claims.Name
          // eslint-disable-next-line no-console
          // console.log('name', claims.Name)
          user.role = claims.Role
          user.email = claims.Email
          // eslint-disable-next-line no-console
          // console.log('claims', claims)
          this.$auth.setUser(user)
          // eslint-disable-next-line no-console
          // console.log('role', user.role)

          if (refresh) this.$auth.setUserToken(token, refresh)
          else this.$auth.setUserToken(token)

          // eslint-disable-next-line no-console
          // console.log(response.data.data.token)
          // eslint-disable-next-line no-console
          // console.log(response.data.data.refresh)
          // const decodedData = VueJwtDecode(response.data.data.token)
          // eslint-disable-next-line no-console
          // console.log(decodedData)

          // eslint-disable-next-line no-unused-expressions
          // this.$store.commit('setUser', user)
          // eslint-disable-next-line no-console
          // console.log('role role', user.role)
          // eslint-disable-next-line no-unused-expressions
          // console.log(this.$router)
          // this.$router.push({ path: this.localePath('home') })
          // this.$router.push('home')
          this.$router.push({
            name: 'media-getallmedias',
          })
        }
        // this.$auth.setUser(response.data.user) data.token
      } catch (err) {
        // eslint-disable-next-line no-console
        if (err.response.status === 401) {
          this.error = err.response.data.message.message
        } else {
          this.error = err
        }
      }
    },
  },
}
</script>
