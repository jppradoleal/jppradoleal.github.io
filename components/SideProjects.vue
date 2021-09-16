<template>
  <section class="body">
    <h3>Side Projects</h3>
    <section v-for="repo in repos" :key="repo.id">
      <header>
        <h4><a :href="repo.html_url">{{repo.name}}</a></h4>
        <span>⭐{{repo.stargazers_count}}</span>
      </header>
      <p>{{repo.description}}</p>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

interface IRepo {
    id: number,
    name: string,
    html_url: string,
    description: string,
    stargazers_count: number,
}

export default Vue.extend({
  data() {
    return {
      repos: [] as IRepo[]
    }
  },
  async fetch() {
    const response = await fetch('https://api.github.com/users/jppradoleal/repos')
      .then(res => res.json()) as IRepo[]

    this.repos = response.sort((a, b) => b.stargazers_count - a.stargazers_count).splice(0, 5)
  }
})
</script>