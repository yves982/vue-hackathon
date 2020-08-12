<template>
  <div class="row">
    <div class="col-xs-3 heure-item">{{ heureFmt }}</div>
      <div class="row">
        <div class="col-xs-12 adresse-r1-item" >{{ adr ? adr.Num : ''}} {{ adr ? adr.Nom : '' }}</div>
      </div>
      <div class="row">
        <div class="col-xs-12 adresse-r2-item">{{ adr && adr.Ville ? adr.Ville.CodePostal : '' }} {{ adr && adr.Ville ? adr.Ville.Nom : '' }}</div>
      </div>
  </div>
</template>
<style lang="scss">
</style>

<script lang="ts">
import DateUtils from '../utils/date.utils'
export default {
  props: ['adr'],
  computed: {
    heureFmt () {
      if (this.adr) {
        return DateUtils.formatHeure(this.adr.HeurePlanifiee)
      } else {
        return null
      }
    }
  }
}
</script>
