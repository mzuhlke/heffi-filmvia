<template>
  <div class="container">
    <br />
    <h1>{{ form.title }}</h1>
    <div class="form-group">
      <div v-if="form.poster">
        <video
          :poster="posterImage"
          controls
          controlsList="nodownload"
          @ended="onEnd()"
        >
          <source :src="fileURL" type="video/mp4" />
        </video>
      </div>

      <br />

      <b-row>
        <b-col>
          <p>
            <b
              >Rated points <small>(max: 90)</small> :
              {{ Math.round(form.rate_count / 9) }}</b
            >
            <br />
            Story: {{ form.story }}<br />
            Cinematography: {{ form.cinematography }}<br />
            Editing: {{ form.editing }}<br />
            Characters performance: {{ form.characters_performance }}<br />
            Script: {{ form.script }}<br />
            Director rating: {{ form.director_rate }}<br />
            Sound desingn: {{ form.sound_design }}<br />
            Product desing: {{ form.production_design }}
          </p>
        </b-col>
        <b-col>
          <div class="mt-2">QR code:</div>
          <qrcode-vue :value="qrvalue" :size="qrsize" level="H" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="mt-2">Title:</div>
          <b>
            {{ form.title }}
          </b>
        </b-col>
        <b-col>
          <div class="mt-2">Director:</div>
          <b>
            {{ form.director }}
          </b>
        </b-col>
        <b-col>
          <div class="mt-2">Genre:</div>
          <p>
            {{ form.genre }}
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="mt-2">Country:</div>
          <p>
            {{ form.country }}
          </p>
        </b-col>
        <b-col>
          <div class="mt-2">Year published:</div>
          <p>
            {{ form.year_published }}
          </p>
        </b-col>
        <b-col>
          <div class="mt-2">Duration:</div>
          <p>
            {{ form.duration }}
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="mt-2">Cast & crew:</div>
          <p>
            {{ form.cast_and_crew }}
          </p>
        </b-col>
        <b-col>
          <div v-if="form.web_site" class="mt-2">Web site:</div>
          <a href="form.web_site">{{ form.web_site }} </a>
        </b-col>
        <b-col>
          <div v-if="form.web_site" class="mt-2">Contact email:</div>
          <p>
            {{ form.accepted_by_email }}
          </p>
        </b-col>
      </b-row>

      <div class="mt-2">Synopsis:</div>
      <p>
        {{ form.synopsis }}
      </p>
    </div>
    <b class="mt-3"> Comments: </b> {{ totalRows }}
    <br />
    <b-table
      id="my-table"
      striped
      hover
      :items="items"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
      small
    >
      <template #cell(no)="data">
        {{ data.index + 1 }}
      </template>

      <template #cell(created_string)="data">
        {{ data.item.created_string.slice(0, 16) }}
      </template>
    </b-table>
  </div>
</template>
<script>
import QrcodeVue from 'qrcode.vue'

const countries = require('i18n-iso-countries')
countries.registerLocale(require('i18n-iso-countries/langs/en.json'))
export default {
  name: 'Updatemedia',
  components: {
    QrcodeVue,
  },
  data() {
    return {
      player: null,
      maa: '',
      qrsize: 150,
      qrvalue: 'https://filmvia.com',
      selected: { label: '', value: '' },
      options: [],
      genre: { label: '', value: '' },
      perPage: 10,
      totalRows: 0,
      currentPage: 1,
      page: 1,
      fileURL: '',
      items: [],
      fields: [
        'no',
        { key: 'user_name', label: 'User' },
        'comment',
        { key: 'created_string', label: 'Created' },
      ],
      row: '',

      options2: [
        { value: null, text: 'Please select genre' },
        { value: 'action', text: 'Action' },
        { value: 'comedy', text: 'Comedy' },
        { value: 'drama', text: 'Drama' },
        { value: 'fantasy', text: 'Fantasy' },
        { value: 'horror', text: 'Horror' },
        { value: 'mystery', text: 'Mystery' },
        { value: 'romance', text: 'Romance' },
        { value: 'thriller', text: 'Thriller' },
        { value: 'historical', text: 'Historical' },
        { value: 'adventure', text: 'Adventure' },
        { value: 'crime', text: 'Crime' },
        { value: 'animation', text: 'Animation' },
        { value: 'musical', text: 'Musical' },
        { value: 'documentary', text: 'Documentary' },
        { value: 'children', text: 'Children' },
        { value: 'fiction', text: 'Fiction' },
        { value: 'sci-fi', text: 'Sci-Fi' },
      ],

      responseHttp: '',
      error: '',
      responseHttp2: '',
      error2: '',
      responseHttp3: '',
      error3: '',
      responseHttp4: '',
      error4: '',
      thumbnailFile: '',
      posterFile: '',
      countryLabel: '',
      chat: {
        avatar: '',
        chat_id: '',
        comment: '',
        created_at: '',
        created_string: '',
        email: '',
        media_id: '',
        parent: '',
        privacy: '',
        room_id: '',
        user_name: '',
      },
      view: { media_id: '', privacy: '', view_percent: '' },
      form: {
        media_id: '',
        type: '',
        title: '',
        file_name: '',
        poster: '',
        trailer: '',
        thumbnail: '',
        quote: '',
        genre: '',
        duration: '',
        year_published: '',
        director: '',
        city: '',
        country: '',
        country_code: '',
        synopsis: '',
        cast_and_crew: '',
        subtitles: '',
        age_rating: '',
        location: '',
        web_site: '',
        camera: '',
        accepted_by_email: '',
      },
    }
  },
  computed: {
    countries() {
      const list = countries.getNames('en', { select: 'official' })
      return Object.keys(list).map((key) => ({ value: key, label: list[key] }))
    },
    posterImage() {
      return this.$config.webUrlVariable + 'poster/' + this.form.poster
      // return `http://localhost/filmvia/poster/${this.form.poster}`
    },
  },
  created() {
    this.getPersignedUrl(this.$route.query.media.file_name)
    this.getMedia(this.$route.query.media.media_id)
  },
  mounted() {
    this.getTable(this.$route.query.media.media_id)
  },
  updated() {},
  methods: {
    onEnd() {
      // eslint-disable-next-line no-console
      // console.log(this.form.media_id)
      this.addViewed(this.form.media_id)
      // eslint-disable-next-line no-console
      console.log('Ended')
    },
    addViewed(mediaId) {
      const URL = '/rate/addview'
      // eslint-disable-next-line no-console
      // console.log(URL)

      const config = {
        headers: {
          Authorization: this.$auth.strategy.token.get(),
          'Content-Type': 'application/json',
        },
      }
      // eslint-disable-next-line no-console
      // console.log(config)

      this.view.media_id = mediaId
      this.view.privacy = 1
      this.view.view_percent = 100
      // eslint-disable-next-line no-console
      // console.log(this.view)
      this.error = ''
      try {
        // eslint-disable-next-line no-undef
        this.$axios.post(URL, this.view, config).then((response) => {
          // eslint-disable-next-line no-console
          // console.log(response.data)
          this.responseHttp2 = response.data
        })
        // eslint-disable-next-line no-console
        // console.log('result', res)
      } catch (err) {
        this.error = err + '. ' + err.response.data.data
        // eslint-disable-next-line no-console
        console.log(err)
      }
    },
    getPersignedUrl(fileName) {
      const progress = {
        onUploadProgress: (progressEvent) =>
          (this.progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          )),
      }
      const URL = '/s3/presigned/' + fileName
      const config = {
        headers: {
          Authorization: this.$auth.strategy.token.get(),
          'Content-Type': 'application/json',
        },
      }
      // eslint-disable-next-line no-console
      //  console.log('URL ', URL)

      this.error = ''
      this.responseHttp = ''

      try {
        // eslint-disable-next-line no-undef
        this.$axios.get(URL, config, progress).then((response) => {
          // eslint-disable-next-line no-console
          //       console.log(response)
          this.response = response.data
          this.responseHttp = response.data
          this.componentKey += 1
          this.fileURL = response.data.data
          //    this.videoStreamfile =
          //      'https://media.s3.de.cloud.ovh.net/01GD269K0H9KQWXR6KA0W2THCH.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=4cde79fef277448a8181388f41cde993%2F20220916%2Fde%2Fs3%2Faws4_request&X-Amz-Date=20220916T043247Z&X-Amz-Expires=21600&X-Amz-SignedHeaders=host&X-Amz-Signature=2361527c2ee087676bdd3a0029d39f2f5143c1c21613781cc7e73bf143f2494f'
        })
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err)
        this.error = err.response.data
        this.componentKey += 1
      }
    },

    async getMedia(mediaId) {
      const progress = {
        onUploadProgress: (progressEvent) =>
          (this.progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          )),
      }
      const URL = '/media/get/' + mediaId
      const config = {
        headers: {
          Authorization: this.$auth.strategy.token.get(),
          'Content-Type': 'application/json',
        },
      }
      // eslint-disable-next-line no-console
      // console.log('URL ', URL)
      // this.age_rating = this.age_num.toString()
      try {
        // eslint-disable-next-line no-undef
        await this.$axios.get(URL, config, progress).then((response) => {
          // eslint-disable-next-line no-console
          //     console.log(response)
          this.response = response.data
          this.responseHttp = response.data
          this.componentKey += 1
          this.form = response.data.data
          // eslint-disable-next-line no-console
          //  console.log('this.selected', this.form.country)
          this.selected = this.form.country_code
          this.genre = this.form.genre
          this.qrvalue = 'https://filmvia.com/qr/' + this.form.media_id

          // eslint-disable-next-line no-console
          // console.log('this.selected', this.selected)
        })
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err)
        this.error = err.response.data
        this.componentKey2 += 1
      }
    },

    async getTable(mediaId) {
      const progress = {
        onUploadProgress: (progressEvent) =>
          (this.progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          )),
      }
      const URL = '/chat/getchats/' + mediaId + '/0'
      // eslint-disable-next-line no-console
      //  console.log('req url', URL)
      const config = {
        headers: {
          Authorization: this.$auth.strategy.token.get(),
          'Content-Type': 'application/json',
        },
      }
      // eslint-disable-next-line no-console
      //  console.log('headers url', URL)
      this.error = ''
      try {
        // eslint-disable-next-line no-undef
        await this.$axios.get(URL, config, progress).then((response) => {
          // eslint-disable-next-line no-console
          //  console.log(response.data)
          this.responseHttp = response.data
          this.chat = response.data.data
          this.totalRows = response.data.count
          this.items = this.chat
        })
        // eslint-disable-next-line no-console
        // console.log('result', res)
      } catch (err) {
        this.error = err + '. ' + err.response.data.data
      }
    },

    /*  onReady() {
      this.playerReady = true
    },
    play() {
      this.$refs.player.play()
    },
    pause() {
      this.$refs.player.pause()
    }, */
  },
}
</script>
<style>
video {
  width: 100%;
  height: auto;
}
</style>
