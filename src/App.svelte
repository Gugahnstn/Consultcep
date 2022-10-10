<script>
  import Header from "./lib/Header.svelte";
  import Hero from "./lib/Hero.svelte";
  import Main from "./lib/Main.svelte";
</script>

<div class="top_Line"><p>Para mais informações acesse o <a href="https://github.com/gugahnstn/consultcep">repositório</a></p></div>
<div class="container">
  <Header/>
  <Hero/>
  <Main/>
</div>

<style>
  .container {
    width: 1200px;
    margin: 0 auto;
  }

  .top_Line {
    background: radial-gradient(180.24% 202137.42% at 21.04% 48.84%, #3F3D56 0%, #55FF99 100%);
    font-family: var(--font-inter);
    padding: 0.5rem 2rem;
    text-align: center;
    color: #ffff;
  }

  .top_Line p a {
    font-weight: 700;
    color: #ffff;
  }
</style>