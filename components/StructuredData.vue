<template>
  <script type="application/ld+json" v-html="jsonld" />
</template>

<script>
export default {
 data () {
   return {
     jsonld: {
        "@context": "https://schema.org",
        "@type": "Person",
        email: "joaopedro0128@hotmail.com",
        givenName: "João",
        name: "João Pedro Prado Leal",
        description: this.$t('whoAmI.body')
     }
   }
 }
}
</script>

<style>

</style>