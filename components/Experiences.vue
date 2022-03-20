<template>
  <section class="body">
    <h3>{{ $t('experiences.title') }}</h3>
    <section v-for="experience in experiences" :key="experience.title">
      <h4>{{ experience.title }}</h4>
      <p>{{ experience.body }}</p>
    </section>
  </section>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  computed: {
    experiences() {
      return this.$t('experiences.body')
    },
  },
})
</script>

<style lang="scss" scoped>
section.body h4 {
  margin-bottom: 10px;
}
</style>
