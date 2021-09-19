<template>
  <nav>
    <section>
      <h1>João Pedro Prado Leal</h1>
      <h2>{{ $t('header.role') }}</h2>
    </section>
    <section class="tail-header">
      <p class="joke">{{ $t('header.joke') }}</p>

      <section class="language-dropdown">
        <p class="label-dropdown">Language</p>
        <ul class="content-dropdown">
          <a href="#">PT</a>
          <a href="#">EN</a>
        </ul>
      </section>
    </section>
  </nav>
</template>

<style lang="scss">
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

  .language-dropdown {
    position: relative;

    .label-dropdown {
      padding: 5px 25px;

      background: var(--green);
      border-radius: 5px;
      color: black;
    }

    .content-dropdown {
      visibility: hidden;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      width: 100%;

      color: black;
      background: var(--green);

      a {
        padding: 5px;
        background: var(--green);
        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
}
</style>