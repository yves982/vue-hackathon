<template>
    <div :xl="1200" class="transport-container">
        <div class="row">
            <div class="col-xs-4 date-item pull-left">{{ formatDateHR(transport.Journee) }}</div>
            <div class="col-xs-8 nom-item pull-right bold">{{ transport.Nom }}</div>
        </div>
        <app-adresse :adr="transport.Depart"></app-adresse>
        <app-adresse :adr="transport.Arrivee"></app-adresse>
    </div>
</template>

<style lang="scss">
</style>

<script lang="ts">
import AppAdresse from './app-adresse.vue'
import DateUtils from '@/utils/date.utils'
export default {
  props: ['transport'],
  components: {
    AppAdresse
  },
  methods: {
    formatDateHR (date: Date) {
      return DateUtils.formatHR(date)
    }
  }
}
</script>
