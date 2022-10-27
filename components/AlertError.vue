<template>
  <b-alert variant="danger" dismissible fade show>
    {{ message }}
  </b-alert>
</template>

<script>
export default {
  name: 'Notification',
  // eslint-disable-next-line vue/require-prop-types
  props: ['message'],
}
</script>
