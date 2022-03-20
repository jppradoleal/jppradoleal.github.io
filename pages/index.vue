<template>
  <section>
    <Header />
    <CallToAction />
    <hr />
    <BestProjects />
    <WhoAmI />
    <Experiences />
    <Education />
    <SideProjects />
    <Contact />
  </section>
</template>

<script>
export default {
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
}
</script>

<style lang="scss">
hr {
  max-width: 70%;
  margin: 0 auto 20px;
  height: 4px;
  background: var(--green);
  border: none;
}

section.body {
  width: 50%;
  margin: 40px auto 20px;

  h3 {
    margin-bottom: 16px;
  }

  p {
    line-height: 1.5rem;
    word-spacing: 0.1rem;
  }

  section {
    margin-bottom: 1rem;

    header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
    }

    h4 {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
