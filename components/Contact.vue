<template>
  <section class="body">
    <h3>Onde me encontrar?</h3>
    <section>
      <p>Github</p>
      <a href="#">/jppradoleal</a>
    </section>
    <section>
      <p>Dev.to</p>
      <a href="#">/immurderer</a>
    </section>
    <section>
      <p>LinkedIN</p>
      <a href="#">/joao-pedro-prado-36532494</a>
    </section>
    <section>
      <p>Discord</p>
      <a href="#">JPPrado#0582</a>
    </section>
    <section>
      <p>E-mail</p>
      <a href="#">joaopedro0128@hotmail.com</a>
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