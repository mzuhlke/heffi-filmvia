<template>
  <div>
    <section class="vueVideo">
      <div
        v-if="videoLoaded"
        v-video-player:myVideoPlayer="playerOptions"
        class="video-player-box"
        :playsinline="playsinline"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
        @loadeddata="onPlayerLoadeddata($event)"
        @waiting="onPlayerWaiting($event)"
        @playing="onPlayerPlaying($event)"
        @timeupdate="onPlayerTimeupdate($event)"
        @canplay="onPlayerCanplay($event)"
        @canplaythrough="onPlayerCanplaythrough($event)"
        @ready="playerReadied"
        @statechanged="playerStateChanged($event)"
      ></div>

      <br />
      <p><b>url</b> {{ playerOptions.sources[0].src }}</p>
    </section>
  </div>
</template>
<script>
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
export default {
  props: {
    src: {
      type: [String],
      default: '',
      //      required: true,
    },
  },
  data() {
    return {
      sorsa: String,
      videoLoaded: false,
      playerOptions: {
        height: '360',
        autoplay: false,
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: 'video/mp4',
            // mp4
            src: 'http://localhost:8888/download/01FTA9EAWAJH9A3VGFMKETCFKD.mp4',
            // webm
            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          },
        ],
        poster: '/img/image_placeholder.jpg',
      },
    }
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    },
  },
  watch: {
    src() {
      this.$emit('update:myProp', this.src)
      this.playerOptions.sources[0].src = this.src
      this.videoLoaded = true
    },
  },
  mounted() {
    /*    console.log('prpps mounted' + this.src)
      console.log(this.src)
      let src = String(this.src)
      let vm = this;

      vm.$nextTick(function () {
    //  this.playerOptions.sources[0].src =  vm.src)

          console.log('next ' + vm.src);
      })
      this.playerOptions.sources[0].src =  String(src)
      console.log('mikä source ' + this.playerOptions.sources[0].src)
  // dfasd

      this.videoLoaded = true
  */
  },
  created() {
    this.sorsa = this.src
    // eslint-disable-next-line no-console
    console.log('created called.')
    // eslint-disable-next-line no-console
    console.log('created sorca' + this.sorsa)
  },
  methods: {
    // monitor playback
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    // monitor pause
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    // stop listening
    onPlayerEnded(player) {
      // console.log('player ended!', player)
    },
    // monitor loading is complete
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    // monitor video buffer waiting
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    // Watch the video play after pause
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    // Monitor video playback duration update
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      // eslint-disable-next-line no-console
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    // monitor state changes
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // The monitor player is ready
    playerReadied(player) {
      // seek to 10s
      // eslint-disable-next-line no-console
      // console.log('example player 1 readied', player)
      player.currentTime(1)
      // console.log('example 01: the player is readied', player)
      // console.log('example 01: the player is readied', player)
    },
  },
}
</script>
<style lang="scss" scoped></style>
