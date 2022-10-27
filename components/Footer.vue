<template>
  <div class="text-center">
    &copy; Copyrights 2021 - {{ year }}. All rights reserved.
    <a class="text-primary" href="https://filmvia.com">Filmvia.com</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>
