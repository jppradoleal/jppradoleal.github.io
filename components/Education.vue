<template>
  <section class="body">
    <h3>{{ $t('education.title') }}</h3>
    <section v-for="education in educations" :key="education.title">
      <h4>{{ education.title }}</h4>
      <p>{{ education.body }}</p>
    </section>
  </section>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  computed: {
    educations() {
      return this.$t('education.body')
    },
  },
})
</script>

<style lang="scss" scoped></style>
