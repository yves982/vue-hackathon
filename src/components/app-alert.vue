<template>
    <div class="alert alert-warning" v-if="msg">{{ msg }}</div>
</template>
<style lang="scss">

</style>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['msg']
})
</script>
