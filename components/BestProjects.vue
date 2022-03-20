<template>
  <section class="body">
    <h3>{{ $t('bestProjects.title') }}</h3>
    <section v-for="project in projects" :key="project.title" class="project">
      <header>
        <h4>
          <a :href="project.deployed_url">{{ project.title }}</a>
        </h4>
      </header>
      <section class="project-body">
        <p>{{ project.description }}</p>
        <a :href="project.github_url">
          <img
            src="~/assets/images/github-brands.svg"
            width="32"
            height="32"
            alt="Neon green Github icon"
          />
        </a>
      </section>
    </section>
  </section>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  computed: {
    projects() {
      return this.$t('bestProjects.body')
    },
  },
})
</script>

<style lang="scss" scoped>
.project {
  h4 {
    color: var(--green);
  }

  .project-body {
    display: flex;
    justify-content: space-between;

    img {
      fill: var(--green);
    }
  }
}
</style>
