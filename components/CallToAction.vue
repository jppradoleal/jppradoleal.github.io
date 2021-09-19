<template>
  <main id="call-to-action">
    <section>
      <p>{{$t('callToAction.label')}}</p>
      <p class="tech">{{ tech }}</p>
    </section>
    <button>{{$t('callToAction.action')}}</button>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

const techs = [
  "Vue",
  "Javascript",
  "Typescript",
  "Java",
  "Spring",
  "Primefaces",
  "ReactJS",
  "Angular"
]

export default Vue.extend({
  data() {
    return {
      tech: techs[Math.floor(Math.random() * techs.length)]
    }
  },
})
</script>

<style lang="scss">
#call-to-action {
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    margin-top: 15px;
    padding: 15px 70px;

    border-radius: 5px;
    background: var(--green);
    font-weight: 700;
  }

  section {
    text-align: center;

    p {
      &:not(.tech) {
        font-size: 18px;
      }

      &.tech {
        font-size: 20px;
        font-weight: 700;
        color: var(--green);
      }
    }
  }
}
</style>