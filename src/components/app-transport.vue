<template>
    <div xl="1200" class="transport-container">
        <row>
            <column class="date-item" :sm="4">{{ transport.journee }}</column>
            <column class="nom-item" :sm="8">{{ transport.nom }}</column>
        </row>
        <app-adresse :adr="transport.depart"></app-adresse>
        <app-adresse :adr="transport.arrivee"></app-adresse>
    </div>
</template>

<style lang="scss">
</style>

<script lang="ts">
export default {
  props: ['transport']
}
</script>
