<template>
  <main id="call-to-action">
    <section>
      <p>{{ $t('callToAction.label') }}</p>
    </section>
    <a class="call-to-action-btn" href="mailto:joaopedro0128@hotmail.com">{{
      $t('callToAction.action')
    }}</a>
  </main>
</template>

<script>
const techs = [
  'Vue',
  'Javascript',
  'Typescript',
  'Java',
  'Spring',
  'Primefaces',
  'ReactJS',
  'Angular',
]
</script>

<style lang="scss">
#call-to-action {
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .call-to-action-btn {
    margin-top: 15px;
    padding: 15px 70px;
    color: black;
    font-size: 13px;
    text-decoration: none;

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
