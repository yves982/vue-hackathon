<template>
  <row>
    <column class="heure-item" :sm="3">{{ heureFmt }}</column>
      <row>
        <column class="adresse-r1-item" :xm="12">{{ adr.num }} {{ adr.nom }}</column>
      </row>
      <row>
        <column class="adresse-r2-item" :xm="12">{{ adr.ville.codePostal }} {{ adr.ville.nom }}</column>
      </row>
    </row>
</template>
<style lang="scss">

</style>

<script lang="ts">
import DateUtils from '../utils/date.utils'
export default {
  props: ['adr'],
  computed: {
    heureFmt () {
      return DateUtils.format(this.adr.heurePlanifiee)
    }
  }
}
</script>
