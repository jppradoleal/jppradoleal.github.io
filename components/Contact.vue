<template>
  <section class="body">
    <h3>{{$t('contact.title')}}</h3>
    <section>
      <p>Github</p>
      <a href="https://github.com/jppradoleal">/jppradoleal</a>
    </section>
    <section>
      <p>Dev.to</p>
      <a href="https://dev.to/immurderer">/immurderer</a>
    </section>
    <section>
      <p>LinkedIN</p>
      <a href="https://linkedin.com/in/jppradoleal">/jppradoleal</a>
    </section>
    <section>
      <p>Discord</p>
      <a href="https://discord.com/users/263579320595906561">JPPrado#0582</a>
    </section>
    <section>
      <p>E-mail</p>
      <a href="mailto:joaopedro0128@hotmail.com">joaopedro0128@hotmail.com</a>
    </section>
  </section>
</template>

<style lang="scss" scoped>
  section.body {
    display: flex;
    flex-direction: column;
    gap: 8px;

    section {
      display: flex;
      margin-bottom: 0;
      justify-content: space-between;

      a:nth-child(2) {
        color: var(--green);
        cursor: pointer;
        transition: filter .2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
</style>