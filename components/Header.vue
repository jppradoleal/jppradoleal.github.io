<template>
  <nav>
    <section>
      <h1>João Pedro Prado Leal</h1>
      <h2>{{ $t('header.role') }}</h2>
    </section>
    <section class="tail-header">
      <p class="joke">{{ $t('header.joke') }}</p>

      <section class="languages">
        <nuxt-link
          v-if="$i18n.locale !== 'pt-BR'"
          :to="switchLocalePath('pt-BR')"
          class="language-switcher"
          >Português</nuxt-link
        >
        <nuxt-link
          v-if="$i18n.locale !== 'en-US'"
          :to="switchLocalePath('en-US')"
          class="language-switcher"
          >English</nuxt-link
        >
      </section>
    </section>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 25px 50px;

  h1 {
    text-decoration: underline;
  }

  p.joke {
    filter: drop-shadow(0 0 1rem #ff0);
  }

  .tail-header {
    display: flex;
    flex-direction: row;
    gap: 32px;
  }

  .languages {
    .language-switcher {
      padding: 5px 25px;
      background: var(--green);
      color: black;
      border-radius: 5px;
      text-decoration: none;
    }
  }
}
</style>