<template>
  <div class="container" container-fluid main_container full-width>
    <br />
    <b-row>
      <b-col>
        <h1>HEFFI medias</h1>
      </b-col>
      <b-col>
        <img
          src="https://heffi.filmvia.com/Heffi_blue_logo-min.jpg"
          alt="filmvia"
          width="75px"
        />
      </b-col>
    </b-row>
    <br />
    <small>(click up / down arrows to sort data)</small>
    <b-table
      id="my-table"
      striped
      hover
      :items="items"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      sort-icon-left
      responsive="sm"
      :per-page="perPage"
      :current-page="currentPage"
      small
      @row-clicked="myRowClickHandler"
      ><template slot="actions" scope-scope="environment">
        <b-btn size="sm" @click="log(environment.item)">Details</b-btn>
      </template>
    </b-table>
    <!--  <div>
      Sorting By: <b>{{ sortBy }}</b
      >, Sort Direction:
      <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
    </div> -->
    <div>
      <AlertError v-if="error" :key="componentKey2" :message="error" />
    </div>
  </div>
</template>
<script>
import AlertError from '~/components/AlertError'
// import AlertSuccess from '~/components/AlertSuccess'

export default {
  components: {
    AlertError,
  },
  data() {
    return {
      sortBy: '',
      sortDesc: '',
      perPage: 100,
      totalRows: 0,
      currentPage: 1,
      page: 1,
      items: [],
      error: '',
      fields: [
        { key: 'title', sortable: true },
        { key: 'director', sortable: true },
        { key: 'genre', sortable: true },
        { key: 'country', sortable: true },
        { key: 'year_published', label: 'Year', sortable: true },
      ],
    }
  },
  computed: {
    // rows() {
    // return this.handlePageChange(1)
    // },
  },
  mounted() {
    return this.handlePageChange(1)
  },
  methods: {
    myRowClickHandler(record, index) {
      // 'record' will be the row data from items
      // `index` will be the visible row number (available in the v-model 'shownItems')
      // eslint-disable-next-line no-console
      //   console.log('record', record) // This will be the item data for the row

      this.$router.push({
        name: 'media-updatemedia',
        // params: { data: record },
        query: { media: record },
      })
    },
    async handlePageChange(value) {
      this.page = value
      // eslint-disable-next-line no-console
      // console.log('page', value)
      const progress = {
        onUploadProgress: (progressEvent) =>
          (this.progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          )),
      }
      const URL = '/media/getsorted/best/0'
      const config = {
        headers: {
          Authorization: this.$auth.strategy.token.get(),
          'Content-Type': 'application/json',
        },
      }
      // eslint-disable-next-line no-console
      // console.log('url', URL)
      try {
        // eslint-disable-next-line no-undef
        await this.$axios.get(URL, config, progress).then((response) => {
          // eslint-disable-next-line no-console
          // console.log(response)
          this.responseHttp = response.data
          this.items = response.data.data
          this.totalRows = response.data.count
        })
        // eslint-disable-next-line no-console
        // console.log('result', res)
      } catch (err) {
        this.error = err + '. ' + err.response.data.data
      }
    },
  },
}
</script>
