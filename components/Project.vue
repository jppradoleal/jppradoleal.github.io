<template>
  <section v-if="repo">
    <header>
      <h4>
        <a :href="repo.html_url">{{ repo.name }}</a>
      </h4>
      <span>⭐{{ repo.stargazers_count }}</span>
    </header>
    <p>{{ repo.description }}</p>
  </section>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    repo: {},
  },
})
</script>
