<template>
  <b-alert dismissible fade show>
    {{ message }}
  </b-alert>
</template>

<script>
export default {
  name: 'Success',
  // eslint-disable-next-line vue/require-prop-types
  props: ['message'],
}
</script>
