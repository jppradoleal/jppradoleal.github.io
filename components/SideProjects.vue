<template>
  <section class="body">
    <h3>{{ $t('sideProjects.title') }}</h3>
    <project v-for="repo in repos" :key="repo.id" :repo="repo" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

interface IRepo {
  id: number
  name: string
  html_url: string
  description: string
  stargazers_count: number
  created_at: Date
}

export default Vue.extend({
  data() {
    return {
      repos: [] as IRepo[],
    }
  },
  async fetch() {
    const response = (await fetch(
      'https://api.github.com/users/jppradoleal/repos'
    ).then((res) => res.json())) as IRepo[]

    this.repos = response
      .sort((a, b) => {
        const dateA = new Date(a.created_at)
        const dateB = new Date(b.created_at)
        return dateB.getTime() - dateA.getTime()
      })
      .splice(0, 5)
  },
})
</script>
