<template>
  <div class="row">
    <div class="col-xs-3 heure-item">{{ heureFmt }}</div>
    <div class="col-xs-9">
        <div class="row">
          <div class="col-xs-12 adresse-r1-item" >{{ nullOrEmpty(adr.Numero) }} {{ nullOrEmpty(adr.Prefixe) }} {{ nullOrEmpty(adr.Nom) }}</div>
        </div>
        <div class="row">
          <div class="col-xs-12 adresse-r2-item">{{ adr && adr.Ville ? adr.Ville.CodePostal : '' }} {{ adr && adr.Ville ? adr.Ville.Nom : '' }}</div>
        </div>
    </div>
    </div>
</template>
<style lang="scss">
  .heure-item {
    align-self:center;
  }
</style>

<script lang="ts">
import DateUtils from '../utils/date.utils'
import StringUtils from '../utils/string.utils'
export default {
  props: ['adr'],
  computed: {
    heureFmt (): string|null {
      if (this.adr) {
        return DateUtils.formatHeure(this.adr.HeurePlanifiee)
      } else {
        return null
      }
    }
  },
  methods: {
    nullOrEmpty (str: string): string {
      return StringUtils.nullOrEmpty(str)
    }
  }
}
</script>
