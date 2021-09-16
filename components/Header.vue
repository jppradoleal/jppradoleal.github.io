<template>
    <nav>
        <section>
            <h1>João Pedro Prado Leal</h1>
            <h2>Fullstack Developer</h2>
        </section>
        <p>Light theme attracts bugs!</p>
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

        p {
            filter: drop-shadow(0 0 1rem #ff0)
        }
    }
</style>